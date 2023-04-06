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
                title="Le azioni educative"
                description="Relazioni buone prassi e azioni"
                buttonUrl={'https://youtu.be/0Fh458fo8SQ'}
                buttonText="Guarda il video"
                imageUrl="/images/informatico/settore-informatico.jpg"
                menu={menu}
            /><br />

            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h3" sx={{ color: 'text.secondary' }}>6. LE AZIONI EDUCATIVE</Typography>
            </Container><br /><br />

            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}>6.1. La pedagogia d’ambiente e le relazioni educative</Typography>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                    Secondo la tradizione salesiana, tutto deve concorre a creare un clima di<br /> serenità, di gioia e di impegno. Per questo sarà premura del Direttore e dei suoi collaboratori:<br /><br />

                    ✓    qualificare i rapporti educativi e creare un ambiente favorevole alla valorizzazione<br /> della vita quotidiana;<br /><br />

                    ✓    curare i doveri di studio, di ricerca e di lavoro;<br /><br />

                    ✓    vigilare sulla disciplina personale e quella richiesta dall'organizzazione formativa;<br /><br />

                    ✓    mantenere il rispetto e la cura degli strumenti, attrezzature e locali in cui si svolge<br /> la vita formativa:<br /><br />

                    ✓    sviluppare il senso di appartenenza ad una CEP;<br /><br />

                    ✓    garantire esperienze di solidarietà e collaborazione.
                </Typography>
            </Container><br /><br />


            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}>6.2. L’accompagnamento personale</Typography>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                    La promozione dell’orientamento, inteso come "educazione alla scelta, è obiettivo<br /> prioritario ” del CFP Don Bosco. Le attività offerte in questo ambito sono:<br /><br />


                    ✓    colloqui individuali per il sostegno psico-pedagogico degli allievi;<br /><br />

                    ✓    organizzazione di incontri e testimonianze a tema;<br /><br />

                    ✓    supporto agli insegnanti nei casi di allievi con problemi o in difficoltà;<br />

                    ✓    incontri con le famiglie per i casi difficili;<br /><br />

                    ✓    interventi metacognitivi su metodo di studio e motivazione allo studio;<br /><br />

                    ✓    supporto metacognitivo per gli studenti che intendono continuare il percorso formativo;<br /><br />

                    ✓    incontri con esperti su temi quali: educazione alla affettività; prevenzione del tabagismo, dell’alcolismo e droga, educazione alimentare, uso dei mezzi di comunicazione, ecc...;<br /><br />

                    ✓    lavoro di rete con i servizi del territorio per casi particolari.
                </Typography>
            </Container><br /><br />

            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}>6.3. Le buone prassi e le azioni</Typography>
            </Container>

            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}>6.3.1. Il cortile</Typography>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                    Spazio e modalità ineludibile nell'esperienza salesiana del CFP è il cortile. Esso non è<br /> solo luogo geografico in cui vengono organizzate attività ed iniziative, ma si<br /> configura come tempo di costruzione delle relazioni personali a partire dallo sport,<br /> dal gioco o dall'animazione. La CEP è garante dell'assistenza dei giovani secondo lo<br /> spirito salesiano.
                </Typography>
            </Container><br /><br />

            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}>6.3.2. Il Buongiorno</Typography>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                    La mattina inizia con un breve momento di preghiera ed una piccola riflessione su<br /> un aspetto della vita cristiana capace di indirizzare ed accompagnare allievi e<br /> formatori per tutta la giornata. Seguendo i tempi dell’Anno Liturgico e i temi della<br /> Proposta Formativa, i ragazzi sono così condotti ad un cammino di approfondimento<br /> della fede e della morale cristiana. Questo appuntamento è animato dal direttore e<br /> dal vice-direttore, dal coordinatore pastorale e, a turno, dai vari formatori.
                </Typography>
            </Container><br /><br />

            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}>6.3.3. Le ricreazioni</Typography>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                    Per don Bosco il cortile ed il gioco hanno sempre assunto una forte valenza<br /> educativa pertanto tutti i tempi di ricreazione, in particolare quello più lungo del<br /> dopo pranzo, sono organizzati in tornei. La vittoria di una partita fa guadagnare dei<br /> punti che, a fine anno, vanno a decretare la classe meritevole della Superpizza. Tutte<br /> le ricreazioni sono assistite dai formatori, diventando occasione per avvicinare i<br /> ragazzi e dialogare con loro in spirito di famiglia.
                </Typography>
            </Container><br /><br />


            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}>6.3.4. I Ritiri Spirituali e le Uscite Didattiche</Typography>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                    La crescita integrale della persona passa anche per la formazione della coscienza e<br />  l’apertura del cuore, per questo riteniamo importante proporre delle giornate di<br /> riflessione e di formazione. Questi appuntamenti sono vissuti all’inizio dell’anno e<br /> ripresi nell’arco dell’anno formativo. Accompagnati dai loro formatori, gli allievi<br /> hanno l’opportunità di fare l’importante esperienza dell’uscita didattica, di effettuare<br /> visite tecniche in aziende o fiere campionarie ed espositive.
                </Typography>
            </Container><br /><br />


            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}>1.6.2. Settore Motoristico: operatore alla riparazione veicoli a motore</Typography>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                    All’inizio e alla fine di ogni anno formativo vengono proposti due momenti di festa<br /> che coinvolgono le famiglie di tutti i ragazzi; sono occasioni preziose per<br /> approfondire la reciproca conoscenza e rendere grazie per il percorso condiviso. Atri<br /> importanti appuntamenti  sono la festa dell’Immacolata, il Convegno degli EX-Allievi,<br /> la festa di don Bosco e quella di Maria Ausiliatrice.<br />

                    Per don Bosco le due colonne che sostengono l’educazione dei giovani sono la<br /> Confessione e l’Eucaristia. Per questa ragione, in vista delle feste del CFP, viene<br /> offerta la possibilità di accostarsi alla Confessione e partecipare all’Eucaristia.
                </Typography>
            </Container><br /><br />


        </Layout>


    )
}