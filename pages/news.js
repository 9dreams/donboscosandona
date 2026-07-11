import Head from 'next/head'
import { Layout } from '/components'
import NewsArchive from '/components/NewsArchive'
import { excludeTag } from '/lib/posts'

export default function NewsPage({ data }) {
  return (
    <Layout>
      <Head>
        <title>Archivio Notizie – Oratorio don Bosco San Donà di Piave</title>
        <meta name="og:url" content="https://www.inoratorio.it/news" />
        <meta name="og:type" content="website" />
        <meta name="og:locale" content="it_IT" />
        <meta name="og:title" content="Archivio Notizie – Oratorio don Bosco San Donà di Piave" />
        <meta
          name="og:description"
          content="Tutte le notizie, gli eventi e le attività dell'Oratorio don Bosco di San Donà di Piave."
        />
      </Head>
      <NewsArchive data={data} hiddenTags="scuola" />
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://channels.donboscosandona.it/api/posts/inoratorio?q=scuola')
  const data = await res.json()
  const scuolaPosts = excludeTag(
    data.filter((post) =>
      post.tag
        ?.split(',')
        .map((tag) => tag.trim().toLowerCase())
        .includes('scuola')
    ),
    'screen'
  )

  return {
    props: { data: scuolaPosts },
    revalidate: 1200,
  }
}