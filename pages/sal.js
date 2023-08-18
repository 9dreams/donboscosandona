import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import Head from 'next/head'
import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero2'
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
                title="Servizi al lavoro"
                description="Facilitano l'incontro della domanda con l'offerta del lavoro "
                buttonText="Guarda il video"
                imageUrl="/images/news/2023/sal.JPG"
            />
            <Paragraph
                title="Servizi di orientamento"
                
            >

                Il Centro è accreditato come sportello orientativo. Presso il Centro si svolgono attività di:
                1- Orientamento previo visite guidate al Centro su richiesta;
                2- Orientamento nei percorsi di Formazione Professionale iniziale;
                3- Orientamento in uscita;
                4- Orientamento in collaborazione con le scuole del primo e secondo ciclo del territorio.
            
                Il CFP collabora attivamente con la Federazione CNOS/FAP Veneto che è Ente accreditato per lo
                svolgimento dei servizi al lavoro presso la Regione Veneto.
                Questo servizio ha l’obiettivo di orientare, accompagnare e quindi facilitare l’inserimento lavorativo di
                persone che si trovano in condizioni di particolare debolezza nei confronti del mercato del lavoro,
                condizioni che possono trovare origine in fattori di tipo psicologico, sociale e/o culturale.
                L’attività si articola in progetti specifici che riguardano: adulti espulsi o a rischio di espulsione dal
                mercato del lavoro; soggetti svantaggiati, over 45, donne, migranti, soggetti a rischio di esclusione
                lavorativa e sociale; persone diversamente abili; minori che si trovano in condizione di disagio familiare.
                Attraverso la sua attività questo servizio si propone di: favorire I’incontro tra domanda e offerta di lavoro
                tenendo conto delle esigenze di chi si rivolge al nostro servizio; facilitare il processo di integrazione
                sociale e lavorativa delle persone che si trovano in difficoltà; collaborare con le attività produttive,
                istituzionali e di aiuto; accrescere il sentimento di autostima dell’utente; aiutare la persona che si
                rivolge al Centro a costruire attivamente la propria esistenza; diffondere informazioni su tematiche
                riguardanti il mercato del lavoro; lavorare in rete con strutture pubbliche e private che operano in
                favore dell’orientamento, della riqualificazione e dell’inserimento lavorativo.

            
                Il CNOS-FAP si avvale di SAL PLESK, sistema integrato per gestire l’incontro domanda ed offerta di
                PerformanSe, strumento informatizzato per l’orientamento e la valorizzazione delle competenze
                professionali, finalizzato alla crescita professionale nel contesto lavorativo.

                
            </Paragraph>


            <Paragraph
                title="Servizi al Lavoro"
                
            >

                Il CFP collabora attivamente con la Federazione CNOS/FAP Veneto che è Ente accreditato per lo
                svolgimento dei servizi al lavoro presso la Regione Veneto.
                Questo servizio ha l’obiettivo di orientare, accompagnare e quindi facilitare l’inserimento lavorativo di
                persone che si trovano in condizioni di particolare debolezza nei confronti del mercato del lavoro,
                condizioni che possono trovare origine in fattori di tipo psicologico, sociale e/o culturale.
                L’attività si articola in progetti specifici che riguardano: adulti espulsi o a rischio di espulsione dal
                mercato del lavoro; soggetti svantaggiati, over 45, donne, migranti, soggetti a rischio di esclusione
                lavorativa e sociale; persone diversamente abili; minori che si trovano in condizione di disagio familiare.
                Attraverso la sua attività questo servizio si propone di: favorire I’incontro tra domanda e offerta di lavoro
                tenendo conto delle esigenze di chi si rivolge al nostro servizio; facilitare il processo di integrazione
                sociale e lavorativa delle persone che si trovano in difficoltà; collaborare con le attività produttive,
                istituzionali e di aiuto; accrescere il sentimento di autostima dell’utente; aiutare la persona che si
                rivolge al Centro a costruire attivamente la propria esistenza; diffondere informazioni su tematiche
                riguardanti il mercato del lavoro; lavorare in rete con strutture pubbliche e private che operano in
                favore dell’orientamento, della riqualificazione e dell’inserimento lavorativo.
                
            
            </Paragraph>

            <Paragraph
                title="Incontro domanda e offerta di lavoro"
                
            >

                Il CNOS-FAP si avvale di SAL PLESK, sistema integrato per gestire l’incontro domanda ed offerta di
                lavoro per ottimizzare la gestione del processo di selezione mediante tracking delle candidature e di
                PerformanSe, strumento informatizzato per l’orientamento e la valorizzazione delle competenze
                professionali, finalizzato alla crescita professionale nel contesto lavorativo.


            </Paragraph>
                        
        </Layout>
    )
}