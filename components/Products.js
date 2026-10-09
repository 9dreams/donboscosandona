import Image from 'next/image'

const XS_COLS = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
}

const MD_COLS = {
  1: 'md:grid-cols-1',
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-3',
  4: 'md:grid-cols-4',
  5: 'md:grid-cols-5',
  6: 'md:grid-cols-6',
}

// Griglia di schede con foto: le attività di laboratorio, i corsi, i documenti.
export default function Products({
  id,
  title,
  description,
  cardWidth,
  cardWidthXs,
  products,
  aspectRatio,
}) {
  const xsCols = cardWidthXs ? Math.round(12 / cardWidthXs) : 2
  const mdCols = cardWidth ? Math.round(12 / cardWidth) : 4

  return (
    <section id={id} className="max-w-[1200px] mx-auto px-4 md:px-8 my-12 md:my-16 scroll-mt-28">
      {(title || description) && (
        <div className="text-center mb-8">
          {title && <h2 className="text-3xl font-bold tracking-tight text-brand leading-tight m-0">{title}</h2>}
          {description && (
            <p className="mt-3 mx-auto max-w-[70ch] font-serif text-lg md:text-xl leading-relaxed text-muted">
              {description}
            </p>
          )}
        </div>
      )}
      <div
        className={`grid ${XS_COLS[xsCols] || 'grid-cols-2'} sm:grid-cols-3 ${MD_COLS[mdCols] || 'md:grid-cols-4'} gap-4 md:gap-6`}
      >
        {products.map((product, i) => {
          const Tag = product.url ? 'a' : 'div'
          return (
            <Tag
              key={i}
              href={product.url || undefined}
              className={`group flex flex-col overflow-hidden rounded-2xl bg-surface border border-line shadow-sm text-fg! no-underline! ${
                product.url ? 'transition-shadow hover:shadow-md' : ''
              }`}
            >
              <div className="relative w-full overflow-hidden" style={{ aspectRatio }}>
                <Image
                  src={product.immagineUrl}
                  alt={product.title || ''}
                  fill
                  className={`object-cover ${product.url ? 'transition-transform duration-500 group-hover:scale-105' : ''}`}
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
                {product.rif && (
                  <span
                    className="absolute bottom-2 right-2 rounded-md bg-ochre px-2 py-0.5 text-xs font-bold text-ink"
                    style={product.labelColor ? { backgroundColor: product.labelColor } : undefined}
                  >
                    {product.rif}
                  </span>
                )}
              </div>
              {(product.title || product.category || product.description) && (
                <div className="flex flex-1 flex-col gap-1 p-4">
                  {product.title && (
                    <h3 className="text-base font-bold leading-snug text-fg m-0">{product.title}</h3>
                  )}
                  {product.category && <p className="text-sm text-muted m-0">{product.category}</p>}
                  {product.description && (
                    <p className="text-sm leading-relaxed text-muted m-0">{product.description}</p>
                  )}
                </div>
              )}
            </Tag>
          )
        })}
      </div>
    </section>
  )
}

Products.defaultProps = {
  cardWidth: 3,
  cardWidthXs: 6,
  aspectRatio: '3 / 2',
}
