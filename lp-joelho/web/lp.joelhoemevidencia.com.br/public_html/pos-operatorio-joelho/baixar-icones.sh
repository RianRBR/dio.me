#!/usr/bin/env bash
# Baixa os 18 ícones Lucide usados na página para assets/icons/.
# Rode na raiz do site. Se a pasta não existir, a página continua usando o CDN.
set -euo pipefail
mkdir -p assets/icons
for i in activity award book-open-check briefcase car check chevron-down \
         clipboard-check dumbbell footprints heart-handshake map-pin \
         message-circle move play receipt shield-check sun; do
  curl -sSfo "assets/icons/$i.svg" \
    "https://unpkg.com/lucide-static@0.542.0/icons/$i.svg"
  echo "ok  $i.svg"
done

# Liga o uso dos ícones locais na página
if grep -q 'data-local-icons' index.html; then
  echo "index.html já está apontando para os ícones locais"
else
  sed -i.bak 's/<html lang="pt-BR">/<html lang="pt-BR" data-local-icons>/' index.html
  echo "index.html atualizado (backup em index.html.bak)"
fi
