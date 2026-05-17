---
title: "Download"
meta_title: "Download"
description: "Connectory OpenEHDS do integracji z systemem P1 oraz Platformą Usług Inteligentnych."
draft: false
---

## Connector do raportowania zdarzeń medycznych do systemu P1

Connector do raportowania zdarzeń medycznych do systemu P1 (Platforma e-Zdrowie) wspiera obowiązkowy proces przekazywania informacji o kontaktach pacjenta z podmiotami leczniczymi oraz praktykami zawodowymi. Dane raportowane do P1 zasilają Internetowe Konto Pacjenta (IKP) oraz umożliwiają wymianę Elektronicznej Dokumentacji Medycznej (EDM) pomiędzy placówkami.

Obowiązek raportowania dotyczy wszystkich podmiotów wykonujących działalność leczniczą - w tym POZ, AOS, szpitali oraz praktyk indywidualnych i grupowych - niezależnie od posiadania kontraktu z NFZ.

Projekt został przygotowany z myślą o integratorach i zespołach technicznych, które chcą realizować wsadowe przetwarzanie operacji przekazywanych jako pliki JSON oraz odbierać wyniki w postaci:

* plików JSON
* wpisów audytowych
* technicznych logów przetwarzania

Connector obsługuje zarówno jednorazowe uruchomienia typu run-once, jak i tryb ciągły watch oparty o Sidekiq, sidekiq-cron oraz Redis.

**Dostępność:** gotowy, w trakcie testów, niebawem będzie opublikowany na GitHubie fundacji.

## Connector do PUI (Platforma Usług Inteligentnych)

Connector do PUI (Platforma Usług Inteligentnych) został przygotowany jako komponent integracyjny wspierający komunikację z usługami cyfrowymi wykorzystywanymi w nowoczesnym ekosystemie ochrony zdrowia.

Projekt umożliwia budowę bezpiecznych i interoperacyjnych integracji pomiędzy systemami medycznymi, platformami usługowymi oraz usługami administracji publicznej związanymi z przetwarzaniem danych zdrowotnych i procesami cyfrowymi.

Connector został zaprojektowany z myślą o:

* integratorach systemów
* dostawcach oprogramowania medycznego
* zespołach wdrożeniowych
* organizacjach budujących rozwiązania zgodne z wymaganiami interoperacyjności i cyfrowej administracji zdrowotnej

Główne założenia projektu obejmują:

* modularną architekturę integracyjną
* obsługę komunikacji usługowej
* możliwość realizacji procesów wsadowych i asynchronicznych
* audytowalność operacji
* łatwą adaptację do zmieniających się wymagań regulacyjnych i technicznych

Connector może stanowić element szerszej infrastruktury interoperacyjnej wspierającej cyfryzację ochrony zdrowia oraz wdrażanie rozwiązań zgodnych z kierunkiem European Health Data Space (EHDS).

**Dostępność:** gotowy, w trakcie testów, niebawem będzie opublikowany na GitHubie fundacji.
