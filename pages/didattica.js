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
            <LandingHero
                opacity={0.5}
                siteName="CFP DON BOSCO"
                title="Settore Informatico"
                description="Diventa adulto con il metodo educativo di don Bosco preparandoti ad entrare a testa alta nel mondo professionale di domani!"
                buttonUrl={'https://youtu.be/0Fh458fo8SQ'}
                buttonText="Guarda il video"
                imageUrl="/images/informatico/settore-informatico.jpg"
                menu={menu}
            />

            <Typography variant='h4' sx={{ margin: "20px", marginBottom: "100px" }}>qui ci va il paragrafo di didattica attiva</Typography>
            <Typography variant='subtitle1' sx={{textAlign:"center", margin:"200px"}}>
                Il nostro Centro sta vivendo da alcuni anni un’esperienza di innovazione pedagogica e didattica che si basa su un modello attivo nel quale l’insegnante, da fornitore di conoscenze, diventa facilitatore di processi di ricerca e di interazione significativa.

                Il mondo, noi stessi e gli altri sono le fonti di un processo di apprendimento più ampio, che si concretizza con la ricerca e l’utilizzo di risorse disponibili , in funzione di mandati di lavoro complessi ed interdisciplinari.

                Ai nostri giovani vengono assegnati compiti reali, da svolgere in gruppo, e viene richiesta la produzione di oggetti multimediali che uniscono vari ambiti disciplinari.

                L’adozione del tablet nella didattica e un grande investimento tecnologico nella nostra infrastruttura di rete permettono ai nostri giovani di sperimentare modalità didattiche attive quali la flipped classroom, il cooperative learning, il peer to peer e altro ancora.

                L’utilizzo dell’iPad richiede il rispetto di alcune condizioni, sottoscritte a inizio anno da genitori e giovani.
            </Typography>
        </Layout>


    )
}