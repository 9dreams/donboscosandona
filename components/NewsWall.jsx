import React from 'react'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import Image from 'next/image'

const getTagList = (tagString) =>
  tagString
    ? tagString
        .split(',')
        .map((tag) => tag.trim())
        .filter(Boolean)
    : []

// Le etichette dei tag sulla foto: la prima ocra, la seconda blu.
const renderTag = (tagString, defaultTag = '') => {
  if (!tagString) return null
  const hiddenTags = getTagList(defaultTag).map((tag) => tag.toLowerCase())
  const tags = getTagList(tagString)
    .filter((tag) => !hiddenTags.includes(tag.toLowerCase()))
    .slice(0, 2) // Show max 2 tags

  if (tags.length === 0) return null

  return (
    <div className="flex gap-2 absolute top-4 left-4 z-10">
      {tags.map((t, i) => (
        <span
          key={t}
          className={`rounded-md px-2.5 py-1 text-[11px] font-bold uppercase tracking-widest shadow-sm ${
            i % 2 === 0 ? 'bg-ochre text-ink' : 'bg-brand text-white dark:text-[#0d0f14]'
          }`}
        >
          {t}
        </span>
      ))}
    </div>
  )
}

const getPostHref = (post) =>
  (post.articolo && `/articoli/${post.id}`) || post.link || post.allegato || ''

const getPostActionLabel = (post) => {
  if (post.articolo) return 'Continua a leggere'
  if (!post.articolo && post.allegato) return "Scarica l'allegato"
  return ''
}

const CardLink = ({ post, className, children }) => {
  const href = getPostHref(post)
  const classes = `${className} text-fg! no-underline!`

  if (!href) {
    return <div className={classes}>{children}</div>
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  )
}

const ActionLabel = ({ post }) => {
  const label = getPostActionLabel(post)

  if (!label) return null

  return (
    <div className="mt-4 flex items-center gap-1 text-sm font-bold text-brand group-hover:underline underline-offset-4">
      {label} <Icon icon="ph:arrow-right" />
    </div>
  )
}

const cardBase =
  'col-span-1 rounded-2xl bg-surface border border-line shadow-sm overflow-hidden group hover:shadow-md transition-shadow duration-300'

// Scheda con la foto a tutto campo e il testo sopra, su velatura blu notte.
const OverlayCard = ({ post, defaultTag, className }) => (
  <CardLink
    post={post}
    className={`${cardBase} ${className} relative min-h-[360px] flex flex-col justify-end p-6 pt-24 md:p-8 md:pt-28`}
  >
    <Image
      src={post.immagine_mobile || post.immagine}
      alt={post.titolo}
      fill
      className="object-cover transition-transform duration-700 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f3a]/95 via-[#0b1f3a]/55 to-transparent" />
    {renderTag(post.tag, defaultTag)}
    <div className="relative z-10 text-white mt-auto">
      <p className="text-xs font-bold uppercase tracking-widest text-white/70 mb-2">{post.pubblicazione}</p>
      <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-3 text-white leading-tight">{post.titolo}</h3>
      {post.abstract && (
        <p className="font-serif text-base md:text-lg leading-relaxed text-white/85 mb-5">{post.abstract}</p>
      )}
      {getPostActionLabel(post) && (
        <span className="inline-flex items-center gap-2 rounded-full bg-ochre px-5 py-2.5 text-sm font-bold text-ink transition-colors group-hover:bg-ochre-strong">
          {getPostActionLabel(post)} <Icon icon="ph:arrow-right" />
        </span>
      )}
    </div>
  </CardLink>
)

// Scheda bianca: foto in alto (o a sinistra se `wide`), testo sotto.
const PlainCard = ({ post, defaultTag, wide }) => (
  <CardLink
    post={post}
    className={`${cardBase} flex flex-col ${wide ? 'md:col-span-2 md:flex-row' : ''}`}
  >
    <div className={`relative w-full h-48 ${wide ? 'md:w-1/2 md:h-auto min-h-[200px]' : ''}`}>
      <Image
        src={post.immagine}
        alt={post.titolo}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      {renderTag(post.tag, defaultTag)}
    </div>
    <div className={`p-5 flex flex-col flex-grow justify-between ${wide ? 'md:w-1/2 md:p-6' : ''}`}>
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-muted mb-2">{post.pubblicazione}</p>
        <h3 className={`${wide ? 'text-xl' : 'text-lg'} font-bold tracking-tight text-fg mb-2 leading-snug`}>
          {post.titolo}
        </h3>
        {post.abstract && <p className="font-serif text-[15px] leading-relaxed text-muted m-0">{post.abstract}</p>}
      </div>
      <ActionLabel post={post} />
    </div>
  </CardLink>
)

export default function NewsWall({
  title = 'Le notizie',
  subtitle = 'Scopri i nostri traguardi, gli eventi e le innovazioni più recenti.',
  data,
  limit = 7,
  defaultTag = '',
  eyebrow = 'News',
}) {
  if (!data) return <div className="text-center py-10 text-muted">Caricamento...</div>
  if (data && data.status === '404')
    return <div className="text-center py-10 text-muted">Errore: il canale specificato per le News è inesistente.</div>

  const allPosts = Array.isArray(data) ? data : []
  const firstFeaturedIndex = allPosts.findIndex((post) => post.in_evidenza)
  const news = (
    firstFeaturedIndex === -1
      ? allPosts
      : allPosts.filter((_, index) => index !== firstFeaturedIndex)
  ).slice(0, limit)

  return (
    <section className="max-w-[1200px] mx-auto px-4 md:px-8 my-16">
      <div className="mb-8">
        {eyebrow && (
          <span className="inline-block rounded-md bg-ochre px-2.5 py-1 text-[12px] font-bold uppercase tracking-widest text-ink mb-3">
            {eyebrow}
          </span>
        )}
        <h2 className="title-display text-4xl md:text-5xl m-0">{title}</h2>
        {subtitle && (
          <p className="mt-3 max-w-[62ch] font-serif text-xl leading-relaxed text-muted">{subtitle}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1: grande, con la foto a tutto campo */}
        {news[0] && (
          <OverlayCard post={news[0]} defaultTag={defaultTag} className="md:col-span-2 lg:row-span-2" />
        )}
        {news[1] && <PlainCard post={news[1]} defaultTag={defaultTag} />}
        {news[2] && <PlainCard post={news[2]} defaultTag={defaultTag} />}
        {/* Card 4: larga, con la foto a tutto campo */}
        {news[3] && <OverlayCard post={news[3]} defaultTag={defaultTag} className="md:col-span-2" />}
        {news[4] && <PlainCard post={news[4]} defaultTag={defaultTag} />}
        {news[5] && <PlainCard post={news[5]} defaultTag={defaultTag} />}
        {/* Card 7: larga, foto a sinistra */}
        {news[6] && <PlainCard post={news[6]} defaultTag={defaultTag} wide />}
      </div>

      <div className="mt-12 flex justify-center">
        <Link
          href="/news"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-brand text-white! dark:text-[#0d0f14]! font-bold no-underline! hover:bg-brand-strong transition-colors"
        >
          Vedi tutte le notizie <Icon icon="ph:arrow-right" />
        </Link>
      </div>
    </section>
  )
}
