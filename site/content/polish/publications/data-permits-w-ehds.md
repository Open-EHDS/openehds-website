---
title: "Data permits w EHDS: nowy model operacyjny dostępu do danych zdrowotnych"
slug: "data-permits-w-ehds"
meta_title: ""
description: "Praktyczne omówienie cyklu życia data permit w EHDS i jego konsekwencji technicznych."
date: 2026-05-17T09:00:00Z
image: "/images/blog-covers/data-permits.png"
categories: ["EHDS", "Data Permits"]
author: "Tomasz Kulbacki"
tags: ["data permit", "HDAB", "workflow"]
draft: false
---

Artykuł 68 rozporządzenia (UE) 2025/327 wprowadza operacyjne serce secondary use w EHDS: data permit.

Mechanizm permitów zasadniczo zmienia sposób organizacji dostępu do danych zdrowotnych w Europie.

Zamiast umów dwustronnych, negocjacji ad hoc albo fragmentarycznych ustaleń instytucjonalnych, EHDS tworzy ustandaryzowany proces regulacyjny dla kontrolowanego dostępu do danych.

Ten tekst omawia cykl życia data permit, obejmujący:

* złożenie wniosku
* ocenę proporcjonalności
* walidację podstawy prawnej
* ocenę etyczną
* zabezpieczenia techniczne
* przydzielenie secure environment
* obowiązki po zakończeniu przetwarzania

Artykuł pokazuje, jak permitem stają się obiektami governance, konfiguracjami technicznymi i egzekwowalnymi kontraktami operacyjnymi.

Szczególna uwaga poświęcona jest uzasadnieniu pseudonimizacji, czasowi trwania permitu, zestawianiu zbiorów danych, przeglądowi wyników, terminom usunięcia danych i mechanizmom powtarzalności.

Tekst omawia także szerszą konsekwencję architektoniczną: EHDS przekształca governance w maszynowo egzekwowalny workflow infrastrukturalny.

## Co musi rozstrzygnąć permit

Artykuł 68 rozporządzenia (UE) 2025/327 wymaga, aby health data access body ocenił m.in. zgodność celu z art. 53 tego samego rozporządzenia, konieczność i proporcjonalność danych, zgodność z GDPR, zasadność użycia danych pseudonimizowanych, kwalifikacje wnioskodawcy oraz adekwatność zabezpieczeń technicznych i organizacyjnych.

Permit staje się więc zwartym, ale bardzo silnym obiektem governance. Nie jest tylko autoryzacją prawną. Jest źródłem konfiguracji dla infrastruktury: kto może wejść do secure processing environment, jakie dane mogą zostać załadowane, jakie narzędzia są dostępne, jak długo istnieje workspace, jakie wyniki mogą zostać przejrzane i jakie logi mają później potwierdzić zgodność.

Znaczenie ma także czas. Health data access body powinien wydać albo odmówić wydania permitu w ciągu trzech miesięcy od kompletnego wniosku, z możliwością przedłużenia w uzasadnionych przypadkach. To tworzy presję na standaryzację formularzy, ocen i opisów datasetów.

## Dlaczego permits potrzebują reprezentacji technicznej

Jeśli permits pozostaną wyłącznie PDF-ami lub zapisami administracyjnymi, EHDS będzie trudny do skalowania. Ich treść musi zostać przełożona na polityki maszynowo czytelne: użytkowników, kategorie danych, cele, okresy retencji, zasoby SPE, zasady eksportu i obowiązki audytowe.

## Zakończenie

Data permit jest zawiasem między prawem a software. Jeśli Europa dobrze zaprojektuje tę warstwę, EHDS może stać się przewidywalny, audytowalny i skalowalny. Jeśli pozostanie ręczny i niespójny, secondary use będzie wolny, fragmentaryczny i trudny do zaufania.
