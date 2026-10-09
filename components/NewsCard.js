import Image from 'next/image'

function readMore(string, maxWords) {
  if (string) {
    const array = string.trim().split(' ')
    const wordCount = array.length
    let result = array.splice(0, maxWords).join(' ')
    if (wordCount > maxWords) result += '...'
    return result
  }
  return string
}

export default function NewsCard({ post, aspectRatio, defaultTag }) {
  const href = (post.articolo && '/articoli/' + post.id) || post.link || post.allegato
  const isDisabled = !post.articolo && !post.link && !post.allegato

  const tags = post.tag && post.tag !== defaultTag
    ? post.tag.split(',').map((t) => t.trim()).filter(Boolean)
    : []

  const card = (
    <div className="group flex h-full min-h-[30rem] flex-col overflow-hidden rounded-2xl bg-surface border border-line shadow-sm transition-shadow hover:shadow-md text-fg">
      <div className="relative overflow-hidden" style={{ aspectRatio }}>
        <Image
          src={post.immagine}
          alt={post.titolo || ''}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {tags.length > 0 && (
          <div className="absolute top-3 left-3 flex flex-wrap gap-2">
            {tags.slice(0, 2).map((tag, i) => (
              <span
                key={tag}
                className={`rounded-md px-2.5 py-1 text-[11px] font-bold uppercase tracking-widest ${
                  i === 0 ? 'bg-ochre text-ink' : 'bg-brand text-white dark:text-[#0d0f14]'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        {post.pubblicazione && (
          <p className="text-xs font-bold uppercase tracking-widest text-muted mb-2">{post.pubblicazione}</p>
        )}
        <h3 className="text-xl font-bold tracking-tight leading-snug text-fg mb-2">{post.titolo}</h3>
        <p className="font-serif text-base leading-relaxed text-muted mb-3">{readMore(post.abstract, 40)}</p>
        {post.articolo && (
          <span className="mt-auto text-sm font-bold text-brand group-hover:underline underline-offset-4">
            Continua a leggere →
          </span>
        )}
        {!post.articolo && post.allegato && (
          <span className="mt-auto text-sm font-bold text-brand group-hover:underline underline-offset-4">
            Scarica l&apos;allegato →
          </span>
        )}
      </div>
    </div>
  )

  if (isDisabled) return card

  return (
    <a href={href} className="block h-full text-fg! no-underline!">
      {card}
    </a>
  )
}

NewsCard.defaultProps = {
  aspectRatio: '3 / 2',
}
