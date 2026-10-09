import Date from '/components/Date'

// Scheda di un articolo markdown locale (cartella /articoli).
export default function Post({ post }) {
  return (
    <div className="w-full md:w-1/2 px-2 mb-4">
      <a
        href={'/articoli/' + post.id}
        className="group flex h-full overflow-hidden rounded-2xl border border-line bg-surface shadow-sm text-fg! no-underline! transition-shadow hover:shadow-md"
      >
        <div className="flex-1 p-5">
          <div className="mb-2 text-xs font-bold uppercase tracking-wider text-muted">
            <Date dateString={post.date} />
          </div>
          <h2 className="mb-2 text-xl font-bold leading-snug tracking-tight text-fg group-hover:text-brand transition-colors">
            {post.title}
          </h2>
          <p className="mb-3 font-serif text-[17px] leading-relaxed text-muted">{post.abstract}</p>
          <span className="text-sm font-bold text-brand">Continua a leggere →</span>
        </div>
        {post.imageUrl && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={post.imageUrl} alt="" className="hidden sm:block w-48 object-cover" />
        )}
      </a>
    </div>
  )
}
