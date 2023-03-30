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
                title="Settore Informatico"
                description="Diventa adulto con il metodo educativo di don Bosco preparandoti ad entrare a testa alta nel mondo professionale di domani!"
                buttonUrl={'https://youtu.be/0Fh458fo8SQ'}
                buttonText="Guarda il video"
                imageUrl="/images/informatico/settore-informatico.jpg"
                menu={menu}
            /><br />

            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}>1.1. Don Bosco e il Sistema Preventivo</Typography>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                    San Giovanni Bosco (1815-1888) fu un sacerdote che dedicò la sua vita ai ragazzi senza<br /> famiglia e senza mezzi per offrir loro un posto dignitoso nella società. Cominciando<br /> dal niente e confidando nella Provvidenza, aprì oratori, costruì case, fondò laboratori<br /> e scuole. Le “Scuole<br /> di Arti e Mestieri” nel tempo divennero delle vere “Scuole<br /> Professionali”, ora “Centri di Formazione Professionale”.<br /><br />

                    Don Bosco fu uno tra i primi, nella storia italiana, a stipulare un contratto di<br /> apprendistato. Fu aiutato nella sua impresa da molti benefattori, ma specialmente<br /> dai suoi stessi ragazzi, alcuni dei quali, crescendo, gli chiesero di seguire le sue orme.<br /> Fondò così la “Famiglia salesiana”, un gruppo di consacrati determinati ad “aiutare<br /> ogni giovane a diventare un onesto cittadino e un bravo cristiano” e a tirar su i<br /> giovani come don Bosco era stato cresciuto dalla madre: in una grande famiglia.<br /> Questo metodo di educazione venne detto “Sistema Preventivo” perché la presenza<br /> amica dell’educatore “previene le difficoltà che il giovane incontra” rendendolo<br /> capace di comportarsi bene senza bisogno di punizioni. Tale sistema poggia su tre<br /> cardini fondamentali: ragione, religione e amorevolezza.<br /><br />

                    Con la ragione si promuove il dialogo, la responsabilità e il formarsi di convinzioni<br /> personali che danno un senso alla vita e alle proprie scelte. La religione sviluppa un<br /> atteggiamento filiale verso Dio e solidale verso le necessità dei fratelli.<br /> L'amorevolezza favorisce un ambiente familiare ricco di rispetto e di fiducia, adatto<br /> alla maturazione integrale della persona. Don Bosco voleva che ciascun ragazzo si<br /> sentisse “a casa propria” perché amato, accolto e responsabile del bene comune.<br /><br />

                    Oggi i Salesiani sono presenti con le loro opere in quasi tutti i Paesi del mondo e<br /> continuano con entusiasmo la loro azione educativa per il bene e la formazione delle giovani<br /> generazioni.
                </Typography>
            </Container>


        </Layout>


    )
}