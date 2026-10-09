// Banner di un articolo in evidenza: foto con velatura blu notte e testo bianco.
export default function PostInEvidenza({ post }) {
  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-8">
      <div
        className="relative mb-8 overflow-hidden rounded-2xl bg-ink bg-cover bg-center bg-no-repeat text-white shadow-sm"
        style={{ backgroundImage: `url(${post.immagine})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/55 to-ink/10" />
        <div className="relative z-10 max-w-xl p-6 md:p-12">
          <span className="inline-block rounded-md bg-ochre px-2.5 py-1 text-[12px] font-bold uppercase tracking-widest text-ink">
            In evidenza
          </span>
          <h1 className="wordmark mt-4 mb-4 text-4xl text-white">{post.titolo}</h1>
          <p className="mb-5 font-serif text-lg leading-relaxed text-white/90">{post.descrizione}</p>
          {post.testoLink && (
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-ochre px-6 py-3 font-bold text-ink! no-underline! hover:bg-ochre-strong transition-colors"
            >
              {post.testoLink} <span aria-hidden="true">→</span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
