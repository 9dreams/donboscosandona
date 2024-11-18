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
  Credits,
  Test,
} from '/components'

export default function Home({ data, elementi }) {
  return (
    <Layout>
      <LandingHero
        opacity={0.5}
        title='Progetto educativo'
        description='Diventa adulto con il metodo educativo di don Bosco preparandoti ad entrare a testa alta nel mondo professionale di domani!'
        buttonUrl='j'
        buttonText='Guarda il video'
        imageUrl='https://source.unsplash.com/random'
      />

      <Logos url='https://archive.donboscosandona.it/img/ck/20b01b69c5c5586ea921a398e557a7767d004959.png' />
      <div>
      <Test domande={domande_test} />
      </div>
      <Calendar
        title='Una settimana di allegria'
        description='Scopri tutti gli eventi'
        cardWidth={3}
        events={date}
      />
      <Featured data={data} limit={4} defaultTag='scuola' />
      <Featured data={elementi} limit={4} defaultTag='scuola' height={90} />
      <News title='News' data={data} limit={4} />
      <Container>
        <h1 className='bg-teal-500 text-yellow-500 p-6 text-3xl font-bold underline'>
          Prova Tailwind
        </h1>
      </Container>

      <Elements
        data={elementi}
        limit={6}
        md={4}
        aspectRatio='3 / 2'
        borderRadius='10px'
      />
      <SwiperNews title='News' data={data} limit={6} defaultTag='scuola' />

      <Carousel slides={slides} />

      <Products
        title='I prodotti'
        description="Un'ampia scelta di indirizzi professionali: scopri quello che ti accende di più!"
        cardWidth={4}
        cardWidthXs={12}
        products={prodotti}
      />
      <Products
        title='Prodotti con sole immagini'
        description="Un'ampia scelta di indirizzi professionali: scopri quello che ti accende di più!"
        cardWidth={4}
        cardWidthXs={12}
        aspectRatio='2.5 / 1'
        products={prodotti2}
      />
      <Products
        cardWidth={4}
        cardWidthXs={12}
        aspectRatio='2.5 / 1'
        products={prodotti2}
      />
      <Features
        title='I nostri punti di forza'
        description='Scopri perché il CFP DON BOSCO è davvero la scuola che fa al caso tuo!'
        features={features}
        cardWidth={3}
      />
      <Sponsor title='I nostri sponsor' logos={sponsor} />
      <Testimonials
        testimonials={testimonials}
        cardWidth={4}
        imageUrl='https://images8.alphacoders.com/948/948649.jpg'
      />
      <Paragraph
        title='Perché il tempo spensierato non sia tempo perso'
        subtitle='Saluto del Direttore'
        avatarImageUrl='https://i.postimg.cc/L8LTXskg/Screenshot-2023-04-15-alle-17-23-23.png'
      >
        Quando finalmente suona l’ultima campanella dell’anno scolastico inizia
        quel periodo tanto atteso dove finalmente si può fare ciò che si vuole,
        senza troppi vincoli o regole, sveglie troppo mattiniere, insegnanti
        esigenti e compiti che preoccupano. Spensieratezza! Questa l’attesa più
        grande durante l’ultima parte dell’anno scolastico. Purtroppo tanto è
        grande l’attesa delle vacanze, tanto è veloce il tempo in cui la
        spensieratezza diventa noia, la libertà diventa ozio e pigrizia e il
        tempo libero rischia di diventare tempo perso. Quando finalmente suona
        l’ultima campanella dell’anno scolastico inizia quel periodo tanto
        atteso dove finalmente si può fare ciò che si vuole, senza troppi
        vincoli o regole, sveglie troppo mattiniere, insegnanti esigenti e
        compiti che preoccupano. Spensieratezza! Questa l’attesa più grande
        durante l’ultima parte dell’anno scolastico. Purtroppo tanto è grande
        l’attesa delle vacanze, tanto è veloce il tempo in cui la spensieratezza
        diventa noia, la libertà diventa ozio e pigrizia e il tempo libero
        rischia di diventare tempo perso.
      </Paragraph>
      <Paragraph
        title='Perché il tempo spensierato non sia tempo perso'
        subtitle='Saluto del Direttore'
        leftImageUrl='https://i.postimg.cc/L8LTXskg/Screenshot-2023-04-15-alle-17-23-23.png'
      >
        Quando finalmente suona l’ultima campanella dell’anno scolastico inizia
        quel periodo tanto atteso dove finalmente si può fare ciò che si vuole,
        senza troppi vincoli o regole, sveglie troppo mattiniere, insegnanti
        esigenti e compiti che preoccupano. Spensieratezza! Questa l’attesa più
        grande durante l’ultima parte dell’anno scolastico. Purtroppo tanto è
        grande l’attesa delle vacanze, tanto è veloce il tempo in cui la
        spensieratezza diventa noia, la libertà diventa ozio e pigrizia e il
        tempo libero rischia di diventare tempo perso. Quando finalmente suona
        l’ultima campanella dell’anno scolastico inizia quel periodo tanto
        atteso dove finalmente si può fare ciò che si vuole, senza troppi
        vincoli o regole, sveglie troppo mattiniere, insegnanti esigenti e
        compiti che preoccupano. Spensieratezza! Questa l’attesa più grande
        durante l’ultima parte dell’anno scolastico. Purtroppo tanto è grande
        l’attesa delle vacanze, tanto è veloce il tempo in cui la spensieratezza
        diventa noia, la libertà diventa ozio e pigrizia e il tempo libero
        rischia di diventare tempo perso.
      </Paragraph>
      <Paragraph
        title='Perché il tempo spensierato non sia tempo perso'
        subtitle='Saluto del Direttore'
        rightImageUrl='https://i.postimg.cc/L8LTXskg/Screenshot-2023-04-15-alle-17-23-23.png'
      >
        Quando finalmente suona l’ultima campanella dell’anno scolastico inizia
        quel periodo tanto atteso dove finalmente si può fare ciò che si vuole,
        senza troppi vincoli o regole, sveglie troppo mattiniere, insegnanti
        esigenti e compiti che preoccupano. Spensieratezza! Questa l’attesa più
        grande durante l’ultima parte dell’anno scolastico. Purtroppo tanto è
        grande l’attesa delle vacanze, tanto è veloce il tempo in cui la
        spensieratezza diventa noia, la libertà diventa ozio e pigrizia e il
        tempo libero rischia di diventare tempo perso. Quando finalmente suona
        l’ultima campanella dell’anno scolastico inizia quel periodo tanto
        atteso dove finalmente si può fare ciò che si vuole, senza troppi
        vincoli o regole, sveglie troppo mattiniere, insegnanti esigenti e
        compiti che preoccupano. Spensieratezza! Questa l’attesa più grande
        durante l’ultima parte dell’anno scolastico. Purtroppo tanto è grande
        l’attesa delle vacanze, tanto è veloce il tempo in cui la spensieratezza
        diventa noia, la libertà diventa ozio e pigrizia e il tempo libero
        rischia di diventare tempo perso.
      </Paragraph>
      <Paragraph
        topImageUrl='https://www.donnamoderna.com/content/uploads/2020/05/ecoterapia.jpg'
        title='Perché il tempo spensierato non sia tempo perso'
        subtitle='Saluto del Direttore'
        columnCount={2}
      >
        Quando finalmente suona l’ultima campanella dell’anno scolastico inizia
        quel periodo tanto atteso dove finalmente si può fare ciò che si vuole,
        senza troppi vincoli o regole, sveglie troppo mattiniere, insegnanti
        esigenti e compiti che preoccupano. Spensieratezza! Questa l’attesa più
        grande durante l’ultima parte dell’anno scolastico. Purtroppo tanto è
        grande l’attesa delle vacanze, tanto è veloce il tempo in cui la
        spensieratezza diventa noia, la libertà diventa ozio e pigrizia e il
        tempo libero rischia di diventare tempo perso.
      </Paragraph>
      <Paragraph
        backgroundImageUrl='https://www.donnamoderna.com/content/uploads/2020/05/ecoterapia.jpg'
        backgroundColor='orange'
        opacity={0.8}
        blur='0.2rem'
        color='white'
        title='Perché il tempo spensierato non sia tempo perso'
        subtitle='Saluto del Direttore'
      >
        Quando finalmente suona l’ultima campanella dell’anno scolastico inizia
        quel periodo tanto atteso dove finalmente si può fare ciò che si vuole,
        senza troppi vincoli o regole, sveglie troppo mattiniere, insegnanti
        esigenti e compiti che preoccupano. Spensieratezza! Questa l’attesa più
        grande durante l’ultima parte dell’anno scolastico. Purtroppo tanto è
        grande l’attesa delle vacanze, tanto è veloce il tempo in cui la
        spensieratezza diventa noia, la libertà diventa ozio e pigrizia e il
        tempo libero rischia di diventare tempo perso.
      </Paragraph>
      <Table
        title='Titolo della tabella'
        subtitle='Sottotitolo della tabella'
        backgroundImageUrl='https://www.donnamoderna.com/content/uploads/2020/05/ecoterapia.jpg'
        backgroundColor='#EE5A24'
        opacity={0.8}
        blur='0.2rem'
        color='white'
        rows={[
          ['Cognome', 'Nome', 'Età'],
          ['Paoletti', 'Vigilio', 75],
          ['Scaroletti', 'Emma', 45],
          ['Anselmi', 'Ada', 32],
        ]}
      />
      <Team
        title='Contatti'
        description='Formatori che ti aiutano a crescere con il cuore di don Bosco'
        members={members}
        cardWidth={3}
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

export async function getStaticProps() {
  let res = await fetch(
    'https://channels.donboscosandona.it/api/posts/inoratorio'
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
    name: 'don Nicola Munari',
    role: 'DIRETTORE / CATECHISTA',
    description: 'And I love you like Kanye',
    description1: 'loves Kanye. We need to restart the human foundation',
    imageUrl:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
    email: 'c.coso@donboscosandona.it',
    phone: '0421 3388949874950',
  },
  {
    name: 'Alessandro Cappelletto',
    role: 'PRESIDE',
    description: 'And I love you like Kanye',
    description1: 'loves Kanye. We need to restart the human foundation',
    imageUrl:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    name: 'Alessandro Ferro',
    role: 'VICE-PRESIDE / TUTOR DIGITALE',
    description1:
      'Vicepreside, gestione organizzazione scolastica e pastorale, insegnamento area scientifica ',
    imageUrl:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',

    email: 'a.ferro@donboscosandona.it',
    phone: '0421 111 222',
  },
  {
    name: "Anna Maria D'Ambrosio",
    role: 'RESPONSABILE DELLA DISCIPLINA',
    description1:
      'Gestione disciplina,organizzazione scolastica e insegnamento are cultura',
    imageUrl:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
    email: 'l.hdggfd@donboscosandona.it',
    phone: '12365598445',
  },
]

let prodotti = [
  {
    title: 'Elettrico',
    category: 'QUALIFICA DI OPERATORE ELETTRICO',
    description:
      'Installa ed effettua la manutenzione di impianti civili e industriali, sia con tecnologie tradizionali che automatizzate. Realizza la programmazione dei componenti domotici e dei controllori programmabili industriali.',
    immagineUrl:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  },
  {
    title: 'Energia',
    category: 'QUALIFICA DI OPERATORE DI IMPIANTI TERMO-IDRAULICI',
    description:
      "Interviene nell'installazione, collaudo e manutenzione di impianti termici, idraulici, di condizionamento e fotovoltaici, con una particolare attenzione al risparmio energia, anche grazie alla building automation.",
    immagineUrl:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    url: '/energia',
  },
  {
    title: 'Informatico',
    category: 'DIPLOMA DI TECNICO INFORMATICO',
    description:
      "Installa e configura hardware e software, esegue la manutenzione di sistemi, reti e terminali utente, fornisce assistenza tecnica, effettua l'elaborazione e la manutenzione di dati su archivi digitali. Con il quarto anno in Sistema Duale diventa tecnico sviluppatore di Soluzioni Software.",
    immagineUrl:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    url: '/informatico',
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

let domande_test = [
  {
    domanda: 'Cosa faresti se trovassi un robot rotto?',
    immagine: '/images/test/1.jpg',
    a: {
      risposta: ' Lo riparerei immediatamente usando il mio fidato cacciavite sonico!',
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
      risposta: ' Lo collegherei a una presa di corrente ad alta tensione per vedere cosa succede.',
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
      risposta: 'Un potente computer connesso a internet.',
      elettrico: 0,
      energia: 0,
      informatico: 3,
      meccanico: 0,
      motoristico: 0,
    },
    b: {
      risposta: 'Un potente computer connesso a internet.',
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
      risposta: 'Smontare e rimontare motori di auto e moto. ',
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
      risposta: 'Fisica, con particolare attenzione all^elettromagnetismo.  ',
      elettrico: 3,
      energia: 1,
      informatico: 0,
      meccanico: 0,
      motoristico: 0,
    },
    b: {
      risposta: ' Informatica, con particolare attenzione alla programmazione.',
      elettrico: 0,
      energia: 0,
      informatico: 3,
      meccanico: 0,
      motoristico: 0,
    },
    c: {
      risposta: 'Meccanica, con particolare attenzione al disegno tecnico. ',
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
      risposta: 'Il funzionamento di motori a combustione interna.  ',
      elettrico: 0,
      energia: 0,
      informatico: 0,
      meccanico: 0,
      motoristico: 3,
    },
    b: {
      risposta: '  La creazione di software innovativi.',
      elettrico: 0,
      energia: 0,
      informatico: 3,
      meccanico: 0,
      motoristico: 0,
    },
    c: {
      risposta: ' La creazione di software innovativi. ',
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
      risposta: 'Se potessi avere un superpotere, quale sceglieresti?  ',
      elettrico: 0,
      energia: 0,
      informatico: 0,
      meccanico: 2,
      motoristico: 3,
    },
    b: {
      risposta: ' Teletrasportarmi in qualsiasi circuito elettrico',
      elettrico: 3,
      energia: 0,
      informatico: 0,
      meccanico: 0,
      motoristico: 0,
    },
    c: {
      risposta: 'Teletrasportarmi in qualsiasi circuito elettrico ',
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
      risposta: ' Scacchi, per le sue strategie complesse   ',
      elettrico: 0,
      energia: 1,
      informatico: 2,
      meccanico: 0,
      motoristico: 0,
    },
    b: {
      risposta: ' Monopoli, per la gestione oculata delle risorse ',
      elettrico: 0,
      energia: 2,
      informatico: 1,
      meccanico: 0,
      motoristico: 0,
    },
    c: {
      risposta: 'Meccano, per costruire incredibili strutture ',
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
      risposta: ' In una centrale elettrica all^avanguardia   ',
      elettrico: 0,
      energia: 3,
      informatico: 0,
      meccanico: 0,
      motoristico: 0,
    },
    b: {
      risposta: '  Alla Silicon Valley per visitare le aziende tech più famose',
      elettrico: 0,
      energia: 0,
      informatico: 3,
      meccanico: 0,
      motoristico: 0,
    },
    c: {
      risposta: 'A Maranello per vedere da vicino la produzione di auto sportive ',
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
      risposta: ' Un^aquila, per la sua vista acuta che individua ogni dettaglio   ',
      elettrico: 1,
      energia: 0,
      informatico: 0,
      meccanico: 2,
      motoristico: 0,
    },
    b: {
      risposta: ' Un formichiere, instancabile e preciso nel suo lavoro ',
      elettrico: 2,
      energia: 1,
      informatico: 0,
      meccanico: 0,
      motoristico: 0,
    },
    c: {
      risposta: 'Un delfino, che comunica con i suoi simili in modo efficiente ',
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
      risposta: ' Curioso e con la passione per capire come funzionano le cose  ',
      elettrico: 2,
      energia: 0,
      informatico: 0,
      meccanico: 2,
      motoristico: 0,
    },
    b: {
      risposta: ' Logico e analitico, con la capacità di risolvere problemi complessi',
      elettrico: 0,
      energia: 0,
      informatico: 3,
      meccanico: 0,
      motoristico: 0,
    },
    c: {
      risposta: ' Creativo e con la voglia di sperimentare nuove soluzioni ',
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
      risposta: '  Investirei in un^officina super accessoriata  ',
      elettrico: 0,
      energia: 0,
      informatico: 0,
      meccanico: 3,
      motoristico: 2,
    },
    b: {
      risposta: ' Creerei una startup innovativa nel settore tecnologico',
      elettrico: 0,
      energia: 0,
      informatico: 3,
      meccanico: 0,
      motoristico: 0,
    },
    c: {
      risposta: '  Finanziererei la ricerca sulle energie rinnovabili  ',
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
      risposta: '  "Fast and Furious", per le scene di corse adrenaliniche  ',
      elettrico: 0,
      energia: 0,
      informatico: 0,
      meccanico: 0,
      motoristico: 3,
    },
    b: {
      risposta: '  "The Matrix", per gli effetti speciali e la realtà virtuale ',
      elettrico: 0,
      energia: 0,
      informatico: 3,
      meccanico: 0,
      motoristico: 0,
    },
    c: {
      risposta: '  "Iron Man", per le invenzioni tecnologiche del protagonista ',
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
      risposta: '  L^evoluzione dei motori e dei sistemi di trasporto  ',
      elettrico: 0,
      energia: 0,
      informatico: 0,
      meccanico: 0,
      motoristico: 3,
    },
    b: {
      risposta: ' Lo sviluppo dell^intelligenza artificiale',
      elettrico: 0,
      energia: 0,
      informatico: 3,
      meccanico: 0,
      motoristico: 0,
    },
    c: {
      risposta: '  La diffusione delle smart city e delle case intelligenti  ',
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
      risposta: ' Un ingegnere che costruisce robot giganti  ',
      elettrico: 0,
      energia: 0,
      informatico: 0,
      meccanico: 3,
      motoristico: 0,
    },
    b: {
      risposta: '  Un hacker che si infiltra nei sistemi informatici più protetti',
      elettrico: 0,
      energia: 0,
      informatico: 3,
      meccanico: 0,
      motoristico: 0,
    },
    c: {
      risposta: '  Un hacker che si infiltra nei sistemi informatici più protetti ',
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
      risposta: '  "Se non funziona, smontalo e rimontalo!"   ',
      elettrico: 0,
      energia: 0,
      informatico: 0,
      meccanico: 3,
      motoristico: 0,
    },
    b: {
      risposta: '  "C^è sempre una soluzione, basta trovare il codice giusto!"',
      elettrico: 0,
      energia: 0,
      informatico: 3,
      meccanico: 0,
      motoristico: 0,
    },
    c: {
      risposta: '  "Il futuro è energia pulita e innovazione!"  ',
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
      risposta: '  Progettare e costruire un sistema di irrigazione automatico per un giardino  ',
      elettrico: 2,
      energia: 0,
      informatico: 0,
      meccanico: 2,
      motoristico: 0,
    },
    b: {
      risposta: '  Sviluppare un^app per monitorare i consumi energetici di una casa',
      elettrico: 0,
      energia: 2,
      informatico: 2,
      meccanico: 0,
      motoristico: 0,
    },
    c: {
      risposta: '  Riparare un motore diesel di ultima generazione ',
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
      risposta: ' Gestione efficiente dell^energia negli edifici ',
      elettrico: 0,
      energia: 3,
      informatico: 0,
      meccanico: 0,
      motoristico: 0,
    },
    c: {
      risposta: ' Diagnostica avanzata per motori a combustione interna ',
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
      risposta: ' Un robot in grado di svolgere compiti domestici  ',
      elettrico: 0,
      energia: 0,
      informatico: 2,
      meccanico: 2,
      motoristico: 0,
    },
    b: {
      risposta: '  Un impianto fotovoltaico per la produzione di energia pulita',
      elettrico: 1,
      energia: 3,
      informatico: 0,
      meccanico: 0,
      motoristico: 0,
    },
    c: {
      risposta: '  Un modellino di auto da corsa perfettamente funzionante ',
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
      risposta: '  In un^azienda che si occupa di progettazione di software per la domotica   ',
      elettrico: 2,
      energia: 0,
      informatico: 2,
      meccanico: 0,
      motoristico: 0,
    },
    b: {
      risposta: '  In un laboratorio di ricerca sulle nuove tecnologie energetiche',
      elettrico: 0,
      energia: 3,
      informatico: 0,
      meccanico: 0,
      motoristico: 0,
    },
    c: {
      risposta: ' In un^officina specializzata nella riparazione di veicoli elettrici ',
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
      risposta: ' Quale problema ti piacerebbe contribuire a risolvere?  ',
      elettrico: 0,
      energia: 2,
      informatico: 0,
      meccanico: 0,
      motoristico: 2,
    },
    b: {
      risposta: '  Il miglioramento dell^efficienza energetica degli elettrodomestici ',
      elettrico: 2,
      energia: 2,
      informatico: 0,
      meccanico: 0,
      motoristico: 0,
    },
    c: {
      risposta: '  Il miglioramento dell^efficienza energetica degli elettrodomestici  ',
      elettrico: 0,
      energia: 0,
      informatico: 3,
      meccanico: 0,
      motoristico: 0,
    },
  },
]