---
title: "O nas"
meta_title: "O OpenEHDS"
description: "Misja, zakres i model zarządzania OpenEHDS dla secondary use w EHDS."
image: "/images/image-placeholder.png"
layout: "about"
draft: false
---

OpenEHDS jest rozwijane jako neutralna, niekomercyjna inicjatywa fundacyjna, która pomaga przekształcać EHDS z ramy prawnej we wspolna, praktyczna rzeczywistosc techniczna.

## Misja

OpenEHDS opiera się na przekonaniu, że infrastruktura EHDS musi być:

* interoperacyjna z założeńia
* domyślnie chroniaca prywatność
* realistyczna operacyjnie
* zrozumiala publicznie

Inicjatywa tworzy także neutralna przestrzen dialogu między instytucjami publicznymi, regulatorami, organiżacjami pacjenckimi, nauka i sektórem technologicznym przez otwarte dyskusje, warsztaty oraz wspoltworzenie architektur referencyjnych.

## Zakres

OpenEHDS koncentruje się przede wszystkim na secondary use elektronicznych danych medycznych w EHDS, gdzie złożoność regulacyjna, techniczna i organiżacyjna jest największa.

Zakres obejmuje cały cykl życia secondary use:

* przygotowanie zbiorów danych do wtórnych zastosowań
* kontrolowany dostęp na podstawie data permit
* dzialanie w secure processing environments
* audytowalność, przejrzystosc i zarządzanie cyklem życia danych

## Kontrolowana warstwa mediacji danych

EHDS nie tworzy nieograniczonej federacji danych. Definiuje model dostępu oparty na pozwoleniach administracyjnych ograniczonych celem, czasem i pelna audytowalnośćia.

OpenEHDS wprost adresuje te rzeczywistosc jako kontrolowana warstwę mediacji danych, która:

* nie jest centralnym data lake
* nie jest trwalym repozytorium danych
* nie jest komercyjna platforma danych

To tymczasowa, kontrolowana warstwa przetwarzania potrzebna do zestawiania zbiorów zgodnych z permitami, egzekwowania polityk i zapewnienia pelnej rozliczalnośći.

## Co tworzy OpenEHDS

Otwarte komponenty referencyjne i wzorce architektoniczne, w tym:

* silniki zestawiania zbiorów danych świadome data permit
* moduły egzekwowania polityk dla celu przetwarzania, opt-out i wyjątków prawnych
* konektory między health data holders, health data access bodies i secure processing environments
* komponenty audytu, logowania i data lineage
* mechaniżmy zarządzania cyklem życia danych tymczasowych, w tym TTL i kontrolowane usuwanie
* mapowania interoperacyjnośći i transformacje danych zgodne z EHDS, FHIR i przyszlymi aktami wykonawczymi

## Czego OpenEHDS nie robi

* nie pełni roli health data access body
* nie hostuje ani nie monetyzuje danych medycznych
* nie dziala jako operator secure processing environment
* nie zastepuje krajowych ani unijnych struktur zarzadzcżyćh

OpenEHDS jest enablerem, a nie operatorem systemu.

## Governance i zaufanie

Model dzialania opiera się na przejrzystym governance, otwartych procesach kontrybucji, publicznej dokumentacji i jasnym rozdzieleniu od komercyjnego wykorzystania rezultatów.

## Open source

* Organiżacja GitHub: [Open-EHDS na GitHub](https://github.com/Open-EHDS)
