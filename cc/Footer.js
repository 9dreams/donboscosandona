import { FooterSocialIcon } from '/components/FooterSocialIcons'

const bodyStyle = { fontFamily: '"Plus Jakarta Sans", "Exo 2", sans-serif' }
const titleStyle = {
  fontFamily: '"Inter Tight", sans-serif',
  fontWeight: 600,
  letterSpacing: '0.04em',
}

const LEGAL_SLUGS = ['privacy', 'whistleblowing', 'cookie', 'trasparenza']
const isLegal = (url = '') => LEGAL_SLUGS.some((s) => url.toLowerCase().includes(s))

export default function Footer({
  color,
  title1,
  description1,
  socials = [],
  images = [],
  menu = [],
  copyright,
}) {
  const bgColor = color || '#272727'
  const mainLinks = menu.filter((l) => !isLegal(l.url))
  const legalLinks = menu.filter((l) => isLegal(l.url))
  const hasImages = images.length > 0

  return (
    <footer style={{ backgroundColor: bgColor, ...bodyStyle }}>
      {/* ── Main body ── */}
      <div className="max-w-[1280px] mx-auto px-5 md:px-12 pt-16 pb-10">
        <div className={`grid grid-cols-1 gap-12 ${hasImages ? 'md:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-3'}`}>

          {/* Col 1 — Brand + description + socials */}
          <div className="flex flex-col gap-5">
            <p
              className="text-white text-3xl uppercase leading-none"
              style={titleStyle}
            >
              {title1}
            </p>

            {description1 && (
              <p className="text-sm leading-6" style={{ color: '#9ca3af' }}>
                {description1}
              </p>
            )}

            {socials.length > 0 && (
              <div className="flex flex-wrap gap-3 mt-1">
                {socials.map((social) => (
                  <a
                    key={social.url || social.title}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.title}
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
                    style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#1976D2' }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)' }}
                  >
                    <FooterSocialIcon social={social} />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Col 2 — Navigation */}
          {mainLinks.length > 0 && (
            <div>
              <h3 className="text-white text-xl mb-6 uppercase" style={titleStyle}>
                Navigazione
              </h3>
              <ul className="flex flex-col gap-3">
                {mainLinks.map((link) => (
                  <li key={link.title}>
                    <a
                      href={link.url}
                      className="text-sm transition-colors duration-200"
                      style={{ color: '#9ca3af' }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = '#FF9800' }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = '#9ca3af' }}
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Col 3 — Sector images (only if provided) */}
          {hasImages && (
            <div>
              <h3 className="text-white text-xl mb-6 uppercase" style={titleStyle}>
                I Nostri Settori
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {images.map((image) => (
                  <div
                    key={image.imageUrl}
                    className="rounded-lg overflow-hidden flex items-center justify-center p-2"
                    style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={image.imageUrl}
                      alt=""
                      style={{ width: '100%', objectFit: 'contain', maxHeight: '56px' }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Col 3 (fallback when no images) — Contatti */}
          {!hasImages && (
            <div>
              <h3 className="text-white text-xl mb-6 uppercase" style={titleStyle}>
                Contatti
              </h3>
              <ul className="flex flex-col gap-4 text-sm" style={{ color: '#9ca3af' }}>
                <li className="flex items-start gap-3">
                  <svg className="mt-0.5 flex-shrink-0" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#1976D2" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>via XIII Martiri, 86<br />30027 San Donà di Piave (VE)</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="flex-shrink-0" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#1976D2" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a
                    href="tel:0421338911"
                    style={{ color: '#9ca3af' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#FF9800' }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = '#9ca3af' }}
                  >
                    0421 338911
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="flex-shrink-0" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#1976D2" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  <a
                    href="https://www.donboscosandona.it"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#9ca3af' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#FF9800' }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = '#9ca3af' }}
                  >
                    www.donboscosandona.it
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* ── Divider ── */}
        <div
          className="mt-12 mb-6 border-t"
          style={{ borderColor: 'rgba(255,255,255,0.08)' }}
        />

        {/* ── Bottom bar ── */}
        <div
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs"
          style={{ color: '#6b7280' }}
        >
          <div>{copyright}</div>
          {legalLinks.length > 0 && (
            <div className="flex flex-wrap gap-4 justify-center">
              {legalLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-200"
                  style={{ color: '#6b7280' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#fff' }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#6b7280' }}
                >
                  {link.title}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  )
}
