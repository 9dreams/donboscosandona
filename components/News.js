import NewsCard from '/components/NewsCard'

export default function News({ title, data, limit, defaultTag, aspectRatio }) {
  if (!data) return <div>Caricamento...</div>
  if (data && data.status === '404') return <div>Errore: il canale specificato per le News è inesistente.</div>

  data = data.filter((post) => !post.in_evidenza)
  data.splice(limit)

  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-8 mt-20 mb-24">
      {title && <h2 className="text-3xl font-bold text-left pb-8">{title}</h2>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {data.map((post, i) => (
          <NewsCard key={i} post={post} defaultTag={defaultTag} aspectRatio={aspectRatio} />
        ))}
      </div>
    </div>
  )
}

News.defaultProps = {
  title: 'News',
  limit: 6,
  defaultTag: '',
}
