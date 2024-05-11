import Head from 'next/head'

import { Button, Container, Typography, Grid } from '@mui/material'

import {
  Carousel,
  Featured,
  Layout,
  LandingHero,
  Features,
  Paragraph,
  Products,
  Table,
  Testimonials,
  Team,
  Maps,
  SwiperNews,
} from '/components'

export default function Home({ data }) {
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
        <meta name='og:image' content='/images/home.png' />
      </Head>
      <LandingHero
        opacity={0.2}
        title='Proposta Estate Ragazzi'
        description='Dal 13 Giugno al 12 Luglio 2024'
        buttonUrl='/tema'
        buttonText='Re-Creation: from law to love'
        imageUrl='/images/home.png'
      />
      <Paragraph
        title='Perché la vostra felicità sia piena!'
        subtitle='Saluto del Direttore, don Nicola Munari'
        avatarImageUrl='/images/home/nik.png'
        columnCount={2}
      >
        <p>
          C’è un tempo per lavorare e un tempo per riposare, un tempo per
          l’ansia e un tempo per la gioia, un tempo per la fatica e un tempo per
          il relax….
        </p>
        <p>
          E’ la vita di ogni giorno, di ogni settimana e di ogni anno, dove si
          alternano tempi segnati da situazioni diverse e anche opposte. Ma il
          tempo è prezioso è la nostra vita che viene scandita dal tempo e il
          tempo non deve diventare vuoto, perché vuota sarebbe la vita. Ecco il
          perché della Proposta Estate Ragazzi, che da più di 40 anni segna
          l’inizio delle vacanze.
        </p>
        <p>
          Non è un’estate vuota, ma piena, significativa, entusiasmante. Anche
          quest’anno attività, giochi, gite, personaggi e serate per tutti i
          gusti, per dare pienezza ad un momento della vita, come quello delle
          vacanze, che non deve essere sciupato.
        </p>
        <p>
          A tutti i ragazzi, gli animatori, i genitori auguro di essere felici,
          per la bellezza dell’esperienza che andremo a vivere assieme, per un
          impegno che da gusto alle giornate, per la serenità che anima i volti
          di chi vive questa esperienza con impegno. Non abbiate paura di
          sudare, correre, saltare, giocare con grinta, perché la sana allegria
          è la porta per la gioia vera e la vita significativa. Buona Estate!
        </p>
      </Paragraph>
      <Featured data={data} defaultTag='per' />
      <SwiperNews title='News' data={data} limit={12} defaultTag='per' />
      <Features
        title="La #per dell'Oratorio don Bosco è..."
        description=''
        features={features}
        cardWidth={3}
      />
      <Table
        title='Orario della Giornata tipo'
        backgroundImageUrl='/images/giornata.png'
        backgroundColor='#F79F1F'
        opacity={0.8}
        blur='0rem'
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
          ['11.10', 'Seconda ora di attività', '', ''],
          [
            '12.00',
            'A casa... buon pranzo!',
            '',
            'Attenzione: tutti i mercoledì pomeriggio non c’è attività pertanto l’oratorio rimarrà chiuso.',
          ],
        ]}
      />
      <Products
        cardWidth={3}
        products={in_evidenza}
        borderRadius='50%'
        aspectRatio='1 / 1'
      />
      <Carousel slides={gite} height={90} />
      <Products
        title='I laboratori'
        description='Scegli due laboratori per le prime due settimane di PER, e altri due per le ultime due settimane. '
        cardWidth={3}
        products={laboratori}
        borderRadius='2rem'
        aspectRatio='1 / 1'
      />
      <Carousel slides={serate} height={90} />
      <Products
        title='Il Cinema don Bosco compie 90 anni'
        description='Per tutta l’estate e fino al 3 settembre 2024 (90° anniversario della prima proiezione) gli iscritti alla PER24 potranno partecipare a tutti gli spettacoli del Cinema don Bosco al prezzo speciale di 4 €! Non ci sarà più un giorno fisso dedicato al Cinema quindi, ma tutti i giorni e tutti gli orari saranno buoni per venire a divertirti con i tuoi amici! Per avere lo sconto dovrai presentarti alla cassa indossando la maglietta della PER24 e mostrando il codice che ogni settimana sarà inviato nella Community WhatsApp insieme alla programmazione del cinema!'
        cardWidth={3}
        products={serate_cinema}
        aspectRatio='1 / 1.5'
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
          raccontare la propria esperienza usando gli hashtag #PER24{' '}
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
            Anche quest’anno potrai ricevere tutte le NEWS della PER2
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
            href='https://chat.whatsapp.com/LksHvahrse46fs6PmGR6lb'
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
      <Products
        cardWidth={3}
        products={altri_link}
        borderRadius='50%'
        aspectRatio='1 / 1'
      />
      <Paragraph
        title='La Segreteria durante la PER'
        backgroundColor='#6F1E51'
        opacity={0.8}
        blur='0rem'
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
          <b>
            Per qualsiasi evenienza ed informazione potete mandare una mail
            all’indirizzo per@donboscosandona.it.
          </b>
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
          Per potervi servire meglio e più velocemente è importante venire in
          segreteria con i soldi giusti.
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

export async function getStaticProps() {
  const res = await fetch('https://channels.donboscosandona.it/api/posts/inoratorio?q=per')
  const data = await res.json()

  return {
    props: { data },
    revalidate: 1200, // In secondi: il build viene fatto al massimo una volta ogni dieci minuti
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
      'Martedì 18 Giugno / Una serata dedicata ai talenti dei ragazzi della PER!!! Metti alla prova la tua creatività artistica, canora, di ballo, teatrale in una sfida mozzafiato!',
    immagine: '/images/serate/talent.jpeg',
    colore: '#182C61',
    colore2: 'transparent',
    opacity: 1,
    blur: '0rem',
    buttonText: '',
    buttonUrl: '',
  },
  {
    titolo: 'Schiuma Party',
    descrizione: 'Venerdì 23 Giugno / ...',
    immagine: '/images/serate/schiuma.jpeg',
    colore: '#182C61',
    colore2: 'transparent',
    opacity: 1,
    blur: '0rem',
    buttonText: '',
    buttonUrl: '',
  },
  {
    titolo: 'Etienne e la sua crew',
    descrizione: 'Venerdì 30 Giugno / ...',
    immagine: '/images/serate/etienne.jpeg',
    colore: '#182C61',
    colore2: 'transparent',
    opacity: 1,
    blur: '0rem',
    buttonText: '',
    buttonUrl: '',
  },
  {
    titolo: 'Tornei animatori',
    descrizione: 'Tutti i mercoledì / ...',
    immagine: '/images/serate/tornei.jpeg',
    colore: '#182C61',
    colore2: 'transparent',
    opacity: 1,
    blur: '0rem',
    buttonText: 'Vai al modulo di iscrizione',
    buttonUrl: '',
  },
  {
    titolo: 'Serata delle squadre',
    descrizione:
      'Giovedì 4 luglio / Sfilata, animazione da palco e gara di torte',
    immagine: '/images/serate/sfilata.jpeg',
    colore: '#182C61',
    colore2: 'transparent',
    opacity: 1,
    blur: '0rem',
    buttonText: 'Vai al modulo di iscrizione',
    buttonUrl: '',
  },
  {
    titolo: 'Serata finale',
    descrizione:
      'Venerdì 12 luglio / Grande festa tutti insieme e proclamazione della Squadra vincitrice della #PER24',
    immagine: '/images/serate/finale.jpeg',
    colore: '#182C61',
    colore2: 'transparent',
    opacity: 1,
    blur: '0rem',
    buttonText: 'Vai al modulo di iscrizione',
    buttonUrl: '',
  },
]

let gite = [
  {
    titolo: 'Porto Santa Margherita // Baia Blanca',
    descrizione:
      'Lunedì 24 Giugno con i ragazzi di quinta elementare e prima media / Venerdì 28 giugno con i ragazzi di seconda e terza media / Lunedì 1 Luglio con i ragazzi di terza e quarta elementare',
    immagine: '/images/gite/mare.png',
    colore: '#FFC312',
    colore2: 'transparent',
    opacity: 1,
    blur: '0rem',
  },
  {
    titolo: 'Noale // Aquaestate',
    descrizione:
      'Giovedì 20 Giugno / Martedì 9 Luglio / Una giornata di allegria in piscina, tra scivoli e spruzzi!',
    immagine: '/images/gite/noale.png',
    colore: '#0097e6',
    colore2: 'transparent',
    opacity: 0.8,
    blur: '0rem',
  },
  {
    titolo: 'Escursione in montagna',
    descrizione:
      'Martedì 27 Giugno / Una giornata immersi nel verde e respirando l’aria fresca di montagna! Scarponi da trekking, zaino in spalla: si parte per un’avventura indimenticabile!!!',
    immagine: '/images/gite/montagna.png',
    colore: '#009432',
    colore2: 'transparent',
    opacity: 0.8,
    blur: '0rem',
  },
  {
    titolo: 'Movieland // Caneva World',
    descrizione:
      'Martedì 2 Luglio / La Proposta Estate 2024 si immerge nei paesaggi del lago di Garda per una giornata tra giostre e acqua!',
    immagine: '/images/gite/movieland.png',
    colore: '#FC427B',
    colore2: 'transparent',
    opacity: 0.8,
    blur: '0rem',
  },
]

// Il nostro team
let members = [
  {
    name: 'Segreteria PER',
    role: 'Per qualsiasi evenienza ed informazione potete mandare una mail al nostro indirizzo:',
    imageUrl: '/images/call1.webp',
    email: 'per@donboscosandona.it',
    phone: '392 464 3689',
  },
  {
    name: 'Dopo la Campanella',
    role: 'Dott. Andrea Pasqualetto',
    imageUrl: '/images/call2.webp',
    phone: '391 706 4430',
  },
  {
    name: 'Cinema don Bosco',
    role: "Per informazioni sugli orari e l'acquisto dei biglietti, inviate pure un whatsapp al nostro numero:",
    imageUrl: '/images/call3.webp',
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
    title: 'Pomeriggi',
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
    title: 'Novità 2024',
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
    title: 'Momenti di preghiera e riflessione',
    immagineUrl: '/images/_preghiera.png',
    url: '/preghiera',
  },
  {
    title: 'Gruppo Special',
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

/*
  {
    title: 'Servizio autobus',
    immagineUrl: '/images/_autobus.png',
    url: '/autobus',
  },
*/

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
    title: 'ME CONTRO TE - OPERAZIONE SPIE',
    category: 'Dal 1° Giugno',
    description:
      "L'armonia del Pianeta è minacciata dall'alleanza dei Malvagi: il Signor S., Perfidia, Viperiana e Serpe hanno convinto il mondo intero che Sofì e Luì sono terribili criminali e solo loro, i Malvagi, sono i buoni che possono salvare l'umanità dalla cattiveria dei Me Contro Te. Ma non tutto è perduto: Sofì e Luì insieme ai loro amici dovranno trovare un modo per riportare l'armonia nel mondo.",
    immagineUrl:
      'https://cinema.donboscosandona.it/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBVUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--d8cff7cf2935460e3218ca8486a8e06ccb8e32f9/Me%20contro%20te%205.jpg',
    url: 'https://cinema.donboscosandona.it',
  },
  {
    title: 'BAD BOYS: RIDE OR DIE',
    category: 'Dal 13 Giugno',
    description:
      "Tom Cruise torna ancora una volta a vestire i panni dell’intramontabile Ethan Hunt, specialista dello spionaggio ad altro rischio. Questa volta Ethan insieme alla sua squadra dell'IMF saranno alle prese con la sfida più pericolosa mai affrontata finora: il team dovrà riuscire a rintracciare e disinnescare una nuova e terribile arma, che si rivelerà essere una minaccia per l'intera umanità.",
    immagineUrl:
      'https://image.tmdb.org/t/p/original//nP6RliHjxsz4irTKsxe8FRhKZYl.jpg',
    url: 'https://cinema.donboscosandona.it',
  },
  {
    title: 'INSIDE OUT 2',
    category: 'Dal 19 Giugno',
    description:
      "Inside Out 2 racconta una nuova avventura in quella che è la testa dell'ormai adolescente Riley, che sta per iniziare il liceo e che è alle prese con una serie di nuove Emozioni. Gioia, Tristezza, Rabbia, Paura e Disgusto, che a detta di tutti gestiscono da tempo un'attività di successo, non sanno come comportarsi quando arriva Ansia, destinata a stravolgere tutto nel quartier generale e non solo...",
    immagineUrl:
      'https://cinema.donboscosandona.it/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBMdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--d2c7f8229d70787dbf0ce1443b1b96adcabc91f2/Inside%20Out%202.jpeg',
    url: 'https://cinema.donboscosandona.it',
  },
  {
    title: 'CATTIVISSIMO ME 4',
    category: 'Dal 21 Agosto',
    description:
      'Gru e Lucy e le loro figlie - Margo, Edith e Agnes - accolgono un nuovo membro nella famiglia, Gru Jr., deciso a far disperare suo padre. Gru affronta un nuovo nemico, Maxime Le Mal e la fidanzata, la femme fatale Valentina, per cui la famiglia sarà costretta alla fuga.',
    immagineUrl:
      'https://image.tmdb.org/t/p/original//hoJDI4mkP2w9WK2po5aZx3YIcLP.jpg',
    url: 'https://cinema.donboscosandona.it',
  },
]
