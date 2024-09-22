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

export default function Home({ data, elementi }) {
  return (
    <Layout>
      <Featured data={data} limit={4} defaultTag='' />
      <Paragraph
        title='Chi sono'
        avatarImageUrl='/images/martina.png'
        rightImageUrl='/images/Logo.png'
        backgroundImageUrl='/images/scrivania_martina.jpg'
        backgroundColor='#fff'
        opacity={0.7}
      >
        <p>
          Sono Martina Dianese, Orientatrice Asnor, Educatrice e Pedagogista
          Clinico , operativa nei riguardi di tutti coloro che devono
          fronteggiare scelte di vita, come l’indirizzo scolastico o
          universitario futuro, oppure lavorativo, di inserimento o
          reinserimento lavorativo per inoccupati, disoccupati di breve o lunga
          durata. Per più di dieci anni ho collaborato con un Centro di
          Formazione professionale che mi ha vista responsabile
          dell’orientamento in entrata, in itinere ed in uscita di giovani, ma
          anche operatrice dei Servizi al Lavoro. Nel corso degli anni ho
          seguito diversi progetti nella rete di Orientamento e Territorio
          gestendo spazi ascolto e laboratori di orientamento individuale. Ho
          seguito il Programma FIxO – di Italia Lavoro s.p.a. – Progetto
          Formazione ed Innovazione per l’Occupazione – Azioni in favore dei
          giovani NEET in transizione istruzione-lavoro e volte al sostegno
          dello sviluppo di placement nelle scuole, università e nei centri di
          formazione professionale. Il mio obiettivo è quello di mettere in atto
          una vera azione orientativa nei confronti degli utenti, comprendendone
          i bisogni, i contesti, le competenze ed i progetti. Stabilire cioè una
          relazione educativo-formativa con gli individui coinvolti in questo
          percorso e stimolare un atteggiamento critico-riflessivo e
          autoriflessivo nel loro percorso emancipatorio.
        </p>

        <p>&nbsp;</p>

        <h1>Cosa faccio</h1>
        <p>
          Come Orientatrice Asnor, il mio scopo è quello di diffondere e
          sostenere la cultura dell’orientamento nel mondo della scuola,
          dell’università e del lavoro, secondo il principio che ogni persona è
          una risorsa per sé e per il mondo. Utilizzando strumenti appartenenti
          alla mia professione con attività individuali e di gruppo, la persona
          da orientare viene accompagnata in un processo di autoconsapevolezza
          fino alla costruzione di una propria visione di vita individuale. La
          finalità dell’orientatore è quello insomma di sostenere la persona, di
          qualsiasi età, nelle fasi di transizione, quando cioè si trova di
          fronte alla necessità di prendere decisioni importanti quali il
          percorso scolastico, universitario o professionale.
        </p>

        <p>&nbsp;</p>

        <h1>Attività</h1>
        <p>
          <ul>
            <li>● Metodo di studio, stile di apprendimento, motivazione</li>
            <li>
              ● Analisi capacità ed interessi per la scelta della scuola
              superiore
            </li>
            <li>● Affiancamento e colloqui individuali</li>
            <li>● Interessi professionali</li>
            <li>● Profilo professionale individuale (strumento PerformanSe)</li>
            <li>● Bilancio delle competenze con il metodo Retravailler</li>
            <li>
              ● Stesura CV, preparazione colloqui, affiancamento nella ricerca
              attiva del lavoro
            </li>
            <li>
              ● Sportelli orientamento ed accompagnamento individuale nelle
              scuole del territorio
            </li>
          </ul>
        </p>
      </Paragraph>

      <SwiperNews
        title='Articoli recenti'
        data={data}
        limit={6}
        defaultTag=''
      />

      <Products
        title='Servizi offerti'
        description=''
        cardWidth={4}
        cardWidthXs={12}
        borderRadius='50%'
        aspectRatio='1 / 1'
        products={servizi}
      />
      <Products
        title='Strumenti usati'
        description=''
        products={strumenti}
        cardWidth={4}
        cardWidthXs={12}
        borderRadius={8}
      />
      
      <Products
        title='Certificazioni'
        description=''
        products={certificazioni}
        cardWidth={3}
        borderRadius='50%'
        aspectRatio='1 / 1'
      />
      
      <Paragraph
        title='Contatti'
        leftImageUrl='/images/contatti.jpg'
        backgroundImageUrl='/images/sfondo_contatti.jpg'
        maxWidth={false}
      >
        <h1>Martina Dianese</h1>
        <h2>Orientatrice scolastica e professionale</h2>
        <p>
          piazza IV Novembre, 22
          <br />
          30027 San Donà di Piave (VE)
          <br />
          Tel. 377 577 3509
          <br />
          &nbsp;
          <br />
          Dal lunedì al venerdi
          <br />
          ore 8.30 - 12.30 / 15.00 - 18.00
          <br />
          &nbsp;
          <br />
          E-mail: <a href='mailto:info@planyourlife.it'>info@planyourlife.it</a>
          <br />
          Sito: <a href='https://www.planyourlife.it'>www.planyourlife.it</a>
          <br />
          &nbsp;
          <br />
          Instagram:{' '}
          <a href='https://www.instagram.com/martinadianese'>@martinadianese</a>
          <br />
          &nbsp;
          <br />
          P. IVA 04876460272
        </p>
      </Paragraph>
      
      <Maps
        maxWidth='100%'
        maxHeight='550px'
        url='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1069.8936552382524!2d12.5636879111439!3d45.63104334408461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sit!2sit!4v1726416979794!5m2!1sit!2sit'
      />
    </Layout>
  )
}

export async function getStaticProps() {
  let res = await fetch(
    'https://channels.donboscosandona.it/api/posts/planyourlife'
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

let servizi = [
  {
    title: 'Orientamento Professionale',
    description:
      'Il Career Guidance è ciò che guida la persona nella presa di consapevolezza delle proprie abilità personali e competenze e lo sostiene nella ricerca attiva del lavoro. Attraverso strumenti propri dell’orientamento si costruisce un profilo professionale personalizzato, con i propri punti di forza e di debolezza, si chiarifica il tipo di lavoro ed azienda adeguato al tale profilo, quali sono le priorità lavorative e la propria concezione di lavoro. Si stabilisce insomma una tabella di marcia per il raggiungimento dei propri obiettivi e si acquisiscono le conoscenze necessarie per la crescita professionale Si viene affiancati nella stesura del cv, nella preparazione al colloquio di lavoro e nella sua ricerca attiva nel territorio.',
    immagineUrl: '/images/orientamento_professionale.jpg',
  },
  {
    title: 'Orientamento Scolastico',
    description:
      'Come orientarsi nella scelta della scuola superiore? Quando iniziare a guardarsi intorno ? Come fare a capire se la scelta che sto facendo è quella giusta? Queste e molte altre sono domande che ogni giorno mi vengono rivolte e dare la risposta è il risultato di un percorso complesso , che porta bambini e studenti ad acquisire una corretta visione di sé, delle proprie potenzialità ed attitudini al fine di fare una scelta consapevole ed in linea con le proprie risorse personali. Questo tipo di attività aiuta non solo a chiarire le opzioni educative disponibili, ma può anche impedire che vengano fatte scelte sbagliate che potrebbero portare frustrazione e conseguente dispersione scolastica. I ragazzi vengono incoraggiati  ad esplorare le proprie capacità accademiche e non, aprendosi a nuove opportunità ed idee per arrivare alla costruzione di un progetto di vita ad hoc.',
    immagineUrl: '/images/orientamento_scolastico.png',
  },
  {
    title: 'Orientamento Universitario',
    description:
      'L’orientamento universitario è una tappa cruciale che concretizza sempre di più il percorso di vita della persona e pertanto deve essere fatta con adeguata consapevolezza ed attenzione. Non si tratta soltanto di scegliere una facoltà, ma si colloca all’interno del percorso di formazione continua che caratterizza ciascun individuo. E’ un fondamentale collegamento tra la scuola superiore ed il futuro professionale, pertanto deve assumere un adeguato significato. La finalità dell’orientamento universitario è la medesima di tutti i luoghi dell’orientamento: consentire alla persona di acquisire sempre maggior consapevolezza del proprio valore e del proprio essere.',
    immagineUrl: '/images/orientamento_universitario.png',
  },
]

let strumenti = [
  {
    title: 'Test psico-attitudinali e motivazionali',
    description:
      'I test psico-attitudinali sono strumenti utilizzati per valutare le attitudini, le capacità cognitive e le caratteristiche della personalità. Questi test possono includere diverse tipologie, come: test di intelligenza, di attitudine professionale, di personalità, di abilità specifiche, di motivazione e interesse.',
    immagineUrl: '/images/test.jpg',
  },
  {
    title: 'Questionari di autovalutazione',
    description:
      'I questionari di autovalutazione sono strumenti utili per riflettere su vari aspetti della propria vita, come le competenze professionali, le attitudini personali e le aree di sviluppo. Ecco alcuni tipi comuni di questionari di autovalutazione: autovalutazione delle competenze, della personalità, della carriera, del benessere, delle prestazioni.',
    immagineUrl: '/images/autovalutazione.jpg',
  },
  {
    title: 'E-Portfolio',
    description:
      'Un e-portfolio è uno strumento digitale che raccoglie e presenta una varietà di contenuti relativi alle competenze, esperienze e risultati di una persona. È utilizzato in contesti educativi e professionali per documentare e riflettere sui progressi personali e professionali, nonché per dimostrare competenze e realizzazioni a potenziali datori di lavoro, colleghi o istituzioni educative.',
    immagineUrl: '/images/eportfolio.jpg',
  },
  {
    title: 'Questionario PerformanSe',
    description:
      "Il questionario PerformanSe è uno strumento di valutazione che permette di analizzare le caratteristiche professionali e comportamentali di una persona, evidenziando le sue motivazioni, potenzialità e aree di miglioramento. Questo strumento si basa su modelli psicologici consolidati e offre un'analisi completa e personalizzata, utile per l'orientamento professionale, la selezione del personale e lo sviluppo delle competenze.",
    immagineUrl: '/images/performanse.jpg',
  },
  {
    title: 'Bilancio di competenze attraverso il metodo Retravailler',
    description:
      "E' un percorso di orientamento professionale che aiuta le persone a identificare e valorizzare le proprie competenze, aspirazioni e potenzialità, al fine di definire un progetto professionale concreto e realizzabile. Questo metodo si basa su un approccio personalizzato e partecipativo, che mette al centro la persona e le sue risorse.",
    immagineUrl: '/images/competenze.jpg',
  },
]

let certificazioni = [
  {
    title: 'Bilancio di competenze attraverso il Metodo Retravailler',
    category: 'Rilasciato da Asnor',
    immagineUrl:
      '/images/logo_asnor.jpg',
      url: '/docs/attestato_asnor.pdf'
  },
  {
    title: 'Il Metodo LabyrinthWay',
    category: 'Rilasciato da ISFAR',
    immagineUrl:
      '/images/logo_isfar.png',
      url: '/docs/attestato_isfar.pdf'
  },
  {
    title: 'Abilitazione allo strumento Evolution',
    category: 'Rilasciato da PerformanSe Italia',
    immagineUrl:
      '/images/logo_performanse.png',
      url: 'https://app.myopenbadge.com/verify/vaRVNK'
  },
]