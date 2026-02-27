# AGENTS

Ten plik definiuje podstawowe zasady dla agentów (AI i automatyzacji) pracujących w tym repozytorium.

## Język projektu

- Cała komunikacja w projekcie odbywa się w języku polskim.
- Dotyczy to w szczególności: dokumentacji, opisów zmian, nazewnictwa i treści commitów oraz komunikacji między członkami zespołu i agentami.

## Zakres

- Wprowadzaj zmiany minimalne i zgodne z aktualnym celem zadania.
- Nie modyfikuj plików niezwiązanych z zadaniem.
- Nie usuwaj istniejącej funkcjonalności bez wyraźnego powodu i opisu.

## Jakość zmian

- Preferuj czytelność i prostotę nad nadmierną złożonością.
- Po zmianach uruchamiaj dostępne testy/lintery.
- Gdy brak testów, opisz krótko jak zweryfikowano poprawność zmian.

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

## PR i branchowanie

- Domyślnie pracuj na branchu i wprowadzaj zmiany do `main` przez Pull Request.
- Poza sytuacjami wyjątkowymi nie rób commitów bezpośrednio do `main`.
- Każdy commit przygotowuj jako możliwie mały i atomowy.
- Każdy commit powinien mieć nazwę i krótki opis zmian.
