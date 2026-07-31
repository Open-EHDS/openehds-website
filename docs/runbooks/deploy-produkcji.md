# Runbook: deploy produkcji

## Cel

Automatyzować publikację `main` na produkcję `https://openehds.org/` przez GitHub Actions.

## Aktualny model

- Produkcyjna domena publiczna: `https://openehds.org/`.
- Obecnie `https://beta.openehds.org/` oraz `https://www.openehds.org/` są przekierowaniami `301` na `https://openehds.org/`, ale `beta` nie jest warunkiem poprawności deployu.
- Nginx Proxy Manager kieruje `openehds.org` na backend HTTP aplikacji.
- Backend produkcyjny działa na `aihd.eengine.pl` w katalogu `/mnt/docker/home-docker/openehds-website`.
- Produkcyjny checkout repozytorium działa z `compose.yaml` i publikuje kontener `web` na porcie ustawionym przez `OPEN_EHDS_HTTP_PORT`.
- Domyślny port backendu to `8088`, zgodnie z konfiguracją Nginx Proxy Managera.

## Sekrety GitHub Actions

Workflow `.github/workflows/ci-cd.yml` wymaga sekretów środowiska `production`:

- `PROD_SSH_HOST` - host SSH dostępny z GitHub Actions runnera.
- `PROD_SSH_PORT` - port SSH; gdy brak sekretu, workflow używa `22`.
- `PROD_SSH_USER` - użytkownik SSH z dostępem do katalogu deployu i Dockera.
- `PROD_SSH_PROXY_JUMP` - opcjonalny jump host SSH; obecnie używany jako `fizol@office.eengine.pl`, bo backend jest pod adresem prywatnym.
- `PROD_SSH_KEY` - prywatny klucz SSH do deployu.
- `PROD_SSH_KNOWN_HOSTS` - wpisy `known_hosts` dla hosta produkcyjnego i jump hosta, jeśli jest używany.
- `PROD_DEPLOY_PATH` - ścieżka katalogu z checkoutem repozytorium na serwerze; obecnie `/mnt/docker/home-docker/openehds-website`.
- `PROD_HTTP_PORT` - port publikowany przez `web`; domyślnie `8088`.

## Przebieg

1. Pull Request uruchamia build produkcyjny Hugo.
2. Push do `main` uruchamia build produkcyjny Hugo.
3. Po udanym buildzie workflow łączy się po SSH na produkcję.
4. Skrypt `.github/scripts/deploy-production.sh`:
   - przerywa deploy, jeśli checkout produkcyjny ma lokalne zmiany,
   - wykonuje `git pull --ff-only origin main`,
   - zapisuje `.env.deploy` z `OPEN_EHDS_HTTP_PORT`,
   - wykonuje build Hugo przez Docker Compose,
   - odtwarza kontener `web`.
5. Workflow sprawdza publicznie:
   - `https://openehds.org/` zwraca `200`.

## Weryfikacja

Po deployu sprawdź:

```sh
curl -I https://openehds.org/
```

Oczekiwane:

- `https://openehds.org/` zwraca `200`.

## Typowe problemy

- Brudny checkout na produkcji: usuń lokalne różnice przez commit do repo albo świadome odtworzenie konfiguracji z sekretów, nie przez ręczny reset.
- Brak połączenia SSH z GitHub Actions: ustaw `PROD_SSH_HOST` na endpoint dostępny z runnera albo użyj runnera mającego dostęp do sieci produkcyjnej.
- Konflikt portu: upewnij się, że `PROD_HTTP_PORT` odpowiada backendowi skonfigurowanemu w Nginx Proxy Managerze.
