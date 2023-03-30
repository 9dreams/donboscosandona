import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

import Head from 'next/head'
import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero2.js'
import Features from '/components/Features'
import Carousel from '/components/Carousel'
import PostInEvidenza from '/components/PostInEvidenza'
import Products from '/components/Products'
import Testimonials from '/components/Testimonials'
import Team from '/components/Team'
import Post from '/components/Post'

import { getDatiArticoli } from '/lib/articoli'

// I punti di forza
const features = [
  {
    title: "Progetto educativo",
    imageUrl: "https://www.donboscosandona.it/img/ck/77e8fb59e0a23151c46936b674e3c9620c64ff3a.png",
    description: "Un progetto chiaro e affidabile per far crescere e diventare uomini. "
  },
  {
    title: "Didattica attiva",
    imageUrl: "https://www.donboscosandona.it/img/ck/c46d55012c575d41c5a23c8fa606cb0a5f67337f.png",
    description: "Lezioni attive e coinvolgenti per dimenticare la noia e partecipare da protagonisti."
  },
  {
    title: "Laboratori",
    imageUrl: "https://www.donboscosandona.it/img/ck/1ecf12eb29bb3b57b1629de8376a3288d31c0f4a.png",
    description: "12 ore settimanali in laboratori tecnologicamente all'avanguardia per formare i professionisti del futuro."
  },
  {
    title: "Servizi al lavoro",
    imageUrl: "https://www.donboscosandona.it/img/ck/d7e68e6fd443ca3d7573c81ae780ff8e6783ad99.png",
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

let slides2 = slides

// Il nostro team
let members = [
  {
    name: "don Nicola Munari",
    role: "DIRETTORE / CATECHISTA",
    description: "And I love you like Kanye",
    description1: "loves Kanye. We need to restart the human foundation",
    imageUrl: "https://media.gamerbrain.net/wp-content/uploads/2019/11/27094442/anima.jpg",
    email:"c.coso@donboscosandona.it",
    phone: '0421 3388949874950',
  },
  {
    name: "Alessandro Cappelletto",
    role: "PRESIDE",
    description: "And I love you like Kanye",
    description1: "loves Kanye. We need to restart the human foundation",
    imageUrl: "https://preview.redd.it/6ymh125pcra71.jpg?auto=webp&s=d0ec0c4112ca7a2a8f8228be3dfda0645091ac02",
    email:"c.ciaoooo@donboscosandona.it",
    phone: '123456',
  },
  {
    name: "Alessandro Ferro",
    role: "VICE-PRESIDE / TUTOR DIGITALE",
    description: "And I love you like Kanye",
    description1: "loves Kanye. We need to restart the human foundation",
    imageUrl: "/images/team/A_Ferro.png",
 
    email:"a.ferro@donboscosandona.it",
    phone: '0421 111 222',
  },
  {
    name: "Anna Maria D'Ambrosio",
    role: "RESPONSABILE DELLA DISCIPLINA",
    description: "And I love you like Kanye",
    description1: "loves Kanye. We need to restart the human foundation",
    imageUrl: "/images/team/A_dambrosio.png",
    email:"l.hdggfd@donboscosandona.it",
    phone: '12365598445',
  },
  {
    name: "Roberta Toffoletto e Alessia Zanin",
    role: "SEGRETERIA DIDATTICA",
    description: "And I love you like Kanye",
    description1: "loves Kanye. We need to restart the human foundation",
    imageUrl: "/images/team/segretarie.png",
    email:"c.cosocoso@donboscosandona.it",
    phone: '0421 123456338 950',
  },
  {
    name: "Andrea Pasqualetto",
    role: "ORIENTAMENTO IN ENTRATA / SOSTEGNO",
    description: "And I love you like Kanye",
    description1: "loves Kanye. We need to restart the human foundation",
    imageUrl: "/images/team/Pasqualetto.png",
    email:"c.cosinocoso@donboscosandona.it",
    phone: '123456 338 950',
  },
  {
    name: "Francesco Cicogna",
    role: "COORDINATORE STAGE / CORSI PER ADULTI",
    description: "And I love you like Kanye",
    description1: "loves Kanye. We need to restart the human foundation",
    imageUrl: "/images/team/cicogna.png",
    email:"hhh.coso@donboscosandona.it",
    phone: '0421 338 950',
  },
  {
    name: "Martina Dianese",
    role: "ORIENTAMENTO IN USCITA / SERVIZI AL LAVORO",
    description: "And I love you like Kanye",
    description1: "loves Kanye. We need to restart the human foundation",
    imageUrl: "https://media.licdn.com/dms/image/C5603AQHlyDoD0W6G-A/profile-displayphoto-shrink_800_800/0/1551801387517?e=2147483647&v=beta&t=JT3YTFL7g1ykrUcSwl7W0_iO0YSiBolctjntN2T9dCA",
    email:"c.coso@donboscosandona.it",
    phone: '0421 338 950',
  },
]

let settori = [
  {
    title: "Elettrico",
    category: "QUALIFICA DI OPERATORE ELETTRICO",
    description: "Installa ed effettua la manutenzione di impianti civili e industriali, sia con tecnologie tradizionali che automatizzate. Realizza la programmazione dei componenti domotici e dei controllori programmabili industriali.",
    immagineUrl: "https://www.donboscosandona.it/img/column/42480c58c90ada8ff75c443fdde83ae71fea75ac.jpg?1539529685",
    url: "https://www.donboscosandona.it/elettrico"
  },
  {
    title: "Energia",
    category: "QUALIFICA DI OPERATORE DI IMPIANTI TERMO-IDRAULICI",
    description: "Interviene nell'installazione, collaudo e manutenzione di impianti termici, idraulici, di condizionamento e fotovoltaici, con una particolare attenzione al risparmio energetico, anche grazie alla building automation.",
    immagineUrl: "https://www.donboscosandona.it/img/column/417afaa0f0697f0f0aabf9ccf61030769cb76f14.jpg?1539529180",
    url: "https://www.donboscosandona.it/energia"
  },
  {
    title: "Informatico",
    category: "DIPLOMA DI TECNICO INFORMATICO",
    description: "Installa e configura hardware e software, esegue la manutenzione di sistemi, reti e terminali utente, fornisce assistenza tecnica, effettua l'elaborazione e la manutenzione di dati su archivi digitali. Con il quarto anno in Sistema Duale diventa tecnico sviluppatore di Soluzioni Software.",
    immagineUrl: "https://www.donboscosandona.it/img/column/97f264e9d16a0856dd2cb973630af1cac4426f73.jpg?1539529314",
    url: "https://www.donboscosandona.it/informatico"
  },
  {
    title: "Meccanico",
    category: "DIPLOMA DI TECNICO PER LA CONDUZIONE E LA MANUTENZIONE DI IMPIANTI AUTOMATIZZATI",
    description: "Realizza lavorazioni al tornio, fresatrice e macchine utensili in generale. Partendo dal progetto realizzato con il CAD effettua la programmazione delle macchine a controllo numerico. Realizza saldature ad arco, TIG, MAG, taglio al plasma.",
    immagineUrl: "https://www.donboscosandona.it/img/column/b0bd034769ac3471bf375239f1e64e39f5684aa6.jpg?1539523300",
    url: "https://www.donboscosandona.it/meccanico"
  },
  {
    title: "Motoristico / Carrozzeria",
    category: "QUALIFICA DI OPERATORE ALLA RIPARAZIONE DI VEICOLI A MOTORE",
    description: "Effettua riparazioni e manutenzione dei motori e dell'autoveicolo in tutte le sue parti. Effettua diagnosi e prove sui gas di scarico intervenendo per risolvere le anomalie.",
    immagineUrl: "https://www.donboscosandona.it/img/column/342f349c6bb5bbf9a37b95353df2bee2309b9792.jpg?1539524741",
    url: "https://www.donboscosandona.it/motoristico"
  },
]

let postInEvidenza = {
  titolo: 'Le folli notti di Bilal',
  descrizione: 'Il dott. Bilal, noto migliardario pieno di schèi, passa le sue notti tra belle ragazze e partite a poker. Come inviati di donboscosandona siamo riusciti ad accedere a questo mondo esclusivo per raccontarvelo in prima persona...',
  immagineUrl: 'https://media.istockphoto.com/id/522728130/it/foto/amici-divertirsi-giocando-a-poker.jpg?s=612x612&w=is&k=20&c=w2_p0SHrR_-cmURmZY9-dHXu3-qqVqN9QkdiZrgJpfc=',
  testoimmagineUrl: 'Bilal seduto su un divanetto in mezzo a due tipe.',
  testoUrl: 'Continua a leggere e scopri la cosa pazzesca che hanno fatto...',
}

const testimonials = [
  {
    name: "Michele Venturato",
    imageUrl: "https://i.postimg.cc/3NMjxmcp/Screenshot-2023-03-19-alle-16-36-15.png",
    text: "Grande scuola. Una vera scuola professionale e morale. Sforna ogni anno moltissimi tecnici aggiornati con I tempi e in grado di integrarsi con facilita' nel mondo del lavoro. Complimenti a tutto il sistema.",
    social: "@Google"
  },
  {
    imageUrl: "/images/home/recensioni/bob.png",
    name: "Daniele Mladenovic",
    text: "Ho trascorso alcuni anni presso il CFP e ho trovato l'ambiente molto accogliente e confortevole, grazie alla disponibilità di tutto il personale. In particolare, ho apprezzato la passione degli insegnanti, che si sono dimostrati molto competenti. Inoltre, ho avuto l'opportunità di partecipare ad attività extracurricolari e progetti che mi hanno permesso di sviluppare le mie capacità. Infine, consiglio questo istituto sottolineando l'importanza dello sviluppo e della scoperta dei propri talenti che è ciò che ci rende unici.",
    social: "@BOBTEK"
  },
  {
    imageUrl: "https://i.ibb.co/dpQrpNt/img3.jpg",
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
        description="Diventa adulto con il metodo educativo di don Bosco preparandoti ad entrare a testa alta nel mondo professionale di domani!"
        buttonUrl='j'
        buttonText="Guarda il video"
        imageUrl="/images/home/matteo_attacco_hacker.jpg"
      />
      <Container maxWidth="lg" sx={{ marginTop: '3rem', marginBottom: '3rem'  }}>
        <Grid container spacing={4}>
          {
            datiArticoli.map(
              (post) => (
                <Post post={post} />
              )
            )
          }
        </Grid>
      </Container>
      <Carousel slides={slides} />
      <Products
        title="I settori"
        description="Un'ampia scelta di indirizzi professionali: scopri quello che ti accende di più!"
        cardWidth={4}
        products={settori}
      />
      <Carousel slides={slides2} />
      <Features
        title="I nostri punti di forza"
        description="Scopri perché il CFP DON BOSCO è davvero la scuola che fa al caso tuo!"
        features={features}
        cardWidth={3}
      />
      <Testimonials testimonials={testimonials} cardWidth={4} />
      <Team
        title="Contatti"
        description="Formatori che ti aiutano a crescere con il cuore di don Bosco"
        members={members}
        cardWidth={3}
      />
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
