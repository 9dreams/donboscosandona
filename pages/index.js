import Head from 'next/head'

import { Button, Container, Typography, Grid, Box, Paper } from '@mui/material'
import Link from 'next/link'

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
  Credits,
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
        description="Dall'11 Giugno al 9 Luglio 2026"
        buttonUrl='/tema'
        buttonText='SKY WARS'
        imageUrl='/images/home.png'
      />

      <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
        <Link href='/iscrizioni' style={{ textDecoration: 'none' }}>
          <Paper
            sx={{
              position: 'relative',
              backgroundColor: 'grey.800',
              color: '#fff',
              mb: 4,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundImage: `url(/images/iscrizioni.png)`,
              borderRadius: '2rem',
              overflow: 'hidden',
              minHeight: { xs: '300px', md: '250px' },
              display: 'flex',
              alignItems: 'center',
              transition: 'all 0.3s ease',
              border: '2px solid rgba(255, 255, 255, 0.1)',
              '&:hover': {
                transform: 'scale(1.01)',
                borderColor: '#00aaff',
                boxShadow: '0 0 20px rgba(0, 170, 255, 0.4)',
              }
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                backgroundColor: 'rgba(0,0,0,0.2)',
                backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.1), rgba(0,0,0,0.1))'
              }}
            />
            <Grid container sx={{ position: 'relative', zIndex: 1 }}>
              <Grid item md={10} sx={{ p: { xs: 3, md: 6 } }}>
                <Typography component='h2' variant='h2' sx={{ fontWeight: 'bold' }}>
                  ISCRIZIONE
                </Typography>
                <Typography variant='h5' sx={{ mt: 2, maxWidth: '600px', textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
                  scopri tutti i dettagli per imbarcarti nell'avventura galattica più bella della tua vita!
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Link>
      </Container>
      <Paragraph
        title='SKY WARS...'
        subtitle='“Fa più rumore un albero che cade di una foresta che cresce”'
        avatarImageUrl='/images/home/nik.png'
        columnCount={2}
      >
        <p>
          Da sempre la lotta tra il bene e il male è un tema che interroga,
          affascina, preoccupa, ispira ogni generazione. Dai tempi di Caino e
          Abele, di Davide e Golia…
          <br />
          Lungo la storia, su questa disputa, si sono interrogati e confrontati
          uomini di spirito, filosofi, teologi, romanzieri, registi, politici e
          sociologi… Ma questo agguerrito confronto è solo fonte di ispirazione
          per artisti e pensatori?
        </p>
        <p>
          <br />
          C’è una guerra quotidiana, che ogni persona vive dentro e fuori di sé:
          la difficile scelta tra il bene e il male, tra ciò che è giusto, bello
          e buono e ciò che è facile, cattivo e ingiusto. Ognuno di noi vuole
          una vita significativa ed è costretto a compiere quelle scelte che
          maggiormente portano alla realizzazione di sé. Ma quali sono le scelte
          giuste? Chi può dirmi ciò che è bene o male? Questo è il tema che fa
          perdere il somno ad ogni mamma e papà che desidera la felicità dei
          propri figli. Chi ama veramente non può non chiedersi cos’è meglio per
          chi gli è affidato.
        </p>
        <p>
          <br />
          Per i greci bellezza e bontà non potevano essere separati. Per i
          latini cattivo aveva il significato di schiavo, meschino, miserabile.
          Il problema sta nella scelta, segnata dalla fatica o dalla facilità.
          Il male è più appariscente, immediato, accattivante, facile,
          istintivo e rumoroso. Il bene è più umile, silenzioso, discreto, lento
          e fecondo, fruttuoso e faticoso.
        </p>
        <p>
          <br />
          Tale distinzione la si può riassumere nella celebre frase: “Fa più
          rumore un albero che cade di una foresta che cresce”. Nel pensare LA
          PROPOSTA ESTATE RAGAZZI 2026, ci poniamo questa domanda: come aiutare
          i nostri ragazzi a scegliere tra bene e male. Voi genitori ogni giorno
          vi sforzate di insegnare ai vostri figli questo delicato compito che
          coinvolge tutta la loro vita.
        </p>
        <p>
          <br />
          La P.E.R. è un’ottima esperienza per aiutare a discernere e allenare
          la volontà perché le scelte siano buone e non facili. Tra giochi,
          attività di ogni genere, gite, lavoro di squadra, impegno e un
          equilibrato agonismo, i nostri ragazzi, accompagnati da salesiani e
          animatori, possono sicuramente sperimentare che c’è un modo buono di
          vivere e possono valutare che ogni cosa nella vita può concorrere al
          bene di tutta l’esistenza.
        </p>
        <p>
          <br />
          Chissà, cari genitori, forse questa estate potrebbe essere una
          occasione anche per voi!? Perché no!! Buona P.E.R. a tutti
        </p>
        <br />
        <p>
          <b>don Nicola Munari - Direttore</b>
        </p>
      </Paragraph>
      <Featured data={data} defaultTag='per' />
      {/* <SwiperNews title='News' data={data} limit={12} defaultTag='per' /> */}
      <Team
        title="La #per dell'Oratorio don Bosco è..."
        description=''
        members={features}
        cardWidth={3}
      />
      <Table
        title='Orario della Giornata tipo'
        backgroundImageUrl='/images/giornata.png'
        backgroundColor='#1b1188'
        opacity={0.7}
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
            '9.15',
            'Momento di preghiera ragazzi',
            '17.45',
            'Concludiamo insieme la giornata',
          ],
          [
            '9.45',
            'Prima ora di attività',
            '18.00',
            'Termine attività pomeridiane',
          ],
          [
            '10.35',
            'Ricreazione',
            '18.30',
            'Santa Messa (per chi lo desidera)',
          ],
          ['11.05', 'Seconda ora di attività', '', ''],
          [
            '12.00',
            'A casa... buon pranzo!',
            '',
            'Attenzione: tutti i mercoledì pomeriggio non c’è attività pertanto l’oratorio rimarrà chiuso.',
          ],
        ]}
      />
      <Paragraph title='Pranzo al sacco'>
        <p>
          Per i ragazzi che fanno parte delle attività dell’oratorio durante
          l’anno (ADS, DopoLaCampanella, Scout San Donà 1, Banda) sarà possibile
          rimanere in oratorio durante la pausa pranzo con il pranzo al sacco.
          <br />
          L’assistenza durante il pranzo sarà assicurata, ma non saranno forniti
          servizi di animazione.
          <br />
          Il contributo per rimanere in oratorio durante la pausa pranzo è di
          <strong> 10 euro a settimana</strong>.
        </p>
      </Paragraph>
      <Products
        cardWidth={3}
        products={in_evidenza}
        borderRadius='50%'
        aspectRatio='1 / 1'
      />
      {/* <Carousel slides={gite} height={90} /> */}

      <Products
        cardWidth={3}
        products={altri_link}
        borderRadius='0.5rem'
        aspectRatio='1.2 / 1'
      />
      <Products
        title='I laboratori'
        description='Scegli due laboratori per le prime due settimane di PER, e altri due per le ultime due settimane. '
        cardWidth={3}
        products={laboratori}
        borderRadius='0.5rem'
        aspectRatio='1 / 1'
      />
      {/* <Carousel slides={serate} height={90} /> */}
      <Products
        title="Un'estate di emozioni al Cinema don Bosco"
        description='Nei mesi di giugno, luglio e agosto gli iscritti alla PER26 potranno partecipare a tutti gli spettacoli del Cinema don Bosco al prezzo speciale di 4 €! Non ci sarà più un giorno fisso dedicato al Cinema quindi, ma tutti i giorni e tutti gli orari saranno buoni per venire a divertirti con i tuoi amici! Per avere lo sconto dovrai iscriverti alla Community WhatsApp NEWS della P.E.R.26 che si trova nella sezione delle informazioni e News. Riceverai ogni settimana la programmazione insieme a un link che ti permetterà di acquistare online a prezzo scontato i biglietti per te e per i tuoi amici e familiari. Nota: non è possibile ricevere lo sconto alla cassa, ma solo acquistando i biglietti online.'
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
          raccontare la propria esperienza usando gli hashtag #PER26{' '}
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
            Anche quest’anno potrai ricevere tutte le NEWS della PER
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
              border: '2px solid green',
              '&:hover': {
                border: '2px solid lightgreen',
              }
            }}
            target='_blank'
            color='success'
            variant='outlined'
            href='https://chat.whatsapp.com/BdKnnpkcjcfI3pKUiykDdm?mode=gi_t'
          >
            ISCRIVITI ALLE NEWS SU WHATSAPP
          </Button>
        </p>
      </Paragraph>

      <Paragraph
        title='La Segreteria della PER'
        backgroundColor='#280b00ff'
        opacity={0.7}
        blur='0rem'
        maxWidth={false}
        color='white'
        backgroundImageUrl='/images/segreteria.png'
      >
        <p>
          In segreteria, negli orari indicati, troverete sempre qualcuno pronto
          a dare notizie su ciò che sta avvenendo o avverrà durante la P.E.R.
          Ogni settimana sarete raggiunti dagli avvisi che verranno mandati per
          comunicare orari, cambi di programma o l’andamento stesso della
          P.E.R.. Queste comunicazioni avverranno per mail oppure attraverso la
          notifica sull’app Squby.
          <br />
        </p>
        <p>
          La segreteria sarà aperta per le iscrizioni alle varie gite e per
          qualsiasi informazione dal lunedì al venerdì nei seguenti orari:
          <br />
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
        <p><br />
          La segreteria rimarrà chiusa le mattine in cui ci saranno le gite ed
          il mercoledì pomeriggio.{' '}
        </p>
        <p><br />
          <b>
            Per qualsiasi evenienza ed informazione potete mandare una mail
            all’indirizzo per@donboscosandona.it.
          </b>
        </p>
        <p><br />
          Ricordiamo che l’iscrizione alle uscite deve avvenire{' '}
          <b>
            al massimo entro le ore 12.00 di due giorni precedenti all’uscita
          </b>{' '}
          (salvo eventuali altre indicazioni).
        </p>
        <p><br />
          Le liste verranno esposte verso le 18.00 nella vigilia delle gite.
        </p>
        <p><br />
          Per potervi servire meglio e più velocemente è importante venire in
          segreteria con i soldi giusti.
        </p>
        <p><br />
          Non è necessaria la presenza del genitore per l’iscrizione alle gite.
        </p>
      </Paragraph>
      <Testimonials
        testimonials={testimonials}
        cardWidth={4}
        imageUrl=''
      />
      <Team
        title='Contatti'
        description='Hai dei dubbi? Contattaci pure (preferibilmente via email) e ti risponderemo il prima possibile.'
        members={members}
        cardWidth={4}
      />
      <Maps
        maxWidth={false}
        url='/images/map_dark.png'
      />
      <div className='m-10'>
        <Credits />
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch(
    'https://channels.donboscosandona.it/api/posts/inoratorio?q=per'
  )
  const data = await res.json()

  return {
    props: { data },
    revalidate: 1200, // In secondi: il build viene fatto al massimo una volta ogni dieci minuti
  }
}

// I punti di forza
const features = [
  {
    name: 'Una proposta cristiana',
    imageUrl: '/images/home/call0.png',
    description:
      "Nel cuore dell'estate la PER vuol essere un'occasione per riscoprire la bellezza della fede.",
  },
  {
    name: 'In allegria',
    imageUrl: '/images/home/call1.png',
    description:
      'La PER è piena di allegria vissuta in compagnia in ogni momento: giochi, attività, gite, serate...',
  },
  {
    name: 'Mettendo a frutto la creatività',
    imageUrl: '/images/home/call2.png',
    description:
      "Nei laboratori i talenti fioriscono: in te forse c'è uno sportivo, un artista, un creativo... scegli con cura al momento della preiscrizione.",
  },
  {
    name: 'Coltivando le relazioni',
    imageUrl: '/images/home/call3.png',
    description:
      'Durante la PER non sarai mai da solo: educatori, animatori, altri ragazzi, ospiti... ognuno è un mondo da esplorare, devi solo buttarti!',
  },
]

// slides per il carousel
let serate = [
  {
    titolo: "Oratorio's Got Talent",
    descrizione:
      'Martedì 17 Giugno / Una serata dedicata ai talenti dei ragazzi della PER!!! Metti alla prova la tua creatività artistica, canora, di ballo, teatrale in una sfida mozzafiato!',
    immagine: '/images/serate/talent.jpeg',
    colore: '#182C61',
    colore2: 'transparent',
    opacity: 1,
    blur: '0rem',
    buttonText: '',
    buttonUrl: '',
  },
  {
    titolo: 'I Meloni in concerto',
    descrizione: 'Venerdì 20 Giugno / PER in concerto con i Meloni! Band eclettica che ci farà divertire e cantare assieme!',
    immagine: '/images/serate/meloni2.jpg',
    colore: '#611851',
    colore2: 'transparent',
    opacity: 1,
    blur: '0rem',
    buttonText: '',
    buttonUrl: '',
  },
  {
    titolo: 'Schiuma Party',
    descrizione: 'Venerdì 27 Giugno / Dj Tilio ci farà ballare a ritmo Dance mentre scende la neve!!!',
    immagine: '/images/serate/schiuma.jpeg',
    colore: '#182C61',
    colore2: 'transparent',
    opacity: 1,
    blur: '0rem',
    buttonText: '',
    buttonUrl: '',
  },
  {
    titolo: 'Tornei animatori',
    descrizione: 'Tutti i mercoledì',
    immagine: '/images/serate/tornei.jpeg',
    colore: '#182C61',
    colore2: 'transparent',
    opacity: 1,
    blur: '0rem',
    buttonText: '',
    buttonUrl: '',
  },
  {
    titolo: 'Serata delle squadre',
    descrizione:
      'Giovedì 3 luglio / Sfilata delle squadre, giochi con le famiglie e gara di torte',
    immagine: '/images/serate/sfilata.jpeg',
    colore: '#182C61',
    colore2: 'transparent',
    opacity: 1,
    blur: '0rem',
    buttonText: '',
    buttonUrl: '',
  },
  {
    titolo: 'Serata finale',
    descrizione:
      'Venerdì 11 luglio / Grande festa tutti insieme e proclamazione della Squadra vincitrice della #PER26',
    immagine: '/images/serate/finale.jpeg',
    colore: '#182C61',
    colore2: 'transparent',
    opacity: 1,
    blur: '0rem',
    buttonText: '',
    buttonUrl: '',
  },
]

let gite = [
  {
    titolo: 'Porto Santa Margherita // Baia Blanca',
    descrizione:
      'Lunedì 23 Giugno con i ragazzi di prima e seconda media / Venerdì 30 giugno con i ragazzi di terza, quarta e quinta elementare',
    immagine: '/images/gite/mare.png',
    colore: '#008c93',
    colore2: 'transparent',
    opacity: 0.5,
    blur: '0rem',
  },
  {
    titolo: 'Noale // Aquaestate',
    descrizione:
      'Giovedì 19 Giugno / Martedì 8 Luglio / Una giornata di allegria in piscina, tra scivoli e spruzzi!',
    immagine: '/images/gite/noale.png',
    colore: '#0097e6',
    colore2: 'transparent',
    opacity: 0.8,
    blur: '0rem',
  },
  {
    titolo: 'Escursione in montagna',
    descrizione:
      'Martedì 24 Giugno / Una giornata immersi nel verde e respirando l’aria fresca di montagna! Scarponi da trekking, zaino in spalla: si parte per un’avventura indimenticabile!!!',
    immagine: '/images/gite/montagna.png',
    colore: '#009432',
    colore2: 'transparent',
    opacity: 0.8,
    blur: '0rem',
  },
  {
    titolo: 'Gardaland // Aquasplash',
    descrizione:
      "Martedì 1 Luglio / La Proposta Estate 2026 si divide in due: le medie a Gardaland e le elementari all’Aquasplash di Lignano.",
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
    imageUrl: '/images/call1.png',
    email: 'per@donboscosandona.it',
    phone: '392 464 3689',
  },
  {
    name: 'Dopo la Campanella',
    role: 'Dott. Andrea Pasqualetto',
    imageUrl: '/images/call2.png',
    phone: '391 706 4430',
  },
  {
    name: 'Cinema don Bosco',
    role: "Per informazioni sugli orari e l'acquisto dei biglietti, inviate pure un whatsapp al nostro numero:",
    imageUrl: '/images/call3.png',
    phone: '346 960 5687',
  },
]

let in_evidenza = [
  {
    title: 'Iscrizioni',
    immagineUrl: '/images/iscrizioni.png',
    url: '/iscrizioni',
  },
  {
    title: 'Calendario',
    immagineUrl: '/images/calendario.png',
    url: '/calendario',
  },
  {
    title: 'Tema formativo',
    immagineUrl: '/images/tema.png',
    url: '/tema',
  },
  {
    title: 'Pomeriggi',
    immagineUrl: '/images/pomeriggi.png',
    url: '/pomeriggi',
  },
]

let laboratori = [
  {
    title: 'Espressivi',
    immagineUrl: '/images/espressivi.png',
    url: '/laboratori_espressivi',
  },
  {
    title: 'Sportivi',
    immagineUrl: '/images/sportivi.png',
    url: '/laboratori_sportivi',
  },
  {
    title: 'Manuali',
    immagineUrl: '/images/manuali.png',
    url: '/laboratori_manuali',
  },
  {
    title: 'Novità 2024',
    immagineUrl: '/images/novità.png',
    url: '/laboratori_new',
  },
]

let altri_link = [
  {
    title: 'Regolamento',
    immagineUrl: '/images/regolamento.png',
    url: '/regolamento',
  },
  {
    title: 'Momenti di preghiera e riflessione',
    immagineUrl: '/images/preghiera.png',
    url: '/preghiera',
  },
  {
    title: 'Gruppo Special',
    immagineUrl: '/images/special.png',
    url: '/special',
  },
  {
    title: 'Spazio animatori',
    immagineUrl: '/images/animatori.png',
    url: '/animatori',
  },
  {
    title: 'Spazio genitori',
    immagineUrl: '/images/genitori.png',
    url: '/genitori',
  },
  {
    title: "Scuola d'Estate? Sì grazie!",
    immagineUrl: '/images/dlc.png',
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
    title: 'MANDALORIAN E GROGU',
    category: '',
    description: "Se sei in cerca di una nuova avventura, 'Questa è la via'",
    immagineUrl:
      'https://image.tmdb.org/t/p/original//2XX2XlXdfEWV0tfUyWunBj1SFpx.jpg',
    url: 'https://cinema.donboscosandona.it',
  },
  {
    title: 'DISCLOSURE DAY',
    category: '',
    description: 'Un viaggio oltre i confini del conosciuto per scoprire la verità che ci è stata tenuta nascosta. Cosa accadrebbe se finalmente venisse rivelata la presenza di intelligenze extraterrestri tra noi?',
    immagineUrl:
      'https://cinema.donboscosandona.it/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ3dCIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--9ddc4e13c3529104be59ba35728fbc4bc54012bf/Disclosure%20day.png',
    url: 'https://cinema.donboscosandona.it',
  },
  {
    title: 'TOY STORY 5',
    category: '',
    description:
      'Quando Bonnie riceve in regalo un tablet Lilypad e ne diventa ossessionata, per Buzz, Woody, Jessie e il resto della banda, il lavoro si complica enormemente: dovranno affrontare una nuova, temibile minaccia al momento del gioco.',
    immagineUrl:
      'https://image.tmdb.org/t/p/original//aXRsPzBgZKRlRDParzxwQEgM8p2.jpg',
    url: 'https://cinema.donboscosandona.it',
  },
  {
    title: 'SUPERGIRL',
    category: '',
    description:
      `Quando un avversario inaspettato e spietato colpisce troppo vicino a casa, Kara Zor-El, alias Supergirl, è costretta a stringere un'improbabile alleanza intraprendendo un'epica avventura interstellare all'insegna della vendetta e della giustizia.`,
    immagineUrl:
      'https://image.tmdb.org/t/p/original//niSvU02l2BONH9ivubV6K1a5QiK.jpg',
    url: 'https://cinema.donboscosandona.it',
  },
  {
    title: 'MINIONS & MONSTERS',
    category: '',
    description: 'I piccoli aiutanti gialli si lanciano in un\'avventura mozzafiato in un mondo popolato da creature leggendarie. Riusciranno la loro goffaggine e il loro spirito di squadra a sconfiggere le minacce più oscure?',
    immagineUrl:
      'https://image.tmdb.org/t/p/original/822dQlRkYV5X23WGdxEZGVxKpa9.jpg',
    url: 'https://cinema.donboscosandona.it',
  },
  {
    title: 'ODISSEA',
    category: '',
    description:
      'Ulisse, il leggendario re greco di Itaca, intraprende un lungo e pericoloso viaggio verso casa dopo la guerra di Troia, raccontando i suoi incontri con esseri mitici come il ciclope Polifemo, le Sirene e la dea strega Circe.',
    immagineUrl:
      'https://image.tmdb.org/t/p/original//5S4U3gM7N17ni028LJhO60zfcKJ.jpg',
    url: 'https://cinema.donboscosandona.it',
  },
  {
    title: 'SPIDERMAN: BRAND NEW DAY',
    category: '',
    description: 'New York ha un nuovo volto e Peter Parker deve affrontare sfide mai viste prima. In una città che non dorme mai, il nostro amichevole Spider-Man di quartiere dovrà decidere che tipo di eroe vuole essere in questo nuovo capitolo della sua vita.',
    immagineUrl:
      'https://image.tmdb.org/t/p/original/pspkSVP39NGa6G2rvK5KlMjvYUe.jpg',
    url: 'https://cinema.donboscosandona.it',
  },
  {
    title: 'OCEANIA',
    category: '',
    description:
      "Vaiana (Catherine Lagaʻaia) risponde al richiamo dell'oceano e, per la prima volta, viaggia oltre la barriera corallina dell’isola di Motunui con il famigerato semidio Maui (Dwayne Johnson) in un viaggio indimenticabile per riportare la prosperità al suo popolo.",
    immagineUrl:
      'https://image.tmdb.org/t/p/original/g4zumtvkkH5QbyXyL0mO8HpCSaw.jpg',
    url: 'https://cinema.donboscosandona.it',
  },
]
