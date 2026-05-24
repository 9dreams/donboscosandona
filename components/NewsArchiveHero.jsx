import { useEffect, useMemo } from 'react'

const DESCRIPTION =
  "Resta aggiornato su tutte le attività dell'Oratorio don Bosco di San Donà di Piave: dalla formazione professionale agli eventi per le famiglie."

// Layout deterministico: aspetto pseudocasuale ma stabile tra SSR e client
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

const bodyStyle = { fontFamily: '"Plus Jakarta Sans", "Exo 2", sans-serif' }

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
        {/* Collage fotografico */}
        <div className="nah-collage absolute inset-0 z-0 overflow-hidden bg-[#0b0e12]">
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

        {/* Glow ambientali */}
        <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
          <div className="absolute left-[8%] top-[10%] h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,rgba(255,180,102,.14),transparent_70%)] blur-3xl" />
          <div className="absolute right-[5%] bottom-[18%] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(62,145,139,.1),transparent_70%)] blur-3xl" />
        </div>

        <div className="pointer-events-none absolute inset-0 z-[2] bg-black/40" />

        {/* Titolo e descrizione */}
        <div className="relative z-10 flex h-[66%] flex-col items-center justify-center px-6 pt-[88px] text-center">
          <div className="max-w-[900px]">
            <h1 className="nah-reveal nah-serif text-[clamp(3rem,8.5vw,7.5rem)] leading-[.88] tracking-[-.06em] text-white drop-shadow-[0_10px_24px_rgba(0,0,0,.75)]">
              Archivio News
            </h1>
            <p
              className="nah-reveal mx-auto mt-6 max-w-[720px] text-[15px] leading-[1.9] text-white/85 sm:text-[17px]"
              style={bodyStyle}
            >
              {DESCRIPTION}
            </p>
          </div>
        </div>

        {/* Tag: da ~2/3 in giù, proseguono nella pagina */}
        <div className="absolute inset-x-0 bottom-0 top-[66%] z-20 flex flex-col bg-gradient-to-b from-transparent via-[#f7f9fb]/92 to-[#f7f9fb]">
          <div className="nah-reveal mx-auto flex w-full max-w-[1280px] flex-1 flex-col justify-start px-5 pb-6 pt-4 md:px-12 md:pb-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => onTagChange?.('all')}
                  className="rounded-full px-5 py-2 text-sm font-semibold transition-colors"
                  style={{
                    backgroundColor: activeTag === 'all' ? '#1976D2' : '#e6e8ea',
                    color: activeTag === 'all' ? '#fff' : '#414752',
                    ...bodyStyle,
                  }}
                >
                  Tutte le Notizie
                </button>
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => onTagChange?.(tag)}
                    className="rounded-full px-5 py-2 text-sm font-semibold transition-colors"
                    style={{
                      backgroundColor: activeTag === tag ? '#1976D2' : '#e6e8ea',
                      color: activeTag === tag ? '#fff' : '#414752',
                      ...bodyStyle,
                    }}
                  >
                    {tag}
                  </button>
                ))}
              </div>
              {filteredCount > 0 && (
                <p className="shrink-0 text-sm text-[#717783] md:pt-2" style={bodyStyle}>
                  {filteredCount} {filteredCount === 1 ? 'articolo' : 'articoli'}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        .nah-root {
          background: #0b0e12;
          color: white;
        }

        .nah-serif {
          font-family: 'Cormorant Garamond', serif !important;
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
