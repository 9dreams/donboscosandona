import Head from 'next/head'
import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero.js'
import Paragraph from 'components/Paragraph'
import Calendar from '/components/Calendar.js'

export default function Pagina() {
  return (
    <Layout>
      <Head>
        <title>Proposta Estate Ragazzi di San Donà di Piave</title>
        <meta
          name='og:url'
          content='https://per.donboscosandona.it/calendario'
        />
        <meta name='og:type' content='website' />
        <meta name='og:locale' content='it_IT' />
        <meta
          name='og:title'
          content='Proposta Estate Ragazzi di San Donà di Piave'
        />
        <meta
          name='og:description'
          content='Il calendario dettagliato delle giornate e delle serate.'
        />
        <meta name='og:image' content='/images/calendario.webp' />
      </Head>
      <LandingHero
        opacity={0.3}
        title='Calendario'
        imageUrl='/images/calendario.webp'
      />
      <Calendar cardWidth={3} events={settimana0} />
      <Calendar title='Prima settimana' cardWidth={3} events={settimana1} />
      <Calendar title='Seconda settimana' cardWidth={3} events={settimana2} />
      <Calendar title='Terza settimana' cardWidth={3} events={settimana3} />
      <Calendar title='Quarta settimana' cardWidth={3} events={settimana4} />
      <Paragraph>
      Attenzione! TUTTE LE DATE E GLI ORARI POSSONO SUBIRE MODIFICHE: il sito sarà sempre aggiornato con le informazioni più recenti.
      </Paragraph>
    </Layout>
  )
}

let coloreDefault = '#eb4d4b'
let colorePrimiGiorni = '#f9ca24'
let coloreGite = '#6ab04c'
let coloreSerate = '#4834d4'
let colorePitStop = '#f0932b'
let coloreMare = '#22a6b3'


let settimana0 = [
  {
    date: 'Venerdì 13 Giugno',
    morning: 'Inizio elementari',
    afternoon: 'Inizio medie',
    immagineUrl: '/images/calendario/inizio1.jpeg',
    bgColor: colorePrimiGiorni,
  },
  {
    date: 'Domenica 15 Giugno',
    afternoon:
      'Santa Messa di apertura alle 9.00, riunione genitori e giochi, gonfiabili e gara di torte, pranzo al sacco',
    immagineUrl: '/images/calendario/gonfiabili.webp',
    bgColor: coloreDefault,
  },
]

let settimana1 = [
  {
    date: 'Lunedì 16 Giugno',
    morning: 'Inizio laboratori',
    afternoon: 'Presentazione squadre',
    immagineUrl: '/images/calendario/inizio2.png',
    bgColor: coloreDefault,
  },
  {
    date: 'Martedì 17 Giugno',
    morning: 'Attività regolare',
    afternoon: 'Giochi al parco e tornei',
    evening: "Oratorio's Got Talent",
    immagineUrl: '/images/calendario/talent.jpeg',
    bgColor: coloreSerate,
  },
  {
    date: 'Mercoledì 18 Giugno',
    morning: 'Attività regolare',
    afternoon: 'Pit Stop animatori',
    evening: 'Tornei animatori',
    immagineUrl: '/images/calendario/animatori.jpeg',
    bgColor: colorePitStop,
  },
  {
    date: 'Giovedì 19 Giugno',
    morning: 'Gita a Noale',
    afternoon: 'Gita a Noale',
    immagineUrl: '/images/calendario/noale.png',
    bgColor: coloreGite,
  },
  {
    date: 'Venerdì 20 Giugno',
    morning: 'Attività regolare',
    afternoon: 'Giochi al parco e tornei',
    evening: 'Spettacolo I MELONI',
    immagineUrl: '/images/serate/meloni.jpg',
    bgColor: coloreSerate,
  },
]

let settimana2 = [
  {
    date: 'Lunedì 23 Giugno',
    morning: 'Attività regolare',
    afternoon: 'Prima e seconda media al mare',
    immagineUrl: '/images/calendario/mare.jpg',
    bgColor: coloreMare,
  },
  {
    date: 'Martedì 24 Giugno',
    morning: 'Gita in montagna',
    afternoon: 'Gita in montagna',
    immagineUrl: '/images/calendario/cansiglio.jpeg',
    bgColor: coloreGite,
  },
  {
    date: 'Mercoledì 25 Giugno',
    morning: 'Attività regolare',
    afternoon: 'Pit Stop animatori',
    evening: 'Tornei animatori',
    immagineUrl: '/images/calendario/animatori.jpeg',
    bgColor: colorePitStop,
  },
  {
    date: 'Giovedì 26 Giugno',
    morning: 'Grande gioco al parco fluviale con tutti i GREST della Città',
    afternoon: 'Giochi al parco e tornei',
    immagineUrl: '/images/calendario/regolare.jpeg',
    bgColor: coloreDefault,
  },
  {
    date: 'Venerdì 27 Giugno',
    morning: 'Attività regolare',
    afternoon: 'Incontro con i pompieri',
    evening: 'Schiuma party',
    immagineUrl: '/images/calendario/schiuma.jpeg',
    bgColor: coloreSerate,
  },
]

let settimana3 = [
  {
    date: 'Lunedì 30 Giugno',
    morning: 'Cambio attività',
    afternoon: 'Terza, quarta e quinta elementare al mare',
    immagineUrl: '/images/calendario/mare.jpg',
    bgColor: coloreMare,
  },
  {
    date: 'Martedì 1 Luglio',
    morning: "Gita a GARDALAND e AQUASPLASH",
    afternoon: "Gita a GARDALAND e AQUASPLASH",
    immagineUrl: '/images/calendario/gardaland.jpg',
    bgColor: coloreGite,
  },
  {
    date: 'Mercoledì 2 Luglio',
    morning: 'Attività regolare',
    afternoon: 'Pit Stop animatori',
    evening: 'Tornei animatori',
    immagineUrl: '/images/calendario/animatori.jpeg',
    bgColor: colorePitStop,
  },
  {
    date: 'Giovedì 3 Luglio',
    morning: 'Attività regolare',
    afternoon: 'Giochi al parco e tornei',
    evening: 'Sfilata a squadre, giochi a stand con i genitori e giochi di una volta',
    immagineUrl: '/images/serate/sfilata.jpeg',
    bgColor: coloreSerate,
  },
  {
    date: 'Venerdì 4 Luglio',
    morning: 'Attività regolare',
    afternoon: 'Presentazione delle associazioni',
    evening: 'Pellegrinaggio notturno terze medie',
    immagineUrl: '/images/calendario/regolare.jpeg',
    bgColor: coloreDefault,
  },
  {
    date: 'Sabato 5 Luglio',
    morning: 'Pellegrinaggio',
    afternoon: 'Pellegrinaggio',
    immagineUrl: '/images/calendario/pellegrinaggio.png',
    bgColor: coloreGite,
  },
]

let settimana4 = [
  {
    date: 'Lunedì 7 Luglio',
    morning: 'Attività regolare',
    afternoon: 'Giochi al parco e tornei',
    immagineUrl: '/images/calendario/regolare.jpeg',
    bgColor: coloreDefault,
  },
  {
    date: 'Martedì 8 Luglio',
    morning: 'Gita a Noale',
    afternoon: 'Gita a Noale',
    immagineUrl: '/images/calendario/noale.png',
    bgColor: coloreGite,
  },
  {
    date: 'Mercoledì 9 Luglio',
    morning: 'Attività regolare',
    afternoon: 'Pit Stop animatori',
    evening: 'Tornei animatori',
    immagineUrl: '/images/calendario/animatori.jpeg',
    bgColor: colorePitStop,
  },
  {
    date: 'Giovedì 10 Luglio',
    morning: 'Gita terze medie',
    afternoon: 'Giochi al parco e tornei',
    immagineUrl: '/images/calendario/inizio2.png',
    bgColor: coloreDefault,
  },
  {
    date: 'Venerdì 11 Luglio',
    morning: 'Attività regolare',
    afternoon: 'Giochi al parco e tornei',
    evening: 'SERATA FINALE',
    immagineUrl: '/images/serate/finale.jpeg',
    bgColor: coloreSerate,
  },
  {
    date: 'Sabato 12 Luglio',
    morning: 'Sistemazione ambienti',
    afternoon: 'Gita animatori',
    evening: 'Cena con tutti i volontari',
    immagineUrl: '/images/calendario/grigliata.webp',
    bgColor: colorePrimiGiorni,
  },
]
