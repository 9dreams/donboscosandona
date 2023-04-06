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
                title="Metodoligie"
                description="e strumenti didattici"
                buttonUrl={'https://youtu.be/0Fh458fo8SQ'}
                buttonText="Guarda il video"
                imageUrl="/images/informatico/settore-informatico.jpg"
                menu={menu}
            /><br />

            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h3" sx={{ color: 'text.secondary' }}>7.    METODOLOGIE E STRUMENTI DIDATTICI</Typography>
            </Container><br /><br />

            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}>7.1.    Apprendere facendo</Typography>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                    La metodologia didattica del nostro CFP si caratterizza per l'applicazione operativa di<br /> conoscenze e abilità acquisite consentendo allo studente di comprendere formule o<br /> regole in un contesto pratico.  A tale proposito il nostro Centro aderisce ad iniziative e<br /> sperimentazioni sia a livello Regionale che Nazionale.
                </Typography>
            </Container><br /><br />


            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}>7.2.    Progetto iPad</Typography>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                    E’ un’esperienza di innovazione pedagogica e didattica basata su un modello attivo<br /> nel quale l’insegnante, da fornitore di conoscenze, diventa facilitatore di processi di<br /> ricerca e di interazione significativa; è un grande investimento tecnologico che<br /> permette agli studenti di sperimentare modalità didattiche efficaci quali flipped<br /> classroom, il cooperative learning, il peer to peer e altro ancora; è uno stimolo a<br /> realizzare lavori di gruppo interdisciplinari che richiedono l’integrazione di testi,<br /> suoni, video e immagini.<br />
                    L’utilizzo dell’iPad richiede il rispetto di alcune condizioni, sottoscritte a inizio anno da<br /> genitori e giovani.
                </Typography>
            </Container><br /><br />

            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}>7.3.    Gli stages</Typography>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                    Lo stage rappresenta un momento fondamentale nella formazione professionale<br /> perché punto d’incontro tra formazione e lavoro. È uno strumento indispensabile per<br /> fare esperienza concreta nel settore prescelto, per valutare la predisposizione verso<br /> l’attività intrapresa, per proporsi nel mercato del lavoro con un curriculum arricchito<br /> non solo nella forma (titolo rilasciato), ma soprattutto nella sostanza (competenza<br /> acquisita nella pratica svolta).
                </Typography>
            </Container><br /><br />

            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}>7.4.    Le attività a sostegno della didattica</Typography>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                        Iniziative di accoglienza: sono finalizzate ad un sereno inserimento degli allievi.<br /><br />
                        Metodo di studio: ha lo scopo di insegnare come organizzarsi nello studio<br /> (sottolineare, costruire schemi, riassumere, esporre) e nel lavoro.<br />
                        Educazione ambientale: mira a sensibilizzare gli allievi ai problemi ambientali, anche attraverso la proposta di semplici gesti quotidiani.<br />
                        Educazione alla salute: intende sviluppare il senso di responsabilità per la propria e l’altrui salute, promuovendo stili di vita sani.<br />
                        Visite guidate: costituiscono un arricchimento dell’attività didattica e rispondono alle finalità formative e culturali esplicitate dal piano educativo generale.<br />
                        Attività di prevenzione e proposte di solidarietà: incontri informativi in<br /> collaborazione con diverse associazioni del territorio: A.C.A.T. (problema di alcolismo);<br /> SER.D. (dipendenza da droghe); CONSULTORIO (educazione all’affettività e alla<br /> sessualità); A.V.I.S. (donazione del sangue); A.I.D.O. (donazione degli organi); POLIZIA<br /> di STATO (convivenza civile).
                </Typography>
            </Container><br /><br />




        </Layout>


    )
}