import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { motion } from 'framer-motion';

// Dati delle sezioni per rendere il codice più pulito e dinamico
const sections = [
  { title: 'Corso di cucito', linkText: 'Vai al corso', linkHref: '#' },
  { title: 'Economia domestica', linkText: 'Approfondimenti', linkHref: '#' },
  { title: 'Centro di ascolto', linkText: 'Presentazione del servizio', linkHref: '#' },
];

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: '#780202', py: 6, color: 'white' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          {sections.map((section, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                {section.title}
              </Typography>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Link href={section.linkHref} color="#00bcd4" underline="none" sx={{ transition: '0.3s' }}>
                  {section.linkText}
                </Link>
              </motion.div>
            </Grid>
          ))}

          {/* Contatti */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Contatti
            </Typography>
            <Typography variant="body2">
              e-mail:{' '}
              <Link href="mailto:emporiosolidalebassopiave@gmail.com" color="#00bcd4">
                emporiosolidalebassopiave@gmail.com
              </Link>
            </Typography>
            <Typography variant="body2">Fax e Telefono: 0421-332697</Typography>
            <Typography variant="body2">Cellulare: 344 3851626</Typography>
          </Grid>
        </Grid>

        {/* Testo Footer */}
        <Box sx={{ textAlign: 'center', mt: 4, opacity: 0.8 }}>
          <Typography variant="body2">
            Emporio Solidale del Basso Piave - San Donà di Piave (VE)
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
