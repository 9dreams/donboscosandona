import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Icon } from '@iconify/react'

import styles from './NavBar.module.css'

function NavLink({ item, active, onNavigate }) {
  const isExternal = /^https?:\/\//i.test(item.url)
  const className = `nb-link text-[11px] uppercase tracking-[0.2em] transition-colors duration-300 ${
    active ? 'text-cyan-300' : 'text-white/75 hover:text-white'
  }`

  if (isExternal) {
    return (
      <a
        href={item.url}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onNavigate}
      >
        {item.title}
      </a>
    )
  }

  return (
    <Link href={item.url} className={className} onClick={onNavigate}>
      {item.title}
    </Link>
  )
}

export default function NavBar({
  menu = [],
  siteName = '',
  logoUrl = '',
  bgcolor,
  drawerBgcolor,
  drawerTextColor,
  color,
  elevation,
  textShadow,
}) {
  const router = useRouter()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const closeMobile = () => setMobileOpen(false)

  const isActive = (url) => {
    if (!url || /^https?:\/\//i.test(url)) return false
    const path = url.split('?')[0]
    if (path === '/') return router.pathname === '/'
    return router.pathname === path || router.pathname.startsWith(path + '/')
  }

  const barStyle =
    bgcolor && bgcolor !== 'transparent'
      ? { backgroundColor: bgcolor }
      : undefined

  return (
    <>
      <header
        className={`nb-root fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled ? 'nb-root--scrolled' : ''
        }`}
        style={barStyle}
      >
        <nav
          className="mx-auto flex h-[72px] max-w-[1600px] items-center justify-between gap-4 px-5 md:px-10"
          aria-label="Navigazione principale"
        >
          {/* Logo */}
          <Link href="/" className="nb-logo shrink-0" onClick={closeMobile}>
            {logoUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={logoUrl}
                alt={siteName || 'Home'}
                className={styles.logo}
              />
            ) : (
              <span
                className="nb-site-name text-lg uppercase tracking-[0.15em] text-white"
                style={{ color: color || undefined, textShadow: textShadow || undefined }}
              >
                {siteName}
              </span>
            )}
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1 xl:gap-2">
            {menu.map((item) => (
              <li key={item.title}>
                <NavLink item={item} active={isActive(item.url)} />
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button
            type="button"
            className="nb-glass lg:hidden grid h-11 w-11 place-items-center rounded-full border border-white/10 text-white"
            aria-label={mobileOpen ? 'Chiudi menu' : 'Apri menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
          >
            <Icon
              icon={mobileOpen ? 'ph:x' : 'ph:list'}
              className="text-xl"
            />
          </button>
        </nav>
      </header>

      {/* Mobile overlay */}
      <div
        aria-hidden={!mobileOpen}
        className={`fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMobile}
      />

      {/* Mobile drawer */}
      <aside
        className={`fixed top-0 right-0 z-[95] flex h-full w-[min(100vw,320px)] flex-col border-l border-white/10 transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] lg:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          backgroundColor: drawerBgcolor || 'rgba(9, 9, 13, 0.97)',
          color: drawerTextColor || '#fff',
        }}
        aria-hidden={!mobileOpen}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          {logoUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={logoUrl} alt="" className="h-12 w-auto object-contain" />
          ) : (
            <span className="text-sm uppercase tracking-[0.2em]">{siteName}</span>
          )}
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10"
            aria-label="Chiudi menu"
            onClick={closeMobile}
          >
            <Icon icon="ph:x" className="text-lg" />
          </button>
        </div>

        <ul className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-6">
          {menu.map((item) => (
            <li key={item.title}>
              <NavLink
                item={item}
                active={isActive(item.url)}
                onNavigate={closeMobile}
              />
            </li>
          ))}
        </ul>
      </aside>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700&display=swap');

        .nb-root {
          font-family: 'Inter Tight', sans-serif;
          background: rgba(6, 6, 10, 0.35);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(24px) saturate(1.3);
          -webkit-backdrop-filter: blur(24px) saturate(1.3);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.15);
        }

        .nb-root--scrolled {
          background: rgba(6, 6, 10, 0.82);
          border-bottom-color: rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 40px rgba(0, 0, 0, 0.35);
        }

        .nb-glass {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }

        .nb-link {
          display: block;
          padding: 0.65rem 0.85rem;
          font-family: 'Inter Tight', sans-serif !important;
        }

        @media (min-width: 1024px) {
          .nb-link {
            padding: 0.5rem 0.75rem;
          }
        }

        aside .nb-link {
          padding: 0.9rem 1rem;
          border-radius: 0.75rem;
          font-size: 0.8rem;
        }

        aside .nb-link:hover {
          background: rgba(255, 255, 255, 0.06);
        }

        aside .text-cyan-300 {
          background: rgba(97, 218, 251, 0.08);
        }

        .nb-site-name {
          font-family: 'Inter Tight', sans-serif !important;
        }
      `}</style>
    </>
  )
}

NavBar.defaultProps = {
  siteName: '',
  menu: [],
  logoUrl: '',
  bgcolor: 'transparent',
  drawerBgcolor: '#09090d',
  drawerTextColor: '#fff',
  color: '#fff',
  elevation: 0,
  textShadow: '',
}
