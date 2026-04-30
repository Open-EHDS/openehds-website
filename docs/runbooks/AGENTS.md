# AGENTS - docs/runbooks

Ten plik jest mapą instrukcji operacyjnych (runbooków) dla agenta.

## Cel katalogu `docs/runbooks/`

- Przechowywanie powtarzalnych procedur operacyjnych.
- Standaryzacja działań technicznych wykonywanych wielokrotnie.
- Specyfikacje funkcjonalności są utrzymywane osobno w `docs/specs/`.

## Mapa plików

- `docs/runbooks/AGENTS.md`
  - Indeks i zasady tworzenia runbooków.
- `docs/runbooks/*.md`
  - Poszczególne runbooki (jeden plik na jeden proces lub obszar).
- `docs/runbooks/publikowanie-na-github.md`
  - Runbook publikacji treści na GitHub bez błędów formatowania i quotingu.
- `docs/runbooks/pr-review.md`
  - Runbook przeglądu Pull Requesta.
- `docs/runbooks/obsluga-issue-api.md`
  - Runbook obsługi issue przez API jako fallback dla MCP i `gh`.
- `docs/runbooks/diagnostyka-ci.md`
  - Runbook diagnostyki błędów CI.
- `docs/runbooks/przygotowanie-issue-i-specyfikacji.md`
  - Runbook przygotowania issue i wstępnej specyfikacji.
- `docs/runbooks/atomowe-commity.md`
  - Runbook atomowych commitów dla skrótów `c`, `c+p` i `c+p+pr`.

## Zasady tworzenia runbooków

- Twórz jeden runbook na jedną procedurę.
- Stosuj nazwy opisowe, np. `obsluga-issue.md`, `przygotowanie-pr.md`.
- Każdy runbook powinien zawierać:
  - cel i zakres procedury,
  - wymagania wejściowe (uprawnienia, tokeny, narzędzia),
  - kroki wykonania,
  - kroki weryfikacji,
  - typowe błędy i sposób reakcji.
- Po dodaniu nowego pliku dopisz go do sekcji "Mapa plików" w tym dokumencie.
