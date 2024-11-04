import Head from 'next/head'
import Image from 'next/image'

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
      <Container
        sx={{
          aspectRatio: '16 / 9',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <a href='https://per.donboscosandona.it'>
          <Image
            src='/images/home/scopri_la_per.jpeg'
            alt='Scopri la #per24'
            style={{
              width: '100%',
              display: 'block',
              objectFit: 'cover',
            }}
            fill={true}
          />
        </a>
      </Container>
      <Table
        title='Orari delle Sante Messe'
        backgroundImageUrl='https://wp.it.aleteia.org/wp-content/uploads/sites/8/2018/01/shutterstock_untitled-design-14.jpg'
        backgroundColor='#F79F1F'
        opacity={0.7}
        blur='0rem'
        color='white'
        rows={[
          ['Feriali', 'Sabato', 'Festivi'],
          ['ore 7.00', 'ore 7.00', ''],
          ['', 'ore 18.00', 'ore 9.00'],
          ['', '', 'ore 10.30'],
          ['ore 18.30', '', ''],
        ]}
      />
      <Container>
        <p align="right">
          <a href='https://www.duomosandona.it/orario-sante-messe/' target='_blank'>Orari delle Sante Messe nella Collaborazione Pastorale</a>
        </p>
      </Container>

      <Products
        cardWidth={3}
        products={siti}
        borderRadius='10px'
        aspectRatio='1 / 1'
      />
      <Products
        cardWidth={3}
        products={gruppi1}
        borderRadius='20px'
        aspectRatio='2 / 1'
      />

      <SwiperNews title='Al cinema' data={movies} limit={12} />

      <Team title='Contatti' members={members} cardWidth={4} />
      <Maps
        maxWidth='100%'
        maxHeight='550px'
        url='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5580.164099261905!2d12.571927!3d45.629088!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477957021a6f5e37%3A0x2767632f6958496c!2sOratorio%20Don%20Bosco!5e0!3m2!1sit!2sit!4v1682593458374!5m2!1sit!2sit'
      />
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch(
    'https://channels.donboscosandona.it/api/posts/inoratorio'
  )
  const data = await res.json()

  const res_cinema = await fetch(
    'https://cinema.donboscosandona.it/movie/featured.json'
  )
  let movie_data = await res_cinema.json()

  movie_data = movie_data.filter((movie) => movie.hero_path)

  const movies = movie_data.map((movie) => ({
    titolo: movie.title,
    abstract: movie.overview,
    immagine:
      movie.hero_path.substring(0, 1) == '/'
        ? 'https://cinema.donboscosandona.it' + movie.hero_path
        : movie.hero_path,
    link: 'https://cinema.donboscosandona.it',
    in_evidenza: false,
    tag: movie.showtimes[0].date,
  }))

  /*
  movie_data = movie_data.filter((movie) => movie.hero_path)

  const movies = movie_data.map((movie) => ({
    titolo: movie.title,
    abstract: readMore(movie.overview, 30),
    immagine:
      movie.hero_path.substring(0, 1) == '/'
        ? 'https://cinema.donboscosandona.it' + movie.hero_path
        : movie.hero_path,
    link: 'https://cinema.donboscosandona.it',
    in_evidenza: true,
  }))
  */

  return {
    props: { data, movies },
    revalidate: 1800, // In secondi: il build viene fatto al massimo una volta ogni mezz'ora
  }
}

// Il nostro team
let members = [
  {
    name: 'Centralino',
    role: 'Per informazioni generali',
    imageUrl: '/images/call1.webp',
    phone: '0421 338 911 ',
  },
  {
    name: 'Amministrazione',
    role: 'Per informazioni amministrative e disponibilità degli ambienti.',
    imageUrl: '/images/call1.webp',
    email: 'amministrazione@donboscosandona.it',
    phone: '0421 338 900',
  },
  {
    name: 'Segreteria PER',
    role: 'Per qualsiasi evenienza ed informazione potete mandare una mail al nostro indirizzo',
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
    role: "Per informazioni sugli orari e l'acquisto dei biglietti, inviate pure un whatsapp al nostro numero",
    imageUrl: '/images/call3.webp',
    phone: '346 960 5687',
  },
  {
    name: 'Soggiorno don Bosco',
    role: 'Dal lunedì al venerdì dalle 9.00 alle 12.00',
    imageUrl: '/images/call3.webp',
    email: 'info@soggiornodonbosco.it',
    phone: '0421 299 158',
  },
]

let siti = [
  {
    title: 'Proposta Estate 2024',
    immagineUrl: '/images/home/per.png',
    url: 'https://per.donboscosandona.it',
  },
  {
    title: 'Cinema don Bosco',
    immagineUrl: '/images/home/cinema.png',
    url: 'https://cinema.donboscosandona.it',
  },
  {
    title: 'Scuola di Formazione Professionale',
    immagineUrl: '/images/home/sfp.png',
    url: 'https://www.donboscosandona.it',
  },
  {
    title: 'Soggiorno Marino don Bosco',
    immagineUrl: '/images/home/soggiornodonbosco.png',
    url: 'https://www.soggiornodonbosco.it',
  },
]

let gruppi1 = [
  {
    immagineUrl:
      'http://archive.inoratorio.it/img/column/9372c8fb969c3d9280014acd16f4d741b77915e4.jpg',
    url: 'http://archive.inoratorio.it/ads',
  },
  {
    immagineUrl:
      'http://archive.inoratorio.it/img/column/5b27adfa600161e5d8aac496e3874055ed228743.jpg?1521194053',
    url: 'http://archive.inoratorio.it/scout',
  },
  {
    immagineUrl:
      'http://archive.inoratorio.it/img/column/b28e973c6613ac1521bd7ef934721aa402d215af.jpg?1517600704',
    url: 'http://archive.inoratorio.it/calcio',
  },
  {
    immagineUrl:
      'http://archive.inoratorio.it/img/column/e4a41909932c20f3fb16eb22f12c19737eaeca17.jpg?1517600703',
    url: 'http://archive.inoratorio.it/dlc',
  },
  {
    immagineUrl:
      'http://archive.inoratorio.it/img/column/42fbf35ed416b040e78cd4ebdb10488d52cc2694.jpg?1517600705',
    url: 'http://archive.inoratorio.it/storia',
  },
  {
    immagineUrl:
      'http://archive.inoratorio.it/img/column/a68f73dc5c0a74d4a7c4187394fbe67adaa1dcc4.jpg?1517600704',
    url: 'http://archive.inoratorio.it/cooperatori',
  },
  {
    immagineUrl:
      'http://archive.inoratorio.it/img/column/b6930c69b4c434215de171191ef34748eea25a4d.jpg?1517600705',
    url: 'http://archive.inoratorio.it/missioni',
  },
  {
    immagineUrl:
      'http://archive.inoratorio.it/img/column/ce9cd906c4787f771a1b10e59f3e9e1ad38870db.jpg?1517600705',
    url: 'http://archive.inoratorio.it/cl',
  },
  {
    immagineUrl:
      'http://archive.inoratorio.it/img/column/a44867c32c44afda8717857c72e8de2cd570beb5.jpg?1517600672',
    url: 'http://archive.inoratorio.it/banda',
  },
  {
    immagineUrl:
      'http://archive.inoratorio.it/img/column/2827044e2ccaa6dfd84f387b4413580a5bccfffa.jpg?1517600704',
    url: 'http://archive.inoratorio.it/resto',
  },
  {
    immagineUrl:
      'http://archive.inoratorio.it/img/column/8610e2eaf7d5e97d99b6b1be2096c696e88b775e.jpg?1517600705',
    url: 'http://archive.inoratorio.it/presepe',
  },
  {
    immagineUrl:
      'http://archive.inoratorio.it/img/column/5e089332bd175d1306e6535d68a98e6c6eb221cf.jpg?1517600704',
    url: 'http://archive.inoratorio.it/caio',
  },
]
