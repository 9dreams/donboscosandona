import Head from 'next/head'
import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero.js'
import Paragraph from 'components/Paragraph'
import Products from '/components/Products.js'
import { Container, ButtonGroup, Button } from '@mui/material/'

let products = [
  {
    title: 'SCENOGRAFIA',
    category: '1ª ora medie / 2ª ora elementari',
    description: 'Prepariamo gli sfondi per gli spettacoli della PER',
    immagineUrl: '/images/laboratori/scenografia.jpeg',
  },
  {
    title: 'DECOUPAGES',
    category: '1ª ora medie / 2ª ora elementari',
    description: 'Decora ritagliando',
    immagineUrl: '/images/laboratori/decoupages.jpeg',
  },
  {
    title: 'FILI E PERLINE',
    category: '1ª ora medie / 2ª ora elementari',
    description:
      'L’arte dell’intreccio di corde e stoffe per realizzare magnifici braccialetti … ma non solo.',
    immagineUrl: '/images/laboratori/perline.jpeg',
  },
  {
    title: 'STAMPA SU STOFFA',
    category: '1ª ora medie / 2ª ora elementari',
    description: 'Riproduci su stoffa la tua creatività grafica',
    immagineUrl: '/images/laboratori/stampa.jpeg',
  },
  {
    title: 'TUTTO CARTA',
    category: '1ª ora medie / 2ª ora elementari',
    description: 'La carta in 3 dimensioni',
    immagineUrl: '/images/laboratori/carta.jpeg',
  },
  {
    title: 'AQUILONI',
    category: '1ª ora medie / 2ª ora elementari',
    description: 'L’attività che vi lascerà con il naso all’insù',
    immagineUrl: '/images/laboratori/aquiloni.jpeg',
  },
  {
    title: 'PIROGRAFIA',
    category: '1ª ora medie / 2ª ora elementari',
    description: 'Scriviamo con il fuoco sul legno',
    immagineUrl: '/images/laboratori/pirografia.jpeg',
  },
  {
    title: 'ECO ART',
    category: '1ª ora medie / 2ª ora elementari',
    description: 'La creatività sostenibile',
    immagineUrl: '/images/laboratori/ecoart.jpeg',
  },
  {
    title: 'STRING ART',
    category: '1ª ora elementari / 2ª ora elementari',
    description:
      'Cosa si può fare con una tavoletta di legno, dei chiodi e fili colorati? magnifiche opere d’arte',
    immagineUrl: '/images/laboratori/stringart.jpeg',
  },
  {
    title: 'INFORMATICA AVANZATA',
    category: '1ª ora medie / 2ª ora medie',
    description: 'Impara il tuo primo linguaggio di programmazione.',
    immagineUrl: '/images/laboratori/informatica2.jpeg',
  },
  {
    title: 'MULTIMEDIA',
    category: '1ª ora medie / 2ª ora medie',
    description: 'Elaborazione di foto e video in digitale',
    immagineUrl: '/images/laboratori/multimedia.jpeg',
  },
  {
    title: 'GIOCHI DA TAVOLO',
    category: '1ª ora medie / 2ª ora elementari',
    description: 'Divertiti con noi con i giochi da tavolo più belli del mondo',
    immagineUrl: '/images/laboratori/giochi.jpeg',
  },
  {
    title: 'IMPIANTI ELETTRICI',
    category: '1ª ora medie / 2ª ora medie',
    description: "Alla scoperta dei primi segreti dell'elettricità",
    immagineUrl: '/images/laboratori/impianti.jpeg',
  },
  {
    title: 'POLLICE VERDE',
    category: '1ª ora medie / 2ª ora elementari',
    description: 'Se il giardinaggio è la tua passione...',
    immagineUrl: '/images/laboratori/polliceverde.jpeg',
  },
  {
    title: 'TUTTO BICI',
    category: '1ª ora medie / 2ª ora elementari',
    description:
      'Un team di ciclo-meccanici pronti ad aggiustare qualsiasi guasto',
    immagineUrl: '/images/laboratori/tuttobici.jpeg',
  },
]

export default function Pagina() {
  return (
    <Layout>
      <Head>
        <title>Proposta Estate Ragazzi di San Donà di Piave</title>
        <meta
          name='og:url'
          content='https://per.donboscosandona.it/laboratori_manuali'
        />
        <meta name='og:type' content='website' />
        <meta name='og:locale' content='it_IT' />
        <meta
          name='og:title'
          content='Proposta Estate Ragazzi di San Donà di Piave'
        />
        <meta name='og:image' content='/images/manuali.png' />
      </Head>
      <LandingHero
        opacity={0.2}
        title='Laboratori Manuali'
        imageUrl='/images/manuali.png'
      />
      <Container sx={{ padding: '2rem', textAlign: 'center' }}>
        <ButtonGroup
          color='secondary'
          aria-label='Scelta del tipo di laboratori'
        >
          <Button key='espressivi' href='/laboratori_espressivi'>
            Espressivi
          </Button>
          <Button key='sportivi' href='/laboratori_sportivi'>
            Sportivi
          </Button>
          <Button key='manuali' href='/laboratori_manuali'>
            Manuali
          </Button>
          <Button key='novità' href='/laboratori_new'>
            Novità
          </Button>
        </ButtonGroup>
      </Container>
      <Products products={products} cardWidth={3} />
    </Layout>
  )
}
