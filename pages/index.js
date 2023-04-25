import Layout from "/components/Layout";
import LandingHero from "/components/LandingHero2.js";
import Features from "/components/Features";
import Carousel from "/components/Carousel";
import Products from "/components/Products";
import Testimonials from "/components/Testimonials";
import Team from "/components/Team";
import Maps from "/components/Maps";
import Paragraph from "components/Paragraph";
import Table from "components/Table";

export default function Home({ datiArticoli }) {
  return (
    <Layout>
      <LandingHero
        opacity={0.2}
        title="Proposta Estate Ragazzi"
        description="Dal 15 Giugno al 14 Luglio 2023"
        buttonUrl="/tema"
        buttonText="be-Real: from lie to Life"
        imageUrl="https://www.saledellacomunita.it/wp-content/uploads/2022/12/Guillermo-del-Toro-parla-di-3-film-di-Pinocchio-in.jpg"
      />
      <Paragraph
        title="Perché il tempo spensierato non sia tempo perso"
        subtitle="Saluto del Direttore, don Nicola Munari"
        avatarImageUrl="https://i.postimg.cc/L8LTXskg/Screenshot-2023-04-15-alle-17-23-23.png"
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
      <Features
        title="La #per dell'Oratorio don Bosco è..."
        description=""
        features={features}
        cardWidth={3}
      />
      <Table
        title="Orario della Giornata tipo"
        backgroundImageUrl="/images/giornata.png"
        backgroundColor="#e84393"
        opacity={0.5}
        blur="0.1rem"
        color="white"
        rows={[
          ["Mattino", "", "Pomeriggio", ""],
          ["8.30", "Accoglienza informale", "14.30", "Riapertura cancelli"],
          [
            "8.45",
            "Preghiera e avvisi animatori",
            "15.00",
            "Inizio pomeriggio: tornei, giochi al parco, spettacoli, ecc.",
          ],
          [
            "9.30",
            "Momento di preghiera ragazzi",
            "17.45",
            "Concludiamo insieme la giornata",
          ],
          [
            "10.00",
            "Prima ora di attività",
            "18.00",
            "Termine attività pomeridiane",
          ],
          [
            "10.50",
            "Ricreazione",
            "18.30",
            "Santa Messa (per chi lo desidera)",
          ],
          ["11.10", "Seconda ora di attività", "", ""],
          [
            "12.00",
            "A casa... buon pranzo!",
            "",
            "Attenzione: tutti i mercoledì pomeriggio non c’è attività pertanto l’oratorio rimarrà chiuso.",
          ],
        ]}
      />
      <Products cardWidth={3} products={in_evidenza} borderRadius="50%" />
      <Carousel slides={gite} height={70} />
      <Products
        title="I laboratori"
        description="Stare insieme..."
        cardWidth={3}
        products={laboratori}
        borderRadius="2rem"
      />
      <Carousel slides={serate} height={70} />
      <Products
        title="Serate Cinema"
        description="Ogni lunedì sera sarà la serata dedicata al cinema. Le proiezioni inizieranno alle ore 20:45, con accesso alla biglietteria da via XIII Martiri, al prezzo incredibile di 4,00 € (più un euro se non hai ancora gli occhiali 3D);
 l’uscita invece sarà fatta dalla parte dell’Oratorio, per garantire una maggiore sicurezza dei ragazzi mentre aspettano i genitori.
 
 Per ottenere il biglietto al prezzo speciale PER, l’acquisto deve essere fatto alla biglietteria del Cinema il lunedì mattina dalle 8.30 alle 9.30 o dalle 11.30 alle 12.30 o tutti i giorni dalle 16 alle 19. In alternativa è possibile acquistarlo online sul sito del cinema al prezzo consueto (5 € il biglietto e 2 € gli occhiali 3D): potrai scegliere con comodo il posto e ci darai un aiutino in più. "
        cardWidth={3}
        products={serate_cinema}
        borderRadius="5px"
      />
      <Paragraph
        title="Stay tuned"
        subtitle="Per essere sempre aggiornato sulla PER!"
        avatarImageUrl="https://cdn-icons-png.flaticon.com/512/124/124034.png"
      >
        <p>
          Sito internet e Social Network verranno continuamente aggiornati per
          raccontare cos'è la proposta estate e per ricordare tutti gli
          appuntamenti importanti.
          <br />
          Animatori, ragazzi e genitori potranno così essere sempre connessi e
          raccontare la propria esperienza usando gli hashtag #PER23{" "}
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
          </b>{" "}
          E' semplice e comodo:
          <br />
          1) Registra nella tua rubrica il nostro numero: 3924643689
          <br />
          2) Inviaci un messaggio con scritto NEWS PER23 Tutto qui!
        </p>
      </Paragraph>
      <Testimonials
        testimonials={testimonials}
        cardWidth={4}
        imageUrl="/images/home/sfondo_giostra.jpeg"
      />
      <Products cardWidth={3} products={altri_link} borderRadius="50%" />
      <Paragraph
        title="La Segreteria durante la PER"
        backgroundColor="#3867d6"
        opacity={0.5}
        blur="0.2rem"
        maxWidth={false}
        color="white"
        backgroundImageUrl="/images/segreteria.png"
      >
        <p>
          La segreteria sarà aperta per le iscrizioni alle varie gite e per
          qualsiasi informazione dal lunedì al venerdì nei seguenti orari:
        </p>
        <p align="center">
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
          il mercoledì pomeriggio){" "}
        </p>
        <p>
          Ricordiamo che l’iscrizione alle uscite deve avvenire al massimo entro
          le ore 12.00 di due giorni precedenti all’uscita (salvo eventuali
          altre indicazioni).
        </p>
        <p>
          Le liste verranno esposte verso le 18.00 nella vigilia delle gite.
        </p>
        <p>
          Per potervi servire meglio e più velocemente è importante venire in
          segreteria con la tessera personale che consegneremo ai ragazzi
          all’inizio della P.E.R. e con i soldi giusti.
        </p>
        <p>
          Non è necessaria la presenza del genitore per l’iscrizione alle gite.
        </p>
      </Paragraph>
      <Team
        title="Contatti"
        description="Hai dei dubbi? Contattaci pure (preferibilmente via email) e ti risponderemo il prima possibile."
        members={members}
        cardWidth={4}
      />
      <Maps
        maxWidth="100%"
        maxHeight="550px"
        url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5580.05343317009!2d12.5710658!3d45.6301996!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477956fe076b4157%3A0x29fb231d47465883!2sCnos%20Fap%20Don%20Bosco!5e0!3m2!1sit!2sit!4v1680507660807!5m2!1sit!2sit"
      />
    </Layout>
  );
}

import { getDatiArticoli } from "/lib/articoli";

export async function getStaticProps() {
  const datiArticoli = getDatiArticoli();
  return {
    props: {
      datiArticoli,
    },
  };
}

// I punti di forza
const features = [
  {
    title: "Una proposta cristiana",
    imageUrl: "/images/home/proposta_cristiana.png",
    description:
      "Il nostro compagno di viaggio in questa splendida avventura estiva sarà sempre Gesù.",
  },
  {
    title: "In allegria",
    imageUrl: "/images/home/divertendosi.png",
    description:
      "La PER è piena di allegria vissuta in compagnia in ogni momento: giochi, attività, gite, serate...",
  },
  {
    title: "Mettendo a frutto la creatività",
    imageUrl: "/images/home/creativa.png",
    description:
      "Nei laboratori i talenti fioriscono: in te forse c'è uno sportivo, un artista, un creativo... scegli con cura al momento della preiscrizione",
  },
  {
    title: "Coltivando le relazioni",
    imageUrl: "/images/home/esplorando.png",
    description:
      "Durante la PER non sarai mai da solo: educatori, animatori, altri ragazzi, ospiti... ognuno è un mondo da esplorare, devi solo buttarti!",
  },
];

// slides per il carousel
let serate = [
  {
    titolo: "Serata 1",
    descrizione:
      "Scopri tutti i segreti del nostro Centro con il tour virtuale!",
    immagine: "https://source.unsplash.com/random",
  },
  {
    titolo: "Serata 2",
    descrizione:
      "A maggio il nostro Centro avrà l'onore di ospitare il Concorso Nazionale del Settore Elettrico: tutti i Centri di Formazione Professionale salesiani d'Italia invieranno i loro campioni per una settimana di sfida e condivisione professionale...",
    colore: "#22aa22",
  },
];

let gite = [
  {
    titolo: "Gita a Noale",
    descrizione:
      "22 Giugno e 11 Luglio - Scopri tutti i segreti del nostro Centro con il tour virtuale!",
    immagine: "/images/gite/aquaestate.webp",
    colore: "#FFC312",
    opacity: 0.5,
    blur: "0.3rem",
  },
  {
    titolo: "Gita in Val di Gares",
    descrizione:
      "27 Giugno - A maggio il nostro Centro avrà l'onore di ospitare il Concorso Nazionale del Settore Elettrico: tutti i Centri di Formazione Professionale salesiani d'Italia invieranno i loro campioni per una settimana di sfida e condivisione professionale...",
    immagine: "/images/gite/val_gares.jpeg",
    colore: "#009432",
    opacity: 0.5,
    blur: "0.3rem",
  },
  {
    titolo: "Gita al Parco Sigurtà",
    descrizione:
      "4 Luglio - A maggio il nostro Centro avrà l'onore di ospitare il Concorso Nazionale del Settore Elettrico: tutti i Centri di Formazione Professionale salesiani d'Italia invieranno i loro campioni per una settimana di sfida e condivisione professionale...",
    immagine: "/images/gite/parco_sigurta.jpeg",
    colore: "#A3CB38",
    opacity: 0.5,
    blur: "0.3rem",
  },
];

// Il nostro team
let members = [
  {
    name: "Segreteria PER",
    role: "Per qualsiasi evenienza ed informazione potete mandare una mail al nostro indirizzo:",
    imageUrl: "",
    email: "per@donboscosandona.it",
  },
  {
    name: "don Michele Bortolato",
    role: "Responsabile della Proposta Estate",
    imageUrl: "",
  },
  {
    name: "don Nicola Munari",
    role: "Direttore dell'Opera",
    imageUrl: "",
  },
  {
    name: "Dopo la Campanella",
    role: "Dott. Andrea Pasqualetto",
    imageUrl: "",
    phone: "391 706 4430",
  },
  {
    name: "Cinema don Bosco",
    role: "Per informazioni sugli orari e l'acquisto dei biglietti, inviate pure un whatsapp al nostro numero:",
    imageUrl: "",
    phone: "346 960 5687",
  },
];

let in_evidenza = [
  {
    title: "Iscrizioni",
    description: "Tutto quello che devi sapere per iscriverti alla #PER23",
    immagineUrl: "/images/_iscrizioni.png",
    url: "/iscrizioni",
  },
  {
    title: "Calendario",
    description: "Scopri la #PER23 giorno per giorno",
    immagineUrl: "/images/_calendario.png",
    url: "/calendario",
  },
  {
    title: "Tema formativo",
    description: "Scopri la #PER23 giorno per giorno",
    immagineUrl: "/images/_tema.png",
    url: "/tema",
  },
  {
    title: "I pomeriggi",
    description: "Scopri la #PER23 giorno per giorno",
    immagineUrl: "/images/_pomeriggi.png",
    url: "/pomeriggi",
  },
];

let laboratori = [
  {
    title: "Espressivi",
    description: "Tutto quello che devi sapere per iscriverti alla #PER23",
    immagineUrl: "/images/_espressivi.png",
    url: "/laboratori_espressivi",
  },
  {
    title: "Sportivi",
    description: "Scopri la #PER23 giorno per giorno",
    immagineUrl: "/images/_sportivi.png",
    url: "/laboratori_sportivi",
  },
  {
    title: "Manuali",
    description: "Scopri la #PER23 giorno per giorno",
    immagineUrl: "/images/_manuali.png",
    url: "/laboratori_artistici",
  },
  {
    title: "Novità 2023",
    description: "Scopri la #PER23 giorno per giorno",
    immagineUrl: "/images/_novità.png",
    url: "/laboratori_new",
  },
];

let altri_link = [
  {
    title: "Regolamento",
    description: "Tutto quello che devi sapere per iscriverti alla #PER23",
    immagineUrl: "/images/_regolamento.png",
    url: "/regolamento",
  },
  {
    title: "Servizio autobus",
    description: "Scopri la #PER23 giorno per giorno",
    immagineUrl: "/images/_autobus.png",
    url: "/autobus",
  },
  {
    title: "Momenti di preghiera e riflessione",
    description: "Scopri la #PER23 giorno per giorno",
    immagineUrl: "/images/_preghiera.png",
    url: "/preghiera",
  },
  {
    title: "Gruppo Special",
    description: "Scopri la #PER23 giorno per giorno",
    immagineUrl: "/images/_special.png",
    url: "/special",
  },
  {
    title: "Spazio animatori",
    description: "Scopri la #PER23 giorno per giorno",
    immagineUrl: "/images/_animatori.png",
    url: "/animatori",
  },
  {
    title: "Spazio genitori",
    description: "Scopri la #PER23 giorno per giorno",
    immagineUrl: "/images/_genitori.png",
    url: "/genitori",
  },
  {
    title: "Dopo la Campanella Summer Edition",
    description: "Scopri la #PER23 giorno per giorno",
    immagineUrl: "/images/_dlc.png",
    url: "/dlc",
  },
];

const testimonials = [
  {
    imageUrl:
      "https://png.pngtree.com/png-vector/20220608/ourmid/pngtree-happy-girl-avatar-kid-funny-png-image_4911174.png",
    name: "Michela B.",
    text: "Grazie mille per tutte le infinite emozioni che ci avete regalato, non solo nella serata finale ma in ogni occasione come alla sfilata, alle gite, ai momenti di condivisione, alle cene all'aperto e ai cori delle squadre o alle canzoni cantate e ballate che si sentivano fino a fuori dell'oratorio... per noi è stata la prima esperienza ipergalattica, ma la cosa più bella è che questa PER ha fatto scoprire nuove passioni grazie ai laboratori... Non resta che ringraziare tutti, dal primo all'ultimo e dirvi di continuare così, perchè come alla PER non ci di diverte!!!",
    social: "@giovane iscritta",
  },
  {
    imageUrl:
      "https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png",
    name: "Samuele Z.",
    text: "E' stato il mio primo anno alla PER. Il prossimo sarò ancora con voi perchè l'UNIONE, la CONDIVISIONE e l'AMICIZIA che si creano all'oratorio don Bosco sono... wow!!! Mi sono divertito un mondo!!! Grazie di tutto!! Alla prossima!!!",
    social: "@animatore",
  },
  {
    name: "Loredana Z.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6s5z4ojtNwl2jXifp1jiboZ2T0plskgirZXxHaE_UW2jdj9PI-8Ig05DPcMBUUAvWNCQ&usqp=CAU",
    text: "A chi dice che i giovani non hanno voglia di fare nulla, io li inviterei in oratorio durante la PER. Che vedano gli animatori e il lavoro che dedicano per allietare bambini e bambine e la gioia che trasmettono. Quando ragazzi e bambini trovano un senso, sono i primi a buttarsi. Ma la PER non è solo gioco e svago. E' un'esperienza che aiuta i più piccoli ad esprimere i loro talenti, a condividere lo stile e il carisma salesiano, a vivere in una comunità che è fortemente educante e gioiosa. Un grazie di cuore all'Oratorio don Bosco!!!",
    social: "@mamma",
  },
];

let serate_cinema = [
  {
    title: "TRANSFORMERS: IL RISVEGLIO",
    description:
      "Il film introdurrà: i Maximal, discendenti degli Autobot; i Predacon, discendenti dei Decepticon, e i Terrorcons, gruppo di Decepticon in grado di trasformarsi in bestie mitologiche.",
    immagineUrl:
      "https://image.tmdb.org/t/p/original/aY2hzOLuHTxKev5bWnC05ZjxtrB.jpg",
    url: "https://cinema.donboscosandona.it",
  },
  {
    title: "ELEMENTAL",
    description:
      "In una città in cui abitanti di fuoco, acqua, terra e aria vivono insieme, un’ardente giovane donna e un ragazzo che segue la corrente stanno per scoprire qualcosa di fondamentale: quanto hanno davvero in comune.",
    immagineUrl:
      "https://image.tmdb.org/t/p/original//v9dZ3MnuSOU5C0ma21HP30zVGI.jpg",
    url: "https://cinema.donboscosandona.it",
  },
  {
    title: "DUNGEONS & DRAGONS",
    description:
      "Un affascinante ladro e un gruppo di improbabili avventurieri realizzano il colpo del secolo recuperando una reliquia perduta. Ma le cose si mettono male quando il gruppo si imbatte nelle persone sbagliate.",
    immagineUrl:
      "https://image.tmdb.org/t/p/original/3zeG7F9QFEmPSfCF3EEZzRQVuCA.jpg",
    url: "https://cinema.donboscosandona.it",
  },
  {
    title: " INDIANA JONES E IL QUADRANTE DEL DESTINO ",
    description:
      "Nel 1969, l'archeologo e avventuriero statunitense Indiana Jones vive sullo sfondo della corsa allo spazio. Jones è a disagio per il fatto che il governo federale degli Stati Uniti d’America abbia reclutato ex nazisti per aiutare a battere l'Unione Sovietica nella competizione per arrivare nello spazio.",
    immagineUrl:
      "https://image.tmdb.org/t/p/original/y4MBS0SKE0pHR57vfYBxGhrkfcv.jpg",
    url: "https://cinema.donboscosandona.it",
  },
];
