# BRIEF DE CONSTRUÇÃO — Landing Page KronosFit
**Para:** agente de design/build
**Entregável:** uma única landing page, one-page, mobile-first, com âncoras internas.
**Idioma de toda a interface:** Português do Brasil.

---

## 0. REGRAS DE EXECUÇÃO (leia antes de qualquer coisa)

**FAÇA:**
- Use a copy **literalmente como escrita** neste brief. Ela é final e aprovada.
- Use **somente** as cores e fontes da Seção 2. Nenhuma cor fora da paleta.
- Construa na ordem S1 → S14. A ordem das seções é parte da estratégia de conversão e **não pode ser alterada**.
- Use os arquivos de imagem conforme o manifesto da Seção 3.
- Deixe os tokens `{{ }}` visíveis na tela como estão. Eles serão preenchidos depois.

**NÃO FAÇA:**
- ❌ Não invente preços, números de vendas, quantidade de avaliações, estoque ou datas de contador.
- ❌ Não escreva depoimentos fictícios. Onde houver depoimento, construa o **card vazio** com a estrutura e um rótulo `{{DEPOIMENTO_1}}`.
- ❌ Não use fotos de pessoas de banco de imagens. Só as imagens fornecidas.
- ❌ Não use Lorem ipsum em lugar nenhum.
- ❌ Não adicione seções, menu de navegação completo, blog, newsletter ou qualquer link que tire o usuário da página.
- ❌ Não reescreva, "melhore" ou suavize a copy fornecida.
- ❌ Não coloque texto crítico dentro de imagem. Todo texto é HTML.

---

## 1. O QUE ESTAMOS CONSTRUINDO

**Produto:** Kronos Fit Metabolic — suplemento alimentar em cápsulas, 90 cápsulas, 550mg. Fabricante: Pharma Vitta Scientific Labs.

**Objetivo único da página:** levar o visitante até a seção de kits (`#kits`) e ao clique de compra. Todo CTA aponta para lá.

**Posicionamento em uma frase:** termogênico de elite com energia limpa — queima e foco sem tremedeira, sem crash e sem perder músculo. O inimigo declarado é o termogênico barato de cafeína pura.

**Estética-alvo:** performance atlética / tecnológico / "HUD". Preto profundo, faíscas e brasa, chanfros em 45°, tipografia condensada pesada, glow ocre. Confiante e masculino, mas não excludente — mulheres são público.

**Dispositivo primário:** mobile (375px). Desenhe o mobile primeiro; o desktop é a adaptação.

---

## 2. DESIGN TOKENS

### 2.1 Cores (paleta fechada — nada além disto)
```
--branco:        #FFFFFF   /* fundos claros, texto sobre preto */
--preto:         #0B0B0B   /* fundos escuros */
--preto-puro:    #000000   /* vinhetas, sombras */
--grafite:       #1A1A1A   /* texto corrido sobre branco */
--ocre:          #C87F2E   /* cor de marca: ícones, bordas, destaques */
--ocre-claro:    #E8A33D   /* início do gradiente, hover */
--vermelho:      #B3200F   /* fim do gradiente, urgência */
--cinza-nevoa:   #F4F4F4   /* fundos claros alternados, cards */
--cinza-linha:   #D9D9D9   /* divisórias */

--gradiente: linear-gradient(135deg, #E8A33D 0%, #C87F2E 45%, #B3200F 100%);
```

**Regra rígida de contraste:** ocre sobre branco tem contraste baixo. Sobre fundo branco, use ocre **apenas** em números grandes, ícones e títulos ≥24px em bold. Texto corrido sobre branco é sempre `--grafite`. Sobre preto, ocre pode tudo.

**Ritmo de fundo das seções (obrigatório, nesta ordem):**
`S1 preto · S2 branco · S3 preto · S4 branco · S5 preto · S6 branco · S7 preto · S8 branco · S9 preto · S10 branco · S11 preto · S12 branco · S13 preto · S14 preto`

### 2.2 Tipografia
| Papel | Fonte | Peso | Tratamento |
|---|---|---|---|
| H1, H2 | Anton | 400 | UPPERCASE, line-height 0,95, itálico só na palavra de destaque |
| H3, labels, botões | Barlow Condensed | 700 | UPPERCASE, letter-spacing +2% |
| Corpo | Inter | 400 / 600 | line-height 1,6 |
| Preços e números | Anton | 400 | ocre ou gradiente |

**Escala (mobile → desktop):**
`H1 40px → 72px · H2 32px → 52px · H3 20px → 24px · Corpo 16px → 18px · Micro 13px → 14px`

### 2.3 Espaçamento, formas e movimento
- Escala de espaço: `8 / 16 / 24 / 40 / 64 / 96 px`. Padding vertical de seção: 64px mobile, 96px desktop.
- Raio: 8px em botões e cards padrão.
- **Chanfro:** cards de destaque têm dois cantos opostos cortados em 45° (~16px) — é a assinatura visual da marca. Use `clip-path`.
- Borda de card escuro: 1px `--ocre` a 40% de opacidade. Glow: `box-shadow: 0 0 40px rgba(200,127,46,0.25)`.
- Movimento: apenas fade-in + subida de 16px na entrada da seção. Nada de parallax, nada de animação contínua.

### 2.4 Componentes (crie uma vez, reutilize)
- **BOTÃO PRIMÁRIO:** fundo `--gradiente`, texto branco uppercase Barlow Condensed 700, ícone `→`, raio 8px, altura 56px, **largura 100% no mobile**, sombra ocre. Hover: brilho +8%.
- **BOTÃO SECUNDÁRIO:** transparente, borda 2px ocre, texto ocre.
- **CARD CHANFRADO:** fundo preto ou branco, borda ocre, cantos 45°.
- **SELO DE CONFIANÇA:** ícone ocre 24px + label condensado.
- **CTA STICKY MOBILE:** barra fixa no rodapé, aparece após 30% de scroll (Seção S15).

---

## 3. MANIFESTO DE IMAGENS

| Arquivo | O que é | Onde usar | Tratamento |
|---|---|---|---|
| `mockup_2_kronos.png` | Pote em pé, fechado, rótulo frontal | **S1 (hero)** e S9 (cards de kit) | **Remover o fundo.** Adicionar glow ocre atrás. É o LCP — exportar WebP ≤120kb |
| `mockup_1_kronos.png` | Pote deitado, aberto, cápsulas espalhadas | **S4** (Como atua) | Remover o fundo |
| Criativo "TREINE POR DOIS" (atleta no agachamento) | Peça de alto impacto emocional | **S5**, como banner de largura total | Usar como imagem de fundo com overlay preto 50%; **a copy sobre ela deve ser reescrita em HTML**, não usar o texto embutido |
| Criativo "COMO USAR SEU METABOLIC" (1:1) | Infográfico do protocolo | **S8**, versão desktop | Ao lado, replicar o conteúdo em HTML (ver S8) |
| Criativo "COMO USAR SEU METABOLIC" (9:16) | Mesmo infográfico, vertical | **S8**, versão mobile | Idem |
| Criativo "O PROTOCOLO KRONOS FIT: RESULTADO DE ELITE" | Fundo preto com brasa e HUD | **S1**, apenas como **textura de fundo** do hero (overlay 60%) | ⚠️ Não usar o texto da peça. Só a textura |
| Logo circular KRONOS FIT (K em metal, anel de fogo) | Logo | Header e S14 | Sobre fundo preto. Precisa de versão SVG |

⚠️ Os criativos de Instagram servem como **referência de estilo e textura**. O texto deles nunca substitui HTML.

---

## 4. TOKENS A NÃO PREENCHER

Renderize estes literalmente na tela. Serão substituídos depois pelo cliente.

```
{{PRECO_KIT_1}} {{PRECO_KIT_1_DE}} {{PARCELA_KIT_1}} {{POR_POTE_1}}
{{PRECO_KIT_2}} {{PRECO_KIT_2_DE}} {{PARCELA_KIT_2}} {{POR_POTE_2}} {{ECONOMIA_2}}
{{PRECO_KIT_3}} {{PRECO_KIT_3_DE}} {{PARCELA_KIT_3}} {{POR_POTE_3}} {{ECONOMIA_3}}
{{LINK_CHECKOUT_1}} {{LINK_CHECKOUT_2}} {{LINK_CHECKOUT_3}}
{{CONTADOR_FIM_OFERTA}}   ← data/hora real da campanha
{{POTES_VENDIDOS}} {{TOTAL_CLIENTES}} {{NOTA_MEDIA}}
{{DEPOIMENTO_1}} ... {{DEPOIMENTO_6}}
{{NUM_ANVISA}} {{CNPJ}} {{WHATSAPP}} {{EMAIL}}
```

---

## 5. BLUEPRINT — SEÇÃO A SEÇÃO

> Copy entre aspas = literal, use exatamente assim.

---

### S0 — TOP BAR (sticky, topo)
Fundo `--gradiente`, altura 40px, texto branco 13px condensado, centralizado.

> `FRETE GRÁTIS ACIMA DE 2 POTES · A OFERTA TERMINA EM [contador]`

Contador em `{{CONTADOR_FIM_OFERTA}}` — formato `00d 00h 00m 00s`.

---

### S0.1 — HEADER
Minimalista, transparente sobre o hero, vira sólido preto ao rolar.
`[Logo Kronos Fit — 40px]` ................. `[BOTÃO SECUNDÁRIO: COMPRAR]`
**Sem menu de navegação.**

---

### S1 — HERO `#topo`
Fundo: textura de brasa/HUD com overlay preto 60%. Duas colunas no desktop (texto 55% / pote 45%), empilhado no mobile com o texto primeiro.

- Eyebrow (Barlow Condensed, ocre, letter-spacing alto):
  > `O PROTOCOLO KRONOS FIT`
- **H1** (Anton, branco, "SEM PERDER MÚSCULO" em ocre):
  > `QUEIME GORDURA SEM PERDER MÚSCULO. SEM TREMEDEIRA. SEM CRASH.`
- Subtítulo (Inter, branco 80%, máx. 2 linhas):
  > `Fórmula avançada em 90 cápsulas que apoia o metabolismo, sustenta a disposição e entrega foco constante — sem os efeitos colaterais dos termogênicos comuns.`
- Três bullets em linha (ícone ocre + label condensado):
  > `QUEIMA INTELIGENTE` · `ENERGIA CONSTANTE` · `FOCO E DISPOSIÇÃO`
- **BOTÃO PRIMÁRIO** → `#kits`:
  > `QUERO MEU PROTOCOLO 90`
- Microcopy abaixo do botão (13px, cinza):
  > `Envio em 24h · Garantia de 30 dias · Pagamento seguro`
- Imagem: `mockup_2_kronos` sem fundo, com glow ocre.

---

### S2 — BARRA DE AUTORIDADE
Faixa branca fina, borda superior ocre 2px. 4 selos em linha (2×2 no mobile), ícone ocre + texto:

> `REGULARIZADO ANVISA` · `PHARMA VITTA SCIENTIFIC LABS` · `MATÉRIA-PRIMA IMPORTADA COM LAUDO` · `GARANTIA DE 30 DIAS`

---

### S3 — DOR `#identificacao`
Fundo preto. **H2** (branco, "SE IDENTIFICA" em ocre):
> `VOCÊ SE IDENTIFICA COM ALGUM DESSES CENÁRIOS?`

5 cards chanfrados (grid 2 col desktop / 1 col mobile; o 5º ocupa a linha inteira). Cada card: ícone de alerta ocre + H3 + parágrafo.

1. **`O "EFEITO MURCHO" AO PERDER PESO`**
   `O peso cai na balança, mas o espelho mostra flacidez e a perda da densidade muscular que custou anos para construir.`
2. **`TREMEDEIRA COM TERMOGÊNICO BARATO`**
   `Taquicardia, suor frio, oscilação de humor e aquele desânimo absurdo — o famoso crash — poucas horas depois.`
3. **`A GORDURA TEIMOSA QUE NÃO SAI`**
   `Treino pesado, dieta em dia, e a camada abdominal e nos flancos continua escondendo a definição do seu shape.`
4. **`A SABOTAGEM DO DOCE AO ANOITECER`**
   `Foco o dia inteiro e derrota ao anoitecer: uma vontade incontrolável de açúcar destrói o déficit da semana.`
5. **`SEM ENERGIA PARA TREINAR DEPOIS DO TRABALHO`**
   `Corpo fadigado, mente desligada, pesos arrastados — sem a intensidade necessária para evoluir.`

Fecho da seção (texto centralizado, ocre, com seta ↓):
> `Existe um motivo técnico para isso. E uma correção.`

---

### S4 — COMO ATUA `#como-funciona`
Fundo branco. Duas colunas: texto (60%) / `mockup_1_kronos` (40%).

**H2:** `COMO O KRONOS FIT METABOLIC ATUA?`

Parágrafo de abertura (destacado, 18px, borda-esquerda ocre 3px):
> `O Kronos Fit Metabolic é um suplemento alimentar em cápsulas desenvolvido para apoiar o metabolismo, a disposição e a definição corporal em rotinas de treino intenso. A fórmula combina ativos de ação sinérgica em três frentes — energia e foco cognitivo, mobilização de gordura como fonte de energia e sustentação da rotina de força — entregando constância onde os termogênicos comuns falham.`

Grid de 10 itens (2 colunas, ✔️ em ocre, Barlow Condensed 700):
```
✔️ APOIO AO METABOLISMO ENERGÉTICO
✔️ ENERGIA EXTREMA SEM TREMORES
✔️ FOCO E CONCENTRAÇÃO COGNITIVA
✔️ DISPOSIÇÃO PARA TREINOS INTENSOS
✔️ ENERGIA CONSTANTE, SEM CRASH
✔️ AUXÍLIO NA SENSAÇÃO DE SACIEDADE
✔️ SUPORTE AO METABOLISMO DE GORDURAS
✔️ COMPLEMENTO DE TREINOS DE FORÇA
✔️ SUPORTE À ROTINA DE DEFINIÇÃO
✔️ PROTOCOLO DE 90 DIAS
```
**BOTÃO SECUNDÁRIO:** `VER OS KITS DISPONÍVEIS` → `#kits`

---

### S5 — OS 3 PILARES `#mecanismo`
Fundo: criativo "TREINE POR DOIS" como background, overlay preto 55%.

**H2** (branco, "NÃO É MAIS UM" em ocre):
> `POR QUE O METABOLIC NÃO É MAIS UM TERMOGÊNICO`

3 cards chanfrados escuros, numerados `01 / 02 / 03` em Anton ocre gigante:

- **01 — `ENERGIA LIMPA`**
  `A L-Teanina neutraliza os efeitos colaterais da cafeína. Foco sustentado, sem ansiedade, sem tremor, sem crash.`
- **02 — `QUEIMA COM TRANSPORTE ATIVO`**
  `Não basta acelerar. A gordura mobilizada precisa ser transportada e usada como energia — é essa rota que o protocolo trabalha.`
- **03 — `SEM O EFEITO MURCHO`**
  `Definição com densidade. O objetivo é secar sustentando a massa que você construiu no treino.`

---

### S6 — COMPARATIVO `#comparativo`
Fundo branco. **H2:** `KRONOS FIT METABOLIC × TERMOGÊNICO COMUM`

**Tabela HTML real** (não imagem). Coluna Kronos com fundo ocre 8% e borda ocre; coluna "comum" em cinza. ✔ verde-ocre vs ✕ cinza. No mobile, vira card comparativo empilhado.

| CRITÉRIO | KRONOS FIT METABOLIC | TERMOGÊNICO COMUM |
|---|---|---|
| Base da fórmula | Sinergia de ativos + L-Teanina | Dose massiva de cafeína |
| Tremedeira / taquicardia | ✕ Não | ✔ Frequente |
| Efeito "crash" | ✕ Não | ✔ Comum |
| Foco cognitivo | ✔ Sustentado | ✕ Instável |
| Massa magra | ✔ Foco em sustentação | ✕ Não é preocupação |
| Protocolo definido | ✔ 90 cápsulas | ✕ Genérico |
| Laboratório | ✔ Pharma Vitta Scientific Labs | ✕ Variável |

---

### S7 — PROVA SOCIAL `#depoimentos`
Fundo preto. **H2:** `QUEM JÁ ESTÁ NO PROTOCOLO`

**Faixa de 3 contadores** (Anton, ocre, animam ao entrar na tela):
`{{POTES_VENDIDOS}}` POTES VENDIDOS · `{{TOTAL_CLIENTES}}` CLIENTES · `{{NOTA_MEDIA}}` ★ AVALIAÇÃO MÉDIA

**Grade de depoimentos** — construa 6 cards **vazios e estruturados**, cada um com: área de foto circular (placeholder), nome, idade/cidade, 5 estrelas ocre, e o texto marcado como `{{DEPOIMENTO_N}}`. Layout: carrossel no mobile, grid 3×2 no desktop.
Reserve também um bloco de **3 thumbnails de vídeo** (proporção 9:16, botão de play ocre) marcados `{{VIDEO_1..3}}`.

**Não escreva nenhum depoimento.**

**BOTÃO PRIMÁRIO:** `QUERO ENTRAR NO PROTOCOLO`

---

### S8 — O PROTOCOLO `#protocolo`
Fundo branco. Duas colunas: infográfico "COMO USAR SEU METABOLIC" (1:1 desktop / 9:16 mobile) à direita, **conteúdo em HTML à esquerda** (obrigatório — o texto não pode existir só na imagem).

**H2:** `COMO USAR SEU METABOLIC`

Lista com ícones ocre, números destacados em Anton:
- **TREINO:** `3 cápsulas 30 min antes.`
- **OFF:** `2 no café da manhã + 1 após o almoço.`
- **LIMITE:** `Consumir até as 16h (foco no sono).`
- **ÁGUA:** `3L/dia para o transporte da queima.`
- **PROTEÍNA:** `Essencial para sustentar o músculo.`
- **CONSTÂNCIA:** `Efeito cumulativo. Não pule nenhum dia.`

Faixa de fechamento (gradiente):
> `PROTOCOLO | 90 CÁPSULAS`

---

### S9 — KITS `#kits` ⭐ SEÇÃO MAIS IMPORTANTE
Fundo preto com glow ocre radial ao centro.

**H2:** `ESCOLHA SEU PROTOCOLO`
Acima dos cards, faixa de urgência:
> `A oferta com frete grátis termina em [contador]`

**3 cards.** O card 2 é o alvo: escala 1,05, borda ocre sólida, glow forte, selo `MAIS VENDIDO` no topo em gradiente. Os cards 1 e 3 são visualmente mais discretos (borda cinza).

Cada card contém, nesta ordem: nome → duração → imagem do(s) pote(s) → preço "de/por" (o "de" riscado) → parcelamento → **preço por pote** → lista de extras → botão.

| | KIT INÍCIO | ⭐ KIT PROTOCOLO | KIT TRANSFORMAÇÃO |
|---|---|---|---|
| Duração | 30 DIAS · 1 POTE | 90 DIAS · 3 POTES | 180 DIAS · 6 POTES |
| Preço | de ~~{{PRECO_KIT_1_DE}}~~ por **{{PRECO_KIT_1}}** | de ~~{{PRECO_KIT_2_DE}}~~ por **{{PRECO_KIT_2}}** | de ~~{{PRECO_KIT_3_DE}}~~ por **{{PRECO_KIT_3}}** |
| Parcela | 12x de {{PARCELA_KIT_1}} | 12x de {{PARCELA_KIT_2}} | 12x de {{PARCELA_KIT_3}} |
| Por pote | {{POR_POTE_1}} | **{{POR_POTE_2}}** | **{{POR_POTE_3}}** |
| Extras | — | Frete grátis<br>Guia do Protocolo | Frete grátis<br>Guia do Protocolo<br>Plano de treino |
| Economia | — | Você economiza {{ECONOMIA_2}} | Você economiza {{ECONOMIA_3}} |
| Botão | `COMPRAR` (secundário) | `QUERO ESTE KIT` (primário) | `COMPRAR` (secundário) |

Abaixo dos cards: bandeiras de pagamento + selo de site seguro + `Compra 100% segura · Envio em 24h`.
**Um clique até o checkout.** Nenhum popup, nenhuma etapa intermediária.

---

### S10 — GARANTIA `#garantia`
Fundo branco. Duas colunas: selo circular de garantia (ocre/preto, "30 DIAS") à esquerda, texto à direita.

**H2:** `GARANTIA DE 30 DIAS. O RISCO É NOSSO.`
> `Se em 30 dias você não perceber diferença em energia, foco e disposição, é só nos avisar. Devolvemos 100% do valor investido. Sem perguntas.`

---

### S11 — SEGURANÇA `#seguranca`
Fundo preto. **H2:** `COMPROMISSO PHARMA VITTA SCIENTIFIC LABS`
4 cards chanfrados, ícone ocre + H3 + parágrafo:

1. **`REGULARIZAÇÃO ANVISA`** — `Produzido em total conformidade com as normas sanitárias vigentes e devidamente regularizado perante a ANVISA. Registro: {{NUM_ANVISA}}`
2. **`PADRÃO FARMACÊUTICO`** — `Produzido sob as normas mais rígidas de controle de qualidade nos laboratórios da Pharma Vitta Scientific Labs.`
3. **`FÓRMULA REGISTRADA`** — `Produto devidamente enquadrado na legislação vigente e em conformidade com as normas de segurança sanitária.`
4. **`GARANTIA DE PUREZA`** — `Matérias-primas importadas com laudo de pureza e concentração ativa real por cápsula.`

---

### S12 — FAQ `#faq`
Fundo branco. **H2:** `PERGUNTAS FREQUENTES`
Accordion, primeiro item aberto. Ícone `+` / `−` em ocre.

1. **`O Kronos Fit Metabolic causa tremedeira ou taquicardia?`**
   `Não. Diferente de termogênicos comuns, que usam apenas doses massivas de cafeína barata, a fórmula do Metabolic conta com a L-Teanina, um aminoácido que neutraliza os efeitos colaterais da cafeína — proporcionando energia limpa e foco, sem ansiedade ou tremores.`
2. **`Mulheres podem consumir?`**
   `Sim. A fórmula é segura e eficaz para homens e mulheres que buscam definição corporal, controle do apetite e mais disposição no treino.`
3. **`Qual é o prazo para ver os primeiros resultados?`**
   `Os efeitos de energia, foco e controle do apetite são sentidos logo nas primeiras doses. Os resultados estéticos de definição tornam-se visíveis a partir de 2 a 4 semanas de uso contínuo, associados a uma rotina de treinos. Resultados variam de pessoa para pessoa.`
4. **`Possui alguma contraindicação?`**
   `Sim. Por conter cafeína, não é recomendado para gestantes, lactantes, menores de 19 anos, pessoas hipertensas ou com sensibilidade extrema a estimulantes. Não consumir no período noturno.`
5. **`Como devo tomar?`**
   `Em dias de treino, 3 cápsulas 30 minutos antes. Em dias off, 2 no café da manhã e 1 após o almoço. Sempre até as 16h.`
6. **`Posso tomar junto com whey, creatina ou pré-treino?`**
   `Sim, com whey e creatina. Com pré-treinos que já contenham cafeína, atenção à dose total de estimulantes no dia.`
7. **`Qual o prazo de entrega?`**
   `Envio em até 24h úteis após a confirmação do pagamento. O prazo de entrega varia conforme a região.`
8. **`Onde comprar o original?`**
   `Exclusivamente neste site oficial. Não comercializamos em marketplaces e não nos responsabilizamos por compras feitas em outros canais.`

⚠️ Cada resposta **começa com a resposta objetiva** (Sim/Não/prazo). Não inverta essa ordem — é o que faz o Google e as IAs citarem a página.

---

### S13 — FECHAMENTO
Fundo preto com brasa. **H2** (Anton, "COMECE HOJE" em ocre):
> `SEU METABOLISMO TEM UM RELÓGIO. COMECE HOJE.`

3 bullets curtos (ícone ocre): `Energia limpa` · `Foco constante` · `Definição com músculo`
Contador repetido + **BOTÃO PRIMÁRIO gigante:** `QUERO MEU PROTOCOLO 90` → `#kits`

---

### S14 — RODAPÉ
Fundo preto puro. Logo circular, dados da empresa, links legais em coluna:
`Política de Privacidade · Termos e Condições · Política de Reembolso · Política de Frete · Trocas e Devoluções`
Contato: `{{WHATSAPP}}` · `{{EMAIL}}` · CNPJ `{{CNPJ}}`

**Aviso legal (12px, cinza, obrigatório):**
> `Este produto não é um medicamento. Não exceder a recomendação diária de consumo. Mantenha fora do alcance de crianças. Suplemento alimentar não substitui uma alimentação equilibrada e seu consumo deve ser orientado por nutricionista ou médico. Resultados podem variar de pessoa para pessoa.`

**Aviso anti-falsificação:**
> `A venda do Kronos Fit Metabolic é feita exclusivamente por este site oficial. Não nos responsabilizamos por compras realizadas em outros canais.`

Bandeiras de pagamento + selo de segurança.

---

### S15 — ELEMENTOS PERSISTENTES
| Elemento | Comportamento |
|---|---|
| **CTA sticky (mobile)** | Barra fixa no rodapé a partir de 30% de scroll. Gradiente. Texto: `QUERO MEU KIT — 12x de {{PARCELA_KIT_2}}` → `#kits` |
| **Botão WhatsApp** | Flutuante, canto inferior direito, ícone em círculo ocre |
| **Header** | Transparente no topo, vira preto sólido ao rolar |

---

## 6. RESPONSIVIDADE

| Breakpoint | Regras |
|---|---|
| **Mobile ≤ 767px** | 1 coluna. Botões 100% de largura. H1 40px. Padding lateral 20px. Kits empilhados com o Kit Protocolo **primeiro**. Tabela S6 vira cards. CTA sticky ativo |
| **Tablet 768–1024px** | 2 colunas nos grids. Kits podem ir a 2+1 |
| **Desktop ≥ 1025px** | Container máx. 1200px. Grids conforme especificado. Kits lado a lado, o do meio maior |

---

## 7. CHECKLIST DE ACEITE

Antes de entregar, confirme:
- [ ] Zero preços, números ou depoimentos inventados — todos os `{{tokens}}` estão visíveis
- [ ] Um único `<h1>` na página
- [ ] Todo texto é HTML selecionável (nenhuma frase existe apenas dentro de imagem)
- [ ] Todos os CTAs apontam para `#kits` (nenhum link externo além dos `{{LINK_CHECKOUT}}`)
- [ ] Nenhuma cor fora da paleta da Seção 2
- [ ] Ocre nunca usado em texto corrido sobre fundo branco
- [ ] O Kit Protocolo é visualmente dominante e aparece primeiro no mobile
- [ ] Toda imagem tem `alt` descritivo em português
- [ ] O layout foi verificado a 375px de largura

---

## ANEXO A — Variantes de H1 (NÃO usar agora)
Guardadas para teste A/B posterior. Construa apenas a versão da S1.
- `O TERMOGÊNICO QUE NÃO TE DEIXA TREMENDO.`
- `TREINE POR DOIS: ENQUANTO VOCÊ TREINA, O KRONOS FIT TRABALHA.`
- `RESULTADO DE ELITE: QUEIMA ACELERADA E ENERGIA LIMPA.`

## ANEXO B — Destino final (contexto, não construir)
Este layout será reconstruído em **WordPress + Elementor Pro**. Portanto:
- Prefira estruturas simples de flexbox/grid (mapeiam direto para Containers do Elementor).
- Evite CSS exótico que não sobreviva à migração.
- Nomeie as seções exatamente como as âncoras deste brief.
- Entregue os tokens de cor e a escala tipográfica em um bloco isolado — ele vira o Global Kit.
