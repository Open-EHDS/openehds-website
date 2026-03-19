# AGENTS - site/content

Ten plik definiuje zasady redakcyjne dla treści publikowanych w `site/content/`.

## Publikacje: URL oparty o tytuł

- Dla każdego nowego wpisu w `*/publications/*.md` ustawiaj pole `slug` w front matter.
- Nazwa pliku wpisu publikacji powinna odpowiadać wartości `slug` (np. `kontrolowana-warstwa-mediacji-danych-koniecznosc-nie-opcja.md`).
- `slug` twórz na podstawie tytułu wpisu:
  - małe litery,
  - znaki ASCII,
  - wyrazy rozdzielone myślnikami.
- Nie zmieniaj `slug` opublikowanego wpisu bez potrzeby.
- Domyślnie nie dodawaj `aliases` (brak przekierowań).
- `aliases` dodawaj tylko po wyraźnej decyzji o utrzymaniu kompatybilności starych URL.

## Format URL dla stron

- Dla pojedynczych stron treści (`pages/*`, pojedyncze wpisy `publications/*`, `about`, `contact`) używaj adresów kończących się na `.html` (bez końcowego `/`).
- Strony katalogowe (np. `/publications/`) pozostają adresami zakończonymi `/`.

## Wielojęzyczność wpisów

- Każdy wpis publikacji aktualizuj równolegle w wersji polskiej i angielskiej.
- `slug` w EN i PL może być różny językowo, ale powinien opisywać ten sam temat.
