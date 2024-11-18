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
  NewsCard,
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
      <img src='http://archive.inoratorio.it/img/column/fb2ff0298dbd69ce6c294d5a7206b3fd72cd5e0f.jpg?1544451475'/>
      <Container>
        <div className='margin'>
          <Typography variant="h4" gutterBottom align="center" sx={{ marginTop: 5 }}>
            Progetti
          </Typography>
          <Grid container spacing={5} justifyContent="center">
            {servizi.map((servizio) => (
              <Grid item xs={12} sm={6} md={3} key={servizio.id}>
                <NewsCard post={servizio} />
              </Grid>
            ))}
          </Grid>
        </div>
        
        <div className='margin'>
          <Typography variant="h4" gutterBottom align="center" sx={{ marginTop: 5 }}>
            News
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {Newss.map((Newss) => (
              <Grid item xs={12} sm={6} md={4} key={Newss.id}>
                <NewsCard post={Newss} />
              </Grid>
            ))}
          </Grid>
        </div>

        <div className='margin'>
        <Typography variant="h4" gutterBottom align="center" sx={{ marginTop: 5 }}>
            
          </Typography>
          <Grid container spacing={4} justifyContent="center">
                <img src='http://archive.inoratorio.it/img/column/164c3888d366ea8ea64345b3c53197baa3e7f98a.jpg?1545142666'/>
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
              </Grid>
        </div>

        <div className='margin'>
        <Typography variant="h4" gutterBottom align="center" sx={{ marginTop: 5 }}>
            
          </Typography>
          <Grid container spacing={4} justifyContent="center">
                <img src='http://archive.inoratorio.it/img/column/5c5f95983bb79d204f5686510b31f06d19a09400.jpg?1539364408'/>
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
              </Grid>
        </div>

        <div className='margin'>
        <Typography variant="h4" gutterBottom align="center" sx={{ marginTop: 5 }}>
            
          </Typography>
          <Grid container spacing={4} justifyContent="center">
                <img src='http://archive.inoratorio.it/img/column/a2fa7898046913cc13c88e0c8425412210688b7d.jpg?1539364806'/>
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
              </Grid>
        </div>

        <div className='margin'>
        <Typography variant="h4" gutterBottom align="center" sx={{ marginTop: 5 }}>
            
          </Typography>
          <Grid container spacing={4} justifyContent="center">
                <img src='http://archive.inoratorio.it/img/column/adcd094c0e85e1aca4dec862d4ae4dbb8d762600.jpg?1539365037'/>
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
              </Grid>
        </div>
      </Container>
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
    revalidate: 1800,
  }
}

const servizi = [
  {
    id: 1,
    titolo: 'Cenni Storici',
    immagine: 'http://archive.inoratorio.it/img/column/288da623b7f399084c590bcccd2754e61779bdfe.jpg?1539359427',
    abstract: 'Fondata nel 1954 da Don Edi Pezzetta a Torino, l\'ADS promuove Pietà, Purezza e Apostolato. Negli anni, ha evoluto la sua missione con un focus sulla formazione e sull\'identità dei gruppi.',
    
  },
  {
    id: 2,
    titolo: 'Cardini Itinerario',
    immagine: 'http://archive.inoratorio.it/img/column/d6a020536086ed52c9c29374ff2d9df26af9a119.jpg?1539359532',
    abstract: 'L\'itinerario ADS si fonda su Pietà (preghiera e Eucarestia), Apostolato (carità e evangelizzazione) e Purezza (relazioni limpide e amore verso Dio e gli altri).',
},
{
  id: 3,
  titolo: 'Nuclei Tematici',
  immagine: 'http://archive.inoratorio.it/img/column/cfab6bf6737c75191d07115db7bc53a9736d2790.jpg?1539359601',
  abstract: 'L\'Associazione ADS vive la spiritualità di Don Bosco, ispirata da S. Domenico Savio. Promuove incontri con Dio, servizio e purezza, con una promessa pubblica e simboli distintivi per ogni età.',
},
{
  id: 4,
  titolo: 'Calendario',
  immagine: 'http://archive.inoratorio.it/img/column/2ec78bce9310040f9985bfe68da3a03b55495755.jpg?1541492190',
  abstract: 'Orari indicativi per il 4 novembre 2024: KB (3^ - 5^ elem.),GeN (1^ - 3^ medie),NF (1^ - 5^ sup.),GR (universitari),GrS (riunioni),Gruppo Leader (3^ media),G.O. (biennio sup.),GxG (triennio sup.),GrRic (dalla 5^ sup.).',
}

];



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
