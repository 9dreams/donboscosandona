import Head from 'next/head'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import { Layout, AvvisoCostruzione } from '/components'
import { spettacoli, titoloCompleto } from '/data/resto'

const oro = '#F0C06B'

export default function Spettacolo({ slug }) {
  const indice = spettacoli.findIndex((s) => s.slug === slug)
  const s = spettacoli[indice]
  const precedente = spettacoli[indice + 1] // più vecchio
  const successivo = spettacoli[indice - 1] // più recente

  return (
    <Layout>
      <Head>
        <title>{`${titoloCompleto(s)} | Il Resto d'Israele`}</title>
        <meta name="description" content={`${titoloCompleto(s)}, spettacolo del Resto d'Israele, la compagnia teatrale dell'Oratorio Don Bosco.`} />
      </Head>

      <div className="bg-[#0D0C0A] text-[#F4EFE6]">
        {/* Hero */}
        <section className="relative flex min-h-[640px] items-end overflow-hidden">
          <Image src={s.foto} alt="" fill priority sizes="100vw" className="object-cover opacity-55" style={{ objectPosition: s.posizione }} />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,12,10,0.1)_0%,rgba(13,12,10,0.95)_92%)]" />
          <div className="relative mx-auto w-full max-w-[1200px] px-6 pb-16 pt-32">
            <a href="/resto" className="inline-flex min-h-11 items-center gap-2 text-[15px] font-semibold !text-[#F4EFE6]/85 hover:!text-white">
              <Icon icon="ph:arrow-left" /> Il Resto d'Israele · tutti gli spettacoli
            </a>
            {s.occasione && (
              <p className="mb-3 mt-[18px] text-[13px] font-bold uppercase tracking-[0.22em]" style={{ color: oro }}>
                {s.occasione} {s.anno}
              </p>
            )}
            <h1 className="font-serif-display m-0 mt-4 max-w-[980px] text-[clamp(52px,8vw,104px)] font-semibold leading-[0.95] !text-white">
              {s.titolo}
              {s.titoloAccento && (
                <>
                  <br />
                  <em className="font-serif-display font-medium" style={{ color: oro }}>{s.titoloAccento}</em>
                </>
              )}
            </h1>
            <dl className="m-0 mt-8 flex flex-wrap gap-x-11 gap-y-4">
              {[
                ['Data', s.data],
                ['Dove', s.luogo],
                ['Tema', s.tema],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="text-xs font-bold uppercase tracking-[0.14em] text-[#F4EFE6]/60">{k}</dt>
                  <dd className="m-0 mt-1 text-lg font-semibold">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <AvvisoCostruzione>Pagina in costruzione — scheda di esempio con contenuti di prova</AvvisoCostruzione>

        {/* Descrizione + locandina */}
        <section className="mx-auto flex max-w-[1200px] flex-wrap gap-16 px-6 py-20">
          <article className="min-w-0 flex-[1_1_560px]">
            <h2 className="font-serif-display mb-6 text-[44px] font-semibold leading-[1.05] !text-white">Lo spettacolo</h2>
            <p className="font-serif-display mb-5 text-[26px] italic leading-snug" style={{ color: oro }}>{s.frase}</p>
            {s.descrizione.map((p, i) => (
              <p key={i} className="mb-[18px] text-lg leading-[1.75] text-[#F4EFE6]/85">{p}</p>
            ))}
            <div className="mt-10 grid grid-cols-3 gap-2.5">
              {s.galleria.map((f, i) => (
                <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-xl">
                  <Image src={f} alt="" fill sizes="(min-width: 1024px) 220px, 33vw" className="object-cover" />
                </div>
              ))}
            </div>
          </article>

          {/* La locandina, come un programma di sala */}
          <aside className="min-w-0 flex-[1_1_380px] self-start rounded-md bg-[#F4EFE6] px-9 py-10 text-[#1A1708] shadow-[0_30px_70px_rgba(0,0,0,0.5)]">
            <p className="m-0 text-center text-xs font-extrabold uppercase tracking-[0.3em] text-[#6B5B2E]">Il Resto d'Israele presenta</p>
            <h2 className="font-serif-display mb-1 mt-2.5 text-center text-[34px] font-bold leading-[1.05] !text-[#1A1708]">{titoloCompleto(s)}</h2>
            <p className="font-serif-display mb-7 text-center text-lg italic text-[#6B5B2E]">{[s.occasione, s.anno].filter(Boolean).join(' ')}</p>

            <h3 className="font-ui mb-3 border-b border-[#CDBF9F] pb-2 text-xs font-extrabold uppercase tracking-[0.22em] !text-[#6B5B2E]">Personaggi e interpreti</h3>
            <ul className="m-0 mb-7 list-none p-0">
              {s.cast.map((c, i) => (
                <li key={i} className="flex items-baseline gap-2 py-1.5 text-[15px] text-[#1A1708]">
                  <span className="font-serif-display text-lg italic">{c.ruolo}</span>
                  <span className="flex-1 -translate-y-1 border-b border-dotted border-[#B5A67F]" />
                  <span className="font-bold">{c.nome}</span>
                </li>
              ))}
            </ul>

            <h3 className="font-ui mb-3 border-b border-[#CDBF9F] pb-2 text-xs font-extrabold uppercase tracking-[0.22em] !text-[#6B5B2E]">Dietro le quinte</h3>
            <dl className="m-0 grid grid-cols-2 gap-x-5 gap-y-3.5">
              {s.staff.map((t) => (
                <div key={t.ruolo}>
                  <dt className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#6B5B2E]">{t.ruolo}</dt>
                  <dd className="m-0 mt-0.5 text-[15px] font-semibold leading-snug">{t.nomi}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </section>

        {/* Altri spettacoli */}
        <nav aria-label="Altri spettacoli" className="mx-auto flex max-w-[1200px] flex-wrap gap-4 px-6 pb-28">
          {[
            precedente && { s: precedente, etichetta: `← Spettacolo precedente · ${precedente.anno}`, destra: false },
            successivo && { s: successivo, etichetta: 'Spettacolo successivo →', destra: true },
          ]
            .filter(Boolean)
            .map(({ s: altro, etichetta, destra }) => (
              <a
                key={altro.slug}
                href={`/resto/${altro.slug}`}
                className={`flex flex-[1_1_360px] items-center gap-4 rounded-[18px] border border-[#F4EFE6]/10 bg-[#17160F] p-3.5 !text-[#F4EFE6] ${destra ? 'flex-row-reverse text-right' : ''}`}
              >
                <span className="relative h-[76px] w-[120px] flex-none overflow-hidden rounded-[10px]">
                  <Image src={altro.foto} alt="" fill sizes="120px" className="object-cover" style={{ objectPosition: altro.posizione }} />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-[0.14em] text-[#F4EFE6]/60">{etichetta}</span>
                  <span className="font-serif-display mt-1 block text-2xl font-bold">{titoloCompleto(altro)}</span>
                </span>
              </a>
            ))}
        </nav>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  return { paths: spettacoli.map((s) => ({ params: { slug: s.slug } })), fallback: false }
}

export async function getStaticProps({ params }) {
  return { props: { slug: params.slug } }
}
