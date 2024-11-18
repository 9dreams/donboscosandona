import Head from 'next/head'

import {
  Layout,
  LandingHero,
  Products,
  SwiperNews,
  Paragraph,
  Sponsor,
  Table,
} from '/components'

export default function Home({ data }) {
  return (
    <Layout>
      <Head />
      <LandingHero
        imageUrl='/images/informatico/settoreinformatico.jpg'
        height={100}
      />
      <Paragraph
        title='Operatore Informatico'
        subtitle='Qualifica triennale'
        rightImageUrl='/images/codici_progetti.png'
      >
        L'Operatore informatico interviene nel processo di sviluppo e gestione
        di prodotti e servizi informatici. Supporta operativamente sistemi, reti
        e soluzioni di Data Management, nello specifico negli ambiti
        dell'installazione, configurazione e utilizzo di supporti e dispositivi
        informatici hardware e software presenti nell'office automation e a
        supporto della comunicazione digitale, della manutenzione ordinaria e
        straordinaria di sistemi, reti, dispositivi e terminali utenti,
        dell'elaborazione, manutenzione e trasmissione di dati gestiti da
        archivi digitali.
        <h3>Competenze sviluppate nel corso dei tre anni:</h3>
        <ol>
          <li>
            Installare, configurare e utilizzare supporti informatici hardware e
            software tipici dell’office automation e della comunicazione
            digitale sulla base delle specifiche esigenze del cliente
          </li>
          <li>
            Eseguire la manutenzione ordinaria e straordinaria di sistemi, reti,
            dispositivi e terminali utenti, individuando eventuali anomalie e
            problemi di funzionamento
          </li>
          <li>
            Effettuare l’elaborazione, manutenzione e trasmissione di dati
            gestiti da archivi digitali
          </li>
        </ol>
      </Paragraph>
      <Paragraph
        title='Tecnico Informatico'
        subtitle='Diploma Professionale Quadriennale in Sistema Duale con indirizzo Sviluppo soluzioni ICT'
      >
        Il Tecnico informatico interviene con autonomia - nelle specifiche
        assegnate - al presidio dei processi relativi ai sistemi, reti, data
        management, sviluppo di soluzioni ICT (Information & Communication
        Technologies). Supporta operativamente l'installazione, aggiornamento e
        dismissione di hardware, software e componenti di sottosistema, la
        sicurezza e il testing di conformità, la gestione di reti informatiche e
        del data management.
        <ol>
          <h3>
            Competenze del tecnico informatico con indirizzo Sviluppo soluzioni
            ICT:
          </h3>
          <li>
            Elaborare prodotti di comunicazione che descrivono prodotti,
            servizi, componenti o applicazioni conformi con i requisiti relativi
            alla documentazione, identificando e selezionando lo stile e il
            media appropriato per il materiale di presentazione
          </li>
          <li>
            Curare gli interventi necessari pianificati per implementare la
            soluzione, tra cui l'installazione, l'aggiornamento e la
            dismissione, registrando tutte le informazioni rilevanti, compresi
            gli indirizzi delle apparecchiature, i dati di configurazione e di
            performance
          </li>
          <li>
            Collaborare a implementare la politica della sicurezza
            dell'informazione, controllando e attuando interventi a fronte di
            intrusioni, frodi e buchi o falle della sicurezza al fine di
            assicurare che i rischi siano analizzati e gestiti
          </li>
          <li>
            Realizzare sulla base delle analisi effettuate, delle specifiche
            rilevate e dei modelli esistenti un nuovo modello per implementare
            le applicazioni in conformità con la politica e le esigenze
            dell'utente/cliente
          </li>
          <li>
            Adattare le soluzioni esistenti, sviluppando e collaudando
            applicativi di bassa complessità
          </li>
          <li>
            Costruire, effettuandone la relativa implementazione, le procedure
            di test sistematico per i sistemi IT o per i requisiti di usabilità
            del cliente per stabilire la conformità con le specifiche di
            progettazione
          </li>
        </ol>
      </Paragraph>
      <Paragraph
        title='Full Stack Developer'
        subtitle='Percorso post-diploma IFTS (Istruzione Formazione Tecnico Superiore)'
      >
        Il Full Stack Developer è un programmatore che si occupa della progettazione e della realizzazione dell'intero stack di un'applicazione web o mobile: dalla memorizzazione ed elaborazione dei dati lato server (Back End) al suo interfacciamento con il lato utente (Front End), alla definizione di un'interfaccia utente accattivante. Interfacciandosi con il grafico, lavora sull'aspetto visivo di un sito web o di un'applicazione, e fa in modo che l'esperienza utente sia ottimale anche su piattaforme differenti, secondo i fondamenti dello User Experience Design (UXD). Per fare questo ha una conoscenza dei principali linguaggi di programmazione e framework usati nel web (HTML, CSS, JavaScript, Bootstrap, ReactJS) e nella realizzazione di applicazioni mobile (React Native, Flutter) oltre a quelli necessari per realizzare e gestire il Back End (Ruby on Rails, PostgreSQL, JSON) ed è in grado di apprenderne di nuovi in un contesto di continua evoluzione e rinnovamento. Gli sbocchi professionali vanno dall'impiego in multinazionali, software house, agenzie pubblicitarie a imprese non necessariamente del settore ICT che desiderino mantenere internamente il proprio sito web o la propria applicazione.
        <p><a href='https://www.donboscosandona.it/articoli/172'>Per saperne di più...</a></p>
      </Paragraph>
      <Products
        title='Primo anno'
        description="Durante primo anno vivrai un primo approccio alle Tecnologie dell'Informazione e alla programmazione."
        cardWidth={4}
        cardWidthXs={6}
        products={primo_anno}
      />
      <Products
        title='Secondo anno'
        description="Il secondo anno è dedicato all'assistenza tecnica al cliente da tutti i punti di vista. Nella parte di programmazione vedremo lo sviluppo del front-end delle applicazioni."
        cardWidth={3}
        cardWidthXs={6}
        products={secondo_anno}
      />
      <Products
        title='Terzo anno'
        description='Il terzo anno ti insegnerà a gestire le reti e i server. Entrerai inoltre nel mondo dello sviluppo back-end, full-stack e delle API (Application Programming Interfaces)'
        cardWidth={3}
        cardWidthXs={6}
        products={terzo_anno}
      />
      <Products
        title='Quarto anno'
        description="Il quarto anno - se deciderai di non fermarti alla qualifica ma di conseguire il diploma di tecnico - sarai collocato in un'azienda del settore per una formazione con il Sistema Duale (scuola e azienda)."
        cardWidth={4}
        cardWidthXs={6}
        products={quarto_anno}
      />
      <Products
        title='IFTS'
        description="500 ore a scuola e 500 in azienda nel nostro percorso di Istruzione e Formazione Tecnica Superiore, che apre le porte agli ITS Academy."
        cardWidth={4}
        cardWidthXs={6}
        products={ifts}
      />

      <SwiperNews title='News dal Settore Informatico' data={data} limit={15} defaultTag='scuola,informatico' />

      <Products
        title='I nostri progetti'
        description='Ci piace mettere a frutto quello che impariamo a scuola, e siamo sempre aperti a nuove avventure!'
        cardWidth={3}
        cardWidthXs={12}
        products={progetti}
      />

      {/* <Paragraph topImageUrl='/images/informatico/programma-scolastico.svg' /> */}
      <Sponsor logos={sponsor} />

      <Paragraph>
        <Table
          title='Piano formativo'
          rows={[
            ['', '1° Anno', '2° Anno', '3° Anno', '4° Anno', 'IFTS'],
            ['Italiano', 3, 3, 2, 3, 1],
            ['Storia / Economia / Diritto', 1, 1, 1, 1, 1],
            ['Inglese', 2, 2, 2, 2, 1],
            ['Religione', 1, 1, 1, 1, null],
            ['Matematica', 3, 3, 3, 2, 1],
            ['Fisica', 2, 2, 2, 2, 1],
            ['CAD', 2, 2, 2, 2, null],
            ['Teoria Sistemi e reti', 5, 3, 3, null, null],
            ['Laboratorio Sistemi e Programmazione', 10, 12, 12, 3, 10],
            [null, null, null, null, null, null],
            ['ORE ANNUALI STAGE / APPRENDISTATO FORMATIVO', '', 200, 200, 500, 500],
          ]}
          backgroundImageUrl='/images/informatico/sfondo-piano-formativo.jpg'
          backgroundColor='#003185'
          opacity={0.8}
          blur='0.1rem'
          color='white'
        />
      </Paragraph>
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch(
    'https://channels.donboscosandona.it/api/posts/inoratorio?q=informatico'
  )
  const data = await res.json()

  return {
    props: { data },
    revalidate: 3600, // I dati vengono ricaricati al massimo una volta all'ora
  }
}

let progetti = [
  {
    title: '9dreams Agency',
    description: 'La nostra agenzia di comunicazione.',
    url: '/9dreams',
    immagineUrl:
      '/images/informatico/loghi/logo_9dreams.png',
  },
  {
    title: 'Assistenza Informatica',
    description: 'Il servizio di qualità offerto dalle nostre classi a tutta la scuola.',
    immagineUrl: 'https://computernext.it/wp-content/uploads/2017/06/assistenza-informatica.jpg',
  },
  {
    title: 'Books',
    description: 'Gli appunti dei nostri corsi di programmazione.',
    immagineUrl: '/images/informatico/books.png',
    url: 'https://books.donboscosandona.it'
  },
  {
    title: 'FreeCodeCamp',
    url: 'https://www.freecodecamp.org/italian/',
    description:
      'Siamo fieri di aver contribuito con le nostre classi alla traduzione italiana del progetto freeCodeCamp, dove puoi imparare a programmare gratuitamente ottenendo certificazioni di livello Universitario.',
    immagineUrl:
      'https://archive.donboscosandona.it/img/column/0355dfc4fe258cf1982ba5ac69a051d4ebd245c4.jpg?1622362155',
  },
]

let primo_anno = [
  {
    title: 'Sicurezza',
    description: 'Lavorare in sicurezza è fondamentale per qualsiasi professione. Imparerai la normativa, l\'uso corretto degli attrezzi manuali e delle sostanze chimiche, quali sono i dispositivi di protezione da indossare, le procedure antincendio e la lettura dei vari cartelli.',
    immagineUrl: '/images/informatico/sicurezza.png',
  },
  {
    title: 'Assemblaggio PC',
    description: 'Scheda madre, processore, dissipatore, RAM, alimentatore, SSD: imparerai a riconoscere i vari componenti del computer e ad assemblarli in modo corretto, per dare vita a un pc funzionante.',
    immagineUrl: '/images/informatico/assemblaggio-pc.png',
  },
  {
    title: 'Sistemi Operativi',
    description: 'Dopo aver assemblato il tuo pc imparerai a dargli vita installando e configurando le principali versioni dei sistemi operativi Windows e Linux.',
    immagineUrl: '/images/informatico/sistemi-operativi.png',
  },
  {
    title: 'HTML',
    description: 'HTML è un linguaggio basato sui tag che è alla base di qualsiasi applicazione web. Puoi considerarlo lo scheletro dell\'applicazione.',
    immagineUrl: '/images/informatico/html.png',
  },
  {
    title: 'Arduino',
    description: 'Arduino è una piccola scheda elettronica che ti permette di collegare dei sensori e scrivere un programma che legge il loro valore e comanda degli attuatori nel mondo reale: un\'ottima introduzione alla programmazione e all\'elettronica.',
    immagineUrl: '/images/informatico/arduino.png',
  },
  {
    title: 'C# E UNITY',
    description: 'Unity è un potente motore di gioco che ti permette di creare mondi virtuali straordinari: sarà l\'occasione per familiarizzare con C#, un moderno linguaggio di programmazione a oggetti. ',
    immagineUrl: '/images/informatico/csharpeunity.jpg',
  },
]

let secondo_anno = [
  {
    title: 'Assistenza al cliente',
    description:
      'Nella nostra scuola l\'assistenza informatica è fornita dagli allievi informatici di seconda: 500 iPad, 6 aule informatiche, apparecchiature di ogni tipo e svariati uffici bisognosi di cure ogni giorno.',
    immagineUrl: '/images/informatico/assistenza-al-cliente.png',
  },
  {
    title: 'Scelta dei componenti',
    description: 'Dopo aver visto come assemblarli, dedicherai del tempo a capire quali sono i criteri per capire quali componenti sono compatibili con gli altri, e a sceglierli correttamente per ottenere un pc con prestazioni ottimali.',
    immagineUrl: '/images/informatico/cambio-componenti.png',
  },
  {
    title: 'Benchmark e Test',
    description: 'Utilizzerai gli strumenti hardware e software a disposizione per verificare che tutte le parti del pc stiano operando correttamente, senza surriscaldamenti o perdite di dati.',
    immagineUrl: '/images/informatico/benchmark-test.png',
  },
  {
    title: 'Apparati di rete',
    description: 'Imparerai a connettere tra di loro i pc in una rete locale utilizzando switch, router, access point e altre apparecchiature di rete.',
    immagineUrl: '/images/informatico/apparati-di-rete.png',
  },
  {
    title: 'Shell Linux',
    description: 'Sempre più dispositivi e servizi sono basati sul sistema operativo Linux, che permette un controllo potente senza l\'appesantimento di un\'interfaccia grafica. Imparerai ad usare i comandi fondamentali della linea di comando e a gestire i vari processi del Sistema Operativo.',
    immagineUrl: '/images/informatico/shell-linux.png',
  },
  {
    title: 'Python',
    description: 'Python è un linguaggio di programmazione che viene impiegato sempre più nelle applicazioni web, nella scienza dei dati e nel Machine Learning. Vale la pena di fare la sua conoscenza.',
    immagineUrl: '/images/informatico/python.png',
  },
  {
    title: 'Raspberry',
    description: 'Hai presente Arduino visto in prima? Raspberry è una sua evoluzione e ti permette di controllare ingressi e uscite collegati al mondo reale con un vero e proprio computer che sta nel palmo di una mano. Un ottimo banco di prova per le tue conoscenze di Linux e della programmazione.',
    immagineUrl: '/images/informatico/rasp-berry.png',
  },
  {
    title: 'Versioning',
    description: 'Git e GitHub sono strumenti utilizzati quotidianamente dagli sviluppatori di tutto il mondo per gestire il loro codice: imparerai a mantenere diverse versioni di uno stesso programma, e a collaborare con altri sviluppatori in modo che il codice scritto da ognuno vada a fondersi con quello scritto dagli altri senza creare problemi.',
    immagineUrl: '/images/informatico/versioning.png',
  },
  {
    title: 'CSS',
    description: 'Usato insieme ad HTML, CSS permette di curare l\'aspetto grafico della tua applicazione... proprio come quando applichi diversi temi allo stesso programma.',
    immagineUrl: '/images/informatico/css.png',
  },
  {
    title: 'Bootstrap',
    description: 'Bootstrap ti permetterà di strutturare velocemente le tue pagine web in modo che si adattino senza problemi anche agli schermi di smartphone e tablet.',
    immagineUrl: '/images/informatico/bootstrap.png',
  },
  {
    title: 'JavaScript',
    description: 'Dopo aver curato l\'aspetto della tua pagina, potrai darle vita e renderla attiva usando JavaScript.',
    immagineUrl: '/images/informatico/javascript.png',
  },
  {
    title: 'ReactJS',
    description: 'React è una libreria creata dagli sviluppatori di Facebook che viene usata in tutto il mondo per costruire velocemente applicazioni basate su componenti creati da te o da altri sviluppatori.',
    immagineUrl: '/images/informatico/reactjs.png',
  },
  {
    title: 'NextJS',
    description: 'NextJS permette di creare con facilità interi siti basati sui componenti di React, ottimizzando le pagine in modo che siano superveloci. Anche questo sito è creato con React e NextJS.',
    immagineUrl: '/images/informatico/nextjs.png',
  },
]

let terzo_anno = [
  {
    title: 'Server Windows',
    description: 'Dopo aver visto nel dettaglio come si gestiscono i personal computer, in terza imparerai a gestire i server, che con i loro servizi sono il cuore di tutte le reti locali di computer.',
    immagineUrl: '/images/informatico/windows-server.png',
  },
  {
    title: 'Server Linux',
    description: 'Oltre ai server Windows imparerai a gestire quelli con il sistema operativo Linux, ampiamente utilizzati per ospitare le applicazioni web, ma anche mille altre servizi legati all\'Internet delle cose.',
    immagineUrl: '/images/informatico/server-linux.png',
  },
  {
    title: 'Virtualizzazione',
    description: 'Un unico server fisico può ospitare molti server virtuali, che possono essere accesi, duplicati, spostati all\'occorrenza.',
    immagineUrl: '/images/informatico/virtualizzazione.png',
  },
  {
    title: 'Domini Active Directory',
    description: 'Le reti aziendali, con centinaia o migliaia di utenti, sono per lo più basate su domini Active Directory: imparerai a gestire gli utenti e i loro spazi, a concedere i permessi, insomma ad avere il potere dell\'Amministratore di Rete.',
    immagineUrl: '/images/informatico/domini-active-directory.png',
  },
  {
    title: 'Router',
    description: 'In ogni nodo della rete Internet, ma anche a casa tua, c\'è un router, un dispositivo che permette di instradare il traffico di rete in modo che prenda la direzione più opportuna per raggiungere l\'indirizzo richiesto, che sia a due passi come dall\'altra parte del mondo.',
    immagineUrl: '/images/informatico/router.png',
  },
  {
    title: 'Cisco Packet Tracer',
    description: 'Con questo strumento imparerai a simulare il funzionamento di reti complesse, collegando tra loro diversi dispositivi virtuali e analizzando il traffico dei dati.',
    immagineUrl: '/images/informatico/cisco-packet.png',
  },
  {
    title: 'Sicurezza Informatica',
    description: 'La sicurezza informatica non è solo questione di film: ogni giono nel mondo migliaia di persone o aziende perdono i loro dati, sono truffate o messe nei guai dai criminali informatici. Imparerai le tecniche di base per difendere il server o la rete che gestisci da questi attacchi.',
    immagineUrl: '/images/informatico/sicurezza-informatica.png',
  },
  {
    title: 'Figma',
    description: 'Con questo stumento potrai disegnare l\'interfaccia utente della tua applicazione: realizzerai un progetto grafico e di comunicazione sul quale poi basare lo sviluppo vero e proprio.',
    immagineUrl: '/images/informatico/figma.png',
  },
  {
    title: 'TailWind CSS',
    description: 'Il framework CSS che permette di costruire qualsiasi design direttamente dal codice HTML.',
    immagineUrl: '/images/informatico/tailwind-css.jpeg',
  },
  {
    title: 'SQL',
    description: 'È il linguaggio usato per interrogare i database, per inserire nuovi dati e per fare ricerche tra di essi.',
    immagineUrl: '/images/informatico/sql.png',
  },
  {
    title: 'NodeJS',
    description: 'Permette di creare dei servizi superveloci, ai quali poi le applicazioni web o dai dispositivi mobili possono collegarsi per ricevere i dati da mostrare all\'utente.',
    immagineUrl: '/images/informatico/nodejs.png',
  },
  {
    title: 'MongoDB',
    description: 'Un esempio di database noSQL, che non memorizza i dati in forma di tabelle e righe come fanno i normali database, ma sotto forma di documenti complessi.',
    immagineUrl: '/images/informatico/mongodb.png',
  },
  {
    title: 'Ruby on Rails',
    description: 'È un framework che permette di creare rapidamente complesse applicazioni web full-stack, e cioè sia la parte lato server, sia quella visibile all\'utente.',
    immagineUrl: '/images/informatico/ruby-rails.png',
  },
  {
    title: 'Fotoritocco',
    description: 'Imparerai a scattare foto e a curarle nei dettagli, perché al centro di ogni buon sito ci sono sempre le immagini.',
    immagineUrl: '/images/informatico/fotoritocco.png',
  },
  {
    title: 'Droni',
    description: 'Con i tuoi compagni avrai a disposizione una squadriglia di quattro droni per scattare foto e girare clip video dall\'alto o comunque con inquadrature spettacolari.',
    immagineUrl: '/images/informatico/drone.png',
  },
]

let quarto_anno = [
  {
    title: 'React Native',
    description: 'Potrai mettere a frutto la conoscenza di ReactJS fatta negli anni precedenti per realizzare applicazioni native per iOS e Android. Sarai tu a sviluppare la prossima app virale negli store?',
    immagineUrl: '/images/informatico/react_native.png',
  },
  {
    title: 'Flutter',
    description: 'Flutter ti permette di creare splendide applicazioni multipiattaforma: Android, iOS, Windows, MacOS, Linux, web e dispositivi intelligenti di ogni tipo.',
    immagineUrl: '/images/informatico/flutter.webp',
  },
  {
    title: '.NET MAUI',
    description: 'Il framework di Microsoft per creare applicazioni multipiattaforma con C# e XAML ci darà la possibilità di mettere a confronto diverse tecnologie.',
    immagineUrl: '/images/informatico/maui.png',
  },
]

let ifts = [
  {
    title: 'JavaScript',
    description: 'Modulo di ripasso e allineamento per chi proviene da altri percorsi.',
    immagineUrl: '/images/informatico/javascript.png',
  },
  {
    title: 'React e NextJS',
    description: 'Modulo di ripasso e allineamento per chi proviene da altri percorsi.',
    immagineUrl: '/images/informatico/nextjs.png',
  },
  {
    title: 'Database relazionali',
    description: 'Modulo di ripasso e allineamento per chi proviene da altri percorsi.',
    immagineUrl: '/images/informatico/sql.png',
  },
  {
    title: 'TailWind CSS',
    description: 'Il framework CSS che permette di costruire qualsiasi design direttamente dal codice HTML.',
    immagineUrl: '/images/informatico/tailwind-css.jpeg',
  },
  {
    title: 'Figma',
    description: 'Progettazione della User Interface e della User Experience',
    immagineUrl: '/images/informatico/figma.png',
  },
  {
    title: 'Ruby on Rails',
    description: 'Costruzione di applicazioni web full-stack complete: strutturazione del backend (database, autenticazione, permessi...) e creazione dell\'interfaccia grafica visibile all\'utente nel frontend.',
    immagineUrl: '/images/informatico/ruby-rails.png',
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
  'https://images.squarespace-cdn.com/content/v1/5a9651691137a60b454560da/1520306528003-SNVBGH088XW7W7NM8F06/11340-oculus-logo-hero-vertical-447x362.png',
  'https://framerusercontent.com/images/LUfj3Wtf4rSkQ19ocMokPTaCJI.svg',
]
