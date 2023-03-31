import Container from '@mui/material/Container'
import Head from 'next/head'
import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero2.js'
import Products from '/components/Products'
import Paragraph from "/components/Paragraph"
import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { grey } from '@mui/material/colors'

// Voci del menù per il componente LandingHero

let menu = [
    { title: 'Chi siamo', url: '/chi-siamo' },
    { title: 'Contatti', url: '/contatti' },
    { title: 'Dove siamo', url: '/dove-siamo' },
    { title: 'Trasparenza', url: '/trasparenza' },
]






let documenti = [
    {
        title: "Informativa Privacy Scuola",
        category: "",
        description: "",
        immagineUrl: "https://www.psbconsulting.it/wp-content/uploads/2018/04/privacy-policy-psb-consulting-gdpr-nuovo-regolamento-europeo.jpeg",
        url: "/docs/privacy/Informativa_Scuola.pdf"
    },
    {
        title: "Informativa Privacy Clienti e Fornitori",
        category: "",
        description: "",
        immagineUrl: "https://www.altalex.com/~/media/Images/Lex/Privacy/privacy_key%20jpg.jpg",
        url: "/docs/privacy/Informativa_per_aziende_tirocinio.pdf"
    },
    {
        title: "Informativa Privacy Aziende Tirocinio",
        category: "",
        description: "",
        immagineUrl: "https://www.dynamicquest.com/wp-content/uploads/2021/04/DQ-Blog-CyberSec-SMB-724x483-1.jpg",
        url: "/docs/privacy/Informativa_clienti-fornitori_.pdf"
    },
]
let products = [
    {
        title: "Configurazione dispositivi",
        category: "",
        description: "Se avete recentemente acquistato un dispositivo, e vi serve aiuto per configurarlo o per passare i dati da un dispositivo all'altro, noi possiamo aiutarvi! ",
        immagineUrl: "/images/assistenza/stampantecute.jpg",
        url: "#"
    },
    {
        title: "Sostituzione componenti hardware computer",
        category: "",
        description: "Un computer risulta lento ed obsoleto? Non vi preoccupate, basta mandare una richiesta di assistenza e noi vi porteremo un computer sostituvo con al suo interno ogni applicazione che vi può servire, nel mentre che sistemeremo/cambieremo il computer obsoleto!",
        immagineUrl: "/images/assistenza/comphardware.png",
        url: "#"
    },
    {
        title: "Assistenza generale",
        category: "",
        description: "Se vi serve una mano con un dispositivo che dal nulla smette di funzionare o ha qualche funzione disattivata, possiamo aiutarvi! Come ad esempio il collegamento della stampante alla rete wi-fi per la stampa wireless!",
        immagineUrl: "/images/assistenza/assistenza2pc.webp",
        url: "#"
    },
    {
        title: "Installazione sistema operativo Computer",
        category: "",
        description: "Se un computer ha bisogno di essere aggiornato, con un nuovo sistema operativo, basta mandare una richiesta di assistenza, e noi, quando avremo tempo libero, verremo a darvi una mano senza esitare! ",
        immagineUrl: "/images/assistenza/installazionesist.png",
        url: "#"
    },
    {
        title: "Pulizia Computer",
        category: "",
        description: "Un computer è troppo lento o fa rumore? Mandate una richiesta di assistenza, e noi porteremo un computer sostitutivo nel mentre che puliremo e metteremo apposto il computer!",
        immagineUrl: "/images/assistenza/pulizia.jpg",
        url: "#"
    },
    {
        title: "Assistenza iPad",
        category: "",
        description: "Se un iPad ha problemi, o non va qualche funzione che dovrebbe andare, noi arriveremo in vostro soccorso e cercare di darvi una mano al massimo delle nostre possibilità!",
        immagineUrl: "/images/assistenza/assistenzaipad.png",
        url: "#"
    },
]




export default function Home() {
    return (
        <Layout>
            <Head />
            <LandingHero
                opacity={0.5}
                siteName="CFP DON BOSCO"
                title="Centro Assistenza Informatica Don Bosco"
                description="Leggi qua per sapere quello che facciamo!!"
                imageUrl="/images/assistenza/assistenzafoto.jpg"
                menu={menu}
            />
            {

            }
            {/*             <LandingHero
                opacity={0.5}
                siteName="CFP DON BOSCO"
                title="Centro di Formazione Professionale don Bosco"
                description="Diventa adulto con il metodo educativo di don Bosco preparandoti ad entrare a testa alta nel mondo professionale di domani!"
                buttonUrl={'https://www.youtube.com/watch?v=wyjm1yGmu9g'}
                buttonText="Guarda il video"
                imageUrl="/images/privacy/imgsfondo.webp"
                menu={menu}
            /> */}
            <Container maxWidth="lg" sx={{ marginTop: '3rem', marginBottom: '3rem' }}>
                <Paragraph
                    title="Benvenuti nella pagina del centro di assistenza informatica della nostra scuola!"
                    subtitle="Il nostro centro di assistenza informatica è qui per aiutare gli studenti, i docenti e il personale della scuola a risolvere problemi tecnologici e migliorare la loro esperienza di utilizzo della tecnologia nella scuola. Siamo specializzati in problemi informatici che riguardano l'utilizzo di software, hardware e di reti informatiche."
                    backgroundColor="azure"
                    columnCount={3}
                    maxWidth="lg"
                    sx={{}}
                >
                    Offriamo assistenza in situ per la risoluzione di problemi tecnici, come ad esempio il ripristino di un computer, la configurazione di una stampante, la connessione alla rete Wi-Fi della scuola e la risoluzione di problemi di connettività.

                    Inoltre, offriamo anche supporto remoto per i problemi tecnici che possono essere risolti da remoto, come ad esempio l'assistenza nella configurazione di software specifici.

                    Il nostro personale altamente qualificato e professionale è disponibile per rispondere alle tue domande e aiutarti a risolvere qualsiasi problema tecnico che tu possa avere. Per ottenere assistenza, puoi visitare il nostro centro di assistenza informatica o contattarci tramite telefono o e-mail.

                    Siamo impegnati a fornire un servizio di alta qualità e una risposta tempestiva alle richieste di assistenza. Non esitare a contattarci per qualsiasi problema informatico tu possa avere. Siamo qui per aiutarti!


                </Paragraph>
                <br />
                <Typography variant="subtitle1" gutterBottom>
                    Il nostro centro assistenza per iPad offre tanti servizi per garantire che i dispositivi degli studenti funzionino correttamente. Siamo in grado di risolvere problemi di connessione Wi-Fi e di configurare le reti in modo che gli studenti possano connettersi facilmente alla rete scolastica.

                    Inoltre, offriamo anche una gestione remota per i dispositivi degli studenti. Questo servizio consente di bloccare gli iPad in modo da impedire l'accesso a determinati siti web o applicazioni durante le lezioni, garantendo un ambiente di apprendimento più concentrato e mirato.
                </Typography>
                <br />
                <br />


                <Products
                    title="Ecco alcune delle cose che facciamo:"
                    description=""
                    products={products}
                    cardWidth={4}
                />
                    <Paragraph
                        backgroundColor="#D2D2D2"
                        columnCount={1}
                        maxWidth="lg"
                    >
                        <center><img src="/images/assistenza/valutazioni.png" /></center>
                    </Paragraph>





            </Container>
        </Layout>
    )
}
