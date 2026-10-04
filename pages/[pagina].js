import Head from 'next/head'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import { Layout, SezioneHero, SezioneIntestazione, Prosa, NewsTag, SchedaContatti } from '/components'
import { leggiPagina } from '/lib/contenuti'
import { hasTag } from '/lib/posts'
import { getGruppo } from '/data/gruppi'

// Pagine fisse importate dal vecchio sito (contenuti/pagine/<slug>.md):
// i gruppi dell'Oratorio e le pagine istituzionali. Le pagine con un file
// proprio in /pages (ads, scout, dlc, storia, resto…) hanno la precedenza.
const pagine = [
  'calcio', 'cooperatori', 'missioni', 'cl', 'caio', 'presepe', 'banda',
  'chi-siamo', 'oratorio', 'contatti', 'privacy', 'whistleblowing',
]

export default function Pagina({ pagina, gruppo, news }) {
  const colore = gruppo?.colore || '#1976D2'
  const accento = '#F0C06B'
  const contatti = pagina.contatti || []
  const allegati = pagina.allegati || []
  const galleria = pagina.galleria || []

  return (
    <Layout>
      <Head>
        <title>{`${pagina.titolo} | Oratorio Don Bosco`}</title>
        {pagina.sottotitolo && <meta name="description" content={pagina.sottotitolo} />}
      </Head>

      <SezioneHero
        immagine={pagina.immagine}
        occhiello={gruppo ? 'Gruppi dell’Oratorio' : 'Oratorio Don Bosco'}
        titolo={pagina.titolo}
        testo={pagina.sottotitolo}
        accento={accento}
      >
        {gruppo && (
          <span
            className="mt-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl text-white"
            style={{ backgroundColor: colore }}
            aria-hidden="true"
          >
            <Icon icon={gruppo.icona} className="text-[34px]" />
          </span>
        )}
      </SezioneHero>

      <section className="bg-[#FBF7F0] px-6 py-24 dark:bg-[#121016]">
        <div className="mx-auto flex max-w-[1200px] flex-wrap gap-16">
          <div className="min-w-0 flex-[1_1_600px]">
            <Prosa html={pagina.html} accento={colore} />
          </div>

          {(contatti.length > 0 || allegati.length > 0) && (
            <aside className="flex min-w-0 flex-[1_1_320px] flex-col gap-6 self-start">
              <SchedaContatti contatti={contatti} colore={colore} />
              {allegati.length > 0 && (
                <div className="rounded-[22px] bg-white p-7 shadow-[0_1px_2px_rgba(42,34,48,0.06)] dark:bg-[#1C1822]">
                  <h2 className="font-serif-display mb-4 text-3xl font-semibold !text-[#2A2230] dark:!text-[#F4EFE6]">Documenti</h2>
                  <ul className="m-0 flex list-none flex-col gap-3 p-0">
                    {allegati.map((a) => (
                      <li key={a.file}>
                        <a href={a.file} target="_blank" rel="noopener noreferrer" className="flex min-h-11 items-start gap-3 font-semibold" style={{ '--accento': colore }} data-accento>
                          <Icon icon="ph:file-pdf" className="mt-0.5 flex-none text-2xl" />
                          <span>{a.titolo}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          )}
        </div>
      </section>

      {galleria.length > 1 && (
        <section className="px-6 py-20">
          <div className="mx-auto grid max-w-[1200px] grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-3">
            {galleria.map((f) => (
              <div key={f} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image src={f} alt="" fill sizes="(min-width: 1024px) 300px, 50vw" className="object-cover" />
              </div>
            ))}
          </div>
        </section>
      )}

      {news.length > 0 && (
        <section className="mx-auto max-w-[1200px] px-6 pb-28 pt-8">
          <SezioneIntestazione occhiello="Dalle news" titolo={`Novità: ${pagina.titolo}`} accento={colore} />
          <NewsTag posts={news} etichetta={gruppo?.tag} accento={colore} />
        </section>
      )}
    </Layout>
  )
}

export async function getStaticPaths() {
  return { paths: pagine.map((pagina) => ({ params: { pagina } })), fallback: false }
}

export async function getStaticProps({ params }) {
  const pagina = await leggiPagina(`pagine/${params.pagina}`)
  // Foto dell'hero: quella indicata, altrimenti la prima della galleria o del testo.
  if (!pagina.immagine) {
    pagina.immagine = pagina.galleria?.[0] || pagina.html.match(/<img[^>]+src="([^"]+)"/)?.[1] || null
  }
  const gruppo = getGruppo(params.pagina) || null

  let news = []
  if (gruppo?.tag) {
    try {
      const res = await fetch('https://channels.donboscosandona.it/api/posts/inoratorio')
      const posts = await res.json()
      if (Array.isArray(posts)) news = posts.filter((p) => hasTag(p, gruppo.tag)).slice(0, 6)
    } catch (e) {
      news = []
    }
  }

  return { props: { pagina, gruppo, news }, revalidate: 3600 }
}
