import { Eyebrow } from './ui'

// Una sezione di testo disteso dentro una scheda bianca: titolo blu, eventuale
// sottotitolo (corto → etichetta ocra, lungo → riga serif) e corpo in serif.
// Le vecchie prop di sfondo (backgroundColor, blur, color, opacity) non si
// usano più: tutte le sezioni hanno la stessa scheda.
export default function Paragraph(props) {
  const shortSubtitle = typeof props.subtitle === 'string' && props.subtitle.length <= 34

  return (
    <section
      id={props.id}
      className={`${props.maxWidth === 'lg' ? 'max-w-[1100px]' : ''} mx-auto px-4 md:px-8 my-10 md:my-14 scroll-mt-28`}
    >
      <div className="rounded-2xl bg-surface border border-line shadow-sm p-6 md:p-10">
        {props.topImageUrl && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={props.topImageUrl} alt="" className="w-full mb-10 rounded-xl" />
        )}
        {shortSubtitle && <Eyebrow className="mb-3">{props.subtitle}</Eyebrow>}
        {props.title && (
          <h2 className="text-3xl font-bold tracking-tight text-brand leading-tight m-0">{props.title}</h2>
        )}
        {props.subtitle && !shortSubtitle && (
          <p className="mt-3 font-serif text-xl leading-relaxed text-muted max-w-[62ch]">{props.subtitle}</p>
        )}
        <div
          className={`prose-site ${props.title || props.subtitle ? 'mt-6' : ''}`}
          style={{
            columnCount: props.columnCount > 1 ? props.columnCount : undefined,
            columnGap: props.columnCount > 1 ? '3rem' : undefined,
          }}
        >
          {props.avatarImageUrl && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={props.avatarImageUrl} alt="" className="float-left mr-5 mb-2 w-32 rounded-full!" />
          )}
          {props.leftImageUrl && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={props.leftImageUrl} alt="" className="md:float-left md:mr-6 mb-4 w-full md:w-80" />
          )}
          {props.rightImageUrl && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={props.rightImageUrl} alt="" className="md:float-right md:ml-6 mb-4 w-full md:w-80" />
          )}
          {props.children}
          <div className="clear-both" />
        </div>
      </div>
    </section>
  )
}

Paragraph.defaultProps = {
  columnCount: 1,
  maxWidth: 'lg',
}
