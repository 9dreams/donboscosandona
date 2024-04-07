import Head from 'next/head'
import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero.js'
import Paragraph from 'components/Paragraph'
import Table from 'components/Table'

export default function Pagina() {
  return (
    <Layout>
      <Head>
        <title>Proposta Estate Ragazzi di San Donà di Piave</title>
        <meta name='og:url' content='https://per.donboscosandona.it/autobus' />
        <meta name='og:type' content='website' />
        <meta name='og:locale' content='it_IT' />
        <meta
          name='og:title'
          content='Proposta Estate Ragazzi di San Donà di Piave'
        />
        <meta
          name='og:description'
          content="L'orario degli autobus dalle frazioni."
        />
        <meta name='og:image' content='/images/autobus.png' />
      </Head>
      <LandingHero
        opacity={0.2}
        title='Trasporto autobus'
        imageUrl='/images/autobus.png'
      />
      <Table
        title='Andata'
        backgroundImageUrl='/images/autobus/02.webp'
        backgroundColor='#009432'
        opacity={0.7}
        blur='0.2rem'
        color='white'
        rows={[
          ['Mattina', '', 'Pomeriggio'],
          ['08:17', 'Viale Primavera / Fermata Tonetto', '14:16'],
          ['08:20', 'Via Calnova / Turati', '14:18'],
          ['08:24', 'Fiorentina via Falcone / Chiesa', '14:22'],
          ['08:45', 'Mussetta / Chiesa', '14:35'],
          ['08:55', 'Calvecchia / Chiesa', '14:45'],
          ['08:58', 'Fossà / Chiesa', '14:48'],
          ['09:04', 'Cittanova / Chiesa', '14:54'],
          ['09:06', 'Cittanova via Tiepolo', '14:56'],
          ['09:10', 'Isiata / Fermata ATVO', '15:00'],
          ['09:18', 'Palazzetto / Chiesa', '15:08'],
        ]}
      />

      <Table
        title='Ritorno'
        backgroundImageUrl='/images/autobus/01.jpeg'
        backgroundColor='#F79F1F'
        opacity={0.7}
        blur='0.2rem'
        color='white'
        rows={[
          ['Mattina', '', 'Pomeriggio'],
          ['12:05', 'Partenza Oratorio', '18:05'],
          ['12:09', 'Viale Primavera / Fermata Tonetto', '18:09'],
          ['12:11', 'Via Calnova / Turati', '18:11'],
          ['12:15', 'Fiorentina via Falcone / Chiesa', '18:15'],
          ['12:40', 'Mussetta / Chiesa', '18:40'],
          ['12:50', 'Calvecchia / Chiesa', '18:50'],
          ['12:53', 'Fossà / Chiesa', '18:53'],
          ['12:59', 'Cittanova / Chiesa', '18:59'],
          ['13:01', 'Cittanova via Tiepolo', '19:01'],
          ['13:05', 'Isiata / Fermata ATVO', '19:05'],
          ['13:13', 'Palazzetto / Chiesa', '19:13'],
        ]}
      />
      <Paragraph />
    </Layout>
  )
}
