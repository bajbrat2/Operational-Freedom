# CLAUDE.md — Operational Freedom Website

## Project Overview
Operational Freedom marketing website for Beverly Scheider's AI automation consulting business.

## Stack
- **Framework:** Hono (lightweight web framework with JSX)
- **Bundler:** Vite + `@hono/vite-build` for Cloudflare Pages
- **Runtime:** Cloudflare Pages (Workers)
- **Language:** TypeScript (ESNext, JSX via `hono/jsx`)
- **Styling:** Custom CSS (`public/static/style.css`)
- **Icons:** Font Awesome 6 (CDN)
- **Fonts:** Roboto Condensed + Playfair Display (Google Fonts)
- **Dev server:** `npm run dev` (Vite + Hono dev server with Cloudflare adapter)
- **Deploy:** `npm run deploy` (builds + `wrangler pages deploy`)

## Project Structure
```
src/
  index.tsx       — All routes: /, /about, /services, /roadmap, /contact, /api/contact
  renderer.tsx    — Shared HTML layout (nav, footer, head, inline scripts)
public/
  static/         — CSS, JS, images (logo, headshot)
  favicon.png
```

## Key Details
- **Single-file routing** — all pages live in `src/index.tsx` as Hono route handlers
- **Server-side rendered JSX** — Hono JSX renderer, no React/client framework
- **No database** — contact form handler at `/api/contact` logs to console (placeholder)
- **Booking links** point to external GHL widget: `links.aiservices.amplifyroiai.com`
- **Brand colors (current palette — use for all updates):**
  - Primary CTA buttons: `#edd97a` (Warm Gold) background, `#1e2d3d` (Dark Navy) text
  - Dark backgrounds: `#1e2d3d` (Dark Navy)
  - Accents/icons/borders: `#6d8c93` (Steel Teal)
  - Card backgrounds: `#a0c0b2` (Soft Sage)
  - Body text: `#4e5457` (Dark Charcoal)
  - Secondary text/borders: `#b8a6a8` (Dusty Mauve)
- **Typography:** Roboto Condensed (body), Playfair Display (display/accents)

## Commands
| Command | What it does |
|---|---|
| `npm run dev` | Start local dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally via Wrangler |
| `npm run deploy` | Build + deploy to Cloudflare Pages |
| `npm run cf-typegen` | Generate CloudflareBindings types |

## Pages
- `/` — Home (hero, about teaser, services overview, roadmap preview, CTA)
- `/about` — Beverly's full story
- `/services` — All four services with anchor links (#workshop, #anchor, #sentinel, #engine)
- `/roadmap` — Consult-Train-Implement model + 3-phase timeline
- `/contact` — Contact form + booking link

## Working in This Project
- This is a Hono/Cloudflare project, **not** Next.js — do not apply Next.js patterns
- JSX uses `class` not `className` (Hono JSX)
- Styles are in `public/static/style.css` — no Tailwind
- Client-side JS is in `public/static/app.js` + inline scripts in `renderer.tsx`
- When adding pages, add a new `app.get()` route in `src/index.tsx`
- Update nav links in `renderer.tsx` if adding new pages
- Brand voice and business context are in `~/.claude/rules/` — follow those for any content
