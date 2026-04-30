# AGENTS

Ten plik definiuje podstawowe zasady dla agentów (AI i automatyzacji) pracujących w tym repozytorium.

## Język projektu

- Cała komunikacja w projekcie odbywa się w języku polskim.
- Dotyczy to w szczególności: dokumentacji, opisów zmian, nazewnictwa i treści commitów oraz komunikacji między członkami zespołu i agentami.
- Publiczne URL-e w serwisie powinny być konsekwentnie utrzymywane w języku angielskim, niezależnie od wersji językowej treści.

## Zakres

- Wprowadzaj zmiany minimalne i zgodne z aktualnym celem zadania.
- Nie modyfikuj plików niezwiązanych z zadaniem.
- Nie usuwaj istniejącej funkcjonalności bez wyraźnego powodu i opisu.

## Jakość zmian

- Preferuj czytelność i prostotę nad nadmierną złożonością.
- Po zmianach uruchamiaj dostępne testy/lintery.
- Gdy brak testów, opisz krótko jak zweryfikowano poprawność zmian.
- Wszystkie zmiany najpierw wprowadzaj w lokalnym repo i testuj na lokalnym środowisku developerskim.
- Dopiero po udanym lokalnym teście zgłaszaj gotowość do commitowania.
- Commit wykonuj wyłącznie po wyraźnym sygnale człowieka.
- Repozytorium na serwerze produkcyjnym aktualizuj wyłącznie po wyraźnym sygnale człowieka.
- Za bieżące środowisko produkcyjne uznawaj wdrożenie dostępne pod `https://beta.openehds.org`.

## Uruchamianie środowisk

- Środowisko developerskie uruchamiaj wyłącznie przez Docker Compose: `docker compose -f compose.dev.yaml up -d --build`.
- Środowisko developerskie zatrzymuj przez: `docker compose -f compose.dev.yaml down`.
- Wariant produkcyjny (lokalne odtworzenie konfiguracji prod) uruchamiaj przez: `docker compose -f compose.yaml up -d --build`.
- Wariant produkcyjny zatrzymuj przez: `docker compose -f compose.yaml down`.
- Nie uruchamiaj na hoście komend `npm install`, `npm run dev`, `hugo server` ani innych lokalnych instalacji zależności, chyba że człowiek wyraźnie o to poprosi.
- „Lokalne testy” w tym repo oznaczają testy w kontenerach Compose, nie na hoście.

## Dokumentacja

- Dla agenta źródłem prawdy są pliki `AGENTS.md`.
- Jeśli człowiek prosi o zapamiętanie zasady lub preferencji, zapisz ją w adekwatnym pliku `AGENTS.md` odpowiadającym jej zakresowi.
- Informacje dla agentów zapisuj w `AGENTS.md` najbliższym zakresowi danej funkcji lub obszaru; globalny `AGENTS.md` traktuj jako miejsce na zasady przekrojowe, gdy nie ma bardziej adekwatnego pliku.
- Szczegóły techniczne integracji zapisuj w `docs/`.
- Indeks dokumentacji technicznej znajduje się w `docs/AGENTS.md`.
- Dokumentacji integracji API szukaj w `docs/apis/`, a ich indeks i zasady w `docs/apis/AGENTS.md`.
- Specyfikacji funkcjonalności szukaj w `docs/specs/`, a ich indeks i zasady w `docs/specs/AGENTS.md`.
- Runbooków operacyjnych szukaj w `docs/runbooks/`, a ich indeks i zasady w `docs/runbooks/AGENTS.md`.
- Nazwy plików instrukcji zapisuj dokładnie jako `AGENTS.md`.
- W plikach `AGENTS.md` nie twórz odniesień do plików `README.md`.
- W każdym folderze projektu powinien istnieć plik `README.md` opisujący zawartość folderu oraz informacje o podkatalogach.
- Dodawaj krótkie komentarze tylko tam, gdzie logika nie jest oczywista.
- W dokumentacji repo nie używaj bezwzględnych ścieżek z lokalnego komputera; stosuj ścieżki względne repo albo publiczne URL.
- Gdy podajesz źródła komponentów lub zależności, używaj podlinkowanych adresów do stron upstream, z których można je pobrać.

## Komunikacja zmian

- W podsumowaniu podawaj:
  - co zostało zmienione,
  - dlaczego,
  - jak to zweryfikowano.

## Licencje i oznaczenia

- Zachowuj w kodzie, repozytorium i dokumentacji tylko te informacje licencyjne i noty, które są wymagane przez licencje użytego oprogramowania.
- Na froncie strony nie dodawaj informacji o pochodzeniu użytych rozwiązań, jeśli dana licencja nie wymaga ich wyraźnie w interfejsie użytkownika.
- Spełniaj wymogi licencyjne bez nadmiarowego brandingu lub zbędnych oznaczeń w UI.

## Kolejność pracy

- Domyślnie pracuj w kolejności:
  - najpierw specyfikacja do przejrzenia,
  - potem akceptacja człowieka,
  - dopiero po akceptacji wdrażanie.
- Nie przechodź do implementacji przed akceptacją specyfikacji, chyba że człowiek wyraźnie nakaże pominąć ten etap.

## Interpretacja poleceń

- Zakładaj, że człowiek może popełniać literówki i używać skrótów myślowych.
- Nie podążaj ślepo za nieprecyzyjnym zapisem, tylko prostuj intencję na podstawie dostępnej wiedzy.
- Dopytuj użytkownika dopiero wtedy, gdy po takiej próbie pozostaje więcej niż jedna sensowna interpretacja.

## Zgody i uprawnienia

- Commit i push wykonuj tylko po wyraźnej zgodzie człowieka.
- `sudo`: korzystaj z `sudo` tylko po wyraźnej zgodzie człowieka.

## Nadpisywanie wytycznych

- Jeśli człowiek każe zrobić coś, co jest sprzeczne z `AGENTS.md`:
  - zadaj jedno pytanie potwierdzające, czy wykonać to pomimo wytycznych,
  - po potwierdzeniu wykonaj polecenie,
  - w odpowiedzi wskaż, które wytyczne zostały nadpisane.

## Ręczne zmiany człowieka

- Jeśli widzisz zmiany w repo, których nie zrobiłeś:
  - nie cofaj ich automatycznie,
  - traktuj je jako intencjonalne,
  - możesz je wskazać w odpowiedzi, ale bez samodzielnego odkręcania.

## Repozytorium

- Główne repozytorium (origin): `git@github.com:Open-EHDS/openehds-website.git`.
- Oprogramowanie hostujące (origin): `GitHub`.
- Przy publikacji czegokolwiek na GitHub (PR, komentarze, issue) stosuj runbook `docs/runbooks/publikowanie-na-github.md`.
- Przy operacjach na GitHub domyślnie używaj dostępnego MCP. Gdy MCP nie wystarcza, używaj `gh`, a bez niego helperów API opisanych w `docs/apis/GitHub-API.md`.
- Gdy człowiek prosi o zamknięcie issue, a zakres realizacji jest znany, domyślnie: dodaj komentarz po polsku z podsumowaniem wykonanych prac i linkami do commitów, a następnie zamknij issue.

## Skróty poleceń GitHub

- `c` oznacza przygotowanie commita bez push.
- `c+p` oznacza przygotowanie commita i push.
- `c+p+pr` oznacza przygotowanie commita, push i utworzenie Pull Requesta.
- `rc #NNN` oznacza przejrzenie komentarzy w PR `#NNN` i uwzględnienie ich w dalszej pracy.
- `rc` oznacza to samo dla aktualnego lub ostatniego PR; jeśli PR nie da się ustalić jednoznacznie, zapytaj o numer.
- Skróty nie znoszą wymogu wyraźnej zgody człowieka na commit, push i publikację PR.

## PR i branchowanie

- Domyślnie pracuj na branchu i wprowadzaj zmiany do `main` przez Pull Request.
- Poza sytuacjami wyjątkowymi nie rób commitów bezpośrednio do `main`.
- Commituj na branchu zgodnym z tematem commita; dla nowego, niezależnego tematu twórz nowy branch.
- Jeśli pracujesz już na branchu zgodnym z tematem i PR dla niego nie został jeszcze utworzony, kolejne commity rób na tym samym branchu; nowy branch twórz tylko na wyraźne polecenie człowieka.
- Jeśli branch został już zmergowany do `main`, commituj na nim tylko w ostateczności i wyłącznie dla poprawek bezpośrednio związanych z tym samym zakresem.
- Każdy commit przygotowuj jako możliwie mały i atomowy; przy skrótach `c`, `c+p` i `c+p+pr` stosuj runbook `docs/runbooks/atomowe-commity.md`.
- Każdy commit powinien mieć nazwę i krótki opis zmian.
- Przy review Pull Requesta stosuj runbook `docs/runbooks/pr-review.md`.
- Przy diagnostyce błędów CI stosuj runbook `docs/runbooks/diagnostyka-ci.md`.
- Przy tworzeniu albo weryfikacji issue stosuj runbook `docs/runbooks/przygotowanie-issue-i-specyfikacji.md`.
