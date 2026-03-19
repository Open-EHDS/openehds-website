# Runbook: publikowanie na GitHub bez błędów formatowania

## Cel i zakres

- Ustandaryzować publikowanie treści na GitHub (PR, komentarze, issue) tak, aby uniknąć:
  - błędów ze znakami specjalnymi,
  - przypadkowego wykonania fragmentów Markdown jako komend shell,
  - „rozjechanego” formatowania po publikacji.

## Wymagania wejściowe

- Dostępny `gh` CLI i aktywna autoryzacja.
- Ustalony docelowy obiekt publikacji (numer PR/issue lub gałęzie dla nowego PR).

## Reguły twarde

- Treści Markdown do GitHub publikuj wyłącznie z pliku przez `--body-file`.
- Nie przekazuj dłuższych treści przez inline `--body "..."`.
- Nie osadzaj Markdown z backtickami w komendach shell ujętych w podwójne cudzysłowy.
- Do tworzenia treści używaj heredoc z zablokowaną interpolacją: `<<'EOF'`.
- Przed publikacją pokaż finalną treść pliku (`sed -n`) i dopiero potem wykonaj `gh`.
- Po publikacji odczytaj opublikowaną treść i zweryfikuj render.

## Procedura

1. Przygotuj plik z treścią:

```bash
cat > /tmp/github-body.md <<'EOF'
## Co zmieniono
- punkt 1
- punkt 2

## Weryfikacja
- krok 1
EOF
```

2. Zrób podgląd treści przed publikacją:

```bash
sed -n '1,200p' /tmp/github-body.md
```

3. Publikuj wyłącznie przez `--body-file`:

```bash
# nowy PR
gh pr create --base main --head <branch> --title "<tytul>" --body-file /tmp/github-body.md

# komentarz do PR
gh pr comment <nr_pr> --body-file /tmp/github-body.md

# komentarz do issue
gh issue comment <nr_issue> --body-file /tmp/github-body.md
```

4. Zweryfikuj wynik:

```bash
gh pr view <nr_pr> --comments
# lub
gh issue view <nr_issue> --comments
```

## Typowe błędy i reakcja

- Problem: shell wykonał fragment treści jako komendę (np. przez backticki).
  - Reakcja: przerwać publikację inline, przenieść treść do pliku i użyć `--body-file`.
- Problem: w treści pojawiają się sekwencje `\n` zamiast nowych linii.
  - Reakcja: budować plik heredoc `<<'EOF'`, nie sklejać treści w jednym argumencie CLI.
- Problem: opublikowana treść zawiera logi lub przypadkowy output komend.
  - Reakcja: usunąć błędny komentarz/wpis i opublikować ponownie z pliku po podglądzie.

## Źródła

- GitHub CLI (`gh`) - [manual `gh pr create`](https://cli.github.com/manual/gh_pr_create)
- GitHub CLI (`gh`) - [manual `gh pr comment`](https://cli.github.com/manual/gh_pr_comment)
- GitHub CLI (`gh`) - [manual `gh issue comment`](https://cli.github.com/manual/gh_issue_comment)
