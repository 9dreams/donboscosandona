import Head from 'next/head'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { siteBaseUrl } from '/config/default'

import Layout from '/components/Layout'
import SyntheticLightHero from '/components/SyntheticLightHero'

import { getIdArticoli } from '../../lib/articoli'

// I tag dell'articolo: etichette ocra che portano all'archivio filtrato.
function TagList({ tags }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Link
          key={tag}
          href={`/news?q=${encodeURIComponent(tag)}`}
          className="rounded-md bg-ochre px-2.5 py-1 text-[11px] font-bold uppercase tracking-widest text-ink! no-underline! transition-colors hover:bg-ochre-strong"
        >
          {tag}
        </Link>
      ))}
    </div>
  )
}

export default function Show({ data }) {
  if (!data) return <div>Caricamento...</div>

  const tags = data.tag
    ? data.tag.split(',').map((t) => t.trim()).filter(Boolean)
    : []

  return (
    <Layout>
      <Head>
        <title>{data.titolo}</title>
        <meta name='og:url' content={siteBaseUrl + '/articoli/' + data.id} />
        <meta name='og:type' content='website' />
        <meta name='og:locale' content='it_IT' />
        <meta name='og:title' content={data.titolo} />
        <meta name='og:description' content={data.abstract} />
        <meta property='og:image' content={data.immagine} />
      </Head>

      <SyntheticLightHero
        post={data}
        ctaLabel={
          (data.link && 'Scopri di più') ||
          (data.allegato && "Scarica l'allegato") ||
          null
        }
        ctaHref={data.link || data.allegato || null}
      />

      {/* Corpo dell'articolo: una scheda bianca con il testo in serif. */}
      <div className="bg-page px-4 md:px-8 pt-12 md:pt-16 pb-20 md:pb-24">
        <article className="mx-auto max-w-[820px] rounded-2xl border border-line bg-surface shadow-sm p-6 md:p-12">
          <div
            className="prose-site art-content"
            dangerouslySetInnerHTML={{ __html: data.content }}
          />

          {tags.length > 0 && (
            <div className="mt-12 flex flex-wrap items-center gap-3 border-t border-line pt-6">
              <span className="text-xs font-bold uppercase tracking-wider text-muted">Argomenti</span>
              <TagList tags={tags} />
            </div>
          )}
        </article>

        <div className="mx-auto mt-8 max-w-[820px] text-center">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 rounded-full border border-brand/40 px-6 py-3 font-bold text-brand! no-underline! transition-colors hover:bg-brand/5 dark:hover:bg-brand/10"
          >
            <Icon icon="ph:arrow-left" />
            Tutte le notizie
          </Link>
        </div>
      </div>

      {/* Il contenuto arriva dal CMS come HTML: titoli e immagini vanno sistemati qui. */}
      <style jsx global>{`
        .art-content > :first-child { margin-top: 0; }
        .art-content h1, .art-content h2, .art-content h3, .art-content h4 {
          color: var(--brand-blue) !important;
          text-shadow: none !important;
          -webkit-text-fill-color: initial !important;
        }
        .art-content h1 { font-size: 1.75rem; font-family: var(--font-ui); font-weight: 700; margin: 2rem 0 1rem; }
        .art-content img { margin: 2rem 0; border: 1px solid var(--line); }
        .art-content p:empty { display: none; }
      `}</style>
    </Layout>
  )
}

// This gets called on every request
export async function getStaticProps({ params }) {
  const res = await fetch(
    'https://channels.donboscosandona.it/api/post/' + params.id
  )
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data }, revalidate: 3600 }
}

export async function getStaticPaths() {
  const paths = await getIdArticoli()

  return {
    paths,
    fallback: 'blocking',
  }
}
