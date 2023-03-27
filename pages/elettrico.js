import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

import Head from 'next/head'
import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero2.js'
import Features from '/components/Features'
import Carousel from '/components/Carousel'
import PostInEvidenza from '/components/PostInEvidenza'
import Products from '/components/Products'
import Testimonials from '/components/Testimonials'
import Team from '/components/Team'
import Post from '/components/Post'


// Voci del menù per il componente LandingHero
let menu = [
    { title: 'Chi siamo', url: '/chi-siamo' },
    { title: 'Contatti', url: '/contatti' },
    { title: 'Dove siamo', url: '/dove-siamo' },
    { title: 'Trasparenza', url: '/trasparenza' },
]



//inizio icone 
const features = [
    {
        title: "installazione e manutenzione ",
        image: "/images/elettrico/download.png",
        description: "Interviene nell’installazione e manutenzione di impianti civili ed industriali"
    },
    {
        title: "Domotica",
        image: "https://www.casazerlini.it/storage/app/media/appartamenti/icone/domotica.png",
        description: "Realizza la programmazione dei componenti domotici e dei controllori programmabili"
    },
    {
        title: "Laboratori",
        image: "/images/elettrico/4211847-icona-cacciavite-costruzione-gratuito-vettoriale.jpg",
        description: "Esegue i disegni al CAD con la distribuzione dei componenti"
    },

]

//fine icone 

//inizio carousel
let slides = [
    {
        titolo: 'Fatti un bel giro',
        descrizione: 'Scopri tutti i segreti del nostro Centro con il tour virtuale!',
        immagine: '/images/elettrico/IMG_9702.JPG'
    },
    {
        titolo: 'Aula cad ',
        descrizione: "Questa è l'aula di cad del settore elettrico con a disposizione molti computer per tutti i lavori di cad e Spac ",
        immagine: '/images/elettrico/IMG_9721--.JPG'
    },
    {
        titolo: "",
        descrizione: "Il 15 e 16 maggio il nostro Centro ospiterà l'edizione 2023 di GIVE (GROHE Installer Vocational Training and Education), il programma di formazione dedicato ai giovani installatori idraulici: un ambiente dedicato al training pratico proposto dai professionisti di GROHE.",
        immagine: '/images/elettrico/IMG_9725.JPG'
    },
]

let slides2 = slides
// fine carousel 

//layout
export default function Elettrico() {
    return (
        <Layout>
            <Head />
            {

            }
            <LandingHero
                opacity={0.5}
                siteName="CFP DON BOSCO"
                title="Settotre Elettrico"
                description="OPERATORE ELETTRICO"
                buttonUrl={'https://www.youtube.com/watch?v=wyjm1yGmu9g'}
                buttonText="Guarda il video"
                imageUrl="/images/elettrico/elet1.jpg"
                menu={menu}

            />

            <Features
                title="Qualifica triennale"
                description=""
                features={features}
                cardWidth={4
                }
            />
            <Carousel slides={slides} maxWidth={false} />

            <center><img src="/images/elettrico/Screenshot 2023-03-27 090952...png" /></center>
            <center><img src="/images/elettrico/9957d0b12e8146011f93c1de45aaf2012a2d30fa.png" /></center>



        </Layout>
    )
}