# Data Science: dos dados à decisão e ao valor

## Objetivo da formação

Esta formação apresenta Data Science como uma capacidade organizacional — e não apenas como um conjunto de algoritmos. No final, os participantes deverão compreender:

- o que é Data Science e como se relaciona com Analytics, Machine Learning, Deep Learning e Inteligência Artificial;
- por que motivo um projeto de dados envolve negócio, tecnologia, pessoas, processos, risco e gestão;
- como funciona o ciclo de experimentação, desde a identificação do problema até à utilização de uma solução;
- que tipos de modelos existem e como são avaliados;
- o que mudou com os Large Language Models (LLMs), quais são os seus principais casos de uso e quais os cuidados necessários.

## Mensagem de abertura

> Data Science não começa nos dados nem termina num modelo. Começa numa decisão que queremos melhorar e termina quando uma solução é utilizada, produz um resultado mensurável e continua a funcionar de forma responsável.

Os dados, por si só, não geram valor. O valor surge quando a organização consegue transformar dados em conhecimento, conhecimento em decisões e decisões em ações. Por isso, Data Science é simultaneamente:

- uma disciplina técnica;
- um processo de experimentação;
- uma forma de resolver problemas;
- uma capacidade que atravessa toda a empresa.

---

## 1. O que é Data Science?

### Definição recomendada

**Data Science é uma disciplina interdisciplinar que combina conhecimento do negócio, dados, estatística, programação e métodos computacionais para compreender fenómenos, apoiar decisões, prever resultados e criar soluções baseadas em evidência.**

Esta definição contém cinco ideias importantes:

1. **É interdisciplinar.** Nenhuma pessoa ou área domina, isoladamente, todos os elementos necessários.
2. **Parte de um problema real.** Um modelo tecnicamente sofisticado sem utilidade para o negócio não é uma boa solução.
3. **Utiliza evidência.** As conclusões devem ser sustentadas por dados, pressupostos explícitos e métodos verificáveis.
4. **Pode explicar, prever ou recomendar.** Nem todos os projetos têm como objetivo fazer previsões.
5. **Tem de conduzir a uma utilização.** Um resultado que não entra numa decisão, num processo, num produto ou num serviço dificilmente gera valor.

### Os componentes essenciais

Uma forma simples de apresentar Data Science ao cliente é como a interseção entre:

- **Conhecimento do domínio:** compreender o contexto, os objetivos, as regras e as limitações do negócio;
- **Dados:** identificar, recolher, integrar, preparar e governar a informação relevante;
- **Estatística e matemática:** medir, testar hipóteses, estimar incerteza e distinguir relações reais de coincidências;
- **Computação e engenharia:** construir soluções reproduzíveis, escaláveis, seguras e integráveis;
- **Comunicação e visualização:** tornar os resultados compreensíveis e acionáveis;
- **Ética, privacidade e risco:** garantir uma utilização legal, justa, segura e responsável.

### Como interpretar a imagem fornecida

A imagem evidencia a ligação entre **Process Science** e **Data Science**, unidas por **Process Mining**.

- **Process Science** estuda como o trabalho é realmente executado: atividades, intervenientes, tempos, decisões, exceções e fluxos.
- **Data Science** procura padrões e conhecimento nos dados, recorrendo a estatística, Machine Learning, bases de dados, visualização e computação.
- **Process Mining** usa registos digitais de eventos para reconstruir e analisar processos reais. Permite comparar o processo executado com o processo previsto, descobrir variantes, localizar atrasos e identificar oportunidades de melhoria.

Mensagem para o cliente: **não basta prever o que vai acontecer; é necessário compreender em que processo a previsão será utilizada e que ação deverá desencadear.**

---

## 2. Data Science é um processo que envolve toda a empresa

Um projeto de Data Science raramente é apenas “um projeto da equipa de IT” ou “um projeto do cientista de dados”. Para ter sucesso, exige a participação coordenada de várias funções.

| Área | Contributo principal |
|---|---|
| Administração e liderança | Prioridades, patrocínio, investimento e tolerância ao risco |
| Negócio e especialistas do domínio | Problema, regras, contexto, validação e critérios de sucesso |
| Operações | Integração da solução no trabalho diário e gestão da mudança |
| Data owners e Data Governance | Qualidade, significado, acesso e responsabilidade pelos dados |
| Engenharia de dados e IT | Recolha, integração, infraestrutura, segurança e operação |
| Data Science | Experimentação, análise, modelação, avaliação e comunicação |
| Jurídico, compliance, risco e segurança | Privacidade, regulação, segurança, propriedade intelectual e controlo |
| Utilizadores finais | Usabilidade, confiança, feedback e adoção |

### Princípio fundamental

**A tecnologia pode ser desenvolvida por uma equipa especializada, mas a mudança pertence à organização.**

Muitos projetos falham não porque o algoritmo é fraco, mas porque:

- o problema não estava bem definido;
- os dados não representam corretamente a realidade;
- não existe uma ação associada ao resultado do modelo;
- a solução não se integra no processo de trabalho;
- os utilizadores não confiam na recomendação;
- não foram definidos responsáveis, controlos ou métricas;
- o contexto mudou e o modelo deixou de representar a realidade.

---

## 3. O ciclo de Data Science: um processo de experimentação

Data Science não é uma linha de montagem totalmente previsível. É um processo iterativo: formulamos hipóteses, testamos, aprendemos e ajustamos.

### Fase 1 — Enquadrar o problema e a decisão

Perguntas essenciais:

- Que decisão ou processo queremos melhorar?
- Quem irá utilizar o resultado?
- Que ação será tomada?
- Qual é o impacto esperado?
- Como mediremos o sucesso?
- Quais são os custos de um erro?

Exemplo fraco: “Queremos usar Inteligência Artificial.”  
Exemplo adequado: “Queremos identificar clientes com maior probabilidade de cancelar o serviço nos próximos 30 dias, para priorizar ações de retenção rentáveis.”

### Fase 2 — Compreender e obter os dados

Nesta fase são identificadas fontes, permissões, definições e limitações. Avaliam-se:

- cobertura e representatividade;
- qualidade, duplicados, valores em falta e incoerências;
- atualidade e frequência de atualização;
- enviesamentos históricos;
- privacidade, consentimento, segurança e finalidade de utilização.

**Dados abundantes não são necessariamente dados adequados.** A pergunta correta é: estes dados permitem responder ao problema de forma legítima e fiável?

### Fase 3 — Explorar, preparar e criar variáveis

A análise exploratória procura compreender distribuições, relações, exceções e possíveis problemas. A preparação pode incluir limpeza, integração, transformação e criação de variáveis relevantes.

Esta fase ocupa frequentemente uma parte significativa do trabalho porque os dados foram originalmente produzidos para operar o negócio, não necessariamente para treinar modelos.

### Fase 4 — Criar uma referência e experimentar modelos

Antes de procurar um modelo complexo, deve ser construída uma **baseline**, isto é, uma solução simples de referência. Pode ser uma regra atual, uma média histórica ou um modelo estatístico simples.

Depois são testadas alternativas. Cada experiência deve registar:

- hipótese;
- dados e versão utilizados;
- método e parâmetros;
- métricas;
- resultado;
- conclusão e próxima decisão.

### Fase 5 — Avaliar de forma técnica e empresarial

Um modelo não deve ser escolhido apenas por ter a melhor métrica técnica. A avaliação deve combinar:

- desempenho preditivo;
- impacto económico ou operacional;
- explicabilidade;
- robustez e estabilidade;
- equidade e risco de discriminação;
- latência, custo e escalabilidade;
- facilidade de integração e manutenção.

### Fase 6 — Pilotar e validar no mundo real

O piloto testa a solução em condições reais, com âmbito e risco controlados. Sempre que possível, compara-se o resultado com um grupo de controlo ou com o processo anterior.

Uma boa previsão não prova automaticamente um impacto causal. Por exemplo, prever quem vai cancelar não demonstra que um desconto impedirá o cancelamento. A intervenção também precisa de ser testada.

### Fase 7 — Implementar, adotar e operar

Colocar um modelo em produção implica integrá-lo num processo ou produto, definir responsáveis e preparar os utilizadores. A solução necessita de:

- regras de utilização;
- interfaces ou integrações;
- documentação;
- formação;
- controlo de acessos;
- mecanismos de fallback e intervenção humana;
- suporte operacional.

### Fase 8 — Monitorizar e melhorar continuamente

O ambiente muda: clientes, produtos, processos e padrões de comportamento evoluem. É necessário monitorizar:

- qualidade e alteração dos dados;
- desempenho do modelo;
- impacto no negócio;
- erros por segmento;
- custos, tempos de resposta e disponibilidade;
- incidentes e feedback dos utilizadores.

O fim de uma primeira implementação é o início de um novo ciclo de aprendizagem.

---

## 4. Analytics, Machine Learning, Deep Learning e IA

Estes conceitos estão relacionados, mas não são sinónimos.

### Analytics

Analytics utiliza dados para compreender e apoiar decisões. Pode ser apresentado em quatro níveis:

- **Descritivo — O que aconteceu?** Ex.: vendas por mês.
- **Diagnóstico — Porque aconteceu?** Ex.: causas da redução de vendas.
- **Preditivo — O que poderá acontecer?** Ex.: previsão da procura.
- **Prescritivo — O que devemos fazer?** Ex.: recomendação de níveis de stock.

### Inteligência Artificial

**Inteligência Artificial é o campo que procura criar sistemas capazes de executar tarefas normalmente associadas a capacidades humanas**, como interpretar linguagem, reconhecer imagens, aprender padrões, planear ou tomar decisões.

### Machine Learning

**Machine Learning é uma área da IA em que os sistemas aprendem padrões a partir de dados para realizar previsões, classificações, recomendações ou decisões, sem que todas as regras sejam programadas explicitamente.**

Não significa que a máquina “compreende” necessariamente o problema como uma pessoa. Significa que ajusta um modelo para produzir resultados úteis com base em exemplos ou sinais presentes nos dados.

### Deep Learning

**Deep Learning é uma subárea de Machine Learning baseada em redes neuronais com múltiplas camadas, capaz de aprender representações complexas a partir de grandes quantidades de dados.**

É particularmente eficaz em texto, imagem, áudio, vídeo e outros dados não estruturados. Em contrapartida, pode exigir mais dados, capacidade computacional, custo e mecanismos de controlo.

### Relação entre conceitos

```text
Inteligência Artificial
└── Machine Learning
    └── Deep Learning
        └── Muitos dos atuais modelos generativos e LLMs

Data Science atravessa estas áreas, mas também inclui
estatística, análise, engenharia, experimentação e conhecimento do negócio.
```

**Nota importante:** um projeto de Data Science não tem obrigatoriamente Machine Learning; e um problema de negócio não exige Deep Learning apenas por ser mais recente ou sofisticado.

---

## 5. Principais tipos de aprendizagem e modelos

### Aprendizagem supervisionada

O modelo aprende através de exemplos que incluem a resposta correta.

- **Classificação:** prevê uma categoria. Ex.: fraude/não fraude, churn/não churn.
- **Regressão:** prevê um valor numérico. Ex.: vendas, duração, custo ou procura.

Modelos comuns: regressão linear e logística, árvores de decisão, Random Forest, Gradient Boosting, Support Vector Machines e redes neuronais.

### Aprendizagem não supervisionada

Não existe uma resposta previamente indicada; o objetivo é descobrir estrutura nos dados.

- **Clustering:** agrupar clientes ou comportamentos semelhantes;
- **redução de dimensionalidade:** representar muitos atributos de forma mais compacta;
- **deteção de anomalias:** identificar situações invulgares.

### Aprendizagem por reforço

Um agente aprende através de interação, recebendo recompensas ou penalizações. É adequado a decisões sequenciais, como controlo, robótica, jogos ou otimização dinâmica, mas requer um ambiente e uma função de recompensa cuidadosamente definidos.

### Modelos generativos

Aprendem padrões dos dados para gerar novos conteúdos, como texto, imagem, áudio, vídeo ou código. Os LLMs são uma categoria de modelos generativos especializados em linguagem e sequências de tokens.

### Modelo simples ou complexo?

O melhor modelo não é necessariamente o mais complexo. É o que oferece o melhor equilíbrio entre:

- valor e desempenho;
- risco;
- explicabilidade;
- velocidade;
- custo;
- manutenção;
- adequação ao contexto.

**Começar simples cria uma referência, reduz risco e permite demonstrar rapidamente onde a complexidade adicional produz valor real.**

---

## 6. Como avaliar um modelo

### Classificação

- **Precisão (precision):** entre os casos classificados como positivos, quantos estavam corretos?
- **Sensibilidade/recall:** entre os positivos reais, quantos foram encontrados?
- **F1-score:** equilíbrio entre precision e recall;
- **ROC-AUC ou PR-AUC:** capacidade de separação em diferentes limiares;
- **matriz de confusão:** distribuição de verdadeiros e falsos positivos e negativos.

O contexto determina a métrica. Na deteção de doença ou fraude, não encontrar um caso pode ter um custo muito diferente de investigar um falso alarme.

### Regressão

- **MAE:** erro absoluto médio, fácil de interpretar;
- **RMSE:** penaliza mais os erros grandes;
- **R²:** proporção da variação explicada, devendo ser interpretada no contexto.

### Para qualquer modelo

É necessário separar dados de treino, validação e teste, evitar fuga de informação e avaliar segmentos relevantes. Um resultado médio aceitável pode esconder um desempenho muito fraco num grupo específico.

### Métricas de negócio

Além da métrica técnica, devem ser medidos resultados como:

- receita incremental;
- redução de custo ou tempo;
- perdas evitadas;
- aumento da taxa de conversão;
- melhoria de qualidade ou satisfação;
- redução de risco.

---

## 7. LLMs: o que são e o que mudou

### Definição

**Large Language Models são modelos de Deep Learning treinados com grandes volumes de texto e outros dados para aprender padrões da linguagem e gerar ou transformar conteúdos a partir de instruções.**

Na sua base, um LLM estima quais os tokens mais prováveis num determinado contexto. A escala, os dados de treino e os métodos de alinhamento permitem que esta operação suporte tarefas complexas, mas não garantem verdade, raciocínio perfeito ou conhecimento atualizado.

### Porque são relevantes

Os LLMs criaram uma interface de linguagem natural para trabalhar com informação e software. Um único modelo pode apoiar múltiplas tarefas, por exemplo:

- resumir e classificar documentos;
- extrair informação;
- responder a perguntas;
- traduzir e reformular conteúdos;
- apoiar programação;
- pesquisar conhecimento interno;
- criar assistentes para colaboradores ou clientes;
- automatizar partes de processos documentais.

### LLM não é uma base de dados nem um motor de verdade

Um LLM pode produzir uma resposta fluente e incorreta. Este fenómeno é frequentemente designado por **alucinação**. A confiança linguística da resposta não é uma medida de veracidade.

Por isso, aplicações empresariais combinam frequentemente o modelo com:

- **RAG (Retrieval-Augmented Generation):** pesquisa fontes autorizadas e fornece o conteúdo relevante ao modelo antes da resposta;
- **tool use/function calling:** permite ao modelo consultar sistemas ou executar ações controladas;
- **guardrails:** regras e validações de entrada e saída;
- **human-in-the-loop:** revisão ou aprovação humana em decisões relevantes;
- **avaliações sistemáticas:** conjuntos de testes, métricas e revisão de falhas.

### Demonstração: um CV pesquisável com RAG

O [CVchat](https://huggingface.co/spaces/Geoeasy/CVchat) é um exemplo prático de RAG aplicado a um documento. Em vez de percorrer manualmente um CV, o utilizador pode colocar perguntas em linguagem natural e receber respostas construídas a partir do seu conteúdo.

```text
CV / documento
      ↓
extração e divisão em fragmentos
      ↓
indexação para pesquisa semântica
      ↓
recuperação dos fragmentos relevantes
      ↓
LLM gera uma resposta com o contexto recuperado
```

Exemplos de perguntas para a demonstração:

- Que experiência profissional está relacionada com Data Science?
- Que competências técnicas são apresentadas?
- Resume o perfil profissional em três pontos.
- Que projetos demonstram experiência em dados ou geografia?

Mensagem pedagógica: **um documento pode tornar-se pesquisável e questionável através de linguagem natural.** O mesmo padrão pode ser aplicado a manuais, procedimentos, contratos, relatórios, documentação técnica ou bases de conhecimento.

Contudo, “qualquer documento” não significa “qualquer utilização”. É necessário assegurar permissões, privacidade, qualidade da extração, atualização do índice, controlo de acesso e validação das respostas. Idealmente, a aplicação deve apresentar as fontes ou os fragmentos que sustentam cada resposta.

### Prompting, RAG, fine-tuning e agentes

- **Prompting:** definir claramente tarefa, contexto, restrições e formato esperado.
- **RAG:** fundamentar a resposta em informação empresarial atual e rastreável.
- **Fine-tuning:** adaptar o comportamento do modelo com exemplos; é útil em situações específicas, mas não é a primeira solução para atualizar conhecimento factual.
- **Agentes:** sistemas em que o modelo planeia etapas e utiliza ferramentas para alcançar um objetivo. Quanto maior a autonomia, maiores devem ser os controlos, limites e capacidade de auditoria.

### Riscos a explicar ao cliente

- respostas factualmente incorretas;
- exposição de informação confidencial ou pessoal;
- prompt injection e utilização indevida de ferramentas;
- enviesamento e conteúdo inadequado;
- propriedade intelectual;
- custo e latência;
- dependência de fornecedor;
- falta de explicabilidade e consistência;
- automatização excessiva de decisões de elevado impacto.

### Critério para um bom caso de uso

Um bom caso de uso de LLM combina:

1. uma tarefa de linguagem frequente e relevante;
2. informação disponível e autorizada;
3. uma forma objetiva de avaliar qualidade;
4. tolerância ao erro compatível com os controlos existentes;
5. integração clara num processo;
6. benefício superior ao custo e ao risco.

---

## 8. Exemplo transversal: otimizar rotas com OR-Tools

1. **Problema:** reduzir distância, tempo e custo de uma operação de distribuição, mantendo o nível de serviço.
2. **Negócio:** define clientes, prioridades, horários, frota, capacidades, custos e regras operacionais.
3. **Dados:** localizações, matriz de tempos/distâncias, encomendas, janelas horárias, veículos, depósitos e tempos de serviço.
4. **Baseline:** comparar com as rotas manuais ou com uma heurística simples, como visitar sempre o ponto mais próximo.
5. **Modelo de otimização:** representar o problema como TSP ou VRP e utilizar o motor de restrições do Google OR-Tools.
6. **Função objetivo:** minimizar distância, tempo, custo ou uma combinação ponderada, podendo também equilibrar a carga entre veículos.
7. **Restrições:** capacidade, janelas temporais, turnos, pausas, competências, recolhas e entregas, ou visitas obrigatórias.
8. **Experimentação:** testar diferentes estratégias de pesquisa, limites de tempo, pesos e cenários operacionais.
9. **Processo:** enviar as rotas propostas para o sistema de despacho e permitir exceções justificadas pelo operador.
10. **Monitorização:** comparar planeado e realizado, quilómetros, atrasos, custo, utilização da frota e estabilidade das rotas.

Este exemplo demonstra que Data Science não se limita a prever. A **otimização prescritiva** recomenda a melhor ação possível dentro das regras conhecidas. O algoritmo é apenas uma peça: a qualidade da solução depende da formulação do problema, dos dados, das restrições, da integração operacional e da aprendizagem contínua.

### Arquitetura técnica do fluxo de rotas

> **O cálculo de rotas não necessita, por definição, de Inteligência Artificial.** Neste exemplo, o núcleo da solução pertence à Investigação Operacional: modelação matemática, otimização combinatória, algoritmos de pesquisa e heurísticas. Machine Learning ou IA só são acrescentados quando existe uma componente que precisa de ser aprendida a partir de dados, como prever tempos de viagem, procura, atrasos ou duração das paragens.

```text
Localizações → OSRM Table → OR-Tools (Python) → OSRM Route → QGIS / Leaflet
                   matriz          sequência          geometria      visualização
```

- **OSRM Table Service:** recebe coordenadas e calcula a matriz origem–destino de tempos e/ou distâncias pela rede viária.
- **OR-Tools em Python:** utiliza a matriz, a frota, as procuras e as restrições para decidir que veículo visita cada ponto e em que sequência.
- **OSRM Route Service:** recebe a sequência já otimizada e calcula o trajeto rodoviário correspondente, devolvendo a geometria final.
- **QGIS:** permite exploração geográfica, validação, análise espacial e produção cartográfica.
- **Leaflet:** permite publicar uma aplicação web interativa para consultar as rotas num browser.

**Distinção essencial:** o OSRM não otimiza a frota e o OR-Tools não desenha, por si só, a geometria real sobre as estradas. Cada componente resolve uma parte específica do processo.

### Onde a IA pode entrar — opcionalmente

- prever o tempo de viagem em condições futuras;
- estimar procura, volumes ou duração de serviço;
- antecipar atrasos e risco de incumprimento;
- interpretar pedidos ou restrições descritos em linguagem natural;
- apoiar reotimização perante acontecimentos não planeados.

Estas previsões podem alimentar o modelo de otimização, mas não substituem a formulação do problema, a função objetivo ou as restrições.

---

## 9. Como iniciar Data Science numa organização

### Perguntas de diagnóstico

- Quais são as decisões mais frequentes, dispendiosas ou críticas?
- Onde existem atrasos, desperdício, risco ou variabilidade?
- Que dados existem e quem é responsável por eles?
- Que casos de uso permitem aprender com risco controlado?
- Quem utilizará a solução e como mudará o seu trabalho?
- Que requisitos legais, éticos e de segurança se aplicam?
- Que resultado poderá ser medido num horizonte realista?

### Priorização de casos de uso

Avaliar cada iniciativa segundo quatro dimensões:

- **valor potencial**;
- **viabilidade de dados e tecnologia**;
- **risco e complexidade**;
- **capacidade de adoção.**

O primeiro projeto deve ser suficientemente relevante para demonstrar valor, mas delimitado o bastante para permitir experimentação rápida, aprendizagem e controlo.

### Maturidade organizacional

Uma organização evolui tipicamente de relatórios descritivos para análises mais avançadas, automação e produtos de dados. No entanto, esta evolução não é apenas tecnológica. Exige:

- dados com significado e qualidade;
- responsabilidades claras;
- competências e colaboração;
- processos de experimentação;
- plataformas e práticas de engenharia;
- governação de modelos e IA;
- cultura de decisão baseada em evidência.

---

## 10. Ideias erradas a corrigir durante a formação

**“Quanto mais dados, melhor.”**  
Qualidade, relevância e representatividade são mais importantes do que volume isolado.

**“O modelo mais sofisticado é o melhor.”**  
O melhor modelo é o que resolve o problema com um nível adequado de desempenho, risco, custo e explicabilidade.

**“Se a precisão é elevada, o projeto terá sucesso.”**  
Uma boa métrica técnica não garante impacto, adoção ou retorno.

**“A IA elimina a necessidade de pessoas.”**  
Na maioria dos contextos empresariais, a IA redistribui tarefas e exige supervisão, novas competências e desenho de processos.

**“Um LLM sabe e compreende tudo o que escreve.”**  
Um LLM gera respostas prováveis; deve ser fundamentado, avaliado e controlado.

**“Depois de entrar em produção, o projeto terminou.”**  
Dados, comportamento e contexto mudam; a monitorização é parte do produto.

---

## 11. Estrutura sugerida para uma sessão de 90 minutos

| Tempo | Tema | Dinâmica |
|---:|---|---|
| 0–10 min | Porque Data Science é uma capacidade empresarial | Exemplo de decisão real |
| 10–25 min | Definições e relação entre conceitos | Mapa IA–ML–DL–LLM |
| 25–45 min | Ciclo de experimentação | Percorrer um caso de uso |
| 45–60 min | Tipos de modelos e avaliação | Exemplos de erros e métricas |
| 60–75 min | LLMs, RAG, agentes e riscos | Demonstração ou cenário |
| 75–85 min | Como começar na organização | Exercício de priorização |
| 85–90 min | Síntese e perguntas | Três mensagens finais |

### Exercício recomendado

Pedir aos participantes que escolham uma decisão ou processo da empresa e respondam:

1. Qual é a decisão a melhorar?
2. Quem decide e que ação pode executar?
3. Que dados seriam necessários?
4. Como mediríamos o resultado?
5. Qual seria o risco de uma resposta errada?

O exercício desloca a conversa da tecnologia para o valor e evidencia a necessidade de colaboração entre áreas.

---

## 12. Encerramento: três mensagens a reter

1. **Data Science é uma disciplina de resolução de problemas e decisão baseada em evidência, não uma coleção de algoritmos.**
2. **O valor nasce da combinação entre pessoas, dados, modelos e processos; por isso, toda a organização participa.**
3. **Machine Learning, Deep Learning e LLMs ampliam o que é possível fazer, mas exigem experimentação, avaliação, governação e responsabilidade.**

### Frase final

> O objetivo não é ter mais modelos. É tomar melhores decisões, melhorar processos e criar valor de forma mensurável, sustentável e responsável.
