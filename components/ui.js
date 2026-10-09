// I mattoni grafici comuni a tutte le pagine, nati dalla pagina /ipad e dal
// modulo degli eventi di servizi.donboscosandona.it: schede bianche
// arrotondate, titoli di sezione con icona, passi numerati, riquadri di
// avviso, pulsanti pieni, etichette ocra.
import { Icon } from '@iconify/react'

const WIDTHS = {
  sm: 'max-w-[800px]',
  md: 'max-w-[1000px]',
  lg: 'max-w-[1100px]',
  xl: 'max-w-[1200px]',
}

const cx = (...c) => c.filter(Boolean).join(' ')

// Il contenitore di una sezione: larghezza, margini e ancora.
export function Section({ id, width = 'md', className, children }) {
  return (
    <section
      id={id}
      className={cx(WIDTHS[width] || width, 'mx-auto px-4 md:px-8 mb-16 md:mb-20 scroll-mt-28', className)}
    >
      {children}
    </section>
  )
}

// L'etichetta ocra sopra un titolo: «Per le famiglie», «Qualifica triennale».
export function Eyebrow({ children, className }) {
  return (
    <span
      className={cx(
        'inline-block rounded-md bg-ochre px-2.5 py-1 text-[12px] font-bold uppercase tracking-widest text-ink',
        className
      )}
    >
      {children}
    </span>
  )
}

// Titolo di sezione: icona blu e h2 blu, come le sezioni della pagina iPad.
export function SectionTitle({ icon, eyebrow, subtitle, center, as: Tag = 'h2', className, children }) {
  return (
    <div className={cx('mb-6', center && 'text-center', className)}>
      {eyebrow && <Eyebrow className="mb-3">{eyebrow}</Eyebrow>}
      <div className={cx('flex items-center gap-3', center && 'justify-center')}>
        {icon && <Icon icon={icon} className="text-3xl text-brand shrink-0" />}
        <Tag className="text-3xl font-bold tracking-tight text-brand m-0 leading-tight">{children}</Tag>
      </div>
      {subtitle && (
        <p className={cx('mt-3 font-serif text-xl leading-relaxed text-muted', center && 'mx-auto', 'max-w-[62ch]')}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

// Introduzione centrata sotto la testata: titolo grande e testo serif.
export function Intro({ title, eyebrow, children, className }) {
  return (
    <div className={cx('max-w-[880px] mx-auto px-4 md:px-8 mt-16 mb-16 text-center', className)}>
      {eyebrow && <Eyebrow className="mb-4">{eyebrow}</Eyebrow>}
      {title && <h1 className="title-display text-4xl md:text-5xl mb-6">{title}</h1>}
      <div className="font-serif text-xl leading-relaxed text-muted [&_p+p]:mt-4 [&_strong]:text-fg">{children}</div>
    </div>
  )
}

// Paragrafo introduttivo serif, da usare dentro una sezione.
export function Lead({ className, children }) {
  return <p className={cx('font-serif text-xl leading-relaxed mb-6 [&_strong]:font-semibold', className)}>{children}</p>
}

// La scheda bianca. `highlight` la borda di blu, `badge` le mette l'etichetta «Consigliato».
export function Card({ highlight, badge, href, className, children, ...rest }) {
  const classes = cx(
    'relative block rounded-2xl bg-surface shadow-sm',
    highlight ? 'border-2 border-brand' : 'border border-line',
    href && 'no-underline! text-fg! transition-shadow hover:shadow-md',
    className ?? 'p-6'
  )
  const content = (
    <>
      {badge && (
        <span className="absolute -top-3 left-6 bg-brand text-white dark:text-[#0d0f14] text-xs font-bold px-3 py-1 rounded-full">
          {badge}
        </span>
      )}
      {children}
    </>
  )
  if (href) {
    const external = /^https?:\/\//i.test(href)
    return (
      <a href={href} className={classes} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...rest}>
        {content}
      </a>
    )
  }
  return (
    <div className={classes} {...rest}>
      {content}
    </div>
  )
}

// Scheda con icona, titolo, sottotitolo e testo: le schede dei modelli iPad.
export function FeatureCard({ icon, title, meta, highlight, badge, href, children }) {
  return (
    <Card highlight={highlight} badge={badge} href={href}>
      {icon && <Icon icon={icon} className="text-3xl text-brand mb-3" />}
      {title && <h3 className="font-bold text-lg mb-1 text-fg">{title}</h3>}
      {meta && <p className="text-sm text-muted mb-2">{meta}</p>}
      {children && <div className="text-sm leading-relaxed text-muted">{children}</div>}
    </Card>
  )
}

// Passi numerati nei cerchi blu: `items` è un elenco di nodi.
export function Steps({ items, className }) {
  return (
    <ol className={cx('space-y-4', className ?? 'mb-8')}>
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand text-white dark:text-[#0d0f14] text-sm font-bold">
            {i + 1}
          </span>
          <span className="pt-0.5">{item}</span>
        </li>
      ))}
    </ol>
  )
}

// Elenco con un'icona blu per voce: `items` è un elenco di { icon, children }.
export function IconList({ items, className }) {
  return (
    <ul className={cx('space-y-4', className)}>
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <Icon icon={item.icon || 'ph:check-circle'} className="text-2xl text-brand shrink-0" />
          <span>{item.children}</span>
        </li>
      ))}
    </ul>
  )
}

const TONES = {
  warning: {
    box: 'border-amber-400 bg-amber-50 dark:bg-amber-950/30',
    icon: 'text-amber-500',
    text: 'text-amber-900 dark:text-amber-200',
    defaultIcon: 'ph:warning-circle',
  },
  info: {
    box: 'border-sky-400 bg-sky-50 dark:bg-sky-950/20',
    icon: 'text-sky-500',
    text: 'text-sky-900 dark:text-sky-200',
    defaultIcon: 'ph:info',
  },
  danger: {
    box: 'border-red-400 bg-red-50 dark:bg-red-950/20',
    icon: 'text-red-500',
    text: 'text-red-900 dark:text-red-200',
    defaultIcon: 'ph:warning-octagon',
  },
  brand: {
    box: 'border-brand bg-brand/5 dark:bg-brand/10',
    icon: 'text-brand',
    text: 'text-fg',
    defaultIcon: 'ph:lightbulb',
  },
}

// Riquadro di avviso con filetto a sinistra: giallo, azzurro, rosso o blu.
export function Callout({ tone = 'warning', icon, title, className, children }) {
  const t = TONES[tone] || TONES.warning
  return (
    <div className={cx('flex gap-4 items-start rounded-2xl border-l-4 p-5', t.box, className ?? 'mb-8')}>
      <Icon icon={icon || t.defaultIcon} className={cx('text-2xl shrink-0 mt-0.5', t.icon)} />
      <div className={cx('text-sm md:text-base leading-relaxed [&_p+p]:mt-3', t.text)}>
        {title && <h3 className={cx('font-bold text-base mb-1', t.text)}>{title}</h3>}
        {children}
      </div>
    </div>
  )
}

const BUTTONS = {
  primary: 'bg-brand hover:bg-brand-strong text-white! dark:text-[#0d0f14]!',
  accent: 'bg-ochre hover:bg-ochre-strong text-ink!',
  outline: 'border border-brand/40 text-brand! hover:bg-brand/5 dark:hover:bg-brand/10',
  light: 'border border-white/40 text-white! hover:bg-white/10',
}

// Pulsante-collegamento. I link esterni si aprono in una nuova scheda.
export function Button({ href, variant = 'primary', icon = 'ph:arrow-right', iconLeft, className, children, ...rest }) {
  const external = /^https?:\/\//i.test(href || '')
  return (
    <a
      href={href}
      className={cx(
        'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold no-underline! transition-colors',
        BUTTONS[variant],
        className
      )}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...rest}
    >
      {iconLeft && <Icon icon={iconLeft} className="text-xl" />}
      {children}
      {icon && !iconLeft && <Icon icon={icon} />}
    </a>
  )
}

// La barra delle ancore sotto la testata (sotto, non a cavallo: in basso
// alla foto c'è la striscia dei loghi dei finanziatori).
export function QuickNav({ links }) {
  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-8 mt-8 relative z-10">
      <nav
        aria-label="In questa pagina"
        className="flex flex-wrap gap-3 justify-center bg-surface rounded-2xl shadow-sm border border-line p-4"
      >
        {links.map((a) => (
          <a
            key={a.href}
            href={a.href}
            className="text-sm font-semibold px-4 py-2 rounded-full border border-brand/30 text-brand no-underline! hover:bg-brand hover:text-white! dark:hover:text-[#0d0f14]! transition-colors"
          >
            {a.label}
          </a>
        ))}
      </nav>
    </div>
  )
}

// Il riquadro finale «Hai bisogno di altre informazioni?».
export function HelpBox({ title = 'Hai bisogno di altre informazioni?', icon = 'ph:question', children }) {
  return (
    <Section width="sm" className="text-center">
      <Card className="p-8 md:p-10">
        <Icon icon={icon} className="text-4xl text-brand mb-3 mx-auto" />
        <h2 className="text-2xl font-bold text-brand mb-3">{title}</h2>
        <div className="font-serif text-lg leading-relaxed text-muted">{children}</div>
      </Card>
    </Section>
  )
}

// Contatto con icona: telefono, email, indirizzo.
export function ContactLine({ icon, href, children }) {
  return (
    <p className="m-0 flex items-center gap-2">
      <Icon icon={icon} className="text-lg text-brand shrink-0" />
      {href ? <a href={href}>{children}</a> : <span>{children}</span>}
    </p>
  )
}
