const BASIS = { 2: 'md:basis-[calc(50%-0.625rem)]', 3: 'md:basis-[calc(33.333%-0.834rem)]', 4: 'md:basis-[calc(25%-0.9375rem)]' }

// Griglia di schede con illustrazione, titolo e testo: i punti di forza.
const Features = ({ title, description, features, cardWidth }) => {
  const cols = cardWidth ? Math.round(12 / cardWidth) : 4

  return (
    <section className="max-w-[1200px] mx-auto px-4 md:px-8 my-16 md:my-20">
      {(title || description) && (
        <div className="text-center mb-10">
          {title && <h2 className="title-display text-4xl md:text-5xl m-0">{title}</h2>}
          {description && (
            <p className="mt-3 mx-auto max-w-[62ch] font-serif text-xl leading-relaxed text-muted">{description}</p>
          )}
        </div>
      )}
      {/* Flex e non grid: l'ultima riga, se incompleta, resta centrata. */}
      <div className="flex flex-wrap justify-center gap-5">
        {features.map((feature, i) => {
          const Tag = feature.url ? 'a' : 'div'
          return (
            <Tag
              key={feature.id || i}
              href={feature.url || undefined}
              {...(/^https?:\/\//i.test(feature.url || '') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className={`group flex basis-full sm:basis-[calc(50%-0.625rem)] ${BASIS[Math.min(cols, 4)] || BASIS[4]} flex-col items-center rounded-2xl bg-surface border border-line shadow-sm p-6 text-center text-fg! no-underline! ${
                feature.url ? 'transition-shadow hover:shadow-md' : ''
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={feature.imageUrl} alt="" width="96" height="96" className="mb-4 size-24 object-contain" />
              <h3 className="text-lg font-bold text-brand mb-2">{feature.title}</h3>
              <p className="font-serif text-base leading-relaxed text-muted m-0">{feature.description}</p>
              {feature.url && (
                <span className="mt-auto pt-4 text-sm font-bold text-brand group-hover:underline underline-offset-4">
                  Scopri di più →
                </span>
              )}
            </Tag>
          )
        })}
      </div>
    </section>
  )
}

Features.defaultProps = {
  title: 'Features',
  description: 'Questo è un paragrafo',
}

export default Features
