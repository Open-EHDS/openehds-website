# Wdrożenie Hugoplate jako bazy strony OpenEHDS Foundation

## Cel biznesowy i zakres

Celem jest wykorzystanie `Hugoplate` jako jednorazowej bazy startowej dla publicznej strony `OpenEHDS Foundation`, a następnie pełne przejęcie tego kodu do repozytorium projektu.

Po wdrożeniu:

- `Hugoplate` nie jest traktowany jako zewnętrzny szablon aktualizowany z upstreamu,
- kod szablonu staje się zwykłą częścią projektu,
- można go dowolnie ciąć, przebudowywać, przepisywać i dostosowywać bez zachowania kompatybilności z oryginałem.

Zakres tej specyfikacji obejmuje:

- techniczne wszycie `Hugoplate` w istniejącą stronę,
- dostosowanie struktury informacji do potrzeb fundacji,
- przygotowanie kompletnej, dwujęzycznej wersji startowej z placeholderami,
- dostosowanie uruchamiania lokalnego (`dev`) i builda produkcyjnego (`prod`) do realnych wymagań szablonu.

Specyfikacja nie pozostawia otwartych punktów decyzyjnych. Wszystkie kluczowe założenia zostały ustalone.

## Ustalone decyzje

### Model użycia szablonu

- Wykorzystujemy całość `Hugoplate`: układ, komponenty, gotowe mechanizmy i strukturę projektu.
- Nie ograniczamy się do samego wyglądu.
- Wszystkie elementy mogą zostać później zachowane, zmienione lub wycięte, ale startowo mają być dostępne i dostosowane do potrzeb fundacji.

### Pipeline techniczny

- Akceptowany jest docelowy pipeline oparty o `Node.js + Hugo + Hugo Modules`.
- `compose.dev.yaml` i `compose.yaml` mają zostać przebudowane pod realne wymagania `Hugoplate`.
- Nie utrzymujemy sztucznego ograniczenia do „czystego kontenera Hugo”, jeśli byłoby to sprzeczne z architekturą szablonu.

### Język i lokalizacja

- Strona ma być dwujęzyczna.
- Wszystkie wersje językowe mają działać w subfolderach językowych.
- Angielski ma działać pod `/en/`.
- Polski ma działać pod `/pl/`.
- Adres główny (`/`) nie ma być stroną treści w konkretnym języku.
- Adres główny (`/`) ma być osobnym language gateway, który kieruje użytkownika do właściwej wersji językowej.
- W bazowym wdrożeniu gateway ma działać jako jawna strona wyboru języka.
- Ewentualne automatyczne przekierowanie na podstawie języka przeglądarki jest dopuszczalne jako późniejsze rozszerzenie, ale nie jest wymagane w pierwszym wdrożeniu.

### Główna architektura informacji w wersji startowej

W pierwszej wersji obowiązkowo mają istnieć kompletne strony lub sekcje z placeholderami:

- strona główna,
- about us,
- programy / obszary działań,
- zasoby,
- społeczność,
- roadmapa,
- kontakt,
- publikacje.

### Sekcja publikacji

- Sekcja nie może być nazywana `blog`.
- Nazwa użytkowa i redakcyjna: `Publikacje`.
- Adres URL sekcji: `/publications`.

### Sekcja zespołu

- Strona `About us` ma zawierać podział na:
  - `Core Team`,
  - `Contributors`.
- Mechanizmy `Hugoplate` związane z autorami mogą zostać wykorzystane technicznie jako baza do tego podziału.
- Nie projektujemy osobnej, konkurencyjnej sekcji `Authors` jako głównego bytu informacyjnego; logika zespołu ma być osadzona w `About us`.

### GitHub i open source

- Pierwsza wersja ma przewidywać miejsce na linki do organizacji GitHub i do repozytoriów.
- Konkretne URL-e zostaną dostarczone później.
- Do czasu dostarczenia finalnych adresów należy użyć wyraźnie oznaczonych placeholderów.

### Identyfikacja wizualna

- Pierwsza wersja ma zawierać placeholdery dla wszystkich elementów brandingu:
  - logo,
  - kolory,
  - grafiki,
  - treści marketingowe,
  - linki zewnętrzne.
- Na tym etapie nie zakładamy finalnych assetów marki.

## Założenia funkcjonalne

### Ogólne

- Strona ma wyglądać jak kompletna, gotowa publiczna obecność fundacji, mimo że część treści będzie tymczasowa.
- Placeholdery mają być świadome i uporządkowane, a nie losowe lub demo-szablonowe.
- Treści demonstracyjne `Hugoplate` mają zostać zastąpione treściami pasującymi do fundacji rozwijającej i udostępniającej otwarte oprogramowanie dla EHDS.

### Strona główna

Strona główna ma:

- zachować nowoczesny marketingowo-produktowy charakter `Hugoplate`,
- zostać przepisana pod fundację OpenEHDS,
- akcentować:
  - misję fundacji,
  - udostępnianie oprogramowania open source,
  - praktyczne wdrożenia dla EHDS,
  - współpracę z partnerami,
  - wejście do sekcji publikacji, zasobów i roadmapy.

### About us

Strona `About us` ma zawierać:

- opis misji i modelu działania fundacji,
- opis obszarów pracy,
- sekcję `Core Team`,
- sekcję `Contributors`,
- miejsce na link do organizacji GitHub,
- miejsce na linki do wybranych repozytoriów lub obszarów projektowych.

### Programy / obszary działań

Sekcja ma opisywać główne linie pracy fundacji, np.:

- rozwój oprogramowania,
- governance i standardy wdrożeniowe,
- wsparcie adopcji i integracji,
- publikacja narzędzi i materiałów pomocniczych.

Na starcie mogą to być placeholderowe opisy, ale ułożone jak realna oferta działań.

### Zasoby

Sekcja `Resources` ma być biblioteką materiałów i wiedzy. W wersji startowej ma przewidywać miejsce na:

- dokumenty,
- przewodniki,
- noty architektoniczne,
- odnośniki do repozytoriów,
- materiały informacyjne dla partnerów.

### Społeczność

Sekcja `Community` ma komunikować:

- model współpracy,
- możliwość udziału contributorów,
- przyszłe miejsce na working groups,
- ścieżkę wejścia dla osób chcących współtworzyć projekt.

### Roadmapa

Sekcja `Roadmap` ma pokazywać:

- najbliższe etapy rozwoju fundacji,
- kolejność prac,
- plan publikacji kolejnych elementów,
- czytelny placeholder harmonogramu.

### Kontakt

Sekcja `Contact` ma być gotowym publicznym punktem wejścia dla:

- partnerów,
- contributorów,
- instytucji zainteresowanych współpracą,
- osób pytających o software i adopcję.

Formularz może pozostać placeholderowy, ale struktura strony ma być gotowa.

### Publikacje

Sekcja `Publikacje` ma przejąć techniczne możliwości sekcji blogowej `Hugoplate`, ale zostać całkowicie przemianowana i przepisana.

Ma obsługiwać:

- artykuły,
- materiały informacyjne,
- publikacje eksperckie,
- aktualności projektowe.

Terminologia `blog`, `blog posts` i analogiczne etykiety mają zostać usunięte z interfejsu i treści.

## Zakres techniczny wdrożenia

### Integracja kodu szablonu

Do repozytorium mają zostać przeniesione tylko te elementy `Hugoplate`, które są potrzebne do działania strony jako własnego projektu, w szczególności:

- konfiguracja Hugo,
- konfiguracja `Hugo Modules`,
- assety,
- layouty,
- części `static`,
- konfiguracja wielojęzyczna,
- skrypty potrzebne do generowania stylów,
- zależności `Node.js`,
- pliki niezbędne do poprawnego budowania strony.

Nie należy przenosić zbędnych artefaktów lub elementów obcych temu repozytorium, takich jak:

- `node_modules`,
- pliki tymczasowe,
- build output,
- obce workflow CI/CD, jeśli nie są potrzebne w tym projekcie,
- pliki marketingowe i metadane niezwiązane z działaniem strony.

### Dostosowanie katalogu `site`

Katalog `site/` ma stać się właściwym katalogiem źródłowym strony i zawierać docelową strukturę potrzebną do działania `Hugoplate` po adaptacji.

Obecne minimalne pliki testowe w `site/` mają zostać zastąpione nową strukturą wynikającą z wdrożenia szablonu.

### Docker i uruchamianie

`compose.dev.yaml` i `compose.yaml` mają zachować spójny model działania, ale zostać dostosowane do faktycznych wymagań `Hugoplate`.

Wymagania:

- `dev` ma zapewniać wygodną pracę lokalną, w tym generowanie stylów i uruchomienie serwera developerskiego,
- `prod` ma wykonywać poprawny build produkcyjny i serwować gotowe pliki przez `nginx`,
- oba środowiska mają zachować podobny model użycia,
- oba środowiska mają działać na tym samym porcie zewnętrznym,
- konfiguracja ma pozostać możliwie bliźniacza, ale wyspecjalizowana pod różne cele.

### Artefakty i porządek repo

Repozytorium ma pozostać czyste z punktu widzenia kontroli wersji.

Należy zapewnić ignorowanie i niecommitowanie:

- locków runtime,
- wyników builda,
- katalogów cache,
- plików generowanych przez narzędzia front-endowe,
- wszystkich artefaktów tymczasowych wynikających z uruchamiania `Hugoplate`.

## Zakres dostosowania treści

### Zasada ogólna

Wszystkie demo-treści `Hugoplate` mają zostać zastąpione treściami pasującymi do OpenEHDS Foundation.

Dotyczy to w szczególności:

- nagłówków,
- CTA,
- treści strony głównej,
- menu,
- stopki,
- opisów sekcji,
- danych autorów,
- wpisów demo,
- treści polityk i stron informacyjnych,
- linków społecznościowych i nawigacyjnych.

### Placeholdery

Placeholdery mają:

- wyglądać jak zamierzone treści startowe,
- być spójne z misją fundacji,
- przewidywać przyszłe podmiany na treści finalne,
- nie wyglądać jak surowe demo motywu.

Placeholdery nie mogą:

- odwoływać się do twórców `Hugoplate`,
- reklamować oryginalnego szablonu,
- zawierać obcych brandingów,
- sugerować, że strona nadal jest demo startera.

## Wpływ na istniejące elementy systemu

Zmiana wpływa na:

- katalog `site/` i jego strukturę źródłową,
- konfigurację Docker Compose,
- sposób lokalnego developmentu,
- sposób budowania produkcji,
- model treści i organizację nawigacji,
- pliki ignorowane przez Git.

Zmiana nie ma naruszać:

- zasad dotyczących self-hostingu,
- modelu opartego o pliki i Markdown,
- braku panelu administracyjnego,
- możliwości dalszego pełnego customizowania kodu.

## Przypadki brzegowe

### Brak finalnych materiałów brandingu

System ma działać poprawnie bez finalnego logo, kolorów i gotowych materiałów graficznych.
Placeholdery mają zapewnić kompletny, spójny wygląd do czasu dostarczenia właściwych assetów.

### Brak finalnych linków GitHub

Brak finalnych URL-i nie blokuje wdrożenia.
Należy użyć czytelnych placeholderów, które później będzie można łatwo podmienić.

### Zmiana zakresu po wdrożeniu

Po wdrożeniu nie obowiązuje zgodność z upstreamem `Hugoplate`.
Każda część kodu może być później przepisana lub usunięta bez konieczności zachowania kompatybilności.

### Rozbudowa sekcji publikacji

Sekcja `Publikacje` ma startowo działać jak przepisana sekcja blogowa, ale musi nadawać się do dalszej rozbudowy o materiały eksperckie, aktualności i dokumenty.

## Kryteria akceptacji

Wdrożenie zostaje uznane za zgodne ze specyfikacją, gdy:

- `Hugoplate` zostanie fizycznie wszyty do projektu jako baza kodu w `site/`,
- projekt nie będzie zależał od dalszego aktualizowania upstreamowego szablonu,
- strona będzie działać w trybie `dev` i `prod` z użyciem Docker Compose,
- `dev` i `prod` będą oparte o faktyczny pipeline wymagany przez `Hugoplate`,
- interfejs i treści nie będą wyglądały jak demo oryginalnego szablonu,
- strona będzie dwujęzyczna,
- wszystkie wersje językowe będą działały w subfolderach, w tym `/en/` i `/pl/`,
- adres `/` będzie działał jako language gateway,
- sekcja `Publikacje` zastąpi terminologię blogową,
- `About us` będzie zawierać `Core Team` i `Contributors`,
- będą istniały placeholdery dla linków GitHub i repozytoriów,
- repo nie będzie zawierało artefaktów wygenerowanych przez build i development,
- całość będzie stanowić sensowną, kompletną bazę do dalszej pełnej customizacji.

## Historia zmian

- 2026-02-27: Utworzono pierwszą, finalną wersję specyfikacji po domknięciu wszystkich decyzji wymaganych do wdrożenia.
