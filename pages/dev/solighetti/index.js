import React from 'react'
import Features from 'dev/solighetti/Features'
import CssBaseline from '@mui/material/CssBaseline'
import Testimonials from '@/dev/solighetti/Testimonials'

const features = [
  {
    id: 1,
    image: "https://i.ibb.co/JjgJ35G/comment.png",
    title: "Chi siamo",
    description: "Una breve descrizione di chi siamo."
  },
  {
    id: 2,
    image: "https://i.ibb.co/LNkL1hY/shield.png",
    title: "Cosa facciamo",
    description: "Una breve descrizione di cosa facciamo"
  },
  {
    id: 3,
    image: "https://i.ibb.co/f4sGXQp/fingerprint.png",
    title: "Contattaci",
    description: "I nostri contatti"
  }
]

const testimonials = [
  {
    name: "Gigi Thompson",
    image: "https://i.ibb.co/4MQnQw0/img1.jpg",
    text: "Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione ",
    social: "@GIGITHOMPSON"
  },
  {
    image: "https://i.ibb.co/QPG6j9b/img2.jpg",
    name: "Gina Andrew",
    text: "Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione ",
    social: "@GINAANDREW"
  },
  {
    image: "https://i.ibb.co/dpQrpNt/img3.jpg",
    name: "Pino West",
    text: "Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione ",
    social: "@PINOWEST"
  },
]

function HomePage() {
  return (
    <div>
      <CssBaseline />

      <Features
        title="I nostri punti di forza"
        description="Una scuola per tutti i gusti"
        features={features}
        cardWidth={4}
      />
      <Testimonials testimonials={testimonials} />
    </div>
  );
}

export default HomePage;
