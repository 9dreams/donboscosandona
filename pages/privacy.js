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


let documenti = [
    {
        title: "Informativa Privacy Scuola",
        category: "",
        description: "",
        immagine: "https://www.psbconsulting.it/wp-content/uploads/2018/04/privacy-policy-psb-consulting-gdpr-nuovo-regolamento-europeo.jpeg"
    },
    {
        title: "Informativa Privacy Clienti e Fornitori",
        category: "",
        description: "",
        immagine: "https://www.altalex.com/~/media/Images/Lex/Privacy/privacy_key%20jpg.jpg"
    },
    {
        title: "Informativa Privacy Aziende Tirocinio",
        category: "",
        description: "",
        immagine: "https://www.dynamicquest.com/wp-content/uploads/2021/04/DQ-Blog-CyberSec-SMB-724x483-1.jpg"
    },
]



export default function Home() {
    return (
        <Layout>
            <Head />
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

                <center><h1>
                    GDPR
                    La tutela della privacy
                </h1></center>


                <p>

                    Il nuovo Regolamento Europeo (UE) 2016/679 del Parlamento Europeo (GDPR) relativo alla protezione dei dati è stato pubblicato sulla GUUE del 4 maggio 2016, è entrato in vigore il 24 maggio del 2016 ed è divenuto pienamente operativo negli Stati membri dal 25 maggio 2018.
                    Tale regolamento consolida e rende più omogenea la protezione dei dati personali dei cittadini e dei residenti dell’Unione Europea evitando lacune di tutela in ambito europeo e consacrando il diritto alla protezione dei dati personali degli interessati tra i diritti fondamentali e costituzionali.
                    In conformità a quanto previsto dal Regolamento Europeo (UE) 2016/679 per la protezione dei dati personali la informiamo che l’Associazione C.F.P. CNOS/FAP Don Bosco ha nominato il Responsabile della Protezione dei Dati (RPD o DPO).</p>

             

                    <h2> Dati di contatto del Responsabile della Protezione dei Dati. </h2>
                    <p>Avv. Marco Bernabè</p>
                    

            </Container>
            <Products
                title="Documenti utili"
                description="Un'ampia scelta di indirizzi professionali: scopri quello che ti accende di più!"
                cardWidth={4}
                products={documenti}
            />
        </Layout>
    )
}
