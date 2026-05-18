---
title: "Ukryty rdzeń EHDS: czym są secure processing environments"
slug: "secure-processing-environments-wyjasnienie"
meta_title: ""
description: "Dlaczego secure processing environments są centralnym elementem architektury i compliance EHDS."
date: 2026-05-16T09:00:00Z
image: "/images/blog-covers/secure-processing.png"
categories: ["EHDS", "Infrastruktura"]
author: "Tomasz Kulbacki"
tags: ["secure processing", "audytowalność", "compliance"]
draft: false
---

Artykuł 73 rozporządzenia (UE) 2025/327 wprowadza jeden z najważniejszych, a jednocześnie najmniej publicznie zrozumiałych elementów Europejskiej Przestrzeni Danych Zdrowotnych: secure processing environments (SPE).

Nie są to po prostu chmurowe przestrzenie robocze ani platformy współpracy badawczej. To regulowane środowiska wykonawcze zaprojektowane po to, aby ograniczać ryzyko wycieku danych, zapobiegać nieuprawnionemu dostępowi, egzekwować traceability i zapewniać zgodne z prawem przetwarzanie wrażliwych danych zdrowotnych.

Ten tekst omawia logikę operacyjną SPE i pokazuje, dlaczego są one centralne dla architektury EHDS.

Rozporządzenie wymaga:

* ścisłej kontroli dostępu
* identyfikowalnych użytkowników
* logowania aktywności
* monitoringu
* audytowalności
* ograniczeń pobierania danych
* kontrolowanej ekstrakcji wyników

EHDS przesuwa więc model operacyjny z "pobierz i przetwarzaj" w stronę "kontrolowanego wykonywania w zarządzanej infrastrukturze".

Ma to duże znaczenie dla instytucji badawczych, organizacji ochrony zdrowia, twórców AI i dostawców infrastruktury.

Artykuł omawia także wymogi powtarzalności, zarządzanie cyklem życia zbiorów danych, obowiązki usuwania danych oraz rolę SPE jako granic prawnych i compliance.

W praktyce secure processing environments stają się granicami zaufania, granicami governance i mechanizmami egzekwowania zasad wbudowanymi bezpośrednio w infrastrukturę.

## SPE to coś więcej niż bezpieczny hosting

Artykuł 73 rozporządzenia (UE) 2025/327 czyni secure processing environments obowiązkowym kanałem dostępu do danych udostępnianych na podstawie data permit. Oznacza to, że SPE nie są opcjonalną dobrą praktyką, ale częścią mechanizmu prawnego, dzięki któremu secondary use w ogóle może działać.

Wymagane zabezpieczenia są na tyle konkretne, że wpływają na realne decyzje inżynieryjne. Dostęp musi być ograniczony do upoważnionych osób wskazanych w permit. Użytkownicy muszą mieć indywidualną, unikalną tożsamość. Środowisko musi minimalizować nieuprawniony odczyt, kopiowanie, modyfikację lub usuwanie danych. Logi aktywności muszą być przechowywane na potrzeby audytu. Pobieranie wyników musi być kontrolowane tak, aby środowisko opuszczały wyłącznie dane nieosobowe, w tym anonimowe wyniki statystyczne.

## Pytania wdrożeniowe

EHDS-ready SPE musi obsługiwać więcej niż kontrolę dostępu. Potrzebne są procesy ingestu danych, tworzenia workspace zgodnego z permitem, powtarzalnej analizy, przeglądu wyników, monitoringu incydentów, usuwania danych i dostarczania dowodów, że kontrole faktycznie zadziałały.

Komisja ma określić wymagania techniczne, organizacyjne, bezpieczeństwa informacji, poufności, ochrony danych i interoperacyjności dla SPE. Można więc oczekiwać, że ta warstwa będzie z czasem coraz bardziej standaryzowana.

## Zakończenie

Stary model dostępu do danych często opierał się na przekazaniu danych badaczowi lub instytucji. EHDS przesuwa ciężar w drugą stronę: użytkownik i obliczenia mają przyjść do kontrolowanego środowiska, dane mają pozostać pod governance, a środowisko mają opuszczać tylko bezpieczne wyniki.
