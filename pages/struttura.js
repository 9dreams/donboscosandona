import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import Head from 'next/head'
import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero'
import Products from '/components/Products'
import Paragraph from '/components/Paragraph'

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


export default function Home() {
    return (
        <Layout>
            <Head />

            <LandingHero
                opacity={0.5}
                siteName="CFP DON BOSCO"
                title="L’ambiente del C.F.P. Don Bosco"
                buttonUrl={'https://www.donboscosandona.it/virtual-tour/index.htm'}
                buttonText="Virtual Tour"
                imageUrl="/images/struttura/donbosco_struttura.jpg"
            />

            <Paragraph
            
                title="cosa offre ai giovanni"
                backgroundColor="#fed"
            >
                <ul>
                    <li><b>aule didattiche multimediali</b> fornite di computer e videoproiettore;</li>
                    <li><b>laboratori di settore</b> completi e dinamici che simulano le diverse realtà di impresa;</li>
                    <li><b>aule di informatica</b> con computer e software costantemente aggiornati.</li>
                </ul>
            </Paragraph>



            <Container maxWidth="lg" sx={{ marginTop: '3rem', marginBottom: '3rem' }}>
                <font face="Verdana">

                    <p>
                        nostro Centro di Formazione Professionale si trova all’interno dell’Opera Salesiana “don Bosco” che offre ai nostri giovani del Centro un Oratorio ricco di storia, un ambiente dinamico e vivace, accogliente e propositivo, che custodisce con quotidiana fedeltà lo spirito di don Bosco.
                    </p>
                    <p>
                        L’atrio di ingresso, l’aula magna e gli uffici completano una struttura funzionale e che risponde alle esigenze didattiche ed educative dei nostri percorsi formativi.
                    </p>
                    <p>
                        La sala giochi, il bar, la chiesa, il cinema teatro, il cortile con la storica giostra e i campi da gioco sono a disposizione dei nostri giovani e rendono l’ambiente completo e funzionale per le attività scolastiche ed extrascolastiche.
                    </p>

                    <Paragraph
                        imageUrl="/images/struttura/donbosco_esterno.jpg" />





                </font>
            </Container>

        </Layout>
    )
}
