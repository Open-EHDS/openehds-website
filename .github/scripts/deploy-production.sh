#!/usr/bin/env bash
set -euo pipefail

: "${DEPLOY_PATH:?DEPLOY_PATH is required}"
: "${DEPLOY_REF:=main}"
: "${OPEN_EHDS_HTTP_PORT:=8088}"

cd "$DEPLOY_PATH"

if ! git diff --quiet || ! git diff --cached --quiet; then
  echo "Production checkout has local changes. Commit, stash, or remove them before deploy."
  git status --short
  exit 1
fi

git fetch origin "$DEPLOY_REF"
git checkout "$DEPLOY_REF"
git pull --ff-only origin "$DEPLOY_REF"

printf 'OPEN_EHDS_HTTP_PORT=%s\n' "$OPEN_EHDS_HTTP_PORT" > .env.deploy

docker compose --env-file .env.deploy -f compose.yaml up -d --force-recreate web
docker compose --env-file .env.deploy -f compose.yaml ps
