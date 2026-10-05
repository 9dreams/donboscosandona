# syntax=docker/dockerfile:1

# =============================================================================
# PER – Proposta Estate Ragazzi (per.donboscosandona.it) – immagine di produzione per Coolify
#
# Next.js (pages router) in modalità `output: 'standalone'`:
#   deps    → npm ci
#   builder → next build (scarica i contenuti dal CMS e pre-renderizza le pagine)
#   runner  → solo server.js + .next/static + public, utente non root, porta 3000
# =============================================================================


# -----------------------------------------------------------------------------
# Stage 1 — dipendenze
# -----------------------------------------------------------------------------
FROM node:22-slim AS deps

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci


# -----------------------------------------------------------------------------
# Stage 2 — build
# Nessuna variabile di build necessaria. La build richiede accesso di rete a
# channels.donboscosandona.it (getStaticProps).
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
# Articoli markdown locali letti da lib/articoli.js (process.cwd()/articoli).
COPY --from=builder --chown=nextjs:nodejs /app/articoli ./articoli

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
