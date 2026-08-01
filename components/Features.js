const Features = ({ title, description, features, cardWidth }) => {
  const cols = cardWidth ? Math.round(12 / cardWidth) : 4

  return (
    <section className="max-w-[1200px] mx-auto text-center py-12 my-8 px-4">
      {title && <h1 className="text-4xl mb-5">{title}</h1>}
      {description && <p className="text-xl mb-12 text-gray-600 dark:text-gray-300">{description}</p>}
      <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-${Math.min(cols, 4)} gap-4`}>
        {features.map((feature) => (
          <a
            key={feature.id}
            href={feature.url || undefined}
            className={`block rounded-xl p-4 text-center text-[var(--fg)] no-underline transition-shadow hover:shadow-md ${feature.url ? 'cursor-pointer' : 'cursor-default'}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={feature.imageUrl} alt={feature.title} width="100" height="100" className="mx-auto mb-3" />
            <h2 className="text-lg font-semibold mb-1 text-[var(--fg)]">{feature.title}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">{feature.description}</p>
          </a>
        ))}
      </div>
    </section>
  )
}

Features.defaultProps = {
  title: 'Features',
  description: 'Questo è un paragrafo',
}

export default Features
