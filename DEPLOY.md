# Pubblicare SFP Don Bosco San Donà su Coolify

Il sito è un'app **Next.js 15 (pages router)** impacchettata in un'unica immagine
Docker (`output: 'standalone'`). Nessun database, nessun volume, nessun worker:
un solo container Node sulla porta **3000**.

Questo repository contiene più siti, uno per ramo: per la scuola il ramo
è **`donboscosandona`**.

## File coinvolti

| File | Scopo |
|------|-------|
| `Dockerfile` | Multi-stage: `npm ci` → `next build` → runtime minimale (utente non root) |
| `.dockerignore` | Esclude `node_modules`, `.next`, `.env*`, file di tooling |
| `next.config.js` | `output: 'standalone'` |
| `.env.example` | Elenco delle variabili d'ambiente (solo `REVALIDATE_SECRET`) |

## Architettura

```
https://www.donboscosandona.it ──▶ Traefik (Coolify) ──▶ app (node server.js) :3000
                                                          │  build + ISR
                                                          ▼
                                     channels.donboscosandona.it  (CMS: news, docs, elementi)
                                     cinema.donboscosandona.it    (film in evidenza in home)
```

- Le pagine sono pre-renderizzate **durante la build** (≈210 pagine, ~3–4 minuti:
  quasi tutto il tempo è il download dei ~170 articoli dal CMS). La build quindi
  richiede che il CMS e il sito cinema siano raggiungibili.
- A runtime le pagine si rigenerano da sole (ISR, ogni 20–60 minuti) oppure su
  richiesta con `/api/revalidate`.
- La cache ISR vive nel filesystem del container: a ogni redeploy riparte dalla
  build, non serve un volume persistente.

---

## Passo passo

### 1. Prerequisiti
- Il server Coolify (lo stesso di cinema) con il proxy Traefik attivo.
- Accesso di Coolify al repository GitHub **`9dreams/donboscosandona`**: il repo
  è dell'organizzazione `9dreams`, quindi la GitHub App di Coolify deve essere
  installata anche su quell'organizzazione (o almeno su quel repo).
  In alternativa usa una **Deploy Key** (Coolify → *Keys & Tokens* → aggiungila
  in GitHub → repo → *Settings → Deploy keys*).
- Un record DNS per il dominio scelto che punti al server Coolify.

### 2. Genera il token di revalidation
```bash
openssl rand -hex 32
```

### 3. Crea la risorsa in Coolify
1. Progetto → **+ New → Application** → *Private Repository (with GitHub App)*
   (oppure *with Deploy Key*).
2. Repository: `9dreams/donboscosandona`, **Branch: `donboscosandona`**.
3. **Build Pack: `Dockerfile`** (non Nixpacks), Dockerfile location `/Dockerfile`,
   Base directory `/`.
4. **Ports Exposes: `3000`**.

### 4. Variabili d'ambiente
*Environment Variables* → aggiungi:

```
REVALIDATE_SECRET=<il token del passo 2>
```

Non serve il flag *Build Variable*: viene letta solo a runtime.

### 5. Dominio
*Domains* → `https://www.donboscosandona.it,https://donboscosandona.it`
(entrambi, separati da virgola). Poi in *Advanced → Redirect* scegli
**Redirect to www** così il dominio senza www rimanda a quello principale.
Coolify genera i certificati Let's Encrypt in automatico.

Servono quindi due record DNS verso il server Coolify: `www` e la radice (`@`).
Finché il vecchio sito resta online, puoi fare una prova con un dominio
temporaneo (es. `https://dev.donboscosandona.it`) e passare a `www` solo al
momento dello switch, cambiando DNS e dominio in Coolify.

### 6. Health check (consigliato)
*Health Checks* → abilita, path `/`, porta `3000`. Il primo avvio è immediato
perché le pagine sono già generate in build.

### 7. Deploy
Clicca **Deploy** e segui i log: la fase `Generating static pages` è la più lunga.

### 8. Deploy automatico a ogni push
Con la GitHub App è già attivo (*Advanced → Auto Deploy*). Con la Deploy Key
copia il webhook da Coolify (*Webhooks*) in GitHub → *Settings → Webhooks*.
Da quel momento ogni `git push origin donboscosandona` ripubblica il sito.

### 9. Verifica
- `https://www.donboscosandona.it/` carica la home con le news e i film del cinema.
- `https://www.donboscosandona.it/news` e un articolo `https://www.donboscosandona.it/articoli/<id>`.
- Le immagini si vedono (l'ottimizzazione `/_next/image` usa `sharp`, incluso).
- `https://www.donboscosandona.it/api/revalidate?secret=<token>` risponde `200` con l'elenco
  delle pagine rigenerate; con un token sbagliato risponde `401`.

---

## Aggiornare i contenuti senza redeploy

Le news e i documenti arrivano dal CMS: dopo una pubblicazione urgente chiama

```
https://www.donboscosandona.it/api/revalidate?secret=<token>               # tutte le pagine principali
https://www.donboscosandona.it/api/revalidate?secret=<token>&path=/news    # una sola pagina
```

Un **nuovo articolo** compare comunque senza redeploy (`fallback: 'blocking'`).

## Note operative
- **Dominio:** `siteBaseUrl` in `config/default.js` vale
  `https://www.donboscosandona.it` (usato per il meta `og:url` degli articoli).
  Se cambi dominio, aggiornalo insieme a DNS e Coolify.
- **Log:** stdout del container, visibili in Coolify.
- **Scalabilità:** 1 replica è più che sufficiente; con più repliche la cache ISR
  non sarebbe condivisa.
- **Altri rami/siti** dello stesso repo (es. `inoratorio`): stessa procedura con
  una risorsa Coolify separata e il ramo corrispondente, purché il ramo contenga
  `Dockerfile` e `output: 'standalone'`.

## Prova locale (opzionale)
```bash
docker build -t donboscosandona .
docker run --rm -p 3000:3000 -e REVALIDATE_SECRET=test donboscosandona
# → http://localhost:3000
```
