import { Container, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import DownloadIcon from '@mui/icons-material/Download';

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

const extractEmoji = (name) => {
  const emojiRegex = /^(\p{Emoji})/u;
  const match = name.match(emojiRegex);
  return match ? match[1] : '';
};

const getTextWithoutEmoji = (name) => {
  return name.replace(/^\p{Emoji}/u, '').trim();
};

export default function Download() {
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
          <span className="text-red-500">Documenti Utili</span>
        </Typography>
        <Typography
          className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto"
        >
          Qui puoi trovare e scaricare tutti i documenti necessari per accedere ai nostri servizi
        </Typography>
        <div className="w-24 h-1 bg-red-500 mx-auto mt-6"></div>
      </motion.div>

      <Grid container spacing={4}>
        {documents.map((doc, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl h-full">
                {/* Header con emoji */}
                <div className="p-6 text-white relative" style={{
                  background: "linear-gradient(135deg, #780202 0%, #b31217 100%)"
                }}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12" />
                  
                  <div className="relative z-10 flex items-center justify-center mb-4">
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-3xl">
                      {extractEmoji(doc.name)}
                    </div>
                  </div>
                  <Typography variant="h6" className="font-bold relative z-10 line-clamp-2">
                    {getTextWithoutEmoji(doc.name)}
                  </Typography>
                </div>

                {/* Contenuto */}
                <div className="p-6">
                  <Typography className="text-gray-600 mb-6">
                    {doc.description}
                  </Typography>
                  
                  <a
                    href={`/downloads/${doc.file}`}
                    download
                    className="inline-flex items-center gap-2 w-full justify-center px-6 py-3 bg-[#780202] text-white rounded-full
                             hover:bg-[#b31217] transform hover:scale-105 transition-all duration-300
                             shadow-md hover:shadow-lg text-sm font-semibold"
                  >
                    <DownloadIcon />
                    Scarica
                  </a>
                </div>
              </div>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}