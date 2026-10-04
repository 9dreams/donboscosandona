import Head from 'next/head'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import { Layout, Prosa } from '/components'
import { leggiPagina } from '/lib/contenuti'

const viola = '#6A2A9C'
const oro = '#F0C06B'

// «Memorie scout» di Giovanni Biancotto, dal vecchio sito (1946–1980).
export default function MemorieBiancotto({ memorie }) {
  const copertina = memorie.galleria?.[0]
  return (
    <Layout>
      <Head>
        <title>Memorie scout di Giovanni Biancotto | Scout San Donà</title>
        <meta name="description" content="Le memorie scout di Giovanni Biancotto: lo scoutismo a San Donà di Piave raccontato da uno dei suoi protagonisti." />
      </Head>

      <section className="relative flex min-h-[520px] items-end overflow-hidden bg-[#0E1220]">
        {copertina && <Image src={copertina} alt="" fill priority sizes="100vw" className="object-cover opacity-45" />}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,18,32,0.3)_0%,rgba(14,18,32,0.94)_100%)]" />
        <div className="relative mx-auto w-full max-w-[900px] px-6 pb-14 pt-36">
          <a href="/scout" className="inline-flex min-h-11 items-center gap-2 text-[15px] font-semibold !text-white/85 hover:!text-white">
            <Icon icon="ph:arrow-left" /> Scout
          </a>
          <p className="mb-3 mt-4 text-[13px] font-bold uppercase tracking-[0.22em]" style={{ color: oro }}>
            Memorie scout
          </p>
          <h1 className="font-serif-display m-0 text-[clamp(44px,7vw,84px)] font-semibold leading-[0.98] !text-white">
            Giovanni Biancotto
          </h1>
          <p className="mt-6 text-sm text-white/70">
            {[memorie.trascrizione && `Trascrizione di ${memorie.trascrizione}`].filter(Boolean).join(' · ')}
          </p>
        </div>
      </section>

      <article className="bg-[#FBF7F0] px-6 pb-28 pt-20 dark:bg-[#121016]">
        <div className="mx-auto max-w-[760px]">
          <Prosa html={memorie.html} accento={viola} />
        </div>
      </article>
    </Layout>
  )
}

export async function getStaticProps() {
  return { props: { memorie: await leggiPagina('integrazioni/scout-memorie-biancotto') } }
}
