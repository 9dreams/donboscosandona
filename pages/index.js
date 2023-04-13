import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero2.js'
import Features from '/components/Features'
import Carousel from '/components/Carousel'
import Products from '/components/Products'
import Testimonials from '/components/Testimonials'
import Team from '/components/Team'
import Post from '/components/Post'
import Certifications from '@/components/Certifications'
import Maps from '/components/Maps'
import Paragraph from 'components/Paragraph'

import { getDatiArticoli } from '/lib/articoli'

// I punti di forza
const features = [
  {
    title: "Una proposta cristiana",
    imageUrl: "https://teamtrex.com.au/wp-content/uploads/2021/06/Strength-icon.png",
    description: "Un progetto chiaro e affidabile per far crescere e diventare uomini. "
  },
  {
    title: "Divertendosi insieme",
    imageUrl: "https://teamtrex.com.au/wp-content/uploads/2021/06/Strength-icon.png",
    description: "Lezioni attive e coinvolgenti per dimenticare la noia e partecipare da protagonisti."
  },
  {
    title: "Mettendo a frutto la creatività",
    imageUrl: "https://teamtrex.com.au/wp-content/uploads/2021/06/Strength-icon.png",
    description: "12 ore settimanali in laboratori tecnologicamente all'avanguardia per formare i professionisti del futuro."
  },
  {
    title: "Esplorando il mondo",
    imageUrl: "https://teamtrex.com.au/wp-content/uploads/2021/06/Strength-icon.png",
    description: "Orientamento, stage e alternanza, i nostri esperti ti accompagneranno fino all'effettivo inserimento nelle aziende del settore."
  }
]


// slides per il carousel
let serate = [
  {
    titolo: 'Serata 1',
    descrizione: 'Scopri tutti i segreti del nostro Centro con il tour virtuale!',
    immagine: 'https://source.unsplash.com/random',
  },
  {
    titolo: 'Serata 2',
    descrizione: "A maggio il nostro Centro avrà l'onore di ospitare il Concorso Nazionale del Settore Elettrico: tutti i Centri di Formazione Professionale salesiani d'Italia invieranno i loro campioni per una settimana di sfida e condivisione professionale...",
    colore: '#22aa22',
  },
]

let gite = [
  {
    titolo: 'Gita a Noale',
    descrizione: '22 Giugno e 11 Luglio - Scopri tutti i segreti del nostro Centro con il tour virtuale!',
    immagine: '/images/gite/aquaestate.webp',
  },
  {
    titolo: 'Gita in Val di Gares',
    descrizione: "27 Giugno - A maggio il nostro Centro avrà l'onore di ospitare il Concorso Nazionale del Settore Elettrico: tutti i Centri di Formazione Professionale salesiani d'Italia invieranno i loro campioni per una settimana di sfida e condivisione professionale...",
    immagine: '/images/gite/val_gares.jpeg',
  },
  {
    titolo: 'Gita al Parco Sigurtà',
    descrizione: "4 Luglio - A maggio il nostro Centro avrà l'onore di ospitare il Concorso Nazionale del Settore Elettrico: tutti i Centri di Formazione Professionale salesiani d'Italia invieranno i loro campioni per una settimana di sfida e condivisione professionale...",
    immagine: '/images/gite/parco_sigurta.jpeg',
  },
]

// Il nostro team
let members = [
  {
    name: "Segreteria PER",
    role: "Iscrizioni e informazioni generali",
    description: "And I love you like Kanye",
    imageUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600",
    email: "per@donboscosandona.it",
    phone: '0421 3388949874950',
  },
  {
    name: "don Michele Bortolato",
    role: "Responsabile dell'attività",
    description: "And I love you like Kanye",
    imageUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    name: "Cinema don Bosco",
    role: "Orari e biglietti",
    description1: "Puoi acquistare i biglietti per le serate cinema al prezzo speciale riservato agli iscritti alla PER e ai loro amici e familiari il lunedì mattina dalle 8.30 alle 12.30 o negli altri orari di apertura del cinema, purché entro le ore 19.00 del giorno dello spettacolo.",
    imageUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600",
    email: "cinema@donboscosandona.it",
    phone: '346 960 5687',
  },
]

let in_evidenza = [
  {
    title: 'Iscrizioni',
    description: 'Tutto quello che devi sapere per iscriverti alla #PER23',
    immagineUrl: "https://fumettologica.it/wp-content/uploads/2022/07/trailer-pinocchio-netflix-del-toro.jpg",
    url: '/iscrizioni'
  },
  {
    title: 'Calendario',
    description: 'Scopri la #PER23 giorno per giorno',
    immagineUrl: "https://teamtrex.com.au/wp-content/uploads/2021/06/Strength-icon.png",
    url: '/calendario'
  },
  {
    title: 'Tema formativo',
    description: 'Scopri la #PER23 giorno per giorno',
    immagineUrl: "https://teamtrex.com.au/wp-content/uploads/2021/06/Strength-icon.png",
    url: '/tema'
  },
  {
    title: 'Squadre',
    description: 'Scopri la #PER23 giorno per giorno',
    immagineUrl: "https://teamtrex.com.au/wp-content/uploads/2021/06/Strength-icon.png",
    url: '/tema'
  },
]

let laboratori = [
  {
    title: 'Espressivi',
    description: 'Tutto quello che devi sapere per iscriverti alla #PER23',
    immagineUrl: "https://teamtrex.com.au/wp-content/uploads/2021/06/Strength-icon.png",
    url: '/iscrizioni'
  },
  {
    title: 'Sportivi',
    description: 'Scopri la #PER23 giorno per giorno',
    immagineUrl: "https://teamtrex.com.au/wp-content/uploads/2021/06/Strength-icon.png",
    url: '/calendario'
  },
  {
    title: 'Artistici',
    description: 'Scopri la #PER23 giorno per giorno',
    immagineUrl: "https://teamtrex.com.au/wp-content/uploads/2021/06/Strength-icon.png",
    url: '/tema'
  },
  {
    title: 'Novità 2023',
    description: 'Scopri la #PER23 giorno per giorno',
    immagineUrl: "/images/laboratori_new/lhsfondo.jpg",
    url: '/laboratori_new'
  },
]

let altri_link = [
  {
    title: 'Regolamento',
    description: 'Tutto quello che devi sapere per iscriverti alla #PER23',
    immagineUrl: "https://teamtrex.com.au/wp-content/uploads/2021/06/Strength-icon.png",
    url: '/iscrizioni'
  },
  {
    title: 'Servizio autobus',
    description: 'Scopri la #PER23 giorno per giorno',
    immagineUrl: "https://teamtrex.com.au/wp-content/uploads/2021/06/Strength-icon.png",
    url: '/calendario'
  },
  {
    title: 'Momenti di preghiera e riflessione',
    description: 'Scopri la #PER23 giorno per giorno',
    immagineUrl: "https://teamtrex.com.au/wp-content/uploads/2021/06/Strength-icon.png",
    url: '/tema'
  },
  {
    title: 'Gruppo Special',
    description: 'Scopri la #PER23 giorno per giorno',
    immagineUrl: "https://teamtrex.com.au/wp-content/uploads/2021/06/Strength-icon.png",
    url: '/laboratori'
  },
  {
    title: 'Spazio animatori',
    description: 'Scopri la #PER23 giorno per giorno',
    immagineUrl: "https://teamtrex.com.au/wp-content/uploads/2021/06/Strength-icon.png",
    url: '/laboratori'
  },
  {
    title: 'Spazio genitori',
    description: 'Scopri la #PER23 giorno per giorno',
    immagineUrl: "https://teamtrex.com.au/wp-content/uploads/2021/06/Strength-icon.png",
    url: '/laboratori'
  },
  {
    title: 'Dopo la Campanella Summer Edition',
    description: 'Scopri la #PER23 giorno per giorno',
    immagineUrl: "/images/dlc/imgsfondo1.png",
    url: '/dlc'
  },
]

const testimonials = [
  {
    imageUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600",
    name: "Michela B.",
    text: "Grazie mille per tutte le infinite emozioni che ci avete regalato, non solo nella serata finale ma in ogni occasione come alla sfilata, alle gite, ai momenti di condivisione, alle cene all'aperto e ai cori delle squadre o alle canzoni cantate e ballate che si sentivano fino a fuori dell'oratorio... per noi è stata la prima esperienza ipergalattica, ma la cosa più bella è che questa PER ha fatto scoprire nuove passioni grazie ai laboratori... Non resta che ringraziare tutti, dal primo all'ultimo e dirvi di continuare così, perchè come alla PER non ci di diverte!!!",
    social: "@giovane iscritta"
  },
  {
    imageUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600",
    name: "Samuele D.",
    text: "E' stato il mio primo anno alla PER. Il prossimo sarò ancora con voi perchè l'UNIONE, la CONDIVISIONE e l'AMICIZIA che si creano all'oratorio don Bosco sono... wow!!! Mi sono divertito un mondo!!! Grazie di tutto!! Alla prossima!!!",
    social: "@animatore"
  },
  {
    name: "Loredana Z.",
    imageUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600",
    text: "A chi dice che i giovani non hanno voglia di fare nulla, io li inviterei in oratorio durante la PER. Che vedano gli animatori e il lavoro che dedicano per allietare bambini e bambine e la gioia che trasmettono. Quando ragazzi e bambini trovano un senso, sono i primi a buttarsi. Ma la PER non è solo gioco e svago. E' un'esperienza che aiuta i più piccoli ad esprimere i loro talenti, a condividere lo stile e il carisma salesiano, a vivere in una comunità che è fortemente educante e gioiosa. Un grazie di cuore all'Oratorio don Bosco!!!",
    social: "@mamma"
  },
]

export default function Home({ datiArticoli }) {
  return (
    <Layout>
      <LandingHero
        opacity={0.2}
        title="Proposta Estate Ragazzi 2023"
        description="Il sito della PER 23"
        buttonUrl='j'
        buttonText="Guarda il video"
        imageUrl="https://www.saledellacomunita.it/wp-content/uploads/2022/12/Guillermo-del-Toro-parla-di-3-film-di-Pinocchio-in.jpg"
      />
      <Paragraph
        title="Perché il tempo spensierato non sia tempo perso"
        subtitle="Saluto del Direttore, don Nicola Munari"
      >
        <p>Quando finalmente suona l’ultima campanella dell’anno scolastico inizia quel periodo tanto atteso dove finalmente si può fare ciò che si vuole, senza troppi vincoli o regole, sveglie troppo mattiniere, insegnanti esigenti e compiti che preoccupano. Spensieratezza! Questa l’attesa più grande durante l’ultima parte dell’anno scolastico. Purtroppo tanto è grande l’attesa delle vacanze, tanto è veloce il tempo in cui la spensieratezza diventa noia, la libertà diventa ozio e pigrizia e il tempo libero rischia di diventare tempo perso.</p>
        
        <p>La Proposta Estate Ragazzi, da più di 40 anni, è un’occasione per vivere un’Estate davvero ricca: di incontri, attività molteplici, gite, escursioni, serate con le famiglie… il tutto vissuto in un clima di amicizia, festa e grinta che contagiano e coinvolgono tutti.</p>
        
        <p>Se mi domandassero perché venire alla P.E.R. 2023 direi solo questo. È un’esperienza per vivere alla grande e non vivacchiare. A noi piace vivere così: ogni giornata è densa perché piena di cose belle, vissute con grinta ed entusiasmo. Questo l’augurio per ogni genitore, ogni ragazzo e ogni educatore che vivrà questa proposta: “Che ogni giorno ci veda andare a letto stanchi ,ma felici per gli incontri, per la gioia condivisa e le esperienze arricchenti che potremmo fare insieme”. Buona P.E.R. 2023!</p>
      </Paragraph>
      <Features
        title="La #per dell'Oratorio don Bosco è..."
        description=""
        features={features}
        cardWidth={3}
      />
      <Paragraph
        title="Orario della giornata"
      >
        ...
      </Paragraph>
      <Products
        title=""
        description=""
        cardWidth={3}
        products={in_evidenza}
      />
      <Carousel
        slides={gite}
        height={70}
      />
      <Products
        title="I laboratori"
        description="Stare insieme..."
        cardWidth={3}
        products={laboratori}
      />
      <Carousel
        slides={serate}
        height={70}
      />
      <Paragraph
        title="Stay tuned"
      >
        ...
      </Paragraph>
      <Testimonials
        testimonials={testimonials}
        cardWidth={4}
        imageUrl="/images/home/sfondo_giostra.jpeg"
      />
      <Products
        cardWidth={2}
        products={altri_link}
      />
      <Paragraph
        title="La Segreteria"
      >
        ...
      </Paragraph>
      <Team
        title="Contatti"
        description="Hai dei dubbi? Contattaci pure (preferibilmente via email) e ti risponderemo il prima possibile."
        members={members}
        cardWidth={4}
      />
      <Maps
        maxWidth='100%'
        maxHeight='550px'
        url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5580.05343317009!2d12.5710658!3d45.6301996!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477956fe076b4157%3A0x29fb231d47465883!2sCnos%20Fap%20Don%20Bosco!5e0!3m2!1sit!2sit!4v1680507660807!5m2!1sit!2sit"
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