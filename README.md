# strona OpenEHDS.org

Repozytorium zawiera dwujęzyczną, statyczną stronę Fundacji OpenEHDS serwowaną przez nginx. Publiczne widoki znajdują się w `site/static/pl/` oraz `site/static/en/`, a wejście pod `/` przekierowuje użytkownika do wersji dopasowanej do języka przeglądarki.

## Struktura pracy

- [AGENTS.md](AGENTS.md) - zasady pracy agentów, skróty GitHub i git flow.
- [.github/](.github/) - szablony issue, Pull Requestów i instrukcje review.
- [docs/](docs/) - dokumentacja techniczna, runbooki i notatki API.
- [scripts/](scripts/) - pomocnicze skrypty do fallbackowej obsługi GitHub API.

## Uruchamianie

Projekt ma dwie konfiguracje Docker Compose:

- `compose.dev.yaml` - konfiguracja deweloperska do pracy lokalnej,
- `compose.yaml` - konfiguracja produkcyjna, używana do lokalnego odtworzenia wariantu produkcyjnego.

Podczas pracy na lokalnym komputerze używamy konfiguracji deweloperskiej:

```sh
docker compose -f compose.dev.yaml up -d --build
```

Strona jest wtedy dostępna pod adresem `http://localhost:8080`.

Środowisko deweloperskie można zatrzymać poleceniem:

```sh
docker compose -f compose.dev.yaml down
```

## Licencje

W tym repozytorium nie obowiązuje jedna wspólna licencja dla wszystkich plików. Poszczególne grupy plików podlegają różnym zasadom:

- komponenty zewnętrzne i pliki pochodzące z upstream zachowują swoje licencje źródłowe,
- treści redakcyjne fundacji w `site/content/` są objęte licencją `CC BY 4.0`,
- logotypy, nazwa `OpenEHDS`, identyfikacja marki i inne oznaczenia źródła nie są objęte licencją treści, chyba że wyraźnie wskazano inaczej.

Szczegóły:

- zestawienie komponentów zewnętrznych i ich licencji: [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)
- licencja treści redakcyjnych: [LICENSE-content.md](LICENSE-content.md)
- zakres licencji dla katalogu z treściami: [site/content/README.md](site/content/README.md)
