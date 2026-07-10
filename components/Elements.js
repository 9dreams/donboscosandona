import ElementsCard from '/components/ElementsCard'

export default function Elements({ data, limit, defaultTag, aspectRatio, borderRadius, xs, sm, md }) {
  if (!data) return <div>Caricamento...</div>
  if (data && data.status === '404') return <div>Errore: il canale specificato per le News è inesistente.</div>

  data = data.filter((post) => !post.in_evidenza)
  data.splice(limit)

  const xsCols = xs ? Math.round(12 / xs) : 1
  const smCols = sm ? Math.round(12 / sm) : 2
  const mdCols = md ? Math.round(12 / md) : 3

  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-8 mt-20 mb-24">
      <div className={`grid grid-cols-${xsCols} sm:grid-cols-${smCols} md:grid-cols-${mdCols} gap-8`}>
        {data.map((post, i) => (
          <ElementsCard key={i} post={post} defaultTag={defaultTag} aspectRatio={aspectRatio} borderRadius={borderRadius} />
        ))}
      </div>
    </div>
  )
}

Elements.defaultProps = {
  limit: 6,
  defaultTag: '',
  xs: 12,
  sm: 6,
  md: 4,
}
