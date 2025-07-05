import Head from 'next/head'
import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero.js'
import Paragraph from '/components/Paragraph'
import News from '/components/News'

import {Button, Container} from '@mui/material/'

export default function Home({ data }) {
  return (
    <Layout>
      <Head />
      <LandingHero
        opacity={0.4}
        title='Trasparenza amministrativa'
        imageUrl='/images/trasparenza.jpg'
      />
      <Paragraph backgroundColor='#b4cfd6'>
        <b>
          Anffas ETS/APS San Donà di Piave
        </b>
        <br />
        Via Cima XI, n.47 - 30027 San Donà di Piave
        <br />
        C.F. 93024000270
      </Paragraph>
      
      <News title={null} data={data} limit={30} />
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch(
    'https://channels.donboscosandona.it/api/posts/anffas_docs'
  )
  const data = await res.json()

  return {
    props: { data },
    revalidate: 3600, // I dati vengono ricaricati al massimo una volta all'ora
  }
}
