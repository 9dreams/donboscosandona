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
        titolo: 'Assetto vettura',
        descrizione: 'Un assetto ottmale permette di ottimizzare il comportamento della vettura durante le fasi più critiche della guida come le curve, le frenate e le accelerazioni, inoltre consente funzionalità fondamentali come il ritorno del volante dopo aver effettuato una svolta.',
        immagine: '/images/motoristico/carousel1.jpg'
    },
    {
        titolo: 'Area motori e cambi',
        descrizione: 'Il motore è il cuore della macchina e fornisce la potenza necessaria per farla muovere. Il cambio, invece, è la parte del veicolo che permette di cambiare marcia, per adattarsi alle diverse condizioni di guida.',
        immagine: '/images/motoristico/carousel2.jpg'
    },
    {
        titolo: 'Area Pneumatici',
        descrizione: "I pneumatici sono le scarpe del veicolo e sono essenziali per la tenuta di strada, la stabilità e la sicurezza durante la guida. In questa area dell'officina, i meccanici si occupano di controllare lo stato dei pneumatici, ad esempio verificando la pressione dell'aria, l'usura del battistrada o eventuali danni.",
        immagine: '/images/motoristico/carousel3.jpg'
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
                <br/>
                <br/>
                <Typography variant="h4" gutterBottom>
                    La voce ai formatori del settore MOTORISTICO:
                </Typography>
                <Typography variant="h6" gutterBottom>
                    «Il nostro settore è un’appassionante percorso alla scoperta dell’autoveicolo in tutte le sue parti, grazie anche alla collaborazione con il gruppo FCA, a numerose aziende di componenti di parti dell’autoveicolo ed aziende del territorio.

                    Tutto questo ci permette di poter contare su risorse continuamente aggiornate; gli insegnanti, partecipano ai corsi proposti dalle principali aziende leader nel settore e gli autoveicoli sui quali lavoriamo ricoprono tecnologie moderne sino alle ultime nate; le attrezzature, continuamente aggiornate, sia dal punto di vista hardware che software, ci permettono di affrontare le problematiche legate all’automobile da tutti i punti di vista, siano impianti elettrici, elettronici, meccanici o carrozzeria.

                    Il nostri laboratori sono ambienti completi e aderenti alle tecnologie presenti nel mercato. Grazie ad attrezzature dedicate, diagnosi, banche dati, prove particolari, interventi ordinari e straordinari, tintometri, vi guideremo in un percorso via via sempre più ricco.

                    Vi aspettiamo per toccare con mano una realtà dove tecnologia, passione e formazione sono gli ingredienti di un percorso di successo!»
                
                </Typography>
                <br/>
                <br/>
            </Container>
        </Layout>
    )
}
