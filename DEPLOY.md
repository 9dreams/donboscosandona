# Pubblicare ANFFAS San Donà di Piave (www.anffassandona.it) su Coolify

Il sito è un'app **Next.js (pages router)** impacchettata in un'unica immagine
Docker (`output: 'standalone'`). Nessun database, nessun volume, nessuna
variabile d'ambiente: un solo container Node sulla porta **3000**.

Questo repository contiene più siti, uno per ramo: per questo sito il ramo
è **`anffas`**.

## File coinvolti

| File | Scopo |
|------|-------|
| `Dockerfile` | Multi-stage: `npm ci` → `next build` → runtime minimale (utente non root) |
| `.dockerignore` | Esclude `node_modules`, `.next`, `.env*`, file di tooling |
| `next.config.js` | `output: 'standalone'` |

## Architettura

```
https://www.anffassandona.it ──▶ Traefik (Coolify) ──▶ app (node server.js) :3000
                                          │  build + ISR
                                          ▼
                     channels.donboscosandona.it  (CMS: news, elementi)
```

- Le pagine sono pre-renderizzate **durante la build** scaricando i contenuti
  dal CMS: la build richiede che il CMS sia raggiungibile.
- A runtime le pagine si rigenerano da sole (ISR).
- La cache ISR vive nel filesystem del container: a ogni redeploy riparte dalla
  build, non serve un volume persistente.

## Passo passo

1. Progetto → **+ New → Application** → *Private Repository (with GitHub App)*
   (oppure *with Deploy Key*), lo stesso accesso già usato per gli altri siti.
2. Repository: `9dreams/donboscosandona`, **Branch: `anffas`**.
3. **Build Pack: `Dockerfile`** (non Nixpacks), Dockerfile location `/Dockerfile`,
   Base directory `/`.
4. **Ports Exposes: `3000`**.
5. *Domains* → `https://www.anffassandona.it,https://anffassandona.it`
   (entrambi, separati da virgola). Poi in *Advanced → Redirect* scegli
   **Redirect to www**, così il dominio senza www rimanda a quello principale.
   Servono due record DNS verso il server Coolify: `www` e la radice (`@`).
   Coolify genera i certificati Let's Encrypt in automatico. Finché il vecchio
   sito resta online puoi provare su un dominio temporaneo e passare a quello
   definitivo al momento dello switch.
6. *Health Checks* (consigliato) → path `/`, porta `3000`.
7. **Deploy**. Con la GitHub App il deploy automatico a ogni
   `git push origin anffas` è già attivo (*Advanced → Auto Deploy*); con la Deploy
   Key copia il webhook di Coolify in GitHub → *Settings → Webhooks*.

## Note operative
- **Dominio:** `siteBaseUrl` in `config/default.js` vale `https://www.anffassandona.it`.
  Se cambi dominio, aggiornalo insieme a DNS e Coolify.
- **Log:** stdout del container, visibili in Coolify.
- **Scalabilità:** 1 replica; con più repliche la cache ISR non sarebbe condivisa.

## Prova locale (opzionale)
```bash
docker build -t anffas .
docker run --rm -p 3000:3000 anffas
# → http://localhost:3000
```
