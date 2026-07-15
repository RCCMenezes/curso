import fs from "node:fs/promises";
import { Workbook } from "@oai/artifact-tool";

const input = "C:/Users/User/Downloads/export (2).geojson";
const output = "C:/Users/User/Downloads/export (2).csv";
const columns = [
  "osm_id", "nome", "marca", "filial", "tipo_comercio", "amenidade",
  "morada_completa", "rua", "numero_porta", "codigo_postal", "cidade",
  "suburbio", "estado", "pais", "telefone", "email", "website", "horario",
  "entrega", "auto_checkout", "estacionamento", "acessibilidade_cadeira_rodas",
  "latitude", "longitude",
];

const first = (...values) => values.find(v => v !== undefined && v !== null && String(v).trim() !== "") ?? "";
const esc = value => {
  const s = value === null || value === undefined ? "" : String(value);
  return /[",\r\n]/.test(s) ? `"${s.replaceAll('"', '""')}"` : s;
};

const geojson = JSON.parse((await fs.readFile(input, "utf8")).replace(/^\uFEFF/, ""));
if (geojson.type !== "FeatureCollection" || !Array.isArray(geojson.features)) throw new Error("GeoJSON inválido.");

const rows = geojson.features.map(feature => {
  const p = feature.properties ?? {};
  const c = feature.geometry?.type === "Point" ? feature.geometry.coordinates : [];
  const longitude = Number.isFinite(Number(c?.[0])) ? Number(c[0]) : "";
  const latitude = Number.isFinite(Number(c?.[1])) ? Number(c[1]) : "";
  const rua = first(p["addr:street"], p["addr:street:es"], p["addr:street:ca"], p["addr:place"]);
  const numero = first(p["addr:housenumber"], p.nohousenumber === "yes" ? "s/n" : "");
  const morada = first(p["addr:full"], [rua, numero].filter(Boolean).join(" "));
  return {
    osm_id: first(p["@id"], feature.id), nome: first(p.name, p["name:es"], p["name:ca"], p.brand),
    marca: first(p.brand, p.operator), filial: first(p.branch, p["addr:housename"]),
    tipo_comercio: first(p.shop), amenidade: first(p.amenity), morada_completa: morada,
    rua, numero_porta: numero, codigo_postal: first(p["addr:postcode"]),
    cidade: first(p["addr:city"], p["addr:city:es"], p["addr:city:ca"], p["addr:town"]),
    suburbio: first(p["addr:suburb"]), estado: first(p["addr:state"]), pais: first(p["addr:country"]),
    telefone: first(p["contact:phone"], p.phone), email: first(p.email),
    website: first(p["brand:website"], p.website), horario: first(p.opening_hours),
    entrega: first(p.delivery), auto_checkout: first(p.self_checkout), estacionamento: first(p.parking),
    acessibilidade_cadeira_rodas: first(p.wheelchair), latitude, longitude,
  };
});

if (rows.some(r => r.latitude === "" || r.longitude === "")) throw new Error("Existem pontos sem coordenadas.");
const csv = `\uFEFF${[columns.join(","), ...rows.map(r => columns.map(c => esc(r[c])).join(","))].join("\r\n")}\r\n`;
await fs.writeFile(output, csv, "utf8");

const workbook = await Workbook.fromCSV(csv.replace(/^\uFEFF/, ""), { sheetName: "Dados" });
const values = workbook.worksheets.getItem("Dados").getUsedRange(true).values;
if (values.length !== rows.length + 1 || values[0].join("|") !== columns.join("|")) throw new Error("Falha de validação do CSV.");
console.log(JSON.stringify({ output, rows: rows.length, columns: columns.length }));
