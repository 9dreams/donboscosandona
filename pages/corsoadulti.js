import Container from '@mui/material/Container'
import Head from 'next/head'
import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero2.js'
import Products from '/components/Products'

// Voci del menù per il componente LandingHero

let menu = [
    { title: 'Chi siamo', url: '/chi-siamo' },
    { title: 'Contatti', url: '/contatti' },
    { title: 'Dove siamo', url: '/dove-siamo' },
    { title: 'Trasparenza', url: '/trasparenza' },
]






let adulti = [
    {
        title: "CORSO DI INFORMATICA DI BASE",
        category: "",
        description: "Le moderne necessità di velocizzare e rendere più flessibili le comunicazioni sia professionali che private hanno indotto ad un ricorso crescente all’informatica. Il corso, strutturato in 5 moduli didattici, si propone di introdurre all’uso del computer e di presentare gli strumenti fondamentali quali l’utilizzo di internet e i principali programmi di office automation attraverso spiegazioni dettagliate e attività di esercitazione pratica. Durata: 20 ore - Costo: € ... + IVA",
        immagineUrl: "/images/corsoadulti/infocorso.jpg",
        url: ""
    },
    {
        title: "CORSO DI AUTOCAD 2D BASE",
        category: "",
        description: "AutoCAD è un software di grafica vettoriale utilizzato nella moderna progettazione architettonica, meccanica, ecc. Questo corso introduttivo ha la finalità di preparare all’attività professionale, in particolare per la figura del disegnatore tecnico specializzato in disegni tecnici bidimensionali. Durata: 24 ore - Costo: € 350 + IVA",
        immagineUrl: "https://www.canaleformazione.com/wp-content/uploads/corso-autocad-online.jpg",
        url: ""
    },
    {
        title: "CORSO DI AUTOCAD 3D",
        category: "",
        description: "Ideale proseguimento del corso 2D, introduce alla modellazione di oggetti tridimensionali. Durata: 24 ore - Costo: € ...+ IVA",
        immagineUrl: "https://www.consulcad.it/immagini/corso-autodesk-autocad-3d.jpg",
        url: ""
    },
]




export default function Home() {
    return (
        <Layout>
            <Head />
            <LandingHero
                opacity={0.5}
                siteName="CFP DON BOSCO"
                title="Area Adulti"
                description="Investi nella tua formazione continua per rimanere sempre al passo con i tempi"
                imageUrl="https://www.filepicker.io/api/file/weWExWuKSeCPiH3QTJO0"
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

                <font face="Verdana">

                    <center><h2>Perché non si smette mai di imparare!</h2></center>
                    <p>La <strong>formazione</strong> e l’<strong>aggiornamento</strong> professionale assumono un’importanza rilevante nel mondo del lavoro, anche a fronte dei continui cambiamenti del mercato.
                        <br />

                        Le aziende del nostro territorio esprimono continuamente i propri fabbisogni formativi; inoltre, giovani e adulti manifestano sempre più la necessità di <strong>acquisire nuove competenze</strong> o di <strong>mantenersi aggiornati</strong>.
                        <br />
                        In questa sezione puoi trovare le nostre proposte formative che rispondono a queste esigenze.</p>


                    <p>
                        I corsi vengono attivati al raggiungimento di un numero minimo di richieste.
                        Se siete interessati vi preghiamo di contattare il nostro responsabile dei corsi per adulti:
                        <br />
                        Francesco Cicogna
                        <br />
                        f.cicogna@donboscosandona.it - tel. 0421 338 969

                        <br />
                        Scarica la scheda di pre-iscrizione ai corsi di formazione superiore e continua!
                    </p>

                </font>
            </Container>
            <Products
                title=""
                description=""
                cardWidth={4}
                products={adulti}
            />
        </Layout>
    )
}
