import Head from 'next/head'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import { Layout, AvvisoCostruzione } from '/components'
import { compagnia, spettacoli, titoloCompleto } from '/data/resto'

const oro = '#F0C06B'

export default function Resto() {
  const [evidenza, ...altri] = spettacoli
  return (
    <Layout>
      <Head>
        <title>Il Resto d'Israele | Oratorio Don Bosco</title>
        <meta name="description" content="Il Resto d'Israele, la compagnia teatrale dell'Oratorio Don Bosco di San Donà di Piave." />
      </Head>

      <div className="bg-[#0D0C0A] pt-20 text-[#F4EFE6]">
        <AvvisoCostruzione>Pagina in costruzione — i testi e gli spettacoli qui sotto sono contenuti di prova</AvvisoCostruzione>

        {/* Hero */}
        <section className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-12 px-6 pb-[88px] pt-24">
          <div className="min-w-0 flex-[1_1_520px]">
            <p className="mb-[18px] text-[13px] font-bold uppercase tracking-[0.22em]" style={{ color: oro }}>
              La compagnia teatrale dell'Oratorio
            </p>
            <h1 className="font-serif-display m-0 text-[clamp(60px,9vw,128px)] font-semibold leading-[0.9] !text-white">
              Il Resto
              <br />
              <em className="font-serif-display font-medium" style={{ color: oro }}>d'Israele</em>
            </h1>
            <p className="mt-7 max-w-[560px] text-xl leading-relaxed text-[#F4EFE6]/80">{compagnia.presentazione}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#spettacoli" className="inline-flex items-center gap-2.5 rounded-full px-[22px] py-3.5 font-extrabold !text-[#1A1708]" style={{ backgroundColor: oro }}>
                Gli spettacoli <Icon icon="ph:arrow-down" className="text-lg" />
              </a>
              <a href="#compagnia" className="inline-flex items-center rounded-full border border-[#F4EFE6]/30 px-[22px] py-3.5 font-bold !text-[#F4EFE6] hover:bg-white/5">
                Chi siamo
              </a>
            </div>
          </div>
          <figure className="relative m-0 aspect-square min-w-0 max-w-[480px] flex-[1_1_380px] overflow-hidden rounded-md shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
            <Image src="/images/resto/locandina-compagnia.jpg" alt="Locandina della compagnia: un attore illuminato da un fascio di luce" fill priority sizes="(min-width: 1024px) 480px, 100vw" className="object-cover" />
          </figure>
        </section>

        {/* La compagnia */}
        <section id="compagnia" className="scroll-mt-24 border-y border-[#F4EFE6]/10 bg-[#17160F]">
          <div className="mx-auto flex max-w-[1200px] flex-wrap gap-14 px-6 py-[88px]">
            <div className="min-w-0 flex-[1_1_460px]">
              <h2 className="font-serif-display mb-5 text-[clamp(40px,5vw,56px)] font-semibold leading-[1.05] !text-white">Dietro il sipario</h2>
              {compagnia.chiSiamo.map((p, i) => (
                <p key={i} className="mb-4 text-lg leading-[1.7] text-[#F4EFE6]/80 last:mb-0">{p}</p>
              ))}
            </div>
            <dl className="m-0 grid min-w-0 flex-[1_1_380px] grid-cols-2 content-center gap-x-6 gap-y-7">
              {compagnia.numeri.map((n) => (
                <div key={n.etichetta} className="border-t border-[#F0C06B]/40 pt-3.5">
                  <dt className="text-[13px] font-bold uppercase tracking-[0.14em] text-[#F4EFE6]/60">{n.etichetta}</dt>
                  <dd className={n.piccolo ? 'm-0 mt-1.5 text-lg font-semibold leading-snug' : 'font-serif-display m-0 mt-1.5 text-5xl font-bold leading-none'} style={n.piccolo ? undefined : { color: oro }}>
                    {n.valore}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Gli spettacoli */}
        <section id="spettacoli" className="mx-auto max-w-[1200px] scroll-mt-24 px-6 pb-[72px] pt-24">
          <p className="mb-2.5 text-[13px] font-bold uppercase tracking-[0.18em]" style={{ color: oro }}>Gli spettacoli degli scorsi anni</p>
          <h2 className="font-serif-display mb-11 text-[clamp(40px,5vw,60px)] font-semibold leading-[1.05] !text-white">Sipario su…</h2>

          <a href={`/resto/${evidenza.slug}`} className="mb-7 flex flex-wrap overflow-hidden rounded-3xl border border-[#F4EFE6]/10 bg-[#17160F] !text-[#F4EFE6]">
            <div className="relative h-[280px] min-w-0 flex-[1_1_560px] md:h-[360px]">
              <Image src={evidenza.foto} alt={`Locandina di ${titoloCompleto(evidenza)}`} fill sizes="(min-width: 1024px) 700px, 100vw" className="object-cover" />
            </div>
            <div className="flex min-w-0 flex-[1_1_340px] flex-col justify-center gap-3 p-9">
              {evidenza.occasione && (
                <span className="self-start rounded-full px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.14em] text-[#1A1708]" style={{ backgroundColor: oro }}>
                  {evidenza.occasione}
                </span>
              )}
              <span className="font-serif-display text-[44px] font-bold leading-none text-white">{titoloCompleto(evidenza)}</span>
              <span className="text-[15px] text-[#F4EFE6]/70">{evidenza.data} · {evidenza.luogo}</span>
              <span className="text-base leading-relaxed text-[#F4EFE6]/85">
                <strong style={{ color: oro }}>Tema:</strong> {evidenza.tema}
              </span>
              <span className="mt-1.5 inline-flex items-center gap-2 font-bold" style={{ color: oro }}>
                Scheda dello spettacolo <Icon icon="ph:arrow-right" />
              </span>
            </div>
          </a>

          <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-x-6 gap-y-7">
            {altri.map((s) => (
              <a key={s.slug} href={`/resto/${s.slug}`} className="group flex flex-col !text-[#F4EFE6]">
                <span className="relative block aspect-video overflow-hidden rounded-[18px]">
                  <Image src={s.foto} alt={`Una scena di ${titoloCompleto(s)}`} fill sizes="(min-width: 1024px) 380px, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" style={{ objectPosition: s.posizione }} />
                  <span className="font-serif-display absolute left-3.5 top-3.5 rounded-[10px] bg-[#0D0C0A]/70 px-3 py-1.5 text-3xl font-bold leading-none text-white">{s.anno}</span>
                </span>
                <span className="font-serif-display mt-4 text-3xl font-bold leading-[1.1] text-white">{titoloCompleto(s)}</span>
                <span className="mt-1.5 text-sm text-[#F4EFE6]/65">{s.data} · {s.luogo}</span>
                <span className="mt-2 text-[15px] leading-normal text-[#F4EFE6]/85">
                  <strong style={{ color: oro }}>Tema:</strong> {s.tema}
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Entra nella compagnia */}
        <section className="mx-auto max-w-[1200px] px-6 pb-28 pt-6">
          <div className="flex flex-wrap items-center justify-between gap-6 rounded-[28px] bg-[#2F3208] px-10 py-14">
            <div className="max-w-[640px]">
              <h2 className="font-serif-display mb-2.5 text-[clamp(36px,4.5vw,52px)] font-semibold leading-[1.05] !text-white">Vuoi salire sul palco?</h2>
              <p className="m-0 text-lg leading-relaxed text-[#F4EFE6]/85">{compagnia.invito}</p>
            </div>
            <span className="inline-flex items-center gap-2.5 rounded-full px-6 py-4 font-extrabold text-[#1A1708]" style={{ backgroundColor: oro }}>
              Scrivici · {compagnia.email}
            </span>
          </div>
        </section>
      </div>
    </Layout>
  )
}
