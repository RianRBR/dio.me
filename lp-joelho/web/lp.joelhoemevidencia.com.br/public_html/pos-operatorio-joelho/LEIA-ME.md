# Pacote de homologação — LP Pós-Operatório Joelho

**Versão 15/09/2026** — foto nova na primeira dobra, 4 pilares, números de autoridade
revisados, FAQ atualizado (início 2–72h; pontos), dobra "Como funciona" oculta,
"Dúvidas" movida para antes do FAQ, áreas de toque do rodapé ≥44px.

Suba **todo o conteúdo desta pasta** dentro de `/fisioterapia-pos-operatoria-joelho/`
no host de homologação — é o caminho declarado no canonical, no Open Graph e no
JSON-LD. A página deve responder em:

```
https://<host-de-homologacao>/fisioterapia-pos-operatoria-joelho/
```

Se preferir servir na raiz, mude o prop **canonicalUrl** no painel de Tweaks
antes de gerar o pacote — canonical, `og:url`, `og:image`, `image` e `logo`
do JSON-LD são todos derivados dele.

```
index.html                 página
support.js                 runtime (obrigatório, mesma pasta do index)
_ds/…                      tokens + componentes do design system
assets/                    fotos (WebP), vídeos, avatares, logos
robots.txt                 bloqueia indexação — é homologação
robots.producao.txt        troque por robots.txt no go-live
sitemap.xml
.htaccess                  Apache (cache + gzip + noindex)
nginx.conf.snippet         equivalente para Nginx
baixar-icones.sh           auto-hospeda os ícones (opcional)
```

## Otimizações já aplicadas neste pacote

- **CSS do design system inline** — os 10 arquivos que bloqueavam a renderização
  viraram um único `<style>` no `<head>` (economia medida pelo PSI: ~1.230 ms).
- **Google Fonts não-bloqueante** — carrega com `media="print"` + `onload`; a
  pilha de fallback (`ui-sans-serif, system-ui`) pinta o texto imediatamente.
- **`preload` de `support.js` e do bundle** — os dois scripts que abrem a primeira
  pintura começam a baixar junto com o HTML.
- **Imagens recomprimidas + degrau de 400w** — fotos, logos e avatares. De ~975 KB
  para ~330 KB no carregamento típico de celular; nenhuma imagem maior que o
  necessário para a largura exibida.
- **Sem 404 de ícone** — o uso dos ícones locais agora é opt-in (atributo
  `data-local-icons`), aplicado pelo `baixar-icones.sh`.

⚠️ **O que ainda depende do servidor** (PSI aponta ~979 KB de economia): nenhum
recurso está respondendo com `Cache-Control`. Aplique o `.htaccess` ou o
`nginx.conf.snippet` deste pacote — sem isso, cada visita rebaixa tudo de novo.

## Antes de subir

```bash
chmod +x baixar-icones.sh && ./baixar-icones.sh
```

## Comprimir os vídeos (recomendado — ~48 MB hoje)

```bash
for v in dep-ana dep-carlos dep-tamara dep-wash; do
  ffmpeg -i "assets/videos/$v.mp4" -vf "scale=-2:720" \
    -c:v libx264 -crf 28 -preset slow -movflags +faststart \
    -c:a aac -b:a 96k "assets/videos/$v-720.mp4" && \
  mv "assets/videos/$v-720.mp4" "assets/videos/$v.mp4"
done
```

## Checklist de go-live

- [ ] `mv robots.producao.txt robots.txt`
- [ ] remover o `X-Robots-Tag: noindex` do `.htaccess` / Nginx
- [ ] conferir que a URL servida é exatamente `/fisioterapia-pos-operatoria-joelho/` — canonical, `og:url`, `og:image` e o `image`/`logo` do JSON-LD derivam dela
- [ ] `robots.txt` e `sitemap.xml` ficam na **raiz** do domínio, não nesta subpasta
- [ ] validar o rich result em `search.google.com/test/rich-results`
- [ ] confirmar o registro: hoje está **CREFITO 122060-F**; se a região for 6, o formato oficial é `CREFITO-6/122060-F`
- [ ] validar os 4 números de autoridade com documentação
- [ ] enviar o sitemap no Search Console

## Sobre renderização

A página monta via JavaScript. Há um `<noscript>` com H1, descrição, CTA de
WhatsApp, endereço e as 12 perguntas do FAQ em texto puro — garante conteúdo
legível para qualquer crawler que não execute JS. Para GEO/AEO completo, o ideal
ainda é pré-renderizar (ver conversa).
