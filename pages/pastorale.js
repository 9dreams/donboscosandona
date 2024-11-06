import Container from '@mui/material/Container'
import Head from 'next/head'
import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero.js'
import Products from '/components/Products'
import Paragraph from '@/components/Paragraph'
import { Typography } from '@mui/material'
import Image from 'next/image';


// Voci del menù per il componente LandingHero

let menu = [
    { title: 'Chi siamo', url: '/chi-siamo' },
    { title: 'Contatti', url: '/contatti' },
    { title: 'Dove siamo', url: '/dove-siamo' },
    { title: 'Trasparenza', url: '/trasparenza' },
]






let pastorale = [
    {
        title: "",
        category: "",
        description: "",
        immagineUrl: "",
        url: ""
    },
    {
        title: "",
        category: "",
        description: "",
        immagineUrl: "",
        url: ""
    },
    {
        title: "",
        category: "",
        description: "",
        immagineUrl: "",
        url: ""
    },
]




export default function Home() {
    return (
        <Layout>
            <Head />
            <LandingHero
                opacity={0.5}
                siteName="CFP DON BOSCO"
                title="Centro Pastorale"
                description="Per diventare come insegna don Bosco ''buoni cristiani e onesti cittadini!''"
                buttonUrl={'https://www.youtube.com/watch?v=wyjm1yGmu9g'}
                buttonText="Guarda il video"
                 imageUrl="/images/pastorale/locandina.jpg"
               />

            <Container maxWidth="lg" sx={{ marginTop: '3rem', marginBottom: '3rem' }}>
                
            </Container> 
              

            <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '50vh',
      margin: 0,
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center', 
        width: '80%',
        textAlign: 'center',
      }}>
        <div>
          <img 
            src="/images/pastorale/timeline.jpg" 
            alt="Immagine 1" 
            style={{
              width: '50%',
              height: 'auto',
              borderRadius: '8px'
            }} 
          />
          <h3 style={{ fontWeight: 'bold', marginTop: '10px' }}>Timeline</h3>
        </div>

        <div>
          <img 
            src="/images/pastorale/beyou.jpg" 
            alt="Immagine 2" 
            style={{
              width: '65%',
              height: 'auto',
              borderRadius: '8px'
            }} 
          />
          <h3 style={{ fontWeight: 'bold', marginTop: '10px' }}>be you</h3>
        </div>

        <div>
          <img 
            src="/images/pastorale/Musica.jpeg" 
            alt="Immagine 3" 
            style={{
              width: '80%',
              height: 'auto',
              borderRadius: '8px'
            }} 
          />
          <h3 style={{ fontWeight: 'bold', marginTop: '10px' }}>progetto musica</h3>
          <p style={{ fontSize: '14px', color: '#555' }}>Il progetto Musica offre corsi gratuiti per imparare le basi di uno strumento musicale, rendendo l'accesso alla musica possibile per tutti. Un'opportunità per sviluppare competenze e passione, senza costi.</p>
        </div>
        </div>
        </div>

<div style={styles.container}>
      <img 
        src="/images/pastorale/Partner.png" 
        alt="Immagine centrata" 
        style={styles.image} 
      />
    </div>
        </Layout>
    )

}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh',
    margin: 0,
  },
  image: {
    maxWidth: '170%',
    height: 'auto',
  },
}