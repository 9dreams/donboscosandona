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
        opacity={0.5}
        title='Progetto educativo'
        description='Diventa adulto con il metodo educativo di don Bosco preparandoti ad entrare a testa alta nel mondo professionale di domani!'
        buttonUrl=''
        buttonText='Guarda il video'
        imageUrl='https://source.unsplash.com/random'
      />
      
      <br></br><br></br><br></br>
      <Carousel slides={slides} />
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
      Url:'https://cf.bstatic.com/xdata/images/hotel/max1024x768/473150764.jpg',
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
      'https://www.fondazioneluigieinaudi.it/wp-content/uploads/2016/08/1372678397603porro-Copia.jpg',
    email: 'd.munari@hotelbenessere.it',
    phone: '0421 3388949874950',
  },
  {
    name: 'Alessandro Cappelletto',
    role: 'ADETTO ALLE ASSUNZIONI',
    description: 'Cerchiamo persone appassionate e determinate per entrare a far parte del nostro team dinamico',
    email: 'a.capelletto@hotelbenessere.it',
    imageUrl:
      'https://www.venetoreport.it/wp-content/uploads/2024/10/Alessandro-Basciano-venetoreport.it-26102024.jpg',
  },
  {
    name: 'Alessandro Ferro',
    role: ' TUTOR DIGITALE / TECNICO INFORMATICO',
    description1:
      'Vicepreside, gestione organizzazione scolastica e pastorale, insegnamento area scientifica ',
    imageUrl:
      'https://www.21secolo.news/wp-content/uploads/2020/08/Alessandro-Borghese-2.jpg',

    email: 'a.ferro@hotelbenessere.it',
    phone: '0421 111 222',
  },
  {
    name: "Anna Maria D'Ambrosio",
    role: 'RESPONSABILE DELLA ATTIVITA ',
    description1:
      'Gestione disciplina,organizzazione scolastica e insegnamento are cultura',
    imageUrl:
      'https://media.licdn.com/dms/image/v2/D4E03AQHK9EDurewPyA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1676375448528?e=2147483647&v=beta&t=Bp7OORcspyrBGV2e40DwcIW6vuODOysYS0VcwNsRN3c',
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
    name: 'Dwayne Johnson',
    imageUrl:
      'https://de.web.img3.acsta.net/c_310_420/pictures/14/07/24/17/14/366516.jpg',
    text: "Esperienza fantastica! Personale gentile e professionale, ambiente rilassante e pulito. Massaggio super rilassante",
    social: '@DwayneJohnson',
  },
  {
    imageUrl:
      'https://media-assets.vanityfair.it/photos/6715ff3b92c599e446bd5d25/16:9/w_2560%2Cc_limit/2077303212',
    name: 'Jennifer Lawrence',
    text: "Centro benessere accogliente e curato nei dettagli. Trattamenti personalizzati e di alta qualità. Tornerò sicuramente!",
    social: '@Jennifer Lawrence',
  },
  {
    imageUrl:
      'https://www.rdeditore.it/it/wp-content/uploads/2024/07/logo_-bonolis.jpg',
    name: 'Paolo Bonolis',
    text: "Ho provato il percorso benessere e sono rimasta incantata. Un'oasi di pace nel cuore della città. Consigliatissimo!",
    social:"@PaoloBonolis"
  },
]







