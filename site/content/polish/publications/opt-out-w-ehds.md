---
title: "Opt-out w EHDS: najwrażliwsze wyzwanie operacyjne"
slug: "opt-out-w-ehds"
meta_title: ""
description: "Dlaczego opt-out jest rozproszonym problemem egzekwowania polityk, a nie tylko mechanizmem zgody."
date: 2026-05-15T09:00:00Z
image: "/images/image-placeholder.png"
categories: ["EHDS", "Governance"]
author: "Ania Adamiak"
tags: ["opt-out", "egzekwowanie polityk", "zaufanie"]
draft: false
---

Prawo do opt-out z secondary use jest jednym z najbardziej politycznie wrażliwych i operacyjnie złożonych elementów EHDS.

Zgodnie z artykułem 71 osoby fizyczne mogą odmówić przyszłego secondary use swoich danych zdrowotnych. Choć koncepcyjnie brzmi to prosto, wdrożenie tego wymagania na dużą skalę tworzy istotne wyzwania infrastrukturalne i governance.

Ten tekst pokazuje, dlaczego opt-out nie jest jedynie mechanizmem zgody ani funkcją UX, lecz rozproszonym problemem egzekwowania polityk.

Artykuł analizuje dynamiczne filtrowanie zbiorów danych, zestawianie danych świadome permitu, zależności czasowe, lineage, wymogi audytu i wyjątki interesu publicznego.

Szczególna uwaga poświęcona jest różnicom w implementacjach krajowych, relacji między opt-out a secure environments oraz operacyjnemu wyzwaniu utrzymania zaufania przy jednoczesnym zachowaniu wartości analitycznej.

EHDS w praktyce wymaga infrastruktury zdolnej do egzekwowania governance w czasie działania, generowania zbiorów danych świadomych polityk i śledzalnego zarządzania cyklem życia.

## Prawo jest proste do opisania, trudne do obsługi

Artykuł 71 rozporządzenia (UE) 2025/327 daje osobom fizycznym prawo do opt-out z przetwarzania ich osobowych elektronicznych danych zdrowotnych dla secondary use. Państwa członkowskie muszą zapewnić dostępny i łatwy do zrozumienia mechanizm skorzystania z tego prawa. Po jego wykonaniu dane danej osoby nie powinny być udostępniane ani przetwarzane na podstawie permitów lub requestów zatwierdzonych po opt-out.

Trudność polega na tym, że opt-out musi być respektowany u data holders, w katalogach, workflow permitów, zestawianiu datasetów i secure processing. Nie wystarczy zebrać preferencji w jednym formularzu. Preferencja musi wejść do infrastruktury przygotowującej dane do użycia.

## Wyjątki wymagają jeszcze mocniejszego governance

Rozporządzenie pozwala państwom członkowskim tworzyć ograniczone wyjątki w prawie krajowym, np. gdy podmioty publiczne potrzebują danych dla zdrowia publicznego, statystyki, polityk publicznych lub badań naukowych z ważnych powodów interesu publicznego. Takie mechanizmy muszą być jednak konieczne, proporcjonalne i objęte konkretnymi zabezpieczeniami.

Infrastruktura opt-out musi więc obsługiwać zarówno wyłączenie, jak i wyjątkowe włączenie danych. To znacznie trudniejsze niż prosty znacznik tak/nie. Wymaga śledzenia podstawy prawnej, celu, audytu i dowodów, że wyjątek zastosowano tylko w dopuszczalnych warunkach.

## Zakończenie

Opt-out będzie jednym z miejsc, w których EHDS zyska albo straci publiczne zaufanie. Jeśli ludzie nie będą rozumieli, jak ich wybór jest respektowany, pojawią się problemy legitymizacji. Jeśli wybór będzie egzekwowany przez transparentną i audytowalną infrastrukturę, opt-out może stać się dowodem, że secondary use i prawa jednostki mogą współistnieć.
