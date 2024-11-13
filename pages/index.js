import Navbar2 from "@/components/Navbar2";
import Footer2 from "@/components/Footer2";
import Header from "@/components/Header";
import MyCarousel from "@/components/Carousel";
import MyTable from "@/components/Table";
import Team from "@/components/Team";
import Post from "@/components/Post";
import {
  Container,
  Typography,
  Grid,
  Box,
  Button,
} from "@mui/material";
import Link from "next/link";

const carouselSlides = [
  {
    immagine: "/path/to/image1.jpg",
    titolo: "Benvenuti in Anffas San Donà di Piave",
    descrizione: "Sosteniamo persone con disabilità intellettive e le loro famiglie.",
    buttonText: "Scopri di più",
    buttonUrl: "#chi-siamo",
    colore: "#000000",
    opacity: 0.5,
    blur: "2px",
  },
  {
    immagine: "/path/to/image2.jpg",
    titolo: "Laboratori Settimanali",
    descrizione: "Offriamo corsi di autonomia, musicoterapia, cucina e molto altro.",
    buttonText: "Esplora i Laboratori",
    buttonUrl: "#laboratori",
    colore: "#000000",
    opacity: 0.5,
    blur: "2px",
  },
];

const tableRows = [
  ["Giorno", "Orario", "Attività"],
  ["Lunedì", "9:00 - 12:00", "Laboratori di Potenziamento Cognitivo"],
  ["Martedì", "15:00 - 18:00", "Corso di Cucina"],
  // Aggiungi altre righe come necessario
];

const posts = [
  {
    id: "1",
    title: "Nuove Iniziative per l'Inclusione Sociale",
    date: "2024-01-10",
    abstract: "Scopri le nostre nuove attività dedicate all'inclusione sociale.",
    imageUrl: "/path/to/post1.jpg",
  },
  {
    id: "2",
    title: "Inaugurazione del Mercatino Solidale",
    date: "2024-02-15",
    abstract: "Visita il nostro mercatino con i lavori dei nostri ragazzi.",
    imageUrl: "/path/to/post2.jpg",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar2 />
      
      {/* Header con sezioni principali */}

      {/* Carousel */}
      <MyCarousel slides={carouselSlides} maxWidth="lg" height={60} />

      <Container maxWidth="lg" sx={{ paddingY: 4 }}>
        {/* Sezione Chi Siamo */}
        <Box id="chi-siamo" my={10}>
          <Typography variant="h4" component="h2" sx={{ fontWeight: "bold" }}>
            Chi Siamo
          </Typography>
          <Typography variant="body1" mt={2}>
            Anffas San Donà di Piave APS è un ente locale dell'Anffas Nazionale, presente dal 1974. L'associazione sostiene persone con disabilità intellettive e le loro famiglie, promuovendo l'inclusione sociale e lavorativa.
          </Typography>
        </Box>

        {/* Sezione Laboratori Settimanali con Tabella */}
        <Box id="laboratori" my={10}>
          <Typography variant="h4" component="h2" sx={{ fontWeight: "bold" }}>
            I Laboratori Settimanali
          </Typography>
          <MyTable 
            rows={tableRows} 
            title="Orari dei Laboratori" 
            maxWidth="md" 
            color="#333"
            backgroundColor="rgba(255, 255, 255, 0.8)"
          />
        </Box>

        {/* Sezione Articoli Recenti */}
        <Box id="articoli" my={10}>
          <Typography variant="h4" component="h2" sx={{ fontWeight: "bold" }}>
            Articoli Recenti
          </Typography>
          <Grid container spacing={4}>
            {posts.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </Grid>
        </Box>

        {/* Sezione Contatti */}
        <Box id="contatti" my={10}>
          <Typography variant="h4" component="h2" sx={{ fontWeight: "bold" }}>
            Contattaci
          </Typography>
          <Typography variant="body1">
            Via Cima XI, N.47, 30027 San Donà di Piave (VE)
          </Typography>
          <Typography variant="body1">Tel. Direzione  339-3101429

</Typography>
          <Typography variant="body1">Tel. Segreteria: 335-4349556</Typography>
          <Typography variant="body1">Email: anffasonlussandonadipiave@gmail.com</Typography>
          <Link href="https://www.facebook.com/AnffasSanDona" passHref>
            <Button variant="contained" sx={{ marginTop: 2 }}>Pagina Facebook</Button>
          </Link>
        </Box>
      </Container>

      <Footer2 />
    </div>
  );
}
