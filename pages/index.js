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
import { Gif } from '@mui/icons-material'

export default function Home({ data, elementi }) {
  return (
    <Layout>
      <LandingHero
        opacity={0.4}
        imageUrl='https://benessere-montagna.it/wp-content/uploads/2021/06/Andreus-benessere-spa-hotel-slide-01.jpg'
      />
      <br></br><br></br><br></br>
      <Carousel slides={slides} />
<SwiperNews title='News' data={data} limit={6} defaultTag='scuola' />
      <Products
        title='I nostri servizi'
        description="un ampia scelta di servizi con cui puoi ritrovare il tuo benessere in men'che non si dica"
        cardWidth={4}
        cardWidthXs={12}
        products={prodotti}
       
      />
    
      
      <Features
        title='I nostri punti di forza'
        description='Scopri perché il centro benessere, Andreus Resorts fa al caso tuo!'
        features={features}
        cardWidth={3}
      />
      
      
      <Table
        title='I Nostri orari della recepsion'
        subtitle=''
        backgroundImageUrl='https://www.hotel.bz.it/contents/images/list_point/7008/22-Andreus-Golf-Logde-269.jpg'
        backgroundColor='#303841'
        opacity={0.5}
        blur='0.1rem'
        color='white'
        rows={[
          ['GIORNI', '', ''],
          ['Lunedi', '7:30-12:30','13:00-20:30' ],
          ['Martedi', '8:30-12:30','13:30-20:10' ],
          ['Mercoledi', 'Chiusa',],
          ['Giovedi', '7:30-12:10','13:20-20:40' ],
          ['Venerdi', '7:30-12:00','14:00-20:20' ],
          ['Sabato', '7:30-12:30','13:40-20:00' ],
          ['Domenica', '7:30-12:30', '14:00-21:30'],
        ]}
      />
      <br></br>
      <Testimonials
        testimonials={testimonials}
        cardWidth={4}
        imageUrl='https://images8.alphacoders.com/948/948649.jpg'
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
    title: 'terme ',
    imageUrl:
      'https://img.lovepik.com/element/40242/0848.png_1200.png',
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
      imageUrl:'https://www.wallpapermania.eu/images/lthumbs/2013-01/4170_Love-between-animals-true-love.jpg',
    colore: '#9182C4',
    colore2: 'rgba(100,100,100,0)',
    opacity: 0.9,
    blur: '0.5rem',
  },
  {
    titolo: 'Concorso nazionale settore elettrico',
    descrizione:
      "A maggio il nostro Centro avrà l'onore di ospitare il Concorso Nazionale del Settore Elettrico: tutti i Centri di Formazione Professionale salesiani d'Italia invieranno i loro campioni per una settimana di sfida e condivisione professionale...",
    colore: '#9182C4',
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
    name: ' Nicola Munari',
    role: 'DIRETTORE ',
    description: 'Credo fermamente nel potenziale di ciascuno di voi e sono sicuro che insieme raggiungeremo grandi risultati.',
    imageUrl:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
    email: 'd.munari@hotelbenessere.it',
    phone: '0421 3388949874950',
  },
  {
    name: 'Alessandro Cappelletto',
    role: 'ADETTO ALLE ASSUNZIONI',
    description: 'Cerchiamo persone appassionate e determinate per entrare a far parte del nostro team dinamico',
    email: 'c.coso@hotelbenessere.it',
    imageUrl:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    name: 'Alessandro Ferro',
    role: ' TUTOR DIGITALE / TECNICO INFORMATICO',
    description1:
      'Vicepreside, gestione organizzazione scolastica e pastorale, insegnamento area scientifica ',
    imageUrl:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',

    email: 'a.ferro@hotelbenessere.it',
    phone: '0421 111 222',
  },
  {
    name: "Anna Maria D'Ambrosio",
    role: 'RESPONSABILE DELLA ATTIVITA ',
    description1:
      'Gestione disciplina,organizzazione scolastica e insegnamento are cultura',
    imageUrl:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
    email: 'AnnaMaria@hotelbenessere.it',
    phone: '12365598445',
  },
]

let prodotti = [
  {
    title: 'SPA',
    category: 'SCOPRI LA NOSTRA SPA',
    description:
      'Scopri la tua spa domestica: un rifugio di benessere con vasca idromassaggio, angolo massaggi e atmosfere rilassanti. Piante verdi, candele profumate e un area lounge per gustare tisane creano il perfetto spazio per ricaricare le energie e ritrovare il relax.',
    immagineUrl:'https://lh4.googleusercontent.com/proxy/nnrqMtI855tI-BiNdflImdCXMk0zdoYRKqqfDo5RqMHBbzQDy4k_si03LBt_YqETzVP6YmEV5rYXQfQOpctBBmI6VUS7h5ZQgxXjYGIBQOzpa3FI0YExT_2RD-sizEV1FsKE9TlrL_A',
  },
  {
    title: 'Equitazione',
    category: 'CAVALCA I NOSTRI CAVALLI',
    description:
      "Scopri il tuo rifugio per l'equitazione, con una scuderia accogliente e piste immerse nella natura. Lezioni guidate da istruttori esperti e spazi attrezzati garantiscono il benessere dei cavalli. Un angolo ideale per vivere la passione per l'equitazione e rafforzare il legame con il tuo cavallo.",
    immagineUrl:
      'https://www.andreus-resorts.it/%28cms%29/media/resize/size=1600x0%2Cscale=crop%2Cinterlace=1%2Cquality=70/2863671',
    url: '/energia',
  },
  {
    title: 'golf',
    category: 'GIOCA A GOLF!',
    description:
      "Scopri il tuo angolo di golf: un campo ben curato e spazi per la pratica, come driving range e putting green. Con istruttori esperti a disposizione, è il luogo ideale per migliorare le tue abilità e goderti il gioco in un'atmosfera rilassata.",
    immagineUrl:
      'https://www.andreus-resorts.it/%28cms%29/media/resize/size=1600x0%2Cscale=crop%2Cinterlace=1%2Cquality=70/2841787',
    url: '/informatico',
  },
  
]

const testimonials = [
  {
    name: 'Michele Venturato',
    imageUrl:
      'https://de.web.img3.acsta.net/c_310_420/pictures/14/07/24/17/14/366516.jpg',
    text: "Grande scuola. Una vera scuola professionale e morale. Sforna ogni anno moltissimi tecnici aggiornati con I tempi e in grado di integrarsi con facilita' nel mondo del lavoro. Complimenti a tutto il sistema.",
    social: '@Google',
  },
  {
    imageUrl:
      'https://media-assets.vanityfair.it/photos/6715ff3b92c599e446bd5d25/16:9/w_2560%2Cc_limit/2077303212',
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






