import { useEffect, useRef, Fragment } from 'react'
import Link from 'next/link'

export default function LandingHero(props) {
  const heroImgRef = useRef(null)

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

  const words = (props.title || '').split(/\s+/).filter(Boolean)

  return (
    <>
      <section className="slh-root relative min-h-screen overflow-hidden -mt-[72px]">
        <div className="slh-bg-gradient absolute inset-0 pointer-events-none -z-10" />
        <div className="slh-grain fixed inset-0 pointer-events-none opacity-[0.28] mix-blend-screen -z-10" />

        <div className="slh-hero-mask absolute inset-0">
          <picture>
            {props.imageMobileUrl && (
              <source media="(max-width: 767px)" srcSet={props.imageMobileUrl} />
            )}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              ref={heroImgRef}
              src={props.imageUrl}
              alt={props.title || ''}
              className={`slh-hero-img absolute inset-0 h-full w-full object-cover ${
                {
                  right: 'max-md:object-right',
                  left: 'max-md:object-left',
                  center: 'max-md:object-center',
                }[props.mobileObjectPosition] || ''
              } ${props.mobileObjectPosition?.includes('%') ? 'slh-hero-img--custom' : ''} brightness-[1.05] saturate-[1.3] contrast-[1.1]`}
              style={
                props.mobileObjectPosition?.includes('%')
                  ? { '--slh-object-pos': props.mobileObjectPosition }
                  : undefined
              }
            />
          </picture>
          <div className="slh-hero-color-overlay absolute inset-0" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-screen max-w-[1600px] items-center px-6 pb-12 pt-28 md:px-12 md:pt-32">
          <div className="max-w-3xl">
            {props.eyebrow && (
              <span className="inline-block rounded-md bg-ochre px-2.5 py-1 text-[13px] font-bold uppercase tracking-widest text-ink">
                {props.eyebrow}
              </span>
            )}
            <h1 className="slh-title mt-4 text-[clamp(3rem,7.5vw,6.5rem)] text-white">
              {words.map((word, i) => (
                <Fragment key={i}>
                  <span className="slh-wind">{word}</span>
                  {i < words.length - 1 ? ' ' : null}
                </Fragment>
              ))}
            </h1>

            {props.description && (
              <p className="slh-glass mt-8 max-w-2xl rounded-2xl border border-white/10 p-6 font-serif text-lg md:text-xl leading-relaxed text-white/90">
                {props.description}
              </p>
            )}

            <div className="mt-10 flex flex-wrap gap-4">
              {props.buttonUrl && props.buttonText && (
                <Link
                  href={props.buttonUrl}
                  className="inline-flex items-center gap-2 rounded-full bg-ochre px-7 py-3.5 font-bold text-ink! no-underline! hover:bg-ochre-strong transition-colors duration-300"
                >
                  {props.buttonText} <span aria-hidden="true">→</span>
                </Link>
              )}
            </div>
          </div>
        </div>

        {props.sponsorImage && (
          <div className="pointer-events-none absolute bottom-0 right-0 z-20 hidden w-1/3 md:block">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={props.sponsorImage}
              alt="Partner e sponsor"
              className="block h-auto w-full rounded-tl-[10px] object-contain object-right object-bottom"
            />
          </div>
        )}
      </section>

      {props.sponsorImage && (
        <div className="w-full md:hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={props.sponsorImage}
            alt="Partner e sponsor"
            className="block h-auto w-full rounded-tl-[10px]"
          />
        </div>
      )}

      <style jsx global>{`
        .slh-root {
          background: #0b1f3a;
          color: white;
        }

        .slh-bg-gradient {
          background: linear-gradient(180deg, #0b1f3a 0%, #071426 100%);
        }

        .slh-grain {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-size: 256px 256px;
        }

        .slh-hero-mask {
          mask-image: radial-gradient(circle at center, black 35%, rgba(0,0,0,.92) 55%, rgba(0,0,0,.7) 75%, transparent 100%);
          -webkit-mask-image: radial-gradient(circle at center, black 35%, rgba(0,0,0,.92) 55%, rgba(0,0,0,.7) 75%, transparent 100%);
        }

        .slh-hero-img {
          will-change: transform;
          transform: scale(1.05);
        }

        @media (max-width: 1023px) {
          .slh-hero-img--custom {
            object-position: var(--slh-object-pos);
            transform-origin: var(--slh-object-pos);
          }
        }

        /* Velatura blu notte: più scura a sinistra e in basso, dove sta il testo. */
        .slh-hero-color-overlay {
          background:
            linear-gradient(90deg, rgba(11,31,58,.72) 0%, rgba(11,31,58,.35) 45%, rgba(11,31,58,0) 75%),
            linear-gradient(180deg, rgba(11,31,58,.15), rgba(11,31,58,.7));
        }

        .slh-glass {
          background: rgba(11,31,58,.35);
          border: 1px solid rgba(255,255,255,.12);
          backdrop-filter: blur(24px) saturate(1.3);
          -webkit-backdrop-filter: blur(24px) saturate(1.3);
          box-shadow: 0 10px 50px rgba(0,0,0,.35);
        }

        .slh-root h1.slh-title,
        .slh-root .slh-title .slh-wind {
          font-family: var(--font-ui) !important;
          font-weight: 700;
          letter-spacing: -0.045em;
          line-height: 0.92;
          color: #fff;
        }

        .slh-wind {
          display: inline-block;
          transform-origin: center bottom;
          animation: slhWind 8s ease-in-out infinite;
        }

        .slh-wind:nth-child(2n) { animation-delay: -2s; }
        .slh-wind:nth-child(3n) { animation-delay: -4.5s; }

        @keyframes slhWind {
          0%, 100% { transform: rotate(-0.6deg); }
          50% { transform: rotate(0.6deg); }
        }
      `}</style>
    </>
  )
}

LandingHero.defaultProps = {
  height: 80,
  opacity: 0.3,
  sponsorImage: '/images/home/loghi_sponsor_new.png',
}
