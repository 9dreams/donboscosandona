# CLAUDE.md — SFP Don Bosco Sandona

## Panoramica

Sito web istituzionale della **Scuola di Formazione Professionale Don Bosco di San Donà di Piave (VE)**. Sviluppato dall'agenzia [9dreams](https://github.com/9dreams/donboscosandona). Framework: **Next.js 13.1.6** + React 18.

---

## Comandi

```bash
npm run dev      # Server di sviluppo
npm run build    # Build di produzione
npm start        # Server di produzione
npm run lint     # ESLint
```

---

## Stack tecnologico

| Categoria | Tecnologia | Note |
|-----------|-----------|------|
| Framework | Next.js 13.1.6 | Pages router |
| UI | React 18.2.0 | |
| Styling | **Tailwind CSS 4** | Unica soluzione CSS — no MUI, no CSS Modules |
| Dark mode | next-themes | Classe `.dark` su `<html>` |
| Caroselli | Swiper 10 | Navigation + Pagination + Autoplay |
| Icone | @iconify/react 6 | Prefisso `ph:` (Phosphor icons) |
| Markdown | gray-matter + remark + remark-html | Per articoli locali |
| Fetching | SWR | |
| Analytics | Google Analytics 4 | ID: `G-GDJJYGVN8F` in `config/default.js` |
| Cookie | @palmabit/react-cookie-law | Caricato dinamicamente in `Layout.js` |

**Dipendenze rimosse:** `@mui/*`, `react-material-ui-carousel`, `styled-components`, `@emotion/*`, `@fontsource/roboto`, `autoprefixer`.

---

## Struttura directory

```
/
├── pages/                    # Rotte Next.js (pages router)
│   ├── _app.js               # ThemeProvider (next-themes) + GoogleAnalytics
│   ├── index.js              # Home page
│   ├── [settore].js          # Pagine corsi: elettrico, energia, informatico, meccanico, automotive
│   ├── articoli/[id].js      # Articolo singolo — ISR, revalidate 3600s, fetch da CMS esterno
│   ├── news.js               # Archivio notizie
│   ├── progetto/             # Sottopagine progetto educativo (01–10 + index)
│   ├── quiz.js               # Quiz orientamento
│   ├── screen.js             # Schermo display esterno (autoplay Featured)
│   └── ...                   # contatti, trasparenza, privacy, stage, sal, accreditamenti, ecc.
├── components/               # Componenti React (barrel export via index.js)
│   ├── index.js              # Export centralizzato — aggiornare ad ogni aggiunta
│   ├── Layout.js             # Wrapper: Head + CookieBanner + header + <main> + footer
│   ├── NavBar.js             # Navbar glassmorphism con drawer mobile e dark toggle
│   ├── LandingHero.js        # Hero con parallax scroll (pages statiche)
│   ├── SyntheticLightHero.jsx# Hero dinamico per news in evidenza e articoli
│   ├── Carousel.js           # Swiper: slide con immagine, titolo, tag, bottone
│   ├── Featured.js           # Wrapper Carousel per news in_evidenza
│   ├── NewsWall.jsx          # Grid bento per news (layout fisso 7 card)
│   ├── NewsArchive.jsx       # Archivio con filtro tag + paginazione (12/pag)
│   ├── NewsArchiveHero.jsx   # Hero collage foto per pagina news
│   ├── NewsCard.js           # Card singola notizia
│   ├── News.js               # Grid 3 colonne di NewsCard
│   ├── SwiperNews.js         # Swiper di NewsCard
│   ├── Paragraph.js          # Sezione testo con bg, blur, colonne, immagini float
│   ├── Products.js           # Grid prodotti/corsi con immagine e titolo
│   ├── Features.js           # Grid icona + titolo + descrizione
│   ├── Elements.js           # Grid post CMS (wrappa ElementsCard)
│   ├── ElementsCard.js       # Card con immagine e titolo da CMS
│   ├── Team.js               # Grid membri del team con avatar e contatti
│   ├── Testimonials.js       # Grid testimonianze con avatar e testo
│   ├── Calendar.js           # Grid eventi con immagine e orari
│   ├── Table.js              # Tabella dati con bg e blur opzionali
│   ├── Sponsor.js            # Grid loghi sponsor
│   ├── Certifications.js     # Grid certificazioni con logo e testo
│   ├── Logos.js              # Logo singolo a larghezza piena
│   ├── Maps.js               # Wrapper iframe Google Maps
│   ├── Post.js               # Card articolo markdown locale
│   ├── PostInEvidenza.js     # Banner hero articolo in evidenza
│   ├── Header.js             # Header secondario con barra navigazione
│   ├── Torneo.js             # Torneo Superpizza (pizza animata + classifica)
│   ├── Test.js               # Quiz orientamento (variante components/)
│   ├── Credits.js            # Footer crediti 9dreams
│   ├── Footer.js             # Footer alternativo (non usato da config/default.js)
│   ├── FooterSocialIcons.jsx # SVG inline per icone social (no dipendenze esterne)
│   ├── GoogleAnalytics.js    # Script GA4
│   └── Date.js               # Formattazione data con date-fns
├── cc/                       # Componenti custom avanzati
│   ├── Footer.js             # ← Footer ATTIVO (usato da config/default.js)
│   ├── INostriNumeri.js      # Contatori animati con IntersectionObserver
│   └── Test.js               # Quiz orientamento (variante cc/ — usato da pages/quiz.js)
├── config/
│   └── default.js            # ← fonte di verità: menu, logoUrl, footer JSX, social, GA ID
├── data/
│   └── homePage.js           # slides (Carousel), classi (Torneo), domande_test (Quiz)
├── lib/
│   └── articoli.js           # getDatiArticoli (locale), getIdArticoli (CMS), getArticolo
├── styles/
│   └── globals.css           # Tailwind v4 entry point + CSS vars + animazioni Torneo
├── articoli/                 # File .md con frontmatter (title, date, abstract, imageUrl)
└── public/
    ├── images/               # Immagini per sezione (settori, home, pizza, ecc.)
    └── docs/                 # PDF allegati
```

---

## Pagine principali

| Pagina | Route | Note |
|--------|-------|------|
| Home | `/` | Usa SyntheticLightHero + NewsWall + Carousel |
| Corsi | `/elettrico`, `/energia`, `/informatico`, `/meccanico`, `/automotive` | 5 indirizzi formativi |
| News | `/news` | `NewsArchive` con filtro tag, dati da CMS |
| Articolo | `/articoli/[id]` | ISR revalidate 3600s |
| Quiz | `/quiz` | Importa `Test` da `/cc/Test` |
| Schermo | `/screen` | `Featured` fullscreen, autoplay, reload ogni 10min |
| Trasparenza | `/trasparenza` | Documenti da CMS con query `?q=trasparenza` |
| Progetto | `/progetto` + `/progetto/01–10` | Pagine sottosezioni progetto educativo |

---

## Gestione contenuti

### CMS esterno — `channels.donboscosandona.it`

```
GET /api/get_ids              → lista ID per getStaticPaths
GET /api/posts/{canale}       → array post per canale (news, docs, ecc.)
GET /api/post/{id}            → singolo post
```

Post-model: `{ id, titolo, abstract, immagine, immagine_mobile, immagine_schermo, tag, pubblicazione, in_evidenza, articolo, link, allegato }`

### Articoli markdown locali (`/articoli/*.md`)
Frontmatter: `title`, `date`, `abstract`, `imageUrl`. Processati da `lib/articoli.js` con remark. Usati nelle pagine settore tramite `getDatiArticoli()`.

### Configurazione sito (`config/default.js`)
Esporta: `siteName`, `siteTitle`, `siteDescription`, `siteBaseUrl`, `gaMeasurementId`, `menu`, `logoUrl`, `header` (JSX NavBar), `footer` (JSX cc/Footer).

---

## Styling — Tailwind CSS 4

### Regola fondamentale
**Unica tecnologia CSS**: classi Tailwind utility + CSS variables native. **Niente** CSS Modules, **niente** MUI, **niente** styled-components.

### `styles/globals.css`
```css
@import url('https://fonts.googleapis.com/...');  /* Inter Tight, Cormorant Garamond, Plus Jakarta Sans, Kaushan Script */
@import "tailwindcss";
@custom-variant dark (&:where(.dark, .dark *));   /* dark mode class-based */

:root { --brand-blue: #1976D2; --bg: #f7f9fb; ... }
html.dark { --brand-blue: #64B5F6; --bg: #0d0f14; ... }
/* + keyframes e classi per il componente Torneo (prefisso torneo-) */
```

### `postcss.config.js`
```js
module.exports = { plugins: { '@tailwindcss/postcss': {} } }
```
Nessun `tailwind.config.js` — in v4 la configurazione è dentro il CSS.

### Colori brand (CSS variables)
| Token | Light | Dark |
|-------|-------|------|
| `--brand-blue` | `#1976D2` | `#64B5F6` |
| `--bg` | `#f7f9fb` | `#0d0f14` |
| `--fg` | `#353B48` | `#e8eaf0` |
| `--fg-secondary` | `#717783` | `#9da3af` |
| `--surface` | `#ffffff` | `#181b23` |
| accento arancio | `#FF9800` | `#FF9800` |

### Dark mode
`next-themes` aggiunge `.dark` a `<html>`. Il prefisso `dark:` funziona grazie a `@custom-variant dark (&:where(.dark, .dark *))`. Non servono ThemeProvider MUI o CssBaseline.

### Font
- UI body: `Inter Tight` → `var(--font-ui)` — su h1–h6, p, a, button, ecc.
- Display hero: `Cormorant Garamond` → `var(--font-display)` — classe `.title-display` e `.slh-serif`
- Alternativo: `Plus Jakarta Sans` — usato in NewsArchive e NewsWall
- Torneo: `Kaushan Script` — solo nel componente Torneo

---

## Icone

Tutte da `@iconify/react`. Non usare `@mui/icons-material`.

```jsx
import { Icon } from '@iconify/react'
<Icon icon="ph:arrow-right" className="text-xl" />
```

Icone usate nel progetto: `ph:arrow-right`, `ph:grid-four`, `ph:calendar-blank`, `ph:caret-left`, `ph:caret-right`, `ph:phone`, `ph:envelope`, `ph:sun`, `ph:moon`, `ph:list`, `ph:x`, `ph:magnifying-glass`, `ph:clock`, `ph:moon-stars`, `ph:linkedin-logo`, `ph:calendar-blank`.

---

## Componente Torneo

`components/Torneo.js` usa animazioni CSS complesse (pizza rotante, pizzette cadenti in falling). Le classi `.torneo-*` e i `@keyframes torneo-*` sono definiti in `styles/globals.css`. Non spostare queste regole in CSS Modules.

---

## Path alias

`@/` → root del progetto (da `jsconfig.json`). Esempio: `import Layout from '@/components/Layout'`. In alternativa si usa `/components/Layout` con path assoluto da root.

---

## Convenzioni

- **Barrel import**: `import { Carousel, Layout } from '/components'` (da `components/index.js`) — aggiornare index.js ad ogni nuovo componente
- **Immagini**: `next/image` con `fill={true}` + `sizes` per le responsive. Remote patterns: tutti gli host HTTPS ammessi.
- **ISR**: articoli con `revalidate: 3600`. Screen con `revalidate: 1200`.
- **Dynamic import**: CookieBanner caricato con `next/dynamic` per evitare SSR.
- **Niente MUI**: nessun import da `@mui/*` o `react-material-ui-carousel`.
- **Niente CSS Modules**: nessun file `.module.css`.

---

## File critici — modificare con cautela

| File | Perché è critico |
|------|-----------------|
| `config/default.js` | Fonte di verità per nav, footer, GA ID, social, logo |
| `styles/globals.css` | CSS variables globali + animazioni Torneo — impatto ovunque |
| `components/index.js` | Barrel export — rompere causa import errors a cascata |
| `data/homePage.js` | Dati quiz (20 domande) e slides Carousel |
| `pages/_app.js` | ThemeProvider e GoogleAnalytics — toccare con cautela |

---

## Note / legacy

- `pages/motoristico0.js` — versione legacy di una pagina settore, probabilmente da rimuovere
- `config/donboscosandona.js` — configurazione alternativa non attiva
- `components/Footer.js` — footer legacy non usato (il footer attivo è `cc/Footer.js`)
- `pages/foto1.jpg`, `pages/principale.jpg` — immagini finite per errore nella cartella pages
- `components/Test.js` vs `cc/Test.js` — esistono due versioni del quiz; `pages/quiz.js` usa `cc/Test.js`

---

## Deployment

Compatibile con **Vercel** (Next.js standard). Base URL sviluppo: `https://dev.donboscosandona.it`.
