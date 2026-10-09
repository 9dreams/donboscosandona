// Tabella dentro una scheda bianca, con l'intestazione su fondo blu tenue.
// Le vecchie prop di sfondo (backgroundColor, backgroundImageUrl, blur, color)
// non si usano più. `flush` toglie i margini laterali, per una tabella dentro una sezione.
export default function MyTable(props) {
  return (
    <section
      id={props.id}
      className={
        props.flush
          ? 'my-8'
          : `${props.maxWidth === 'lg' || !props.maxWidth ? 'max-w-[1100px]' : ''} mx-auto px-4 md:px-8 my-10 md:my-14 scroll-mt-28`
      }
    >
      <div className="rounded-2xl bg-surface border border-line shadow-sm p-6 md:p-10">
        {props.title && (
          <h2 className="text-3xl font-bold tracking-tight text-brand leading-tight m-0">{props.title}</h2>
        )}
        {props.subtitle && (
          <p className="mt-2 font-serif text-xl leading-relaxed text-muted">{props.subtitle}</p>
        )}
        <div className={`overflow-x-auto rounded-xl border border-line ${props.title || props.subtitle ? 'mt-6' : ''}`}>
          <table className="min-w-[560px] w-full border-collapse text-[15px]">
            <thead>
              <tr className="bg-brand/8 dark:bg-brand/15">
                {props.rows[0].map((titolo, i) => (
                  <th key={i} className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-brand">
                    {titolo}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {props.rows.slice(1).map((row, i) => (
                <tr key={i} className="border-t border-line even:bg-page/60">
                  {row.map((content, j) => (
                    <td key={j} className={`px-4 py-3 ${j === 0 ? 'font-semibold text-fg' : 'text-muted'}`}>
                      {content}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
