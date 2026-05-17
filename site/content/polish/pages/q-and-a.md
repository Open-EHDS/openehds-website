---
title: "Q&A"
meta_title: "Q&A"
description: "Najważniejsze pytania i odpowiedzi dotyczące OpenEHDS oraz wdrażania EHDS."
layout: "qa"
draft: false
qa:
  - question: "Czy EHDS to nie jest po prostu europejskie rozporządzenie? Po co potrzebna jest taka inicjatywa?"
    answer: |
      EHDS tworzy obowiązki prawne dotyczące interoperacyjności, wtórnego wykorzystania danych, bezpiecznych środowisk przetwarzania oraz governance. Nie dostarcza jednak wspólnych technicznych elementów bazowych. Bez otwartych, reużywalnych komponentów każde państwo i każda instytucja będą wdrażać te same warstwy inaczej, zwiększając fragmentację, koszty i ryzyka. OpenEHDS istnieje po to, aby przełożyć EHDS z ram prawnych na możliwą do wdrożenia, wspólną rzeczywistość techniczną.
  - question: "Czy próbujecie zbudować europejską platformę danych zdrowotnych albo data lake?"
    answer: |
      EHDS wyraźnie zakazuje nieograniczonej centralizacji danych zdrowotnych. OpenEHDS nie hostuje danych, nie prowadzi platform i nie tworzy centralnego repozytorium. Koncentrujemy się na tymczasowych komponentach mediacji danych ograniczonych zakresem permitu, działających wewnątrz bezpiecznych środowisk przetwarzania zdefiniowanych przez EHDS. To architektura referencyjna i narzędzia, a nie właściciel platformy.
  - question: "Kto jest właścicielem danych w waszym modelu?"
    answer: |
      W ramach EHDS posiadacze danych zdrowotnych pozostają administratorami w zakresie udostępniania danych, a użytkownicy danych zdrowotnych są administratorami w zakresie przetwarzania na podstawie permitu. OpenEHDS nie zmienia ról administratorów. Nasze komponenty są projektowane tak, aby egzekwować istniejące role prawne.
  - question: "Czy chodzi głównie o badania naukowe, czy także o zastosowania komercyjne?"
    answer: |
      EHDS dopuszcza wtórne wykorzystanie danych do celów badawczych, zdrowia publicznego, innowacji i regulacyjnych, ale ściśle zakazuje reklamy, dyskryminacji ubezpieczeniowej i szkodliwych zastosowań. OpenEHDS działa ściśle w tych granicach. Nie umożliwiamy monetyzacji danych osobowych; umożliwiamy zgodny z przepisami dostęp według zasad EHDS.
  - question: "A co z GDPR/RODO - czy nie ma konfliktu z EHDS?"
    answer: |
      GDPR/RODO nadal obowiązuje horyzontalnie. EHDS dodaje sektorowe zasady, szczególnie dotyczące dostępu, interoperacyjności i bezpiecznego przetwarzania. OpenEHDS opiera się na założeniu, że GDPR/RODO i EHDS stosuje się łącznie, a nasze komponenty mają uczynić to współistnienie operacyjnym, a nie tylko teoretycznym.
  - question: "Dlaczego open source? Czy to nie jest ryzykowne przy danych zdrowotnych?"
    answer: |
      OpenEHDS nie ujawnia danych; ujawnia kod i logikę działania. W tak wrażliwej domenie przejrzystość sposobu egzekwowania polityk, permitów i zabezpieczeń jest zaletą. Zamknięte, własnościowe wdrożenia infrastruktury krytycznej dla EHDS tworzą lock-in i problemy z zaufaniem. Open source umożliwia audytowalność, peer review i zaufanie publiczne.
  - question: "Dla kogo to jest w praktyce?"
    answer: |
      * zaufani posiadacze danych zdrowotnych
      * instytucje publiczne przygotowujące bezpieczne środowiska przetwarzania
      * dostawcy potrzebujący warstw integracyjnych zgodnych z EHDS
      * badacze poruszający się w modelu dostępu opartego na permitach
      * regulatorzy i twórcy polityk szukający wdrożeń referencyjnych

      OpenEHDS działa celowo na poziomie infrastruktury, nie aplikacji końcowych.
  - question: "Czy to nie dubluje tego, co i tak zbudują dostawcy lub duże chmury?"
    answer: |
      Dostawcy komercyjni zawsze będą optymalizować pod własne platformy. OpenEHDS koncentruje się na neutralnych względem dostawców komponentach referencyjnych, które każdy może przyjąć, rozszerzyć albo osadzić we własnym rozwiązaniu. Zmniejsza to zależność od pojedynczych dostawców i pomaga instytucjom publicznym zamawiać rozwiązania oparte na otwartych standardach, a nie na własnościowej logice.
  - question: "Jakie główne ryzyka widzicie przy EHDS?"
    answer: |
      Ryzykiem nie jest sam EHDS, ale sposób jego wdrożenia.

      Kluczowe ryzyka:

      * fragmentacja wdrożeń krajowych
      * nadmierna centralizacja udająca interoperacyjność
      * luki bezpieczeństwa na poziomie API i integracji
      * nieprzejrzyste rozwiązania własnościowe osłabiające zaufanie
      * wykluczenie mniejszych instytucji przez złożoność

      OpenEHDS istnieje po to, aby te ryzyka zmniejszać, a nie dodawać nowe.
  - question: "Jak można zaangażować się w OpenEHDS?"
    answer: |
      Na kilka sposobów.

      Przykłady:

      * kontrybucje techniczne i dyskusje architektoniczne
      * feedback dotyczący interpretacji polityk i regulacji
      * pilotaże lub referencyjne przypadki użycia
      * uzgodnienia z krajowymi przygotowaniami do EHDS
      * thought leadership i upowszechnianie wiedzy

      Na tym etapie dialog jest równie ważny jak kod.
---
