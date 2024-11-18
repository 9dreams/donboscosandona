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
  Logos,
  Paragraph,
  Elements,
  Credits,
  Test,
} from '/components'

// I punti di forza
const features = [
  {
    title: 'Progetto educativo',
    imageUrl:
      'https://archive.donboscosandona.it/img/ck/77e8fb59e0a23151c46936b674e3c9620c64ff3a.png',
    description:
      'Un progetto chiaro e affidabile per far crescere e diventare uomini. ',
  },
  {
    title: 'Didattica attiva',
    imageUrl:
      'https://archive.donboscosandona.it/img/ck/c46d55012c575d41c5a23c8fa606cb0a5f67337f.png',
    description:
      'Lezioni attive e coinvolgenti per dimenticare la noia e partecipare da protagonisti.',
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
      'https://archive.donboscosandona.it/img/column/42480c58c90ada8ff75c443fdde83ae71fea75ac.jpg?1539529685',
  },
  {
    title: 'Energia',
    category: 'QUALIFICA DI OPERATORE DI IMPIANTI TERMO-IDRAULICI',
    url: '/energia',
    description:
      "Interviene nell'installazione, collaudo e manutenzione di impianti termici, idraulici, di condizionamento e fotovoltaici, con una particolare attenzione al risparmio energetico, anche grazie alla building automation.",
    immagineUrl:
      'https://archive.donboscosandona.it/img/column/417afaa0f0697f0f0aabf9ccf61030769cb76f14.jpg?1539529180',
  },
  {
    title: 'Informatico',
    category: 'DIPLOMA DI TECNICO INFORMATICO',
    url: '/informatico',
    description:
      "Installa e configura hardware e software, esegue la manutenzione di sistemi, reti e terminali utente, fornisce assistenza tecnica, effettua l'elaborazione e la manutenzione di dati su archivi digitali. Con il quarto anno in Sistema Duale diventa tecnico sviluppatore di Soluzioni Software.",
    immagineUrl:
      'https://archive.donboscosandona.it/img/column/97f264e9d16a0856dd2cb973630af1cac4426f73.jpg?1539529314',
  },
  {
    title: 'Meccanico',
    category:
      'DIPLOMA DI TECNICO PER LA CONDUZIONE E LA MANUTENZIONE DI IMPIANTI AUTOMATIZZATI',
    url: '/meccanico',
    description:
      'Realizza lavorazioni al tornio, fresatrice e macchine utensili in generale. Partendo dal progetto realizzato con il CAD effettua la programmazione delle macchine a controllo numerico. Realizza saldature ad arco, TIG, MAG, taglio al plasma.',
    immagineUrl:
      'https://archive.donboscosandona.it/img/column/b0bd034769ac3471bf375239f1e64e39f5684aa6.jpg?1539523300',
  },
  {
    title: 'Motoristico / Carrozzeria',
    category: 'QUALIFICA DI OPERATORE ALLA RIPARAZIONE DI VEICOLI A MOTORE',
    url: '/motoristico',
    description:
      "Effettua riparazioni e manutenzione dei motori e dell'autoveicolo in tutte le sue parti. Effettua diagnosi e prove sui gas di scarico intervenendo per risolvere le anomalie.",
    immagineUrl:
      'https://archive.donboscosandona.it/img/column/342f349c6bb5bbf9a37b95353df2bee2309b9792.jpg?1539524741',
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
    text1: 'Cod. A033 - Formazione Iniziale,',
    text2: 'Superiore e Orientamento',
  },
]

let link_utili = [
  {
    title: 'Regolamento',
    description:
      'Il regolamento sottoscritto a inizio anno, che tutti gli allievi si impegnano a rispettare.',
    immagineUrl: '/images/home/regolamento.png',
    url: 'https://channels.donboscosandona.it/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBWQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--96c2ed50875db2d6bc536633e55dab4b1d4c1288/Regolamento%20San%20Dona%CC%80%20Settembre%202023.pdf',
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
      <Featured data={data} defaultTag='scuola' />
      <Logos url='/images/home/loghi_sponsor.png' />
      <Test domande={domande_test} />
      <Featured
        data={elementi}
        limit={4}
        defaultTag='scuola'
        height={90}
      />
      <SwiperNews title='News' data={data} limit={12} defaultTag='scuola' />
      <Elements
        data={elementi}
        limit={6}
        md={4}
        aspectRatio='3 / 2'
        borderRadius='10px'
      />
      <Products
        title='I settori'
        description="Un'ampia scelta di indirizzi professionali: scopri quello che ti accende di più!"
        cardWidth={4}
        cardWidthXs={12}
        products={settori}
      />
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

let slides = [
  {
    titolo: 'Visita virtuale',
    descrizione:
      'Scopri tutti i segreti della nostra Scuola con il tour virtuale!',
    immagine: '/images/home/vr.webp',
    buttonText: 'Inizia il tour',
    buttonUrl: 'https://archive.donboscosandona.it/virtual-tour/index.htm',
  },
]

let classi = [
  { classe: '1A', punti: '538' },
  { classe: '1B', punti: '548' },
  { classe: '1C', punti: '528' },
  { classe: '1D', punti: '487' },
  { classe: '1E', punti: '531' },
  { classe: '1F', punti: '567' },
  { classe: '2A', punti: '502' },
  { classe: '2B', punti: '441' },
  { classe: '2C', punti: '460' },
  { classe: '2D', punti: '532' },
  { classe: '2E', punti: '434' },
  { classe: '2F', punti: '529' },
  { classe: '3A', punti: '460' },
  { classe: '3B', punti: '452' },
  { classe: '3C', punti: '390' },
  { classe: '3D', punti: '552' },
  { classe: '3E', punti: '481' },
  { classe: '3F', punti: '569' },
  { classe: '4A', punti: '490' },
  { classe: '4B', punti: '486' },
]


let domande_test = [
  {
    domanda: 'Cosa faresti se trovassi un robot rotto?',
    immagine: '/images/test/1.jpg',
    a: {
      risposta: 'Lo riparerei immediatamente usando il mio fidato cacciavite sonico!',
      elettrico: 0,
      energia: 0,
      informatico: 0,
      meccanico: 3,
      motoristico: 0,
    },
    b: {
      risposta: 'Lo programmerei per farmi il caffè e pulire la casa.',
      elettrico: 0,
      energia: 0,
      informatico: 3,
      meccanico: 0,
      motoristico: 0,
    },
    c: {
      risposta: 'Lo collegherei a una presa di corrente ad alta tensione per vedere cosa succede.',
      elettrico: 3,
      energia: 1,
      informatico: 0,
      meccanico: 0,
      motoristico: 0,
    },
  },
  {
    domanda: 'Qual è il tuo strumento preferito?',
    immagine: '/images/test/2.jpg',
    a: {
      risposta: 'Un potente computer connesso a Internet.',
      elettrico: 0,
      energia: 0,
      informatico: 3,
      meccanico: 0,
      motoristico: 0,
    },
    b: {
      risposta: 'Un set di chiavi inglesi di ogni dimensione.',
      elettrico: 0,
      energia: 0,
      informatico: 0,
      meccanico: 3,
      motoristico: 0,
    },
    c: {
      risposta: 'Un multimetro digitale per misurare tensioni e correnti.',
      elettrico: 3,
      energia: 0,
      informatico: 0,
      meccanico: 0,
      motoristico: 0,
    },
  },
  {
    domanda: 'Cosa ti piace fare nel tempo libero?',
    immagine: '/images/test/3.jpg',
    a: {
      risposta: 'Smontare e rimontare motori di auto e moto.',
      elettrico: 0,
      energia: 0,
      informatico: 0,
      meccanico: 1,
      motoristico: 3,
    },
    b: {
      risposta: 'Creare siti web e applicazioni mobili.',
      elettrico: 0,
      energia: 0,
      informatico: 3,
      meccanico: 0,
      motoristico: 0,
    },
    c: {
      risposta: 'Progettare impianti elettrici per case intelligenti.',
      elettrico: 3,
      energia: 1,
      informatico: 0,
      meccanico: 0,
      motoristico: 0,
    },
  },
  {
    domanda: 'Quale di queste materie ti piace di più?',
    immagine: '/images/test/4.jpg',
    a: {
      risposta: 'Fisica, con particolare attenzione all^elettromagnetismo.',
      elettrico: 3,
      energia: 1,
      informatico: 0,
      meccanico: 0,
      motoristico: 0,
    },
    b: {
      risposta: 'Informatica, con particolare attenzione alla programmazione.',
      elettrico: 0,
      energia: 0,
      informatico: 3,
      meccanico: 0,
      motoristico: 0,
    },
    c: {
      risposta: 'Meccanica, con particolare attenzione al disegno tecnico.',
      elettrico: 0,
      energia: 0,
      informatico: 0,
      meccanico: 3,
      motoristico: 0,
    },
  },
  {
    domanda: 'Cosa ti affascina di più?',
    immagine: '/images/test/5.jpg',
    a: {
      risposta: 'Il funzionamento di motori a combustione interna.',
      elettrico: 0,
      energia: 0,
      informatico: 0,
      meccanico: 0,
      motoristico: 3,
    },
    b: {
      risposta: 'La creazione di software innovativi.',
      elettrico: 0,
      energia: 0,
      informatico: 3,
      meccanico: 0,
      motoristico: 0,
    },
    c: {
      risposta: 'La produzione di energia da fonti rinnovabili.',
      elettrico: 0,
      energia: 3,
      informatico: 0,
      meccanico: 0,
      motoristico: 0,
    },
  },
  {
    domanda: 'Se potessi avere un superpotere, quale sceglieresti?',
    immagine: '/images/test/6.jpg',
    a: {
      risposta: 'Controllare ogni macchina con la mente',
      elettrico: 0,
      energia: 0,
      informatico: 0,
      meccanico: 2,
      motoristico: 3,
    },
    b: {
      risposta: 'Teletrasportarmi in qualsiasi circuito elettrico',
      elettrico: 3,
      energia: 0,
      informatico: 0,
      meccanico: 0,
      motoristico: 0,
    },
    c: {
      risposta: 'Hackerare qualsiasi sistema con un battito di ciglia',
      elettrico: 0,
      energia: 0,
      informatico: 3,
      meccanico: 0,
      motoristico: 0,
    },
  },
  {
    domanda: 'Qual è il tuo gioco da tavolo preferito?',
    immagine: '/images/test/7.jpg',
    a: {
      risposta: 'Scacchi, per le sue strategie complesse',
      elettrico: 0,
      energia: 1,
      informatico: 2,
      meccanico: 0,
      motoristico: 0,
    },
    b: {
      risposta: 'Monopoli, per la gestione oculata delle risorse',
      elettrico: 0,
      energia: 2,
      informatico: 1,
      meccanico: 0,
      motoristico: 0,
    },
    c: {
      risposta: 'Meccano, per costruire incredibili strutture',
      elettrico: 0,
      energia: 0,
      informatico: 0,
      meccanico: 3,
      motoristico: 0,
    },
  },
  {
    domanda: 'Dove ti piacerebbe fare un viaggio?',
    immagine: '/images/test/8.jpg',
    a: {
      risposta: 'In una centrale elettrica all^avanguardia',
      elettrico: 0,
      energia: 3,
      informatico: 0,
      meccanico: 0,
      motoristico: 0,
    },
    b: {
      risposta: 'Alla Silicon Valley per visitare le aziende tech più famose',
      elettrico: 0,
      energia: 0,
      informatico: 3,
      meccanico: 0,
      motoristico: 0,
    },
    c: {
      risposta: 'A Maranello per vedere da vicino la produzione di auto sportive',
      elettrico: 0,
      energia: 0,
      informatico: 0,
      meccanico: 0,
      motoristico: 3,
    },
  },
  {
    domanda: 'Quale animale ti rappresenta meglio?',
    immagine: '/images/test/9.jpg',
    a: {
      risposta: 'Un\'aquila, per la sua vista acuta che individua ogni dettaglio',
      elettrico: 1,
      energia: 0,
      informatico: 0,
      meccanico: 2,
      motoristico: 0,
    },
    b: {
      risposta: 'Un formichiere, instancabile e preciso nel suo lavoro',
      elettrico: 2,
      energia: 1,
      informatico: 0,
      meccanico: 0,
      motoristico: 0,
    },
    c: {
      risposta: 'Un delfino, che comunica con i suoi simili in modo efficiente',
      elettrico: 0,
      energia: 0,
      informatico: 3,
      meccanico: 0,
      motoristico: 0,
    },
  },
  {
    domanda: 'Come ti descriveresti?',
    immagine: '/images/test/10.jpg',
    a: {
      risposta: 'Curioso e con la passione per capire come funzionano le cose',
      elettrico: 2,
      energia: 0,
      informatico: 0,
      meccanico: 2,
      motoristico: 0,
    },
    b: {
      risposta: 'Logico e analitico, con la capacità di risolvere problemi complessi',
      elettrico: 0,
      energia: 0,
      informatico: 3,
      meccanico: 0,
      motoristico: 0,
    },
    c: {
      risposta: 'Creativo e con la voglia di sperimentare nuove soluzioni',
      elettrico: 0,
      energia: 2,
      informatico: 0,
      meccanico: 0,
      motoristico: 1,
    },
  },
  {
    domanda: 'Cosa faresti se vincessi un milione di euro?',
    immagine: '/images/test/11.jpg',
    a: {
      risposta: 'Investirei in un^officina super accessoriata',
      elettrico: 0,
      energia: 0,
      informatico: 0,
      meccanico: 3,
      motoristico: 2,
    },
    b: {
      risposta: 'Creerei una startup innovativa nel settore tecnologico',
      elettrico: 0,
      energia: 0,
      informatico: 3,
      meccanico: 0,
      motoristico: 0,
    },
    c: {
      risposta: 'Finanziererei la ricerca sulle energie rinnovabili',
      elettrico: 0,
      energia: 3,
      informatico: 0,
      meccanico: 0,
      motoristico: 0,
    },
  },
  {
    domanda: 'Quale film ti è piaciuto di più?',
    immagine: '/images/test/12.jpg',
    a: {
      risposta: '"Fast and Furious", per le scene di corse adrenaliniche',
      elettrico: 0,
      energia: 0,
      informatico: 0,
      meccanico: 0,
      motoristico: 3,
    },
    b: {
      risposta: '"The Matrix", per gli effetti speciali e la realtà virtuale',
      elettrico: 0,
      energia: 0,
      informatico: 3,
      meccanico: 0,
      motoristico: 0,
    },
    c: {
      risposta: '"Iron Man", per le invenzioni tecnologiche del protagonista',
      elettrico: 2,
      energia: 0,
      informatico: 0,
      meccanico: 2,
      motoristico: 0,
    },
  },
  {
    domanda: 'Cosa ti appassiona di più del futuro?',
    immagine: '/images/test/13.jpg',
    a: {
      risposta: 'L\'evoluzione dei motori e dei sistemi di trasporto',
      elettrico: 0,
      energia: 0,
      informatico: 0,
      meccanico: 0,
      motoristico: 3,
    },
    b: {
      risposta: 'Lo sviluppo dell^intelligenza artificiale',
      elettrico: 0,
      energia: 0,
      informatico: 3,
      meccanico: 0,
      motoristico: 0,
    },
    c: {
      risposta: 'La diffusione delle smart city e delle case intelligenti',
      elettrico: 2,
      energia: 2,
      informatico: 0,
      meccanico: 0,
      motoristico: 0,
    },
  },
  {
    domanda: 'Se fossi un personaggio di un videogioco, quale saresti?',
    immagine: '/images/test/14.jpg',
    a: {
      risposta: 'Un ingegnere che costruisce robot giganti',
      elettrico: 0,
      energia: 0,
      informatico: 0,
      meccanico: 3,
      motoristico: 0,
    },
    b: {
      risposta: 'Un hacker che si infiltra nei sistemi informatici più protetti',
      elettrico: 0,
      energia: 0,
      informatico: 3,
      meccanico: 0,
      motoristico: 0,
    },
    c: {
      risposta: 'Un pilota di Formula 1 che sfreccia a velocità supersonica',
      elettrico: 0,
      energia: 0,
      informatico: 0,
      meccanico: 0,
      motoristico: 3,
    },
  },
  {
    domanda: 'Qual è il tuo motto?',
    immagine: '/images/test/15.jpg',
    a: {
      risposta: '"Se non funziona, smontalo e rimontalo!"',
      elettrico: 0,
      energia: 0,
      informatico: 0,
      meccanico: 3,
      motoristico: 0,
    },
    b: {
      risposta: '"C\'è sempre una soluzione, basta trovare il codice giusto!"',
      elettrico: 0,
      energia: 0,
      informatico: 3,
      meccanico: 0,
      motoristico: 0,
    },
    c: {
      risposta: '"Il futuro è energia pulita e innovazione!"',
      elettrico: 0,
      energia: 3,
      informatico: 0,
      meccanico: 0,
      motoristico: 0,
    },
  },
  {
    domanda: 'Quale di queste attività ti attira di più?',
    immagine: '/images/test/16.jpg',
    a: {
      risposta: 'Progettare e costruire un sistema di irrigazione automatico per un giardino',
      elettrico: 2,
      energia: 0,
      informatico: 0,
      meccanico: 2,
      motoristico: 0,
    },
    b: {
      risposta: 'Sviluppare un^app per monitorare i consumi energetici di una casa',
      elettrico: 0,
      energia: 2,
      informatico: 2,
      meccanico: 0,
      motoristico: 0,
    },
    c: {
      risposta: 'Riparare un motore diesel di ultima generazione',
      elettrico: 0,
      energia: 0,
      informatico: 0,
      meccanico: 1,
      motoristico: 3,
    },
  },
  {
    domanda: 'Se dovessi scegliere un corso di specializzazione, quale sarebbe?',
    immagine: '/images/test/17.jpg',
    a: {
      risposta: ' Tecniche di programmazione di PLC per l^automazione industriale  ',
      elettrico: 3,
      energia: 0,
      informatico: 1,
      meccanico: 0,
      motoristico: 0,
    },
    b: {
      risposta: 'Gestione efficiente dell\'energia negli edifici',
      elettrico: 0,
      energia: 3,
      informatico: 0,
      meccanico: 0,
      motoristico: 0,
    },
    c: {
      risposta: 'Diagnostica avanzata per motori a combustione interna',
      elettrico: 0,
      energia: 0,
      informatico: 0,
      meccanico: 0,
      motoristico: 3,
    },
  },
  {
    domanda: 'Cosa ti piacerebbe costruire con le tue mani?',
    immagine: '/images/test/18.jpg',
    a: {
      risposta: 'Un robot in grado di svolgere compiti domestici',
      elettrico: 0,
      energia: 0,
      informatico: 2,
      meccanico: 2,
      motoristico: 0,
    },
    b: {
      risposta: 'Un impianto fotovoltaico per la produzione di energia pulita',
      elettrico: 1,
      energia: 3,
      informatico: 0,
      meccanico: 0,
      motoristico: 0,
    },
    c: {
      risposta: 'Un modellino di auto da corsa perfettamente funzionante',
      elettrico: 0,
      energia: 0,
      informatico: 0,
      meccanico: 2,
      motoristico: 2,
    },
  },
  {
    domanda: 'In quale di questi ambienti ti vedi a lavorare in futuro?',
    immagine: '/images/test/19.jpg',
    a: {
      risposta: 'In un\'azienda che si occupa di progettazione di software per la domotica',
      elettrico: 2,
      energia: 0,
      informatico: 2,
      meccanico: 0,
      motoristico: 0,
    },
    b: {
      risposta: 'In un laboratorio di ricerca sulle nuove tecnologie energetiche',
      elettrico: 0,
      energia: 3,
      informatico: 0,
      meccanico: 0,
      motoristico: 0,
    },
    c: {
      risposta: 'In un\'officina specializzata nella riparazione di veicoli elettrici',
      elettrico: 2,
      energia: 0,
      informatico: 0,
      meccanico: 0,
      motoristico: 2,
    },
  },
  {
    domanda: 'Quale problema ti piacerebbe contribuire a risolvere?',
    immagine: '/images/test/20.jpg',
    a: {
      risposta: 'La riduzione delle emissioni inquinanti nel settore dei trasporti',
      elettrico: 0,
      energia: 2,
      informatico: 0,
      meccanico: 0,
      motoristico: 2,
    },
    b: {
      risposta: 'Il miglioramento dell^efficienza energetica degli elettrodomestici',
      elettrico: 2,
      energia: 2,
      informatico: 0,
      meccanico: 0,
      motoristico: 0,
    },
    c: {
      risposta: 'Lo sviluppo di sistemi di intelligenza artificiale per la sicurezza informatica',
      elettrico: 0,
      energia: 0,
      informatico: 3,
      meccanico: 0,
      motoristico: 0,
    },
  },
]