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
import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Link from 'next/link'


let menu = [
    { title: 'Chi siamo', url: '/chi-siamo' },
    { title: 'Contatti', url: '/contatti' },
    { title: 'Dove siamo', url: '/dove-siamo' },
    { title: 'Trasparenza', url: '/trasparenza' },
]


export default function Home({ datiArticoli }) {
    return (
        <Layout>
            <LandingHero
                opacity={0.5}
                siteName="CFP DON BOSCO"
                title="Didattica Attiva"
                description="Scopri come gestiamo la nostra didattica "
                buttonUrl={'https://youtu.be/0Fh458fo8SQ'}
                buttonText="Guarda il video"
                imageUrl="https://media-assets.wired.it/photos/615f2e62bce1c5df6ec3bfe6/master/pass/wired_placeholder_dummy.png"
                menu={menu}
            />

            <Box sx={{ marginLeft: '11.5%' }}>
                <br />
                <Typography variant='h4' color="GrayText" sx={{ margin: "20px", marginBottom: "10px" }}>Il progetto iPad</Typography>
                <Typography variant='h6' sx={{ margin: "20px", marginBottom: "30px" }}>Formazione professionale, innovazione e futuro</Typography>
            </Box>
            <center>
                <Box sx={{ width: '75%' }}>
                    <Typography variant='subtitle1' sx={{ textAlign: "justify", marginBottom: "100px" }}>
                        Il nostro Centro sta vivendo da alcuni anni un’esperienza di innovazione pedagogica e didattica che si basa su un modello attivo nel quale l’insegnante, da fornitore di conoscenze, diventa facilitatore di processi di ricerca e di interazione significativa.

                        Il mondo, noi stessi e gli altri sono le fonti di un processo di apprendimento più ampio, che si concretizza con la ricerca e l’utilizzo di risorse disponibili , in funzione di mandati di lavoro complessi ed interdisciplinari.

                        Ai nostri giovani vengono assegnati compiti reali, da svolgere in gruppo, e viene richiesta la produzione di oggetti multimediali che uniscono vari ambiti disciplinari.

                        L’adozione del tablet nella didattica e un grande investimento tecnologico nella nostra infrastruttura di rete permettono ai nostri giovani di sperimentare modalità didattiche attive quali la flipped classroom, il cooperative learning, il peer to peer e altro ancora.

                        L’utilizzo dell’iPad richiede il rispetto di alcune condizioni, sottoscritte a inizio anno da genitori e giovani.
                        <br />
                        <center>
                            <Button sx={{ width: '50%', marginTop: "30px" }} href="/docs/condizioni-uso.pdf">
                                
                                Condizioni d'uso e di servizio per l'utilizzo dell'iPad da parte degli allievi
                            </Button>
                        </center>
                    </Typography>

                </Box>
            </center>
        </Layout>


    )
}