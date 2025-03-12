import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import { motion } from 'framer-motion';

const documents = [
  { name: '🤝 Le occasioni di volontariato', file: 'volontariato.pdf' },
  { name: '🛒 Lista dei prodotti alimentari', file: 'lista_prodotti.pdf' },
  { name: '📍 Dove siamo', file: 'dove_siamo.pdf' },
  { name: '📆 I giorni di apertura', file: 'giorni_apertura.pdf' },
  { name: '🛤️ Le fasi di accompagnamento', file: 'fasi_accompagnamento.pdf' },
  { name: '📚 Casella dello storico dell’ente', file: 'storico_ente.pdf' },
  { name: '📑 Esempi di curriculum', file: 'esempi_curriculum.pdf' },
  { name: '🎟️ Tessera e punti in base ai familiari', file: 'tessera_punti.pdf' },
  { name: '🛍️ Spesa con punti (carrello)', file: 'spesa_carrello.pdf' },
];

export default function Download() {
  return (
    <Container maxWidth="md" sx={{ textAlign: 'center', mb: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3, color: 'red' }}>
          📥 Scarica i Documenti Utili
        </Typography>
        <Typography variant="subtitle1" sx={{ color: 'gray', mb: 5 }}>
          Clicca sui pulsanti per scaricare i file necessari.
        </Typography>
      </motion.div>
      <Grid container spacing={3} justifyContent="center">
        {documents.map((doc, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Card sx={{ p: 3, textAlign: 'center', boxShadow: 3, borderRadius: 3 }}>
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                    {doc.name}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: 'red',
                      color: 'white',
                      fontWeight: 'bold',
                      borderRadius: '50px',
                      px: 3,
                      py: 1.5,
                      boxShadow: 2,
                      '&:hover': { backgroundColor: 'darkred' },
                    }}
                    startIcon={<DownloadIcon />}
                    href={`/downloads/${doc.file}`}
                    download
                    aria-label={`Scarica ${doc.name}`}
                  >
                    Scarica
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
