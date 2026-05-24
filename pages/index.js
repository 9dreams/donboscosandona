 
import {
  Carousel,
  Certifications,
  Layout,
  LandingHero,
  Features,
  Products,
  Testimonials,
  Team,
  Maps,
  SwiperNews,
  Featured,
  Paragraph,
  Elements,
  Credits,
  Test,
  NewsWall,
  SyntheticLightHero,
} from '/components'

import INostriNumeri from '/cc/INostriNumeri'
import { slides, domande_test } from '../data/homePage'

// I punti di forza
const features = [
  {
    title: 'Pastorale',
    imageUrl:
      'https://archive.donboscosandona.it/img/ck/8a32ae923c77551e17262820251ee646d2b41fce.png',
    description:
      'Per diventare come insegna don Bosco "buoni cristiani e onesti cittadini".',
      url: '/pastorale'
  },
  {
    title: 'Progetto educativo',
    imageUrl:
      'https://archive.donboscosandona.it/img/ck/77e8fb59e0a23151c46936b674e3c9620c64ff3a.png',
    description:
      'Un progetto chiaro e affidabile per far crescere e diventare uomini. ',
      url: 'https://channels.donboscosandona.it/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBamdEIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--d34762c0a87f0670457a8db5239124cbc77efa99/Progetto%20Educativo%20(Rev.3_25.11.2025).pdf'
  },
  {
    title: 'Didattica attiva',
    imageUrl:
      'https://archive.donboscosandona.it/img/ck/c46d55012c575d41c5a23c8fa606cb0a5f67337f.png',
    description:
      'Lezioni attive e coinvolgenti per dimenticare la noia e partecipare da protagonisti.',
      url: '/didattica'
  },
  {
    title: 'Laboratori',
    imageUrl:
      'https://archive.donboscosandona.it/img/ck/1ecf12eb29bb3b57b1629de8376a3288d31c0f4a.png',
    description:
      "12 ore settimanali in laboratori tecnologicamente all'avanguardia per formare i professionisti del futuro.",
  },
  {
    title: 'Servizi al lavoro',
    imageUrl:
      'https://archive.donboscosandona.it/img/ck/d7e68e6fd443ca3d7573c81ae780ff8e6783ad99.png',
    description:
      "Orientamento, stage e alternanza, i nostri esperti ti accompagneranno fino all'effettivo inserimento nelle aziende del settore.",
    url: '/sal',
  },
]

let settori = [
  {
    title: 'Elettrico',
    category: 'QUALIFICA DI OPERATORE ELETTRICO',
    url: '/elettrico',
    description:
      'Installa ed effettua la manutenzione di impianti civili e industriali, sia con tecnologie tradizionali che automatizzate. Realizza la programmazione dei componenti domotici e dei controllori programmabili industriali.',
    immagineUrl:
      '/images/settori/elettrico.png',
  },
  {
    title: 'Energia',
    category: 'QUALIFICA DI OPERATORE DI IMPIANTI TERMO-IDRAULICI',
    url: '/energia',
    description:
      "Interviene nell'installazione, collaudo e manutenzione di impianti termici, idraulici, di condizionamento e fotovoltaici, con una particolare attenzione al risparmio energetico, anche grazie alla building automation.",
    immagineUrl:
      '/images/settori/energia.png',
  },
  {
    title: 'Informatico',
    category: 'DIPLOMA DI TECNICO INFORMATICO',
    url: '/informatico',
    description:
      "Installa e configura hardware e software, esegue la manutenzione di sistemi, reti e terminali utente, fornisce assistenza tecnica, effettua l'elaborazione e la manutenzione di dati su archivi digitali. Con il quarto anno in Sistema Duale diventa tecnico sviluppatore di Soluzioni Software.",
    immagineUrl:
      '/images/settori/informatico.png',
  },
  {
    title: 'Meccanico',
    category:
      'DIPLOMA DI TECNICO PER LA CONDUZIONE E LA MANUTENZIONE DI IMPIANTI AUTOMATIZZATI',
    url: '/meccanico',
    description:
      'Realizza lavorazioni al tornio, fresatrice e macchine utensili in generale. Partendo dal progetto realizzato con il CAD effettua la programmazione delle macchine a controllo numerico. Realizza saldature ad arco, TIG, MAG, taglio al plasma.',
    immagineUrl:
      '/images/settori/meccanico.png',
  },
  {
    title: 'Automotive',
    category: 'QUALIFICA DI OPERATORE ALLA RIPARAZIONE DI VEICOLI A MOTORE',
    url: '/automotive',
    description:
      "Effettua riparazioni e manutenzione dei motori e dell'autoveicolo in tutte le sue parti. Effettua diagnosi e prove sui gas di scarico intervenendo per risolvere le anomalie.",
    immagineUrl:
      '/images/settori/automotive.png',
  },
]

const testimonials = [
  {
    name: 'Michele Venturato',
    imageUrl:
      'https://i.postimg.cc/3NMjxmcp/Screenshot-2023-03-19-alle-16-36-15.png',
    text: "Grande scuola. Una vera scuola professionale e morale. Sforna ogni anno moltissimi tecnici aggiornati con I tempi e in grado di integrarsi con facilita' nel mondo del lavoro. Complimenti a tutto il sistema.",
    social: '@Google',
  },
  {
    imageUrl: '/images/home/recensioni/bob.png',
    name: 'Daniele M.',
    text: "Ho trovato l'ambiente molto accogliente e confortevole, grazie alla disponibilità di tutto il personale. In particolare, ho apprezzato la passione degli insegnanti, che si sono dimostrati molto competenti. Inoltre, ho avuto l'opportunità di partecipare ad attività extracurricolari e progetti che mi hanno permesso di sviluppare le mie capacità. Infine, consiglio questo istituto sottolineando l'importanza dello sviluppo e della scoperta dei propri talenti che è ciò che ci rende unici.",
    social: '@BOBTEK',
  },
  {
    imageUrl: '/images/home/recensioni/giacomo.png',
    name: 'Giacomo P.',
    text: 'In questi anni il don Bosco mi ha dato molto: gli insegnati lavorano con passione e trattano i propri alunni come dei veri amici, per qualsiasi tipo di problema sono sempre al tuo fianco ed è una cosa da non dare per nulla per scontata. La scuola aiuta molto ad inserirsi anche nel mondo del lavoro grazie alle esperienze acquisite nei vari laboratori ma soprattutto grazie alle esperienze di stage offerte. In questi anni ho ricevuto una formazione completa formandomi come lavoratore ma soprattutto come uomo.',
    social: '@PISTO',
  },
]

let certifications = [
  {
    logoUrl: '/images/certification/iso.png',
    text1: 'ISO 9001:2015',
    text2: 'Reg. n. 2593-A - Settore EA: 37',
  },
  {
    logoUrl: '/images/certification/kiwa.png',
    text1:
      'Progettazione ed erogazione di attività formative e di orientamento',
  },
  {
    logoUrl: '/images/certification/knx.png',
    text1: 'Authorised Training Center',
  },
  {
    logoUrl: '/images/certification/regioneveneto.png',
    text1: 'Formazione iniziale, continua, ',
    text2: 'superiore e orientamento',
  },
]

let link_utili = [
  {
    title: 'Regolamento allievi',
    description:
      'Il regolamento sottoscritto a inizio anno, che tutti gli allievi si impegnano a rispettare.',
    immagineUrl: '/images/home/regolamento.png',
    url: 'https://channels.donboscosandona.it/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBalFEIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--f729bfb33efb7d19edd4a88149189a466d19900f/D.13.1.3%20Regolamento%20Allievi%20(rev.2).pdf',
  },
  {
    title: 'ScuolaOnLine',
    description: 'Accesso al registro elettronico per genitori e allievi.',
    immagineUrl: '/images/home/scuolaonline.png',
    url: 'https://scuolaonline.soluzione-web.it/SOL_0264/',
  },
  {
    title: 'ORATORIO DON BOSCO',
    description:
      "La SFP DON BOSCO sorge all'interno dell'Oratorio don Bosco: visita il sito.",
    immagineUrl: '/images/home/inoratorio.png',
    url: 'https://cinema.donboscosandona.it',
  },
  {
    description:
      'La nostra Scuola ha anche un Cinema: scopri la programmazione.',
    immagineUrl: '/images/home/cinema_don_bosco.png',
    url: 'https://cinema.donboscosandona.it',
  },
]

export default function Home({ data, movies, elementi }) {
  return (
    <Layout>
      
      <SyntheticLightHero
        data={data}
        defaultTag='scuola'
        sponsorImage='/images/home/loghi_sponsor_new.png'
      />
      <NewsWall data={data} limit={7} defaultTag='scuola' />
      <a
        href='https://www.donboscoitalia.it/go-beyond-traditional-education/'
        target='_blank'
        rel='noopener noreferrer'
        className='mb-12 block w-full bg-black md:mb-16'
        aria-label='GO Beyond Traditional Education'
      >
        <img
          src='/images/gobeyond.png'
          alt='GO beyond traditional education'
          className='block w-full'
        />
      </a>
      <Products
        title='I settori'
        description="Un'ampia scelta di indirizzi professionali: scopri quello che ti accende di più!"
        cardWidth={4}
        cardWidthXs={12}
        products={settori}
      />
      <Test domande={domande_test} />
      <Featured
        data={elementi}
        limit={4}
        defaultTag='scuola'
        height={90}
      />
      <Elements
        data={elementi}
        limit={6}
        md={4}
        aspectRatio='3 / 2'
        borderRadius='10px'
      />  
      <INostriNumeri />
      <Carousel slides={slides} />
      <Features
        title='I nostri punti di forza'
        description='Scopri perché SFP DON BOSCO è davvero la scuola che fa al caso tuo!'
        features={features}
        cardWidth={3}
      />
      <SwiperNews title='Al cinema' data={movies} limit={12} />
      <Products cardWidth={3} products={link_utili} aspectRatio='4 / 2' />
      <Testimonials
        testimonials={testimonials}
        cardWidth={4}
        imageUrl='/images/home/recensioni/sfondo.jpg'
      />
      <Maps
        maxWidth='100%'
        maxHeight='550px'
        url='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5580.05343317009!2d12.5710658!3d45.6301996!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477956fe076b4157%3A0x29fb231d47465883!2sCnos%20Fap%20Don%20Bosco!5e0!3m2!1sit!2sit!4v1680507660807!5m2!1sit!2sit'
      />
      <Certifications cardWidth={3} certifications={certifications} />
      <div className='m-10'>
        <Credits />
      </div>
    </Layout>
  )
}

/* // This gets called on every request
export async function getServerSideProps() {
  const res = await fetch(
    'https://channels.donboscosandona.it/api/posts/donboscosandona'
  )
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
} */

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps() {
  let res = await fetch(
    'https://channels.donboscosandona.it/api/posts/inoratorio?q=scuola'
  )
  const data = await res.json()

  res = await fetch(
    'https://cinema.donboscosandona.it/movie/featured.json'
  )
  let movie_data = await res.json()
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
  
  res = await fetch(
    'https://channels.donboscosandona.it/api/posts/donboscosandona_elements'
  )
  const elementi = await res.json()

  return {
    props: { data, movies, elementi },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 minutes
    revalidate: 1200, // In secondi: il build viene fatto al massimo una volta ogni dieci minuti
  }
}
