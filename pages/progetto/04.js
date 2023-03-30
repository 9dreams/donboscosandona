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
                title="Il patto educativo"
                description="Gli impegni presi dalla scuola, dall'allievo e dalla famiglia"
                buttonUrl={'https://youtu.be/0Fh458fo8SQ'}
                buttonText="Guarda il video"
                imageUrl="/images/informatico/settore-informatico.jpg"
                menu={menu}
            /><br />

            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h3" sx={{ color: 'text.secondary' }}>4. IL PATTO EDUCATIVO</Typography>
            </Container><br /><br />

            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h6" sx={{ color: 'text.secondary' }}>Nella comunità educativa uno spazio importante è riservato a genitori e allievi. In<br /> sede d’iscrizione, viene condiviso il patto educativo tra le parti. Il CFP è rappresentato<br /> dal Direttore o da persona da lui delegata.<br /><br />
                    In relazione a questo progetto educativo...
                </Typography>
            </Container><br /><br />

            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}>Il CFP si impegna a:</Typography>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                    -     garantire la cattolicità e la salesianità della propria azione;<br /><br />

                    -     dichiarare le finalità didattiche e formative perseguite;<br /><br />

                    -     rendere espliciti la strategia, gli strumenti e i metodi di verifica, i criteri di valutazione;<br /><br />

                    -     curare e verificare la sicurezza fisica e morale dell'ambiente;<br /><br />

                    -     garantire la serietà dell'impegno formativo;<br /><br />

                    -     ricercare la serenità dei rapporti tra studenti e formatori, tra famiglia e CFP.
                </Typography>
            </Container><br /><br />


            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}>Gli allievi si impegnano a:</Typography>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                    -     accogliere con serietà e convinzione la proposta educativa, culturale e<br /> professionale loro rivolta;<br /><br />

                    -     conservare un atteggiamento di rispetto verso le persone e le strutture che li<br /> accolgono;<br /><br />

                    -     lasciarsi coinvolgere attivamente nei processi formativi, impegnandosi a<br /> conoscere e condividere:<br /><br />

                    o     gli obiettivi educativi e didattici del curricolo formativo;<br /><br />

                    o     il percorso per raggiungerli;<br /><br />

                    o     le fasi del cammino formativo e culturale;<br /><br />

                    o     le esigenze disciplinari espresse dal Regolamento.
                </Typography>
            </Container><br /><br />

            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}>1.3. La Formazione Professionale</Typography>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                    -     conoscere, accogliere e condividere la proposta formativa del CFP;<br /><br />

                    -     farsi carico della maturazione personale dei figli e dei risultati formativi;<br /><br />

                    -     esprimere pareri e proposte;<br /><br />

                    -     collaborare alle attività formative;<br /><br />

                    -     partecipare ai momenti formativi proposti;<br /><br />

                    -     conoscere e sostenere l'Associazione Genitori Scuola Cattolica (AGeSC)   e partecipare ad iniziative loro rivolte.
                </Typography>
            </Container><br /><br />

            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}>1.4. Le finalità e lo stile educativo del CFP</Typography>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                    La formazione professionale è un percorso di pari dignità rispetto a quello della<br /> scuola e il più delle volte consente un’efficace recupero della dispersione scolastica<br /> attraverso la metodologia “dell’imparare facendo”.<br /><br />

                    Il CFP Don Bosco non limita la sua azione educativa all’aspetto tecnico e<br /> professionale (il “saper fare”) ma punta molto sulla formazione integrale della<br /> persona, cioè sul suo “saper essere”.<br /><br />

                    In quanto Ente Cattolico imposta la sua attività alla luce della concezione cristiana<br /> della realtà presentandosi come soggetto ecclesiale che opera in collegamento con<br /> la Chiesa locale. L’identità cattolica comporta la proposta del messaggio evangelico e<br /> la presentazione dei valori cristiani, pur nel rispetto della libertà religiosa e di<br /> coscienza degli allievi e delle loro famiglie.
                </Typography>
            </Container><br /><br />

            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}>1.5. L’offerta formativa professionalizzante del CFP</Typography>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                    Il Centro Formazione Professionale “CFP Don Bosco” fa parte del “Centro Nazionale<br /> Opere Salesiane” (CNOS) che riunisce oltre 40 centri distribuiti su tutto il territorio<br /> nazionale.<br /><br />

                    Il CNOS-FAP CFP Don Bosco è in possesso dal 2001 di Certificazione per la<br /> “Progettazione erogazione di attività formative e di orientamento” con il Sistema di<br /> Qualità ISO 9001/2008 ed è accreditato presso la Regione Veneto dal 2002 con codice<br /> ente 2777 iscrizione elenco A0033 nell’ambito dell’Obbligo Formativo, Formazione<br /> Superiore e Orientamento.<br /><br />

                    Scopo dell’ente è la promozione, il coordinamento e la realizzazione di progetti<br /> nell’ambito della Formazione e dell’Aggiornamento Professionale (FAP).<br /><br />

                    Il CNOS-FAP offre: corsi di prima formazione; corsi di formazione superiore e<br /> continua; corsi per apprendisti.
                </Typography>
            </Container><br /><br />


            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}>1.6. I Settori
                </Typography>
            </Container>

            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}>1.6.1. Settore Meccanico macchine utensili: operatore meccanico</Typography>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                    È un settore che insegna ad eseguire la lavorazione, la costruzione, l’assemblaggio e<br /> la revisione di particolari meccanici.<br /><br />

                    L’operatore meccanico realizza lavorazioni al tornio, fresa e macchine utensili in<br /> generale, partendo da un disegno realizzato con il CAD; effettua la programmazione<br /> delle macchine a controllo numerico con il CAD-CAM; realizza saldature ad arco, TIG,<br /> MAG, ossiacetilenica; effettua il taglio al plasma programmando la saldatrice a<br /> controllo numerico; esegue disegni al CAD e modellazioni solide tridimensionali di<br /> componenti meccanici.
                </Typography>
            </Container><br /><br />


            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}>1.6.2. Settore Motoristico: operatore alla riparazione veicoli a motore</Typography>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                    Il settore motoristico è un appassionante percorso alla scoperta dell’autoveicolo in<br /> tutte le sue parti che si avvantaggia della proficua collaborazione con il gruppo FCA,<br /> di numerose aziende di componenti dell’autoveicolo ed aziende del territorio.<br /><br />

                    L’operatore alla riparazione di veicoli a motore effettua riparazioni e manutenzione di<br /> motori diesel e a benzina; interviene sul cambio, blocco sterzo e vari componenti<br /> meccanici dell’autoveicolo; effettua diagnosi e prove sui gas di scarico, intervenendo<br /> per risolvere le anomalie; realizza disegni al CAD e modellazioni solide<br /> tridimensionali di componenti dell’autoveicolo.
                </Typography>
            </Container><br /><br />


            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}>1.6.3. Settore Motoristico: operatore alla riparazione di carrozzeria</Typography>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                    All’interno del settore Motoristico c’è anche il percorso con l’indirizzo professionale:<br /> riparazione di carrozzeria. In esso si effettuano riparazioni e lavorazioni tipiche per il<br /> ripristino della carrozzeria, operazioni di verniciatura e finitura.
                </Typography>
            </Container><br /><br />



            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}>1.6.4. Settore Elettrico: operatore elettrico</Typography>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                    L’operatore elettrico interviene nell’installazione, manutenzione, supervisione e<br /> controllo di impianti civili ed industriali, sia con tecnologie tradizionali sia mediante<br /> l’automazione; realizza la programmazione dei componenti domotici e dei controllori<br /> programmabili; esegue i disegni al CAD con la distribuzione dei componenti.<br /><br />

                    La qualifica è articolata in modo da conoscere e saper realizzare gli impianti elettrici<br /> ovvero illuminazione, antenna TV, citofoni e videocitofoni; comando di motori<br /> elettrici; automazione con PLC per realizzare e monitorare cicli di lavoro industriali;<br /> domotica e building automation; supervisione e controllo dell’impianto tramite<br /> smartphone o tablet; il tutto con l’ausilio di attrezzature e programmi sempre<br /> aggiornati.
                </Typography>
            </Container><br /><br />


            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}>1.6.5. Settore Informatico: operatore informatico</Typography>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                    Con il percorso di elettronica-informatica-telecomunicazioni si entra gradualmente<br /> nel mondo dell’elettronica, dei computer, del web, arrivando a conquistare le<br /> competenze di tecnico esperto, capace di fornire assistenza tecnica, elettronica e<br /> informatica. La vastità dei campi abbracciati da questo settore permette sbocchi<br /> lavorativi tutti da scoprire: antennista, venditore di computer, progettista di reti,<br /> programmatore di app.
                </Typography>
            </Container><br /><br />


            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}>1.6.6. Settore Energie rinnovabili: operatore di impianti termoidraulici ed impianti per il risparmio energetico</Typography>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                    Il percorso di operatore di impianti termoidraulici ed impianti per il risparmio<br /> energetico sviluppa le competenze relative all’automazione degli impianti<br /> tecnologici con l’integrazione delle energie rinnovabili. Ciò permette una gestione<br /> integrata dell’edificio ai fini del risparmio energetico (nel campo del riscaldamento e<br /> climatizzazione, del fotovoltaico, del solare termico, della biomassa e delle pompe di<br /> calore). La novità del settore sta nel rendere possibile il dialogo tra l’impianto elettrico<br /> e quello tecnologico nell’ambito della building automation.
                </Typography>
            </Container><br /><br />


        </Layout>


    )
}