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
  NewsCard,
  SwiperNews,
  Featured,
  NavBar,
  Logos,
  Sponsor,
  Elements,
} from '/components'
import { excludeTag } from '/lib/posts'

const slides = [
  {
    titolo: 'ADS',
    descrizione: 'Vieni a trovarci al Oratorio don Bosco - San Donà di Piave (VE)',
    immagine: '/images/ads/images/ads1.jpg',
    colore2: 'rgba(100,100,100,0)',
    buttonText: 'Scopri di più!',
  },
  
];
export default function Home({ data, elementi }) {
  return (
    <Layout>
      <Carousel
              slides={slides}
              height={100}
              animation="slide"
              interval={5000}
              duration={1000}
            />
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
   
        
        <div className='margin'>
          <h2 className="text-3xl font-bold text-center mt-12 mb-6">
            News
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {Newss.map((item) => (
              <NewsCard key={item.id} post={item} />
            ))}
          </div>
        </div>
        <div className='margin'>
        <div className="mt-12 space-y-4">
                <img src='/images/ads/cads4.jpg'/>
                <p>L’iniziatore degli Amici di Domenico Savio in Italia è un salesiano: Don Edi Pezzetta, il quale fondò l’Associazione nel 1954 a Torino Valdocco. L’intuizione però risale già al Beato Filippo Rinaldi terzo successore di Don Bosco. Negli stessi anni gruppi di ADS erano già presenti negli Stati Uniti, Inghilterra ed Irlanda.

L’appartenenza era strutturata attorno ad una promessa, che si può riassumere nel trinomio: Pietà - Purezza - Apostolato ed era ordinata da un regolamento approvato dal Consiglio Superiore della Congregazione Salesiana. C’era anche un giornalino di collegamento/animazione: Amici di San Domenico Savio, che raggiunse la tiratura di ben 29.000 copie. Nel 1967 il Centro nazionale ADS si trasferì da Torino Valdocco a Torino Leumann (coordinatore Don Zulian), poi a Peveragno di Cuneo (coordinatore Don Rosa), a Roma (coordinatore Don Clementel) ed a Catania (coordinatore Don Falzone). Anche il giornalino assunse diverse testate: Reazione a catena (1967- 1970), Radar ADS, Mondo Erre / Speciale ADS (1973-1981).

Il 5 maggio 1979 (50 della canonizzazione di San Domenico Savio), 30.000 ragazzi/e si incontrarono a Roma con Giovanni Paolo II.

Dal 1981 l’Associazione, per una decina d’anni, continuò una discreta attività soprattutto a livello locale, ma con un debole coordinamento nazionale. Dal luglio 1992 la Presidenza degli Ispettori Salesiani d’Italia (CISI) affidò il coordinamento nazionale degli ADS ad un confratello incaricato, associandolo all’Ufficio Orientamento/Vocazioni.

Dal 2003 si è avvertito nel Triveneto Salesiano la necessità di confrontarsi tra i diversi gruppi per tentare di strutturare un itinerario formativo recuperando la grossa esperienza accumulata in tante opere salesiane. Dopo i primi incontri di confronto assieme anche agli animatori, si è avvertita la necessità di attuare una vera e propria riflessione sulla identità e la struttura degli ADS cercando di mettere a confronto le varie esperienze e di raccoglierne gli elementi comuni.

Si decise di partire prima di tutto con un momento celebrativo forte recandosi a Torino per una tre giorni di formazione ma soprattutto per il solenne affidamento degli ADS alla Beata Vergine Immacolata e Aiuto dei cristiani nella chiesa di San Francesco di Sales in Valdocco.

Al ritorno un gruppetto di incaricati dell’oratorio si è messo al lavoro per la rielaborazione del materiale raccolto. Al termine ne uscì:<br/>

a) una serie di punti fermi del cammino ADS;<br/>

b) una griglia di riferimento della struttura;<br/>

c) una bozza del metodo e degli elementi metodologici a partire dalla nostra identità;<br/>

d) un piccolo regolamento.<br/>

È stato quindi chiesto ad una équipe (composta sia da Salesiani che da Figlie di Maria Ausiliatrice) di rivedere il materiale elaborato in questi anni e di stendere un progetto omogeneo e unitario. Il lavoro si è articolato in diversi momenti:

a) definizione dell’obiettivo educativo pastorale a cui tendere attraverso la partecipazione ai gruppi ADS;<br/>

b) ricerca dei fondamenti a livello storico (vita di Domenico Savio e fondazione della Compagnia dell’Immacolata) e teologico;<br/>

c) rivisitazione del progetto con chiarificazione del progetto sulla base della ricerca svolta.</p>
                <br></br>
              </div>
        </div>
        <div className='margin'>
        <div className="mt-12 space-y-4">
                <img src='/images/ads/cads3.jpg'/>
                <p>CARDINI DELL’ITINERARIO FORMATIVO ADS

a) Pietà: Eucarestia domenicale e feriale; Adorazione; Parola di Dio; rosario; 3 Ave Maria; esame di coscienza al termine della giornata; preghiera personale ed unione con Dio (giaculatorie); consacrazione a Maria;

b) Apostolato/Evangelizzazione: «Guadagnare anime a Dio», entusiasmo e gusto di incontrare chiunque per condividere la gioia di una umanità più grande. Dimensioni:

- Caritativa;

- Missionaria;

- Culturale (mentalità e giudizio cristiano);

- liturgica;

- oratoriana (animazione diretta con i ragazzi);

- Presenza ed inserimento negli ambienti: famiglia, scuola, oratorio, parrocchia (catechismo e altre esigenze), mondo giovanile e sue espressioni, ambiente lavorativo e società civile;

c) Purezza: personalizzazione del cammino di amore verso Dio e verso i fratelli: impegno personale, colloquio, schiettezza, tensione verso la limpidezza nelle relazioni affettive.</p>
                <br></br>
              </div>
        </div>
        <div className='margin'>
        <div className="mt-12 space-y-4">
                <img src='/images/ads/cads2.jpg'/>
                <p>

                NUCLEI TEMATICI<br></br>

a) L’Associazione ADS si propone, nell’insieme delle proposte dell’Opera Salesiana, come esperienza di vita cristiana secondo la spiritualità di Don Bosco;

b) Ha la sua origine dalla Compagnia dell’Immacolata fondata da S. Domenico Savio a Valdocco. La sua santità è modello ispiratore della vita dell’associazione e di ciascuno dei suoi membri. Un cammino, quindi, che attraverso Maria conduce a Gesù, facilitandone l’incontro, perché l’umano che è in noi sia pieno e profondo;

c) La vita di Domenico Savio è stata contrassegnata da risoluzioni precise

- nella pietà (incontro e dialogo con il Signore)

- nell’apostolato-evangelizzazione (dimensione di servizio) 

- nella purezza

Connotata da una particolare appartenenza all’ambiente salesiano e all’animazione dello stesso;

d) L’associazione offre a tutti un cammino basato sull’incontro tra il primato della grazia di Dio e l’impegno personale, tenendo conto delle possibilità umane proprie di ogni età;

e) L’appartenenza all’associazione è confermata da una promessa pubblica che ogni ADS, dopo un congruo cammino, emette insieme ai suoi amici e animatori. L’appartenenza è resa visibile da un «Fazzolettone» che cambia il colore per ogni fascia di età.</p>
                <br></br>
              </div>
        </div>
        
        <div className='margin'>
        <div className="mt-12 space-y-4">
                <img src='images/ads/ads5.jpg'/>
                <p>Itinerario di 3 anni: dalla 3a alla 5a elementare.

Obiettivi

a) crescere nella capacità di fare gruppo e nell’appartenenza all’associazione ADS; b) conoscere le figure di Domenico Savio e Don Bosco;
c) inserirsi nella vita dell’oratorio;
d) vivere l’amicizia con Gesù nel quotidiano;
e) vivere la preghiera, in particolare curare la confidenza in Maria Ausiliatrice; f) coinvolgere i genitori dei bambini e inserirli nella vita dell’oratorio.

Esperienze

a) incontro settimanale; b) ritiro nei tempi forti; c) campo scuola.

Fonti

a) brani biblici da sottolineare maggiormente:

- si consiglia di utilizzare le parabole, in particolare quella del Seminatore, Il tesoro nel campo, I talenti, Il buon Samaritano;

- si consiglia di evidenziare maggiormente alcune figure bibliche mettendo in risalto la loro vocazione nell’età giovanile: Samuele, Davide, Daniele, Gedeone...

b) testi classici di Spiritualità Salesiana - Minot;

- La vita di san Domenico Savio scritta da Don Bosco; - Domenico Savio visto da vicino;

- Memorie dell’Oratorio;
- Biografia di san Domenico Savio scritta da Sicari; - Don Bosco, una biografia nuova di Teresio Bosco.

Modalità di incontro:

a) liturgia
- educare gradualmente alla preghiera e ai momenti liturgici;
- preghiera di gruppo: le preghiere del buon cristiano, partendo dal segno di croce; -inoltre le «tre Ave Maria», la preghiera per il Papa, l’Angelus;
- partecipazione alla S. Messa domenicale (in alcune occasioni la S. Messa di gruppo);
- momenti di preghiera personale o in gruppo (visita, adorazione, rosario semplificato); - Proporre la Confessione regolare.

b) gioco: favorire la partecipazione ai giochi salesiani e ai giochi di gruppo; c) momento Formativo:

- scegliere periodicamente un’ambientazione legandola ai contenuti da comunicare;

- uso del gioco e della manualità;

- abituare ad alcuni servizi di gruppo;

- operazione target (=prendere un impegno concreto da verificare con un animatore) per gruppetti;

- coinvolgimento dei genitori nelle varie proposte;
</p>
<br></br>
              </div>
        </div>

        <div className='margin'>
        <div className="mt-12 space-y-4">
                <img src='/images/ads/ads4.jpg'/>
                <p>Itinerario di 3 anni: dalla 1 alla 3 media.

Obiettivi

a) crescere nella capacità di fare gruppo e nell’appartenenza all’associazione ADS;

b) conoscere le figure di Domenico Savio e Don Bosco;

c) appartenere attivamente, attraverso piccoli servizi, alla vita dell’oratorio;

d) crescere nella conoscenza di sé attraverso un cammino di formazione umano (in particolare affettiva, nuovi linguaggi) e cristiana (cfr. onesti cittadini e buoni cristiani);

e) vivere l’amicizia con Gesù nel quotidiano e la confidenza in Maria Immacolata Ausiliatrice;

f) coinvolgere i genitori dei ragazzi proponendo loro degli incontri insieme; dare ruoli di corresponsabilità ai genitori più sensibili;

g) sostenere i ragazzi (soprattutto di terza media) nel delicato momento del passaggio dalla preadolescenza e all’adolescenza;

h) Crescere nella testimonianza della fede, superando la vergogna e la «presa in giro»; i) valorizzare l’apertura e la potenzialità vocazionale di questo periodo.

Esperienze

a) incontro settimanale;
b) ritiro nei tempi forti;
c) campo scuola;
d) incontri tra genitori e ragazzi; e) esperienze di servizio;

f) visita ai luoghi di Don Bosco;
g) proposta delle esperienze ispettoriali (in particolare Gruppo Leader con invito personale).

Fonti

a) brani biblici da sottolineare maggiormente
- valorizzare la vite e i tralci; i due figli («sì» e «no»);

- evidenziare alcune figure bibliche mettendo in risalto la loro vocazione nell’età giovanile: la chiamata dei discepoli.

b) testi classici di Spiritualità Salesiana
- La vita di san Domenico Savio scritta da Don Bosco; - Biografia di san Domenico Savio scritta da Sicari;
- Domenico Savio visto da vicino;
- Memorie dell’Oratorio;
- Don Bosco, una biografia nuova di Teresio Bosco;
- I sogni di Don Bosco;
- La vita di Michele Magone;
- La vita di Laura Vicuña;
- La vita di Francesco Besucco;

c) testimonianze attuali di vite cristiane giovanili.

Modalità di incontro

a) liturgia

- preghiera di gruppo: le preghiere del buon cristiano, partendo dal segno di croce... utilizzo della parola di Dio; motivazione e sostegno della preghiera personale;

- partecipazione alla S. Messa domenicale (in alcune occasioni la S. messa di gruppo);

- momenti di adorazione, anche su iniziativa personale; - proporre la Confessione regolare;
- introdurre la preghiera del Rosario.

b) gioco: favorire il coinvolgimento attivo ai giochi salesiani e ai giochi di gruppo; c) formazione:

- uso del gioco e della manualità;

- abituare ad alcuni servizi di gruppo;

- operazione target (prendere un impegno concreto da verificare con un animatore) per gruppetti;

- angelo custode, amico segreto;

- coinvolgere i ragazzi più sensibili a livello religioso a formare un nucleo trainante finalizzato alla preghiera e al sostegno della fede dei coetanei;

- coinvolgimento dei genitori nelle varie proposte;

- proporre brevi e semplici esperienze comunitarie;

- proposte specifiche per le terze medie tenendo presente la differenza che c’è tra ragazzi e ragazze;

- prevedere un itinerario all’affettività.</p>
                <br></br>
              </div>
        </div>

        <div className='margin'>
        <div className="mt-12 space-y-4">
                <img src='/images/ads/ads3.jpg'/>
                <p>Itinerario di 5 anni: dalla 1a alla 5a superiore. (sarebbe opportuno distinguere tra biennio e triennio)

Obiettivi

a) diventare adulti nella fede crescendo nella capacità di integrazione tra fede e vita e nella capacità di dare ragione della propria fede attraverso un approfondimento teologico della fede, dei suoi nuclei principali e del magistero della Chiesa;

b) maturare nella capacità di assumere il servizio come stile di vita sia in oratorio che sul proprio territorio e ambiente di vita;

c) maturare scelte libere di partecipazione all’Eucarestia e alla Riconciliazione, all’Adorazione, al rosario...;

d) crescere nella capacità di saper leggere i segni di Dio della propria vita avviando così un cammino vocazionale;

e) scegliere di testimoniare Gesù nello stile della Compagnia dell’immacolata (triennio);

f) maturare nella capacità di vivere le relazioni sia a livello personale che con il gruppo all’interno di uno stile cristiano di vita quotidiana riguardo gli affetti, il divertimento, gli spettacoli etc. (biennio);

g) conoscere la Spiritualità Giovanile Salesiana.

Esperienze

a) incontro settimanale

b) Ritiro nei tempi forti;

c) campo scuola (invernale e/o estivo);

d) esperienze di servizio sia in oratorio: animazione in cortile (biennio); corresponsabilità in oratorio (triennio). Prevedere esperienze di servizio anche nel territorio, fuori dall’oratorio.

e) esperienze di vita comunitaria (nei tempi forti, in estate etc.); f) proposta personale ai cammini vocazionali ispettoriali;

g) esperienze di apertura alla via ecclesiale della propria collaborazione pastorale, vicariato o diocesi.

Fonti

a) Sacra Scrittura:

- Giovane ricco, Beatitudini, Giudizio universale, Passione Morte e risurrezione, Invettive contro i farisei, Brani escatologici, Gesù unico salvatore, I due figli etc;

- Figura di Davide e di Mosè;
- Genesi (l’origine del male);
- Lettera agli Efesini, ai Corinzi e Timoteo.

b) scritti salesiani

c) altri testi

- Approfondimento sistematico delle memorie dell’oratorio e delle 3 biografie scritte da Don Bosco;

- Lettera dell’ottantaquattro;
- Lettere e scritti di san Francesco di Sales; - I sogni di Don Bosco;
- Il sistema preventivo.

- Vite dei santi;

- Catechismo della Chiesa Cattolica.

Modalità di incontro

a) liturgia:
- la preghiera con la liturgia delle ore;
- partecipazione alla S. Messa domenicale;
- momenti di adorazione, anche su iniziativa personale; - proporre la Confessione regolare;

- introdurre la preghiera del Rosario.
b) gioco: favorire il coinvolgimento attivo ai giochi salesiani e ai giochi di gruppo; c) formazione:

- incontro diretto con possibilità di prendere appunti; - riflessione personale sui contenuti;
- raggio sistematico;
- testimonianze e incontri significativi;

- silenzio;

- accompagnamento personale: progressione personale (biennio); direzione spirituale (triennio);

- accompagnare l’apostolato in mezzo ai ragazzi;</p>
                <br></br>
              </div>
        </div>

        <div className='margin'>
        <div className="mt-12 space-y-4">
                <img src='images/ads/ads2.jpg'/>
                <p>La Comunità Animatori (fino ai 25 anni) è guidata da un responsabile Salesiano o una Figlia di Maria Ausiliatrice, insieme ad un adulto (oltre 25 anni) cresciuto nell’associazione, che abbia maturato scelte vocazionali stabili.

Obiettivi

Approfondimento dei cardini della vita cristiana dal punto di vista teologico, filosofico, dottrinale, biblico

Esperienze

Convegno Salesiano di Pastorale Giovanile, Ritiro ispettoriale di inizio anno, Festa dei Giovani, Veglia Vocazionale

Fonti

(in via di definizione) a) Spiritualità Salesiana

- Vita di Domenico Savio;
- Vita di Michele Magone;
- Vita di Francesco Besucco;
- Lettera da Roma (1884);
- Giovane provveduto;
- Maraviglie della Madre di Dio; - Filotea;

b) spiritualità

- Memorie dell’Oratorio; - I sogni di Don Bosco;
- Il Sistema Preventivo.

- Le virtù (Guardini);
- L’apparecchio alla buona morte (sant’Alfonso Maria de Liguori); - Gesù di Nazareth I e II (Benedetto XVI);
- La vera devozione a Maria (Monfort).

Modalità di incontro

a) liturgia (cf NF);
b) formazione;
c) annuncio;
d) confronto con il responsabile; e) vite dei santi;

f) contatto con la Comunità Salesiana locale;
g) momenti con altre Comunità Animatori;
h) partecipazione alla vita diocesana e parrocchiale; i) adorazione mensile;
j) messa infrasettimanale e rosario.

Altri punti indicati

a) insistere sul quaderno personale
b) formazione seria che dia riferimenti di testi e letture e) formazione sui tempi liturgici</p>
                <br></br>
              </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  let res = await fetch(
    'https://channels.donboscosandona.it/api/posts/inoratorio'
  )
  const data = excludeTag(await res.json(), 'screen')

  res = await fetch(
    'https://channels.donboscosandona.it/api/posts/donboscosandona_elements'
  )
  const elementi = await res.json()

  return {
    props: { data, elementi },
    revalidate: 1800,
  }
}

let Newss= [
  {
    id: 1,
    titolo: '8-9-10 dicembre 2023 - Ritiro GR',
    immagine: 'http://archive.inoratorio.it/img/column/ae16a4e059de6c4da6b8efcd34aad8a1e20bded9.jpg?1702725164',
    abstract: 'Il Gruppo Responsabili dell’ADS ha vissuto un ritiro d’Avvento dal 8 al 10 dicembre a Gorizia, dedicandosi a temi educativi e alla preparazione al Natale, con la celebrazione di nuovi membri. Un momento di fraternità, riflessione e condivisione, arricchito da giochi e canti. Buon Natale a tutti!.',
  },
  {
    id: 2,
    titolo: '8 dicembre 2023 - Promesse NF1-GR',
    immagine: 'http://archive.inoratorio.it/img/column/01db6c1b0cdff578f1d528b6db4a2448aa6a3977.jpg?1702584997',
    abstract: 'L\'8 dicembre, i ragazzi NF1 hanno cambiato foulard, segnando un importante passo nel loro percorso ADS. Hanno condiviso emozioni e obiettivi, esprimendo la loro dedizione e il desiderio di crescere insieme nel gruppo.'
},

  {
    id: 3,
    titolo: '2-3 dicembre 2023 - Ritiro NF 3-4-5',
    immagine: 'http://archive.inoratorio.it/img/column/a8e9fe48d7da85cc5e32da8c0631e68924b40c72.jpg?1702307246',
     abstract: 'Il 2 e 3 dicembre, il ritiro NF ha esplorato il tema “l’uomo vivo”, stimolando riflessioni profonde attraverso letture e giochi, creando legami e momenti indimenticabili tra i partecipanti.'
  },
  {
    id: 4,
    titolo: '11-12 novembre - Ritiro GeN1-2-3 a Duna Verde',
    immagine: 'http://archive.inoratorio.it/img/column/7ee9ab8a2d8d97f801410dbfa1cbc92890260932.jpg?1701271390',
    abstract: 'Dedichiamo a Bepi questa foto di lui felice con i ragazzi. La sua dedizione e preghiera sono state un dono prezioso per noi. Visite e funerali si svolgeranno all’Oratorio Don Bosco dal 26 al 29 aprile.'
    
  },
   {
    id: 5,
    titolo: '18 novembre 2023 - Colletta alimentare',
    immagine: 'http://archive.inoratorio.it/img/column/22ddc382ee7db3d3b24a38f6ba5f93192b68c175.jpg?1700744925',
    abstract: 'Il 18 novembre 2023, i ragazzi del Gen 3 dell’ADS hanno partecipato alla colletta alimentare per aiutare i più bisognosi, sensibilizzando la comunità sulla povertà e l’impegno sociale.'
   },
  {
    id: 6,
    titolo: 'Festa di Apertura ADS 2023-2024',
    immagine: 'http://archive.inoratorio.it/img/column/973fe9bf9c38fd73a9465ba54f4649582aeec803.jpg?1697467578',
    abstract: 'Vi invitiamo alla FESTA DI APERTURA dell’anno ADS il 22 ottobre! Iscrivetevi qui: https://forms.gle/z82GN4QExXRypL4k7. Contributo di 2 Euro a persona.'
  },
];
