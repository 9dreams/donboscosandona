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
      <Calendar title='' cardWidth={3} events={settimana0} />
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
    date: 'Giovedì 11 Giugno',
    morning: 'Inizio elementari',
    afternoon: 'Inizio medie',
    immagineUrl: '/images/calendario/inizio1.jpeg',
    bgColor: colorePrimiGiorni,
  },
  {
    date: 'Venerdì 12 Giugno',
    morning: 'Attività regolare',
    afternoon: 'Giochi al parco e tornei',
    evening: 'Lux Arcana - Spettacolo di fuoco e danze aeree',
    immagineUrl: '/images/calendario/regolare.jpeg',
    bgColor: coloreSerate,
  },
  {
    date: 'Domenica 14 Giugno',
    morning: 'Santa Messa di apertura, incontro con i genitori, giochi gonfiabili e consegna maglietta',
    afternoon: 'Giochi al parco e tornei',
    immagineUrl: '/images/calendario/gonfiabili.webp',
    bgColor: coloreDefault,
  },
]

let settimana1 = [
  {
    date: 'Lunedì 15 Giugno',
    morning: 'Inizio laboratori',
    afternoon: 'Presentazione squadre',
    immagineUrl: '/images/calendario/inizio2.png',
    bgColor: coloreDefault,
  },
  {
    date: 'Martedì 16 Giugno',
    morning: 'Attività regolare',
    afternoon: 'Giochi al parco e tornei',
    immagineUrl: '/images/calendario/regolare.jpeg',
    bgColor: coloreDefault,
  },
  {
    date: 'Mercoledì 17 Giugno',
    morning: 'Attività regolare',
    afternoon: 'Pit-stop animatori',
    evening: 'Tornei animatori',
    immagineUrl: '/images/calendario/animatori.jpeg',
    bgColor: colorePitStop,
  },
  {
    date: 'Giovedì 18 Giugno',
    morning: 'Gita a Noale',
    afternoon: 'Gita a Noale',
    immagineUrl: '/images/calendario/noale.png',
    bgColor: coloreGite,
  },
  {
    date: 'Venerdì 19 Giugno',
    morning: 'Attività regolare',
    afternoon: 'Giochi al parco e tornei',
    evening: "Oratorio's Got Talent",
    immagineUrl: '/images/serate/talent.jpeg',
    bgColor: coloreSerate,
  },
]

let settimana2 = [
  {
    date: 'Lunedì 22 Giugno',
    morning: 'Attività regolare',
    afternoon: 'Mare medie',
    evening: 'Pizza Rossi-Gialli',
    immagineUrl: '/images/calendario/mare.jpg',
    bgColor: coloreMare,
  },
  {
    date: 'Martedì 23 Giugno',
    morning: 'Gita in montagna',
    afternoon: 'Gita in montagna',
    immagineUrl: '/images/calendario/cansiglio.jpeg',
    bgColor: coloreGite,
  },
  {
    date: 'Mercoledì 24 Giugno',
    morning: 'Attività regolare',
    afternoon: 'Pit-stop animatori',
    evening: 'Tornei animatori',
    immagineUrl: '/images/calendario/animatori.jpeg',
    bgColor: colorePitStop,
  },
  {
    date: 'Giovedì 25 Giugno',
    morning: 'Grande gioco al Parco Fluviale con tutti i GREST della città',
    afternoon: 'Giochi al parco e tornei',
    immagineUrl: '/images/calendario/regolare.jpeg',
    bgColor: coloreDefault,
  },
  {
    date: 'Venerdì 26 Giugno',
    morning: 'Attività regolare',
    afternoon: 'Giochi al parco e tornei',
    evening: "Sawa Sawa: dall'asfalto alla giungla",
    immagineUrl: '/images/calendario/regolare.jpeg',
    bgColor: coloreSerate,
  },
]

let settimana3 = [
  {
    date: 'Lunedì 29 Giugno',
    morning: 'Cambio laboratori',
    afternoon: 'Mare elementari',
    evening: 'Pizza Verdi-Blu',
    immagineUrl: '/images/calendario/mare.jpg',
    bgColor: coloreMare,
  },
  {
    date: 'Martedì 30 Giugno',
    morning: "Gita all'Aquasplash",
    afternoon: "Gita all'Aquasplash",
    immagineUrl: '/images/calendario/aquasplash.jpg',
    bgColor: coloreGite,
  },
  {
    date: 'Mercoledì 1 Luglio',
    morning: 'Attività regolare',
    afternoon: 'Pit-stop animatori',
    evening: 'Tornei animatori',
    immagineUrl: '/images/calendario/animatori.jpeg',
    bgColor: colorePitStop,
  },
  {
    date: 'Giovedì 2 Luglio',
    morning: 'Attività regolare',
    afternoon: 'Giochi al parco e tornei',
    immagineUrl: '/images/calendario/regolare.jpeg',
    bgColor: coloreDefault,
  },
  {
    date: 'Venerdì 3 Luglio',
    morning: 'Attività regolare',
    afternoon: 'Giochi al parco e tornei',
    evening: 'Sfilata delle Squadre e giochi a stand con i genitori; Gara delle torte',
    immagineUrl: '/images/serate/sfilata.jpeg',
    bgColor: coloreSerate,
  },
]

let settimana4 = [
  {
    date: 'Lunedì 6 Luglio',
    morning: 'Attività regolare',
    afternoon: 'Giochi al parco e tornei',
    immagineUrl: '/images/calendario/regolare.jpeg',
    bgColor: coloreDefault,
  },
  {
    date: 'Martedì 7 Luglio',
    morning: 'Gita a Noale; Gruppo special: Rafting',
    afternoon: 'Gita a Noale; Gruppo special: Rafting',
    immagineUrl: '/images/calendario/noale.png',
    bgColor: coloreGite,
  },
  {
    date: 'Mercoledì 8 Luglio',
    morning: 'Attività regolare',
    afternoon: 'Pit-stop animatori',
    immagineUrl: '/images/calendario/animatori.jpeg',
    bgColor: colorePitStop,
  },
  {
    date: 'Giovedì 9 Luglio',
    morning: 'Attività regolare',
    afternoon: 'Giochi al parco e tornei',
    evening: 'Serata finale',
    immagineUrl: '/images/serate/finale.jpeg',
    bgColor: coloreSerate,
  },
  {
    date: 'Sabato 11 Luglio',
    morning: 'Pellegrinaggio a Motta di Livenza',
    immagineUrl: '/images/calendario/pellegrinaggio.png',
    bgColor: coloreGite,
  },
]
