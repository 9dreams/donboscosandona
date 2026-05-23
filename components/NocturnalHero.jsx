import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'

export default function NocturnalHero({
  data,
  post: postProp = null,
  limit,
  defaultTag,
  ctaLabel: ctaLabelProp = null,
  ctaHref: ctaHrefProp = null,
  showNewsLink = true,
}) {
  const heroImgRef = useRef(null)

  const allPosts = Array.isArray(data) ? data : []
  const featured = postProp ?? allPosts.find((p) => p.in_evidenza) ?? allPosts[0]

  // Scroll-parallax on hero image
  useEffect(() => {
    const el = heroImgRef.current
    if (!el) return
    let ticking = false
    const update = () => {
      const progress = Math.min(window.scrollY / (window.innerHeight * 1.15), 1)
      el.style.transform = `scale(${1.07 + progress * 0.1}) translateY(${progress * 14}px)`
    }
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => { update(); ticking = false })
        ticking = true
      }
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Intersection reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('nh-in')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.16 }
    )
    document.querySelectorAll('.nh-reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  if (!featured) return null

  const tags = featured.tag
    ? featured.tag.split(',').map((t) => t.trim()).filter(Boolean)
    : []

  const visibleTags = defaultTag
    ? tags.filter((t) => t.toLowerCase() !== defaultTag.toLowerCase())
    : tags

  const ctaHref =
    ctaHrefProp ??
    ((featured.articolo && '/articoli/' + featured.id) ||
      featured.link ||
      featured.allegato ||
      null)

  const ctaLabel =
    ctaLabelProp ??
    ((featured.articolo && 'Continua a leggere') ||
      (featured.link && 'Scopri di più') ||
      (featured.allegato && "Scarica l'allegato") ||
      null)

  return (
    <>
      <section className="nh-root relative h-[100svh] min-h-[100svh] overflow-hidden">
        {/* Ambient glows */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
          <div className="absolute left-[10%] top-[12%] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(255,180,102,.18),transparent_70%)] blur-3xl" />
          <div className="absolute right-[6%] bottom-[10%] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(62,145,139,.12),transparent_70%)] blur-3xl" />
        </div>

        {/* Hero image: desktop (lg+) vs mobile, come in Carousel */}
        {(featured.immagine || featured.immagine_mobile) && (
          <div ref={heroImgRef} className="nh-img-wrap absolute inset-0 z-0">
            {featured.immagine && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={featured.immagine}
                alt={featured.titolo || ''}
                className="nh-img absolute inset-0 hidden h-full w-full object-cover lg:block"
              />
            )}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={featured.immagine_mobile || featured.immagine}
              alt={featured.titolo || ''}
              className="nh-img absolute inset-0 block h-full w-full object-cover lg:hidden"
            />
          </div>
        )}

        <div className="pointer-events-none absolute inset-0 z-[1] bg-black/35" />

        {/* Content */}
        <div className="relative z-10 flex h-full items-center justify-center px-6 pb-10 pt-[88px] text-center">
          <div className="max-w-[980px] rounded-[2.2rem] px-3 py-7 sm:px-8 sm:py-8">

            {featured.pubblicazione && (
              <p className="nh-reveal mb-2 text-[10px] uppercase tracking-[0.3em] text-white/70">
                {featured.pubblicazione}
              </p>
            )}

            {/* Title */}
            {featured.titolo && (
              <h1 className="nh-reveal nh-serif mt-6 text-[clamp(3.2rem,9vw,8.5rem)] leading-[.84] tracking-[-.07em] text-white drop-shadow-[0_10px_20px_rgba(0,0,0,.8)]">
                {featured.titolo}
              </h1>
            )}

            {/* Abstract */}
            {featured.abstract && (
              <p className="nh-reveal mx-auto mt-6 max-w-[760px] pb-12 text-[15px] leading-[1.95] text-white/84 sm:text-[17px]">
                {featured.abstract}
              </p>
            )}

            {(ctaHref && ctaLabel) || showNewsLink ? (
              <div className="nh-reveal flex flex-wrap justify-center gap-3">
                {ctaHref && ctaLabel && (
                  <Link
                    href={ctaHref}
                    className="group inline-flex h-14 items-center gap-3 rounded-full border border-white/12 bg-[linear-gradient(180deg,rgba(20,22,24,.94),rgba(11,13,16,.9))] px-7 text-[11px] uppercase tracking-[0.26em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,.06),0_18px_60px_rgba(0,0,0,.28)] transition-transform duration-300 hover:-translate-y-1"
                  >
                    <Icon icon="ph:arrow-right" className="text-xl text-[#f0c06b]" />
                    {ctaLabel}
                  </Link>
                )}
                {showNewsLink && (
                  <Link
                    href="/news"
                    className="inline-flex h-14 items-center gap-3 rounded-full border border-white/10 bg-white/8 px-7 text-[11px] uppercase tracking-[0.26em] text-white/80 backdrop-blur-[20px] transition-transform duration-300 hover:-translate-y-1 hover:bg-white/12"
                  >
                    <Icon icon="ph:newspaper" className="text-xl text-white/70" />
                    Tutte le notizie
                  </Link>
                )}
              </div>
            ) : null}

            {visibleTags.length > 0 && (
              <div className="nh-reveal mt-6 flex justify-center">
                <span className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/8 px-4 py-3 text-[10px] uppercase tracking-[0.3em] text-white/80 shadow-[0_8px_8px_rgba(0,0,0,.6)] backdrop-blur-[20px]">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#f0c06b] shadow-[0_0_18px_rgba(255,193,103,.55)]" />
                  {visibleTags.join(' / ')}
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      <style jsx global>{`
        .nh-root {
          background: #0b0e12;
          color: white;
        }

        .nh-serif {
          font-family: 'Cormorant Garamond', serif !important;
        }

        .nh-img-wrap {
          will-change: transform;
          transform: scale(1.07);
        }

        .nh-img {
          filter: brightness(1.05) saturate(1.2);
        }

        .nh-reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .nh-reveal.nh-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </>
  )
}

NocturnalHero.defaultProps = {
  limit: 1,
  defaultTag: '',
}
