import fs from "node:fs/promises";
import path from "node:path";
import { Workbook } from "@oai/artifact-tool";

const jobs = [
  { chain: "Alcampo", input: "E:/borges/-geomarketing-platform-main/alcampo.geojson", output: "E:/borges/-geomarketing-platform-main/alcampo.csv" },
  { chain: "Dia", input: "E:/borges/-geomarketing-platform-main/dia.geojson", output: "E:/borges/-geomarketing-platform-main/dia.csv" },
];

const columns = [
  "cadeia", "osm_id", "nome", "marca", "filial", "tipo_comercio",
  "morada_completa", "rua", "numero_porta", "codigo_postal", "cidade",
  "telefone", "email", "website", "horario", "acessibilidade_cadeira_rodas",
  "latitude", "longitude",
];

const first = (...values) => values.find(v => v !== undefined && v !== null && String(v).trim() !== "") ?? "";
const normalizePhone = p => Array.isArray(p) ? p.join("; ") : (p ?? "");
const escapeCsv = value => {
  const s = value === null || value === undefined ? "" : String(value);
  return /[",\r\n]/.test(s) ? `"${s.replaceAll('"', '""')}"` : s;
};

function toRow(feature, chain) {
  const p = feature.properties ?? {};
  const coordinates = feature.geometry?.type === "Point" ? feature.geometry.coordinates : [];
  const longitude = Number.isFinite(Number(coordinates?.[0])) ? Number(coordinates[0]) : "";
  const latitude = Number.isFinite(Number(coordinates?.[1])) ? Number(coordinates[1]) : "";
  const street = first(p["addr:street"], p["addr:place"]);
  const number = first(p["addr:housenumber"], p.nohousenumber === "yes" ? "s/n" : "");
  const generatedAddress = [street, number].filter(Boolean).join(" ");
  const phone = first(p["contact:phone"], p["operator:phone"], p.phone);
  const website = first(p["contact:website"], p["brand:website"], p.website);

  return {
    cadeia: chain,
    osm_id: first(p["@id"], feature.id),
    nome: first(p.name, p["name:es"], p.brand, chain),
    marca: first(p.brand, p.operator, chain),
    filial: first(p.branch, p["addr:housename"]),
    tipo_comercio: first(p.shop, p.building),
    morada_completa: first(p["addr:full"], generatedAddress),
    rua: street,
    numero_porta: number,
    codigo_postal: first(p["addr:postcode"]),
    cidade: first(p["addr:city"]),
    telefone: normalizePhone(phone),
    email: first(p.email),
    website,
    horario: first(p.opening_hours),
    acessibilidade_cadeira_rodas: first(p.wheelchair),
    latitude,
    longitude,
  };
}

for (const job of jobs) {
  const raw = await fs.readFile(job.input, "utf8");
  const geojson = JSON.parse(raw.replace(/^\uFEFF/, ""));
  if (geojson.type !== "FeatureCollection" || !Array.isArray(geojson.features)) {
    throw new Error(`${path.basename(job.input)} não é uma FeatureCollection válida.`);
  }

  const rows = geojson.features.map(f => toRow(f, job.chain));
  const csvLines = [columns.join(","), ...rows.map(row => columns.map(c => escapeCsv(row[c])).join(","))];
  const csvText = `\uFEFF${csvLines.join("\r\n")}\r\n`;
  await fs.writeFile(job.output, csvText, "utf8");

  // Validação tabular: reimporta o CSV final e confirma dimensões e cabeçalhos.
  const workbook = await Workbook.fromCSV(csvText.replace(/^\uFEFF/, ""), { sheetName: job.chain });
  const sheet = workbook.worksheets.getItem(job.chain);
  const used = sheet.getUsedRange(true);
  const values = used.values;
  if (values.length !== rows.length + 1 || values[0].join("|") !== columns.join("|")) {
    throw new Error(`Falha de validação em ${path.basename(job.output)}.`);
  }
  if (rows.some(r => r.latitude === "" || r.longitude === "")) {
    throw new Error(`Existem geometrias sem coordenadas em ${path.basename(job.input)}.`);
  }

  console.log(JSON.stringify({ output: job.output, rows: rows.length, columns: columns.length }));
}
