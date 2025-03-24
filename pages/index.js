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
import { images } from '@/next.config'

export default function Home({ data, elementi }) {
  return (
    <Layout>
      <Carousel slides={slides} />
      <Paragraph 
        rightImageUrl='https://i.postimg.cc/L8LTXskg/Screenshot-2023-04-15-alle-17-23-23.png'
      ><center>
        <h1>Tra verde e azzurro</h1>
        <br></br>
        <p>Il Soggiorno Marino Don Bosco e la Casa Domenico Savio sono <br></br>immersi in un ampio giardino fronte mare, con accesso diretto alla<br></br> spiaggia privata in località Duna Verde, 
        nei pressi di Caorle,<br></br> caratteristica cittadina di mare e di pescatori. Duna Verde si trova a <br></br>metà strada tra le splendide campagne venete e la 
        città di Venezia,<br></br> meta prediletta del turismo internazionale.<br></br>
A pochi chilometri di distanza numerose località turistiche e città di <br></br>interesse artistico sono 
mete ideali per le vostre escursioni e gite<br></br> fuori porta. La riviera e il lido si accendono di sera di iniziative e feste.</p></center>
      </Paragraph>
      
     
      
      <Products
        title='I nostri servizi'
        cardWidth={6}
        cardWidthXs={12}
        products={prodotti}
      />
      <Paragraph
        title='da mettere titolo'
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
        title='da mattere il titolo'
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
      <Products
        cardWidth={6}
        cardWidthXs={12}
        products={prodotti}
      /> 
      
      <Products
        title='I luoghi da visitire'
        cardWidth={6}
        cardWidthXs={12}
        products={prodotti}
      />
      <Team
        title='I servizi a disposizione'
        description='Formatori che ti aiutano a crescere con il cuore di don Bosco'
        members={members}
        cardWidth={3}
      /> 
      <Maps
        maxWidth='100%'
        maxHeight='550px'
        url='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5580.05343317009!2d12.5710658!3d45.6301996!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477956fe076b4157%3A0x29fb231d47465883!2sCnos%20Fap%20Don%20Bosco!5e0!3m2!1sit!2sit!4v1680507660807!5m2!1sit!2sit'
      />
      <br></br>
     <br></br>
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

// slides per il carousel
let slides = [
  {
    titolo: 'Fatti un bel giro',
    descrizione:
      'Scopri tutti i segreti del nostro Centro con il tour virtuale!',
    imageUrl:'https://resc.deskline.net/images/TRN/1/04117527-0133-446a-9636-08118b4fac8b/99/image.jpg',
  },
  {
    titolo: 'Concorso nazionale settore elettrico',
    descrizione:
      "A maggio il nostro Centro avrà l'onore di ospitare il Concorso Nazionale del Settore Elettrico: tutti i Centri di Formazione Professionale salesiani d'Italia invieranno i loro campioni per una settimana di sfida e condivisione professionale...",
images:'marespiagge.png'
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
      'https://resc.deskline.net/images/TRN/1/04117527-0133-446a-9636-08118b4fac8b/99/image.jpg',

  },
  {
    name: "Anna Maria D'Ambrosio",
    role: 'RESPONSABILE DELLA DISCIPLINA',
    description1:
      'Gestione disciplina,organizzazione scolastica e insegnamento are cultura',
    imageUrl:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    name: 'don Nicola Munari',
    role: 'DIRETTORE / CATECHISTA',
    description: 'And I love you like Kanye',
    description1: 'loves Kanye. We need to restart the human foundation',
    imageUrl:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
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

  },
  {
    name: "Anna Maria D'Ambrosio",
    role: 'RESPONSABILE DELLA DISCIPLINA',
    description1:
      'Gestione disciplina,organizzazione scolastica e insegnamento are cultura',
    imageUrl:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    name: 'don Nicola Munari',
    role: 'DIRETTORE / CATECHISTA',
    description: 'And I love you like Kanye',
    description1: 'loves Kanye. We need to restart the human foundation',
    imageUrl:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
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

  },
  {
    name: "Anna Maria D'Ambrosio",
    role: 'RESPONSABILE DELLA DISCIPLINA',
    description1:
      'Gestione disciplina,organizzazione scolastica e insegnamento are cultura',
    imageUrl:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
]

let prodotti = [
  {
    title: 'Elettrico',
    category: 'QUALIFICA DI OPERATORE ELETTRICO',
    description:
      'Installa ed effettua la manutenzione di impianti civili e industriali, sia con tecnologie tradizionali che automatizzate. Realizza la programmazione dei componenti domotici e dei controllori programmabili industriali.',
    immagineUrl:'/images/marespiagge.png',
  },
  {
    title: 'Energia',
    category: 'QUALIFICA DI OPERATORE DI IMPIANTI TERMO-IDRAULICI',
    description:
      "Interviene nell'installazione, collaudo e manutenzione di impianti termici, idraulici, di condizionamento e fotovoltaici, con una particolare attenzione al risparmio energetico, anche grazie alla building automation.",
    immagineUrl:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
  },
  {
    title: 'Informatico',
    category: 'DIPLOMA DI TECNICO INFORMATICO',
    description:
      "Installa e configura hardware e software, esegue la manutenzione di sistemi, reti e terminali utente, fornisce assistenza tecnica, effettua l'elaborazione e la manutenzione di dati su archivi digitali. Con il quarto anno in Sistema Duale diventa tecnico sviluppatore di Soluzioni Software.",
    immagineUrl:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
  },
  {
    title: 'Informatico',
    category: 'DIPLOMA DI TECNICO INFORMATICO',
    description:
      "Installa e configura hardware e software, esegue la manutenzione di sistemi, reti e terminali utente, fornisce assistenza tecnica, effettua l'elaborazione e la manutenzione di dati su archivi digitali. Con il quarto anno in Sistema Duale diventa tecnico sviluppatore di Soluzioni Software.",
    immagineUrl:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
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
