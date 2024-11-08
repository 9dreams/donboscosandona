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
                title="Proposta formativa 24/25"
                description="buoni cristiani e onesti cittadini!"
                buttonUrl={'https://www.youtube.com/watch?v=wyjm1yGmu9g'}
                buttonText="Guarda il video"
                 imageUrl="/images/pastorale/locandina.jpg"
               />

            <Container maxWidth="lg" sx={{ marginTop: '3rem', marginBottom: '3rem' }}>
                
            </Container> 
              
            <div style={{ textAlign: 'center' }}>

  <h3 style={{ fontWeight: 'bold', marginTop: '0px', fontSize: '30px' }}>Proposta educativa 2024|2025</h3>
  <p style={{ fontSize: '20px', color: '#555', marginTop: '0', marginBottom: '10px' }}>
    Scuola di Volo, Scuola di Vita<br/><br/>
    ”Il motore è il cuore di un aereo, ma il pilota è la sua anima.”<br/> 
    Magg. Andrea Rossi - Solista PAN<br/><br/>
    Questa massima ci aiuta a presentare la nostra proposta formativa.<br/><br/>
    Ma che cos'è la proposta formativa?<br/> 
    La proposta formativa è il centro dell’azione educativa. È la modalità con cui ci impegniamo ad educare, formare, animare i giovani della scuola con una molteplicità di iniziative.<br/><br/>
    Buongiorno<br/> 
    Ritiri spirituali ed esperienziali<br/> 
    Attività formative su temi come: Affettività, Volontariato, Amicizia, Dipendenze, Animazione…<br/> 
    Tornei e giochi<br/> 
    Feste<br/> 
    Gite e visite tecniche<br/> 
    Incontri<br/> 
    …e molto altro<br/><br/>
    Ad ispirare la proposta di quest’anno allora, saranno proprio gli aerei!<br/> 
    Abbiamo infatti pensato di metterli sotto i riflettori e di farne metafora utile a riflettere sulla vita di tutti i giorni, naturalmente con ottica cristiana ma con un’attenzione universale.<br/><br/>
    Per formare così:<br/>
    Buoni Cristiani, Onesti Cittadini<br/> 
    e Professionisti Preparati.<br/><br/>
    E allora… Allacciate le cinture, chiudete il tavolino davanti a voi e PREPARIAMOCI al DECOLLO!
  </p>
</div>
           <br/> 
           <br/> 

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
  <a href="https://www.tuo-link.com" target="_blank" rel="noopener noreferrer">
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
  </a>
</div>

        <div>
  <a href="https://skillypig.donboscosandona.it/home/student?course_id=45" target="_blank" rel="noopener noreferrer">
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
  </a>
</div>

        <div>
  <a href="https://www.donboscosandona.it/articoli/201" target="_blank" rel="noopener noreferrer">
    <img 
      src="/images/pastorale/Musica.jpeg" 
      alt="Immagine 3" 
      style={{
        width: '80%',
        height: 'auto',
        borderRadius: '8px'
      }} 
    />
  </a>
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