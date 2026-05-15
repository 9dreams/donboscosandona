import { useEffect, useRef, Fragment } from 'react'
import { Icon } from '@iconify/react'
import Link from 'next/link'

export default function SyntheticLightHero({
  // array mode (homepage)
  data,
  limit = 1,
  defaultTag = '',
  // single-post mode (article page)
  post: postProp = null,
  // single-post mode overrides
  ctaLabel: ctaLabelProp = null,
  ctaHref: ctaHrefProp = null,
  sponsorImage = '/images/home/loghi_sponsor_new.png',
}) {
  const heroImgRef = useRef(null)

  // In single-post mode use postProp directly; otherwise filter from data array
  const post = postProp ?? (data
    ? data
        .filter((p) => p.in_evidenza)
        .filter((p) => {
          if (!defaultTag) return true
          const tags = (p.tag || '').split(',').map((t) => t.trim().toLowerCase())
          return tags.includes(defaultTag.toLowerCase())
        })
        .slice(0, limit)[0]
    : null)

  // Tags to show (excluding defaultTag)
  const visibleTags = post?.tag
    ? post.tag
        .split(',')
        .map((t) => t.trim())
        .filter((t) => t && t.toLowerCase() !== defaultTag.toLowerCase())
        .slice(0, 2)
    : []

  // CTA — prefer explicit overrides, fall back to post fields
  const ctaLabel = ctaLabelProp ||
    (post?.articolo && 'Continua a leggere') ||
    (post?.link && 'Scopri di più') ||
    (post?.allegato && "Scarica l'allegato") ||
    null
  const ctaHref = ctaHrefProp ||
    (post?.articolo && '/articoli/' + post.id) ||
    post?.link ||
    post?.allegato ||
    null

  // Parallax on scroll
  useEffect(() => {
    const el = heroImgRef.current
    if (!el) return

    let raf = 0
    const update = () => {
      const progress = Math.min(Math.max(window.scrollY / (window.innerHeight * 1.15), 0), 1)
      const scale = 1.05 + progress * 0.08
      const translateY = progress * 12
      el.style.transform = `scale(${scale}) translateY(${translateY}px)`
    }

    const onScroll = () => {
      if (raf) return
      raf = window.requestAnimationFrame(() => { update(); raf = 0 })
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', update)
    }
  }, [])

  if (!post) return null

  return (
    <>
      <section className="slh-root relative min-h-screen overflow-hidden -mt-[72px]">
        {/* Background noise / gradient overlay */}
        <div className="slh-bg-gradient absolute inset-0 pointer-events-none -z-10" />
        <div className="slh-grain fixed inset-0 pointer-events-none opacity-[0.28] mix-blend-screen -z-10" />

        {/* Hero image with parallax */}
        <div className="slh-hero-mask absolute inset-0">
          <picture>
            {post.immagine_mobile && (
              <source media="(max-width: 767px)" srcSet={post.immagine_mobile} />
            )}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              ref={heroImgRef}
              src={post.immagine}
              alt={post.titolo || ''}
              className="slh-hero-img absolute inset-0 h-full w-full object-cover brightness-[1.05] saturate-[1.3] contrast-[1.1]"
            />
          </picture>
          <div className="slh-hero-color-overlay absolute inset-0" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-screen max-w-[1600px] items-center px-6 pb-12 pt-28 md:px-12 md:pt-32">
          <div className="max-w-3xl">
            {/* Badge */}
            {visibleTags.length > 0 && (
              <div className="slh-glass inline-flex items-center gap-3 rounded-full px-5 py-3 text-[11px] uppercase tracking-[0.3em] text-white/70 mb-8">
                <div className="h-2 w-2 rounded-full bg-cyan-300" />
                {visibleTags.join(' · ')}
              </div>
            )}

            {/* Title */}
            <h1 className="slh-serif mt-2 text-[clamp(3rem,7vw,6.5rem)] leading-[.88] text-white">
              {(post.titolo || '')
                .split(/\s+/)
                .filter(Boolean)
                .map((word, i, words) => (
                  <Fragment key={i}>
                    <span className="slh-wind">{word}</span>
                    {i < words.length - 1 ? ' ' : null}
                  </Fragment>
                ))}
            </h1>

            {/* Abstract */}
            {post.abstract && (
              <p className="slh-glass slh-copy mt-8 max-w-2xl rounded-[2rem] border border-white/10 p-6 text-base md:text-lg leading-8 md:leading-9 text-white/70">
                {post.abstract}
              </p>
            )}

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap gap-4">
              {ctaHref && ctaLabel && (
                <Link
                  href={ctaHref}
                  className="slh-glass rounded-full px-8 py-4 text-[11px] uppercase tracking-[0.25em] text-white hover:bg-white/10 transition-colors duration-300"
                >
                  {ctaLabel}
                </Link>
              )}
              <Link
                href="/news"
                className="rounded-full border border-white/15 px-8 py-4 text-[11px] uppercase tracking-[0.25em] text-white/70 hover:text-white hover:border-white/30 transition-colors duration-300"
              >
                Tutte le notizie
              </Link>
            </div>
          </div>
        </div>

        {/* Floating label */}
        {post.pubblicazione && (
          <div className="slh-floating-label absolute right-[8%] top-[30%] hidden md:block">
            <div className="flex items-center gap-2">
              <Icon icon="ph:calendar-blank" className="text-cyan-300 text-base" />
              <span>{post.pubblicazione}</span>
            </div>
          </div>
        )}

        {sponsorImage && (
          <div className="pointer-events-none absolute bottom-0 right-0 z-20 hidden w-1/3 md:block">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={sponsorImage}
              alt="Partner e sponsor"
              className="block h-auto w-full rounded-tl-[10px] object-contain object-right object-bottom"
            />
          </div>
        )}
      </section>

      {sponsorImage && (
        <div className="w-full md:hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={sponsorImage}
            alt="Partner e sponsor"
            className="block h-auto w-full rounded-tl-[10px]"
          />
        </div>
      )}

      {/* Scoped styles (no CSS Modules needed) */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700;800&family=Cormorant+Garamond:wght@500;600;700&display=swap');

        .slh-root {
          background: #06060a;
          color: white;
          font-family: 'Inter Tight', sans-serif;
        }

        .slh-bg-gradient {
          background:
            radial-gradient(circle at 20% 10%, rgba(255,56,182,.14), transparent 22%),
            radial-gradient(circle at 78% 20%, rgba(97,218,251,.11), transparent 24%),
            linear-gradient(180deg, #09090d 0%, #06060a 100%);
        }

        .slh-grain {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-size: 256px 256px;
        }

        .slh-hero-mask {
          mask-image: radial-gradient(
            circle at center,
            black 30%,
            rgba(0,0,0,.92) 50%,
            rgba(0,0,0,.68) 70%,
            transparent 100%
          );
          -webkit-mask-image: radial-gradient(
            circle at center,
            black 30%,
            rgba(0,0,0,.92) 50%,
            rgba(0,0,0,.68) 70%,
            transparent 100%
          );
        }

        .slh-hero-img {
          will-change: transform;
          transform: scale(1.05);
        }

        .slh-hero-color-overlay {
          background:
            radial-gradient(circle at 30% 30%, rgba(255,56,182,.2), transparent 22%),
            radial-gradient(circle at 70% 45%, rgba(97,218,251,.16), transparent 24%),
            linear-gradient(180deg, rgba(0,0,0,.08), rgba(0,0,0,.6));
        }

        .slh-glass {
          background: rgba(255,255,255,.04);
          border: 1px solid rgba(255,255,255,.08);
          backdrop-filter: blur(30px) saturate(1.4);
          -webkit-backdrop-filter: blur(30px) saturate(1.4);
          box-shadow:
            0 10px 60px rgba(0,0,0,.45),
            inset 0 1px 0 rgba(255,255,255,.08);
        }

        .slh-root h1.slh-serif,
        .slh-root .slh-serif .slh-wind {
          font-family: 'Cormorant Garamond', serif !important;
          letter-spacing: -0.04em;
          text-shadow: none;
          -webkit-text-fill-color: initial;
          -webkit-text-stroke: 0;
        }

        .slh-copy {
          font-family: 'Inter Tight', sans-serif;
        }

        .slh-wind {
          display: inline-block;
          transform-origin: center bottom;
          animation: slhWind 8s ease-in-out infinite;
        }

        .slh-wind:nth-child(2n) { animation-delay: -2s; }
        .slh-wind:nth-child(3n) { animation-delay: -4.5s; }

        .slh-floating-label {
          padding: 12px 18px;
          border-radius: 999px;
          font-size: 11px;
          letter-spacing: .2em;
          text-transform: uppercase;
          color: rgba(255,255,255,.75);
          background: rgba(255,255,255,.04);
          backdrop-filter: blur(30px);
          border: 1px solid rgba(255,255,255,.08);
        }

        @keyframes slhWind {
          0%, 100% { transform: rotate(-0.8deg); }
          50% { transform: rotate(0.8deg); }
        }

        @media (max-width: 768px) {
          .slh-floating-label {
            display: none !important;
          }
        }
      `}</style>
    </>
  )
}
