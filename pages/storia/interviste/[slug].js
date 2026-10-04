import Head from 'next/head'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import { Layout, Prosa } from '/components'
import { leggiPagina, elencoPagine } from '/lib/contenuti'

const prugna = '#5E1A63'
const oro = '#F0C06B'

export default function Intervista({ intervista, precedente, successiva }) {
  const data = intervista.data
    ? new Date(intervista.data).toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' })
    : null

  return (
    <Layout>
      <Head>
        <title>{`${intervista.titolo} | La nostra storia`}</title>
        {intervista.presentazione && <meta name="description" content={intervista.presentazione} />}
      </Head>

      <section className="relative flex min-h-[560px] items-end overflow-hidden bg-[#0E1220]">
        {intervista.copertina && (
          <Image src={intervista.copertina} alt="" fill priority sizes="100vw" className="object-cover opacity-50" />
        )}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,18,32,0.3)_0%,rgba(14,18,32,0.94)_100%)]" />
        <div className="relative mx-auto w-full max-w-[900px] px-6 pb-14 pt-36">
          <a href="/storia#interviste" className="inline-flex min-h-11 items-center gap-2 text-[15px] font-semibold !text-white/85 hover:!text-white">
            <Icon icon="ph:arrow-left" /> La nostra storia · A tu per tu
          </a>
          <p className="mb-3 mt-4 text-[13px] font-bold uppercase tracking-[0.22em]" style={{ color: oro }}>
            «A tu per tu con…»
          </p>
          <h1 className="font-serif-display m-0 text-[clamp(44px,7vw,84px)] font-semibold leading-[0.98] !text-white">
            {intervista.nome || intervista.titolo}
          </h1>
          {intervista.presentazione && (
            <p className="mt-6 max-w-[680px] text-lg leading-relaxed text-white/85">{intervista.presentazione}</p>
          )}
          <p className="mt-6 text-sm text-white/65">
            {[intervista.autore && `di ${intervista.autore}`, data].filter(Boolean).join(' · ')}
          </p>
        </div>
      </section>

      <article className="bg-[#FBF7F0] px-6 py-20 dark:bg-[#121016]">
        <div className="mx-auto max-w-[760px]">
          <Prosa html={intervista.html} accento={prugna} />
        </div>
      </article>

      <nav aria-label="Altre interviste" className="bg-[#FBF7F0] px-6 pb-28 dark:bg-[#121016]">
        <div className="mx-auto flex max-w-[900px] flex-wrap gap-4">
          {[
            precedente && { i: precedente, etichetta: '← Intervista precedente', destra: false },
            successiva && { i: successiva, etichetta: 'Intervista successiva →', destra: true },
          ]
            .filter(Boolean)
            .map(({ i, etichetta, destra }) => (
              <a
                key={i.slug}
                href={`/storia/interviste/${i.slug}`}
                className={`flex flex-[1_1_320px] flex-col rounded-[18px] bg-white p-5 shadow-[0_1px_2px_rgba(42,34,48,0.06)] !text-[#2A2230] dark:bg-[#1C1822] dark:!text-[#F4EFE6] ${destra ? 'text-right' : ''}`}
              >
                <span className="text-xs font-bold uppercase tracking-[0.14em]" style={{ color: prugna }}>{etichetta}</span>
                <span className="font-serif-display mt-1 text-2xl font-bold">{i.nome}</span>
              </a>
            ))}
        </div>
      </nav>
    </Layout>
  )
}

function elencoOrdinato() {
  return elencoPagine('storia/interviste').sort((a, b) => (a.ordine ?? 99) - (b.ordine ?? 99))
}

export async function getStaticPaths() {
  return { paths: elencoOrdinato().map((i) => ({ params: { slug: i.slug } })), fallback: false }
}

export async function getStaticProps({ params }) {
  const elenco = elencoOrdinato()
  const indice = elenco.findIndex((i) => i.slug === params.slug)
  const breve = (i) => (i ? { slug: i.slug, nome: i.nome || i.titolo } : null)
  return {
    props: {
      intervista: await leggiPagina(`storia/interviste/${params.slug}`),
      precedente: breve(elenco[indice - 1]),
      successiva: breve(elenco[indice + 1]),
    },
  }
}
