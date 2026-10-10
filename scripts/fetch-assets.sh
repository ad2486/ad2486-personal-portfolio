#!/usr/bin/env bash
# Baixa o avatar do GitHub para public/. Rodar da raiz do repo.
set -euo pipefail

curl -fsSL "https://avatars.githubusercontent.com/ad2486?s=800" -o public/avatar.jpg # GitHub serve JPEG
echo "ok"
