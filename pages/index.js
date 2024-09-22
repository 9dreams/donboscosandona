import { Container, Grid, Typography } from '@mui/material'
import {
  Carousel,
  Certifications,
  Layout,
  LandingHero,
  Features,
  Products,
  Calendar,
  Testimonials,
  Team,
  Maps,
  Paragraph,
  Table,
  News,
  SwiperNews,
  Featured,
  NavBar,
  Logos,
  Sponsor,
  Elements,
} from '/components'

export default function Home({ data, elementi }) {
  return (
    <Layout>
      <Featured data={data} limit={4} defaultTag='' />
      <Paragraph title='Chi sono' avatarImageUrl='/images/martina.png'>
        Sono Martina Dianese, Orientatrice Asnor, Educatrice e Pedagogista
        Clinico , operativa nei riguardi di tutti coloro che devono fronteggiare
        scelte di vita, come l’indirizzo scolastico o universitario futuro,
        oppure lavorativo, di inserimento o reinserimento lavorativo per
        inoccupati, disoccupati di breve o lunga durata. Per più di dieci anni
        ho collaborato con un Centro di Formazione professionale che mi ha vista
        responsabile dell’orientamento in entrata, in itinere ed in uscita di
        giovani, ma anche operatrice dei Servizi al Lavoro. Nel corso degli anni
        ho seguito diversi progetti nella rete di Orientamento e Territorio
        gestendo spazi ascolto e laboratori di orientamento individuale. Ho
        seguito il Programma FIxO – di Italia Lavoro s.p.a. – Progetto
        Formazione ed Innovazione per l’Occupazione – Azioni in favore dei
        giovani NEET in transizione istruzione-lavoro e volte al sostegno dello
        sviluppo di placement nelle scuole, università e nei centri di
        formazione professionale. Il mio obiettivo è quello di mettere in atto
        una vera azione orientativa nei confronti degli utenti, comprendendone i
        bisogni, i contesti, le competenze ed i progetti. Stabilire cioè una
        relazione educativo-formativa con gli individui coinvolti in questo
        percorso e stimolare un atteggiamento critico-riflessivo e
        autoriflessivo nel loro percorso emancipatorio.
      </Paragraph>
      <Paragraph title='Cosa faccio'>
        Come Orientatrice Asnor, il mio scopo è quello di diffondere e sostenere
        la cultura dell’orientamento nel mondo della scuola, dell’università e
        del lavoro, secondo il principio che ogni persona è una risorsa per sé e
        per il mondo. Utilizzando strumenti appartenenti alla mia professione
        con attività individuali e di gruppo, la persona da orientare viene
        accompagnata in un processo di autoconsapevolezza fino alla costruzione
        di una propria visione di vita individuale. La finalità dell’orientatore
        è quello insomma di sostenere la persona, di qualsiasi età, nelle fasi
        di transizione, quando cioè si trova di fronte alla necessità di
        prendere decisioni importanti quali il percorso scolastico,
        universitario o professionale.
      </Paragraph>
      <SwiperNews
        title='Articoli recenti'
        data={data}
        limit={6}
        defaultTag=''
      />
      <Products
        title='Servizi offerti'
        description=''
        cardWidth={4}
        cardWidthXs={12}
        products={servizi}
      />

      <Maps
        maxWidth='100%'
        maxHeight='550px'
        url='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1069.8936552382524!2d12.5636879111439!3d45.63104334408461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sit!2sit!4v1726416979794!5m2!1sit!2sit'
      />
    </Layout>
  )
}

export async function getStaticProps() {
  let res = await fetch(
    'https://channels.donboscosandona.it/api/posts/planyourlife'
  )
  const data = await res.json()

  res = await fetch(
    'https://channels.donboscosandona.it/api/posts/donboscosandona_elements'
  )
  const elementi = await res.json()

  return {
    props: { data, elementi },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 minutes
    revalidate: 1800, // In secondi: il build viene fatto al massimo una volta ogni mezzora
  }
}

// I punti di forza
const features = [
  {
    title: 'Progetto educativo',
    imageUrl:
      'https://teamtrex.com.au/wp-content/uploads/2021/06/Strength-icon.png',
    description:
      'Un progetto chiaro e affidabile per far crescere e diventare uomini. ',
    url: 'https://cinema.donboscosandona.it',
  },
  {
    title: 'Didattica attiva',
    imageUrl:
      'https://teamtrex.com.au/wp-content/uploads/2021/06/Strength-icon.png',
    description:
      'Lezioni attive e coinvolgenti per dimenticare la noia e partecipare da protagonisti.',
  },
  {
    title: 'Laboratori',
    imageUrl:
      'https://teamtrex.com.au/wp-content/uploads/2021/06/Strength-icon.png',
    description:
      "12 ore settimanali in laboratori tecnologicamente all'avanguardia per formare i professionisti del futuro.",
  },
  {
    title: 'Servizi al lavoro',
    imageUrl:
      'https://teamtrex.com.au/wp-content/uploads/2021/06/Strength-icon.png',
    description:
      "Orientamento, stage e alternanza, i nostri esperti ti accompagneranno fino all'effettivo inserimento nelle aziende del settore.",
  },
]

// slides per il carousel
let slides = [
  {
    titolo: 'Fatti un bel giro',
    descrizione:
      'Scopri tutti i segreti del nostro Centro con il tour virtuale!',
    immagine:
      'https://www.wallpapermania.eu/images/lthumbs/2013-01/4170_Love-between-animals-true-love.jpg',
    colore: '#ED4C67',
    colore2: 'rgba(100,100,100,0)',
    opacity: 0.8,
    blur: '0.5rem',
    buttonText: 'Scopri di più!',
    buttonUrl: 'https:...',
  },
  {
    titolo: 'Concorso nazionale settore elettrico',
    descrizione:
      "A maggio il nostro Centro avrà l'onore di ospitare il Concorso Nazionale del Settore Elettrico: tutti i Centri di Formazione Professionale salesiani d'Italia invieranno i loro campioni per una settimana di sfida e condivisione professionale...",
    colore: '#22aa22',
  },
]

// Il nostro team
let members = [
  {
    name: 'Martina Dianese',
    role: 'Orientatrice',
    description: 'And I love you like Kanye',
    description1: 'loves Kanye. We need to restart the human foundation',
    imageUrl: '/images/martina.png',
    email: 'info@planyourlife.it',
    phone: '0421 3388949874950',
  },
]

let servizi = [
  {
    title: 'Orientamento Professionale',
    description:
      'Il Career Guidance è ciò che guida la persona nella presa di consapevolezza delle proprie abilità personali e competenze e lo sostiene nella ricerca attiva del lavoro. Attraverso strumenti propri dell’orientamento si costruisce un profilo professionale personalizzato, con i propri punti di forza e di debolezza, si chiarifica il tipo di lavoro ed azienda adeguato al tale profilo, quali sono le priorità lavorative e la propria concezione di lavoro. Si stabilisce insomma una tabella di marcia per il raggiungimento dei propri obiettivi e si acquisiscono le conoscenze necessarie per la crescita professionale Si viene affiancati nella stesura del cv, nella preparazione al colloquio di lavoro e nella sua ricerca attiva nel territorio.',
    immagineUrl:
      '/images/orientamento_professionale.jpg',
  },
  {
    title: 'Orientamento Scolastico',
    description:
      'Come orientarsi nella scelta della scuola superiore? Quando iniziare a guardarsi intorno ? Come fare a capire se la scelta che sto facendo è quella giusta? Queste e molte altre sono domande che ogni giorno mi vengono rivolte e dare la risposta è il risultato di un percorso complesso , che porta bambini e studenti ad acquisire una corretta visione di sé, delle proprie potenzialità ed attitudini al fine di fare una scelta consapevole ed in linea con le proprie risorse personali. Questo tipo di attività aiuta non solo a chiarire le opzioni educative disponibili, ma può anche impedire che vengano fatte scelte sbagliate che potrebbero portare frustrazione e conseguente dispersione scolastica. I ragazzi vengono incoraggiati  ad esplorare le proprie capacità accademiche e non, aprendosi a nuove opportunità ed idee per arrivare alla costruzione di un progetto di vita ad hoc.',
    immagineUrl:
      '/images/orientamento_scolastico.png',
  },
  {
    title: 'Orientamento Universitario',
    description:
      'L’orientamento universitario è una tappa cruciale che concretizza sempre di più il percorso di vita della persona e pertanto deve essere fatta con adeguata consapevolezza ed attenzione. Non si tratta soltanto di scegliere una facoltà, ma si colloca all’interno del percorso di formazione continua che caratterizza ciascun individuo. E’ un fondamentale collegamento tra la scuola superiore ed il futuro professionale, pertanto deve assumere un adeguato significato. La finalità dell’orientamento universitario è la medesima di tutti i luoghi dell’orientamento: consentire alla persona di acquisire sempre maggior consapevolezza del proprio valore e del proprio essere.',
    immagineUrl:
      '/images/orientamento_universitario.png',
  },
]

const testimonials = [
  {
    name: 'Michele Venturato',
    imageUrl:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
    text: "Grande scuola. Una vera scuola professionale e morale. Sforna ogni anno moltissimi tecnici aggiornati con I tempi e in grado di integrarsi con facilita' nel mondo del lavoro. Complimenti a tutto il sistema.",
    social: '@Google',
  },
  {
    imageUrl:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
    name: 'Daniele Mladenovic',
    text: "Ho trascorso alcuni anni presso il CFP e ho trovato l'ambiente molto accogliente e confortevole, grazie alla disponibilità di tutto il personale. In particolare, ho apprezzato la passione degli insegnanti, che si sono dimostrati molto competenti. Inoltre, ho avuto l'opportunità di partecipare ad attività extracurricolari e progetti che mi hanno permesso di sviluppare le mie capacità. Infine, consiglio questo istituto sottolineando l'importanza dello sviluppo e della scoperta dei propri talenti che è ciò che ci rende unici.",
    social: '@BOBTEK',
  },
  {
    imageUrl:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
    name: 'Pino West',
    text: "Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione ",
    social: '@PINOWEST',
  },
]

let prodotti2 = [
  {
    immagineUrl:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    url: 'https://cinema.donboscosandona.it',
  },
]

let certifications = [
  {
    logoUrl:
      'https://seeklogo.com/images/C/CERMET_SINCERT-logo-129ABB30BE-seeklogo.com.png',
    text1: 'ISO 9001:2015',
    text2: 'Reg. n. 2593-A - Settore EA: 37',
  },
  {
    logoUrl:
      'https://seeklogo.com/images/C/CERMET_SINCERT-logo-129ABB30BE-seeklogo.com.png',
    text1:
      'Progettazione ed erogazione di attività formative e di orientamento',
  },
  {
    logoUrl:
      'https://seeklogo.com/images/C/CERMET_SINCERT-logo-129ABB30BE-seeklogo.com.png',
    text1: 'Authorised Training Center',
  },
  {
    logoUrl:
      'https://seeklogo.com/images/C/CERMET_SINCERT-logo-129ABB30BE-seeklogo.com.png',
    text1: 'Cod. A033 - Formazione Iniziale,',
    text2: 'Superiore e Orientamento',
  },
]

let date = [
  {
    date: '15 Giugno',
    afternoon: 'Inizio medie',
    evening: 'Serata film',
    immagineUrl:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    url: '/elettrico',
  },
  {
    date: '15 Giugno',
    morning: 'Inizio elementari',
    afternoon: 'Inizio medie',
    evening: 'Serata film',
    immagineUrl:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    url: '/elettrico',
    bgColor: '#ee5253',
  },
  {
    date: '15 Giugno',
    morning: 'Inizio elementari',
    afternoon: 'Inizio medie',
    immagineUrl:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    url: '/elettrico',
  },
  {
    date: '15 Giugno',
    morning: 'Inizio elementari',
    immagineUrl:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    url: '/elettrico',
  },
  {
    date: '15 Giugno',
    morning: 'Inizio elementari',
    afternoon: 'Inizio medie',
    immagineUrl:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    url: '/elettrico',
  },
  {
    date: '15 Giugno',
    morning: 'Inizio elementari',
    immagineUrl:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    url: '/elettrico',
  },
]

let sponsor = [
  'https://agsol.com/wp-content/uploads/2018/09/new-microsoft-logo-SIZED-SQUARE.jpg',
  'https://assets.ubuntu.com/v1/57a889f6-ubuntu-logo112.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1200px-Cisco_logo_blue_2016.svg.png',
  'https://dev.socialidnow.com/images/9/94/Mikrotik-logo.png',
  'https://www.raspberrypi.org/app/uploads/2018/03/RPi-Logo-Reg-SCREEN.png',
  'https://www.arduino.cc/en/uploads/Trademark/ArduinoCommunityLogo.png',
  'https://images-eu.ssl-images-amazon.com/images/I/413W%2BhcdyEL.png',
  'https://www.comitec.it/img/logo.png?v=1.1',
  'https://archive.donboscosandona.it/img/ck/1e0a315dbf7a64beb118a36bbc2148c8d20f55a3.png',
]
