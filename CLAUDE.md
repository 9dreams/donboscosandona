# CLAUDE.md — Don Bosco Sandona Website

## Panoramica progetto

Sito web istituzionale per la **Scuola di Formazione Professionale Don Bosco di San Donà di Piave (VE)**. Gestito dall'agenzia [9dreams](https://github.com/9dreams/donboscosandona). Framework: **Next.js 13.1.6** con React 18.

---

## Comandi principali

```bash
npm run dev      # Avvia il server di sviluppo
npm run build    # Build di produzione
npm start        # Avvia il server di produzione
npm run lint     # Linting con Next.js ESLint
```

---

## Architettura

### Stack tecnologico

| Categoria | Tecnologia |
|-----------|-----------|
| Framework | Next.js 13.1.6 |
| UI | React 18.2.0 |
| Component library | Material-UI (MUI) v5 |
| Styling | Tailwind CSS 3 + CSS Modules + CSS Variables |
| Markdown | gray-matter + remark + remark-html |
| Dark mode | next-themes |
| Caroselli | Swiper |
| Icone | @iconify/react, @mui/icons-material, react-icons |
| Fetching | SWR |
| Analytics | Google Analytics 4 (G-GDJJYGVN8F) |
| Cookie consent | @palmabit/react-cookie-law |

### Struttura directory

```
/
├── pages/                  # Rotte Next.js
│   ├── index.js            # Home page
│   ├── [page].js           # Pagine generiche (30+ pagine)
│   ├── articoli/[id].js    # Pagine articoli (ISR, revalidate: 3600s)
│   └── api/                # API routes
├── components/             # Componenti React condivisi (48 file)
│   └── index.js            # Export centralizzato di tutti i componenti
├── cc/                     # Componenti custom specifici del sito
│   ├── Footer.js
│   ├── INostriNumeri.js
│   └── Test.js
├── config/
│   └── default.js          # Config principale: nav, footer, GA ID, social, metadata
├── data/
│   └── homePage.js         # Dati statici: slides, classi, domande quiz
├── lib/
│   └── articoli.js         # Utilità per parsing articoli markdown
├── styles/
│   └── globals.css         # CSS Variables globali (brand colors, font, dark mode)
├── articoli/               # File markdown per articoli locali
└── public/
    ├── images/             # ~396 immagini organizzate per sezione
    └── docs/               # PDF e documenti
```

---

## Pagine principali

| Pagina | File | Descrizione |
|--------|------|-------------|
| Home | `pages/index.js` | Hero, slides, quiz intro, news |
| Corsi | `pages/elettrico.js`, `informatico.js`, `energia.js`, `meccanico.js`, `automotive.js` | 5 indirizzi formativi |
| News | `pages/news.js` | Lista notizie da CMS esterno |
| Articolo | `pages/articoli/[id].js` | Dettaglio articolo (ISR) |
| Quiz | `pages/quiz.js` | Quiz orientamento (5 percorsi) |
| Contatti | `pages/contatti.js` | Contatti e mappa |
| Trasparenza | `pages/trasparenza.js` | Amministrazione trasparente |
| Stage/SAL | `pages/stage.js`, `pages/sal.js` | Tirocini e placement |

---

## Componenti chiave

- **`Layout`** — wrapper globale con NavBar, Footer, ThemeProvider MUI
- **`NavBar`** — navigazione responsive con dark mode toggle
- **`LandingHero`** / **`SyntheticLightHero`** — hero sections con filtri tag
- **`NewsWall`** / **`NewsArchive`** — griglia notizie con paginazione
- **`Test`** (in `/cc/`) — quiz orientamento con scoring per 5 percorsi
- **`Carousel`** — carosello immagini via Swiper
- **`GoogleAnalytics`** — integrazione GA4

---

## Gestione contenuti

### API CMS esterno
- Base URL: `https://channels.donboscosandona.it/api/`
- `GET /api/get_ids` — lista ID articoli per routing dinamico
- `GET /api/post/:id` — contenuto singolo articolo
- ISR attivo: `revalidate: 3600` secondi

### Articoli markdown locali
- Cartella `/articoli/` con file `.md`
- Frontmatter: `title`, `date`, `abstract`, `imageUrl`
- Processati via `lib/articoli.js` con gray-matter + remark

### Configurazione centralizzata
- Tutto in `config/default.js`: menu di navigazione, footer, social links, GA ID, metadata sito

---

## Sistema di styling

Il progetto usa **4 livelli di styling** — rispettarli:

1. **CSS Variables** (`globals.css`) — colori brand, font, variabili dark/light mode
2. **Tailwind CSS** — utility classes in JSX (approccio mobile-first)
3. **CSS Modules** — stili scoped per componenti complessi (NavBar, Carousel, Layout, ecc.)
4. **MUI ThemeProvider** — tema Material-UI con palette personalizzata

**Colori brand:**
- Light: bg `#f7f9fb`, testo `#353B48`, blu `#1976D2`
- Dark: bg `#0d0f14`, testo `#e8eaf0`, blu `#64B5F6`
- Accento: arancio `#FF9800`

**Font:**
- UI: Inter Tight
- Display: Cormorant Garamond
- Alternativo: Plus Jakarta Sans

---

## Dark mode

Implementato via `next-themes` con strategia `class`. Le variabili CSS in `globals.css` si aggiornano automaticamente. MUI riceve il tema (`light`/`dark`) tramite `ThemeProvider`. Non usare stili hardcoded che ignorano le CSS variables.

---

## Quiz di orientamento

In `data/homePage.js` ci sono 20 domande (`domande_test`) con sistema di punteggio che mappa le risposte su 5 percorsi formativi:
- `elettrico`, `energia`, `informatico`, `meccanico`, `motoristico`

Il componente `Test` (in `/cc/Test.js`) gestisce tutta la logica.

---

## Convenzioni di sviluppo

- **Import componenti**: usare sempre `import { ComponentName } from '@/components'` (barrel export da `components/index.js`)
- **Path alias**: `@/` mappa alla root del progetto (configurato in `jsconfig.json`)
- **Routing dinamico**: articoli usano `getStaticPaths` + `getStaticPaths` con ISR
- **Immagini esterne**: configurate in `next.config.js` con pattern `https://**` per ottimizzazione
- **Dynamic imports**: usare `next/dynamic` per componenti pesanti (es. CookieBanner)

---

## File da non modificare / attenzione

- `config/default.js` — modifica con cautela, è la fonte di verità per nav/footer/metadata
- `styles/globals.css` — le CSS variables sono usate ovunque, una modifica ha impatto globale
- `components/index.js` — aggiornare sempre quando si aggiunge/rinomina un componente
- `data/homePage.js` — contiene i dati del quiz, modifiche impattano il tool di orientamento

---

## Note legacy / file sperimentali

- `pages/motoristico0.js` — versione legacy, probabilmente da rimuovere
- `components/Carousel copy.js` — duplicato sperimentale, da verificare se in uso
- `config/donboscosandona.js` — configurazione alternativa, attualmente non attiva

---

## Deployment

Il progetto è compatibile con **Vercel** (Next.js standard). Ambiente di sviluppo su `dev.donboscosandona.it`.
