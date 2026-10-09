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

// Scheda bianca con foto, titolo e testo: i post del canale «elements» in home.
export default function ElementsCard({ post, aspectRatio }) {
  const href = (post.articolo && '/articoli/' + post.id) || post.link || post.allegato
  const isDisabled = !post.articolo && !post.link && !post.allegato

  const inner = (
    <>
      <div className="relative overflow-hidden" style={{ aspectRatio }}>
        <Image
          src={post.immagine}
          alt={post.titolo || ''}
          fill
          className={`object-cover ${isDisabled ? '' : 'transition-transform duration-500 group-hover:scale-105'}`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      {(post.titolo || post.abstract) && (
        <div className="flex flex-1 flex-col p-5">
          {post.titolo && <h3 className="text-xl font-bold tracking-tight text-fg mb-2 leading-snug">{post.titolo}</h3>}
          {post.abstract && (
            <p className="font-serif text-base leading-relaxed text-muted m-0">{readMore(post.abstract, 40)}</p>
          )}
          {!isDisabled && (
            <span className="mt-auto pt-4 text-sm font-bold text-brand group-hover:underline underline-offset-4">
              Scopri di più →
            </span>
          )}
        </div>
      )}
    </>
  )

  const card = 'group flex flex-col overflow-hidden rounded-2xl bg-surface border border-line shadow-sm text-fg! no-underline!'

  if (isDisabled) return <div className={card}>{inner}</div>

  return (
    <a href={href} className={`${card} transition-shadow hover:shadow-md`}>
      {inner}
    </a>
  )
}

ElementsCard.defaultProps = {
  aspectRatio: '3 / 2',
}
