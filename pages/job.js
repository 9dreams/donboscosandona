import LandingHero from "@/components/LandingHero";
import Layout from "@/components/Layout";
import Head from 'next/head'
import Products from '/components/Products'
import Button from '@mui/material/Button'

import styles from './job.module.css'
import { useSlotProps } from "@mui/base";

// Voci del menù per il componente LandingHero
let menu = [
  { title: 'Chi siamo', url: '/chi-siamo' },
  { title: 'Contatti', url: '/contatti' },
  { title: 'Dove siamo', url: '/dove-siamo' },
  { title: 'Trasparenza', url: '/trasparenza' },
  { title: 'Home', url: '/' },
]

let settori = [
  {
    title: "Cercasi operatori meccanici",
    description: "Azienda di Chiarano ricerca fresatori da inserire.",
    immagineUrl: "/images/job/26.jpg",
    rif: 'Rif. 26',
    labelColor: 'rgb(161,196,32)',
  },
  {
    title: "Operatore meccanico",
    description: "Cercasi un profilo da inserire all’interno di azienda come operaio montatore in carpenteria metallica pesante.",
    immagineUrl: "/images/job/25.jpg",
    rif: 'Rif. 25',
    labelColor: 'rgb(161,196,32)',
  },
  {
    title: "Cercasi operaio fresatore",
    description: "Azienda specializzata nelle lavorazioni meccaniche a pressione ad alta qualità, nella fresatura e tornitura su acciaio, materie plastiche e leghe leggere con particolare esperienza nell’alluminio, cerca un operaio fresatore oppure apprendista possibilmente diplomato.",
    immagineUrl: "/images/job/24.jpg",
    rif: 'Rif. 24',
    labelColor: 'rgb(161,196,32)',
  },
  {
    title: "Neodiplomato termotecnico",
    description: "Ditta di Azzano Decimo che si occupa di produzione ed installazione di pannelli radianti cerca diplomato da inserire nello staff. La risorsa affiancherà l’ufficio tecnico per la progettazione dei layout impianto radiante e sarà di supporto nella gestione dei cantieri. E’ richiesta la conoscenza e l’uso del programma AUTOCAD.",
    immagineUrl: "/images/job/23.jpg",
    rif: 'Rif. 23',
    labelColor: 'rgb(245,166,9)',
  },
  {
    title: "Diplomati tecnico energetico ed elettrico",
    description: "Azienda cerca diplomati nei settori elettrico ed energetico, zona Motta di Livenza.",
    immagineUrl: "/images/job/22.jpg",
    rif: 'Rif. 22',
    labelColor: 'rgb(245,166,9)',
  },
  {
    title: "Stagisti per carrozzeria",
    description: "Cercasi qualificati settore motoristico da inserire, anche in stage presso carrozzeria zona Salgareda.",
    immagineUrl: "/images/job/21.jpg",
    rif: 'Rif. 21',
    labelColor: 'rgb(225,9,48)',
  },
  {
    title: "Diploma indirizzo meccanico e meccatronico",
    description: "Ditta che si occupa di costruzione stampi in acciaio per materie plastiche cerca diplomati nel settore da integrare come dipendenti in officina.",
    immagineUrl: "/images/job/20.jpg",
    rif: 'Rif. 20',
    labelColor: 'rgb(161,196,32)',
  },
  {
    title: "Apprendista meccatronico",
    description: "Giovane appassionato di automotive, appena diplomato presso una scuola professionale o con un’esperienza lavorativa pregressa in officina, anche in ambiti differenti dal veicolo industriale. Necessaria la disponibilità a spostamenti fuori sede per interventi su strada e corsi di formazione. Preferibile che il candidato abiti nel raggio di 20 km dal comune di San Stino di Livenza.",
    immagineUrl: "/images/job/19.jpg",
    rif: 'Rif. 19',
    labelColor: 'rgb(161,196,32)',
  },
  {
    title: "Cercasi diplomato",
    description: "Azienda del settore elettrico cerca diplomato con competenze di disegno tecnico, pacchetto office, inglese livello base e con conoscenze su utilizzo di strumenti di misura di base (calibro, strumenti campione, calibromicrometro, etc.) Zona Noventa di Piave.",
    immagineUrl: "/images/job/18.jpg",
    rif: 'Rif. 18',
    labelColor: 'rgb(1,157,205)',
  },
  {
    title: "Qualificati o diplomati settore elettrico",
    description: "Azienda di Motta di Livenza è interessata all'assunzione di due ragazzi che abbiano finito il terzo o quarto anno.",
    immagineUrl: "/images/job/17.jpg",
    rif: 'Rif. 17',
    labelColor: 'rgb(1,157,205)',
  },
  {
    title: "Diploma tecnico elettrico",
    description: "Azienda settore elettrico, cerca diplomati.Zona Mogliano Veneto.",
    immagineUrl: "/images/job/16.jpg",
    rif: 'Rif. 16',
    labelColor: 'rgb(1,157,205)',
  },
  {
    title: "Tecnico energetico",
    description: "Azienda di produzione cabine doccia, cercas diplomati da inserire nel reparto produzione.Zona Torre di Mosto.",
    immagineUrl: "/images/job/15.jpg",
    rif: 'Rif. 15',
    labelColor: 'rgb(245,166,9)',
  },
  {
    title: "Tecnico meccanico",
    description: "Cercasi tecnico meccanico, che abbia proseguito gli studi fino al conseguimento della maturità. SI richiede i fondamenti basilari del disegno tecnico e la conoscenza del programma Autocad. Zona San Donà di Piave.",
    immagineUrl: "/images/job/14.jpg",
    rif: 'Rif. 14',
    labelColor: 'rgb(161,196,32)',
  },
  {
    title: "Operatore energetico",
    description: "Azienda che si occupa di impianti termoidraulici e assistenza caldaie e pompe di calore in ambito civile ed industriale, cerca personale qualificato.",
    immagineUrl: "/images/job/13.jpg",
    rif: 'Rif. 13',
    labelColor: 'rgb(245,166,9)',
  },
  {
    title: "Tecnico meccanico",
    description: "Cercasi disegnatore meccanico a tempo pieno. Requisiti e competenze: diploma tecnico in meccanica, conoscenza pacchetto office, conoscenza base software 3D. Principali mansioni: sviluppo disegni meccanici con software CAD.",
    immagineUrl: "/images/job/12.jpg",
    rif: 'Rif. 12',
    labelColor: 'rgb(161,196,32)',
  },
  {
    title: "Operatore macchine utensili CNC",
    description: "Azienda zona Meolo, cerca un operatore attrezzaggio macchine CNC, con buona capacità di relazionarsi e lavorare in team. Scopo assunzione definitiva.",
    immagineUrl: "/images/job/11.jpg",
    rif: 'Rif. 11',
    labelColor: 'rgb(161,196,32)',
  },
  {
    title: "Operatore elettrico",
    description: "Cercasi personale qualificato per azienda di costruzioni elettromeccaniche ed impianti elettrici. Zona San Donà di Piave.",
    immagineUrl: "/images/job/10.jpg",
    rif: 'Rif. 10',
    labelColor: 'rgb(1,157,205)',
  },
  {
    title: "Operatore elettrico",
    description: "Offresi lavoro come operatore elettrico, si richiede qualifica professionale PRESSO CAVALLINO-TREPORTI.",
    immagineUrl: "/images/job/9.jpg",
    rif: 'Rif. 9',
    labelColor: 'rgb(1,157,205)',
  },
  {
    title: "Cercasi diplomato",
    description: "Offresi lavoro come operatore elettrico, si richiede qualifica professionale PRESSO CAVALLINO-TREPORTI.",
    immagineUrl: "/images/job/8.jpg",
    rif: 'Rif. 8',
    labelColor: 'rgb(1,157,205)',
  },
  {
    title: "Operatore meccanico",
    description: "La figura ricercata si occuperà di elaborare disegni tecnici di macchinari o di parti di macchinari di processo in supporto al team dell'ufficio tecnico. Anche senza esperienza pregressa nel ruolo, si garantisce formazione ed affiancamento. richiesta preferibile dimestichezza con il disegno tecnico, con il programma CAD (2D e 3D) e una buona conoscenza della lingua inglese.",
    immagineUrl: "/images/job/7.jpg",
    rif: 'Rif. 7',
    labelColor: 'rgb(161,196,32)',
  },
  {
    title: "Operatori elettrici e termoidraulici",
    description: "Cercasi idraulico ed elettricista, azienda che si occupa di impianti di condizionamento e riscaldamento, caldaie, impianti fotovoltaici, pannelli solari, impianti di allarme e sicurezza.",
    immagineUrl: "/images/job/6.jpg",
    rif: 'Rif. 6',
    labelColor: 'rgb(245,166,9)',
  },
  {
    title: "Operatore meccanico",
    description: "Azienda del settore cerca tornitori, fresatori, operatori macchine utensili.",
    immagineUrl: "/images/job/5.jpg",
    rif: 'Rif. 5',
    labelColor: 'rgb(161,196,32)',
  },
  {
    title: "Operatore termoidraulico",
    description: "Cercasi operatori addetti alla manutenzione, riparazione di impianti tecnologici ( climatizzazione invernale ed estiva, trattamento acque ecc..).",
    immagineUrl: "/images/job/4.jpg",
    rif: 'Rif. 4',
    labelColor: 'rgb(245,166,9)',
  },
  {
    title: "Operatore motoristico",
    description: "Cercasi gommista, zona Musile e Jesolo.",
    immagineUrl: "/images/job/3.jpg",
    rif: 'Rif. 3',
    labelColor: 'rgb(225,9,48)',

  },
  {
    title: "Operatore elettrico",
    description: "Azienda nell'ambito della sicurezza, con sede a Jesolo, cerca operatore elettrico per sistemi di allarme.",
    immagineUrl: "/images/job/2.jpg",
    rif: 'Rif. 2',
    labelColor: 'rgb(1,157,205)',

  },
  {
    title: "Operatore elettrico",
    description: "Annuncio: azienda di ascensori cerca elettricista.",
    immagineUrl: "/images/job/1.jpg",
    rif: 'Rif. 1',
    labelColor: 'rgb(1,157,205)',
  },
]



export default function Home() {
  return (
    <Layout>
      <Head />
      <LandingHero
        opacity={0.5}
        siteName="CFP DON BOSCO"
        title="OFFERTE DI LAVORO"
        description="Diventa adulto con il metodo educativo di don Bosco preparandoti ad entrare a testa alta nel mondo professionale di domani!"
        buttonUrl={'https://www.youtube.com/watch?v=wyjm1yGmu9g'}
        buttonText="Guarda il video"
        imageUrl="/images/home/matteo_attacco_hacker.jpg"
        menu={menu}
      />
      <Button
        variant="contained"
        size="large"
        color="error"
        href="https://docs.google.com/forms/d/e/1FAIpQLScT8wrDP7INROdL74k39tLZxwf-Aarbx8vzqNI-09Nslgmw8g/viewform?usp=sf_link"
        className={styles.modulobt}
      >
        <h1 id={styles.btmodulo}>Compila il modulo</h1>
      </Button>
      <Products
        cardWidth={4}
        products={settori}
      >
      </Products>


    </Layout>
  )
}

