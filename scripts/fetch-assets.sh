#!/usr/bin/env bash
# Baixa avatar e cards OG do GitHub para public/. Rodar da raiz do repo.
set -euo pipefail

user="ad2486"
repos=(backend-ticketeira dev-tool-cli multi-llm-cli welcoming-discord-bot youtube-discord-bot ad2486-personal-portfolio)

mkdir -p public/projects
curl -fsSL "https://avatars.githubusercontent.com/${user}?s=800" -o public/avatar.jpg # GitHub serve JPEG
for repo in "${repos[@]}"; do
  curl -fsSL --retry 10 --retry-delay 15 "https://opengraph.githubassets.com/1/${user}/${repo}" -o "public/projects/${repo}.png"
  sleep 2 # opengraph.githubassets.com responde 429 se for rapido demais
done
echo "ok"
