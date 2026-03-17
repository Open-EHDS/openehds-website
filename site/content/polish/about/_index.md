---
title: "O nas"
meta_title: "O OpenEHDS"
description: "Misja, zakres i model zarządzania OpenEHDS dla secondary use w EHDS."
image: "/images/image-placeholder.png"
layout: "about"
draft: false
---

OpenEHDS jest rozwijane jako neutralna, niekomercyjna inicjatywa fundacyjna, która pomaga przekształcać EHDS z ramy prawnej we wspólną, praktyczną rzeczywistość techniczną.

## Misja

OpenEHDS opiera się na przekonaniu, że infrastruktura EHDS musi być:

* interoperacyjna z założenia
* domyślnie chroniąca prywatność
* realistyczna operacyjnie
* zrozumiała publicznie

Inicjatywa tworzy także neutralną przestrzeń dialogu między instytucjami publicznymi, regulatorami, organizacjami pacjenckimi, nauką i sektorem technologicznym przez otwarte dyskusje, warsztaty oraz współtworzenie architektur referencyjnych.

## Zakres

OpenEHDS koncentruje się przede wszystkim na secondary use elektronicznych danych medycznych w EHDS, gdzie złożoność regulacyjna, techniczna i organizacyjna jest największa.

Zakres obejmuje cały cykl życia secondary use:

* przygotowanie zbiorów danych do wtórnych zastosowań
* kontrolowany dostęp na podstawie data permit
* działanie w secure processing environments
* audytowalność, przejrzystość i zarządzanie cyklem życia danych

## Kontrolowana warstwa mediacji danych

EHDS nie tworzy nieograniczonej federacji danych. Definiuje model dostępu oparty na pozwoleniach administracyjnych ograniczonych celem, czasem i pełną audytowalnością.

OpenEHDS wprost adresuje tę rzeczywistość jako kontrolowaną warstwę mediacji danych, która:

* nie jest centralnym data lake
* nie jest trwałym repozytorium danych
* nie jest komercyjną platformą danych

To tymczasowa, kontrolowana warstwa przetwarzania potrzebna do zestawiania zbiorów zgodnych z permitami, egzekwowania polityk i zapewnienia pełnej rozliczalności.

## Co tworzy OpenEHDS

Otwarte komponenty referencyjne i wzorce architektoniczne, w tym:

* silniki zestawiania zbiorów danych świadome data permit
* moduły egzekwowania polityk dla celu przetwarzania, opt-out i wyjątków prawnych
* konektory między health data holders, health data access bodies i secure processing environments
* komponenty audytu, logowania i data lineage
* mechanizmy zarządzania cyklem życia danych tymczasowych, w tym TTL i kontrolowane usuwanie
* mapowania interoperacyjności i transformacje danych zgodne z EHDS, FHIR i przyszłymi aktami wykonawczymi

## Czego OpenEHDS nie robi

* nie pełni roli health data access body
* nie hostuje ani nie monetyzuje danych medycznych
* nie działa jako operator secure processing environment
* nie zastępuje krajowych ani unijnych struktur zarządczych

OpenEHDS jest enablerem, a nie operatorem systemu.

## Governance i zaufanie

Model działania opiera się na przejrzystym governance, otwartych procesach kontrybucji, publicznej dokumentacji i jasnym rozdzieleniu od komercyjnego wykorzystania rezultatów.

## Open source

* Organizacja GitHub: [Open-EHDS na GitHub](https://github.com/Open-EHDS)
