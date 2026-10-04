#!/usr/bin/env bash
# Rigenera i PDF stampabili a partire dagli HTML di questa cartella.
# Usa il Chromium di Playwright (o CHROME=/percorso/chrome) in modalità headless.
set -euo pipefail

cd "$(dirname "$0")/.."

CHROME="${CHROME:-$(ls -d "$HOME"/.cache/ms-playwright/chromium-*/chrome-linux64/chrome 2>/dev/null | sort -V | tail -1)}"
export LD_LIBRARY_PATH="$HOME/.cache/ms-playwright/extra-libs${LD_LIBRARY_PATH:+:$LD_LIBRARY_PATH}"

genera() {
  local sorgente="$1" destinazione="$2"
  "$CHROME" --headless=new --disable-gpu --no-sandbox --no-pdf-header-footer \
    --virtual-time-budget=10000 --run-all-compositor-stages-before-draw \
    --print-to-pdf="$destinazione" "file://$PWD/$sorgente" 2>/dev/null
  echo "$destinazione"
}

mkdir -p public/docs
genera stampa/prima-configurazione-ipad.html public/docs/prima-configurazione-ipad.pdf
