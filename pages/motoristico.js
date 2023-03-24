import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'


import Head from 'next/head'
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
    { title: 'Chi siamo', url: 'https://www.donboscosandona.it/1-identita-del-centro-salesiano' },
    { title: 'News', url: 'https://www.donboscosandona.it/search?t=a&q=' },
    { title: 'Gallery', url: 'https://www.donboscosandona.it/search?t=f&q=' },
    { title: 'Contatti', url: 'https://www.donboscosandona.it/search?t=f&q=' },
    { title: 'Dove siamo', url: 'https://www.donboscosandona.it/dove-siamo' },
    { title: 'Trasparenza', url: 'https://www.donboscosandona.it/trasparenza' },
]

let slides = [
    {
        titolo: 'Fatti un bel giro',
        descrizione: 'Scopri tutti i segreti del nostro Centro con il tour virtuale!',
        immagine: '/images/motoristico/carousel1.jpg'
    },
    {
        titolo: 'Progetto GIVE',
        descrizione: "Il 15 e 16 maggio il nostro Centro ospiterà l'edizione 2023 di GIVE (GROHE Installer Vocational Training and Education), il programma di formazione dedicato ai giovani installatori idraulici: un ambiente dedicato al training pratico proposto dai professionisti di GROHE.",
        immagine: '/images/motoristico/carousel2.JPG'
    },
    {
        titolo: 'Concorso nazionale settore elettrico',
        descrizione: "A maggio il nostro Centro avrà l'onore di ospitare il Concorso Nazionale del Settore Elettrico: tutti i Centri di Formazione Professionale salesiani d'Italia invieranno i loro campioni per una settimana di sfida e condivisione professionale...",
        immagine: '/images/motoristico/carousel3.JPG'
    },
]

let notizie = [
    {
        title: "Incontro con l'azienda Würth",
        description: "Giovedì 25 novembre 2021 noi allievi della classe 3C abbiamo avuto il piacere di partecipare all'incontro formativo tenuto da due rappresentanti dell'azienda Würth.",
        immagineUrl: "/images/motoristico/wurth.jpg",
        url: "https://www.donboscosandona.it/incontro-con-l-azienda-wurth"
    },
    {
        title: "Carrozzeria al C.F.P. “don Bosco”!",
        description: "Carrozzeria: nuovo percorso formativo e una nuova cabina a disposizione del C.F.P. “don Bosco”!",
        immagineUrl: "/images/motoristico/spraybooth.jpg",
        url: "https://www.donboscosandona.it/carrozzeria-al-c-f-p-don-bosco"
    },
    {
        title: "Incontro con Scania",
        description: "L'azienda Scania ha incontrato i nostri allievi del settore motoristico, per presentare la realtà aziendale e l’evoluzione nel mondo dei mezzi pesanti.",
        immagineUrl: "/images/motoristico/scania.jpg",
        url: "https://www.donboscosandona.it/incontro-con-scania-2"
    },
]

let slides2 = slides

export default function Home({ datiArticoli }) {
    return (
        <Layout>
            <Head />
            <LandingHero
                opacity={0.5}
                siteName="CFP DON BOSCO"
                title="Settore Meccanico"
                description="Operatore a riparazione di veicoli a motore."
                buttonUrl={'https://www.youtube.com/watch?v=wyjm1yGmu9g'}
                buttonText="Guarda il video"
                imageUrl="/images/motoristico/sfondo.jpg"
                menu={menu}
            />
            <Container maxWidth="lg">
                <Typography variant="h4" gutterBottom>
                    Qualifica triennale con indirizzo professionale: riparazione parti e sistemi meccanici ed elettromeccanici del veicolo a motore
                </Typography>
                <Typography variant="h6" gutterBottom>
                    <ul>
                        <li>Effettua riparazioni e manutenzione di motori diesel e a benzina, di piccole e grandi dimensioni</li>
                        <li>Interviene sul cambio, blocco sterzo e vari componenti meccanici dell'autoveicolo</li>
                        <li>Effettua disegni al CAD e modellazioni solide tridimensionali di componenti dell'autoveicolo</li>
                        <li>Effettua diagnosi e prove sui gas di scarico, intervenendo per risolvere le anomalie</li>
                        <li>Effettua la riconsegna del veicolo</li>
                    </ul>
                    <img src="/images/motoristico/formativi.png"></img>
                </Typography>
            </Container>
            <Carousel slides={slides} maxWidth={false} />

            <Products
                title="Notizie"
                description="Le notizie inerenti al Settore Motoristico"
                cardWidth={4}
                products={notizie}
            />
            <Container maxWidth="lg">
                <img src="/images/motoristico/pianoformativo.png"></img>
                <Typography variant="h4" gutterBottom>
                    La voce ai formatori del settore MOTORISTICO:
                </Typography>
                <Typography variant="h6" gutterBottom>
                    «Il nostro settore è un’appassionante percorso alla scoperta dell’autoveicolo in tutte le sue parti, grazie anche alla collaborazione con il gruppo FCA, a numerose aziende di componenti di parti dell’autoveicolo ed aziende del territorio.

                    Tutto questo ci permette di poter contare su risorse continuamente aggiornate; gli insegnanti, partecipano ai corsi proposti dalle principali aziende leader nel settore e gli autoveicoli sui quali lavoriamo ricoprono tecnologie moderne sino alle ultime nate; le attrezzature, continuamente aggiornate, sia dal punto di vista hardware che software, ci permettono di affrontare le problematiche legate all’automobile da tutti i punti di vista, siano impianti elettrici, elettronici, meccanici o carrozzeria.

                    Il nostri laboratori sono ambienti completi e aderenti alle tecnologie presenti nel mercato. Grazie ad attrezzature dedicate, diagnosi, banche dati, prove particolari, interventi ordinari e straordinari, tintometri, vi guideremo in un percorso via via sempre più ricco.

                    Vi aspettiamo per toccare con mano una realtà dove tecnologia, passione e formazione sono gli ingredienti di un percorso di successo!»
                </Typography>
            </Container>
        </Layout>
    )
}
