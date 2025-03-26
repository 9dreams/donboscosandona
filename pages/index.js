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
        rightImageUrl='/images/imgomb.png'
      >
      </Paragraph>
      <Paragraph
        title='da mattere il titolo'
        leftImageUrl='https://i.postimg.cc/L8LTXskg/Screenshot-2023-04-15-alle-17-23-23.png'
      >
        
      </Paragraph>
        <Products
        cardWidth={6}
        cardWidthXs={12}
        products={prodotti2}
      /> 
       <Products
        cardWidth={6}
        cardWidthXs={12}
        products={prodotti3}
      /> 
      <Products
        cardWidth={4}
        cardWidthXs={6}
        products={prodotti4}
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
        url='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2793.502961533332!2d12.78848457670082!3d45.56032337107574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477bfa012626aba9%3A0xc17f19394464ca38!2sSoggiorno%20Marino%20Don%20Bosco!5e0!3m2!1sit!2sit!4v1742978889848!5m2!1sit!2sit" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
      />z
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
    
    name: 'Spiaggia privata',
    description: 'Una spiaggia riservata agli ospiti del soggiorno garantisce la tranquillità di cui la tua famiglia ha bisogno.',
    imageUrl:
      '/images/log1.png',
  },
  {
    name: 'Ombrelloni e sdraio',
    description: 'Ogni camera ha in dotazione un ombrellone con sdraio e lettino.',
    imageUrl:
      '/images/log2.png',
  },
  {
    name: 'Guardiaspiaggia',
    description1:
      'Nel periodo estivo la balneazione è sorvegliata in determinati orari.',
    imageUrl:
      '/images/log3.png',


  },
  {
    name: "Ascensore",
    description1:
      'I piani superiori sono raggiungibili da tutti grazie a un comodo ascensore',
    imageUrl:
      '/images/log4.png',
  },
  {
    name: 'Aria condizionata',
    description1: 'Il relax in camera è garantito da un moderno impianto di condizionamento.',
    imageUrl:
      '/images/log5.png',
  },
  {
    name: 'Bagno interno',
    description1: 'Tutte le camere sono dotate di servizi igienici riservati e asciugacapelli.',
    imageUrl:
      '/images/log6.png',
  },
  {
    name: 'Free Wifi',
    description1:
    'La navigazione dai tuoi dispositivi mobili è garantita da una moderna connessione in fibra ottica.',
    imageUrl:
     '/images/log7.png',

  },
  {
    name: "Capella",
    description1:
      'Il Soggiorno è dotato di una cappella per chi desidera coltivare il suo rapporto con il Signore. Nel periodo estivo un sacerdote garantisce la Santa Messa quotidiana.',
    imageUrl:
     '/images/log8.png',
  },
  {
    name: 'bar',
    description: 'Nella comoda hall del Soggiorno è sempre a disposizione un servizio bar.',
    imageUrl:
     '/images/log9.png',
  },
  {
    name: 'Sala conferenze',
    description: 'I gruppi che prenotano la casa possono usufruire della sala conferenze per i loro momenti di studio.',
    imageUrl:
      '/images/log10.png',
  },
  {
    name: 'Parcheggio privato',
    description1:
      "All'interno dell'area recintata del Soggiorno un comodo parcheggio privato è riservato agli ospiti.",
    imageUrl:
      '/images/log11.png',

  },
  {
    name: "Bandiera Blu",
    description1:
      'La Bandiera Blu è sinonimo di acque pulite, di spiagge ben curate, di attenzione per le esigenze ambientali e di sensibilizzazione verso le tematiche ecologiche.',
    imageUrl:
      '/images/log12.png',
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
      'https://www.forniturealberghiereonline.it/images/prima-colazione-bb-norme-somministrazione-cibi-bevande.jpg'
  },
  {
    title: 'Informatico',
    category: 'DIPLOMA DI TECNICO INFORMATICO',
    description:
      "Installa e configura hardware e software, esegue la manutenzione di sistemi, reti e terminali utente, fornisce assistenza tecnica, effettua l'elaborazione e la manutenzione di dati su archivi digitali. Con il quarto anno in Sistema Duale diventa tecnico sviluppatore di Soluzioni Software.",
    immagineUrl:
      '/images/family.time.png'
  },
  {
    title: 'Informatico',
    category: 'DIPLOMA DI TECNICO INFORMATICO',
    description:
      "Installa e configura hardware e software, esegue la manutenzione di sistemi, reti e terminali utente, fornisce assistenza tecnica, effettua l'elaborazione e la manutenzione di dati su archivi digitali. Con il quarto anno in Sistema Duale diventa tecnico sviluppatore di Soluzioni Software.",
    immagineUrl:
      '/images/regalavacanzanonni.png'
  },
]
let prodotti2 = [
  {
    title: 'Elettrico',
    category: 'QUALIFICA DI OPERATORE ELETTRICO',
    description:
      'Installa ed effettua la manutenzione di impianti civili e industriali, sia con tecnologie tradizionali che automatizzate. Realizza la programmazione dei componenti domotici e dei controllori programmabili industriali.',
    immagineUrl:'/images/cani.png',
  },
  {
    title: 'Energia',
    category: 'QUALIFICA DI OPERATORE DI IMPIANTI TERMO-IDRAULICI',
    description:
      "Interviene nell'installazione, collaudo e manutenzione di impianti termici, idraulici, di condizionamento e fotovoltaici, con una particolare attenzione al risparmio energetico, anche grazie alla building automation.",
    immagineUrl:
      '/images/baby.png'
  },
  {
    title: 'Informatico',
    category: 'DIPLOMA DI TECNICO INFORMATICO',
    description:
      "Installa e configura hardware e software, esegue la manutenzione di sistemi, reti e terminali utente, fornisce assistenza tecnica, effettua l'elaborazione e la manutenzione di dati su archivi digitali. Con il quarto anno in Sistema Duale diventa tecnico sviluppatore di Soluzioni Software.",
    immagineUrl:
      '/images/fettebisco.png'
  },
  {
    title: 'Informatico',
    category: 'DIPLOMA DI TECNICO INFORMATICO',
    description:
      "Installa e configura hardware e software, esegue la manutenzione di sistemi, reti e terminali utente, fornisce assistenza tecnica, effettua l'elaborazione e la manutenzione di dati su archivi digitali. Con il quarto anno in Sistema Duale diventa tecnico sviluppatore di Soluzioni Software.",
    immagineUrl:
      '/images/cozze.png'
  },
]
let prodotti3 = [
  {
    title: 'Elettrico',
    category: 'QUALIFICA DI OPERATORE ELETTRICO',
    description:
      'Installa ed effettua la manutenzione di impianti civili e industriali, sia con tecnologie tradizionali che automatizzate. Realizza la programmazione dei componenti domotici e dei controllori programmabili industriali.',
    immagineUrl:'/images/caorle1.png',
  },
  {
    title: 'Energia',
    category: 'QUALIFICA DI OPERATORE DI IMPIANTI TERMO-IDRAULICI',
    description:
      "Interviene nell'installazione, collaudo e manutenzione di impianti termici, idraulici, di condizionamento e fotovoltaici, con una particolare attenzione al risparmio energetico, anche grazie alla building automation.",
    immagineUrl:
      '/images/bici.png'
  },
  
]
let prodotti4 = [
  {
    title: 'Elettrico',
    category: 'QUALIFICA DI OPERATORE ELETTRICO',
    description:
      'Installa ed effettua la manutenzione di impianti civili e industriali, sia con tecnologie tradizionali che automatizzate. Realizza la programmazione dei componenti domotici e dei controllori programmabili industriali.',
    immagineUrl:'/images/ospitalità.png',
  },
  {
    title: 'Energia',
    category: 'QUALIFICA DI OPERATORE DI IMPIANTI TERMO-IDRAULICI',
    description:
      "Interviene nell'installazione, collaudo e manutenzione di impianti termici, idraulici, di condizionamento e fotovoltaici, con una particolare attenzione al risparmio energetico, anche grazie alla building automation.",
    immagineUrl:
      '/images/servizio.png'
  },
  {
    title: 'Energia',
    category: 'QUALIFICA DI OPERATORE DI IMPIANTI TERMO-IDRAULICI',
    description:
      "Interviene nell'installazione, collaudo e manutenzione di impianti termici, idraulici, di condizionamento e fotovoltaici, con una particolare attenzione al risparmio energetico, anche grazie alla building automation.",
    immagineUrl:
      '/images/atvo3.png'
  },
  
]
