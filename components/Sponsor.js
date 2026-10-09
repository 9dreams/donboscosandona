const XS_COLS = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
}

const MD_COLS = {
  1: 'md:grid-cols-1',
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-3',
  4: 'md:grid-cols-4',
  5: 'md:grid-cols-5',
  6: 'md:grid-cols-6',
}

export default function Sponsor({ title, description, cardWidth, cardWidthXs, logos }) {
  const xsCols = cardWidthXs ? Math.round(12 / cardWidthXs) : 2
  const mdCols = cardWidth ? Math.round(12 / cardWidth) : 4

  return (
    <section className="max-w-[1200px] mx-auto px-4 md:px-8 my-12">
      {title && <h2 className="text-3xl font-bold tracking-tight text-brand text-center mb-3">{title}</h2>}
      {description && (
        <p className="text-center font-serif text-lg leading-relaxed text-muted mb-6 px-2">{description}</p>
      )}
      <div
        className={`grid ${XS_COLS[xsCols] || 'grid-cols-2'} sm:grid-cols-3 ${MD_COLS[mdCols] || 'md:grid-cols-4'} gap-4 items-center rounded-2xl bg-white border border-line shadow-sm p-4 md:p-6`}
      >
        {logos.map((logo, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={i}
            src={logo}
            alt=""
            className="block mx-auto px-2 sm:px-4 md:px-6 py-2 object-contain w-full max-h-20"
          />
        ))}
      </div>
    </section>
  )
}

Sponsor.defaultProps = {
  title: '',
  description: '',
  cardWidth: 3, // 12 / 3 = 4 colonne su schermi grandi
  cardWidthXs: 6, // 12 / 6 = 2 colonne su mobile
}
