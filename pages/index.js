import Head from 'next/head'

import {
  Carousel,
  Layout,
  LandingHero,
  Features,
  Paragraph,
  Products,
  GruppiOratorio,
  Table,
  Testimonials,
  Team,
  Maps,
  SwiperNews,
  NewsWall,
  Featured,
  NocturnalHero,
  Credits,
} from '/components'
import { excludeTag, fromOtherSite, mergeByDate } from '/lib/posts'

export default function Home({ data, news, movies }) {
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
      <NocturnalHero data={data} />
      <NewsWall title='News' data={news} limit={7} />
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
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
            ['', '', 'ore 9.00'],
            ['', '', 'ore 10.30'],
            ['ore 18.30', 'ore 18:00', ''],
          ]}
        />
      </div>
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <p className="text-right">
          <a href='https://www.duomosandona.it/orario-sante-messe/' target='_blank'>Orari delle Sante Messe nella Collaborazione Pastorale</a>
        </p>
      </div>

      <Products
        cardWidth={3}
        products={siti}
        borderRadius='10px'
        aspectRatio='1 / 1'
      />
      <GruppiOratorio />

      <SwiperNews title='Al cinema' data={movies} limit={12} />

      <Team title='Contatti' members={members} cardWidth={4} />
      <Maps
        maxWidth='100%'
        maxHeight='550px'
        url='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5580.164099261905!2d12.571927!3d45.629088!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477957021a6f5e37%3A0x2767632f6958496c!2sOratorio%20Don%20Bosco!5e0!3m2!1sit!2sit!4v1682593458374!5m2!1sit!2sit'
      />
      <div className='m-10'>
        <Credits />
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch(
    'https://channels.donboscosandona.it/api/posts/inoratorio'
  )
  const data = excludeTag(await res.json(), 'screen')

  // Le news (non l'hero in evidenza) uniscono quelle dell'oratorio e quelle
  // del monastero di Marango; se il canale del monastero non risponde si
  // mostrano solo quelle dell'oratorio.
  let marango = []
  try {
    const res_marango = await fetch(
      'https://channels.donboscosandona.it/api/posts/monasteromarango'
    )
    marango = fromOtherSite(await res_marango.json(), {
      baseUrl: 'https://www.monasteromarango.it',
      articlePath: '/notizie',
      logo: { src: '/images/marango.png', alt: 'Monastero di Marango' },
    })
  } catch (e) {
    console.error('Canale monasteromarango non raggiungibile:', e)
  }
  // NewsWall ne mostra 7 (più l'hero, che salta): ne bastano le prime 20.
  const news = Array.isArray(data) ? mergeByDate(data, marango).slice(0, 20) : data

  const res_cinema = await fetch(
    'https://cinema.donboscosandona.it/api/featured'
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
    props: { data, news, movies },
    revalidate: 1800, // In secondi: il build viene fatto al massimo una volta ogni mezz'ora
  }
}

// Il nostro team
let members = [
  {
    name: 'Centralino',
    role: 'Per informazioni generali',
    phone: '0421 338 911 ',
  },
  {
    name: 'Amministrazione',
    role: 'Per informazioni amministrative e disponibilità degli ambienti.',
    email: 'amministrazione@donboscosandona.it',
    phone: '0421 338 900',
  },
  {
    name: 'Segreteria PER',
    role: 'Per qualsiasi evenienza ed informazione potete mandare una mail al nostro indirizzo',
    email: 'per@donboscosandona.it',
    phone: '392 464 3689',
  },
  {
    name: 'Dopo la Campanella',
    role: 'Dott. Andrea Pasqualetto',
    phone: '391 706 4430',
  },
  {
    name: 'Cinema don Bosco',
    role: "Per informazioni sugli orari e l'acquisto dei biglietti, inviate pure un whatsapp al nostro numero",
    phone: '346 960 5687',
  },
]

let siti = [
  {
    title: 'Proposta Estate Ragazzi',
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
    title: 'Soggiorno Alpino Pierabech',
    immagineUrl: '/images/home/donboscopierabech.jpg',
    url: 'https://www.donboscopierabech.it',
  },
]
