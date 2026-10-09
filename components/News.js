import NewsCard from '/components/NewsCard'

// Griglia di schede notizia (usata da privacy e trasparenza per i documenti).
export default function News({ title, data, limit, defaultTag, aspectRatio }) {
  if (!data) return <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-10 text-muted">Caricamento...</div>
  if (data && data.status === '404') {
    return (
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-10 text-muted">
        Errore: il canale specificato per le News è inesistente.
      </div>
    )
  }

  data = data.filter((post) => !post.in_evidenza)
  data.splice(limit)

  return (
    <section className="max-w-[1200px] mx-auto px-4 md:px-8 my-12 md:my-16">
      {title && (
        <h2 className="text-3xl font-bold tracking-tight text-brand leading-tight mb-8">{title}</h2>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.map((post, i) => (
          <NewsCard key={i} post={post} defaultTag={defaultTag} aspectRatio={aspectRatio} />
        ))}
      </div>
    </section>
  )
}

News.defaultProps = {
  title: 'News',
  limit: 6,
  defaultTag: '',
}
