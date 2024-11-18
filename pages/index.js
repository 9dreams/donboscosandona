import { Container, Grid, Typography } from "@mui/material";
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
  NavBar2,
  Logos,
  Sponsor,
  Elements,
  Footer2,
} from "/components";

export default function Home({ data, elementi }) {
  return (
    <Layout>
      <div style={{ width: "100%", position: "relative" }}>
        <video width="100%" height="auto" controls autoPlay loop muted>
          <source src="/images/A_VIDEO PRESENTAZIONE.mov" type="video/mp4" />
          Il tuo browser non supporta il tag video.
        </video>
      </div>
      <Container>
        <div className="testo" style={{ marginTop: "2rem" }}>
          <Typography
            variant="h3"
            gutterBottom
            align="center"
            sx={{ fontWeight: "bold" }}
          >
            Chi Siamo
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Anffas San Donà di Piave APS</strong>, ente locale di Anffas
            Nazionale, Associazione di famiglie di persone con disabilità
            intellettive e del neuro-sviluppo, è un Ente del Terzo Settore
            presente nel territorio sandonatese dal 1974, con quasi 100 famiglie
            iscritte, provenienti dai comuni dell’Asl 4 Veneto Orientale.
          </Typography>
          <Typography variant="body1" paragraph>
            Le finalità associative sono la tutela e la promozione della persona
            con disabilità intellettiva, promuovendo l’inclusione sociale nei
            vari ambiti: inclusione scolastica, inserimento inclusivo nel
            proprio contesto sociale e nel mondo del lavoro. Le attività che
            Anffas offre ai propri aderenti, familiari ed anche ai non iscritti
            all’Associazione, includono:
          </Typography>
          <ul style={{ paddingLeft: "1.5rem", margin: "1rem 0" }}>
            <li>Consulenza ed informazione alle famiglie</li>
            <li>Assistenza per le pratiche burocratiche</li>
            <li>Sostegno e consulenza psicologica</li>
            <li>Informazioni legali</li>
          </ul>
          <Typography variant="body1" paragraph>
            Ogni settimana, oltre 70 persone con disabilità di tutte le età
            frequentano la sede, partecipando a numerosi laboratori, tra cui:
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <ul>
                <li>Informatica</li>
                <li>Percorsi di autonomia</li>
                <li>Musicoterapia</li>
                <li>Corso di musica</li>
                <li>Potenziamento cognitivo</li>
              </ul>
            </Grid>
            <Grid item xs={12} sm={6}>
              <ul>
                <li>Fotografia</li>
                <li>Cucina ed autonomia domestica</li>
                <li>Manualità</li>
                <li>Balli latinoamericani</li>
                <li>Shiatsu-qi gong</li>
              </ul>
            </Grid>
          </Grid>
          <Typography variant="body1" paragraph>
            Durante l’estate, proponiamo un centro estivo e il progetto
            campeggio. Nei fine settimana, organizziamo feste, momenti di
            ritrovo, attività ludico-motorie e collaborazioni con enti e altre
            associazioni del territorio. I corsi sono tenuti da personale
            specializzato, dipendenti, collaboratori e numerosi volontari.
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Orari:</strong> La struttura è aperta dal lunedì al venerdì,
            dalle 8:00 alle 12:30 e dalle 15:00 alle 18:30.
          </Typography>
        </div>
        <div className="margin">
          <Typography
            variant="h4"
            gutterBottom
            align="center"
            sx={{ marginTop: 4 }}
          >
            I nostri laboratori
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {prodotti.map((prodotto) => (
              <Grid item xs={12} sm={6} md={4} key={prodotto.id}>
                <NewsCard post={prodotto} />
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
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

// I punti di forza
const features = [
  {
    title: "Progetto educativo",
    imageUrl:
      "https://teamtrex.com.au/wp-content/uploads/2021/06/Strength-icon.png",
    description:
      "Un progetto chiaro e affidabile per far crescere e diventare uomini. ",
    url: "https://cinema.donboscosandona.it",
  },
  {
    title: "Didattica attiva",
    imageUrl:
      "https://teamtrex.com.au/wp-content/uploads/2021/06/Strength-icon.png",
    description:
      "Lezioni attive e coinvolgenti per dimenticare la noia e partecipare da protagonisti.",
  },
  {
    title: "Laboratori",
    imageUrl:
      "https://teamtrex.com.au/wp-content/uploads/2021/06/Strength-icon.png",
    description:
      "12 ore settimanali in laboratori tecnologicamente all'avanguardia per formare i professionisti del futuro.",
  },
  {
    title: "Servizi al lavoro",
    imageUrl:
      "https://teamtrex.com.au/wp-content/uploads/2021/06/Strength-icon.png",
    description:
      "Orientamento, stage e alternanza, i nostri esperti ti accompagneranno fino all'effettivo inserimento nelle aziende del settore.",
  },
];

let servizi = [
  {
    id: 1,
    titolo: "Toelettatura",
    immagine: "https://img.pgol.it/meta/0124-Toelettatura.jpg",
    pubblicazione: "Disponibile ora",
    abstract:
      "Servizio professionale di toelettatura per tutti i tipi di animali.",
  },
  {
    id: 2,
    titolo: "Servizio di adozione",
    immagine:
      "https://www.comunecoriglianorossano.eu/wp-content/uploads/2021/08/cani-min.jpg",
    pubblicazione: "Sempre attivo",
    abstract: "Adotta un amico a quattro zampe e cambia la sua vita!",
  },
  {
    id: 3,
    titolo: "Consulenza veterinaria",
    immagine:
      "https://naturopet.it/wp-content/uploads/2019/03/consulenza-veterinaria-Naturopet.png",
    pubblicazione: "Disponibile su appuntamento",
    abstract:
      "Consulenze veterinarie professionali per la salute del tuo animale.",
  },
];

// slides per il carousel
let slides = [
  {
    titolo: "Fatti un bel giro",
    descrizione:
      "Scopri tutti i segreti del nostro centro con il tour virtuale!",
    immagine:
      "https://www.anffas.net/wp-content/uploads/2021/06/anffas-sandon%C3%A0-di-piave-sede-1.jpg",
    colore: "#ED4C67",
    colore2: "rgba(100,100,100,0)",
    opacity: 0.8,
    blur: "0.5rem",
    buttonText: "Scopri di più!",
    buttonUrl: "https://www.anffas.net/sede",
  },
  {
    titolo: "I nostri laboratori",
    descrizione:
      "Scopri i nostri laboratori settimanali per persone con disabilità intellettive e del neuro-sviluppo.",
    immagine:
      "https://www.anffas.net/wp-content/uploads/2021/06/anffas-sandon%C3%A0-di-piave-laboratori-1.jpg",
    colore: "#22aa22",
    colore2: "rgba(100,100,100,0)",
    buttonText: "Scopri i laboratori!",
    buttonUrl: "https://www.anffas.net/laboratori",
  },
  {
    titolo: "Sostieni Anffas",
    descrizione:
      "Sostieni Anffas San Donà di Piave donando il tuo 5xmille, a te non costa niente e per noi è importante!",
    immagine:
      "https://www.anffas.net/wp-content/uploads/2021/06/anffas-sandon%C3%A0-di-piave-donazioni-1.jpg",
    colore: "#3498db",
    colore2: "rgba(100,100,100,0)",
    buttonText: "Donazione",
    buttonUrl: "https://www.anffas.net/donazioni",
  },
];

let prodotti = [
  {
    id: 1,
    titolo: "Potenziamento cognitivo",
    immagine: "/images/potenziamento_cognitivo.jpg",
    pubblicazione: "Tenuto dalla psicologa Marianna Trevisiol",
    abstract:
      "Mira all'acquisizione delle potenzialità cognitive negli associati più giovani ed al mantenimento in quelli più anziani.",
    articolo: true,
    tag: "Cognitivo, Psicologia",
  },
  {
    id: 2,
    titolo: "Autonomia",
    immagine: "",
    pubblicazione: "Laboratorio di sviluppo personale",
    abstract:
      "Con questo laboratorio vengono insegnate competenze per l'autonomia.",
    articolo: true,
    tag: "Autonomia, Sviluppo personale",
  },
  {
    id: 3,
    titolo: "Musigiocando",
    immagine: "",
    pubblicazione: "Laboratorio espressivo",
    abstract:
      "I ragazzi sperimentano e scoprono, tramite l'uso di strumenti, anche inusuali, nuove sensazioni e modi di esprimersi.",
    articolo: true,
    tag: "Musica, Espressione",
  },
  {
    id: 4,
    titolo: "Sessualità",
    immagine: "",
    pubblicazione: "Laboratorio di affettività",
    abstract:
      "Obiettivo di rendere comprensibili le sensazioni e gli stimoli che il corpo emette nelle relazioni interpersonali.",
    articolo: true,
    tag: "Affettività, Educazione",
  },
  {
    id: 5,
    titolo: "Cucina",
    immagine: "/images/cucina.jpg",
    pubblicazione: "Laboratorio creativo",
    abstract:
      "Si creano ricette nuove con la soddisfazione di portare a casa ciò che si è fatto e condividerlo con la famiglia.",
    articolo: true,
    tag: "Cucina, Creatività",
  },
  {
    id: 6,
    titolo: "Manualità",
    immagine: "/images/manualità.jpg",
    pubblicazione: "Laboratorio creativo",
    abstract:
      "Stimolo della creatività e uso della manualità fine limitatamente alle proprie potenzialità.",
    articolo: true,
    tag: "Manualità, Creatività",
  },
  {
    id: 7,
    titolo: "Canto",
    immagine: "/images/musicaband.jpg",
    pubblicazione: "Laboratorio musicale",
    abstract:
      "Liberiamo la nostra voglia di farci sentire ed ascoltare al mondo intero!",
    articolo: true,
    tag: "Canto, Musica",
  },
  {
    id: 8,
    titolo: "Ballo",
    immagine: "/images/ballo.jpg",
    pubblicazione: "Laboratorio di movimento",
    abstract:
      "Scateniamoci nel movimento ed ascoltiamo le belle sensazioni che il corpo riceve tramite la danza.",
    articolo: true,
    tag: "Ballo, Movimento",
  },
  {
    id: 9,
    titolo: "Shiatsu qi-gong",
    immagine: "/images/SHIATSU.jpg",
    pubblicazione: "Laboratorio di rilassamento",
    abstract:
      "Rilassamento ed ascolto del proprio corpo, con trattamenti reciproci tra i partecipanti.",
    articolo: true,
    tag: "Shiatsu, Rilassamento",
  },
  {
    id: 10,
    titolo: "Nordic Walking",
    immagine: "",
    pubblicazione: "Attività all'aria aperta",
    abstract:
      "Camminare con i bastoncini al ritmo dell'istruttore e nel contempo poter stare all'aria aperta ammirando la bellezza della natura.",
    articolo: true,
    tag: "Nordic Walking, Natura",
  },
  {
    id: 11,
    titolo: "Musica Band",
    immagine: "/images/bandmusicale.jpg",
    pubblicazione: "Laboratorio musicale",
    abstract:
      "Con particolari strumenti, permette di stimolare attivamente il cervello aumentando la capacità di isolare un singolo suono e comporre assieme ai compagni un brano musicale.",
    articolo: true,
    tag: "Musica, Band",
  },
  {
    id: 12,
    titolo: "Fotografia",
    immagine: "",
    pubblicazione: "Laboratorio creativo",
    abstract:
      "Impariamo a fare delle belle foto ed osservare il mondo che ci sta attorno al fine di potenziare l'autonomia!",
    articolo: true,
    tag: "Fotografia, Autonomia",
  },
];
