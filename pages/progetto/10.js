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
                title="Valutazione"
                description="Diventa adulto con il metodo educativo di don Bosco preparandoti ad entrare a testa alta nel mondo professionale di domani!"
                buttonUrl={'https://youtu.be/0Fh458fo8SQ'}
                buttonText="Guarda il video"
                imageUrl="/images/informatico/settore-informatico.jpg"
                menu={menu}
            /><br />

            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h3" sx={{ color: 'text.secondary' }}>10.    VALUTAZIONE</Typography>
            </Container><br /><br />

            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}>10.1.    La valutazione degli allievi</Typography>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                    La valutazione degli allievi non ha funzione selettiva né si limita ad esprimere un<br /> giudizio di merito, ma è uno strumento di verifica della programmazione educativo<br /> didattica e stimolo al raggiungimento degli obiettivi prefissati.<br />
                    I criteri di valutazione sono:<br /><br />

                    <li>la media delle valutazioni delle prove effettuate in itinere;</li>
                    <li>la progressione dell’apprendimento rispetto al livello di partenza;</li>
                    <li>l’impegno manifestato;</li>
                    <li>il comportamento e la crescita della persona;</li>
                    <li>la partecipazione alle attività didattiche;</li>
                    <li>la partecipazione, l’applicazione e l’efficienza manifestate nello stage aziendale.</li><br />
                    La valutazione iniziale rileva la situazione di partenza dell’alunno consentendo di<br /> mettere in atto, al bisogno, strategie di recupero, di orientamento e/o predisposizione<br /> di percorsi individualizzati.<br />
                    La valutazione intermedia fornisce all’allievo e alla sua famiglia indicazioni bimestrali<br /> sui progressi ottenuti nelle varie fasi del percorso formativo e permette al formatore<br /> di ritarare gli obiettivi didattici sulla base dei risultati delle prove oggettive<br /> somministrate.<br />
                    La valutazione finale tiene conto della situazione di base, delle valutazioni intermedie<br /> e delle competenze trasversali e tecnico-professionali raggiunte, determinando<br /> l’ammissione o la non ammissione dell’alunno all’anno successivo. Al termine<br /> dell’intero percorso, il collegio dei formatori si riunisce per lo scrutinio finale. Qualora<br /> non siano state raggiunte le competenze necessarie, l’allievo non verrà ammesso<br /> all’esame di qualifica. In caso contrario, l’esame verrà sostenuto alla presenza di una<br /> commissione esterna convocata dalla Regione Veneto.
                </Typography>
            </Container><br /><br />


            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}>1.2. I Salesiani a San Donà di Piave</Typography>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                    I Salesiani arrivarono a San Donà di Piave nel settembre del 1928 voluti<br /> insistentemente da Mons. Saretta, parroco della cittadina, per raccogliere e istruire la<br /> gioventù povera e bisognosa.<br /><br />

                    La loro opera si rivolse inizialmente ai soli ospiti maschi dell’Orfanotrofio; quando, nel<br /> 1930, si trasferirono nella loro legittima Casa, diedero vita a molteplici attività<br /> compresa la scuola (biennio elementare e ginnasio inferiore). Nel 1957, accogliendo<br /> l’esigenza delle nascenti industrie, convertirono la scuola media in Centro di<br /> Addestramento Professionale.<br /><br />

                    All’inizio il CAP avviò corsi per Installatori Elettricisti - Chimici Industriali -<br /> Aggiustatori Meccanici e Falegnami Modellisti (in parte dislocati nella sede<br /> provvisoria dell’Orfanotrofio). La costruzione dei nuovi capannoni (1961) portò alla<br /> chiusura del corso di Falegnameria mentre il settore chimico andò a morire verso la<br /> metà degli anni ’70, con la crisi del polo industriale di Marghera.<br /><br />

                    In seguito (a.s. 2006-2007) il Centro ha ampliato la sua offerta formativa con corsi per<br /> meccanici auto. Nell’anno scolastico 2014-2015 è iniziata l’esperienza del quarto anno<br /> formativo; recentemente (a.s. 2016-2017) si è consolidato il progetto sperimentale<br /> della formazione professionale nell’ambito del sistema duale.
                </Typography>
            </Container><br /><br />

            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}>10.2.1.    Valutazione degli obiettivi didattici:</Typography>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                    9        Raggiunti e rielaborati in modo ottimo<br />
                    8        Raggiunti e rielaborati<br />
                    7        Raggiunti ed assimilati<br />
                    6        Raggiunti in misura sufficiente<br />
                    5        Raggiunti in modo lacunoso<br />
                    4        Raggiunti in modo gravemente lacunoso
                </Typography>
            </Container><br /><br />

            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}>1.4. Le finalità e lo stile educativo del CFP</Typography>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                    <b>Valutazione della partecipazione e dell’interesse:</b><br />
                    9     Partecipa e interviene in modo costante e costruttivo<br />
                    8        Partecipa e interviene in modo appropriato<br />
                    7        Partecipa e interviene in modo discreto<br />
                    6        Partecipa con discontinuità ed è fonte di disturbo<br />
                    5        Non partecipa ed è costante fonte di disturbo<br /><br />
                    <b>Valutazione della relazione con i compagni:</b><br />
                    9        Relazione matura e disponibile<br />
                    8        Relazione serena e costruttiva<br />
                    7        Relazione positiva<br />
                    6        Relazione a volte problematica e conflittuale<br />
                    5        Relazione incompatibile con il Progetto Educativo<br /><br />

                    <b>Valutazione della relazione con i docenti:</b><br />
                    9     Relazione matura e collaborativa<br />
                    8        Relazione serena e costruttiva<br />
                    7        Relazione positiva<br />
                    6        Relazione problematica e poco rispettosa<br />
                    5        Relazione incompatibile con il Progetto Educativo<br /><br />

                    <b>Valutazione studio e compiti:</b><br />
                    9        Compiti e studio eseguiti con diligenza e costanza<br />
                    8        Compiti e studio eseguiti con costanza<br />
                    7        Compiti e studio eseguiti abbastanza regolarmente<br />
                    6        Compiti e studio eseguiti saltuariamente<br />
                    5        Compiti e studio assenti<br /><br />

                    <b>Valutazione della condotta:</b><br />
                    10     Condotta esemplare<br />
                    9        Condotta molto buona<br />
                    8        Condotta buona<br />
                    7        Condotta discreta<br />
                    6        Condotta poco accettabile con atteggiamenti indisciplinati<br />
                    5        Condotta incompatibile con il Progetto Educativo
                </Typography>
            </Container><br /><br />


        </Layout>


    )
}