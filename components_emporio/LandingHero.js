import React from "react";
import { Container, Grid, Paper, Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

export default function LandingHero({ imageUrl, imageMobileUrl, opacity, title, description, buttonUrl, buttonText }) {
  return (
    <Container maxWidth disableGutters sx={{ height: "100vh", width: "100%" }}>
      <Paper
        sx={{
          position: "relative",
          color: "#fff",
          height: "100vh",
          backgroundImage: `url(${imageMobileUrl || imageUrl})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 1s ease-in-out",
        }}
      >
        {/* Overlay scuro per migliorare leggibilità */}
        <Box sx={{ 
          position: "absolute", 
          top: 0, 
          bottom: 0, 
          right: 0, 
          left: 0, 
          backgroundColor: `rgba(0,0,0,${opacity})`, 
          zIndex: 1
        }} />

        {/* Contenuto principale */}
        <Grid container sx={{ height: "100%", alignItems: "center", justifyContent: "center" }}>
          <Grid item md={8} xs={10} sx={{ textAlign: "center" }}>
            {/* Titolo con z-index maggiore per stare sopra alla box */}
            <motion.div initial={{ y: -20 }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
              <Typography
                component="h1"
                variant="h3"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "2.5rem", sm: "3.5rem" },
                  lineHeight: 1.2,
                  textShadow: "2px 2px 10px rgba(0,0,0,0.7)",
                  zIndex: 2,
                  position: "relative",
                }}
              >
                {title}
              </Typography>
            </motion.div>

            {/* Descrizione con animazione e maggiore opacità */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}>
              <Typography 
                component="h5" 
                sx={{ 
                  fontSize: "1.1rem", 
                  letterSpacing: "1px", 
                  zIndex: 2,
                  position: "relative",
                }}
              >
                {description}
              </Typography>
            </motion.div>

            {/* Pulsante opzionale con animazione e maggiore opacità */}
            {buttonUrl && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }}>
                <Button
                  variant="contained"
                  size="large"
                  href={buttonUrl}
                  sx={{
                    marginTop: "1rem",
                    borderRadius: "2rem",
                    paddingX: "3rem",
                    transition: "all 0.3s ease",
                    backgroundColor: "#780202",
                    "&:hover": { backgroundColor: "#5a0101", transform: "scale(1.05)" },
                    zIndex: 2,
                  position: "relative", 
                  }}
                >
                  {buttonText}
                </Button>
              </motion.div>
            )}
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
