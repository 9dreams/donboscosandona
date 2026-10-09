import { Icon } from '@iconify/react'
import { FooterSocialIcon } from '/components/FooterSocialIcons'

const LEGAL_SLUGS = ['privacy', 'whistleblowing', 'cookie', 'trasparenza']
const isLegal = (url = '') => LEGAL_SLUGS.some((s) => url.toLowerCase().includes(s))

// Etichetta di colonna: ocra, maiuscoletto spaziato, come gli eyebrow.
const label = 'text-xs font-bold uppercase tracking-[0.16em] text-ochre mb-5'
const link = 'text-white/70 no-underline hover:text-white! hover:underline underline-offset-4 transition-colors'

export default function Footer({
  color,
  title1,
  description1,
  socials = [],
  images = [],
  menu = [],
  copyright,
}) {
  const bgColor = color || '#0b1f3a'
  const mainLinks = menu.filter((l) => !isLegal(l.url))
  const legalLinks = menu.filter((l) => isLegal(l.url))
  const hasImages = images.length > 0

  return (
    <footer style={{ backgroundColor: bgColor }} className="text-white">
      <div className="max-w-[1280px] mx-auto px-5 md:px-12 pt-16 pb-10">
        <div className={`grid grid-cols-1 gap-12 ${hasImages ? 'md:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-3'}`}>

          {/* Col 1 — Marchio, descrizione e social */}
          <div className="flex flex-col gap-5">
            <p className="wordmark text-white text-4xl m-0">{title1}</p>

            {description1 && (
              <p className="font-serif text-base leading-relaxed text-white/70 m-0">{description1}</p>
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
                    aria-label={social.title}
                    className="grid w-10 h-10 place-items-center rounded-full bg-white/10 text-white! no-underline! transition-colors duration-200 hover:bg-ochre hover:text-ink!"
                  >
                    <FooterSocialIcon social={social} />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Col 2 — Navigazione */}
          {mainLinks.length > 0 && (
            <div>
              <h3 className={label}>Navigazione</h3>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-[15px]">
                {mainLinks.map((l) => (
                  <li key={l.title}>
                    <a href={l.url} className={link}>{l.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Col 3 — Settori (se ci sono le immagini) */}
          {hasImages && (
            <div>
              <h3 className={label}>I nostri settori</h3>
              <div className="grid grid-cols-3 gap-3">
                {images.map((image) => (
                  <div
                    key={image.imageUrl}
                    className="flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={image.imageUrl} alt="" className="w-full max-h-14 object-contain" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Col 3 (senza immagini) — Contatti */}
          {!hasImages && (
            <div>
              <h3 className={label}>Contatti</h3>
              <ul className="flex flex-col gap-4 text-[15px] text-white/70">
                <li className="flex items-start gap-3">
                  <Icon icon="ph:map-pin" className="mt-0.5 text-lg text-ochre shrink-0" />
                  <span>via XIII Martiri, 86<br />30027 San Donà di Piave (VE)</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon icon="ph:phone" className="text-lg text-ochre shrink-0" />
                  <a href="tel:0421338911" className={link}>0421 338911</a>
                </li>
                <li className="flex items-center gap-3">
                  <Icon icon="ph:globe" className="text-lg text-ochre shrink-0" />
                  <a href="https://www.donboscosandona.it" target="_blank" rel="noopener noreferrer" className={link}>
                    www.donboscosandona.it
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="mt-12 mb-6 border-t border-white/10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <div>{copyright}</div>
          {legalLinks.length > 0 && (
            <div className="flex flex-wrap gap-4 justify-center">
              {legalLinks.map((l) => (
                <a
                  key={l.title}
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 no-underline hover:text-white! hover:underline underline-offset-4 transition-colors"
                >
                  {l.title}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  )
}
