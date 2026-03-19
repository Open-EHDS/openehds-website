---
title: "Kontrolowana warstwa mediacji danych: konieczność, nie opcja"
slug: "kontrolowana-warstwa-mediacji-danych-koniecznosc-nie-opcja"
meta_title: ""
description: "Dlaczego EHDS formalnie wymusza kontrolowaną warstwę pośredniczącą danych."
date: 2026-02-18T05:00:00Z
image: "/images/image-placeholder.png"
categories: ["Architektura", "EHDS"]
author: "Marta Nowak"
tags: ["data-permit", "mediation-layer", "architecture"]
draft: false
---

EHDS nie wprowadza nieograniczonej federacji danych. Model opiera się na dostępie ograniczonym celem, czasem i zakresem data permit.

To oznacza, że kontrolowana warstwa mediacji danych jest elementem nieuniknionym.

## Do czego ta warstwa jest potrzebna

* zestawianie zbiorów zgodnych z permitem
* egzekwowanie opt-out i wyjątków prawnych
* pseudonimizacja, anonimizacja, filtrowanie i agregacja
* pełne logowanie i audyt
* kontrolowane usuwanie danych po zakończeniu permitu

Ta warstwa nie jest centralnym data lake ani trwałym repozytorium. Jej rola jest technicznie ograniczona i audytowalna.
