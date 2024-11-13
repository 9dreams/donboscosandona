import Navbar2 from "@/components/Navbar2"; // Importa il componente Navbar2
import Footer2 from "@/components/Footer2"; // Importa il componente Footer2
import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
} from "@mui/material";
import Link from "next/link";
import { motion } from "framer-motion";

// Servizi offerti
const services = [
  "Tutela dei diritti delle persone con disabilità",
  "Supporto ai familiari delle persone con disabilità",
  "Formazione e sensibilizzazione sulla disabilità",
  "Progetti di inclusione sociale e lavoro",
];

// Eventi
const events = [
  {
    title: "Convegno Nazionale sulla Disabilità",
    description:
      "Partecipa al nostro convegno nazionale per discutere le ultime novità sulla disabilità. Data: 20 Maggio 2024.",
  },
  {
    title: "Laboratori di Inclusione Sociale",
    description:
      "Laboratori pratici per la sensibilizzazione e l'inclusione delle persone con disabilità. Inizio: 10 Giugno 2024.",
  },
];

// Testimonianze
const testimonials = [
  {
    quote: "Grazie a Anffas, la mia vita è cambiata.",
    author: "Mario Rossi",
  },
  {
    quote: "Un supporto fondamentale per la nostra famiglia.",
    author: "Giulia Bianchi",
  },
];

// News
const news = [
  {
    title: "Nuovo programma di inclusione",
    description: "Scopri il nostro nuovo programma di inclusione sociale.",
  },
  {
    title: "Campagna di sensibilizzazione",
    description:
      "Unisciti a noi nella campagna per la sensibilizzazione sulla disabilità.",
  },
];

// Nuove sezioni aggiuntive
const resources = [
  {
    title: "Risorse Utili",
    description:
      "Materiali e link utili per famiglie e persone con disabilità.",
  },
  {
    title: "Come Aiutare",
    description: "Scopri come puoi contribuire e fare la differenza.",
  },
];

export default function Home() {
  return (
    <div className=" min-h-screen">
      <Navbar2 /> {/* Aggiungi la Navbar2 qui */}
      <Container maxWidth="lg" sx={{ paddingY: 4, marginTop: "80px" }}>
        {/* Sezione di Benvenuto */}
        <Box className="text-center my-8">
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{ color: "#388e3c", fontWeight: "bold" }}
          >
            Benvenuto nel sito di Anffas Nazionale
          </Typography>
          <Typography variant="h6" sx={{ color: "#616161" }} paragraph>
            Anffas Nazionale ETS/APS - Associazione Nazionale di Famiglie e
            Persone con disabilità intellettive e disturbi del neurosviluppo - è
            un ETS e APS che si occupa della tutela dei diritti di persone con
            disabilità intellettive e disturbi del neurosviluppo e dei loro
            familiari.
          </Typography>
          <Link href="/contact" passHref>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#388e3c",
                color: "white",
                borderRadius: "24px",
                paddingX: 4,
                transition: "background-color 0.3s, transform 0.3s",
                "&:hover": {
                  backgroundColor: "#2e7d32",
                  transform: "scale(1.05)",
                },
              }}
            >
              Contattaci
            </Button>
          </Link>
        </Box>

        {/* Sezione Servizi */}
        <Box className="my-10">
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            textAlign="center"
            sx={{ color: "#388e3c", fontWeight: "bold" }}
          >
            I Nostri Servizi
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card
                    sx={{
                      borderRadius: "16px",
                      boxShadow: 3,
                      backgroundColor: "#f9f9f9",
                      transition: "transform 0.3s, box-shadow 0.3s",
                      "&:hover": {
                        boxShadow: 6,
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="140"
                      image={`https://picsum.photos/seed/${index}/300/200`} // Placeholder image
                      alt={service}
                      sx={{
                        borderTopLeftRadius: "16px",
                        borderTopRightRadius: "16px",
                      }}
                    />
                    <CardContent>
                      <Typography
                        variant="h6"
                        component="h3"
                        sx={{ color: "#2e7d32", fontWeight: "bold" }}
                      >
                        {service}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Sezione Testimonianze */}
        <Box className="my-10">
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            textAlign="center"
            sx={{ color: "#388e3c", fontWeight: "bold" }}
          >
            Cosa Dicono di Noi
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card
                    sx={{
                      borderRadius: "16px",
                      boxShadow: 3,
                      backgroundColor: "#e8f5e9",
                      transition: "transform 0.3s, box-shadow 0.3s",
                      "&:hover": {
                        boxShadow: 6,
                      },
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="body1"
                        sx={{ color: "#4a4a4a", fontStyle: "italic" }}
                      >
                        "{testimonial.quote}"
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#2e7d32",
                          textAlign: "right",
                          fontWeight: "bold",
                        }}
                      >
                        - {testimonial.author}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Sezione Ultime Notizie/Eventi */}
        <Box className="my-10">
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            textAlign="center"
            sx={{ color: "#388e3c", fontWeight: "bold" }}
          >
            Ultime Notizie e Eventi
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {events.map((event, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card
                    sx={{
                      borderRadius: "16px",
                      boxShadow: 3,
                      backgroundColor: "#e8f5e9",
                      transition: "transform 0.3s, box-shadow 0.3s",
                      "&:hover": {
                        boxShadow: 6,
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="140"
                      image={`https://picsum.photos/seed/${index + 10}/300/200`} // Placeholder image
                      alt={event.title}
                      sx={{
                        borderTopLeftRadius: "16px",
                        borderTopRightRadius: "16px",
                      }}
                    />
                    <CardContent>
                      <Typography
                        variant="h6"
                        component="h3"
                        sx={{ color: "#2e7d32" }}
                      >
                        {event.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#616161" }}>
                        {event.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Sezione Risorse */}
        <Box className="my-10">
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            textAlign="center"
            sx={{ color: "#388e3c", fontWeight: "bold" }}
          >
            Risorse Utili
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {resources.map((resource, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card
                    sx={{
                      borderRadius: "16px",
                      boxShadow: 3,
                      backgroundColor: "#f1f8e9",
                      transition: "transform 0.3s, box-shadow 0.3s",
                      "&:hover": {
                        boxShadow: 6,
                      },
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="h6"
                        component="h3"
                        sx={{ color: "#388e3c", fontWeight: "bold" }}
                      >
                        {resource.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#616161" }}>
                        {resource.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
      <Footer2 /> {/* Aggiungi il Footer2 qui */}
    </div>
  );
}