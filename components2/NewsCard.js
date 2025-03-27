import Image from 'next/image'

function readMore(string, maxWords) {
  if (string) {
    const strippedString = string.trim()
    const words = strippedString.split(' ')
    const wordCount = words.length
    let shortString = words.slice(0, maxWords).join(' ')
    if (wordCount > maxWords) {
      shortString += '...'
    }
    return shortString
  }
  return ''
}

export default function NewsCard({ post, aspectRatio = '3 / 2', defaultTag }) {
  // Costruiamo il link (se presente)
  const href = (post.articolo && `/articoli/${post.id}`) || post.link || post.allegato
  // Se non c’è nessun link o allegato, disabilitiamo l’interazione
  const isDisabled = !post.articolo && !post.link && !post.allegato

  return (
    <a
      href={href}
      style={{
        display: 'block',
        maxWidth: '24rem',
        margin: '0 auto',
        backgroundColor: 'white',
        boxShadow: '0px 0px 12px 8px rgba(242,228,242,1)',
        overflow: 'hidden',
        marginBottom: '0.5rem',
        pointerEvents: isDisabled ? 'none' : 'auto',
        opacity: isDisabled ? 0.5 : 1,
        transition: 'box-shadow 0.3s ease',
        marginLeft: '30px',
      }}
      className={isDisabled ? '' : ''}
    >
      {/* Contenitore dell'immagine con aspectRatio personalizzabile */}
      <div
        style={{
          position: 'relative',
          aspectRatio: aspectRatio,
        }}
      >
        <Image
          src={post.immagine}
          alt={post.titolo}
          layout="fill"
          style={{
            padding: '2rem',
          }}
        />
      </div>

      {/* Contenuto della card */}
      <div
        style={{
          textAlign: 'center',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        
        {/* Data di pubblicazione (stile centrato con barre verticali) */}
        {post.pubblicazione && (
          <p style={{ color: '#a6a6a6', marginTop: '-10px', marginBottom: '5px', fontSize: '12px', }}>
            | {post.pubblicazione} |
          </p>
        )}

        {/* Titolo */}
        <h2 style={{ margin: '0 0 1rem 0', fontSize: '1.5rem', marginTop:'-5px' }}>{post.titolo}</h2>

        {/* Abstract con tronca testo */}
        <p style={{ color: '#4b5563', marginBottom: '1rem', marginTop:'-10px'}}>{readMore(post.abstract, 5)}</p>

        {/* Link di approfondimento o download */}
        {post.articolo && (
          <p style={{ color: '#1e40af', fontWeight: '500', marginTop:'-5px' }}>Continua a leggere...</p>
        )}
        {!post.articolo && post.allegato && (
          <p style={{ color: '#1e40af', fontWeight: '500' }}>Scarica l'allegato</p>
        )}
        <br></br>
      </div>
      
    </a>
  )
}
