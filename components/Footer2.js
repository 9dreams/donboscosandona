// components/Footer2.js

import {
    Container,
    Grid,
    Typography,
    TextField,
    Button,
    Box,
    IconButton,
  } from "@mui/material";
  import FacebookIcon from "@mui/icons-material/Facebook";
  import TwitterIcon from "@mui/icons-material/Twitter";
  import InstagramIcon from "@mui/icons-material/Instagram";
  import { motion } from "framer-motion";
  
  export default function Footer2() {
    return (
      <Box
        sx={{
          backgroundColor: "#f5f5f5", // Sfondo grigio chiaro
          paddingY: 4,
          paddingBottom: 0, // Rimosso il padding inferiore
          borderTop: "5px solid #388e3c", // Bordo verde
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {/* Sezione Informazioni */}
            <Grid item xs={12} md={4}>
              <Typography variant="h6" fontWeight="bold" sx={{ color: "#2e7d32" }}>
                Chi Siamo
              </Typography>
              <Typography variant="body2" paragraph>
                Anffas Nazionale è un'organizzazione che si impegna a difendere i diritti e il benessere delle persone con disabilità intellettive e delle loro famiglie.
              </Typography>
            </Grid>
  
            {/* Sezione Link Utili */}
            <Grid item xs={12} md={4}>
              <Typography variant="h6" fontWeight="bold" sx={{ color: "#2e7d32" }}>
                Link Utili
              </Typography>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Typography component="a" href="/" color="inherit" underline="hover">Home</Typography>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Typography component="a" href="/services" color="inherit" underline="hover">Servizi</Typography>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Typography component="a" href="/events" color="inherit" underline="hover">Eventi</Typography>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Typography component="a" href="/contact" color="inherit" underline="hover">Contatti</Typography>
              </motion.div>
            </Grid>
  
            {/* Sezione Servizi Offerti */}
            <Grid item xs={12} md={4}>
              <Typography variant="h6" fontWeight="bold" sx={{ color: "#2e7d32" }}>
                I Nostri Servizi
              </Typography>
              <Typography variant="body2" paragraph>
                - Tutela dei diritti
                <br />
                - Supporto ai familiari
                <br />
                - Formazione e sensibilizzazione
                <br />
                - Inclusione sociale
              </Typography>
            </Grid>
          </Grid>
  
          {/* Sezione Contatti e Social */}
          <Grid container spacing={4} marginTop={2}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" fontWeight="bold" sx={{ color: "#2e7d32" }}>
                Contatti
              </Typography>
              <Typography variant="body2" paragraph>
                Email: info@anffasnazionale.it
              </Typography>
              <Typography variant="body2">
                Telefono: +39 123 456 789
              </Typography>
              <Box marginTop={2}>
                <IconButton href="https://www.facebook.com/" target="_blank" color="inherit">
                  <FacebookIcon sx={{ color: "#2e7d32" }} />
                </IconButton>
                <IconButton href="https://twitter.com/" target="_blank" color="inherit">
                  <TwitterIcon sx={{ color: "#2e7d32" }} />
                </IconButton>
                <IconButton href="https://www.instagram.com/" target="_blank" color="inherit">
                  <InstagramIcon sx={{ color: "#2e7d32" }} />
                </IconButton>
              </Box>
            </Grid>
  
            {/* Sezione Iscrizione alla Newsletter */}
            <Grid item xs={12} md={6}>
              <Typography variant="h6" fontWeight="bold" sx={{ color: "#2e7d32" }}>
                Iscriviti alla Newsletter
              </Typography>
              <TextField
                label="La tua Email"
                variant="outlined"
                fullWidth
                sx={{ marginTop: 1, backgroundColor: "white" }}
              />
              <Button
                variant="contained"
                sx={{
                  marginTop: 2,
                  backgroundColor: "#2e7d32",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#388e3c",
                    transform: "scale(1.05)",
                  },
                  transition: "transform 0.3s",
                }}
              >
                Iscriviti
              </Button>
            </Grid>
          </Grid>
        </Container>
        <Box
          sx={{
            textAlign: "center",
            marginTop: 4,
            padding: 2,
            backgroundColor: "#e0f2f1", // Sfondo grigio chiaro per il copyright
          }}
        >
          <Typography variant="body2">
            © 2024 Anffas Nazionale. Tutti i diritti riservati.
          </Typography>
        </Box>
      </Box>
    );
  }
  