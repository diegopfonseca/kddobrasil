# CLAUDE.md — KD do Brasil

Site institucional one-page para consultoria de inovação e economia circular.
Referência: [kddobrasil.com.br](https://www.kddobrasil.com.br/)

## Stack

| Camada | Tecnologia |
|---|---|
| Framework | TanStack Start v1 (React 19, SSR, file-based routing) |
| Build | Vite 8 + Vinxi |
| Styling | Tailwind CSS v4 (tokens em `src/styles.css`) |
| Ícones | lucide-react |
| Query | @tanstack/react-query |
| Fontes | Archivo Black (display) + Inter (body) via Google Fonts |
| Runtime | bun |

## Comandos (rodar da raiz do projeto)

```bash
bun run dev       # Dev server
bun run build     # Build de produção
bun run preview   # Preview local
```

## Estrutura de Arquivos

```
src/
├── styles.css              # Design tokens (oklch), @theme, .eyebrow, .container-x
├── router.tsx              # Bootstrap do router com QueryClient
├── routes/
│   ├── __root.tsx          # HTML document, meta tags, Google Fonts
│   ├── index.tsx           # Landing page (todas as seções)
│   └── routeTree.gen.ts    # Auto-gerado — NUNCA editar
├── hooks/use-mobile.tsx
└── lib/utils.ts
```

## Regras

1. **Nunca usar `src/pages/`** — usar `src/routes/` (file-based routing).
2. **Nunca editar `routeTree.gen.ts`** — auto-gerado pelo plugin Vite.
3. **Sempre usar design tokens** — sem hardcode de cores. Usar `text-primary`, `bg-surface`, etc.
4. **Ícones:** sempre de `lucide-react`.
5. **Headings:** classe `font-display` (Archivo Black).
6. **Container:** `.container-x` (max-width 1200px, padding 1.5rem).
7. **Seções alternadas:** `bg-background` / `bg-surface`.
8. **CTAs de contato:** `mailto:contato@kddobrasil.com.br?subject=...`
9. **Imagens externas:** sempre `loading="lazy"`.
10. **Dark mode único** — sem toggle.
11. **Botões sem arredondamento** — design sharp.

## Design Tokens (`src/styles.css`)

| Classe Tailwind | Token | Valor |
|---|---|---|
| `bg-background` | `--color-background` | `oklch(0.21 0.005 60)` — carvão escuro |
| `bg-surface` | `--color-surface` | `oklch(0.26 0.006 60)` — cards |
| `text-primary` / `bg-primary` | `--color-primary` | `oklch(0.76 0.10 75)` — ouro |
| `text-primary-foreground` | `--color-primary-foreground` | `oklch(0.18 0.005 60)` |
| `text-foreground` | `--color-foreground` | `oklch(0.96 0.01 80)` — near white |
| `text-muted-foreground` | `--color-muted-foreground` | `oklch(0.72 0.015 70)` |
| `border-border` | `--color-border` | `oklch(0.35 0.008 60)` |

## Assets Externos (Wix CDN — não copiar para o repo)

URLs completas definidas como constantes no topo de `src/routes/index.tsx`.
Logos dos clientes precisam ter suas URLs corretas preenchidas em `CLIENTS[]`.

## Seções da Landing Page

Todas em `src/routes/index.tsx`:

1. `<Header>` — sticky, scroll-aware (transparente → blur), mobile drawer
2. `<Hero>` — eyebrow, H1, H2, 2 CTAs, 4 stats, scroll cue
3. `<Sobre id="sobre">` — grid 12-col, bloco NEXTONE
4. `<Servicos id="servicos">` — 2 cards (Rejeitos + Inovação)
5. `<Clientes id="clientes">` — grid 5-col, 10 logos
6. `<Depoimentos>` — carrossel auto-rotativo 8s, 3 depoimentos
7. `<Oportunidades id="oportunidades">` — VIKAFLEX + NEXTONE
8. `<Time id="time">` — CEO Marcus Vinícius
9. `<Contato id="contato">` — 3 cards mailto
10. `<Footer>` — logo, copyright, quick links

## Próximos Passos

- [ ] Preencher URLs reais dos logos dos clientes em `CLIENTS[]`
- [ ] Atualizar textos dos depoimentos com as citações reais
- [ ] Configurar URLs dos pitch decks (VIKAFLEX e NEXTONE)
- [ ] Migrar imagens do Wix para `public/` quando disponíveis localmente
