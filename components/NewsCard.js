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
    <div className="block min-h-[33rem] mb-8 bg-white dark:bg-[#181b23] border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden hover:shadow-lg transition-shadow text-[var(--fg)]">
      <div className="relative overflow-hidden" style={{ aspectRatio }}>
        <Image
          src={post.immagine}
          alt={post.titolo || ''}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        {tags.length > 0 ? (
          <div className="flex gap-2 mb-2 flex-wrap">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-bold px-3 py-1 rounded-full bg-[#1976D2] text-white uppercase"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : (
          <div className="h-8" />
        )}
        <h2 className="text-xl font-semibold mb-1 text-[var(--fg)]">{post.titolo}</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{post.pubblicazione}</p>
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
          {readMore(post.abstract, 40)}
        </p>
        {post.articolo && (
          <span className="text-sm text-[#1976D2] dark:text-[#64B5F6] font-medium">
            Continua a leggere...
          </span>
        )}
        {!post.articolo && post.allegato && (
          <span className="text-sm text-[#1976D2] dark:text-[#64B5F6] font-medium">
            Scarica l&apos;allegato
          </span>
        )}
      </div>
    </div>
  )

  if (isDisabled) return card

  return (
    <a href={href} className="block text-[var(--fg)] no-underline hover:opacity-[0.98]">
      {card}
    </a>
  )
}

NewsCard.defaultProps = {
  aspectRatio: '3 / 2',
}
