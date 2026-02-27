# AGENTS - docs/specs

Ten plik jest mapą specyfikacji AI dla funkcjonalności projektu.

## Cel katalogu `docs/specs/`

- Przechowywanie specyfikacji funkcjonalnych przygotowywanych do implementacji.
- Utrzymanie jednego miejsca, w którym agent wie, jak znaleźć i tworzyć specyfikacje.
- Procedury operacyjne (runbooki) są utrzymywane osobno w `docs/runbooks/`.

## Mapa plików

- `docs/specs/AGENTS.md`
  - Indeks i zasady tworzenia specyfikacji.
- `docs/specs/wdrozenie-hugoplate-openehds-website.md`
  - Specyfikacja wdrożenia szablonu Hugoplate jako jednorazowej bazy dla strony fundacji.
- `docs/specs/*.md`
  - Właściwe specyfikacje funkcjonalności (po jednym pliku na funkcjonalność).

## Zasady tworzenia specyfikacji

- Twórz jeden plik specyfikacji na jedną funkcjonalność.
- Stosuj nazwy opisowe, np. `logowanie-uzytkownika.md`, `import-kontrahentow.md`.
- Gdy człowiek prosi o opracowanie specyfikacji, przygotuj ją jako plik w `docs/specs/`, a nie tylko jako odpowiedź w czacie.
- Każda specyfikacja powinna zawierać co najmniej:
  - cel biznesowy i zakres,
  - wymagania funkcjonalne,
  - przypadki brzegowe,
  - kryteria akceptacji,
  - wpływ na istniejące elementy systemu.
- Jeśli specyfikacja zastępuje starszą wersję, dodaj sekcję "Historia zmian".
- Po dodaniu nowego pliku dopisz go do sekcji "Mapa plików" w tym dokumencie.
