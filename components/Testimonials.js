import { Icon } from '@iconify/react'

const LG_COLS = { 1: 'lg:grid-cols-1', 2: 'lg:grid-cols-2', 3: 'lg:grid-cols-3', 4: 'lg:grid-cols-4' }

// Le recensioni: schede bianche con la citazione in serif, su fascia blu notte.
const Testimonials = ({ testimonials, cardWidth, imageUrl }) => {
  const lgCols = cardWidth ? Math.round(12 / cardWidth) : 3

  return (
    <section className="relative bg-ink my-16 md:my-24 overflow-hidden">
      {imageUrl && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url(${imageUrl})` }}
          aria-hidden="true"
        />
      )}
      <div className="relative max-w-[1200px] mx-auto px-4 md:px-8 py-14 md:py-20">
        <span className="inline-block rounded-md bg-ochre px-2.5 py-1 text-[12px] font-bold uppercase tracking-widest text-ink">
          Dicono di noi
        </span>
        <h2 className="wordmark mt-4 mb-10 text-4xl md:text-5xl text-white">Le voci di allievi e famiglie</h2>
        <div className={`grid grid-cols-1 ${LG_COLS[lgCols] || 'lg:grid-cols-3'} gap-5`}>
          {testimonials.map((testimonial, index) => (
            <figure key={index} className="m-0 flex flex-col rounded-2xl bg-surface border border-line shadow-sm p-7">
              <Icon icon="ph:quotes-fill" className="text-4xl text-ochre mb-3" />
              <blockquote className="m-0 flex-1 font-serif text-lg leading-relaxed text-fg">{testimonial.text}</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={testimonial.imageUrl} alt="" className="size-12 rounded-full object-cover" />
                <span>
                  <strong className="block text-fg">{testimonial.name}</strong>
                  <span className="text-sm text-muted">{testimonial.social}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
