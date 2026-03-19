# **OpenEHDS**

**Misja i Zakres**

## **Misja**

OpenEHDS opiera się na przekonaniu, że infrastruktura EHDS musi być:

* interoperacyjna z założenia,  
* domyślnie chroniąca prywatność,  
* realistyczna operacyjnie,  
* oraz zrozumiała publicznie.

Inspirując się ideą otwartych dóbr cyfrowych (takich jak Wikipedia), OpenEHDS dąży do działania jako **neutralna, niekomercyjna fundacja**, umożliwiająca współpracę ponadsektorową i międzynarodową.

OpenEHDS dąży także do tworzenia neutralnej przestrzeni dialogu pomiędzy interesariuszami EHDS — w tym instytucjami publicznymi, regulatorami, organizacjami pacjenckimi, środowiskiem naukowym oraz sektorem technologicznym. Poprzez otwarte dyskusje, warsztaty i współtworzenie architektur referencyjnych inicjatywa ma wspierać budowanie wspólnego rozumienia wyzwań i praktycznych rozwiązań związanych z wdrażaniem EHDS.

## **Zakres**

### **1\. Koncentracja na secondary use danych medycznych**

OpenEHDS koncentruje się przede wszystkim na **wtórnym wykorzystaniu elektronicznych danych medycznych (secondary use) w rozumieniu EHDS**, gdzie złożoność regulacyjna, techniczna i organizacyjna jest największa, a obecna fragmentacja stanowi istotną barierę wdrożeniową.

Zakres inicjatywy obejmuje cały cykl życia secondary use, w szczególności:

* przygotowanie zbiorów danych do wtórnego wykorzystania,  
* kontrolowany dostęp na podstawie data permit,  
* funkcjonowanie secure processing environments,  
* audytowalność, przejrzystość oraz zarządzanie cyklem życia danych.

### **2\. Rzeczywistość EHDS: kontrolowana warstwa pośrednicząca danych**

EHDS nie wprowadza swobodnej federacji ani nieograniczonego dostępu do danych zdrowotnych.  
Zamiast tego ustanawia **model dostępu oparty na pozwoleniach administracyjnych, ograniczony czasowo, celowo i podlegający pełnej kontroli oraz audytowi**.

W praktyce oznacza to, że **istnienie kontrolowanej warstwy pośredniczącej danych jest nieuniknione**.

OpenEHDS wprost uznaje i adresuje tę rzeczywistość, definiując ją jako:

**Warstwę mediacji danych ograniczoną zakresem data permit i wymuszającą polityki dostępu**

Warstwa ta:

* **nie jest centralnym data lake’iem**,  
* **nie jest trwałym repozytorium danych**,  
* **nie jest komercyjną platformą danych**.

Jest to **tymczasowa, kontrolowana warstwa zestawiania i przetwarzania danych**, wymagana do:

* tworzenia zbiorów danych zgodnie z zatwierdzonym data permit,  
* egzekwowania zasad opt-out, ograniczenia celu i wyjątków prawnych,  
* pseudonimizacji, anonimizacji, filtrowania i agregacji danych,  
* działania w ramach secure processing environment,  
* zapewnienia pełnego logowania, audytu oraz kontrolowanego usunięcia danych po zakończeniu okresu obowiązywania permitu.

EHDS nie eliminuje tej warstwy \- **EHDS ją formalnie definiuje, ogranicza i wymusza**.  
Celem OpenEHDS jest uczynienie jej **przejrzystą, otwartą i możliwą do ponownego wykorzystania**.

### **3\. Co tworzy OpenEHDS (a czego nie robi)**

#### **OpenEHDS tworzy:**

Otwarte komponenty referencyjne i wzorce architektoniczne, w szczególności:

* **silniki zestawiania zbiorów danych świadome data permit**,  
* **moduły egzekwowania polityk i reguł** (cel przetwarzania, opt-out, wyjątki),  
* **konektory pomiędzy health data holders, health data access bodies oraz secure processing environments**,  
* **komponenty audytu, logowania i data lineage** zgodne z wymaganiami EHDS,  
* **mechanizmy zarządzania cyklem życia danych tymczasowych** (TTL, kontrolowane usuwanie, wersjonowanie zbiorów),  
* **mapowania interoperacyjności i transformacje danych** zgodne z EHDS, FHIR oraz przyszłymi aktami wykonawczymi.

Komponenty te są projektowane tak, aby mogły być:

* wdrażane przez health data access bodies,  
* wdrażane przez trusted health data holders,  
* adaptowane do krajowych implementacji EHDS,  
* wykorzystywane jako architektury referencyjne w zamówieniach publicznych.

#### **OpenEHDS nie:**

* pełni roli health data access body,  
* hostuje ani nie monetyzuje danych medycznych,  
* nie działa jako operator secure processing environment,  
* nie zastępuje krajowych ani unijnych struktur zarządczych.

OpenEHDS jest **enablerem**, a nie operatorem systemu.

### **4\. Zarządzanie, neutralność i zaufanie**

OpenEHDS działa jako **fundacja** oparta na:

* przejrzystym modelu zarządzania,  
* otwartych procesach kontrybucji,  
* publicznej dokumentacji i jawności decyzji,  
* wyraźnym rozdzieleniu od komercyjnego wykorzystania rezultatów.

Celem inicjatywy jest bycie:

* wiarygodnym partnerem dla instytucji publicznych,  
* praktycznym wsparciem dla placówek ochrony zdrowia,  
* zaufanym punktem odniesienia dla regulatorów,  
* realnym narzędziem dla dostawców technologii.

### **5\. Dlaczego OpenEHDS jest potrzebne**

EHDS zapewnia ramy prawne, ale nie zapewnia prostoty wdrożeniowej.

Bez wspólnych, otwartych i audytowalnych komponentów:

* każde państwo członkowskie będzie budować podobne rozwiązania od zera,  
* fragmentacja zostanie odtworzona pod nową nazwą,  
* mniejsze organizacje zostaną wykluczone przez koszt i złożoność,  
* a zaufanie do EHDS może zostać podważone przez nieprzejrzyste lub zamknięte implementacje.

OpenEHDS istnieje po to, aby **przekształcić EHDS z ramy prawnej w wspólną, techniczną rzeczywistość**.

Pomaga również ograniczyć lukę wiedzy wokół EHDS poprzez udostępnianie otwartych zasobów edukacyjnych oraz wspieranie dialogu między interesariuszami, co jest kluczowe dla budowania zaufania do infrastruktury wymiany danych zdrowotnych w Europie.