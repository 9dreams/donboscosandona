# Pubblicare Oratorio Don Bosco (inoratorio.it) su Coolify

Il sito è un'app **Next.js 15 (pages router)** impacchettata in un'unica immagine
Docker (`output: 'standalone'`). Nessun database, nessun volume, nessun worker:
un solo container Node sulla porta **3000**.

Questo repository contiene più siti, uno per ramo: per l'oratorio il ramo
è **`inoratorio`**.

## File coinvolti

| File | Scopo |
|------|-------|
| `Dockerfile` | Multi-stage: `npm ci` → `next build` → runtime minimale (utente non root) |
| `.dockerignore` | Esclude `node_modules`, `.next`, `.env*`, file di tooling |
| `next.config.js` | `output: 'standalone'` |
| `.env.example` | Elenco delle variabili d'ambiente (solo `REVALIDATE_SECRET`) |

## Architettura

```
https://www.inoratorio.it ──▶ Traefik (Coolify) ──▶ app (node server.js) :3000
                                                     │  build + ISR
                                                     ▼
                                channels.donboscosandona.it  (CMS: news, elementi)
                                cinema.donboscosandona.it    (film in evidenza)
```

- Le pagine sono pre-renderizzate **durante la build**, scaricando news e
  articoli dal CMS: la build richiede che il CMS e il sito cinema siano
  raggiungibili.
- A runtime le pagine si rigenerano da sole (ISR) oppure su richiesta con
  `/api/revalidate`.
- La cache ISR vive nel filesystem del container: a ogni redeploy riparte dalla
  build, non serve un volume persistente.

---

## Passo passo

### 1. Prerequisiti
- Il server Coolify con il proxy Traefik attivo.
- Accesso di Coolify al repository GitHub **`9dreams/donboscosandona`**: è lo
  stesso repo del sito della scuola, quindi se quello è già pubblicato l'accesso
  c'è già.
- I record DNS di `inoratorio.it`: `www` e la radice (`@`) verso il server Coolify.

### 2. Genera il token di revalidation
```bash
openssl rand -hex 32
```
Usane uno diverso da quello del sito della scuola.

### 3. Crea la risorsa in Coolify
1. Progetto → **+ New → Application** → *Private Repository (with GitHub App)*
   (oppure *with Deploy Key*).
2. Repository: `9dreams/donboscosandona`, **Branch: `inoratorio`**.
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
*Domains* → `https://www.inoratorio.it,https://inoratorio.it`
(entrambi, separati da virgola). Poi in *Advanced → Redirect* scegli
**Redirect to www**, così il dominio senza www rimanda a quello principale.
Coolify genera i certificati Let's Encrypt in automatico.

Finché il vecchio sito resta online, puoi provare prima su un dominio
temporaneo e passare a `www.inoratorio.it` solo al momento dello switch,
cambiando DNS e dominio in Coolify.

### 6. Health check (consigliato)
*Health Checks* → abilita, path `/`, porta `3000`.

### 7. Deploy
Clicca **Deploy** e segui i log: la fase `Generating static pages` è la più lunga.

### 8. Deploy automatico a ogni push
Con la GitHub App è già attivo (*Advanced → Auto Deploy*). Con la Deploy Key
copia il webhook da Coolify (*Webhooks*) in GitHub → *Settings → Webhooks*.
Da quel momento ogni `git push origin inoratorio` ripubblica il sito.

### 9. Verifica
- `https://www.inoratorio.it/` carica la home con le news e i film del cinema.
- `https://www.inoratorio.it/news` e un articolo `https://www.inoratorio.it/articoli/<id>`.
- Le pagine `/dlc`, `/scout`, `/ads`.
- `https://www.inoratorio.it/api/revalidate?secret=<token>` risponde `200` con
  l'elenco delle pagine rigenerate; con un token sbagliato risponde `401`.

---

## Aggiornare i contenuti senza redeploy

```
https://www.inoratorio.it/api/revalidate?secret=<token>               # tutte le pagine principali
https://www.inoratorio.it/api/revalidate?secret=<token>&path=/news    # una sola pagina
```

## Note operative
- **Dominio:** `siteBaseUrl` in `config/default.js` vale `https://www.inoratorio.it`.
  Se cambi dominio, aggiornalo insieme a DNS e Coolify.
- **Log:** stdout del container, visibili in Coolify.
- **Scalabilità:** 1 replica; con più repliche la cache ISR non sarebbe condivisa.

## Prova locale (opzionale)
```bash
docker build -t inoratorio .
docker run --rm -p 3000:3000 -e REVALIDATE_SECRET=test inoratorio
# → http://localhost:3000
```
