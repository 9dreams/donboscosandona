import Image from 'next/image'
import { Icon } from '@iconify/react'
import { famiglie, gruppi } from '/data/gruppi'

// Sezione «Vivi l'oratorio» della home: banner grande della Storia e
// schede colorate dei gruppi, divise per famiglia (data/gruppi.js).
export default function GruppiOratorio() {
  return (
    <section className="bg-[#F7F9FB] px-6 pb-24 pt-[88px] dark:bg-[#0d0f14]">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-10 flex flex-wrap items-end gap-x-14 gap-y-5">
          <div className="min-w-0 flex-[1_1_420px]">
            <p className="mb-2.5 text-[13px] font-bold uppercase tracking-[0.18em] text-[#1976D2] dark:text-[#64B5F6]">
              Gruppi e attività
            </p>
            <h2 className="font-serif-display m-0 text-[clamp(44px,5.5vw,68px)] font-semibold leading-none !text-[#2A2230] dark:!text-[#F4EFE6]">
              Vivi l'oratorio
            </h2>
          </div>
          <p className="m-0 min-w-0 flex-[1_1_380px] text-lg leading-relaxed text-[#5A6070] dark:text-[#9da3af]">
            Dai lupetti alla banda, dal doposcuola alle missioni: ogni gruppo ha il suo colore e la sua storia.
          </p>
        </div>

        <a
          href="/storia"
          className="relative mb-11 flex min-h-[300px] items-end overflow-hidden rounded-[28px] bg-[#0E1220]"
        >
          <Image
            src="/images/storia/storia-oratoriani-davanti-alla-casa.jpg"
            alt=""
            fill
            sizes="(min-width: 1200px) 1200px, 100vw"
            className="object-cover opacity-50 grayscale"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(58,18,64,0.95)_0%,rgba(58,18,64,0.7)_45%,rgba(14,18,32,0.1)_100%)]" />
          <div className="relative flex w-full flex-wrap items-end justify-between gap-6 p-8 md:p-10">
            <div className="max-w-[560px]">
              <span className="mb-2.5 block text-[13px] font-bold uppercase tracking-[0.2em] text-[#F0C06B]">
                Dal 1928
              </span>
              <span className="font-serif-display mb-3 block text-[clamp(40px,5vw,60px)] font-semibold leading-none text-white">
                La nostra storia
              </span>
              <span className="block text-[17px] leading-relaxed text-white/85">
                Novant'anni di cortile, 23 direttori, i libri e le interviste «A tu per tu».
              </span>
            </div>
            <span className="inline-flex items-center gap-2.5 rounded-full bg-[#F0C06B] px-[22px] py-3.5 text-[15px] font-extrabold text-[#0E1220]">
              Scopri la storia <Icon icon="ph:arrow-right" className="text-lg" />
            </span>
          </div>
        </a>

        {famiglie.map((f) => (
          <div key={f.id} className="mb-9">
            <h3 className="font-ui mb-4 text-sm font-extrabold uppercase tracking-[0.16em] !text-[#5A6070] dark:!text-[#9da3af]">
              {f.titolo}
            </h3>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-4">
              {gruppi
                .filter((g) => g.famiglia === f.id)
                .map((g) => (
                  <a
                    key={g.slug}
                    href={g.url}
                    className="flex min-h-[104px] items-center gap-4 rounded-[20px] py-5 pl-[22px] pr-5 !text-white transition-transform hover:-translate-y-0.5"
                    style={{ backgroundColor: g.colore }}
                  >
                    <span className="flex h-14 w-14 flex-none items-center justify-center rounded-2xl bg-white/15">
                      <Icon icon={g.icona} className="text-[30px]" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[19px] font-extrabold uppercase leading-tight tracking-[0.04em]">
                        {g.nome}
                      </span>
                      <span className="mt-1 block text-sm leading-snug text-white/90">{g.sottotitolo}</span>
                    </span>
                    <Icon icon="ph:arrow-right" className="flex-none text-xl opacity-80" />
                  </a>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
