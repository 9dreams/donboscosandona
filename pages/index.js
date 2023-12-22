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
  Torneo,
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
    description:
      'Installa ed effettua la manutenzione di impianti civili e industriali, sia con tecnologie tradizionali che automatizzate. Realizza la programmazione dei componenti domotici e dei controllori programmabili industriali.',
    immagineUrl:
      'https://archive.donboscosandona.it/img/column/42480c58c90ada8ff75c443fdde83ae71fea75ac.jpg?1539529685',
  },
  {
    title: 'Energia',
    category: 'QUALIFICA DI OPERATORE DI IMPIANTI TERMO-IDRAULICI',
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

let bottoni = [
  {
    title: 'Sabato 25 novembre, 16 dicembre e 13 gennaio',
    description: 'Dalle 14.30 alle 17.30: vieni a visitare la nostra scuola!',
    immagineUrl: '/images/home/sfp-donbosco.jpg',
    url: 'https://forms.gle/Zney1K244XaXoV8D8',
  },
  {
    title: 'Lunedì 11 dicembre e lunedì 15 gennaio',
    description:
      "Prova per un pomeriggio i nostri settori dell'Area Elettrica/Energetica/Informatica o di quella Meccanica/Motoristica.",
    immagineUrl: '/images/home/lab.jpg',
    url: 'https://turni.inoratorio.it/shifts?group_id=7&key=lfdja4shjf2',
  },
]

export default function Home({ data }) {
  return (
    <Layout>
      <Featured data={data} />
      <Logos url='/images/home/loghi_sponsor.png' />
      <Products
        products={bottoni}
        cardWidth={6}
        cardWidthXs={14}
        aspectRatio={'3.5 / 2'}
      />
      <SwiperNews title='News' data={data} limit={12} />
      <Torneo classi={classi} />
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
  const res = await fetch(
    'https://channels.donboscosandona.it/api/posts/donboscosandona'
  )
  const data = await res.json()

  return {
    props: { data },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 minutes
    revalidate: 600, // In secondi: il build viene fatto al massimo una volta ogni dieci minuti
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
