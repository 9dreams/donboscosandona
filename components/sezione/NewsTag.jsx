import Image from 'next/image'

// Griglia di news del CMS (channels.donboscosandona.it) filtrate per tag:
// immagine, data, tag e titolo. Se non ci sono news non mostra nulla.
export default function NewsTag({ posts = [], etichetta, accento = '#5E1A63' }) {
  if (!Array.isArray(posts) || posts.length === 0) return null
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-[22px]">
      {posts.map((p) => {
        const data = p.pubblicazione
          ? new Date(p.pubblicazione).toLocaleDateString('it-IT', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })
          : null
        return (
          <a key={p.id} href={`/articoli/${p.id}`} className="flex flex-col gap-3.5 !text-[#2A2230] dark:!text-[#F4EFE6]">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-[#E9E0D2] dark:bg-white/5">
              {p.immagine && (
                <Image
                  src={p.immagine}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 380px, 100vw"
                  className="object-cover"
                />
              )}
            </div>
            <span className="text-[13px] font-bold uppercase tracking-[0.12em]" style={{ color: accento }}>
              {[data, etichetta].filter(Boolean).join(' · ')}
            </span>
            <span className="font-serif-display text-[28px] font-bold leading-[1.12]">{p.titolo}</span>
          </a>
        )
      })}
    </div>
  )
}
