# GitHub API - notatki robocze

## Instrukcja

- Oprogramowanie: `GitHub`
- Wersja: `GitHub REST API 2022-11-28`
- Repozytorium: `Open-EHDS/openehds-website`

## Zakres użycia

- Domyślną ścieżką pracy z GitHubem jest dostępny MCP.
- Gdy MCP nie dostarcza wymaganych danych albo operacji, używaj `gh`.
- Helper API `scripts/github-issues.sh` jest fallbackiem dla operacji na issues i komentarzach.

## Uwierzytelnienie API

- Token przekazujemy przez nagłówek:
  - `Authorization: Bearer <GITHUB_TOKEN>`
- Dodatkowe nagłówki API:
  - `Accept: application/vnd.github+json`
  - `X-GitHub-Api-Version: 2022-11-28`

## Konfiguracja lokalna

1. Skopiuj plik:
   - `cp .env.example .env`
2. Uzupełnij sekcję GitHub:
   - `GITHUB_BASE_URL`
   - `GITHUB_OWNER`
   - `GITHUB_REPO`
   - `GITHUB_TOKEN`
3. Załaduj zmienne środowiskowe:
   - `source scripts/load_env.sh .env`

Uwagi:

- Nie commituj `.env` ani tokenów.
- Zmienne GitHub (`GITHUB_*`) utrzymuj jako jedną sekcję pliku `.env`.

Wymagane narzędzia:

- `curl`
- `jq`
- `bash`

## Skrypt operacyjny

- Skrypt: `scripts/github-issues.sh`
- Pomoc: `scripts/github-issues.sh --help`

Dostępne komendy:

- `scripts/github-issues.sh whoami`
- `scripts/github-issues.sh issues-list [open|closed|all]`
- `scripts/github-issues.sh issue-get <nr>`
- `scripts/github-issues.sh issue-create <tytul> <opis>`
- `scripts/github-issues.sh issue-comment <nr> <komentarz>`
- `scripts/github-issues.sh issue-open <nr>`
- `scripts/github-issues.sh issue-close <nr>`

Uwagi praktyczne:

- `issues-list` filtruje pull requesty i zwraca wyłącznie issues.
- `issues-list` pobiera do 5 stron wyników po 100 rekordów.
- `issue-get` zwraca `assignees` i `labels` jako puste listy, gdy API zwróci `null` dla tych pól.

## Przydatne endpointy API

- `GET /user`
- `GET /repos/{owner}/{repo}/issues?state=open`
- `GET /repos/{owner}/{repo}/issues/{issue_number}`
- `POST /repos/{owner}/{repo}/issues`
- `PATCH /repos/{owner}/{repo}/issues/{issue_number}`
- `POST /repos/{owner}/{repo}/issues/{issue_number}/comments`

## Uwagi bezpieczeństwa

- Token musi mieć minimalne uprawnienia wymagane dla wykonywanej operacji.
- Nie wypisuj tokenów w logach i nie przekazuj ich w treści issue, komentarzy ani PR.

## Test kontrolny

Po uzupełnieniu konfiguracji wykonaj:

1. `scripts/github-issues.sh whoami`
2. `scripts/github-issues.sh issues-list open`

Operacje zapisu na realnym repo wykonuj dopiero po świadomej decyzji człowieka albo zgodnie z zasadami projektu.
