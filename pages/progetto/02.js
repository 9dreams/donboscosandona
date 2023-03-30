import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'


import Head from 'next/head'
import Image from 'next/image'
import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero.js'
import Features from '/components/Features'
import Carousel from '/components/Carousel'
import PostInEvidenza from '/components/PostInEvidenza'
import Products from '/components/Products'
import Testimonials from '/components/Testimonials'
import Team from '/components/Team'
import Post from '/components/Post'
import { Typography } from '@mui/material'




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
                title="I soggetti"
                description="La comunità educativa pastorale"
                buttonUrl={'https://youtu.be/0Fh458fo8SQ'}
                buttonText="Guarda il video"
                imageUrl="/images/informatico/settore-informatico.jpg"
                menu={menu}
            /><br />


            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h3" sx={{ color: 'text.secondary' }}>2. I SOGGETTI: LA COMUNITÀ’ EDUCATIVA PASTORALE</Typography>
            </Container><br/><br/>

            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}>Una comunità che educa</Typography>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                    La Comunità Educativa Pastorale (CEP) è la modalità tipicamente salesiana di<br /> animare una qualunque realtà educativa. E’ composta da:<br /><br />

                    - i giovani, punto di riferimento fondamentale dell’azione educativa;<br /><br />

                    -  la comunità salesiana, garante dell'identità salesiana e centro di comunione<br /> e partecipazione;<br /><br />

                    -  i formatori, religiosi e laici;<br /><br />

                    -  i genitori, primi e principali responsabili dell’educazione dei figli;<br /><br />

                    -  i laici, a vario titolo responsabili e collaboratori.
                </Typography>
            </Container><br /><br />


            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}>Gli allievi</Typography>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                    Gli allievi sono i protagonisti primari del cammino formativo che prevede percorsi,<br /> attività ed iniziative atte a farli crescere nella capacità relazionale; trovano risposta<br /> all’esplicita domanda di una seria preparazione culturale e professionale e a quella<br /> più implicita sul senso della vita.
                </Typography>
            </Container><br /><br />

            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}>La comunità religiosa</Typography>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                    La comunità religiosa è parte essenziale del nucleo animatore e di governo della<br /> CEP; offre la testimonianza di chi fa la scelta evangelica in forma radicale attraverso la<br /> professione religiosa, dedicando intelligenza, energie, creatività e vita al servizio dei<br /> giovani nello stile del Sistema Preventivo di don Bosco.
                </Typography>
            </Container><br /><br />

            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}>Gli educatori</Typography>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                    Gli educatori insegnano, “assistono”, lavorano, studiano e pregano insieme con gli<br /> alunni testimoniando una professionalità educativa che favorisce l’interiorizzazione<br /> dei valori.
                </Typography>
            </Container><br /><br />

            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}>I genitori</Typography>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                    I genitori sono i diretti responsabili della crescita dei figli. A loro compete dialogare<br /> con gli educatori/formatori e partecipare, tramite gli organi collegiali, alla vita della<br /> scuola/CFP nei momenti di programmazione, di revisione educativa e di impegno<br /> nelle attività di tempo libero.
                </Typography>
            </Container><br /><br />


            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}>Il personale ausiliario/amministrativo</Typography>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                    Il personale ausiliario/amministrativo contribuisce all’azione educativa in particolare<br /> attraverso la cura dell’ambiente, lo stile relazionale e il buon funzionamento logistico<br /> e organizzativo.
                </Typography>
            </Container><br /><br />

        </Layout>


    )
}