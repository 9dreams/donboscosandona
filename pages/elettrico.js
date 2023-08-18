import Grid from '@mui/material/Grid'
import Paragraph from '@/components/Paragraph'

import Head from 'next/head'
import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero2.js'
import Features from '/components/Features'
import Carousel from '/components/Carousel'

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
        imageUrl: "/images/elettrico/download.png",
        description: "Interviene nell’installazione e manutenzione di impianti civili ed industriali"
    },
    {
        title: "Domotica",
        imageUrl: "https://www.casazerlini.it/storage/app/media/appartamenti/icone/domotica.png",
        description: "Realizza la programmazione dei componenti domotici e dei controllori programmabili"
    },
    {
        title: "Laboratori",
        imageUrl: "/images/elettrico/4211847-icona-cacciavite-costruzione-gratuito-vettoriale.jpg",
        description: "Esegue i disegni al CAD con la distribuzione dei componenti"
    },

]

//fine icone 

//inizio carousel
let slides = [
    {
        titolo: ' lavoro!',
        descrizione: 'Uno dei nostri studenti a lavoro, che opera sul suo pannello personale ',
        immagine: '/images/elettrico/IMG_9702.JPG'
    },
    {
        titolo: 'Aula domotica ',
        descrizione: "Questa è l'aula di domotica del settore elettrico con a disposizione molti computer per tutti i lavori di progettazione domotica ",
        immagine: '/images/elettrico/IMG_9721--.JPG'
    },
    {
        titolo: "Laboratorio Elettrico",
        descrizione: "Queste sono le aule per tutti i nostri futuri elettricisti, con atrezzi e strumentazioni molto professionali ",
        immagine: '/images/elettrico/IMG_9717.JPG'
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
                title="Settore Elettrico"
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
            <Carousel slides={slides} maxWidth={false} height={90} />

            <center><img src="/images/elettrico/Screenshot 2023-03-27 090952...png" /></center>
            <center><img src="/images/elettrico/9957d0b12e8146011f93c1de45aaf2012a2d30fa.png" /></center>
            <Grid
                style={{ marginBottom: '100px'}}
            >
                <Paragraph
                    title="La voce ai formatori del settore ELETTRICO:"
                    backgroundColor="rgb(240,240,240)"
                    columnCount={1}
                    maxWidth="lg"
                >
                    «Caposaldo del C.F.P. don Bosco è il settore elettrico; la maggior parte degli imprenditori che si occupano di impianti elettrici lo conosce direttamente, come ex-allievo, o perché ha assunto chi ha conseguito la qualifica in questo ambito.

                    Sviluppato in tre ampi laboratori ognuno dei quali è seguito da docenti preparati e abilitati che continuamente si aggiornano per poter preparare al meglio lo sviluppo delle competenze professionali dei ragazzi.

                    La qualifica è articolata in modo da conoscere e saper realizzare gli impianti elettrici ovvero illuminazione, antenna TV, citofoni e videocitofoni; comando di motori elettrici; automazione con plc per realizzare e monitorare cicli di lavoro industriali; domotica e building automation; supervisione e controllo dell’impianto tramite smartphone o tablet; il tutto con l’ausilio di attrezzature e programmi sempre aggiornati.

                    L’obiettivo principale è quello di sviluppare la capacità di ragionamento: questo ha permesso a molti allievi del settore elettrico di inserirsi nel mondo del lavoro rispondendo adeguatamente alle richieste dell’azienda e ad altri di proseguire gli studi sino all’università».
                </Paragraph>
            </Grid>

        </Layout>
    )
}