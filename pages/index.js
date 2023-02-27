import Head from 'next/head'
import Layout from '/components/layout'
import Carousel from '/components/carousel'
import Settori from '/components/settori'
import Articoli from '/components/articoli'
import Esplora from '/components/esplora'
import Eventi from '/components/eventi'

import { getDatiArticoli } from '/lib/articoli'

export default function Home({ datiArticoli }) {
  return (
    <Layout>
      <Head>
      </Head>
      <Carousel />
      <Settori />
      <Esplora />
      <Eventi />
      <Articoli dati={ datiArticoli } />
    </Layout>
  )
}

export async function getStaticProps() {
  const datiArticoli = getDatiArticoli();
  return {
    props: {
      datiArticoli,
    },
  }
}
