import Head from 'next/head'
import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero2.js'
import Paragraph from 'components/Paragraph'
import Products from '/components/Products.js'
import { Container, ButtonGroup, Button } from '@mui/material/'

let products = [
  {
    title: 'BASEBALL',
    category: '1ª ora elementari / 2ª ora medie',
    description:
      "sport di squadra in cui due squadre composte da nove giocatori si affrontano per nove inning (o riprese) in ciascuno dei quali le due squadre si alternano nella fase di attacco e di difesa.",
    immagineUrl: '/images/laboratori/baseball.jpeg',
  },
  {
    title: 'CALCIO',
    category: '1ª ora elementari / 2ª ora medie',
    description:
      "Sport di squadra giocato con un pallone su un campo di gioco rettangolare; l'obiettivo è di segnare più punti (detti gol o reti) facendo passare il pallone fra i pali della porta avversaria.",
    immagineUrl: '/images/laboratori/calcio.jpeg',
  },
  {
    title: 'BASKET',
    category: '1ª ora elementari / 2ª ora medie',
    description:
      'Sport di squadra in cui due formazioni di cinque giocatori ciascuna si affrontano per segnare con un pallone nel canestro avversario, secondo una serie di regole prefissate e con un punteggio che varia dalla posizione di tiro.',
    immagineUrl: '/images/laboratori/basket.jpeg',
  },
  {
    title: 'PALLAVOLO',
    category: '1ª ora elementari / 2ª ora medie',
    description:
      'Sport di squadra il cui scopo è realizzare punti facendo sì che la palla tocchi terra nel campo avversario, separato da una rete alta più di 200 cm.',
    immagineUrl: '/images/laboratori/pallavolo.jpeg',
  },
  {
    title: 'STREET HOCKEY',
    category: '1ª ora elementari / 2ª ora medie',
    description: 'Sport di squadra, versione dell\'hockey su ghiaccio giocato con o senza pattini su una superficie di asfalto. Generalmente è giocato su strade, parcheggi o campi da tennis.',
    immagineUrl: '/images/laboratori/hockey.webp',
  },
  {
    title: 'PING PONG',
    category: '1ª ora elementari / 2ª ora medie',
    description:
      'Il tennis tavolo, più popolarmente conosciuto come ping pong e inventato nel 1884, è uno degli sport di maggior diffusione nel mondo ed è una specialità olimpica.',
    immagineUrl: '/images/laboratori/pingpong.jpeg',
  },
  {
    title: 'RUGBY',
    category: '1ª ora elementari / 2ª ora medie',
    description:
      'Sport di squadra in cui il campo è diviso in due metà, con due zone di meta nei dieci metri finali di entrambe. Portando la palla nella zona di meta della squadra avversaria realizzi cinque punti e ottieni il diritto di tirare un calcio di trasformazione che ne vale due...',
    immagineUrl: '/images/laboratori/rugby.jpeg',
  },
  {
    title: 'PALLAMANO',
    category: '1ª ora elementari / 2ª ora medie',
    description: 'In collaborazione con ASD PALLAMANO MUSILE',
    immagineUrl: '/images/laboratori/pallamano.jpeg',
  },
  {
    title: 'FRISBEE',
    category: '1ª ora elementari / 2ª ora medie',
    description:
      'Uno sport atleticamente completo dove uomini e donne giocano assieme e dove l’arbitro e’ il Fair Play di ogni giocatore!',
    immagineUrl: '/images/laboratori/frisbee.jpeg',
  },
]

export default function Pagina() {
  return (
    <Layout>
      <Head>
        <title>Proposta Estate Ragazzi di San Donà di Piave</title>
        <meta
          name='og:url'
          content='https://per.donboscosandona.it/laboratori_sportivi'
        />
        <meta name='og:type' content='website' />
        <meta name='og:locale' content='it_IT' />
        <meta
          name='og:title'
          content='Proposta Estate Ragazzi di San Donà di Piave'
        />
        <meta name='og:image' content='/images/sportivi.png' />
      </Head>
      <LandingHero
        opacity={0.0}
        title='Laboratori Sportivi'
        imageUrl='/images/sportivi.png'
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
      <Products products={products} cardWidth={4} />
    </Layout>
  )
}
