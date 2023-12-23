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
        imageUrl='/images/trasparenza/transparency-2.webp'
      />
      <Paragraph backgroundColor='#b4cfd6'>
        <b>
          Fondazione Salesiani per la Formazione Professionale
          <br />
          Italia Nord Est - Impresa Sociale - SFP Don Bosco
        </b>
        <br />
        Via XIII Martiri 86 - 30027 San Donà di Piave
        <br />
        C.F. 80015710306 P.IVA 01845730306
      </Paragraph>
      <Container>
        <Button variant='contained' href='/whistleblowing'>
        Whistleblowing - Segnalazione illeciti
      </Button>
      </Container>
      
      <News title={null} data={data} limit={30} />
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch(
    'https://channels.donboscosandona.it/api/posts/donboscosandona_docs?q=trasparenza'
  )
  const data = await res.json()

  return {
    props: { data },
    revalidate: 3600, // I dati vengono ricaricati al massimo una volta all'ora
  }
}
