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
            />



            <Grid container spacing={12}>
                <Grid item xs={4}>
                    <Image src='/images/informatico/9dreams.png' width={350} height={132} />
                </Grid>
                <Grid item xs={4}>
                    <Image src='/images/informatico/developer.png' width={350} height={132} />
                </Grid>
                <Grid item xs={4}>
                    <Image src='/images/informatico/youtube.png' width={350} height={132} />
                </Grid>

            </Grid>
            <div>
                <br></br>
                <br></br>
            </div>

            <Container sm={{ height: '100vh' }}>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <center>
                            <Image src='/images/informatico/freecodecamp.jpg' width={580} height={200} />
                        </center>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" sx={{ color: 'grey' }}>
                            <b>Siamo fieri di contribuire con le nostre classi alla traduzione italiana del progetto freeCodeCamp</b>, che ha la mission di insegnare a programmare gratuitamente in tutto il mondo, rilasciando anche certificazioni di livello Universitario.
                            <br />
                            testo
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
            <Container sx={{ py: 8 }}>
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={7}>
                        <Typography variant="h4" gutterBottom>
                            OPERATORE INFORMATICO
                        </Typography>
                        <Typography variant="h5" sx={{ color: 'blue' }}>Qualifica triennale</Typography>
                        <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                            L'Operatore informatico interviene nel processo di sviluppo e gestione di prodotti e servizi informatici. Supporta operativamente sistemi, reti e soluzioni di Data Management, nello specifico negli ambiti dell'installazione, configurazione e utilizzo di supporti e dispositivi informatici hardware e software presenti nell'office automation e a supporto della comunicazione digitale, della manutenzione ordinaria e straordinaria di sistemi, reti, dispositivi e terminali utenti, dell'elaborazione, manutenzione e trasmissione di dati gestiti da archivi digitali.</Typography>
                        <br />
                        <Typography variant="h5" sx={{ color: 'black' }}>
                            Le competenze sviluppate nel corso dei tre anni:</Typography>
                        <br /><br />
                        <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                            1. <b>Installare, configurare e utilizzare supporti informatici hardware e software</b> tipici dell’office automation e della comunicazione digitale sulla base delle specifiche esigenze del cliente.<br />
                            2. Eseguire la <b>manutenzione ordinaria e straordinaria di sistemi, reti,</b> dispositivi e terminali utenti, individuando eventuali anomalie e problemi di funzionamento.<br />
                            3. Effettuare l’<b>elaborazione, manutenzione e trasmissione di dati</b> gestiti da archivi digitali.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Image src="/images/informatico/operatore-informatico.png" alt="" width={630} height={410} />
                    </Grid>
                </Grid>
            </Container>
            <br />
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image src="/images/informatico/tecnico-informatico.jpeg" alt="Tecnico informatico" width={400} height={711} />
                <Typography sx={{ ml: 4 }}>
                    <Typography variant="h4" gutterBottom>Tecnico Informatico</Typography>
                    <Typography variant="body1">
                        Il Tecnico informatico interviene con autonomia - nelle specifiche assegnate - al presidio dei processi relativi ai sistemi, reti, data management, sviluppo di soluzioni ICT (Information & Communication Technologies). Supporta operativamente l'installazione, aggiornamento e dismissione di hardware, software e componenti di sottosistema, la sicurezza e il testing di conformità, la gestione di reti informatiche e del data management.
                        <br /><br />
                        <Typography variant="h5" sx={{ color: 'black' }}>
                            Competenze del tecnico informatico con indirizzo Sviluppo soluzioni ICT:
                        </Typography>
                        <br /><br />
                        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                            1. <b>Elaborare prodotti di comunicazione</b> che descrivono prodotti, servizi, componenti o applicazioni conformi con i requisiti relativi alla documentazione, identificando e selezionando lo stile e il media appropriato per il materiale di presentazione

                            <br /><br />

                            2. <b>Curare gli interventi necessari pianificati per implementare la soluzione,</b> tra cui l'installazione, l'aggiornamento e la dismissione, registrando tutte le informazioni rilevanti, compresi gli indirizzi delle apparecchiature, i dati di configurazione e di performance

                            <br /><br />

                            3. <b>Collaborare a implementare la politica della sicurezza dell'informazione,</b> controllando e attuando interventi a fronte di intrusioni, frodi e buchi o falle della sicurezza al fine di assicurare che i rischi siano analizzati e gestiti

                            <br /><br />

                            4. Realizzare sulla base delle analisi effettuate, delle specifiche rilevate e dei modelli esistenti <b>un nuovo modello per implementare le applicazioni in conformità con la politica e le esigenze dell'utente/cliente</b>

                            <br /><br />

                            5. Adattare le soluzioni esistenti, <b>sviluppando e collaudando applicativi di bassa complessità</b>

                            <br /><br />

                            6. Costruire, effettuandone la relativa implementazione, <b>le procedure di test sistematico</b> per i sistemi IT o per i requisiti di usabilità del cliente per stabilire la conformità con le specifiche di progettazione

                            <br /><br />
                        </Typography>
                    </Typography>
                    <br />
                </Typography>
            </Container>

            <Carousel slides={slides} maxWidth={false} />





        </Layout>


    )
}
