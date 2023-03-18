import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

import Head from 'next/head'
import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero'
import Features from '/components/Features'
import Carousel from '/components/Carousel'
import Articoli from '/components/Articoli'
import PostInEvidenza from '/components/PostInEvidenza'
import Products from '/components/Products'
import Testimonials from '/components/Testimonials'
import Team from '/components/Team'
import Post from '/components/Post'

import { getDatiArticoli } from '/lib/articoli'

// Voci del menù per il componente LandingHero
let menu = [
  { title: 'Chi siamo', url: '/chi-siamo' },
  { title: 'Contatti', url: '/contatti' },
  { title: 'Dove siamo', url: '/dove-siamo' },
  { title: 'Trasparenza', url: '/trasparenza' },
]

// I punti di forza
const features = [
  {
    title: "Progetto educativo",
    image: "https://www.donboscosandona.it/img/ck/77e8fb59e0a23151c46936b674e3c9620c64ff3a.png",
    description: "Un progetto chiaro e affidabile per far crescere e diventare uomini. "
  },
  {
    title: "Didattica attiva",
    image: "https://www.donboscosandona.it/img/ck/c46d55012c575d41c5a23c8fa606cb0a5f67337f.png",
    description: "Lezioni attive e coinvolgenti per dimenticare la noia e partecipare da protagonisti."
  },
  {
    title: "Laboratori",
    image: "https://www.donboscosandona.it/img/ck/1ecf12eb29bb3b57b1629de8376a3288d31c0f4a.png",
    description: "12 ore settimanali in laboratori tecnologicamente all'avanguardia per formare i professionisti del futuro."
  },
  {
    title: "Servizi al lavoro",
    image: "https://www.donboscosandona.it/img/ck/d7e68e6fd443ca3d7573c81ae780ff8e6783ad99.png",
    description: "Orientamento, stage e alternanza, i nostri esperti ti accompagneranno fino all'effettivo inserimento nelle aziende del settore."
  }
]


// slides per il carousel
let slides = [
  {
    titolo: 'Fatti un bel giro',
    descrizione: 'Scopri tutti i segreti del nostro Centro con il tour virtuale!',
    immagine: '/images/news/virtual-tour.jpeg'
  },
  {
    titolo: 'Progetto GIVE',
    descrizione: "Il 15 e 16 maggio il nostro Centro ospiterà l'edizione 2023 di GIVE (GROHE Installer Vocational Training and Education), il programma di formazione dedicato ai giovani installatori idraulici: un ambiente dedicato al training pratico proposto dai professionisti di GROHE.",
    immagine: '/images/news/2023/grohe.jpeg'
  },
  {
    titolo: 'Concorso nazionale settore elettrico',
    descrizione: "A maggio il nostro Centro avrà l'onore di ospitare il Concorso Nazionale del Settore Elettrico: tutti i Centri di Formazione Professionale salesiani d'Italia invieranno i loro campioni per una settimana di sfida e condivisione professionale...",
    immagine: '/images/news/2023/concorso-nazionale-elettrico.jpg'
  },
]

// Il nostro team
let members = [
  {
    name: "Alessandro Cappelletto",
    role: "PRESIDE",
    description: "And I love you like Kanye",
    description1: "loves Kanye. We need to restart the human foundation",
    imageUrl: "https://preview.redd.it/6ymh125pcra71.jpg?auto=webp&s=d0ec0c4112ca7a2a8f8228be3dfda0645091ac02",
    googleUrl: "f.urban@donboscosandona.it",
    linkedinUrl: "https://it.linkedin.com/",
    twitterUrl: "https://twitter.com/St3pNy",
  },
  {
    name: "Alessandro Ferro",
    role: "VICE-PRESIDE / TUTOR DIGITALE",
    description: "And I love you like Kanye",
    description1: "loves Kanye. We need to restart the human foundation",
    imageUrl: "https://www.focusjunior.it/content/uploads/2019/06/St3pNy-.jpeg",
    googleUrl: "https://www.google.it/",
    linkedinUrl: "https://it.linkedin.com/",
    twitterUrl: "https://twitter.com/St3pNy",
  },
  {
    name: "Anna Maria D'Ambrosio",
    role: "RESPONSABILE DELLA DISCIPLINA",
    description: "And I love you like Kanye",
    description1: "loves Kanye. We need to restart the human foundation",
    imageUrl: "https://www.webboh.it/wp-content/uploads/2020/10/Surry-758x424.jpg",
    googleUrl: "https://www.google.it/",
    linkedinUrl: "https://it.linkedin.com/",
    twitterUrl: "https://twitter.com/St3pNy",
  },
  {
    name: "don Nicola Munari",
    role: "DIRETTORE / CATECHISTA",
    description: "And I love you like Kanye",
    description1: "loves Kanye. We need to restart the human foundation",
    imageUrl: "https://media.gamerbrain.net/wp-content/uploads/2019/11/27094442/anima.jpg",
    googleUrl: "https://www.google.it/",
    linkedinUrl: "https://it.linkedin.com/",
    twitterUrl: "https://twitter.com/St3pNy",
  },
]

let settori = [
  {
    title: "Elettrico",
    category: "Qualifica di Operatore Elettrico",
    description: "L’operatore elettrico installa ed effettua la manutenzione di impianti civili e industriali, sia con tecnologie tradizionali che automatizzate. Realizza la programmazione dei componenti domotici e dei controllori programmabili industriali.",
    immagine: "https://thumbs.dreamstime.com/b/programmatore-di-sviluppo-professionista-che-lavora-nel-sito-web-programmazione-un-software-e-codifica-tecnologia-scrivendo-i-134227099.jpg"
  },
  {
    title: "Energie",
    category: "FREMIUM TEMPLATE",
    description: "L’operatore energetico interviene nell'installazione, collaudo e manutenzione di impianti termici, idraulici, di condizionamento e fotovoltaici, con una particolare attenzione al risparmio energetico, anche grazie alla building automation.",
    immagine: "https://thumbs.dreamstime.com/b/programmatore-femminile-sorridente-di-bellezza-che-per-mezzo-del-computer-103397705.jpg"
  },
  {
    title: "Informatico",
    category: "PREMIUM TEMPLATE",
    description: "L’operatore informatico installa e configura hardware e software, esegue la manutenzione di sistemi, reti e terminali utente, fornisce assistenza tecnica, effettua l'elaborazione e la manutenzione di dati su archivi digitali. Con il quarto anno in Sistema Duale diventa tecnico sviluppatore di soluzioni software.",
    immagine: "https://thumbs.dreamstime.com/b/analista-di-codifica-138364750.jpg"
  },
  {
    title: "Meccanico",
    category: "Qualifica di Operatore Elettrico",
    description: "L’operatore elettrico installa ed effettua la manutenzione di impianti civili e industriali, sia con tecnologie tradizionali che automatizzate. Realizza la programmazione dei componenti domotici e dei controllori programmabili industriali.",
    immagine: "https://thumbs.dreamstime.com/b/programmatore-di-sviluppo-professionista-che-lavora-nel-sito-web-programmazione-un-software-e-codifica-tecnologia-scrivendo-i-134227099.jpg"
  },
  {
    title: "Motoristico",
    category: "FREMIUM TEMPLATE",
    description: "L’operatore energetico interviene nell'installazione, collaudo e manutenzione di impianti termici, idraulici, di condizionamento e fotovoltaici, con una particolare attenzione al risparmio energetico, anche grazie alla building automation.",
    immagine: "https://thumbs.dreamstime.com/b/programmatore-femminile-sorridente-di-bellezza-che-per-mezzo-del-computer-103397705.jpg"
  },
  {
    title: "Carrozzeria",
    category: "PREMIUM TEMPLATE",
    description: "L’operatore informatico installa e configura hardware e software, esegue la manutenzione di sistemi, reti e terminali utente, fornisce assistenza tecnica, effettua l'elaborazione e la manutenzione di dati su archivi digitali. Con il quarto anno in Sistema Duale diventa tecnico sviluppatore di soluzioni software.",
    immagine: "https://thumbs.dreamstime.com/b/analista-di-codifica-138364750.jpg"
  },
]

let postInEvidenza = {
  titolo: 'Le folli notti di Bilal',
  descrizione: 'Il dott. Bilal, noto migliardario pieno di schèi, passa le sue notti tra belle ragazze e partite a poker. Come inviati di donboscosandona siamo riusciti ad accedere a questo mondo esclusivo per raccontarvelo in prima persona...',
  immagine: 'https://media.istockphoto.com/id/522728130/it/foto/amici-divertirsi-giocando-a-poker.jpg?s=612x612&w=is&k=20&c=w2_p0SHrR_-cmURmZY9-dHXu3-qqVqN9QkdiZrgJpfc=',
  testoImmagine: 'Bilal seduto su un divanetto in mezzo a due tipe.',
  testoLink: 'Continua a leggere e scopri la cosa pazzesca che hanno fatto...',
}

let posts = [
  {
    titolo: 'Le notti di Manuel',
    data: '6 marzo 2023',
    testo: 'Andiamo insieme a scoprire le follie del nostro Manuel...',
    immagine: 'https://source.unsplash.com/random',
    url: 'https://cinema.donboscosandona.it'
  },
  {
    titolo: 'Le notti di Martino',
    data: '5 marzo 2023',
    testo: 'Andiamo insieme a scoprire le follie del nostro Martino...',
    immagine: 'https://source.unsplash.com/random',
    url: 'https://cinema.donboscosandona.it'
  },
]

const testimonials = [
  {
    name: "Gigi Thompson",
    image: "https://i.ibb.co/4MQnQw0/img1.jpg",
    text: "Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione ",
    social: "@GIGITHOMPSON"
  },
  {
    image: "https://i.ibb.co/QPG6j9b/img2.jpg",
    name: "Gina Andrew",
    text: "Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione ",
    social: "@GINAANDREW"
  },
  {
    image: "https://i.ibb.co/dpQrpNt/img3.jpg",
    name: "Pino West",
    text: "Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione ",
    social: "@PINOWEST"
  },
]

export default function Home({ datiArticoli }) {
  return (
    <Layout>
      <Head />
      {

      }
      <LandingHero
        opacity={0.5}
        siteName="CFP DON BOSCO"
        title="Centro di Formazione Professionale don Bosco"
        description="Diventa adulto con il metodo educativo di don Bosco preparandoti a entrare a testa alta nel mondo professionale di domani!"
        buttonUrl={'https://www.youtube.com/watch?v=wyjm1yGmu9g'}
        buttonText="Guarda il video"
        imageUrl="/images/home/matteo_attacco_hacker.jpg"
        menu={menu}
      />
      <Features
        title="I nostri punti di forza"
        description="Scopri perché il CFP DON BOSCO è davvero la scuola che fa al caso tuo!"
        features={features}
        cardWidth={3}
      />
      <Carousel slides={slides} maxWidth={false} />
      <Products
        title="I settori"
        description="Un'ampia scelta di indirizzi professionali: scopri quello che ti accende di più!"
        cardWidth={4}
        products={settori}
      />
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {
            posts.map(
              (post) => (
                <Post post={post} />
              )
            )
          }
        </Grid>
      </Container>
      <Testimonials testimonials={testimonials} />
      <Team
        members={members}
        cardWidth={4}
      />
      <Articoli dati={datiArticoli} />
    </Layout>
  )
}

export async function getStaticProps() {
  const datiArticoli = getDatiArticoli()
  return {
    props: {
      datiArticoli,
    },
  }
}
