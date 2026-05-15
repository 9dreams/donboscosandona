import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Icon } from '@iconify/react'

export default function NavBar({
  menu = [],
  siteName = '',
  logoUrl = '',
}) {
  const router = useRouter()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const isActive = (url) => {
    if (!url || /^https?:\/\//i.test(url)) return false
    const path = url.split('?')[0]
    if (path === '/') return router.pathname === '/'
    return router.pathname === path || router.pathname.startsWith(path + '/')
  }

  const isExternal = (url) => /^https?:\/\//i.test(url)

  return (
    <>
      {/* ── HEADER BAR ─────────────────────────────────────────────── */}
      <header
        className={`nb-header fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled ? 'nb-header--scrolled' : ''
        }`}
      >
        <div className="mx-auto flex h-[68px] max-w-[1600px] items-center justify-between gap-4 px-5 md:px-10">

          {/* Logo */}
          <Link href="/" className="nb-logo shrink-0 flex items-center gap-3" onClick={() => setMobileOpen(false)}>
            {logoUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={logoUrl}
                alt={siteName || 'Home'}
                className="h-11 w-auto object-contain drop-shadow-md"
              />
            ) : (
              <span className="nb-brand text-base font-bold uppercase tracking-[0.18em] text-white">
                {siteName}
              </span>
            )}
          </Link>

          {/* Desktop links */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Navigazione principale">
            {menu.map((item) => (
              <Link
                key={item.title}
                href={item.url}
                target={isExternal(item.url) ? '_blank' : undefined}
                rel={isExternal(item.url) ? 'noopener noreferrer' : undefined}
                className={`nb-link ${isActive(item.url) ? 'nb-link--active' : ''}`}
              >
                {item.title}
                {isExternal(item.url) && (
                  <Icon icon="ph:arrow-up-right" className="ml-1 inline-block text-[10px] opacity-60" />
                )}
              </Link>
            ))}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            {/* Mobile hamburger */}
            <button
              type="button"
              className="nb-icon-btn nb-menu-btn"
              aria-label={mobileOpen ? 'Chiudi menu' : 'Apri menu'}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((o) => !o)}
            >
              <Icon icon={mobileOpen ? 'ph:x' : 'ph:list'} className="text-xl" />
            </button>
          </div>
        </div>

        {/* ── MOBILE MEGA-DRAWER ────────────────────────────────────── */}
        <div
          className={`nb-drawer lg:hidden ${mobileOpen ? 'nb-drawer--open' : ''}`}
          aria-hidden={!mobileOpen}
        >
          <button
            type="button"
            className="nb-drawer-close"
            aria-label="Chiudi menu"
            onClick={() => setMobileOpen(false)}
          >
            <Icon icon="ph:x" className="text-xl" />
          </button>

          {/* Oratorio info strip */}
          <div className="nb-drawer-top px-6 pt-6 pb-4 border-b border-white/8">
            <div className="flex items-center gap-4">
              {logoUrl && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={logoUrl} alt="" className="h-12 w-auto object-contain" />
              )}
              <div>
                <p className="text-sm font-bold text-white leading-tight">{siteName}</p>
                <p className="text-[11px] text-white/50 uppercase tracking-[0.2em] mt-0.5">San Donà di Piave</p>
              </div>
            </div>
          </div>

          {/* Nav links */}
          <nav className="nb-drawer-nav px-4 py-5" aria-label="Navigazione mobile">
            <ul className="space-y-2">
              {menu.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.url}
                    target={isExternal(item.url) ? '_blank' : undefined}
                    rel={isExternal(item.url) ? 'noopener noreferrer' : undefined}
                    onClick={() => setMobileOpen(false)}
                    className={`nb-mobile-link ${isActive(item.url) ? 'nb-mobile-link--active' : ''}`}
                  >
                    <span>{item.title}</span>
                    {isExternal(item.url)
                      ? <Icon icon="ph:arrow-up-right" className="text-sm opacity-50" />
                      : <Icon icon="ph:caret-right" className="text-sm opacity-40" />
                    }
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer strip */}
          <div className="px-6 py-5 border-t border-white/8">
            <p className="text-[11px] text-white/40 uppercase tracking-[0.25em]">
              Comunità Salesiana · Don Bosco
            </p>
          </div>
        </div>
      </header>

      {/* Mobile backdrop */}
      <div
        className={`fixed inset-0 z-[99] bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      <style jsx global>{`
        .nb-header {
          font-family: 'Inter Tight', sans-serif;
          background: rgba(8, 10, 15, 0.3);
          border-bottom: 1px solid rgba(255, 255, 255, 0.07);
          backdrop-filter: blur(20px) saturate(1.4);
          -webkit-backdrop-filter: blur(20px) saturate(1.4);
        }

        .nb-header--scrolled {
          background: rgba(8, 10, 15, 0.88);
          border-bottom-color: rgba(255, 255, 255, 0.1);
          box-shadow: 0 4px 32px rgba(0, 0, 0, 0.3);
        }

        /* Desktop links */
        .nb-link {
          position: relative;
          display: inline-flex;
          align-items: center;
          padding: 0.45rem 0.85rem;
          font-size: 0.68rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: rgba(255, 255, 255, 0.72);
          text-decoration: none;
          border-radius: 999px;
          transition: color 0.25s, background 0.25s;
          white-space: nowrap;
        }

        .nb-link:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.07);
        }

        .nb-link--active {
          color: #f0c06b;
          background: rgba(240, 192, 107, 0.1);
        }

        .nb-link--active::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #f0c06b;
        }

        /* Icon buttons */
        .nb-icon-btn {
          display: grid;
          place-items: center;
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.05);
          color: rgba(255, 255, 255, 0.8);
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
        }

        .nb-icon-btn:hover {
          background: rgba(255, 255, 255, 0.12);
          color: #fff;
        }

        .nb-menu-btn {
          display: none;
        }

        @media (max-width: 1023px) {
          .nb-menu-btn {
            display: grid;
          }
        }

        /* Mobile drawer */
        .nb-drawer {
          position: fixed;
          inset: 0;
          z-index: 100;
          width: 100vw;
          height: 100dvh;
          display: flex;
          flex-direction: column;
          background: rgba(8, 10, 16, 0.97);
          backdrop-filter: blur(32px) saturate(1.5);
          -webkit-backdrop-filter: blur(32px) saturate(1.5);
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px);
          pointer-events: none;
          transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease;
        }

        .nb-drawer--open {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
          pointer-events: auto;
        }

        .nb-drawer-close {
          position: absolute;
          top: 1.15rem;
          right: 1.15rem;
          z-index: 2;
          display: grid;
          place-items: center;
          width: 2.75rem;
          height: 2.75rem;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.08);
          color: #fff;
          cursor: pointer;
        }

        .nb-drawer-nav {
          flex: 1;
          overflow: visible;
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-height: 0;
        }

        /* Mobile nav links */
        .nb-mobile-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.1rem;
          border-radius: 1.1rem;
          font-size: clamp(1.05rem, 5vw, 1.55rem);
          font-weight: 500;
          letter-spacing: 0.01em;
          color: rgba(255, 255, 255, 0.82);
          text-decoration: none;
          transition: background 0.2s, color 0.2s;
        }

        .nb-mobile-link:hover {
          background: rgba(255, 255, 255, 0.06);
          color: #fff;
        }

        .nb-mobile-link--active {
          background: rgba(240, 192, 107, 0.1);
          color: #f0c06b;
        }
      `}</style>
    </>
  )
}
