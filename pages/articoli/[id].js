import Head from 'next/head'
import { siteBaseUrl } from '/config/default'

import Layout from '/components/Layout'
import NocturnalHero from '/components/NocturnalHero'

import { getIdArticoli } from '../../lib/articoli'

export default function Show({ data }) {
  if (!data) return <div>Caricamento...</div>

  return (
    <Layout>
      <Head>
        <title>{data.titolo}</title>
        <meta
          name='og:url'
          content={siteBaseUrl + '/articoli/show?id=' + data.id}
        />
        <meta name='og:type' content='website' />
        <meta name='og:locale' content='it_IT' />
        <meta name='og:title' content={data.titolo} />
        <meta name='og:description' content={data.abstract} />
        <meta property='og:image' content={data.immagine} />
      </Head>
      <NocturnalHero
        post={data}
        ctaLabel={
          (data.link && 'Scopri di più') ||
          (data.allegato && "Scarica l'allegato") ||
          null
        }
        ctaHref={data.link || data.allegato || null}
        showNewsLink={false}
      />
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 pt-20 pb-20 min-h-[70vh]">
        <p className="mb-4 text-inherit">{data.pubblicazione}</p>
        <div dangerouslySetInnerHTML={{ __html: data.content }} />
        <p>&nbsp;</p>
        {data.tag && (
          <div className="flex flex-wrap gap-2">
            {data.tag.split(',').map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[var(--brand-blue)] px-3 py-1 text-sm text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
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
