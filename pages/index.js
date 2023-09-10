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
    description:
      "Installa e configura hardware e software, esegue la manutenzione di sistemi, reti e terminali utente, fornisce assistenza tecnica, effettua l'elaborazione e la manutenzione di dati su archivi digitali. Con il quarto anno in Sistema Duale diventa tecnico sviluppatore di Soluzioni Software.",
    immagineUrl:
      'https://archive.donboscosandona.it/img/column/97f264e9d16a0856dd2cb973630af1cac4426f73.jpg?1539529314',
  },
  {
    title: 'Meccanico',
    category:
      'DIPLOMA DI TECNICO PER LA CONDUZIONE E LA MANUTENZIONE DI IMPIANTI AUTOMATIZZATI',
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

let postInEvidenza = {
  titolo: 'Le folli notti di Bilal',
  descrizione:
    'Il dott. Bilal, noto migliardario pieno di schèi, passa le sue notti tra belle ragazze e partite a poker. Come inviati di donboscosandona siamo riusciti ad accedere a questo mondo esclusivo per raccontarvelo in prima persona...',
  immagineUrl:
    'https://media.istockphoto.com/id/522728130/it/foto/amici-divertirsi-giocando-a-poker.jpg?s=612x612&w=is&k=20&c=w2_p0SHrR_-cmURmZY9-dHXu3-qqVqN9QkdiZrgJpfc=',
  testoimmagineUrl: 'Bilal seduto su un divanetto in mezzo a due tipe.',
  testoUrl: 'Continua a leggere e scopri la cosa pazzesca che hanno fatto...',
}

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

export default function Home({ data }) {
  return (
    <Layout>
      <Featured data={data} />
      <SwiperNews title='News' data={data} limit={8} />
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
    revalidate: 3600, // In secondi: il build viene fatto al massimo una volta all'ora
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
