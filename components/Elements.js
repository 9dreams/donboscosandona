import ElementsCard from '/components/ElementsCard'

const COLS = {
  xs: { 1: 'grid-cols-1', 2: 'grid-cols-2', 3: 'grid-cols-3' },
  sm: { 1: 'sm:grid-cols-1', 2: 'sm:grid-cols-2', 3: 'sm:grid-cols-3' },
  md: { 1: 'md:grid-cols-1', 2: 'md:grid-cols-2', 3: 'md:grid-cols-3', 4: 'md:grid-cols-4' },
}

export default function Elements({ data, limit, defaultTag, aspectRatio, xs, sm, md }) {
  if (!data) return <div className="text-center py-10 text-muted">Caricamento...</div>
  if (data && data.status === '404')
    return <div className="text-center py-10 text-muted">Errore: il canale specificato per le News è inesistente.</div>

  data = data.filter((post) => !post.in_evidenza)
  data.splice(limit)

  const xsCols = xs ? Math.round(12 / xs) : 1
  const smCols = sm ? Math.round(12 / sm) : 2
  const mdCols = md ? Math.round(12 / md) : 3

  return (
    <section className="max-w-[1200px] mx-auto px-4 md:px-8 my-16 md:my-20">
      <div className={`grid ${COLS.xs[xsCols] || 'grid-cols-1'} ${COLS.sm[smCols] || 'sm:grid-cols-2'} ${COLS.md[mdCols] || 'md:grid-cols-3'} gap-5 md:gap-6`}>
        {data.map((post, i) => (
          <ElementsCard key={i} post={post} defaultTag={defaultTag} aspectRatio={aspectRatio} />
        ))}
      </div>
    </section>
  )
}

Elements.defaultProps = {
  limit: 6,
  defaultTag: '',
  xs: 12,
  sm: 6,
  md: 4,
}
