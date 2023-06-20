import Head from 'next/head'

import { Button, Container, Typography, Grid } from '@mui/material'

import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero2.js'
import Features from '/components/Features'
import Carousel from '/components/Carousel'
import Products from '/components/Products'
import Testimonials from '/components/Testimonials'
import Team from '/components/Team'
import Maps from '/components/Maps'
import Paragraph from 'components/Paragraph'
import Table from 'components/Table'
import Post from 'components/Post'

export default function Home({ datiArticoli }) {
  return (
    <Layout>
      <Head>
        <title>Proposta Estate Ragazzi di San Donà di Piave</title>
        <meta name='og:url' content='https://per.donboscosandona.it/' />
        <meta name='og:type' content='website' />
        <meta name='og:locale' content='it_IT' />
        <meta
          name='og:title'
          content='Proposta Estate Ragazzi di San Donà di Piave'
        />
        <meta
          name='og:description'
          content="Il sito ufficiale della Proposta Estate Ragazzi dell'Oratorio don Bosco di San Donà di Piave (VE)"
        />
        <meta
          name='og:image'
          content='https://www.saledellacomunita.it/wp-content/uploads/2022/12/Guillermo-del-Toro-parla-di-3-film-di-Pinocchio-in.jpg'
        />
      </Head>
      <LandingHero
        opacity={0.2}
        title='Proposta Estate Ragazzi'
        description='Dal 15 Giugno al 14 Luglio 2023'
        buttonUrl='/tema'
        buttonText='be-Real: from lie to Life'
        imageUrl='https://www.saledellacomunita.it/wp-content/uploads/2022/12/Guillermo-del-Toro-parla-di-3-film-di-Pinocchio-in.jpg'
      />
      <Paragraph
        title='Perché il tempo spensierato non sia tempo perso'
        subtitle='Saluto del Direttore, don Nicola Munari'
        avatarImageUrl='/images/home/nik.png'
        columnCount={2}
      >
        <p>
          Quando finalmente suona l’ultima campanella dell’anno scolastico
          inizia quel periodo tanto atteso dove finalmente si può fare ciò che
          si vuole, senza troppi vincoli o regole, sveglie troppo mattiniere,
          insegnanti esigenti e compiti che preoccupano. Spensieratezza! Questa
          l’attesa più grande durante l’ultima parte dell’anno scolastico.
          Purtroppo tanto è grande l’attesa delle vacanze, tanto è veloce il
          tempo in cui la spensieratezza diventa noia, la libertà diventa ozio e
          pigrizia e il tempo libero rischia di diventare tempo perso.
        </p>
        <p>
          La Proposta Estate Ragazzi, da più di 40 anni, è un’occasione per
          vivere un’Estate davvero ricca: di incontri, attività molteplici,
          gite, escursioni, serate con le famiglie… il tutto vissuto in un clima
          di amicizia, festa e grinta che contagiano e coinvolgono tutti.
        </p>
        <p>
          Se mi domandassero perché venire alla P.E.R. 2023 direi solo questo. È
          un’esperienza per vivere alla grande e non vivacchiare. A noi piace
          vivere così: ogni giornata è densa perché piena di cose belle, vissute
          con grinta ed entusiasmo. Questo l’augurio per ogni genitore, ogni
          ragazzo e ogni educatore che vivrà questa proposta: “Che ogni giorno
          ci veda andare a letto stanchi ,ma felici per gli incontri, per la
          gioia condivisa e le esperienze arricchenti che potremmo fare
          insieme”. Buona P.E.R. 2023
        </p>
      </Paragraph>
      <Container maxWidth='lg' sx={{ marginTop: '5rem', marginBottom: '6rem' }}>
        <Typography
          style={{ textAlign: 'left', paddingBottom: '2rem' }}
          component='h2'
          variant='h4'
          color='inherit'
          gutterBottom
        >
          Le ultime news
        </Typography>
        <Grid container spacing={4}>
          {datiArticoli.map((post) => (
            <Post post={post} />
          ))}
        </Grid>
      </Container>
      <Features
        title="La #per dell'Oratorio don Bosco è..."
        description=''
        features={features}
        cardWidth={3}
      />
      <Table
        title='Orario della Giornata tipo'
        backgroundImageUrl='/images/giornata.png'
        backgroundColor='#e84393'
        opacity={0.5}
        blur='0.1rem'
        color='white'
        rows={[
          ['Mattino', '', 'Pomeriggio', ''],
          ['8.30', 'Accoglienza informale', '14.30', 'Riapertura cancelli'],
          [
            '8.45',
            'Preghiera e avvisi animatori',
            '15.00',
            'Inizio pomeriggio: tornei, giochi al parco, spettacoli, ecc.',
          ],
          [
            '9.30',
            'Momento di preghiera ragazzi',
            '17.45',
            'Concludiamo insieme la giornata',
          ],
          [
            '10.00',
            'Prima ora di attività',
            '18.00',
            'Termine attività pomeridiane',
          ],
          [
            '10.50',
            'Ricreazione',
            '18.30',
            'Santa Messa (per chi lo desidera)',
          ],
          [
            '11.10',
            'Seconda ora di attività',
            '20.45',
            'Serate: spettacoli, tornei, animazione, film...',
          ],
          [
            '12.00',
            'A casa... buon pranzo!',
            '',
            'Attenzione: tutti i mercoledì pomeriggio non c’è attività pertanto l’oratorio rimarrà chiuso.',
          ],
        ]}
      />
      <Products cardWidth={3} products={in_evidenza} borderRadius='50%' />
      <Carousel slides={gite} height={70} />
      <Products
        title='I laboratori'
        description='Scegli due laboratori per le prime due settimane di PER, e altri due per le ultime due settimane. '
        cardWidth={3}
        products={laboratori}
        borderRadius='2rem'
      />
      <Carousel slides={serate} height={70} />
      <Products
        title='Serate Cinema'
        description='Ogni lunedì sera sarà la serata dedicata al cinema. Le proiezioni inizieranno alle ore 20:45, con accesso alla biglietteria da via XIII Martiri, al prezzo incredibile di 4,00 € (più un euro se non hai ancora gli occhiali 3D);
 l’uscita invece sarà fatta dalla parte dell’Oratorio, per garantire una maggiore sicurezza dei ragazzi mentre aspettano i genitori.
 
 Per ottenere il biglietto al prezzo speciale PER, l’acquisto deve essere fatto alla biglietteria del Cinema il lunedì mattina dalle 8.30 alle 9.30 o dalle 11.30 alle 12.30 o tutti i giorni dalle 16 alle 19. In alternativa è possibile acquistarlo online sul sito del cinema al prezzo consueto (5 € il biglietto e 2 € gli occhiali 3D): potrai scegliere con comodo il posto e ci darai un aiutino in più. '
        cardWidth={3}
        products={serate_cinema}
        borderRadius='5px'
      />
      <Paragraph
        title='Stay tuned'
        subtitle='Per essere sempre aggiornato sulla PER!'
        avatarImageUrl='https://cdn-icons-png.flaticon.com/512/124/124034.png'
      >
        <p>
          Sito internet e Social Network verranno continuamente aggiornati per
          raccontare cos'è la proposta estate e per ricordare tutti gli
          appuntamenti importanti.
          <br />
          Animatori, ragazzi e genitori potranno così essere sempre connessi e
          raccontare la propria esperienza usando gli hashtag #PER23{' '}
        </p>
        <p>
          Seguiteci su
          <br />
          Instagram @inoratorio.it
          <br />
          Facebook @Don Bosco San Donà - inoratorio.it
        </p>
        <p>
          <b>
            Anche quest’anno potrai ricevere tutte le NEWS della PER23
            direttamente su WhatsApp!!!
          </b>
          <br /> E' semplice e comodo... usando il tuo telefono tocca il
          seguente bottone per iscriverti:
          <br />
          <Button
            sx={{
              width: '100%',
              marginTop: '2rem',
              marginBottom: '2rem',
              padding: '1rem',
              borderRadius: '2rem',
            }}
            target='_blank'
            color='success'
            variant='contained'
            href='https://chat.whatsapp.com/KrecmR06m0rFcpGzmbO7C0'
          >
            ISCRIVITI ALLE NEWS SU WHATSAPP
          </Button>
        </p>
      </Paragraph>
      <Testimonials
        testimonials={testimonials}
        cardWidth={4}
        imageUrl='/images/home/sfondo_giostra.jpeg'
      />
      <Products cardWidth={3} products={altri_link} borderRadius='50%' />
      <Paragraph
        title='La Segreteria durante la PER'
        backgroundColor='#3867d6'
        opacity={0.5}
        blur='0.2rem'
        maxWidth={false}
        color='white'
        backgroundImageUrl='/images/segreteria.png'
      >
        <p>
          La segreteria sarà aperta per le iscrizioni alle varie gite e per
          qualsiasi informazione dal lunedì al venerdì nei seguenti orari:
        </p>
        <p align='center'>
          <b>
            <br />
            8.30 - 10.00
            <br />
            11.45 - 12.15
            <br />
            14.40 - 15.20
            <br />
            17.30 - 18.15
          </b>
        </p>
        <p>
          La segreteria rimarrà chiusa le mattine in cui ci saranno le gite ed
          il mercoledì pomeriggio.{' '}
        </p>
        <p>
          Ricordiamo che l’iscrizione alle uscite deve avvenire{' '}
          <b>
            al massimo entro le ore 12.00 di due giorni precedenti all’uscita
          </b>{' '}
          (salvo eventuali altre indicazioni).
        </p>
        <p>
          Le liste verranno esposte verso le 18.00 nella vigilia delle gite.
        </p>
        <p>
          Non è necessaria la presenza del genitore per l’iscrizione alle gite.
        </p>
      </Paragraph>
      <Team
        title='Contatti'
        description='Hai dei dubbi? Contattaci pure (preferibilmente via email) e ti risponderemo il prima possibile.'
        members={members}
        cardWidth={4}
      />
      <Maps
        maxWidth='100%'
        maxHeight='550px'
        url='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5580.164099261905!2d12.571927!3d45.629088!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477957021a6f5e37%3A0x2767632f6958496c!2sOratorio%20Don%20Bosco!5e0!3m2!1sit!2sit!4v1682593458374!5m2!1sit!2sit'
      />
    </Layout>
  )
}

import { getDatiArticoli } from '/lib/articoli'

export async function getStaticProps() {
  const datiArticoli = getDatiArticoli()
  return {
    props: {
      datiArticoli,
    },
  }
}

// I punti di forza
const features = [
  {
    title: 'Una proposta cristiana',
    imageUrl: '/images/home/proposta_cristiana.png',
    description:
      "Nel cuore dell'estate la PER vuol essere un'occasione per riscoprire la bellezza della fede.",
  },
  {
    title: 'In allegria',
    imageUrl: '/images/home/divertendosi.png',
    description:
      'La PER è piena di allegria vissuta in compagnia in ogni momento: giochi, attività, gite, serate...',
  },
  {
    title: 'Mettendo a frutto la creatività',
    imageUrl: '/images/home/creativa.png',
    description:
      "Nei laboratori i talenti fioriscono: in te forse c'è uno sportivo, un artista, un creativo... scegli con cura al momento della preiscrizione.",
  },
  {
    title: 'Coltivando le relazioni',
    imageUrl: '/images/home/esplorando.png',
    description:
      'Durante la PER non sarai mai da solo: educatori, animatori, altri ragazzi, ospiti... ognuno è un mondo da esplorare, devi solo buttarti!',
  },
]

// slides per il carousel
let serate = [
  {
    titolo: "Oratorio's Got Talent",
    descrizione:
      'Martedì 20 Giugno / Una serata dedicata ai talenti dei ragazzi della PER#23!!! Metti alla prova la tua creatività artistica, canora, di ballo, teatrale in una sfida mozzafiato!',
    immagine: '/images/serate/talent.jpeg',
    colore: '#e84393',
    opacity: 0.6,
    blur: '0.2rem',
    buttonText: 'Vai al modulo di iscrizione',
    buttonUrl: 'https://forms.gle/vKbDEzoJyLW7YWjG9'
  },
  {
    titolo: 'Spettacolo DEKRU',
    descrizione:
      'Venerdì 23 Giugno / Dekru è un quartetto di giovani talentuosi mimi formatosi nel 2010 in Ucraina, a Kiev. Premiati al Festival Mondiale del Circo di Mosca e al Festival di Clown e Mimi di Odessa, sono apparsi in Italia nel 2016 nella trasmissione Tu sì que Vales.',
    immagine: '/images/serate/dekru.jpeg',
    colore: '#2c3e50',
    opacity: 0.5,
    blur: '0.2rem',
  },
  {
    titolo: 'Basket Freestyle Show - DUNK',
    descrizione:
      "Venerdì 30 Giugno / Basket Freestyle Show per un intrattenimento assicurato ! Trampolino elastico, freestyle, acrobatica e schiacciate come non le avete mai viste! L'unico team in italia di acro dunk!",
    immagine: '/images/serate/dunk.jpeg',
    colore: '#f0932b',
    opacity: 0.5,
    blur: '0.2rem',
  },
  {
    titolo: 'Serata delle Squadre',
    descrizione:
      'Giovedì 6 Luglio / Sfilata squadre, animazione da palco e gara di torte',
    immagine: '/images/serate/sfilata.jpeg',
    colore: '#44bd32',
    opacity: 0.5,
    blur: '0.1rem',
  },
  {
    titolo: 'Serata Finale',
    descrizione:
      'Venerdì 14 Luglio / Grande festa tutti insieme e proclamazione della Squadra vincitrice della #PER23',
    immagine: '/images/serate/finale.jpeg',
    colore: '#c0392b',
    opacity: 0.5,
    blur: '0.1rem',
  },
]

let gite = [
  {
    titolo: 'Porto Santa Margherita // Baia Blanca',
    descrizione:
      'Lunedì 26 Giugno con i ragazzi di quinta elementare e prima media / Venerdì 30 giugno con i ragazzi di seconda e terza media / Lunedì 3 Luglio con i ragazzi di terza e quarta elementare / Materiale: Costume di ricambio, asciugamano, ciabatte, cappellino, spuntino, bibita...',
    immagine: '/images/gite/mare.jpeg',
    colore: '#FFC312',
    opacity: 0.5,
    blur: '0.2rem',
  },
  {
    titolo: 'Noale // Aquaestate',
    descrizione:
      'Giovedì 22 Giugno / Martedì 11 Luglio / Una giornata di allegria in piscina, tra scivoli e spruzzi!',
    immagine: '/images/gite/noale.jpeg',
    colore: '#e74c3c',
    opacity: 0.3,
    blur: '0.2rem',
  },
  {
    titolo: 'Valle del Gares // Escursione in montagna',
    descrizione:
      'Martedì 27 Giugno / Una giornata immersi nel verde e respirando l’aria fresca di montagna! Scarponi da trekking, zaino in spalla: si parte per un’avventura indimenticabile!!!',
    immagine: '/images/gite/val_gares.jpeg',
    colore: '#009432',
    opacity: 0.5,
    blur: '0.1rem',
  },
  {
    titolo: 'Valeggio sul Mincio // Parco Giardino Sigurtà',
    descrizione:
      'Martedì 4 Luglio / La Proposta Estate 2023 si immerge nell’antica storia del “Brolo cinto de Mura” alla scoperta delle misteriose vicende di nobili ed Imperatori grazie ai giochi interattivi e alle meraviglie del Parco Giardino Sigurtà.',
    immagine: '/images/gite/parco_sigurta.jpeg',
    colore: '#A3CB38',
    opacity: 0.5,
    blur: '0.2rem',
  },
]

// Il nostro team
let members = [
  {
    name: 'Segreteria PER',
    role: 'Per qualsiasi evenienza ed informazione potete mandare una mail al nostro indirizzo:',
    imageUrl: '',
    email: 'per@donboscosandona.it',
  },
  {
    name: 'Dopo la Campanella',
    role: 'Dott. Andrea Pasqualetto',
    imageUrl: '',
    phone: '391 706 4430',
  },
  {
    name: 'Cinema don Bosco',
    role: "Per informazioni sugli orari e l'acquisto dei biglietti, inviate pure un whatsapp al nostro numero:",
    imageUrl: '',
    phone: '346 960 5687',
  },
]

let in_evidenza = [
  {
    title: 'Iscrizioni',
    immagineUrl: '/images/_iscrizioni.png',
    url: '/iscrizioni',
  },
  {
    title: 'Calendario',
    immagineUrl: '/images/_calendario.png',
    url: '/calendario',
  },
  {
    title: 'Tema formativo',
    immagineUrl: '/images/_tema.png',
    url: '/tema',
  },
  {
    title: 'I pomeriggi',
    immagineUrl: '/images/_pomeriggi.png',
    url: '/pomeriggi',
  },
]

let laboratori = [
  {
    title: 'Espressivi',
    immagineUrl: '/images/_espressivi.png',
    url: '/laboratori_espressivi',
  },
  {
    title: 'Sportivi',
    immagineUrl: '/images/_sportivi.png',
    url: '/laboratori_sportivi',
  },
  {
    title: 'Manuali',
    immagineUrl: '/images/_manuali.png',
    url: '/laboratori_manuali',
  },
  {
    title: 'Novità 2023',
    immagineUrl: '/images/_novità.png',
    url: '/laboratori_new',
  },
]

let altri_link = [
  {
    title: 'Regolamento',
    immagineUrl: '/images/_regolamento.png',
    url: '/regolamento',
  },
  {
    title: 'Servizio autobus',
    immagineUrl: '/images/_autobus.png',
    url: '/autobus',
  },
  {
    title: 'Momenti di preghiera e riflessione',
    immagineUrl: '/images/_preghiera.png',
    url: '/preghiera',
  },
  {
    title: 'Gruppo Special',
    description: 'Scopri la #PER23 giorno per giorno',
    immagineUrl: '/images/_special.png',
    url: '/special',
  },
  {
    title: 'Spazio animatori',
    immagineUrl: '/images/_animatori.png',
    url: '/animatori',
  },
  {
    title: 'Spazio genitori',
    immagineUrl: '/images/_genitori.png',
    url: '/genitori',
  },
  {
    title: "Scuola d'Estate? Sì grazie!",
    immagineUrl: '/images/_dlc.png',
    url: '/dlc',
  },
]

const testimonials = [
  {
    imageUrl:
      'https://png.pngtree.com/png-vector/20220608/ourmid/pngtree-happy-girl-avatar-kid-funny-png-image_4911174.png',
    name: 'Michela B.',
    text: "Grazie mille per tutte le infinite emozioni che ci avete regalato, non solo nella serata finale ma in ogni occasione come alla sfilata, alle gite, ai momenti di condivisione, alle cene all'aperto e ai cori delle squadre o alle canzoni cantate e ballate che si sentivano fino a fuori dell'oratorio... per noi è stata la prima esperienza ipergalattica, ma la cosa più bella è che questa PER ha fatto scoprire nuove passioni grazie ai laboratori... Non resta che ringraziare tutti, dal primo all'ultimo e dirvi di continuare così, perchè come alla PER non ci di diverte!!!",
    social: '@giovane iscritta',
  },
  {
    imageUrl:
      'https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png',
    name: 'Samuele Z.',
    text: "E' stato il mio primo anno alla PER. Il prossimo sarò ancora con voi perchè l'UNIONE, la CONDIVISIONE e l'AMICIZIA che si creano all'oratorio don Bosco sono... wow!!! Mi sono divertito un mondo!!! Grazie di tutto!! Alla prossima!!!",
    social: '@animatore',
  },
  {
    name: 'Loredana F.',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6s5z4ojtNwl2jXifp1jiboZ2T0plskgirZXxHaE_UW2jdj9PI-8Ig05DPcMBUUAvWNCQ&usqp=CAU',
    text: "A chi dice che i giovani non hanno voglia di fare nulla, io li inviterei in oratorio durante la PER. Che vedano gli animatori e il lavoro che dedicano per allietare bambini e bambine e la gioia che trasmettono. Quando ragazzi e bambini trovano un senso, sono i primi a buttarsi. Ma la PER non è solo gioco e svago. E' un'esperienza che aiuta i più piccoli ad esprimere i loro talenti, a condividere lo stile e il carisma salesiano, a vivere in una comunità che è fortemente educante e gioiosa. Un grazie di cuore all'Oratorio don Bosco!!!",
    social: '@mamma',
  },
]

let serate_cinema = [
  {
    title: '26 GIUGNO - THE FLASH',
    description:
      'In The Flash i mondi si scontrano quando Barry usa i suoi superpoteri per viaggiare indietro nel tempo e cambiare gli eventi del passato. Ma quando il tentativo di salvare la sua famiglia altera inavvertitamente il futuro, Barry rimane intrappolato in una realtà in cui il generale Zod è tornato, minacciando distruzione, e senza alcun Supereroe a cui rivolgersi...',
    immagineUrl:
      'https://image.tmdb.org/t/p/original/iSrDzA2PtYvSpl6IS8QJwajJe3b.jpg',
    url: 'https://cinema.donboscosandona.it',
  },
  {
    title: '3 LUGLIO - ELEMENTAL 3D',
    description:
      'In una città in cui abitanti di fuoco, acqua, terra e aria vivono insieme, un’ardente giovane donna e un ragazzo che segue la corrente stanno per scoprire qualcosa di fondamentale: quanto hanno davvero in comune.',
    immagineUrl:
      'https://image.tmdb.org/t/p/original//v9dZ3MnuSOU5C0ma21HP30zVGI.jpg',
    url: 'https://cinema.donboscosandona.it',
  },
  {
    title: '10 LUGLIO - INDIANA JONES E IL QUADRANTE DEL DESTINO',
    description:
      "Nel 1969, l'archeologo e avventuriero statunitense Indiana Jones vive sullo sfondo della corsa allo spazio. Jones è a disagio per il fatto che il governo federale degli Stati Uniti d’America abbia reclutato ex nazisti per aiutare a battere l'Unione Sovietica nella competizione per arrivare nello spazio.",
    immagineUrl:
      'https://image.tmdb.org/t/p/original/y4MBS0SKE0pHR57vfYBxGhrkfcv.jpg',
    url: 'https://cinema.donboscosandona.it',
  },
  {
    title: '17 LUGLIO - MISSION: IMPOSSIBLE - DEAD RECKONING',
    description:
      'Tom Cruise torna ancora una volta a vestire i panni dell’intramontabile Ethan Hunt, specialista dello spionaggio ad altro rischio. Questa volta Ethan insieme alla sua squadra dell\'IMF saranno alle prese con la sfida più pericolosa mai affrontata finora: il team dovrà riuscire a rintracciare e disinnescare una nuova e terribile arma, che si rivelerà essere una minaccia per l\'intera umanità.',
    immagineUrl:
      'https://image.tmdb.org/t/p/original/89j8FMC252IeF6MuzJ1wQjVbte8.jpg',
    url: 'https://cinema.donboscosandona.it',
  },
]
