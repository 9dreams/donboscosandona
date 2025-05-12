import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import { motion } from 'framer-motion';

const documents = [
  { name: '🤝 Le occasioni di volontariato', file: 'volontariato.pdf', description: 'Scopri come puoi aiutare la nostra comunità' },
  { name: '🛒 Lista dei prodotti alimentari', file: 'lista_prodotti.pdf', description: 'Catalogo completo dei prodotti disponibili' },
  { name: '📍 Dove siamo', file: 'dove_siamo.pdf', description: 'Indicazioni per raggiungerci facilmente' },
  { name: '📆 I giorni di apertura', file: 'giorni_apertura.pdf', description: 'Orari e giorni in cui siamo operativi' },
  { name: '🛤️ Le fasi di accompagnamento', file: 'fasi_accompagnamento.pdf', description: 'Come funziona il nostro percorso di supporto' },
  { name: '📚 Casella dello storico dell\'ente', file: 'storico_ente.pdf', description: 'La nostra storia e i nostri valori' },
  { name: '📑 Esempi di curriculum', file: 'esempi_curriculum.pdf', description: 'Modelli utili per la ricerca di lavoro' },
  { name: '🎟️ Tessera e punti in base ai familiari', file: 'tessera_punti.pdf', description: 'Come funziona il nostro sistema a punti' },
  { name: '🛍️ Spesa con punti (carrello)', file: 'spesa_carrello.pdf', description: 'Guida all\'utilizzo dei punti per la spesa' },
];

// Funzione per estrarre l'emoji dal nome del documento
const extractEmoji = (name) => {
  const emojiRegex = /^(\p{Emoji})/u;
  const match = name.match(emojiRegex);
  return match ? match[1] : '';
};

// Funzione per ottenere il testo senza emoji
const getTextWithoutEmoji = (name) => {
  return name.replace(/^\p{Emoji}/u, '').trim();
};

export default function Download() {
  return (
    <Container maxWidth="lg" className="py-12">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <Typography 
          variant="h3" 
          component="h1" 
          className="mb-6"
          sx={{ 
            fontWeight: 'bold', 
            color: '#780202',
            position: 'relative',
            display: 'inline-block',
            '&::after': {
              content: '""',
              position: 'absolute',
              width: '60px',
              height: '4px',
              backgroundColor: '#780202',
              bottom: '-10px',
              left: 'calc(50% - 30px)'
            }
          }}
        >
          Documenti Utili
        </Typography>
        <Typography 
          variant="h6" 
          sx={{ 
            color: '#555', 
            maxWidth: '700px', 
            margin: '0 auto',
            mt: 4
          }}
        >
          Qui puoi trovare e scaricare tutti i documenti necessari per accedere ai nostri servizi
        </Typography>
      </motion.div>

      <Grid container spacing={4}>
        {documents.map((doc, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card 
                sx={{ 
                  height: '100%',
                  minHeight: '425px',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(44,82,130,0.2)',
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(0,0,0,0.05)',
                  background: 'linear-gradient(to bottom, #ffffff, #f5f9ff)'
                }}
              >
                <div style={{ 
                  background: 'linear-gradient(135deg, #2c5282 0%, #1a365d 100%)',
                  padding: '28px 15px',
                  textAlign: 'center',
                  borderBottom: '4px solid rgba(255,255,255,0.3)',
                  position: 'relative',
                  overflow: 'hidden',
                  minHeight: '200px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {/* Elemento decorativo */}
                  <div style={{
                    position: 'absolute',
                    top: '-15px',
                    right: '-15px',
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.1)',
                    zIndex: 1
                  }}></div>
                  
                  {/* Emoji con sfondo rotondo */}
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    backgroundColor: '#f8f9fa',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '12px',
                    fontSize: '24px',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
                  }}>
                    {extractEmoji(doc.name)}
                  </div>
                  
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      fontWeight: 'bold', 
                      color: 'white',
                      textShadow: '1px 1px 3px rgba(0,0,0,0.4)',
                      letterSpacing: '0.5px',
                      position: 'relative',
                      zIndex: 2
                    }}
                  >
                    {getTextWithoutEmoji(doc.name)}
                  </Typography>
                </div>
                
                <CardContent sx={{ 
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  p: 4,
                  pb: 4,
                  background: 'linear-gradient(145deg, #ffffff, #f8fbff)'
                }}>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      mb: 4,
                      color: '#333',
                      textAlign: 'center',
                      fontSize: '1.1rem',
                      lineHeight: 1.6,
                      fontWeight: 500
                    }}
                  >
                    {doc.description}
                  </Typography>
                  
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      backgroundColor: '#2c5282',
                      color: 'white',
                      fontWeight: 'bold',
                      borderRadius: '50px',
                      py: 2,
                      mt: 2,
                      boxShadow: '0 6px 15px rgba(44,82,130,0.3)',
                      position: 'relative',
                      overflow: 'hidden',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: '-100%',
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                        transition: 'all 0.6s ease',
                      },
                      '&:hover': { 
                        backgroundColor: '#1a365d',
                        transform: 'translateY(-4px)',
                        boxShadow: '0 10px 20px rgba(44,82,130,0.4)',
                        '&::before': {
                          left: '100%',
                        }
                      },
                      fontSize: '1.1rem',
                      letterSpacing: '0.8px',
                      textTransform: 'none',
                      transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                    }}
                    startIcon={<DownloadIcon sx={{ fontSize: '1.4rem' }} />}
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
