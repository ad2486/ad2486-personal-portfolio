#!/usr/bin/env bash
# Build estático e envio para a VM. Uso: DEPLOY_HOST=usuario@ip ./deploy.sh
set -euo pipefail
: "${DEPLOY_HOST:?defina DEPLOY_HOST, ex: DEPLOY_HOST=usuario@ip ./deploy.sh}"

npm run build
rsync -avz --delete out/ "$DEPLOY_HOST:/var/www/portfolio/"
