import Head from "next/head";
import Layout from "/components/Layout";
import LandingHero from "/components/LandingHero.js";
import Paragraph from "components/Paragraph";
import Products from "@/components/Products";
import { Container, ButtonGroup, Button } from "@mui/material/";

let laboratori = [
  {
    title: "PRESEPISTA",
    description:
      "Crea la tua capanna per il presepe, impara l'arte del presepista",
    immagineUrl: "/images/laboratori/presepista.jpeg",
    category: "1ªora medie / 2ªora medie",
  },
  {
    title: "SCACCHI",
    description: "Impara a giocare a scacchi e sfida i tuio amici",
    immagineUrl: "/images/laboratori/scacchi.jpeg",
    category: "1ªora medie / 2ªora elementari",
  },
  {
    title: "SARTORIA",
    description: "I bottoni e gli orli non saranno più un problema",
    immagineUrl: "/images/laboratori/sartoria.jpeg",
    category: "1ªora medie / 2ªora elementari",
  },
  {
    title: "HOTELLERIE",
    description:
      "Piccole regole per dei servizi impeccabili a tavola, nel riordino delle stanze e nell'accoglienza",
    immagineUrl: "/images/laboratori/hotellerie.jpeg",
    category: "1ªora medie / 2ªora elementari",
  },
  {
    title: "TRAFORO",
    description: "L'intaglio del legno per dei lavori indimenticabili",
    immagineUrl: "/images/laboratori/traforo.jpeg",
    category: "1ªora medie / 2ªora medie",
  },
  {
    title: 'STREET HOCKEY',
    category: '1ª ora elementari / 2ª ora medie',
    description: 'Sport di squadra, versione dell\'hockey su ghiaccio giocato con o senza pattini su una superficie di asfalto. Generalmente è giocato su strade, parcheggi o campi da tennis.',
    immagineUrl: '/images/laboratori/hockey.webp',
  },
  {
    title: 'BASEBALL',
    category: '1ª ora elementari / 2ª ora medie',
    description:
      "sport di squadra in cui due squadre composte da nove giocatori si affrontano per nove inning (o riprese) in ciascuno dei quali le due squadre si alternano nella fase di attacco e di difesa.",
    immagineUrl: '/images/laboratori/baseball.jpeg',
  },
];

export default function Pagina() {
  return (
    <Layout>
      <Head>
        <title>Proposta Estate Ragazzi di San Donà di Piave</title>
        <meta
          name="og:url"
          content="https://per.donboscosandona.it/laboratori_new"
        />
        <meta name="og:type" content="website" />
        <meta name="og:locale" content="it_IT" />
        <meta
          name="og:title"
          content="Proposta Estate Ragazzi di San Donà di Piave"
        />
        <meta name="og:description" content="Tutte le novità di quest'anno!" />
        <meta name="og:image" content="/images/novità.png" />
      </Head>
      <LandingHero
        opacity={0.1}
        title="Novità 2023"
        imageUrl="/images/novità.png"
      />
      <Container sx={{ padding: "2rem", textAlign: "center" }}>
        <ButtonGroup
          color="secondary"
          aria-label="Scelta del tipo di laboratori"
        >
          <Button key="espressivi" href="/laboratori_espressivi">
            Espressivi
          </Button>
          <Button key="sportivi" href="/laboratori_sportivi">
            Sportivi
          </Button>
          <Button key="manuali" href="/laboratori_manuali">
            Manuali
          </Button>
          <Button key="novità" href="/laboratori_new">
            Novità
          </Button>
        </ButtonGroup>
      </Container>
      <Products cardWidth={4} products={laboratori} cardHeigth={4} />
    </Layout>
  );
}
