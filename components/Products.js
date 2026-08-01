import Image from 'next/image'

export default function Products({ title, description, cardWidth, cardWidthXs, products, borderRadius, aspectRatio }) {
  const xsCols = cardWidthXs ? Math.round(12 / cardWidthXs) : 2
  const mdCols = cardWidth ? Math.round(12 / cardWidth) : 4

  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-8">
      {title && (
        <h2 className="text-3xl font-bold text-center text-[#1976D2] dark:text-[#64B5F6] mb-4">{title}</h2>
      )}
      {description && (
        <p className="text-center text-gray-500 dark:text-gray-300 px-2 mb-6">{description}</p>
      )}
      <div className={`grid grid-cols-${xsCols} sm:grid-cols-3 md:grid-cols-${mdCols}`}>
        {products.map((product, i) => (
          <a
            key={i}
            href={product.url || undefined}
            className={`block text-[var(--fg)] no-underline ${product.url ? '' : 'pointer-events-none'}`}
          >
            <div className="flex flex-col">
              <div className="relative overflow-hidden" style={{ borderRadius, aspectRatio }}>
                <Image
                  src={product.immagineUrl}
                  alt={product.title || ''}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-3 relative text-[var(--fg)]">
                {product.title && (
                  <h4 className="text-center text-lg font-semibold mb-1 text-[var(--fg)]">
                    {product.title}
                  </h4>
                )}
                {product.category && (
                  <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                    {product.category}
                  </p>
                )}
                {product.description && (
                  <p className="text-sm p-2 text-gray-700 dark:text-gray-300">
                    {product.description}
                  </p>
                )}
                {product.rif && (
                  <div
                    className="text-right px-2 absolute bottom-0 right-0"
                    style={{ backgroundColor: product.labelColor }}
                  >
                    <p className="text-sm text-[var(--fg)]">{product.rif}</p>
                  </div>
                )}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

Products.defaultProps = {
  cardWidth: 3,
  cardWidthXs: 6,
  borderRadius: '10px',
  aspectRatio: '3 / 2',
}
