import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

import Head from 'next/head'
import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero2.js'
import Features from '/components/Features'
import Carousel from '/components/Carousel'

import Testimonials from '/components/Testimonials'



import { getDatiArticoli } from '/lib/articoli'
import Paragraph from '@/components/Paragraph'

// I punti di forza
const features = [
]


// slides per il carousel
let slides = [
    {
        titolo: 'Il Laboratorio di energie',
        descrizione: 'il nostro laboratorio di energie ! ',
        immagine: '/images/energie/fotolabidra.JPG'
    },
    {
        titolo: 'I nostri ragazzi al lavoro ',
        descrizione: "3 ragazzi del settore energetico che lavorano nel proprio impianto ",
        immagine: '/images/energie/fotolavoro.JPG'
    },
    {
        titolo: 'Pannello ',
        descrizione: "Un pannello finito ",
        immagine: '/images/energie/fotoimpianto.JPG'
    },
]

let slides2 = slides









export default function Home({ datiArticoli }) {
    return (
        <Layout>
            <Head />
            {

            }
            <LandingHero
                opacity={0.5}
                siteName="CFP DON BOSCO"
                title="SETTORE ENERGIE"
                description="OPERATORE DI IMPIANTI TERMO-IDRAULICI"
                imageUrl="https://www.donboscosandona.it/img/column/33b02f7f8b0e7fe98cd0ea48723c1b75b9b12b18.jpg?1539976223"
            />
            <Features
                title="Qualifica triennale con profilo Regionale : IMPIANTI PER IL RISPARMIO ENERGETICO
                "
                description= ""
                features={features}
                cardWidth={12}
            />
            <Container maxWidth="lg" sx={{ marginTop: '3rem', marginBottom: '3rem' }}>
                <Grid container spacing={4}>
                    {


                    }
                </Grid>
            </Container>
            <Carousel slides={slides} maxWidth={false} />

            <Paragraph
                title="Titolo"
                subtitle="Sottotitolo ( se serve )"
                imageUrl=""
                backgroundColor="#"
                columnCount={1}
                maxWidth="lg"
                sx={{ }}
            >
                Spiegazione energie 
            </Paragraph>

            <Paragraph
               
        
                imageUrl="/images/energie/orarioenergie.png"
                 
            >
            
            </Paragraph>






        </Layout>
    )
}

export async function getStaticProps() {
    const datiArticoli = getDatiArticoli()
    return {
        props: {
            datiArticoli,
        },
    }
}


