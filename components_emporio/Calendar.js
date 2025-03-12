import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";
import Image from "next/image";

const cardData = [
  {
    text: `Con la preghiera che questo messaggio venga portato a conoscenza
    di tutte quelle persone che hanno bisogno di un sostegno in questo periodo,
    comunichiamo che l’Emporio Solidale,
    proprio per essere più vicino possibile alle esigenze,
    fornisce il proprio servizio a tutte le persone in difficoltà.
    Chiediamo solo di presentarsi con un documento di riconoscimento.`,
    image:
      "https://www.emporiosolidalebassopiave.it/documents/3870210/3916872/icons8-furto-di-identit%C3%A0-64.png/02ec178a-77c6-55ac-fa3b-c0d4b59d7296?t=1586435212721&imagePreview=1",
    alt: "Carta",
  },
  {
    text: `Per tutti coloro che volessero contribuire e sostenere l’Emporio Solidale
    in questo momento di diffusa difficoltà, riportiamo di seguito i riferimenti per le donazioni:`,
    bankInfo: {
      name: "Ass San Vincenzo de Paoli Conf Santi Liberale e Bartolomea",
      iban: "IT85 V 05034 36282 0000 0000 4178",
      bank: "Banco BMP-San Donà di Piave",
    },
    image:
      "https://www.emporiosolidalebassopiave.it/documents/3870210/3916872/icons8-finanziamenti-comunitari-64.png/b92997be-e5e7-744c-8a48-26151cc9e07f?t=1586435226600&imagePreview=1",
    alt: "Donazioni",
  },
];

export default function Calendar({ title, description }) {
  return (
    <Container maxWidth="lg" sx={{ marginBottom: "2rem" }}>
      <Typography
        component="h3"
        variant="h4"
        color="inherit"
        gutterBottom
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          paddingTop: "20px",
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="subtitle1"
        color="text.secondary"
        paragraph
        sx={{ textAlign: "center", px: 2 }}
      >
        {description}
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Card
                sx={{
                  backgroundColor: "#780202",
                  borderRadius: "0px",
                  boxShadow: 5,
                  padding: "20px",
                  textAlign: "center",
                  height: "420px",
                  transition: "0.3s",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "#fff" }}
                  >
                    {card.text}
                  </Typography>
                  {card.bankInfo && (
                    <>
                      <Typography
                        variant="body1"
                        sx={{ mt: 2, fontWeight: "bold", color: "#fff" }}
                      >
                        {card.bankInfo.name}:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{ color: "#fff", fontWeight: "bold" }}
                      >
                        {card.bankInfo.iban}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mt: 1 }}
                      >
                        {card.bankInfo.bank}
                      </Typography>
                    </>
                  )}
                  <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
                    <Image src={card.image} alt={card.alt} width={50} height={50} />
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

Calendar.defaultProps = {};
