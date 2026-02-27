# Komponenty zewnętrzne i licencje

Ten plik porządkuje informacje o zewnętrznych komponentach użytych w serwisie OpenEHDS.org.

Nie zastępuje on licencji upstream. Jeśli dany komponent ma własny plik `LICENSE`, `NOTICE` albo osobne warunki użycia, obowiązują one w pierwszej kolejności.

## Komponenty potwierdzone w repo

### Hugoplate

- rola: baza szablonu i znaczna część warstwy frontendowej
- źródło: [zeon-studio/hugoplate](https://github.com/zeon-studio/hugoplate)
- licencja: `MIT`
- potwierdzenie lokalne:
  - `site/theme.toml`
  - `site/LICENSE`
  - `site/package.json`

### Hugo Modules od GetHugoThemes

- rola: moduły funkcjonalne importowane podczas buildu Hugo, m.in. search, images, pwa, announcement, cookie-consent, social-share, basic-seo
- źródło: [gethugothemes/hugo-modules](https://github.com/gethugothemes/hugo-modules)
- licencja upstream: `MIT`
- potwierdzenie:
  - lokalnie: `site/config/_default/module.toml`, `site/go.mod`
  - upstream: [repozytorium źródłowe](https://github.com/gethugothemes/hugo-modules)

### Hugo

- rola: generator statycznej strony
- źródło: [gohugoio/hugo](https://github.com/gohugoio/hugo)
- licencja upstream: `Apache-2.0`
- uwaga: Hugo jako narzędzie buildowe nie oznacza automatycznie, że cała zawartość repo jest objęta `Apache-2.0`

### Swiper

- rola: slider używany w warstwie frontendowej
- źródło: [nolimits4web/swiper](https://github.com/nolimits4web/swiper)
- licencja upstream: `MIT`
- potwierdzenie lokalne:
  - `site/themes/hugoplate/assets/plugins/swiper/swiper-bundle.css`
  - `site/themes/hugoplate/assets/plugins/swiper/swiper-bundle.js`

### Font Awesome Free

- rola: ikony używane przez moduł `icons/font-awesome`
- źródło: [moduł gethugothemes/hugo-modules/icons/font-awesome](https://github.com/gethugothemes/hugo-modules/tree/master/icons/font-awesome)
- projekt upstream: [Font Awesome](https://fontawesome.com/download)
- uwaga licencyjna:
  - Font Awesome stosuje rozdzielne zasady dla różnych typów zasobów (kod, fonty / pliki ikon, dokumentacja).
  - W praktyce należy zachować noty upstream właściwe dla faktycznie użytych plików dostarczonych przez moduł.
  - Przy aktualizacjach warto ponownie sprawdzić warunki upstream dla używanej wersji.

## Zasoby ładowane zewnętrznie w runtime

Te elementy nie muszą być kopiowane do repo, ale są używane przez stronę i warto mieć je świadomie odnotowane:

### Google Fonts

- rola: zewnętrznie ładowane fonty interfejsu
- użycie: ładowane dynamicznie w `<head>`
- źródło: [Google Fonts](https://fonts.google.com/)
- uwaga: warunki użycia należy weryfikować dla konkretnych rodzin fontów używanych przez serwis

### Mermaid z CDN

- rola: opcjonalne renderowanie diagramów
- użycie: przewidziane konfiguracją, gdy shortcode / funkcja zostaną użyte
- źródło: [Mermaid](https://github.com/mermaid-js/mermaid)
- uwaga: przy aktywnym użyciu warto dopisać konkretną wersję i licencję biblioteki do tego rejestru

## Czego ten plik nie obejmuje

- autorskich treści redakcyjnych fundacji w `site/content/`
- znaków towarowych, logotypów i identyfikacji marki OpenEHDS
- warunków korzystania z zewnętrznych usług SaaS, API i CDN, które mogą mieć własne regulaminy niezależne od licencji open source

## Zasada utrzymania

Przy dodaniu nowej biblioteki, modułu, zestawu ikon, fontu albo osadzanego assetu zewnętrznego ten plik powinien zostać uzupełniony.
