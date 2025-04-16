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
        <meta name='og:image' content='/images/home.webp' />
      </Head>
      <LandingHero
        opacity={0.2}
        title='Proposta Estate Ragazzi'
        description="Dal 13 Giugno all'11 Luglio 2025"
        buttonUrl='/tema'
        buttonText='SAVED TO SAVE'
        imageUrl='/images/home.webp'
      />
      <Paragraph
        title='Salvato per salvare'
        subtitle='Saluto del Direttore, don Nicola Munari'
        avatarImageUrl='/images/home/nik.png'
        columnCount={2}
      >
        <p>
          Titolo interessante quello di questa Proposta Estate Ragazzi: “Salvato
          per salvare”. Provo a mettermi nei panni di un genitore che leggerà
          questo titolo. Un genitore cosa desidera salvare, rendere sicuro, dare
          stabilità per la vita dei propri figli?
        </p>
        <p>
          <br />
          Per molti, ma non per tutti, in questo periodo, sicuramente c’è la
          necessità di salvare l’anno scolastico. Per la maggior parte è urgente
          salvare le amicizie dei propri figli, perché siano sicure e
          promettenti. Tutti sono preoccupati perché la salute fisica sia sempre
          salva e salvaguardata e tutti sperano per loro un futuro sereno, senza
          problemi economici e con una vita di successo. Mi chiedo se per
          salvare, custodire, conservare, difendere i propri ragazzi basta avere
          a cuore la vita fisica, la scuola, le amicizie e quant’altro.
        </p>
        <p>
          <br />
          Per i piccoli, per ogni genitore e per ogni persona, è essenziale
          cercare e custodire un senso bello della vita, che dia significato ad
          ogni giornata. Senza un motivo davvero forte per vivere è difficile
          condurre un’esistenza bella e capace di superare i momenti di fatica,
          l’ansia da prestazione, il fascino della violenta, il disorientamento
          che quotidianamente insidia la vita di ciascuno.
        </p>
        <p>
          <br />
          La P.E.R. si propone di offrire ai Ragazzi, che ci vengono affidati,
          un esempio di vita bella e buona, significativa e piena, spesa bene e
          robusta di fronte alle fatiche della vita stessa. Come lo si vuol
          fare? Mettendo accanto ai vostri figli persone adulte e giovani che
          sanno spendersi per gli altri con gioia e gratuità.
        </p>
        <p>
          <br />
          Il Meglio della nostra proposta non sono le attività, le gite, i
          tornei, o i punti delle squadre. Il meglio sta nelle persone
          significative che sono la prova concreta che la vita può avere un
          gusto, una forza e un orizzonte davvero grandi ma non per merito loro,
          ma perché nella loro vita è presente Gesù.
        </p>
        <p>
          <br />A tutti: genitori, educatori e ragazzi dico: “Non abbiamo paura
          di credere che la nostra vita è custodita, salvaguardata, resa davvero
          spettacolare dal Signore. Ecco il meglio, non solo dell’estate, ma di
          tutta vita. Buona estate
        </p>
        <br />
        <p>
          <b>don Nicola</b>
        </p>
      </Paragraph>
      <Featured data={data} defaultTag='per' />
      <SwiperNews title='News' data={data} limit={12} defaultTag='per' />
      <Team
        title="La #per dell'Oratorio don Bosco è..."
        description=''
        members={features}
        cardWidth={3}
      />
      <Table
        title='Orario della Giornata tipo'
        backgroundImageUrl='/images/giornata.webp'
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
        title="Un'estate di emozioni al Cinema don Bosco"
        description='Nei mesi di giugno, luglio e agosto gli iscritti alla PER25 potranno partecipare a tutti gli spettacoli del Cinema don Bosco al prezzo speciale di 4 €! Non ci sarà più un giorno fisso dedicato al Cinema quindi, ma tutti i giorni e tutti gli orari saranno buoni per venire a divertirti con i tuoi amici! Per avere lo sconto dovrai iscriverti alla Community WhatsApp NEWS della P.E.R.25 che si trova nella sezione delle informazioni e News. Riceverai ogni settimana la programmazione insieme a un link che ti permetterà di acquistare online a prezzo scontato i biglietti per te e per i tuoi amici e familiari. Nota: non è possibile ricevere lo sconto alla cassa, ma solo acquistando i biglietti online.'
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
          raccontare la propria esperienza usando gli hashtag #PER25{' '}
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
            href='https://chat.whatsapp.com/F0B4dSu6LXYEEKnJYo6dUd'
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
        title='La Segreteria della PER'
        backgroundColor='#2f4700'
        opacity={0.7}
        blur='0rem'
        maxWidth={false}
        color='white'
        backgroundImageUrl='/images/segreteria.webp'
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
    imageUrl: '/images/home/praying.webp',
    description:
      "Nel cuore dell'estate la PER vuol essere un'occasione per riscoprire la bellezza della fede.",
  },
  {
    name: 'In allegria',
    imageUrl: '/images/home/happy.webp',
    description:
      'La PER è piena di allegria vissuta in compagnia in ogni momento: giochi, attività, gite, serate...',
  },
  {
    name: 'Mettendo a frutto la creatività',
    imageUrl: '/images/home/creativo.webp',
    description:
      "Nei laboratori i talenti fioriscono: in te forse c'è uno sportivo, un artista, un creativo... scegli con cura al momento della preiscrizione.",
  },
  {
    name: 'Coltivando le relazioni',
    imageUrl: '/images/home/relazioni.webp',
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
    titolo: 'Etienne e la sua crew',
    descrizione: 'Venerdì 21 Giugno',
    immagine: '/images/serate/etienne.jpeg',
    colore: '#182C61',
    colore2: 'transparent',
    opacity: 1,
    blur: '0rem',
    buttonText: '',
    buttonUrl: '',
  },
  {
    titolo: 'Schiuma Party',
    descrizione: 'Venerdì 28 Giugno',
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
      'Giovedì 4 luglio / Sfilata, animazione da palco e gara di torte',
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
      'Venerdì 12 luglio / Grande festa tutti insieme e proclamazione della Squadra vincitrice della #PER24',
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
      'Lunedì 24 Giugno con i ragazzi di quinta elementare e prima media / Venerdì 28 giugno con i ragazzi di seconda e terza media / Lunedì 1 Luglio con i ragazzi di terza e quarta elementare',
    immagine: '/images/gite/mare.webp',
    colore: '#FFC312',
    colore2: 'transparent',
    opacity: 1,
    blur: '0rem',
  },
  {
    titolo: 'Noale // Aquaestate',
    descrizione:
      'Giovedì 20 Giugno / Martedì 9 Luglio / Una giornata di allegria in piscina, tra scivoli e spruzzi!',
    immagine: '/images/gite/noale.webp',
    colore: '#0097e6',
    colore2: 'transparent',
    opacity: 0.8,
    blur: '0rem',
  },
  {
    titolo: 'Escursione in montagna',
    descrizione:
      'Martedì 27 Giugno / Una giornata immersi nel verde e respirando l’aria fresca di montagna! Scarponi da trekking, zaino in spalla: si parte per un’avventura indimenticabile!!!',
    immagine: '/images/gite/montagna.webp',
    colore: '#009432',
    colore2: 'transparent',
    opacity: 0.8,
    blur: '0rem',
  },
  {
    titolo: 'Movieland // Caneva World',
    descrizione:
      'Martedì 2 Luglio / La Proposta Estate 2024 si immerge nei paesaggi del lago di Garda per una giornata tra giostre e acqua!',
    immagine: '/images/gite/movieland.webp',
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
    immagineUrl: '/images/iscrizioni.webp',
    url: '/iscrizioni',
  },
  {
    title: 'Calendario',
    immagineUrl: '/images/calendario.webp',
    url: '/calendario',
  },
  {
    title: 'Tema formativo',
    immagineUrl: '/images/tema.webp',
    url: '/tema',
  },
  {
    title: 'Pomeriggi',
    immagineUrl: '/images/pomeriggi.webp',
    url: '/pomeriggi',
  },
]

let laboratori = [
  {
    title: 'Espressivi',
    immagineUrl: '/images/espressivi.webp',
    url: '/laboratori_espressivi',
  },
  {
    title: 'Sportivi',
    immagineUrl: '/images/sportivi.webp',
    url: '/laboratori_sportivi',
  },
  {
    title: 'Manuali',
    immagineUrl: '/images/manuali.webp',
    url: '/laboratori_manuali',
  },
  {
    title: 'Novità 2024',
    immagineUrl: '/images/novità.webp',
    url: '/laboratori_new',
  },
]

let altri_link = [
  {
    title: 'Regolamento',
    immagineUrl: '/images/regolamento.webp',
    url: '/regolamento',
  },
  {
    title: 'Momenti di preghiera e riflessione',
    immagineUrl: '/images/preghiera.webp',
    url: '/preghiera',
  },
  {
    title: 'Gruppo Special',
    immagineUrl: '/images/special.webp',
    url: '/special',
  },
  {
    title: 'Spazio animatori',
    immagineUrl: '/images/animatori.webp',
    url: '/animatori',
  },
  {
    title: 'Spazio genitori',
    immagineUrl: '/images/genitori.webp',
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
    title: 'LILO & STITCH',
    category: '',
    description:
      "Una solitaria bambina hawaiana di nome Lilo, grazie all'aiuto di un fuggitivo alieno blu, riesce a riparare la sua famiglia, a cui credeva di dover dire addio per sempre...",
    immagineUrl:
      'https://image.tmdb.org/t/p/original/oyY4WANSpBwaBTTnN1qxWOsgmCy.jpg',
    url: 'https://cinema.donboscosandona.it',
  },
  {
    title: 'MISSION IMPOSSIBLE - THE FINAL RECKONING',
    category: '',
    description:
      'Ethan e il suo team si trovano ad affrontare una nuova e pericolosa minaccia: devono rintracciare due chiavi che sbloccano un potente sistema di intelligenza artificiale, capace di causare disastri a livello mondiale, dai sabotaggi dei circuiti bancari internazionali al caos delle reti elettriche.',
    immagineUrl:
      'https://image.tmdb.org/t/p/original//z53D72EAOxGRqdr7KXXWp9dJiDe.jpg',
    url: 'https://cinema.donboscosandona.it',
  },
  {
    title: 'DRAGON TRAINER',
    category: '',
    description:
      "Sulla selvaggia isola di Berk, dove vichinghi e draghi sono stati acerrimi nemici per generazioni, Hiccup è diverso dagli altri. Figlio geniale ma sottovalutato dal capo Stoick l'Immenso, Hiccup sfida secoli di tradizione stringendo un'insolita amiciza con Sdentato, un temibile drago Furia Buia...",
    immagineUrl:
      'https://image.tmdb.org/t/p/original/iLrqsG4tmqHEInjKIf6cpyQp30N.jpg',
    url: 'https://cinema.donboscosandona.it',
  },
  {
    title: 'ELIO',
    category: '',
    description:
      'Elio è un bambino di undici anni con un carattere artistico, creativo e sognatore, ma ha difficoltà a integrarsi con gli altri. A causa di questo problema, il piccolo è sempre rinchiuso in casa. Nel frattempo sua madre Olga è impegnata nella direzione di un progetto militare top-secret ed è intenta a decodificare uno strano segnale giunto dallo spazio...',
    immagineUrl:
      'https://image.tmdb.org/t/p/original//feUV7SEy9mrbp5dJUoiRoJy7u9x.jpg',
    url: 'https://cinema.donboscosandona.it',
  },
  {
    title: 'F1',
    category: '',
    description:
      "La leggenda delle corse automobilistiche Sonny Hayes viene convinto a uscire dal ritiro per guidare un team di Formula 1 in difficoltà e fare da mentore a un giovane pilota promettente, mentre insegue un'altra possibilità di gloria.",
    immagineUrl:
      'https://image.tmdb.org/t/p/original//hfkVxu1tLhbS0FHcqleTdq0VRcn.jpg',
    url: 'https://cinema.donboscosandona.it',
  },
  {
    title: 'JURASSIC WORLD - LA RINASCITA',
    category: '',
    description:
      "I dinosauri si stanno estinguendo poiché il mondo moderno è inospitale nei loro confronti e i sopravvissuti si sono rifugiati in una piccola regione dei tropici attorno all'equatore. Ma a minacciarli interviene ancora una volta l'essere umano, visto che un'azienda farmaceutica spera di utilizzare il DNA di dinosauro per creare un nuovo farmaco salvavita...",
    immagineUrl:
      'https://image.tmdb.org/t/p/original/gvWXhXuPbMviAJmBCcBX9L2pjLk.jpg',
    url: 'https://cinema.donboscosandona.it',
  },
  {
    title: 'SUPERMAN',
    category: '',
    description:
      "Il film segna l'inizio del nuovo DCU, ma non racconta una origin story sull'Uomo d'Acciaio. Si concentra su Superman e il suo equilibrio tra le origini kryptoniane e la sua parte umana.",
    immagineUrl:
      'https://image.tmdb.org/t/p/original//wPLysNDLffQLOVebZQCbXJEv6E6.jpg',
    url: 'https://cinema.donboscosandona.it',
  },
  {
    title: 'I FANTASTICI 4 - GLI INIZI',
    category: '',
    description:
      "Costretti a bilanciare il loro ruolo di eroi con la forza del loro legame familiare, i protagonisti devono difendere la Terra da una vorace divinità spaziale chiamata Galactus e dal suo enigmatico araldo, Silver Surfer. E se il piano di Galactus di divorare l'intero pianeta e tutti i suoi abitanti non fosse già abbastanza terribile, la situazione diventa all’improvviso una questione molto personale...",
    immagineUrl:
      'https://image.tmdb.org/t/p/original/jatnqRPnxjg2Q6cFsAjmrBNhx9.jpg',
    url: 'https://cinema.donboscosandona.it',
  },
  {
    title: 'TROPPO CATTIVI 2',
    category: '',
    description:
      'Nel nuovo capitolo, i Troppo Cattivi, una banda di animali criminali, cercano di guadagnarsi fiducia e accettazione nella loro nuova vita da ""bravi ragazzi"". Tuttavia, vengono richiamati in azione per affrontare un\'ultima missione, guidati da una squadra criminale tutta al femminile.',
    immagineUrl:
      'https://image.tmdb.org/t/p/original//3KE3teyf3d8m14Mrdz75w4KdNGr.jpg',
    url: 'https://cinema.donboscosandona.it',
  },
]
