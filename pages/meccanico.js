import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

import Head from 'next/head'
import Image from 'next/image'
import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero2.js'
import Features from '/components/Features'
import Carousel from '/components/Carousel'
import PostInEvidenza from '/components/PostInEvidenza'
import Products from '/components/Products'
import Testimonials from '/components/Testimonials'
import Team from '/components/Team'
import Post from '/components/Post'
import { Typography } from '@mui/material'

import { getDatiArticoli } from '/lib/articoli'

let menu = [
    { title: 'Chi siamo', url: '/chi-siamo' },
    { title: 'Contatti', url: '/contatti' },
    { title: 'Dove siamo', url: '/dove-siamo' },
    { title: 'Trasparenza', url: '/trasparenza' },
]

let slides = [
    {
        titolo: 'Fatti un bel giro',
        descrizione: 'Scopri tutti i segreti del nostro Centro con il tour virtuale!',
        immagine: '/images/informatico/carousel1.jpg'
    },
    {
        titolo: 'Progetto GIVE',
        descrizione: "Il 15 e 16 maggio il nostro Centro ospiterà l'edizione 2023 di GIVE (GROHE Installer Vocational Training and Education), il programma di formazione dedicato ai giovani installatori idraulici: un ambiente dedicato al training pratico proposto dai professionisti di GROHE.",
        immagine: '/images/informatico/carousel2.jpg'
    },
    {
        titolo: 'Concorso nazionale settore elettrico',
        descrizione: "A maggio il nostro Centro avrà l'onore di ospitare il Concorso Nazionale del Settore Elettrico: tutti i Centri di Formazione Professionale salesiani d'Italia invieranno i loro campioni per una settimana di sfida e condivisione professionale...",
        immagine: '/images/informatico/carousel3.jpg'
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
                title="Settore Meccanico"
                description="L’operatore meccanico realizza lavorazioni al tornio, fresatrice e macchine utensili in generale. Partendo dal progetto realizzato con il CAD effettua la programmazione delle macchine a controllo numerico. Realizza saldature ad arco, TIG, MAG, taglio al plasma."
                buttonUrl={'https://www.youtube.com/watch?v=wyjm1yGmu9g'}
                buttonText="Guarda il video"
                imageUrl="/images/meccanico/settore-meccanico.jpg"
            />

            <Container sx={{ py: 8 }}>
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={7}>
                        <Typography variant="h4"sx={{textAlign: 'center'}} gutterBottom>
                            OPERATORE MECCANICO
                        </Typography>
                        <Typography variant="h5" sx={{textAlign: 'center', color: 'blue' }}>Qualifica triennale</Typography>
                        <Typography variant="h6" sx={{ textAlign: 'center',color: 'text.secondary' }}>
                            <li>Realizza lavorazioni al tornio, fresatrice e<br /> macchine utensili in generale, partendo da<br /> un disegno realizzato con il CAD<br /></li>
                            <li>Effettua la programmazione delle<br /> macchine a controllo numerico con il CAD-<br />CAM<br /></li>
                            <li>Realizza saldature ad arco, TIG, MAG,<br /> ossiacetilenica, effettua il taglio al plasma<br /> programmando la saldatrice a controllo<br /> numerico<br /></li>
                            <li>Effettua disegni al CAD e modellazioni<br /> solide tridimensionali di componenti<br /> meccanici<br /></li></Typography>
                        <br />
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Image src="/images/meccanico/operatore-meccanico.png" alt="" width={630} height={410} />
                    </Grid>
                </Grid>
            </Container>



            <Typography variant="h3" sx={{ textAlign: 'center',color: 'text.secondary' }}>
                TECNICO PER LA CONDUZIONE E LA MANUTENZIONE DI IMPIANTI AUTOMATIZZATI
            </Typography>

            <Typography variant="h5" sx={{ textAlign: 'center',color: 'blue' }}>

                Diploma Professionale Quadriennale in Sistema Duale.

            </Typography>

            <Typography variant="h6" sx={{ textAlign: 'center',color: 'text.secondary' }}>
                <li>Produce la documentazione di appoggio e di avanzamento relativa a lavorazioni, manutenzioni e<br /> installazioni</li>
            </Typography>
            <Typography variant="h6" sx={{textAlign: 'center', color: 'text.secondary' }}>
                <li>Provvede al monitoraggio, verifica e controllo del funzionamento di impianti automatizzati,<br /> effettuando interventi di cura, assistenza e ripristino</li>
            </Typography>
            <br />

            <br /><br />

            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image
                    src="/images/meccanico/laboratorio.jpg"
                    alt=""
                    width={1920}
                    height={750}
                    sx={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }}
                />
            </Container><br /><br />

            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image
                    src="/images/meccanico/tabella-ore.png"
                    alt=""
                    width={1920}
                    height={1500}

                />
            </Container><br /><br /><br /><br />

            <Typography variant="h5" sx={{ textAlign: 'center', color: 'black' }}> La voce ai formatori del settore MECCANICO: </Typography>

            <Typography variant="body1" sx={{ textAlign: 'center', color: 'text.secondary' }}>
                «Il Settore Meccanico è presente nel Centro di Formazione Salesiano “Don Bosco” fin<br /> dal 1957, ossia fin dalla fondazione dell’Istituto stesso, nell’ambito della Formazione Professionale.<br /><br />

                Da noi tutto ruota intorno alla persona del ragazzo, posto al centro del sistema formativo denominato<br /> da Don Bosco stesso “preventivo”, orientato a soddisfare non solo le esigenze di formazione<br /> professionale, ma anche a contribuire alla sua crescita integrale: culturale, sociale, etica, religiosa.<br /><br />

                La qualifica di operatore meccanico alle macchine utensili, in continua relazione con le principali<br /> Associazioni di categoria ed Ordini professionali ed in collaborazione con le principali aziende di<br /> settore, con la sua preparazione offre al territorio una figura professionale in costante formazione e<br />aggiornamento rispetto all’evoluzione tecnologica e normativa.<br /><br />

                È una figura professionale in grado di eseguire, su precise indicazioni, la lavorazione, la costruzione,<br /> l’assemblaggio e la revisione di particolari meccanici. Opera utilizzando macchine utensili tradizionali,<br /> semiautomatiche o a controllo numerico in aziende di produzione manifatturiera del settore<br /> meccanico di grande, media e piccola dimensione e a livello artigianale.<br /><br />

                Nel nostro centro potrai, attraverso laboratori attrezzati, ottenere una preparazione professionale<br /> tecnico-pratica sulle diverse fasi produttive:<br /><br />

                <li>Collaborare con la direzione della produzione per calcolare e monitorare i tempi e i metodi della<br /> produzione.</li>
                <li>Programmare macchine utensili a Controllo Numerico utilizzando linguaggi macchina e sistemi<br /> CAD/CAM.</li>
                <li>Provvedere al monitoraggio, verifica e controllo del funzionamento di impianti automatizzati.<br />
                    Intervenire con competenza nel controllo di qualità del prodotto».</li>
            </Typography>


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
