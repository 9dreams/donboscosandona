import { buttonClasses, Container, Grid, Typography } from "@mui/material";
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
} from "/components";
import { images } from "@/next.config";
import { Description } from "@mui/icons-material";

export default function Home({ data, elementi }) {
  return (
    <Layout>
      <Carousel slides={slides} maxWidth={false} />
      <div class="container mx-auto p-4">
    <div class="flex flex-col md:flex-row items-center">
      <div class="w-full md:w-1/1 p-4">
      <center>
        <h2 class="text-blue-600 text-lg mb-2">
          Soggiorno Marino Don Bosco
        </h2>
        <h1 class="text-3xl font-bold mb-4">
        Tra verde e azzurro
        </h1>
        <hr class="border-t-2 border-blue-600 mb-4"/>
        <p class="text-gray-700 mb-4">
          Entrando nella nostra struttura fronte mare sarete accolti dallo
          Staff in un’atmosfera familiare che vi farà sentire subito i
          benvenuti: con le nostre offerte ci impegniamo a regalarvi giornate
          indimenticabili di sole e di mare e un’esperienza rilassante per una
          vacanza all’insegna del relax. Al vostro risveglio sarete accolti
          dai profumi provenienti dalla nostra cucina: la colazione prevede,
          infatti, un ricchissimo buffet che spazia dai cibi dietetici alle
          proposte più golose. Il nostro chef saprà deliziarvi con portate
          gustose che vi faranno riscoprire il piacere di sentirvi accolti e
          di essere serviti.
        </p>
        <a class="text-blue-600 font-bold hover:text-blue-800 transition-colors" href="#">
          SCOPRI LA STRUTTURA &gt;
        </a>
        </center>
        </div>
      <div class="w-full md:w-1/2 p-4">
        <img alt=""
          class="w-full h-auto"
          src="https://storage.googleapis.com/a1aa/image/okSYmShYedpIfKUqf5fAawXNYU4geZnL7ekv0OVRWMM.jpg"
          height="400"
          width="600"
        />
      </div>
      
    </div>
  </div>
      <Products
        title="I nostri servizi"
        cardWidth={6}
        cardWidthXs={12}
        products={prodotti}
      />

    
<div class="container mx-auto p-4">
    <div class="flex flex-col md:flex-row items-center">
      <div class="w-full md:w-1/2 p-4">
      <center>
        <h2 class="text-blue-600 text-lg mb-2">
          Soggiorno Marino Don Bosco
        </h2>
        <h1 class="text-3xl font-bold mb-4">
          La nostra esperienza di villeggiatura
        </h1>
        <hr class="border-t-2 border-blue-600 mb-4"/>
        <p class="text-gray-700 mb-4">
          Entrando nella nostra struttura fronte mare sarete accolti dallo
          Staff in un’atmosfera familiare che vi farà sentire subito i
          benvenuti: con le nostre offerte ci impegniamo a regalarvi giornate
          indimenticabili di sole e di mare e un’esperienza rilassante per una
          vacanza all’insegna del relax. Al vostro risveglio sarete accolti
          dai profumi provenienti dalla nostra cucina: la colazione prevede,
          infatti, un ricchissimo buffet che spazia dai cibi dietetici alle
          proposte più golose. Il nostro chef saprà deliziarvi con portate
          gustose che vi faranno riscoprire il piacere di sentirvi accolti e
          di essere serviti.
        </p>
        <a class="text-blue-600 font-bold hover:text-blue-800 transition-colors" href="#">
          SCOPRI LA STRUTTURA &gt;
        </a>
        </center>
      </div>
      <div class="w-full md:w-1/2 p-4">
        <img alt="Beach with red and white striped umbrellas and chairs"
          class="w-full h-auto"
          src="/images/imgomb.png"
          height="400"
          width="600"
        />
      </div>
      
    </div>
  </div>


<div class="container mx-auto p-4 md:p-8">
    <div class="flex flex-col md:flex-row items-center">
      <div class="w-full md:w-1/2 p-4">
        <img alt="Beach with red and white striped umbrellas and chairs"
          class="w-full h-auto max-w-full"
          height="400"
          src="/images/melone.png"
          width="600"
        />
      </div>
<div class="w-full md:w-1/2 p-4">
<center>
        <h2 class="text-blue-600 text-lg mb-2">
          Soggiorno Marino Don Bosco
        </h2>
        <h1 class="text-3xl font-bold mb-4">
          La nostra esperienza di villeggiatura
        </h1>
        <hr class="border-t-2 border-blue-600 mb-4"/>
        <p class="text-gray-700 mb-4">
          Entrando nella nostra struttura fronte mare sarete accolti dallo
          Staff in un’atmosfera familiare che vi farà sentire subito i
          benvenuti: con le nostre offerte ci impegniamo a regalarvi giornate
          indimenticabili di sole e di mare e un’esperienza rilassante per una
          vacanza all’insegna del relax. Al vostro risveglio sarete accolti
          dai profumi provenienti dalla nostra cucina: la colazione prevede,
          infatti, un ricchissimo buffet che spazia dai cibi dietetici alle
          proposte più golose. Il nostro chef saprà deliziarvi con portate
          gustose che vi faranno riscoprire il piacere di sentirvi accolti e
          di essere serviti.
        </p>
        <a class="text-blue-600 font-bold hover:text-blue-800 transition-colors" href="">
          SCOPRI LA STRUTTURA &gt;
        </a>
        </center>
      </div>
      </div>
      </div>

      <Products
        cardWidth={6}
        cardWidthXs={12}
        products={prodotti2}
        style={{ textAlign: "left", paddingBottom: "2rem" }}
        component="h2"
        variant="h4"
        color="inherit"
        gutterBottom
      />
      <Products cardWidth={6} cardWidthXs={12} products={prodotti3} title='I LUOGHI DA VISITARE' />
      <Products cardWidth={4} cardWidthXs={6} products={prodotti4} />
      <Team
        title="I servizi a disposizione"
        description="Formatori che ti aiutano a crescere con il cuore di don Bosco"
        members={members}
        cardWidth={3}
      />
      <div class="container mx-auto p-2">
    <div class="flex flex-col md:flex-row items-center">
      <div class="w-full md:w-1/2 p-4">
      <center>
        <h1 class="text-5xl font-bold mb-4">
        Contatti
        </h1>
       
        <h1 class="text-gray-800 font-bold text-2xl mb-6">
   
SOGGIORNO MARINO DON BOSCO<br></br><br></br>
Tel. +39 0421 299 158<br></br><br></br>
info@soggiornodonbosco.it<br></br><br></br>
via Selva Rosata, 81<br></br><br></br>
30021 Caorle - Venezia
        </h1>
        <a class="text--600 font-bold hover:text--800 transition-colors" href="#">
        Seguici su Facebook
        </a>
        <br></br>
        <a class="text--600 font-bold hover:text--800 transition-colors" href="#">
        Seguici su Instagram
        </a>
        </center>
      </div>
      <Maps
        maxWidth="100%"
        maxHeight="550px"
        url='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2793.502961533332!2d12.78848457670082!3d45.56032337107574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477bfa012626aba9%3A0xc17f19394464ca38!2sSoggiorno%20Marino%20Don%20Bosco!5e0!3m2!1sit!2sit!4v1742978889848!5m2!1sit!2sit" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
      />
    </div>
  </div>
      <br></br>
      <br></br>
    </Layout>
  );
}

export async function getStaticProps() {
  let res = await fetch(
    "https://channels.donboscosandona.it/api/posts/inoratorio"
  );
  const data = await res.json();

  res = await fetch(
    "https://channels.donboscosandona.it/api/posts/donboscosandona_elements"
  );
  const elementi = await res.json();

  return {
    props: { data, elementi },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 minutes
    revalidate: 1800, // In secondi: il build viene fatto al massimo una volta ogni mezzora
  };
}
// slides per il carousel
let slides = [
  {
    immagine: "/images/carosu2.png",
  },
  {
    immagine: "/images/caro3.png",
  },
  { immagine: "/images/caro4.png" },
  {
    immagine: "/images/caro5.png",
  },
  { immagine: "/images/caro6.png" },
  {
    immagine: "/images/caro7.png",
  },
];
let slides2 = [
  {
    immagine: "/images/imgomb.png",
  },
];
let slides3 = [
  {immagine: "/images/cibo1.png",
  },
  {immagine: "/images/",
immagine: "/images/carro3.png",
  },
];

// Il nostro team
let members = [
  {
    name: "Spiaggia privata",
    description:
      "Una spiaggia riservata agli ospiti del soggiorno garantisce la tranquillità di cui la tua famiglia ha bisogno.",
    imageUrl: "/images/log1.png",
  },
  {
    name: "Ombrelloni e sdraio",
    description:
      "Ogni camera ha in dotazione un ombrellone con sdraio e lettino.",
    imageUrl: "/images/log2.png",
  },
  {
    name: "Guardiaspiaggia",
    description1:
      "Nel periodo estivo la balneazione è sorvegliata in determinati orari.",
    imageUrl: "/images/log3.png",
  },
  {
    name: "Ascensore",
    description1:
      "I piani superiori sono raggiungibili da tutti grazie a un comodo ascensore",
    imageUrl: "/images/log4.png",
  },
  {
    name: "Aria condizionata",
    description1:
      "Il relax in camera è garantito da un moderno impianto di condizionamento.",
    imageUrl: "/images/log5.png",
  },
  {
    name: "Bagno interno",
    description1:
      "Tutte le camere sono dotate di servizi igienici riservati e asciugacapelli.",
    imageUrl: "/images/log6.png",
  },
  {
    name: "Free Wifi",
    description1:
      "La navigazione dai tuoi dispositivi mobili è garantita da una moderna connessione in fibra ottica.",
    imageUrl: "/images/log7.png",
  },
  {
    name: "Capella",
    description1:
      "Il Soggiorno è dotato di una cappella per chi desidera coltivare il suo rapporto con il Signore. Nel periodo estivo un sacerdote garantisce la Santa Messa quotidiana.",
    imageUrl: "/images/log8.png",
  },
  {
    name: "bar",
    description:
      "Nella comoda hall del Soggiorno è sempre a disposizione un servizio bar.",
    imageUrl: "/images/log9.png",
  },
  {
    name: "Sala conferenze",
    description:
      "I gruppi che prenotano la casa possono usufruire della sala conferenze per i loro momenti di studio.",
    imageUrl: "/images/log10.png",
  },
  {
    name: "Parcheggio privato",
    description1:
      "All'interno dell'area recintata del Soggiorno un comodo parcheggio privato è riservato agli ospiti.",
    imageUrl: "/images/log11.png",
  },
  {
    name: "Bandiera Blu",
    description1:
      "La Bandiera Blu è sinonimo di acque pulite, di spiagge ben curate, di attenzione per le esigenze ambientali e di sensibilizzazione verso le tematiche ecologiche.",
    imageUrl: "/images/log12.png",
  },
];

let prodotti = [
  {
    title: "Servizio all-inclusive",
    description:
      "Il nostro servizio di ospitalità classica, della durata di una settimana, da sabato a sabato...",
    immagineUrl: "/images/marespiagge.png",
  },
  {
    title: "Bed & Breakfast",
    description:
      "Per tutti gli amanti delle gite fuori porta, la nostra formula che offre un soggiorno con camera e prima colazione a partire da 31 € a persona...",
    immagineUrl:
      "https://www.forniturealberghiereonline.it/images/prima-colazione-bb-norme-somministrazione-cibi-bevande.jpg",
  },
  {
    title: "Family Time",
    description:
      "Regala alla tua famiglia un tempo di qualità per stare assieme in un ambiente di serenità e pace, dove costruire ricordi indimenticabili che cementano legami indissolubili...",
    immagineUrl: "/images/family.time.png",
  },
  {
    title: "Regala una vacanza ai tuoi nonni",
    description:
      "Quest'anno regala ai tuoi nonni una vacanza al mare all'insegna del riposto e della tranquillità in un ambiente sicuro e protetto...",
    immagineUrl: "/images/regalavacanzanonni.png",
  },
];
let prodotti2 = [
  {
    title: "Piccoli amici",
    description:
      "Porta pure in vacanza con te i tuoi piccoli amici che godranno di un trattamento dedicato e di uno spazio riservato in sala da pranzo e in spiaggia...",
    immagineUrl: "/images/cani.png",
  },
  {
    title: "Servizio Baby Club",
    description:
      "Dedicata ai bambini dai 4 ai 12 anni, per rendere indimenticabile la loro vacanza, con le nostre esperte animatrici...",
    immagineUrl: "/images/baby.png",
  },
  {
    title: "Gli appuntamenti della settimana",
    description:
      "Il tempo quasi magico che vivrai con noi sarà scandito da momenti speciali per stare insieme in allegria nei nostri ambienti dedicati ai momenti conviviali...",
    immagineUrl: "/images/fettebisco.png",
  },
  {
    title: "La nostra cucina",
    description:
      "Una delizia per gli occhi e per il palato, la nostra cucina ti farà sentire in famiglia con l'aggiunta del beneficio di trovare sempre tutto pronto...",
    immagineUrl: "/images/cozze.png",
  },
];
let prodotti3 = [
  {
    title: "Alla scoperta di Caorle",
    description:
      "Immaginate diciotto chilometri di spiaggia sabbiosa color oro, mare pulito adatto ai bambini, limpido, pescoso e pieno di tesori sommersi, per la gioia dei pescatori e amanti delle immersioni e degli sport acquatici, e poi le dune, la natura incontaminata, il borgo storico sul mare, le eccellenze enogastronomiche del territorio...",
    immagineUrl: "/images/caorle1.png",
  },
  {
    title: "Itinerari in bicicletta",
    description:
      "Con il servizio bici gratuito offerto dal Soggiorno Marino don Bosco, fare un'uscita in bicicletta è uno dei modi migliori per vivere la natura nei dintorni di Caorle. Scegli il percorso più adatto a te o provane uno diverso ogni giorno...e parti per l'avventura  Caorle e i suoi territori incontamininati ti stanno aspettando! ",
    immagineUrl: "/images/bici.png",
  },
];
let prodotti4 = [
  {
    title: "Ospitalità per gruppi",
    description:
      "Per soggiorni di almeno 40 ospiti, siamo a tua disposizione nei periodi dedicati all'ospitalità per i gruppi...",
    immagineUrl: "/images/ospitalità.png",
  },
  {
    title: "Servizio bici gratuito",
    description:
      "Biciclette su prenotazione gratuita per splendide scampagnate alla scoperta di Caorle e dintorni.",
    immagineUrl: "/images/servizio.png",
  },
  {
    title: "Atvo",
    description:
      "Una comoda fermata degli autobus di fronte al Soggiorno Marino ti permetterà di viaggiare sulle linee ATVO: 4a / Aeroporto Marco Polo di Venezia - Caorle - P.S.Margherita - Lido Altanea - Duna Verde       97 / Caorle - Porto S. Margherita - Duna Verde Anche i biglietti possono essere acquistati comodamente all'interno del Soggiorno.",
    immagineUrl: "/images/atvo3.png",
  },
];
