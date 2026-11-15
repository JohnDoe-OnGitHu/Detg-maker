# DETG-Maker

Criador de poses do DETG (Jeffy's Infinite Irida).

- **Código:** `DETG_lean.html` (só o código) + `assets/` (imagens, sons e JSON das animações).
- **Não mexa nos marcadores `@@A01@@`, `@@DATA@@`, etc.** Eles puxam os assets.
- `python build.py` junta tudo em `dist/index.html` (o site de verdade).

## Site (GitHub Pages)
Todo push na branch `main` publica o site sozinho:
https://johndoe-ongithu.github.io/DETG-Maker/

Se o primeiro deploy falhar: *Settings → Pages → Source → GitHub Actions*, depois *Actions → Publicar site → Run workflow*.

## .exe (Windows) e .apk (Android)
*Actions → Gerar .exe* (ou *Gerar .apk*) → **Run workflow**. Quando terminar, o arquivo fica em **Artifacts** no fim da página da execução.
Criando uma tag (`v1.0`), os dois vão direto pra aba **Releases**.

O .apk é de teste (debug): pode precisar liberar "instalar apps desconhecidos". O .exe não é assinado, então o Windows pode avisar "app não reconhecido" (Mais informações → Executar assim mesmo).
