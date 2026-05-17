---
title: "EHDS to nie data lake: jak naprawdę działa architektura Europejskiej Przestrzeni Danych Zdrowotnych"
slug: "ehds-to-nie-data-lake"
meta_title: ""
description: "Dlaczego EHDS jest ramą governance i infrastruktury, a nie centralnym repozytorium danych zdrowotnych."
date: 2026-05-13T09:00:00Z
image: "/images/image-placeholder.png"
categories: ["EHDS", "Architektura"]
author: "Ania Adamiak"
tags: ["architektura", "governance", "secondary use"]
draft: false
---

Europejska Przestrzeń Danych Zdrowotnych (EHDS), ustanowiona rozporządzeniem (UE) 2025/327, bywa błędnie rozumiana jako wielka europejska platforma udostępniania danych zdrowotnych. W rzeczywistości rozporządzenie wprowadza coś zasadniczo innego: regulowaną ramę governance i infrastruktury dla kontrolowanego dostępu, interoperacyjności oraz bezpiecznego przetwarzania danych zdrowotnych w Europie.

EHDS nie tworzy jednego europejskiego repozytorium danych zdrowotnych. Nie ustanawia też nieograniczonego, sfederowanego dostępu między systemami ochrony zdrowia. Zamiast tego tworzy warstwowy ekosystem obejmujący:

* organy krajowe
* sfederowane mechanizmy koordynacji
* obowiązki interoperacyjności
* secure processing environments
* procesy dostępu oparte na data permit

Na poziomie architektury EHDS działa poprzez dwie odrębne infrastruktury:

* **MyHealth@EU** dla primary use danych zdrowotnych w opiece zdrowotnej
* **HealthData@EU** dla secondary use w badaniach, politykach publicznych, innowacji i zdrowiu publicznym

To rozróżnienie jest kluczowe. Rozporządzenie wyraźnie oddziela operacyjne procesy opieki zdrowotnej od kontrolowanych procesów dostępu do danych dla secondary use.

EHDS działa więc mniej jak "marketplace danych", a bardziej jak regulowana infrastruktura mediacji.

Rozporządzenie konsekwentnie wzmacnia ograniczenie celu, proporcjonalność, minimalizację danych, audytowalność i kontrolowane przetwarzanie.

Ma to ważną konsekwencję architektoniczną: tymczasowe zestawianie zbiorów danych, egzekwowanie polityk, pseudonimizacja i kontrolowane środowiska wykonawcze nie są decyzjami wdrożeniowymi. Są koniecznościami regulacyjnymi.

Ten tekst pokazuje, dlaczego EHDS jest sfederowany, ale ściśle zarządzany, dlaczego interoperacyjność nie oznacza nieograniczonego dostępu oraz jak governance zostaje wpisane bezpośrednio w infrastrukturę techniczną.

## Co naprawdę uruchamia rozporządzenie

Regulation (EU) 2025/327 nie jest specyfikacją jednego produktu. To architektura prawna całego ekosystemu, w którym różni aktorzy mają różne role: health data holders, health data access bodies, health data users, krajowe punkty kontaktowe, trusted health data holders oraz Komisja. Już sam ten podział pokazuje, dlaczego metafora "data lake" prowadzi w złym kierunku.

Artykuł 51 rozporządzenia (UE) 2025/327 obejmuje szeroki zakres kategorii danych, które mogą mieć znaczenie dla secondary use: dane EHR, dane administracyjne, rejestry, dane omiczne, dane z wyrobów medycznych, kohorty badawcze, biobanki czy dane z aplikacji wellness. Sam fakt objęcia kategorią regulacyjną nie oznacza jednak automatycznej dostępności. Dane nadal muszą przejść przez ograniczenie celu, minimalizację, ocenę permitu, secure processing i kontrolę wyników.

W praktyce architektura przypomina więc kontrolowany łańcuch odpowiedzialności. Dane są opisywane, wnioskowane, oceniane, przygotowywane, udostępniane w secure processing environment, a następnie redukowane do wyników, które mogą opuścić środowisko tylko pod określonymi warunkami.

## Dlaczego to jest ważne dla wdrożenia

Dla instytucji publicznych kluczowe pytanie nie brzmi: "gdzie będzie europejski data lake?", ale: "jakie komponenty pozwolą obsłużyć permits, katalogi, egzekwowanie polityk, pseudonimizację, logowanie i secure execution w wielu jurysdykcjach?"

Dla dostawców oznacza to konieczność projektowania systemów z myślą o ograniczonym dostępie, rozdziale ról, śladach audytowych i rozróżnieniu między primary use a secondary use.

Dla obywateli oznacza to inny model zaufania. EHDS będzie wiarygodny tylko wtedy, gdy będzie zrozumiałe, że dane zdrowotne nie stają się swobodnie dostępne.

## Zakończenie

Najtrafniej opisywać EHDS nie jako platformę, repozytorium czy marketplace, ale jako prawno-techniczny system operacyjny dla zarządzanego wykorzystania danych zdrowotnych. Wyzwanie polega na tym, by zbudować go bez nadmiernej centralizacji i bez rozbicia wspólnych zasad na niekompatybilne rozwiązania krajowe.
