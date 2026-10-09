import { useEffect, useMemo } from 'react'

const DESCRIPTION =
  "Resta aggiornato su tutte le attività della Scuola di Formazione Professionale Don Bosco di San Donà di Piave: dai laboratori agli stage, fino agli eventi per le famiglie."

const COLLAGE_SLOTS = [
  { left: -2, top: -4, w: 34, h: 42, rot: -4, z: 2 },
  { left: 28, top: -6, w: 32, h: 38, rot: 3, z: 4 },
  { left: 56, top: -3, w: 30, h: 40, rot: -2, z: 3 },
  { left: 82, top: -5, w: 28, h: 36, rot: 5, z: 2 },
  { left: -4, top: 32, w: 28, h: 34, rot: 2, z: 5 },
  { left: 22, top: 28, w: 36, h: 40, rot: -3, z: 6 },
  { left: 54, top: 30, w: 32, h: 38, rot: 4, z: 5 },
  { left: 80, top: 26, w: 30, h: 42, rot: -5, z: 4 },
  { left: 0, top: 58, w: 26, h: 36, rot: 3, z: 3 },
  { left: 24, top: 62, w: 34, h: 38, rot: -2, z: 7 },
  { left: 52, top: 60, w: 30, h: 40, rot: 5, z: 6 },
  { left: 76, top: 58, w: 32, h: 34, rot: -4, z: 5 },
  { left: 8, top: 12, w: 22, h: 28, rot: 6, z: 8 },
  { left: 42, top: 8, w: 24, h: 30, rot: -6, z: 7 },
  { left: 68, top: 14, w: 26, h: 28, rot: 4, z: 8 },
  { left: 36, top: 48, w: 28, h: 32, rot: -3, z: 9 },
]

export default function NewsArchiveHero({
  data,
  allTags = [],
  activeTag = 'all',
  onTagChange,
  filteredCount = 0,
}) {
  const photos = useMemo(() => {
    if (!Array.isArray(data)) return []
    return data
      .map((post) => ({
        id: post.id,
        src: post.immagine_mobile || post.immagine,
        alt: post.titolo || 'Notizia',
      }))
      .filter((p) => p.src)
      .slice(0, COLLAGE_SLOTS.length)
  }, [data])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('nah-in')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    document.querySelectorAll('.nah-reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <section className="nah-root relative h-[100svh] min-h-[100svh] w-full overflow-hidden">
        <div className="nah-collage absolute inset-0 z-0 overflow-hidden bg-ink">
          {photos.map((photo, i) => {
            const slot = COLLAGE_SLOTS[i % COLLAGE_SLOTS.length]
            return (
              <div
                key={photo.id ?? i}
                className="nah-tile absolute overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,.45)]"
                style={{
                  left: `${slot.left}%`,
                  top: `${slot.top}%`,
                  width: `${slot.w}%`,
                  height: `${slot.h}%`,
                  zIndex: slot.z,
                  transform: `rotate(${slot.rot}deg)`,
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="h-full w-full object-cover"
                  loading={i < 6 ? 'eager' : 'lazy'}
                />
              </div>
            )
          })}
        </div>

        {/* Velatura blu notte, come le testate delle altre pagine. */}
        <div className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_center,rgba(11,31,58,.55),rgba(11,31,58,.78))]" />

        <div className="relative z-10 flex h-[66%] flex-col items-center justify-center px-6 pt-[88px] text-center">
          <div className="max-w-[900px]">
            <span className="nah-reveal inline-block rounded-md bg-ochre px-2.5 py-1 text-[13px] font-bold uppercase tracking-widest text-ink">
              Notizie dalla scuola
            </span>
            <h1 className="nah-reveal wordmark mt-4 text-[clamp(3rem,8.5vw,7rem)] text-white drop-shadow-[0_10px_24px_rgba(0,0,0,.6)]">
              Archivio News
            </h1>
            <p className="nah-reveal mx-auto mt-6 max-w-[680px] font-serif text-lg leading-relaxed text-white/90 sm:text-xl">
              {DESCRIPTION}
            </p>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 top-[66%] z-20 flex flex-col bg-gradient-to-b from-transparent via-page/92 to-page">
          <div className="nah-reveal mx-auto flex w-full max-w-[1200px] flex-1 flex-col justify-start px-4 pb-6 pt-4 md:px-8 md:pb-8">
            <div className="flex flex-col gap-3 rounded-2xl border border-line bg-surface p-4 shadow-sm md:flex-row md:items-center md:justify-between md:gap-4">
              {/* Su mobile i tag scorrono in orizzontale: a capo riempirebbero la testata. */}
              <div className="-mx-4 flex min-w-0 gap-2 overflow-x-auto px-4 pb-1 md:mx-0 md:flex-wrap md:overflow-visible md:px-0 md:pb-0">
                <button
                  type="button"
                  aria-pressed={activeTag === 'all'}
                  onClick={() => onTagChange?.('all')}
                  className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                    activeTag === 'all'
                      ? 'border-brand bg-brand text-white dark:text-[#0d0f14]'
                      : 'border-brand/30 bg-transparent text-brand hover:bg-brand/10'
                  }`}
                >
                  Tutte le Notizie
                </button>
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    aria-pressed={activeTag === tag}
                    onClick={() => onTagChange?.(tag)}
                    className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                      activeTag === tag
                        ? 'border-brand bg-brand text-white dark:text-[#0d0f14]'
                        : 'border-brand/30 bg-transparent text-brand hover:bg-brand/10'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
              <p className="shrink-0 text-xs font-bold uppercase tracking-wider text-muted md:pr-2">
                {filteredCount} {filteredCount === 1 ? 'articolo' : 'articoli'}
              </p>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        .nah-root {
          background: var(--ink);
          color: white;
        }

        .nah-tile {
          border-radius: 6px;
        }

        .nah-tile img {
          filter: brightness(1.02) saturate(1.15);
        }

        .nah-reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .nah-reveal.nah-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </>
  )
}
