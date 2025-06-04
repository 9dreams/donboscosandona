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
    comunichiamo che l'Emporio Solidale,
    proprio per essere più vicino possibile alle esigenze,
    fornisce il proprio servizio a tutte le persone in difficoltà.
    Chiediamo solo di presentarsi con un documento di riconoscimento.`,
    image:
      "https://cdn-icons-png.flaticon.com/512/7816/7816094.png",
    alt: "Preghiera",
  },
  {
    text: `Per tutti coloro che volessero contribuire e sostenere l'Emporio Solidale
    in questo momento di diffusa difficoltà, riportiamo di seguito i riferimenti per le donazioni:`,
    bankInfo: {
      name: "Ass San Vincenzo de Paoli Conf Santi Liberale e Bartolomea",
      iban: "IT85 V 05034 36282 0000 0000 4178",
      bank: "Banco BMP-San Donà di Piave",
    },
    image:
      "https://cdn-icons-png.flaticon.com/512/10766/10766857.png",
    alt: "Donazioni",
  },
];

export default function Calendar({ description }) {
  return (
    <Container maxWidth="lg" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <Typography
          component="h2"
          className="text-4xl md:text-5xl font-bold mb-6"
          sx={{ color: "#780202" }}
        >
          <span className="text-black"><span className="text-red-500">Avvisi</span> Importanti</span>
        </Typography>
        <Typography
          className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto"
        >
          {description}
        </Typography>
        <div className="w-24 h-1 bg-red-500 mx-auto mt-6"></div>
      </motion.div>

      <Grid container spacing={4} justifyContent="center">
        {cardData.map((card, index) => (
          <Grid item xs={12} md={6} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <Card className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl h-full">
                {/* Header con gradiente e forme decorative */}
                <div className="p-6 text-white relative" style={{
                  background: "linear-gradient(135deg, #780202 0%, #b31217 100%)"
                }}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12" />
                  
                  {/* Icona */}
                  <div className="relative z-10 flex items-center justify-center mb-4">
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center p-2">
                      <Image
                        src={card.image}
                        alt={card.alt}
                        width={40}
                        height={40}
                      />
                    </div>
                  </div>

                  {/* Testo principale */}
                  <Typography
                    variant="h6"
                    className="relative z-10 text-lg font-semibold mb-4 leading-relaxed"
                  >
                    {card.text}
                  </Typography>

                  {/* Informazioni bancarie se presenti */}
                  {card.bankInfo && (
                    <div className="relative z-10 mt-6 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                      <Typography className="font-bold text-lg mb-2">
                        {card.bankInfo.name}
                      </Typography>
                      <Typography className="font-mono text-xl mb-2 tracking-wider">
                        {card.bankInfo.iban}
                      </Typography>
                      <Typography className="text-gray-200">
                        {card.bankInfo.bank}
                      </Typography>
                    </div>
                  )}
                </div>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

Calendar.defaultProps = {};
