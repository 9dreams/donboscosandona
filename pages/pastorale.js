import Container from '@mui/material/Container'
import Head from 'next/head'
import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero.js'
import Products from '/components/Products'
import Paragraph from '@/components/Paragraph'
import { Typography } from '@mui/material'


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
                imageUrl="https://www.famigliasalesiana.org/public/Pagine/RETTOR-MAGGIORE.jpg"
               />
                <LandingHero
                opacity={0.1}
                siteName="CFP DON BOSCO"
                imageUrl="/images/pastorale/locandina.jpg"
 />
 

            {/*             <LandingHero
        opacity={0.5}
        siteName="CFP DON BOSCO"
        title="Centro di Formazione Professionale don Bosco"
        description="Diventa adulto con il metodo educativo di don Bosco preparandoti ad entrare a testa alta nel mondo professionale di domani!"
        buttonUrl={'https://www.youtube.com/watch?v=wyjm1yGmu9g'}
        buttonText="Guarda il video"
        imageUrl="/images/privacy/imgsfondo.webp"
        menu={menu}
    /> */}
            <Container maxWidth="lg" sx={{ marginTop: '3rem', marginBottom: '3rem' }}>
                
            </Container> 
              
<Products
        cardWidth={4}
        cardWidthXs={6}
        products={prodotti}
      />

/>
        </Layout>
    )

}

let prodotti = [
    {
     
      immagineUrl:
        '/images/pastorale/timeline.jpg',
    },
    {
      
      immagineUrl:'/images/pastorale/beyou.jpg',
    },
    {
      title: 'Progetto musica',
      description:
        "Installa e configura hardware e software, esegue la manutenzione di sistemi, reti e terminali utente, fornisce assistenza tecnica, effettua l'elaborazione e la manutenzione di dati su archivi digitali. Con il quarto anno in Sistema Duale diventa tecnico sviluppatore di Soluzioni Software.",
      immagineUrl:
        '/images/pastorale/Musica.jpeg',
      url: '/informatico',
    },
  ]
