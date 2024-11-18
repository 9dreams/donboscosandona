import { Container, Grid, Typography } from '@mui/material';
import React from 'react'
import {
  Attivita,
  Newsora,
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
        opacity={0.2}
        imageUrl='http://archive.inoratorio.it/img/column/585be6bf3bbdb4474aa65e4aad5dade5374fd527.jpg?1634152304'
        height='60'
      />
      <center>
       <Paragraph
      ><h1>PROGRAMMA E OBIETTIVI DELL’EMPORIO</h1>
        L’Emporio dell’Uniforme nasce come progetto finalizzato all’educazione al riuso dei capi di abbigliamento dell’uniforme e all’aiuto delle famiglie. 
        Sarà infatti un luogo in cui trovare l’usato quale valida alternativa al nuovo, poiché saranno presenti entrambe le proposte.<br></br>
        L’Emporio NON È una filiale della Cooperativa, né una rivendita.
        All’inizio di ogni anno verrà indicato il referente di ogni staff delegato alla raccolta dei capi usati e alla fruizione dell’Emporio da parte dei ragazzi.
        Le famiglie possono portare indumenti usati/inutilizzati dell’uniforme in qualsiasi momento.
        <br></br><br></br>
        <h1>REGOLE DI ACCETTAZIONE DEL MATERIALE</h1><br></br>
        Il capo usato dovrà essere in buono stato e non dovrà presentare nessun segno di usura.
        Il capo verrà accettato solo se lavato, stirato e libero da distintivi.
        Le camicie dovranno essere portate già con i distintivi scuciti (con cura); non verranno accettate camicie con segni di usura dei polsini e del colletto o con evidente sbiadimento del colore.

      </Paragraph>
      <Attivita>
      </Attivita>
      <h2>Branca lupetti</h2>
      <h1>Fare tutto "col gioco" ma niente "per gioco"</h1>
      <p>La branca Lupetti si rivolge ai bambini e alle bambine compresi tra i 9 e i 12 anni e si propone di far vivere loro pienamente la fanciullezza come ricchezza in sé e come fondamento di un’autentica vita adulta. Il metodo educativo ha lo scopo di aiutare a crescere il/la bambino/a seguendo i principi dell'impegno e della solidarietà, educando alla conoscenza e allo sviluppo del proprio corpo e delle proprie capacità manuali. Fu proposto per la prima volta nel 1916 dal fondatore del movimento Robert Baden-Powell, con la pubblicazione del Manuale dei lupetti, e nacque dopo il successo dello scautismo con l'intento di trasmettere anche ai bambini un'educazione retta e pragmatica attraverso strumenti semplici ma efficaci, come la condivisione di alcune regole basilari per una quieta e proficua convivenza nel gruppo.

Il metodo venne poi fortemente sviluppato da Vera Barclay, prima Akela d'Inghilterra, che ideò una vera e propria Legge del Branco e capì che un elemento fondamentale per la buona riuscita delle attività coi bambini doveva essere l'atmosfera respirata all'interno del gruppo. La giungla è l'atmosfera fantastica in cui vive il branco: è tratta da una riduzione del testo Il Libro della Giungla di Rudyard Kipling e rappresenta un elemento fondamentale in quanto, grazie ad essa, non solo si riesce ad andare incontro alla fantasia del lupetto, ma permette anche all'adulto educatore di riuscire ad entrare nel mondo del bambino, di farsi accettare e di proporre modelli da seguire. Nella vita del branco tutto è riferito ad essa, ad esempio, i capi sono detti Vecchi Lupi e vengono chiamati con i nomi dei personaggi positivi del libro, ad esempio Akela, Bagheera, Kaa, Fratel Bigio, Baloo...
La maggior parte delle attività proposte sono basate su una riduzione del libro; questa è una scelta mirata, effettuata tenendo conto dei molteplici aspetti formativi che permeano i racconti, che uniscono nella narrazione la struttura del romanzo di formazione, il confronto continuo con ostacoli e avversità, l'utilità della morale per tipi.
Essenzialmente, la vita di Branco è puro "gioco". Per un bambino il gioco è vita, è l'occupazione più importante come per un adulto lo è il lavoro. Insegnandogli a giocare bene, gli si insegna a "vivere bene". Così è opportuno che anche il significato di concetti importanti come la legge e la promessa siano introdotti tramite un gioco e non solamente spiegandoli a voce.
Nei movimenti o associazioni scout cattoliche hanno particolare rilievo le figure di San Francesco d'Assisi e Santa Chiara, santi patroni e guide spirituali dei lupetti.</p>

<h2>Branca  E/G</h2>
<h1>“Estote parati”</h1>
<p>La branca Esploratori e Guide si rivolge ai ragazzi ed alle ragazze di età compresa tra i 12 ed i 16 anni e si propone di favorire la realizzazione di una identità solida capace di entrare in relazione con gli altri.
I ragazzi e le ragazze si riuniscono in unità chiamate Reparto.
Gli esploratori costituiscono il nucleo originario dello scautismo, in quanto il primo campo scout della storia si tenne nell'agosto 1907 sull'isola fi Brownsea e vi parteciparono una ventina di adolescenti inglesi guidati da Robert Baden-Powell. L'anno successivo uscì il libro Scautismo per ragazzi, sul quale è basato il metodo di questa branca, poi opportunamente adattato ed attualizzato nel tempo.
Il punto di forza del metodo è vivere l'avventura, possibilmente all'aria aperta, in cui i ragazzi/e non solo si cimentano in prima persona in attività originali che difficilmente si ritrovano all'esterno dello scautismo, ma possono diventare essi stessi gli ideatori di queste attività, attraverso il sistema delle Squadriglie. Esse sono formate da 6-8 ragazzi/e guidati da uno di loro, detto capo Squadriglia, generalmente scelto tra chi ha più esperienza; ad esso è affiancato un vice capo. Tutti i componenti assumono uno o più incarichi e posti d'azione a seconda delle proprie capacità ed inclinazioni personali.
Le tecniche scout costituiscono un aspetto fondamentale della branca, poichè attraverso di esse si scoprono i propri limiti e si prova a superarli poco per volta. Inoltre contribuiscono ad accrescere le proprie capacità personali, sia fisiche che intellettuali, per essere utili a sé stessi e agli altri. Le tecniche si apprendono attraverso l'imparare facendo attuato col trapasso delle nozioni, in cui i ragazzi più grandi fanno vedere direttamente con la pratica ai più giovani. Alcune di esse sono: pionieristica, pronto soccorso, topografia, sherpa, trappeur, mani abili, animazione espressiva e giornalistica, …
Obiettivi finali dello scautismo in età esploratori/guide sono: lo spirito di gruppo, la responsabilità, l'autonomia, il corretto sviluppo fisico, la formazione del carattere, il senso civico, la ricerca della propria spiritualità.
Il santo patrono e guida spirituale della branca E/G nelle associazioni scout cattoliche è San Giorgio.</p>

<h2>Branca  R/S</h2>
<h1>“In piedi nei piedi il coraggio che ho, che mi porti lontano per sentire vicino, e metto i miei piedi nella vita che c’è, lì dove mi chiedi i miei piedi con Te”</h1>
<p>La Branca Rover/Scolte si rivolge ai giovani e alle giovani di età compresa tra i 16 ed i 20 anni e si propone di accompagnarli, nell’impegno dell’autoeducazione, verso una vita adulta caratterizzata da autonomia, maturazione della capacità di scegliere, responsabilità verso sè stessi e gli altri, disponibilità al servizio del prossimo. I giovani e le giovani si uniscono in comunità di rover e scolte, articolate in un primo momento chiamato Noviziato e in un secondo chiamato Clan. Il Noviziato è un periodo, generalmente di un anno, in cui un esploratore o una guida, terminato il suo cammino nel reparto, desidera entrare nella branca dei R/S. In questo periodo il Novizio approfondisce il differente modo di vivere lo scautismo in un'età in cui le scelte divengono fondamentali per la vita dell'adulto.
Il Clan è una comunità numerosa che sceglie di basarsi su autoeducazione e responsabilità, riconoscendo quindi nella Legge e nella Promessa le fondamenta sulle quali costruire il proprio percorso. È un luogo di confronto e condivisione in cui ci si impegna a dire le cose con sincerità e onestà, con sguardo curioso nei confronti della realtà che ci circonda.
Lo scopo del roverismo è di concorrere a formare uomini e donne capaci e responsabili che si inseriscano attivamente nella società, attuando il servizio nello spirito della promessa e della legge scout. Esistono due tipi di servizio: verso sé stessi, occupandosi dello sviluppo della propria dimensione spirituale, fisica e sociale, per diventare appunto un buon cittadino, e verso gli altri, dedicandosi ad aiutare il prossimo.
Il Capitolo è il modo con cui il Clan affronta i temi che vengono scelti dalla comunità di anno in anno; permette lo sviluppo della nostra consapevolezza nei confronti dell’attualità tramite esperienze di servizio, testimonianze, approfondimenti, …
Uno strumento fondamentale della branca è la Carta di Clan, la traccia sulla quale confrontare il proprio cammino attraverso Comunità, Fede, Servizio e Strada.
Il simbolo è la forcola, ovvero un legno a forma di Y che rappresenta la capacità di fare scelte importanti per la propria vita quando ci si trova di fronte ad un "bivio". Come si può vedere, la metafora della strada è presente in più aspetti del metodo.
L’obiettivo finale della branca è la Partenza,  dove il rover e la scolta si impegnano a realizzare lo spirito della legge, della promessa e della carta di Clan nella vita di tutti i giorni, avendo interiorizzato e fatto propri i valori dello scautismo.
San Paolo è guida spirituale e santo patrono della branca.</p>

<h2>COMUNITA' CAPI</h2>
<h1>“per sempre, meglio servire”</h1>
<p>I Capi sono donne e uomini che attuano la loro presenza di servizio nei modi propri dello scautismo. In quanto soci dell'Associazione, si dividono in "capi in formazione" e "capi con nomina". I primi sono adulti che svolgono un servizio e stanno compiendo il percorso formativo previsto dall'Associazione (che si articola in tre distinti campi di formazione: CFT, campo di formazione per tirocinanti; CFM, campo di formazione metodologica; CFA, campo di formazione associativa); i secondi sono adulti che hanno conseguito la "nomina a capo" al termine del loro percorso formativo.
I Capi svolgono un servizio che può essere rivolto direttamente ai ragazzi o realizzarsi in qualità di Formatore di capi adulti o di supporto alle strutture associative, a livello di gruppo, zona, regione o nazionale.
La comunità capi è formata da tutti i capi presenti nel Gruppo e ha lo scopo di elaborare e gestire il progetto educativo, approfondire i problemi educativi, curare la formazione permanente e il tirocinio dei capi, gestire l’inserimento e la presenza dell’Associazione sul territorio locale. La comunità capi, inoltre, esprime al proprio interno i due capi gruppo (legali rappresentanti del gruppo), affida gli incarichi di servizio nelle unità, redige e approva il bilancio di gruppo.
La comunità capi del gruppo scout San Donà 1 quest'anno (2022/2023) conta 25 membri.
Il ruolo del capo, soprattutto di colui/colei che ha un rapporto educativo diretto con i ragazzi, è molto importante e delicato, in quanto deve essere garante della corretta applicazione del metodo scout e curare lo sviluppo individuale dei ragazzi: un termine che riassume bene come dovrebbe comportarsi con loro è "fratello/sorella maggiore".
È dovere del capo, inoltre, seguire il proprio percorso di formazione ed aggiornamento metodologico organizzato dall'Associazione, partecipando agli eventi locali e nazionali e collaborando alla preparazione degli altri capi dello staff di cui fa parte.</p>
      <br></br>
      </center>
      <br></br>
      <Newsora>
      </Newsora>
      <br></br>
    </Layout>
    
    
  );
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
    title: 'CHI SIAMO',
    immagineUrl:
      'https://www.cesarelanza.com/wp/wp-content/uploads/2019/01/domanda-omino.jpg',
    url: '/informatico',
  },
  {
    title: 'STORIA',
    immagineUrl:
      'https://www.meteoweb.eu/wp-content/uploads/2017/01/STORIA.jpg',
    url: '/informatico',
  },
  {
    title: 'CONTATTI',
    immagineUrl:
      'https://static.vecteezy.com/ti/vettori-gratis/p1/3720498-icona-telefono-icona-telefono-simbolo-per-app-e-messenger-vettoriale.jpg',
    url: '/informatico',
  },
]
