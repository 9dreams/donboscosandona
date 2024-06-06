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
        <meta name='og:image' content='/images/calendario.png' />
      </Head>
      <LandingHero
        opacity={0.3}
        title='Calendario'
        imageUrl='/images/calendario.png'
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
    date: 'Giovedì 13 Giugno',
    morning: 'Inizio elementari',
    afternoon: 'Inizio medie',
    immagineUrl: '/images/calendario/inizio1.jpeg',
    bgColor: colorePrimiGiorni,
  },
  {
    date: 'Venerdì 14 Giugno',
    morning: 'Inizio attività',
    afternoon: 'Presentazione squadre e grande gioco',
    immagineUrl: '/images/calendario/inizio2.png',
    bgColor: colorePrimiGiorni,
  },
  {
    date: 'Sabato 15 Giugno',
    evening: 'Italia Albania',
    immagineUrl: '/images/calendario/calcio.jpeg',
    bgColor: coloreSerate,
  },
  {
    date: 'Domenica 16 Giugno',
    morning:
      'Messa di apertura, incontro con i genitori, giochi e pranzo al sacco',
    immagineUrl: '/images/calendario/messa.png',
    bgColor: coloreDefault,
  },
]

let settimana1 = [
  {
    date: 'Lunedì 17 Giugno',
    morning: 'Attività regolare',
    afternoon: 'Giochi al parco e tornei',
    evening: 'Pizzata di squadra gialli - blu',
    immagineUrl: '/images/calendario/pizza.png',
    bgColor: coloreDefault,
  },
  {
    date: 'Martedì 18 Giugno',
    morning: 'Attività regolare',
    afternoon: 'Giochi al parco e tornei',
    evening: "Oratorio's Got Talent",
    immagineUrl: '/images/calendario/talent.jpeg',
    bgColor: coloreSerate,
  },
  {
    date: 'Mercoledì 19 Giugno',
    morning: 'Attività regolare',
    afternoon: 'Pit Stop animatori',
    evening: 'Tornei animatori',
    immagineUrl: '/images/calendario/animatori.jpeg',
    bgColor: colorePitStop,
  },
  {
    date: 'Giovedì 20 Giugno',
    morning: 'Gita a Noale',
    afternoon: 'Gita a Noale',
    evening: 'Spagna-Italia',
    immagineUrl: '/images/calendario/noale.png',
    bgColor: coloreGite,
  },
  {
    date: 'Venerdì 21 Giugno',
    morning: 'Attività regolare',
    afternoon: 'Incontro con Etienne',
    evening: 'Spettacolo ETIENNE',
    immagineUrl: '/images/serate/etienne.jpeg',
    bgColor: coloreSerate,
  },
]

let settimana2 = [
  {
    date: 'Lunedì 24 Giugno',
    morning: 'Attività regolare',
    afternoon: 'Quinta elementare e prima media al mare',
    evening: 'Croazia-Italia',
    immagineUrl: '/images/calendario/calcio.jpeg',
    bgColor: coloreMare,
  },
  {
    date: 'Martedì 25 Giugno',
    morning: 'Gita in montagna',
    afternoon: 'Gita in montagna',
    immagineUrl: '/images/calendario/cansiglio.jpeg',
    bgColor: coloreGite,
  },
  {
    date: 'Mercoledì 26 Giugno',
    morning: 'Attività regolare',
    afternoon: 'Pit Stop animatori',
    evening: 'Tornei animatori',
    immagineUrl: '/images/calendario/animatori.jpeg',
    bgColor: colorePitStop,
  },
  {
    date: 'Giovedì 27 Giugno',
    morning: 'Attività regolare',
    afternoon: 'Giochi al parco e tornei',
    immagineUrl: '/images/calendario/regolare.jpeg',
    bgColor: coloreDefault,
  },
  {
    date: 'Venerdì 28 Giugno',
    morning: 'Attività regolare',
    afternoon: 'Seconda e terza media al mare',
    evening: 'Schiuma party',
    immagineUrl: '/images/calendario/schiuma.jpeg',
    bgColor: coloreSerate,
  },
]

let settimana3 = [
  {
    date: 'Lunedì 1 Luglio',
    morning: 'Cambio attività',
    afternoon: 'Terza e quarta elementare al mare',
    evening: 'Pizzata di squadra verdi - rossi',
    immagineUrl: '/images/calendario/pizza.png',
    bgColor: coloreMare,
  },
  {
    date: 'Martedì 2 Luglio',
    morning: "Gita a MOVIELAND e CANEVAWORLD",
    afternoon: "Gita a MOVIELAND e CANEVAWORLD",
    immagineUrl: '/images/calendario/movieland.jpeg',
    bgColor: coloreGite,
  },
  {
    date: 'Mercoledì 3 Luglio',
    morning: 'Attività regolare',
    afternoon: 'Pit Stop animatori',
    evening: 'Tornei animatori',
    immagineUrl: '/images/calendario/animatori.jpeg',
    bgColor: colorePitStop,
  },
  {
    date: 'Giovedì 4 Luglio',
    morning: 'Attività regolare',
    afternoon: 'Giochi al parco e tornei',
    evening: 'Sfilata a squadre e giochi a stand con i genitori',
    immagineUrl: '/images/serate/sfilata.jpeg',
    bgColor: coloreSerate,
  },
  {
    date: 'Venerdì 5 Luglio',
    morning: 'Attività regolare',
    afternoon: 'Giochi al parco e tornei',
    evening: 'Pellegrinaggio notturno terze medie',
    immagineUrl: '/images/calendario/regolare.jpeg',
    bgColor: coloreDefault,
  },
  {
    date: 'Sabato 6 Luglio',
    morning: 'Pellegrinaggio',
    immagineUrl: '/images/calendario/pellegrinaggio.png',
    bgColor: coloreGite,
  },
]

let settimana4 = [
  {
    date: 'Lunedì 8 Luglio',
    morning: 'Attività regolare',
    afternoon: 'Giochi al parco e tornei',
    immagineUrl: '/images/calendario/regolare.jpeg',
    bgColor: coloreDefault,
  },
  {
    date: 'Martedì 9 Luglio',
    morning: 'Gita a Noale',
    afternoon: 'Gita a Noale',
    immagineUrl: '/images/calendario/noale.png',
    bgColor: coloreGite,
  },
  {
    date: 'Mercoledì 10 Luglio',
    morning: 'Attività regolare',
    afternoon: 'Pit Stop animatori',
    evening: 'Tornei animatori',
    immagineUrl: '/images/calendario/animatori.jpeg',
    bgColor: colorePitStop,
  },
  {
    date: 'Giovedì 11 Luglio',
    morning: 'Gita terze medie',
    afternoon: 'Giochi al parco e tornei',
    immagineUrl: '/images/calendario/regolare.jpeg',
    bgColor: coloreDefault,
  },
  {
    date: 'Venerdì 12 Luglio',
    morning: 'Attività regolare',
    afternoon: 'Giochi al parco e tornei',
    evening: 'SERATA FINALE',
    immagineUrl: '/images/serate/finale.jpeg',
    bgColor: coloreSerate,
  },
]
