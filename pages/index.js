import Head from 'next/head'

import { Button, Container, Typography, Grid } from '@mui/material'

import {
  Carousel,
  Layout,
  LandingHero,
  Features,
  Paragraph,
  Products,
  Table,
  Testimonials,
  Team,
  Maps,
  SwiperNews,
  Featured,
} from '/components'

export default function Home({ data, movies }) {
  console.log(movies)

  return (
    <Layout>
      <Head>
        <title>Oratorio don Bosco di San Donà di Piave</title>
        <meta name='og:url' content='https://per.donboscosandona.it/' />
        <meta name='og:type' content='website' />
        <meta name='og:locale' content='it_IT' />
        <meta
          name='og:title'
          content='Oratorio don Bosco di San Donà di Piave'
        />
        <meta
          name='og:description'
          content="Il sito ufficiale dell'Oratorio don Bosco di San Donà di Piave (VE)"
        />
        <meta name='og:image' content='/images/home.png' />
      </Head>
      <Featured data={data} height={100} />
      <SwiperNews title='News' data={data} limit={12} />
      <Table
        title='Orari delle Sante Messe'
        backgroundImageUrl='/images/giornata.png'
        backgroundColor='#F79F1F'
        opacity={0.8}
        blur='0rem'
        color='white'
        rows={[
          ['Feriali', 'Sabato', 'Festivi'],
          ['ore 7.00', 'ore 7.00', ''],
          ['','','ore 9.00'],
          ['','','ore 10.30'],
          ['ore 18.30', 'ore 18.00',''],
        ]}
      />
      <Products
        cardWidth={3}
        products={siti}
        borderRadius='10px'
        aspectRatio='1 / 1'
      />
      <Products
        cardWidth={3}
        products={gruppi1}
        borderRadius='50%'
        aspectRatio='1 / 1'
      />
      <Featured data={movies} height={100} />
      <Products
        cardWidth={2}
        products={gruppi2}
        borderRadius='50%'
        aspectRatio='1 / 1'
      />
      <Team
        title='Contatti'
        members={members}
        cardWidth={4}
      />
      <Maps
        maxWidth='100%'
        maxHeight='550px'
        url='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5580.164099261905!2d12.571927!3d45.629088!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477957021a6f5e37%3A0x2767632f6958496c!2sOratorio%20Don%20Bosco!5e0!3m2!1sit!2sit!4v1682593458374!5m2!1sit!2sit'
      />
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://channels.donboscosandona.it/api/posts/inoratorio')
  const data = await res.json()

  const res_cinema = await fetch('https://cinema.donboscosandona.it/movie/featured.json')
  let movie_data = await res_cinema.json()

  movie_data = movie_data.filter((movie) => movie.hero_path)

  const movies = movie_data.map((movie) => ({
    titolo: movie.title,
    abstract: movie.overview,
    immagine: movie.hero_path.substring(0,1)=='/' ? 'https://cinema.donboscosandona.it' + movie.hero_path : movie.hero_path,
    link: 'https://cinema.donboscosandona.it',
    in_evidenza: true,
  }))

  return {
    props: { data, movies },
    revalidate: 1200, // In secondi: il build viene fatto al massimo una volta ogni dieci minuti
  }
}

// Il nostro team
let members = [
  {
    name: 'Segreteria PER',
    role: 'Per qualsiasi evenienza ed informazione potete mandare una mail al nostro indirizzo:',
    imageUrl: '/images/call1.webp',
    email: 'per@donboscosandona.it',
    phone: '392 464 3689',
  },
  {
    name: 'Dopo la Campanella',
    role: 'Dott. Andrea Pasqualetto',
    imageUrl: '/images/call2.webp',
    phone: '391 706 4430',
  },
  {
    name: 'Cinema don Bosco',
    role: "Per informazioni sugli orari e l'acquisto dei biglietti, inviate pure un whatsapp al nostro numero:",
    imageUrl: '/images/call3.webp',
    phone: '346 960 5687',
  },
]

let siti = [
  {
    title: 'Proposta Estate',
    immagineUrl: '/images/_iscrizioni.png',
    url: 'https://per.donboscosandona.it',
  },
  {
    title: 'Cinema',
    immagineUrl: '/images/_calendario.png',
    url: 'https://cinema.donboscosandona.it',
  },
  {
    title: 'Scuola',
    immagineUrl: '/images/_tema.png',
    url: 'https://www.donboscosandona.it',
  },
  {
    title: 'Soggiorno Marino',
    immagineUrl: '/images/_pomeriggi.png',
    url: 'https://www.soggiornodonbosco.it',
  },
]

let gruppi1 = [
  {
    title: 'ADS',
    immagineUrl: '/images/_regolamento.png',
    url: '/regolamento',
  },
  {
    title: 'Scout',
    immagineUrl: '/images/_preghiera.png',
    url: '/preghiera',
  },
  {
    title: 'Calcio',
    immagineUrl: '/images/_special.png',
    url: '/special',
  },
  {
    title: 'Dopo la Campanella',
    immagineUrl: '/images/_animatori.png',
    url: '/animatori',
  },
  {
    title: 'Storia',
    immagineUrl: '/images/_genitori.png',
    url: '/genitori',
  },
  {
    title: "Cooperatori",
    immagineUrl: '/images/_dlc.png',
    url: '/dlc',
  },
  {
    title: "Dimensione Missionaria",
    immagineUrl: '/images/_dlc.png',
    url: '/dlc',
  },
  {
    title: "Comunione e Liberazione",
    immagineUrl: '/images/_dlc.png',
    url: '/dlc',
  },
]

let gruppi2 = [
  {
    title: 'Banda',
    immagineUrl: '/images/_regolamento.png',
    url: '/regolamento',
  },
  {
    title: 'Resto d\'Israele',
    immagineUrl: '/images/_regolamento.png',
    url: '/regolamento',
  },
  {
    title: 'Amici del Presepe',
    immagineUrl: '/images/_regolamento.png',
    url: '/regolamento',
  },
  {
    title: 'Adulti',
    immagineUrl: '/images/_regolamento.png',
    url: '/regolamento',
  },
  {
    title: 'Banda',
    immagineUrl: '/images/_regolamento.png',
    url: '/regolamento',
  },
]