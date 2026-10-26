# Site — Dra. Tatiana Fonseca Santiago

Cópia do código-fonte do site atual, com páginas, fotografias, estilos e testes.
As imagens originalmente alojadas no Lovable estão incluídas em `public/images`, com os respetivos caminhos adaptados nesta cópia. O site no Lovable não foi alterado.

## Executar no computador

1. Instalar Node.js 22 ou superior e Bun (https://bun.sh).
2. Extrair o ZIP e abrir um terminal nesta pasta.
3. Executar `bun install`.
4. Executar `bun run dev` e abrir o endereço indicado no terminal.

Não basta abrir os ficheiros com um duplo clique: este site precisa do ambiente de execução acima.

## Testes e publicação

- Testes: `bun run test`.
- Gerar a versão de produção (Lovable / Cloudflare): `bun run build`.
- **GitHub Pages** (site estático no repositório `site_dra_tf`):
  1. No GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
  2. Faça push para a branch `main` (ou execute manualmente o workflow *Deploy GitHub Pages*).
  3. O site fica em `https://miguelrebelatto.github.io/site_dra_tf/`.
  4. Build local: `npm run build:gh-pages` (saída em `dist/client/`).
  5. Se renomear o repositório, altere `GITHUB_PAGES_BASE` no workflow `.github/workflows/deploy-pages.yml` e o valor por omissão em `vite.config.ts`.
  6. Ao adicionar artigos, atualize também `src/lib/static-routes.ts` (rotas dinâmicas a pré-renderizar).
- As dependências são descarregadas na instalação; não estão incluídas no ZIP.

## Dados ainda provisórios

- Email, WhatsApp, Instagram e ligações Hotmart precisam de confirmação em `src/lib/site.ts`.
- Os artigos e as referências são exemplos para revisão pela médica.
- O formulário abre o programa de email, não envia mensagens diretamente pelo site.
- O painel de publicação de artigos e a versão inglesa ainda não estão implementados.
- Fontes, mapa e ligações externas requerem acesso à Internet.

Esta cópia foi preparada para entrega do código e das imagens; a execução fora do Lovable não foi testada.
