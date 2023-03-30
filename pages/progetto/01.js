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
            /><br />

            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}>1.1. Don Bosco e il Sistema Preventivo</Typography>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                    San Giovanni Bosco (1815-1888) fu un sacerdote che dedicò la sua vita ai ragazzi senza<br /> famiglia e senza mezzi per offrir loro un posto dignitoso nella società. Cominciando<br /> dal niente e confidando nella Provvidenza, aprì oratori, costruì case, fondò laboratori<br /> e scuole. Le “Scuole<br /> di Arti e Mestieri” nel tempo divennero delle vere “Scuole<br /> Professionali”, ora “Centri di Formazione Professionale”.<br /><br />

                    Don Bosco fu uno tra i primi, nella storia italiana, a stipulare un contratto di<br /> apprendistato. Fu aiutato nella sua impresa da molti benefattori, ma specialmente<br /> dai suoi stessi ragazzi, alcuni dei quali, crescendo, gli chiesero di seguire le sue orme.<br /> Fondò così la “Famiglia salesiana”, un gruppo di consacrati determinati ad “aiutare<br /> ogni giovane a diventare un onesto cittadino e un bravo cristiano” e a tirar su i<br /> giovani come don Bosco era stato cresciuto dalla madre: in una grande famiglia.<br /> Questo metodo di educazione venne detto “Sistema Preventivo” perché la presenza<br /> amica dell’educatore “previene le difficoltà che il giovane incontra” rendendolo<br /> capace di comportarsi bene senza bisogno di punizioni. Tale sistema poggia su tre<br /> cardini fondamentali: ragione, religione e amorevolezza.<br /><br />

                    Con la ragione si promuove il dialogo, la responsabilità e il formarsi di convinzioni<br /> personali che danno un senso alla vita e alle proprie scelte. La religione sviluppa un<br /> atteggiamento filiale verso Dio e solidale verso le necessità dei fratelli.<br /> L'amorevolezza favorisce un ambiente familiare ricco di rispetto e di fiducia, adatto<br /> alla maturazione integrale della persona. Don Bosco voleva che ciascun ragazzo si<br /> sentisse “a casa propria” perché amato, accolto e responsabile del bene comune.<br /><br />

                    Oggi i Salesiani sono presenti con le loro opere in quasi tutti i Paesi del mondo e<br /> continuano con entusiasmo la loro azione educativa per il bene e la formazione delle giovani<br /> generazioni.
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
                <Typography variant="h5" sx={{ color: 'blue' }}>1.3. La Formazione Professionale</Typography>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                    La Formazione Professionale salesiana nasce nell’oratorio di Valdocco e si inserisce in<br /> un progetto globale di educazione e di evangelizzazione dei giovani, soprattutto i più<br /> bisognosi.<br /><br />

                    Risponde alle esigenze dei tanti ragazzi che, al termine della formazione di base,<br /> aspirano ad inserirsi nel mondo del lavoro. E’ uno strumento efficace di prevenzione<br /> del disagio giovanile, di animazione cristiana delle realtà sociali e di sviluppo del<br /> mondo imprenditoriale.<br /><br />

                    Si inserisce nel panorama dei CFP e delle scuole cattoliche apportando il patrimonio<br /> pedagogico ereditato da San Giovanni Bosco e accresciuto dalla tradizione<br /> susseguente.
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