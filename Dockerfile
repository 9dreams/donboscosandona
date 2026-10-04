# syntax=docker/dockerfile:1

# =============================================================================
# Oratorio Don Bosco (inoratorio.it) – immagine di produzione per Coolify
#
# Next.js (pages router) in modalità `output: 'standalone'`:
#   deps    → npm ci
#   builder → next build (scarica i contenuti dal CMS e pre-renderizza le pagine)
#   runner  → solo server.js + .next/static + public, utente non root, porta 3000
# =============================================================================


# -----------------------------------------------------------------------------
# Stage 1 — dipendenze
# Debian slim (non alpine): sharp usa i binari glibc già nel package-lock.
# -----------------------------------------------------------------------------
FROM node:22-slim AS deps

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci


# -----------------------------------------------------------------------------
# Stage 2 — build
# Nessuna variabile di build necessaria: REVALIDATE_SECRET è letta solo a runtime.
# La build richiede accesso di rete a channels.donboscosandona.it e
# cinema.donboscosandona.it (getStaticProps).
# -----------------------------------------------------------------------------
FROM node:22-slim AS builder

WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1

COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build


# -----------------------------------------------------------------------------
# Stage 3 — runtime
# -----------------------------------------------------------------------------
FROM node:22-slim AS runner

WORKDIR /app
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000 \
    HOSTNAME=0.0.0.0

RUN groupadd --system --gid 1001 nodejs \
    && useradd --system --uid 1001 --gid nodejs nextjs

COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
# Markdown letti a runtime con process.cwd(): articoli (lib/articoli.js) e
# contenuti fissi delle pagine (lib/contenuti.js, rigenerati via ISR).
COPY --from=builder --chown=nextjs:nodejs /app/articoli ./articoli
COPY --from=builder --chown=nextjs:nodejs /app/contenuti ./contenuti

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
