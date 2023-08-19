import Head from 'next/head'
import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero.js'
import Paragraph from '/components/Paragraph'
import News from '/components/News'

export default function Home({ data }) {
  return (
    <Layout>
      <Head />
      <LandingHero
        opacity={0.4}
        siteName='CFP DON BOSCO'
        title='Trasparenza amministrativa'
        description='Diventa adulto con il metodo educativo di don Bosco preparandoti ad entrare a testa alta nel mondo professionale di domani!'
        buttonUrl={'https://www.youtube.com/watch?v=wyjm1yGmu9g'}
        buttonText='Guarda il video'
        imageUrl='/images/trasparenza/transparency-2.webp'
      />
      <Paragraph backgroundColor='#b4cfd6'>
        <b>ASSOCIAZIONE C.F.P. CNOS-FAP DON BOSCO</b>
        <br />
        Ente con personalità giuridica di diritto privato
        <br />
        Sede Legale ed Operativa
        <br />
        Via XIII Martiri 86
        <br />
        30027 San Donà di Piave
        <br />
        CF 93005640276 - P.IVA 02732470279
      </Paragraph>
      <News title={null} data={data} limit={30} />
    </Layout>
  )
}

// This gets called on every request
export async function getServerSideProps() {
  const res = await fetch(
    'https://channels.donboscosandona.it/api/posts/donboscosandona_docs?q=trasparenza'
  )
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}
