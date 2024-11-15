import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
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
} from '/components'

export default function Home({ data }) {
  return (
    <Layout>
      <Carousel slides={slides} />
      <center><h1>Questa pagina è gestita dall'Associazione AGESCI GRUPPO SAN DONA' DI PIAVE 1 </h1></center>
      <Products
        cardWidth={4}
        cardWidthXs={12}
        products={prodotti}
      />
       <LandingHero
        opacity={0.5}
        title='Progetto educativo'
        description='Diventa adulto con il metodo educativo di don Bosco preparandoti ad entrare a testa alta nel mondo professionale di domani!'
        buttonUrl='j'
        buttonText='Guarda il video'
        imageUrl='https://source.unsplash.com/random'
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
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch(
    'https://channels.donboscosandona.it/api/posts/inoratorio'
  )
  const data = await res.json()

  return {
    props: { data },
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
    immagine:
      'http://archive.inoratorio.it/img/column/30211472303b1645d1cc12c0b503416a79219df9.jpg?1665322182',
  },
  {
    immagine:
      'http://archive.inoratorio.it/img/column/b41dd3b003f0eeef7f195fc1f9e4c2d4814a69c7.jpg?1634159948',
  },
  {
    immagine:
      'http://archive.inoratorio.it/img/column/6cfd0ee28b4e543860f59597dd0510dae98b2416.jpg?1665321888',
  },
  {
    immagine:
      'http://archive.inoratorio.it/img/column/9b3d72396bee3cc873722302f24aec00e3cf162d.jpg?1634159658',
  },
  {
    immagine:
      'http://archive.inoratorio.it/img/column/fea4a85745f8307bfff4906a807f1af9e382c893.jpg?1634158926',
  },
  {
    immagine:
      'http://archive.inoratorio.it/img/column/cb5129068d2fa21e287c5eebc0beefb7d344ee63.jpg?1634159425',
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
    title: 'Il Clan alla comunità di Marango !',
    description:"Quest'anno il Clan ha partecipato al Triduo Pasquale con la comunità di Marango, passando tre giorni intrisi di spiritualità e testimonianze...",
    immagineUrl:
      'http://archive.inoratorio.it/img/column/3b4d5d12fd49d1f3468accaf4ea709c605597591.jpg?1713518833',
      url: '/energia',
  },
  {
    title: 'Nuove amicizie per il Clan !',
    description:
      "Abbiamo avuto la fortuna di ospitare un Clan proveniente da...",
    immagineUrl:
      'http://archive.inoratorio.it/img/column/3ac4ab8c7107c11f143e15d564166b8165433572.jpg?1708362939',
    url: '/energia',
  },
  {
    title: 'La Comunità Capi in cammino su progettualità e condivisione',
    description:'',
    immagineUrl:
    'http://archive.inoratorio.it/img/column/edd7c6737d36471dc3a86a295dc2d8283b503491.jpg?1707810839',
    url: '/informatico',
  },
  {
    title: 'chi siamo',
    description:
      "Visione e condivisione: il progetto del capo, un filo che unisce la Co.Ca.",
    immagineUrl:
      'https://www.cesarelanza.com/wp/wp-content/uploads/2019/01/domanda-omino.jpg',
    url: '/informatico',
  },
  {
    title: 'storia',
    description:
      "Visione e condivisione: il progetto del capo, un filo che unisce la Co.Ca.",
    immagineUrl:
      'https://www.meteoweb.eu/wp-content/uploads/2017/01/STORIA.jpg',
    url: '/informatico',
  },
  {
    title: 'La Comunità Capi in cammino su progettualità e condivisione',
    description:
      "Visione e condivisione: il progetto del capo, un filo che unisce la Co.Ca.",
    immagineUrl:
      'https://static.vecteezy.com/ti/vettori-gratis/p1/3720498-icona-telefono-icona-telefono-simbolo-per-app-e-messenger-vettoriale.jpg',
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
