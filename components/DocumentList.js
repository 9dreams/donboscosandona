import { Icon } from '@iconify/react'

// I documenti del CMS (canale donboscosandona_docs) come elenco di schede:
// icona, titolo, data e il pulsante per aprire o scaricare. Al posto della
// griglia di NewsCard, dove l'immagine era sempre la stessa icona di download.
export default function DocumentList({ data, limit }) {
  if (!Array.isArray(data)) return null
  const documenti = data.filter((post) => !post.in_evidenza).slice(0, limit)

  return (
    <ul className="grid gap-4 sm:grid-cols-2 m-0 p-0 list-none">
      {documenti.map((post) => {
        const href = (post.articolo && '/articoli/' + post.id) || post.allegato || post.link
        const pdf = !post.articolo && post.allegato
        return (
          <li key={post.id} className="flex gap-4 items-start rounded-2xl bg-surface border border-line shadow-sm p-5">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand">
              <Icon icon={pdf ? 'ph:file-pdf' : 'ph:file-text'} className="text-2xl" />
            </span>
            <div className="min-w-0 flex-1">
              <h3 className="text-base font-bold leading-snug text-fg m-0">{post.titolo}</h3>
              {post.abstract && <p className="mt-1 text-sm text-muted leading-relaxed">{post.abstract}</p>}
              {href && (
                <a
                  href={href}
                  target={post.articolo ? undefined : '_blank'}
                  rel={post.articolo ? undefined : 'noopener noreferrer'}
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold"
                >
                  {pdf ? 'Scarica il PDF' : 'Apri'}
                  <Icon icon={pdf ? 'ph:download-simple' : 'ph:arrow-right'} />
                </a>
              )}
            </div>
          </li>
        )
      })}
    </ul>
  )
}

DocumentList.defaultProps = {
  limit: 30,
}
