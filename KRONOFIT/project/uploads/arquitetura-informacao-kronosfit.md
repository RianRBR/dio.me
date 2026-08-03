# Arquitetura da Informação — Landing Page KronosFit
**Produto:** Kronos Fit Metabolic (90 cápsulas · 550mg · Pharma Vitta Scientific Labs)
**Plataforma:** WordPress + Elementor Pro (Hello Elementor / Hello Biz)
**Objetivo único da página:** venda direta (checkout externo ou WooCommerce)
**Data:** 14/07/2026

---

## 1. Fundamentos estratégicos

### 1.1 Objetivo e KPI
| Nível | Métrica | Meta inicial sugerida |
|---|---|---|
| Macro | Taxa de conversão (visita → compra) | 1,5% – 3% |
| Macro | Ticket médio (mix de kits) | Kit 3 potes como referência |
| Micro | Scroll até seção de Oferta | > 45% |
| Micro | Clique em CTA (qualquer) | > 20% |
| Micro | Iniciou checkout | > 8% |
| Técnico | LCP < 2,5s · INP < 200ms · CLS < 0,1 | Core Web Vitals verdes no mobile |

### 1.2 Público-alvo (persona primária)
Homem/mulher, 25–45 anos, treina regularmente ou está retomando, já usou termogênico nacional e teve efeito ruim (tremedeira/crash), quer definição sem perder massa magra. Compra por celular, via Instagram/Meta Ads, decide em uma sessão.

### 1.3 Proposta de valor (posicionamento único)
> **Termogênico de elite com energia limpa: queima acelerada + foco, sem tremedeira, sem crash e sem perder músculo.**

O inimigo declarado da comunicação: **o termogênico barato de cafeína pura.** Todo o argumento da página se apoia nesse contraste.

### 1.4 Fluxo de persuasão (ordem obrigatória das seções)
`Atenção → Identificação da dor → Agitação → Solução → Mecanismo → Diferenciação → Prova → Protocolo → Oferta → Reversão de risco → Urgência → Objeções (FAQ) → Fechamento`

---

## 2. Design system (Global Kit do Elementor)

### 2.1 Cores globais
Configurar em **Site Settings → Global Colors** para nunca usar cor "solta":

| Slot Elementor | Nome | HEX | Uso |
|---|---|---|---|
| Primary | Branco Puro | `#FFFFFF` | Fundo das seções claras, texto sobre preto |
| Secondary | Preto Kronos | `#0B0B0B` | Fundo das seções escuras, títulos sobre branco |
| Text | Grafite | `#1A1A1A` | Corpo de texto sobre branco |
| Accent | Ocre | `#C87F2E` | Cor de marca, ícones, destaques, bordas |
| Custom 1 | Ocre Claro | `#E8A33D` | Início do gradiente, hover |
| Custom 2 | Vermelho Kronos | `#B3200F` | Fim do gradiente, urgência, esgotado |
| Custom 3 | Cinza Névoa | `#F4F4F4` | Fundos alternados, cards claros |
| Custom 4 | Cinza Linha | `#D9D9D9` | Divisórias, bordas sutis |

**Gradiente oficial (botões e faixas):**
`linear-gradient(135deg, #E8A33D 0%, #C87F2E 45%, #B3200F 100%)`

**Regra de contraste (acessibilidade + legibilidade = CRO):**
Ocre sobre branco tem contraste baixo (~3:1). Use ocre em fundo branco **apenas** em números grandes, ícones e títulos ≥ 24px em negrito. Texto corrido em fundo branco é sempre Grafite `#1A1A1A`. Sobre preto, o ocre funciona perfeitamente.

**Ritmo visual da página (alternância intencional):**
`Preto (hero) → Branco → Preto → Branco → Preto (oferta) → Branco (FAQ) → Preto (rodapé)`

### 2.2 Tipografia
| Papel | Fonte sugerida | Peso | Observação |
|---|---|---|---|
| H1 / H2 | **Anton** ou **Archivo Black** (itálico nos destaques) | 400/900 | Reproduz o lettering dos criativos |
| H3 / Labels | **Barlow Condensed** | 700 | Uppercase, letter-spacing +2% |
| Corpo | **Inter** ou **Barlow** | 400/600 | 16–18px mobile, altura de linha 1,6 |
| Números / preços | **Anton** | 400 | Destaque em ocre ou gradiente |

Hospedar as fontes localmente (Elementor: *Load Google Fonts Locally* + `font-display: swap`) — ganho direto de LCP.

### 2.3 Componentes reutilizáveis (Global Widgets / Templates salvos)
- **Botão CTA primário:** fundo gradiente, texto branco, uppercase, raio 8px, sombra ocre 20%, largura total no mobile, ícone `→`.
- **Botão CTA secundário:** contorno ocre 2px, fundo transparente.
- **Card chanfrado:** cantos cortados em 45° (clip-path), borda ocre 1px — mantém a estética "HUD tecnológico" dos criativos.
- **Selo de confiança:** ícone ocre + texto condensado.
- **Faixa de urgência:** fundo gradiente, texto branco, countdown embutido.

---

## 3. Mapa da landing page (seção a seção)

> Convenção: cada seção tem **âncora**, **hierarquia semântica (H)**, **widget Elementor** e **função no funil**. Um único H1 na página.

---

### S0 — Top Bar de Anúncio (sticky)
- **Fundo:** gradiente ocre→vermelho · **Altura:** 40px
- **Conteúdo:** `FRETE GRÁTIS ACIMA DE 2 POTES · OFERTA TERMINA EM [contador]`
- **Widget:** Container sticky + widget **Countdown** (modo *Due Date* apontando para o fim real da campanha; se for oferta recorrente, use *Evergreen* com regra honesta de recorrência semanal — nunca um timer que reinicia a cada F5).
- **Função:** urgência desde o primeiro pixel.

---

### S1 — Hero (above the fold) `#topo`
- **Fundo:** Preto Kronos com textura de faíscas/HUD (imagem 5 dos anexos como base), overlay escuro 60%.
- **Layout:** 2 colunas desktop (texto 55% / mockup 45%) · empilhado no mobile (texto primeiro).

**Estrutura de conteúdo:**
- Logo Kronos Fit (SVG, altura 48px)
- **Eyebrow:** `O PROTOCOLO KRONOS FIT`
- **H1:** `Queime gordura sem perder músculo. Sem tremedeira. Sem crash.`
  *(alternativas para teste A/B: "Resultado de elite: energia limpa e queima acelerada" · "Treine por dois: enquanto você treina, o Kronos Fit trabalha")*
- **Subtítulo (1 frase):** Fórmula avançada em 90 cápsulas que ativa o metabolismo, sustenta a massa magra e entrega foco constante — sem os efeitos colaterais dos termogênicos comuns.
- **Bullets de escaneabilidade (3 ícones em linha):** `🔥 Queima inteligente` · `⚡ Energia constante` · `🎯 Foco e disposição`
- **CTA primário:** `QUERO MEU PROTOCOLO 90` → âncora `#kits`
- **Microcopy sob o CTA:** *Envio em 24h · Garantia de 30 dias · Pagamento seguro*
- **Imagem:** mockup do pote (fundo removido, PNG/WebP) com glow ocre.

**Notas técnicas:**
- A imagem do hero é o **LCP element** → preload, `fetchpriority="high"`, WebP ≤ 120kb, sem lazy-load.
- Nada de slider/carrossel aqui (mata o LCP e dilui a mensagem).
- O H1 deve ser **texto real em HTML**, nunca imagem — vale para todos os títulos (crítico para SEO e GEO).

---

### S2 — Barra de Prova / Autoridade (faixa fina)
- **Fundo:** Branco · borda superior ocre 2px
- **4 selos horizontais:** `Regularizado ANVISA` · `Pharma Vitta Scientific Labs` · `Matéria-prima importada com laudo` · `Garantia de 30 dias`
- **Função:** reduzir risco percebido imediatamente após o hero (o ponto de maior abandono).

---

### S3 — Dor / Identificação `#voce-se-identifica`
- **Fundo:** Preto · **H2:** `Você se identifica com algum desses cenários?`
- **5 cards** (ícone de alerta ocre + título + descrição), grid 2 colunas desktop / 1 mobile:

1. **O "efeito murcho" ao perder peso** — o peso cai na balança, mas o espelho mostra flacidez e perda da densidade muscular que custou anos para construir.
2. **Ansiedade e tremedeira com termogênicos baratos** — taquicardia, suor frio, oscilação de humor e o crash algumas horas depois.
3. **A gordura teimosa que não sai** — treino pesado, dieta em dia, e a camada abdominal e nos flancos continua escondendo o shape.
4. **A sabotagem do doce ao anoitecer** — foco o dia inteiro, derrotado por açúcar à noite, destruindo o déficit da semana.
5. **Sem energia para treinar depois do trabalho** — corpo fadigado, mente desligada, treino arrastado e sem intensidade.

- **CTA de transição (texto, não botão):** `Existe um motivo técnico para isso — e uma correção.` ↓

---

### S4 — Solução / Como atua `#como-funciona`
- **Fundo:** Branco · **H2:** `Como o Kronos Fit Metabolic atua?`
- **Parágrafo de abertura (bloco "answer-first" — essencial para GEO):**
  > O Kronos Fit Metabolic é um suplemento alimentar em cápsulas desenvolvido para apoiar o metabolismo, a disposição e a definição corporal em rotinas de treino intenso. A fórmula combina ativos de ação sinérgica em três frentes — energia e foco cognitivo, mobilização de gordura como fonte energética e sustentação da massa magra — entregando constância onde os termogênicos comuns falham.
- **Grid de benefícios (10 itens com ✔️ em ocre)** — usar a lista fornecida, com a revisão de conformidade da **Seção 9** deste documento antes de publicar.
- **Imagem lateral:** pote aberto com cápsulas (mockup 1 dos anexos).
- **CTA secundário:** `VER OS KITS DISPONÍVEIS`

---

### S5 — Mecanismo em 3 Pilares (diferenciação) `#mecanismo`
- **Fundo:** Preto · **H2:** `Por que o Metabolic não é mais um termogênico`
- **3 colunas, cards chanfrados com borda ocre:**

| Pilar | Título | Argumento |
|---|---|---|
| 01 | **Energia limpa** | A L-Teanina neutraliza os efeitos colaterais da cafeína — foco sustentado, sem ansiedade, sem tremor, sem crash. |
| 02 | **Queima com transporte ativo** | A gordura mobilizada precisa ser transportada e usada como energia. O protocolo trabalha essa rota, não apenas o "acelerar". |
| 03 | **Preservação do músculo** | Definição sem o efeito murcho: o objetivo é secar sustentando a densidade muscular. |

- **Componente de destaque:** imagem "Treine por dois" (criativo anexo) como banner de reforço emocional.

---

### S6 — Tabela Comparativa (matadora de objeção) `#comparativo`
- **Fundo:** Branco · **H2:** `Kronos Fit Metabolic × Termogênico comum`
- **Tabela HTML real (não imagem)** — LLMs e o Google leem tabelas com prioridade; é a seção com maior chance de ser citada em respostas de IA:

| Critério | Kronos Fit Metabolic | Termogênico comum |
|---|---|---|
| Base da fórmula | Sinergia de ativos + L-Teanina | Dose massiva de cafeína |
| Tremedeira / taquicardia | Não | Frequente |
| Efeito "crash" | Não | Comum |
| Foco cognitivo | Sim, sustentado | Instável |
| Massa magra | Foco em preservação | Não é preocupação |
| Protocolo definido | Sim — 90 cápsulas | Genérico |
| Laboratório | Pharma Vitta Scientific Labs | Variável |

---

### S7 — Prova Social `#depoimentos`
- **Fundo:** Preto · **H2:** `Quem já está no protocolo`
- **Contadores animados (widget Counter do Elementor)** — faixa com 3 números, animação ao entrar na viewport:
  - `X.XXX potes vendidos` · `X.XXX clientes` · `4,8 ★ de avaliação média`
  - ⚠️ **Use apenas números reais e auditáveis.** Números inventados são o item nº 1 de risco jurídico (CDC art. 37) e destroem a confiança quando o cliente compara com sua base de reviews.
- **Depoimentos (3 formatos, nesta ordem de força):**
  1. **Vídeo** (2–3 vídeos curtos, 20–40s, hospedados no YouTube não listado ou Vimeo, com lazy-load por thumbnail).
  2. **Prints de WhatsApp** (carrossel — modelo Sekey; alta conversão no Brasil).
  3. **Cards de texto** com nome, idade, cidade e foto.
- **Implementação:** criar um **CPT "Depoimentos"** (via ACF/Pods) + **Loop Grid** do Elementor Pro. Assim novos depoimentos entram sem editar a página.
- **Requisito:** autorização de uso de imagem/nome por escrito de cada pessoa (arquivar).
- ⚠️ **Antes/depois:** alto risco regulatório para suplemento (ANVISA/CONAR). Prefira depoimento de **sensação e performance** (energia, foco, disposição, constância no treino) em vez de promessa estética/emagrecimento.
- **CTA:** `QUERO ENTRAR NO PROTOCOLO`

---

### S8 — Como usar / O Protocolo `#protocolo`
- **Fundo:** Branco (usa direto o criativo "COMO USAR SEU METABOLIC", versão 1:1 desktop / 9:16 mobile)
- **H2:** `Como usar seu Metabolic`
- **Conteúdo (replicar em HTML ao lado da imagem, para SEO/GEO):**
  - **Treino:** 3 cápsulas 30 min antes.
  - **Off:** 2 no café da manhã + 1 após o almoço.
  - **Limite:** consumir até as 16h (foco no sono).
  - **Água:** 3L/dia para o transporte da queima.
  - **Proteína:** essencial para sustentar o músculo.
  - **Constância:** efeito cumulativo. Não pule nenhum dia.
- **Faixa de fechamento:** `PROTOCOLO 90 CÁPSULAS`
- **Função no CRO:** reduz a incerteza pós-compra ("como eu vou usar isso?") — um dos maiores freios silenciosos em suplementos.

---

### S9 — Oferta / Kits `#kits`  ⭐ *seção mais importante da página*
- **Fundo:** Preto com glow ocre central · **H2:** `Escolha seu protocolo`
- **Contador de urgência acima dos cards:** `A oferta com frete grátis termina em [countdown]`
- **3 kits (ancoragem de preço — o do meio é o alvo):**

| | **Kit Início** | **Kit Protocolo** ⭐ *MAIS VENDIDO* | **Kit Transformação** |
|---|---|---|---|
| Duração | 30 dias · 1 pote | 90 dias · 3 potes | 180 dias · 6 potes |
| Preço | de ~~R$ XXX~~ por **R$ XXX** | de ~~R$ XXX~~ por **R$ XXX** | de ~~R$ XXX~~ por **R$ XXX** |
| Parcelado | 12x de R$ XX | 12x de R$ XX | 12x de R$ XX |
| Por pote | R$ XXX | **R$ XXX** | **R$ XXX** |
| Extras | — | Frete grátis + Guia do Protocolo | Frete grátis + Guia + Plano de treino |
| CTA | `COMPRAR` | `QUERO ESTE` (destacado, gradiente) | `COMPRAR` |

**Regras de CRO desta seção:**
- Card central **maior (escala 1,05)**, borda ocre com glow, selo "MAIS VENDIDO" — o olho vai direto para ele.
- Mostrar **preço por pote** em todos os kits: é o argumento que empurra para o kit maior.
- Mostrar **economia em R$** ("Você economiza R$ XXX").
- Bandeiras de pagamento + selo de site seguro logo abaixo dos cards.
- **1 clique até o checkout.** Sem etapa intermediária, sem popup de captura antes da compra.
- Botão de cada card leva direto ao link do checkout do kit correspondente (Kirvano/Monetizze/Yampi/WooCommerce), com UTMs preservadas.

---

### S10 — Reversão de Risco (Garantia) `#garantia`
- **Fundo:** Branco · **H2:** `Garantia de 30 dias. O risco é nosso.`
- Selo circular de garantia (ocre/preto) + texto curto e direto: se em 30 dias você não perceber diferença em energia, foco e disposição, devolvemos 100% do valor.
- **Só publique se a política for real e operacional** (canal de atendimento, prazo, quem paga o frete reverso). Definir isso na página de *Política de Reembolso*.

---

### S11 — Segurança e Compliance `#seguranca`
- **Fundo:** Preto · **H2:** `Compromisso Pharma Vitta Scientific Labs`
- **4 blocos:**
  - **Regularização ANVISA** — produzido em conformidade com as normas sanitárias vigentes. *(Exiba o nº de notificação/processo se houver — vale mais do que qualquer adjetivo.)*
  - **Padrão farmacêutico** — controle de qualidade nos laboratórios da Pharma Vitta.
  - **Fórmula registrada** — enquadrada na legislação vigente.
  - **Garantia de pureza** — matérias-primas importadas com laudo de pureza e concentração ativa real por cápsula.
- **Função GEO:** este é o bloco de **entidade** — cita marca, fabricante e conformidade. É o que um LLM usa para responder "o Kronos Fit é confiável / quem fabrica?".

---

### S12 — FAQ `#faq`
- **Fundo:** Branco · **H2:** `Perguntas frequentes`
- **Widget:** Accordion (com Schema FAQPage — ver seção 6).
- **Perguntas (as 4 fornecidas + 4 adicionais para cobertura de busca):**
  1. O Kronos Fit Metabolic causa tremedeira ou taquicardia?
  2. Mulheres podem consumir?
  3. Qual é o prazo para ver os primeiros resultados?
  4. Possui alguma contraindicação?
  5. Como devo tomar? *(link para #protocolo)*
  6. Em quanto tempo chega? Qual o prazo de entrega?
  7. Posso tomar junto com whey, creatina ou pré-treino?
  8. Onde comprar o original? *(aviso anti-falsificação — modelo Ozenvitta)*
- **Regra de redação para GEO:** a **primeira frase de cada resposta deve responder objetivamente** (Sim / Não / Em 2 a 4 semanas). Só depois vem a explicação. É assim que a IA extrai e cita.

---

### S13 — Fechamento Final
- **Fundo:** Preto com faíscas · **H2:** `Seu metabolismo tem um relógio. Comece hoje.`
- Recapitulação em 3 bullets + CTA gigante → `#kits`
- Contador repetido.

---

### S14 — Rodapé
- Logo, CNPJ, endereço, e-mail, WhatsApp
- Links: Política de Privacidade · Termos e Condições · Política de Reembolso · Política de Frete · Trocas e Devoluções
- **Aviso legal obrigatório:** *"Este produto não é um medicamento. Não exceder a recomendação diária de consumo. Mantenha fora do alcance de crianças. Suplemento alimentar não substitui uma alimentação equilibrada e seu consumo deve ser orientado por nutricionista ou médico. Resultados podem variar de pessoa para pessoa."*
- **Aviso anti-falsificação:** venda oficial exclusivamente por este site.
- Selos de pagamento e segurança.

---

### S15 — Elementos persistentes
| Elemento | Comportamento |
|---|---|
| **Sticky CTA mobile** | Barra fixa no rodapé a partir de 30% de scroll: `QUERO MEU KIT — a partir de 12x R$ XX` |
| **Botão WhatsApp** | Flutuante, canto inferior direito, com evento de tracking |
| **Popup exit-intent** | Desktop apenas, dispara 1x por sessão: cupom real de 5–10% + urgência. Elementor Popup com trigger *On Exit Intent* |
| **Header** | Minimalista: logo + 1 botão `COMPRAR`. Sem menu completo — menu = fuga em LP |

---

## 4. Sitemap complementar (páginas de apoio)

```
kronosfit.com.br/
├── /                          ← Landing page (esta arquitetura)
├── /kronos-fit-metabolic/     ← Página de produto (SEO orgânico, conteúdo longo)
├── /sobre/                    ← Pharma Vitta Scientific Labs (entidade/E-E-A-T)
├── /blog/                     ← Conteúdo de topo de funil (SEO + GEO)
│   ├── /termogenico-da-tremedeira/
│   ├── /como-secar-sem-perder-massa-magra/
│   └── /o-que-e-l-teanina/
├── /politica-de-privacidade/
├── /termos-e-condicoes/
├── /politica-de-reembolso/
├── /politica-de-frete/
└── /rastreio/                 ← Rastreamento de pedido (reduz drasticamente o volume de suporte)
```

A LP é para tráfego pago. O blog e a página de produto sustentam o SEO/GEO de longo prazo — não sobrecarregue a LP com conteúdo educativo que atrasa a decisão.

---

## 5. SEO on-page e técnico

| Item | Definição |
|---|---|
| **URL** | `https://kronosfit.com.br/` (HTTPS, sem www ou com — escolha e mantenha, com redirect 301) |
| **Title (≤ 60c)** | `Kronos Fit Metabolic — Termogênico Sem Tremedeira \| Site Oficial` |
| **Meta description (≤ 155c)** | `Queime gordura, mantenha o músculo e treine com foco. Energia limpa, sem crash. Protocolo 90 cápsulas. Frete grátis e garantia de 30 dias.` |
| **H1** | Único, com a palavra-chave principal |
| **Hierarquia** | H1 → H2 por seção → H3 dentro dos cards. Nunca pular níveis |
| **Alt text** | Descritivo e único em toda imagem (`alt="Pote de Kronos Fit Metabolic com 90 cápsulas"`) |
| **Imagens** | WebP/AVIF · nomes semânticos (`kronos-fit-metabolic-pote.webp`) · `width`/`height` definidos (evita CLS) |
| **Texto em imagem** | **Todo criativo com texto precisa de equivalente em HTML.** O Google e as IAs não leem os seus criativos |
| **Open Graph / Twitter Card** | Imagem 1200×630 com o pote + headline |
| **Sitemap.xml + robots.txt** | Via Rank Math ou Yoast |
| **Palavras-chave** | Primária: *kronos fit metabolic*. Secundárias: *termogênico sem tremedeira*, *termogênico com l-teanina*, *queimador de gordura sem perder massa magra*, *termogênico para treino*, *kronos fit funciona* |
| **Plugin SEO** | Rank Math (schema mais flexível que o Yoast na versão free) |

---

## 6. GEO (otimização para respostas de IA)

O que faz uma LP ser **citada** por ChatGPT, Perplexity, Gemini e AI Overviews:

1. **Bloco de definição "answer-first"** logo na seção S4: uma frase que define o que é o produto, para quem é, e o que faz. É o trecho que a IA vai extrair.
2. **Dados estruturados (JSON-LD)** — implementar via Rank Math ou HTML widget no `<head>`:
   - `Product` (nome, marca, descrição, imagem, SKU, offers com preço e disponibilidade)
   - `Organization` (Pharma Vitta Scientific Labs, logo, CNPJ, contato)
   - `FAQPage` (as 8 perguntas da S12 — o schema que mais gera citação em IA)
   - `BreadcrumbList`
   - `AggregateRating` **apenas se as avaliações forem reais e verificáveis**
3. **Tabelas em HTML** (S6) — formato que LLMs priorizam ao extrair comparações.
4. **Respostas objetivas na primeira frase** de cada FAQ.
5. **`/llms.txt` na raiz** — arquivo de texto simples resumindo: o que é o produto, composição, protocolo de uso, contraindicações, onde comprar, quem fabrica.
6. **Consistência de entidade** — "Kronos Fit Metabolic" e "Pharma Vitta Scientific Labs" grafados exatamente igual em todo o site, Instagram, Google Business Profile e marketplaces.
7. **Texto renderizado no HTML** — evite conteúdo crítico que só aparece via JS/animação.
8. **Menções externas** — GEO depende de corroboração fora do seu site: perfis sociais, Reclame Aqui ativo, artigos, reviews. Sem isso, a IA não tem por que confiar na página.

---

## 7. CRO — checklist e testes

### 7.1 Regras aplicadas
- ✅ **Um único objetivo** — todo CTA aponta para `#kits`. Zero links de fuga.
- ✅ **CTA a cada ~1,5 tela** de scroll.
- ✅ **Contraste do botão** — o gradiente ocre/vermelho é a única coisa nessa cor na tela em torno dele.
- ✅ **Copy de CTA em 1ª pessoa** ("Quero meu protocolo") converte mais que verbo genérico ("Comprar").
- ✅ **Prova antes do preço** — depoimentos (S7) e protocolo (S8) vêm antes dos kits (S9).
- ✅ **Objeções antes do fechamento** — garantia (S10), segurança (S11) e FAQ (S12).
- ✅ **Mobile-first** — 80%+ do tráfego. Desenhe no breakpoint de 375px primeiro.
- ✅ **Escassez e urgência reais.** Contador com prazo verdadeiro, estoque com número verdadeiro.

### 7.2 Fila de testes A/B (rodar um por vez, 2 semanas mínimo)
1. H1: benefício ("Queime gordura sem perder músculo") vs. inimigo ("O termogênico que não te deixa tremendo")
2. Ordem: Depoimentos antes vs. depois do Mecanismo
3. Kits: 3 opções vs. 4 opções
4. CTA hero: rola até os kits vs. abre checkout direto do kit mais vendido
5. Countdown na top bar: ligado vs. desligado

Ferramenta: Microsoft Clarity (gratuito — heatmap + gravação de sessão) + GA4.

---

## 8. Stack técnico e rastreamento

### 8.1 WordPress
| Camada | Escolha |
|---|---|
| Tema | Hello Elementor (ou Hello Biz) |
| Builder | Elementor Pro (Containers Flexbox — **não** use Sections legadas) |
| SEO | Rank Math |
| Performance | WP Rocket + Perfmatters + Cloudflare |
| Imagens | Converter para WebP (Imagify / ShortPixel) |
| Formulários | Elementor Forms → integração com CRM/e-mail |
| Checkout | Kirvano / Monetizze / Yampi / WooCommerce (definir) |
| Hospedagem | Servidor com datacenter no Brasil (latência importa no LCP) |

### 8.2 Otimizações obrigatórias no Elementor
- Ativar **Element Caching** e **Optimized DOM Output** em *Experiments*.
- Desativar widgets não usados (*Elementor → Settings → Features*).
- Não usar mais de 2 famílias de fontes e 3 pesos cada.
- Motion effects apenas em entrada de seção (fade/slide sutis) — animação pesada mata o INP.
- Ícones em SVG inline, não em fonte de ícone.

### 8.3 Eventos de tracking (GTM → GA4 + Meta Pixel/CAPI)
| Evento | Disparo |
|---|---|
| `view_content` | Carregamento da página |
| `scroll_50` / `scroll_90` | Profundidade de scroll |
| `click_cta_hero` | Clique no CTA do hero |
| `view_offer` | Seção `#kits` entra na viewport |
| `select_kit` | Clique em qualquer card de kit (com parâmetro do kit) |
| `begin_checkout` | Redirecionamento para o checkout |
| `purchase` | Postback/webhook da plataforma de checkout |
| `whatsapp_click` | Clique no botão flutuante |
| `faq_open` | Abertura de item do accordion (revela objeções reais) |

Meta CAPI é obrigatório hoje — sem ele o pixel perde 30–40% dos eventos no iOS.

---

## 9. Camada de conformidade — ler antes de publicar

Não sou advogado e isto não é orientação jurídica, mas é o ponto que mais derruba páginas de suplemento no Brasil, então vale sinalizar com clareza:

Pela **RDC 243/2018** e **IN 28/2018 da ANVISA**, suplementos alimentares só podem veicular alegações **da lista autorizada**, e **não podem** alegar efeito terapêutico, emagrecimento, ação hormonal ou controle de doenças. A publicidade responde ainda ao **CDC art. 37** (propaganda enganosa) e ao **CONAR**.

**Alegações da sua lista com risco alto e sugestões de reescrita:**

| Alegação atual | Risco | Reescrita mais defensável |
|---|---|---|
| Queima de gordura abdominal | Alto (alegação de emagrecimento localizado) | *Apoio ao metabolismo energético* |
| Otimização da testosterona livre | **Muito alto** (alegação hormonal) | Remover, ou substituir por *suporte ao desempenho físico* |
| Preservação e densidade muscular | Alto | *Complemento de rotinas de treino de força* |
| Bloqueio da compulsão por doces | Alto | *Auxilia na sensação de saciedade* (se houver ativo que sustente) |
| Controle de insulina e glicemia | **Muito alto** (alegação terapêutica) | Remover |
| Definição corporal de alta performance | Médio/alto | *Suporte à rotina de definição e treino* |
| Energia extrema sem tremores · Foco e concentração | Baixo (cafeína/L-teanina têm respaldo) | Manter |

**Outros pontos:**
- "Regularizado perante a ANVISA" — só afirme com o número de notificação em mãos, e exiba-o.
- **Contadores e escassez:** timers que reiniciam a cada refresh e "restam 7 unidades" fixos no HTML são propaganda enganosa e, na prática, o que mais gera print e denúncia. Use countdown com data real de campanha e estoque puxado do sistema.
- **Depoimentos:** precisam ser reais, com autorização por escrito. Antes/depois em suplemento é o formato de maior risco.
- **Recomendação prática:** faça o responsável técnico (RT) da Pharma Vitta revisar a copy final da página antes do go-live. Custa uma revisão e evita notificação do Procon/ANVISA e bloqueio de conta de anúncio na Meta (que reprova criativos com alegação de emagrecimento e antes/depois).

---

## 10. Ordem de execução sugerida

1. **Definir preços e links de checkout dos 3 kits** (bloqueia a S9 — comece por aqui).
2. Montar o **Global Kit** (cores + fontes) no Elementor.
3. Criar os **templates de componentes** (botão, card chanfrado, selo).
4. Exportar os criativos anexos em **WebP** nos formatos 1:1 e 9:16 e remover o fundo dos mockups do pote.
5. Construir a página **de cima para baixo**, validando cada seção no mobile antes de passar para a próxima.
6. Revisão de copy com o RT (Seção 9).
7. Instalar GTM + GA4 + Pixel/CAPI e testar cada evento.
8. Rodar PageSpeed/Core Web Vitals e corrigir o LCP.
9. Publicar, ligar Clarity, colher 200+ sessões antes de qualquer teste A/B.

---

*Documento vivo — atualizar a cada rodada de teste.*
