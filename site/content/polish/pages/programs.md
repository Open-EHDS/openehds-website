---
title: "Programy"
meta_title: "Programy"
description: "Strumienie prógramowe OpenEHDS dla reużywalnych komponentów secondary use w EHDS."
draft: false
---

Sekcja Programy pokazuje, gdzie OpenEHDS koncentruje wysiłek wdrożeniowy dla secondary use w EHDS.

## Zestawianie zbiorów świadome data permit

Ten strumien obejmuje software przygotowujący tymczasowe zbiory danych zgodne z permitami i zatwierdzonym celem secondary use.

* interpretacja data permit i ograniczeń maszynowo czytelnych
* pipeline'y zestawiania zbiorów ograniczonych permitami i podstawą prawna
* kontrola cyklu życia tymczasowych produktow danych

## Egzekwowanie polityk i zgodności

Ten strumien obejmuje moduły egzekwujące ograniczeńie celu i wymagania prawne podczas dostępu i przetwarzania.

* obsługa opt-out i wyjątków prawnych
* egzekwowanie granic dostępu zgodnie z politykami
* audytowalne logi decyzji polityk

## Secure processing i rozliczalność

Ten strumien obejmuje wzorce integracyjne dla secure processing environments i pelnej rozliczalnośći.

* konektory między data holderami, access bodies i secure environments
* komponenty audytu, logowania i lineage
* mechaniżmy TTL i kontrolowanego usuwania danych

## Interoperacyjnosc i adaptacja krajowa

Ten strumien obejmuje reużywalne mapowania i wzorce transformacji zgodne z EHDS i FHIR.

* profile interoperacyjnośći i logika transformacji
* wzorce implementacyjne adaptowalne do modeli krajowych
* artefakty architektury referencyjnej do wykorzystania w zamówieniach publicznych

## Granice prógramu

OpenEHDS tworzy komponenty i architektury referencyjne. Nie pełni roli health data access body, hosta danych ani operatora secure processing environment.
