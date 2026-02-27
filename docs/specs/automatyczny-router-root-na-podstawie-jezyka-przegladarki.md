# Specyfikacja: automatyczny router root na podstawie języka przeglądarki

## Źródło

- issue: [Open-EHDS/openehds-website#1](https://github.com/Open-EHDS/openehds-website/issues/1)

## Cel biznesowy

Użytkownik wchodzący na neutralny adres główny `/` powinien możliwie szybko trafić na właściwą wersję językową serwisu bez konieczności ręcznego wyboru języka.

Celem jest skrócenie ścieżki wejścia do treści oraz zmniejszenie liczby wejść kończących się na stronie technicznej zamiast na realnej wersji językowej serwisu.

## Zakres

Specyfikacja dotyczy wyłącznie zachowania strony root `/`, czyli adresu bez prefiksu językowego.

Zakres obejmuje:

- wykrycie preferencji językowych przeglądarki,
- dopasowanie preferencji do wspieranych języków serwisu,
- automatyczne przekierowanie z `/` do właściwej wersji językowej,
- zapewnienie bezpiecznego fallbacku, gdy nie da się ustalić języka.

Zakres nie obejmuje:

- zmian routingu dla adresów już zawierających prefiks językowy,
- tłumaczenia URL-i podstron,
- geolokalizacji,
- personalizacji na podstawie cookies lub konta użytkownika.

## Aktualne założenia projektu

- wspierane wersje językowe serwisu: `en` i `pl`,
- publiczne URL-e pozostają konsekwentnie w języku angielskim,
- root `/` jest technicznym punktem wejścia, a nie docelową stroną treści,
- domyślny fallback językowy powinien prowadzić do wersji angielskiej.

## Wymagania funkcjonalne

### 1. Punkt działania routera

Automatyczne przekierowanie działa wyłącznie dla adresu:

- `/`

Jeżeli użytkownik otwiera adres zawierający prefiks językowy, mechanizm nie wykonuje dodatkowego przekierowania.

Przykłady adresów poza zakresem:

- `/en/`
- `/pl/`
- `/en/resources/`
- `/pl/licensing/`

### 2. Źródło preferencji językowej

Preferowany język użytkownika powinien być ustalany na podstawie ustawień przeglądarki.

W wariancie klientowym należy korzystać z:

- `navigator.languages`
- `navigator.language`

Lista języków powinna być analizowana w kolejności preferencji zadeklarowanej przez przeglądarkę.

### 3. Normalizacja języków

Kody języków należy normalizować do bazowego kodu języka.

Przykłady:

- `pl-PL` -> `pl`
- `pl` -> `pl`
- `en-US` -> `en`
- `en-GB` -> `en`

Normalizacja powinna ignorować część regionalną przy dopasowaniu.

### 4. Dopasowanie do języków wspieranych

Router powinien przejść po liście preferowanych języków i wybrać pierwszy język, który pasuje do wspieranej listy:

- `pl`
- `en`

Reguły:

- pierwsze dopasowanie `pl` kieruje na `/pl/`,
- pierwsze dopasowanie `en` kieruje na `/en/`,
- brak dopasowania kieruje na `/en/`.

### 5. Zachowanie query string

Jeżeli użytkownik otwiera root z parametrami zapytania, przekierowanie powinno zachować query string.

Przykłady:

- `/?ref=github` -> `/en/?ref=github`
- `/?utm_source=test` -> `/pl/?utm_source=test`

### 6. Zachowanie historii przeglądarki

Przekierowanie powinno używać mechanizmu, który nie zostawia technicznego wejścia na `/` jako osobnego kroku w historii przeglądarki.

Preferowane zachowanie:

- `location.replace(...)`

## Wymagania niefunkcjonalne

### 1. Szybkość działania

Przekierowanie powinno nastąpić możliwie szybko po wejściu na `/`, tak aby użytkownik nie widział długotrwałego ekranu pośredniego.

### 2. Minimalizm implementacji

Rozwiązanie powinno być lekkie i nie wymagać pełnego ładowania właściwej aplikacji strony przed podjęciem decyzji o przekierowaniu.

### 3. Zgodność z architekturą statyczną

Rozwiązanie powinno być zgodne z obecnym charakterem serwisu jako strony statycznej budowanej przez Hugo.

## Preferowany wariant techniczny

Na obecnym etapie preferowany jest wariant klientowy realizowany w technicznym wejściu root.

Rekomendowane miejsce:

- `site/static/index.html`

Powody:

- najmniejsza ingerencja w resztę szablonów,
- brak potrzeby przebudowy routingu serwerowego,
- prosty test lokalny i prosty deploy,
- zgodność z aktualnym wykorzystaniem neutralnego gatewaya na `/`.

## Fallback bez JavaScript

Jeżeli JavaScript jest niedostępny lub zablokowany:

- użytkownik pozostaje na stronie root,
- strona root powinna zawierać prosty fallback umożliwiający ręczny wybór języka.

Minimalny fallback powinien udostępniać linki:

- `/en/`
- `/pl/`

## Przypadki brzegowe

### 1. Brak rozpoznanego języka

Jeżeli przeglądarka nie zwraca języka albo zwraca wyłącznie języki spoza listy wspieranej, użytkownik trafia do:

- `/en/`

### 2. Nietypowa kolejność preferencji

Jeżeli przeglądarka zwraca kilka języków, router bierze pierwszy wspierany język z listy.

Przykład:

- `de-DE`, `pl-PL`, `en-US` -> `/pl/`

### 3. Ręczne wejście na wersję językową

Jeżeli użytkownik ręcznie wejdzie na adres z prefiksem językowym, router root nie ingeruje w nawigację.

### 4. Rozszerzenie o nowe języki w przyszłości

Lista wspieranych języków powinna być łatwa do rozszerzenia bez przebudowy całego mechanizmu.

## Kryteria akceptacji

- wejście na `/` z preferencją `pl-PL` przekierowuje do `/pl/`,
- wejście na `/` z preferencją `en-US` przekierowuje do `/en/`,
- wejście na `/` z preferencją niewspieraną, np. `de-DE`, przekierowuje do `/en/`,
- wejście na `/?foo=1` zachowuje query string po przekierowaniu,
- wejście bezpośrednie na `/en/` nie uruchamia dodatkowego przekierowania,
- wejście bezpośrednie na `/pl/` nie uruchamia dodatkowego przekierowania,
- przy wyłączonym JavaScript użytkownik może ręcznie przejść do `/en/` albo `/pl/`.

## Wpływ na istniejące elementy systemu

Zmiana wpływa na:

- techniczne wejście root `/`,
- zachowanie pierwszego wejścia użytkownika do serwisu,
- minimalny dokument statyczny używany jako gateway.

Zmiana nie powinna wpływać na:

- strukturę treści w `site/content/`,
- routing już istniejących wersji językowych,
- menu, stopkę i URL-e poszczególnych podstron.

## Ryzyka

- nieprawidłowe przekierowanie może utrudnić wejście do serwisu zamiast je uprościć,
- zbyt agresywny redirect bez fallbacku może pogorszyć dostępność przy wyłączonym JavaScript,
- jeśli w przyszłości zostaną dodane kolejne języki, logika musi być utrzymywana razem z listą wspieranych wersji językowych.

## Historia zmian

- `2026-02-27`: utworzenie pierwszej wersji specyfikacji na podstawie issue `#1`
