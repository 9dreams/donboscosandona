const MD_COLS = { 2: 'md:grid-cols-2', 3: 'md:grid-cols-3', 4: 'md:grid-cols-4' }

// Le certificazioni: loghi su schede bianche, con la dicitura sotto.
export default function Certifications({ certifications, cardWidth }) {
  const mdCols = cardWidth ? Math.round(12 / cardWidth) : 3

  return (
    <section className="max-w-[1200px] mx-auto px-4 md:px-8 my-16">
      <div className="text-center mb-8">
        <span className="inline-block rounded-md bg-ochre px-2.5 py-1 text-[12px] font-bold uppercase tracking-widest text-ink">
          Qualità
        </span>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand m-0">Certificazioni e accreditamenti</h2>
      </div>
      <div className={`grid grid-cols-1 sm:grid-cols-2 ${MD_COLS[mdCols] || 'md:grid-cols-4'} gap-5`}>
        {certifications.map((certification, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-4 rounded-2xl bg-surface border border-line shadow-sm p-6 text-center"
          >
            <div className="flex h-28 w-full items-center justify-center rounded-xl bg-white p-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={certification.logoUrl} alt="" className="max-h-full max-w-full object-contain" />
            </div>
            <p className="m-0 text-sm leading-relaxed text-muted">
              <strong className="block text-fg">{certification.text1}</strong>
              {certification.text2}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

Certifications.defaultProps = {
  cardWidth: 4,
}
