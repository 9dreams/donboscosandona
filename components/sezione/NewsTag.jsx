import { useState } from 'react'
import Image from 'next/image'

// Griglia di news del CMS (channels.donboscosandona.it) filtrate per tag:
// immagine, data, tag e titolo. Mostra le prime `iniziali` e un pulsante
// per vedere le altre. Se non ci sono news non mostra nulla.
export default function NewsTag({ posts = [], etichetta, accento = '#5E1A63', iniziali = 9 }) {
  const [tutte, setTutte] = useState(false)
  if (!Array.isArray(posts) || posts.length === 0) return null
  const visibili = tutte ? posts : posts.slice(0, iniziali)

  return (
    <>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-[22px]">
        {visibili.map((p) => (
          <a key={p.id} href={`/articoli/${p.id}`} className="group flex flex-col gap-3.5 !text-[#2A2230] dark:!text-[#F4EFE6]">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-[#E9E0D2] dark:bg-white/5">
              {p.immagine && (
                <Image
                  src={p.immagine}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 380px, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              )}
            </div>
            {/* `pubblicazione` arriva già formattata dal CMS («venerdì 23 settembre 2022») */}
            <span className="text-[13px] font-bold uppercase tracking-[0.12em]" style={{ color: accento }}>
              {[p.pubblicazione, etichetta].filter(Boolean).join(' · ')}
            </span>
            <span className="font-serif-display text-[28px] font-bold leading-[1.12]">{p.titolo}</span>
          </a>
        ))}
      </div>
      {!tutte && posts.length > iniziali && (
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => setTutte(true)}
            className="min-h-11 cursor-pointer rounded-full border-[1.5px] bg-transparent px-[22px] py-3.5 text-[15px] font-bold"
            style={{ borderColor: accento, color: accento }}
          >
            Mostra tutti ({posts.length})
          </button>
        </div>
      )}
    </>
  )
}
