import Head from 'next/head'
import { Layout } from '/components'
import NewsArchive from '/components/NewsArchive'

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
      <NewsArchive data={data} />
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://channels.donboscosandona.it/api/posts/inoratorio')
  const data = await res.json()

  return {
    props: { data },
    revalidate: 1200,
  }
}
