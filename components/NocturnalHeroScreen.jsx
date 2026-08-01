import { useEffect } from 'react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Icon } from '@iconify/react'

function readMore(text, maxWords = 50) {
  if (!text) return ''
  const words = text.trim().split(/\s+/)
  if (words.length <= maxWords) return text.trim()
  return `${words.slice(0, maxWords).join(' ')}...`
}

function NocturnalSlide({ post, defaultTag, hideButton }) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('nhs-in')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    const root = document.querySelector(`[data-slide-id="${post.id ?? post.immagine}"]`)
    root?.querySelectorAll('.nhs-reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [post.id, post.immagine])

  const tags = post.tag
    ? post.tag.split(',').map((t) => t.trim()).filter(Boolean)
    : []

  const visibleTags = defaultTag
    ? tags.filter((t) => t.toLowerCase() !== defaultTag.toLowerCase())
    : tags

  const ctaHref =
    (post.articolo && '/articoli/' + post.id) || post.link || post.allegato || null

  const ctaLabel =
    (post.articolo && 'Continua a leggere') ||
    (post.link && 'Scopri di più') ||
    (post.allegato && "Scarica l'allegato") ||
    null

  const hasCaption = Boolean(post.titolo || post.abstract || visibleTags.length > 0)

  return (
    <section
      data-slide-id={post.id ?? post.immagine}
      className="nhs-slide relative h-[100svh] min-h-[100svh] w-full overflow-hidden bg-[#0b0e12]"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[10%] top-[12%] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(255,180,102,.18),transparent_70%)] blur-3xl" />
        <div className="absolute right-[6%] bottom-[10%] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(62,145,139,.12),transparent_70%)] blur-3xl" />
      </div>

      {post.immagine && (
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.immagine}
            alt={post.titolo || ''}
            className="nhs-img absolute inset-0 h-full w-full object-cover"
          />
        </div>
      )}

      {hasCaption && (
        <div className="pointer-events-none absolute inset-0 z-[1] bg-black/35" />
      )}

      {hasCaption && (
        <div className="relative z-10 flex h-full min-h-[100svh] items-center justify-center px-6 pb-10 pt-6 text-center">
          <div className="max-w-[980px] rounded-[2.2rem] px-3 py-7 sm:px-8 sm:py-8">
            {post.pubblicazione && (
              <p className="nhs-reveal mb-2 text-[10px] uppercase tracking-[0.3em] text-white/70">
                {post.pubblicazione}
              </p>
            )}

            {post.titolo && (
              <h1 className="nhs-reveal nhs-serif mt-6 text-[clamp(2.4rem,6.5vw,5.5rem)] leading-[.9] tracking-[-.05em] text-white drop-shadow-[0_10px_20px_rgba(0,0,0,.8)]">
                {post.titolo}
              </h1>
            )}

            {post.abstract && (
              <p className="nhs-reveal mx-auto mt-6 max-w-[760px] text-[15px] leading-[1.95] text-white sm:text-[17px]">
                {readMore(post.abstract, 50)}
              </p>
            )}

            {!hideButton && ctaHref && ctaLabel && (
              <a
                href={ctaHref}
                className="nhs-reveal mt-6 inline-flex h-12 items-center gap-3 rounded-full border border-white/12 bg-[linear-gradient(180deg,rgba(20,22,24,.94),rgba(11,13,16,.9))] px-6 text-[11px] uppercase tracking-[0.26em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,.06),0_18px_60px_rgba(0,0,0,.28)]"
              >
                <Icon icon="ph:arrow-right" className="text-lg text-[#f0c06b]" />
                {ctaLabel}
              </a>
            )}

            {visibleTags.length > 0 && (
              <div className="nhs-reveal mt-6 flex justify-center">
                <span className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/8 px-4 py-3 text-[10px] uppercase tracking-[0.3em] text-white/80 shadow-[0_8px_8px_rgba(0,0,0,.6)] backdrop-blur-[20px]">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#f0c06b] shadow-[0_0_18px_rgba(255,193,103,.55)]" />
                  {visibleTags.join(' / ')}
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}

export default function NocturnalHeroScreen({
  data,
  limit = 10,
  height = 100,
  animation = 'fade',
  interval = 12000,
  duration = 0,
  defaultTag = '',
  captionMode = 'screen',
  hideButton = true,
}) {
  if (!data) return <div>Caricamento...</div>
  if (data && data.status === '404') {
    return <div>Errore: il canale specificato per le News è inesistente.</div>
  }

  const posts = Array.isArray(data) ? [...data] : []
  const featured = posts.filter((post) => post.in_evidenza).slice(0, limit)

  if (featured.length === 0) return null

  const heightVh = typeof height === 'string' ? parseInt(height, 10) : height

  return (
    <>
      <div className="nhs-carousel w-full" style={{ height: `${heightVh}vh` }}>
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: interval, disableOnInteraction: false }}
          speed={duration || 800}
          loop={featured.length > 1}
          pagination={{ clickable: true }}
          className="h-full"
        >
          {featured.map((post) => (
            <SwiperSlide key={post.id ?? post.immagine} className="h-full">
              <NocturnalSlide
                post={post}
                defaultTag={defaultTag}
                hideButton={hideButton}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .nhs-carousel,
        .nhs-carousel .swiper,
        .nhs-carousel .swiper-slide {
          height: 100% !important;
          min-height: 100% !important;
        }

        .nhs-serif {
          font-family: 'Cormorant Garamond', serif !important;
        }

        .nhs-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(1.05) saturate(1.2);
        }

        .nhs-reveal {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .nhs-reveal.nhs-in {
          opacity: 1;
          transform: translateY(0);
        }

        .nhs-carousel .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.25);
          opacity: 1;
        }

        .nhs-carousel .swiper-pagination-bullet-active {
          background: #f0c06b;
        }
      `}</style>
    </>
  )
}

NocturnalHeroScreen.defaultProps = {
  limit: 10,
  height: 100,
  animation: 'fade',
  interval: 12000,
  duration: 0,
  defaultTag: '',
  captionMode: 'screen',
  hideButton: true,
}
