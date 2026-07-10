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

export default function ElementsCard({ post, aspectRatio, borderRadius }) {
  const href = (post.articolo && '/articoli/' + post.id) || post.link || post.allegato
  const isDisabled = !post.articolo && !post.link && !post.allegato

  const inner = (
    <>
      <div className="relative overflow-hidden" style={{ aspectRatio, borderRadius }}>
        <Image
          src={post.immagine}
          alt={post.titolo || ''}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      {(post.titolo || post.abstract) && (
        <div className="p-3">
          {post.titolo && <h2 className="text-xl font-semibold mb-1">{post.titolo}</h2>}
          {post.abstract && <p className="text-sm">{readMore(post.abstract, 40)}</p>}
        </div>
      )}
    </>
  )

  if (isDisabled) return <div>{inner}</div>

  return (
    <a href={href} className="block hover:opacity-90 transition-opacity">
      {inner}
    </a>
  )
}

ElementsCard.defaultProps = {
  aspectRatio: '3 / 2',
  borderRadius: '10px',
}
