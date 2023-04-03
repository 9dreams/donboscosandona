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
                title="Gli obbiettivi"
                description="La crescita integrale della persona"
                buttonUrl={'https://youtu.be/0Fh458fo8SQ'}
                buttonText="Guarda il video"
                imageUrl="/images/informatico/settore-informatico.jpg"
                menu={menu}
            /><br />

            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h3" sx={{ color: 'text.secondary' }}>5. GLI OBBIETTIVI</Typography>
                <br /><br /><br /><br />
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}>5.1. Obbiettivi educativi: la crescita integrale della persona</Typography>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                    Il progetto educativo del CFP Don Bosco mette al centro il giovane per favorire la sua<br />
                    formazione integrale; lo rende soggetto attivo della sua maturazione coinvolgendolo<br />
                    consapevolmente in un programma di crescita che mira ad una vita piena e gioiosa;<br />
                    lo apre alla dimensione sociale rendendolo capace di contribuire alla crescita della<br />
                    società nella ricerca del bene comune.
                </Typography>
            </Container><br /><br />


            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}>5.1.1.La formazione religiosa</Typography>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                    La dimensione etico religiosa viene veicolata attraverso l’insegnamento della<br />
                    religione, le feste, le celebrazioni, gli incontri di preghiera, le giornate di amicizia e<br />
                    riflessione, i ritiri, le manifestazioni giovanili, le esperienze di volontariato, la<br /> missionarietà.
                </Typography>
            </Container><br /><br />

            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}>5.1.2.La formazione della coscienza</Typography>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                    L’educazione impartita in un CFP salesiano rimanda ad un modello di vita e di uomo<br />
                    che deriva dall’antropologia cristiana. Pertanto, il CFP si riserva di: presentare<br />
                    proposte culturali, sociali e civili coerenti con il messaggio cristiano; esprimere una<br />
                    valutazione critica dei modelli in contrasto con tali valori; difendere, nel mondo del<br />
                    lavoro, i diritti dei più deboli.
                </Typography>
            </Container><br /><br />

            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}>5.1.3.L'educazione dell'affettività</Typography>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                    È fondamentale creare attorno ai giovani un clima educativo ricco di scambi<br />
                    comunicativo-affettivi. II sentirsi accolto, riconosciuto, stimato e amato è, per ogni<br />
                    individuo, la migliore lezione sull’amore.<br />
                    Allo stesso modo, il confronto con persone che vivono l’amore come forma di rispetto<br />
                    verso sé e gli altri ha la forza della testimonianza. Una vocazione matrimoniale<br />
                    vissuta con convinzione e aperta alla procreazione responsabile, si riverbera sui<br />
                    giovani favorendo l'apertura seria e serena all'amore. La testimonianza del religioso,<br />
                    che vive in modo limpido e lieto la sua donazione nella castità, fa percepire al<br />
                    giovane la possibilità di vivere una simile esperienza d'amore.<br />
                    Il servizio fraterno ai piccoli ed ai poveri e il contatto guidato con situazioni di<br />
                    sofferenza educa all’amore gratuito.
                </Typography>
            </Container><br /><br />

            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}>5.1.4.L'educazione sociale e politica</Typography>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                    La comunità educativa del CFP, facendo proprio lo stile di don Bosco, accompagna i<br />
                    giovani alla conoscenza della complessa realtà socio politica; li introduce, attraverso<br />
                    esperienze di servizio, nel mondo di quanti chiedono solidarietà e aiuto; li educa<br />
                    all’impegno, alla partecipazione e alla gestione responsabile del bene comune.
                </Typography>
            </Container><br /><br />


            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}>5.1.5.L'educazione alla profesionalità
                </Typography>
            </Container>

            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}></Typography>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                    Durante il percorso formativo è importante mettere le radici della professionalità.<br />
                    Tutto deve guidare alla crescente competenza nel lavoro svolto con reale<br />
                    soddisfazione e nel rispetto dei compiti degli altri, perché solo la complementarietà<br />
                    favorisce la crescita sociale.
                </Typography>
            </Container><br /><br />


            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}>5.2. Obbiettivi didattici: la competenza profesionale</Typography>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}>5.2.1.Corsi di prima formazione</Typography>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                    Il metodo educativo-formativo salesiano segue un itinerario che tende a:<br />
                        curare la maturazione complessiva della persona;<br />
                        coltivare l'apertura agli altri creando relazioni e amicizie e partecipando alla vita<br />
                    civile, ecclesiale e di gruppo;<br />
                        sviluppare un itinerario di crescita progressiva nella vita cristiana;<br />
                        formare persone libere capaci di coscienza critica;<br />
                        offrire una solida base di cultura generale;<br />
                        far conseguire una formazione professionale specifica;<br />
                        aiutare a recuperare autostima dopo gli insuccessi scolastici;<br />
                        motivare e reinserire nel percorso scolastico i “drop-out” (studenti con più<br />
                    insuccessi scolastici);
                        promuovere le potenzialità del singolo;<br />
                        aiutare ad esprimere “l’intelligenza delle mani”;<br />
                        coinvolgere il giovane in attività integrative e complementari ma ugualmente<br />
                    importanti per la sua crescita globale.<br /><br />

                    L’attività della prima formazione è attualmente articolata in corsi triennali e<br />
                    quadriennali ed è rivolta ad allievi che intendono conseguire una qualifica e/o un<br />
                    diploma professionale nei settori: meccanico macchine utensili; elettrico –<br />
                    energetico; motoristico riparazione veicoli a motore; elettronico – informatico.
                </Typography>
            </Container><br /><br />


            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}>5.2.2.Corsi di formazione superiore e continua</Typography>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                    La formazione superiore o continua permette di raggiungere, in un periodo di tempo<br />
                    più breve, un livello di conoscenze e di professionalità tali da soddisfare sia le<br />
                    aspettative di chi è alla ricerca di un posto di lavoro, sia la richiesta delle aziende di<br />
                    qualificare o riqualificare il proprio personale.<br />
                    Il CFP Don Bosco offre corsi di formazione superiore e continua a catalogo o<br />
                    finanziati dal Fondo Sociale Europeo che possono prevedere ore dedicate allo stage<br />
                    in azienda. Nonostante la diversità delle attività realizzate, il CFP si caratterizza per<br />
                    una forte propensione legata alla Meccanica, all’Automazione industriale e civile,<br />
                    all’Informatica e all’Autoriparazione. Gli obiettivi della formazione superiore e<br />
                    continua sono finalizzati:<br />
                        all’approfondimento delle conoscenze;<br />
                        all’inserimento nel mondo del lavoro o alla riqualificazione del personale<br />
                    occupato;<br />
                        al conseguimento di un attestato di frequenza o di qualifica;<br />
                        all’acquisizione della certificazione delle competenze raggiunte;<br />
                        alla formazione continua cioè al necessario aggiornamento.<br />
                </Typography>
            </Container><br /><br />



            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}>5.2.3.Corsi per apprendisti</Typography>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                    Il CNOS FAP CFP Don Bosco, a partire dal 2000, eroga l’attività di corsi per<br />
                    apprendisti. Tali corsi rispondono all’esigenza di formazione dei giovani lavoratori<br />
                    secondo le modalità previste dalle norme in materia.
                </Typography>
            </Container><br /><br />


            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}>5.3.   Proseguimento degli studi e Sistema Duale</Typography>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                    Da alcuni anni, il percorso che il CFP propone non si conclude con il conseguimento<br />
                    della qualifica, ma offre l’opportunità di proseguire gli studi con un 4° anno<br />
                    formativo.<br />
                    Il valore aggiunto di questa proposta consiste nel preparare persone capaci di<br />
                    rispondere alla complessità del mercato del lavoro favorendo l’acquisizione di<br />
                    competenze tecniche, sviluppando intraprendenza, imprenditorialità e capacità di<br />
                    apprendere dall’esperienza. E’ anche un’opportunità per ottenere una formazione di<br />
                    base conforme agli standard nazionali, per farsi conoscere dalle aziende, per<br />
                    ottenere un inserimento lavorativo agevole e un contratto di apprendistato; <br />
                    Il percorso termina con un esame e il conseguimento di un diploma di tecnico<br />
                    riparatore di veicoli a motore, tecnico per la conduzione e la manutenzione di<br />
                    impianti automatizzati.
                </Typography>
            </Container><br /><br />


            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}>5.3.1.Che cos'è il Sistema Duale?</Typography>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                    E’ un modello di formazione professionale alternata fra scuola e lavoro che vede le<br />
                    istituzioni formative e i datori di lavoro fianco a fianco nel processo formativo.<br />
                    La formazione si attua in collaborazione con l’azienda: le materie teoriche si svolgono<br />
                    presso il CFP mentre la formazione professionalizzante si tiene nei laboratori ed<br />
                    officine aziendali. La formazione aziendale avviene secondo due modalità:<br />
                    l’alternanza scuola - lavoro e il contratto di apprendistato.  <br />
                    La partecipazione al sistema duale di formazione professionale comporta una serie<br />
                    di diritti e doveri: il diritto alla coerenza tra le attività svolte in azienda e il titolo da<br />
                    conseguire; il diritto alla formazione in materia di salute e sicurezza sui luoghi di<br />
                    lavoro, il diritto alla valutazione e certificazione delle competenze. Per essere<br />
                    ammesso all’esame conclusivo l’allievo deve frequentare il 75% del percorso previsto<br />
                    dal Piano Formativo Individuale e raggiungere gli obiettivi formativi per la<br />
                    prosecuzione del contratto. Il mancato conseguimento di tali obiettivi costituisce un<br />
                    giustificato motivo di licenziamento.<br />
                    Alla fine del percorso l’allievo dovrà sostenere un esame il cui superamento porterà al<br />
                    conseguimento di un diploma di qualifica, titolo che permetterà di esplorare nuove<br />
                    opportunità: l’inserimento in azienda come apprendista; la prosecuzione degli studi<br />
                    per giungere all’esame di maturità; la frequenza ad un percorso di ITS.
                </Typography>
            </Container><br /><br />


            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}>5.3.2.Alternanza sscuola lavoro</Typography>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                    Nella forma dell’alternanza l’allievo rimane in carico della struttura formativa e si reca<br />
                    in azienda per le ore previste dall’accordo che viene stipulato tra azienda e CFP.<br />
                    L'alternanza si realizza svolgendo attività all'interno e all'esterno della scuola, in un<br />
                    percorso ideale che parte dalla didattica laboratoriale e giunge al rapporto di<br />
                    collaborazione fra scuole, studenti ed imprese ospitanti. Il percorso è monitorato dai<br />
                    soggetti coinvolti, che affidano al tutor scolastico e aziendale un ruolo di particolare<br />
                    rilievo.
                </Typography>
            </Container><br /><br />


            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}>5.3.3.Il contratto di apprendistato</Typography>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                    Con il contratto di apprendistato, l’alunno apprendista è dipendente dell’azienda;<br />
                    frequenta le ore di formazione presso il CFP, ore per le quali non viene retribuito. Il<br />
                    tempo passato in azienda viene ripartito in ore concordate per la formazione e ore di<br />
                    ordinario lavoro. Il monte ore totale previsto dal sistema duale è di 490 ore di<br />
                    formazione presso il CFP e 500 in azienda.<br />
                    L'apprendistato è un contratto di lavoro a tempo determinato finalizzato alla<br />
                    formazione e all'occupazione giovanile.<br />
                    Il Decreto Legislativo n. 81/2015, operando una revisione profonda della disciplina<br />
                    normativa del Jobs Act, ha reso questo modello contrattuale particolarmente<br />
                    vantaggioso per il datore di lavoro, che può beneficiare di alcune agevolazioni<br />
                    retributive e contributive.
                </Typography>
            </Container><br /><br />


            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}>5.4.    Servizi al Lavoro</Typography>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                    Attraverso i Servizi Al Lavoro (SAL) il nostro Centro Professionale offre la possibilità<br />
                    agli allievi, che ambiscono di trovare lavoro, di essere guidati e supportati nella loro<br />
                    ricerca da un Operatore dell’Orientamento. Il servizio prevede un colloquio iniziale,<br />
                    alcune fasi di consulenza, la valutazione delle competenze e potenzialità del<br />
                    candidato, al fine di favorire un inserimento lavorativo che soddisfi entrambe le parti.
                </Typography>
            </Container><br /><br />


            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}>5.5.   Sistema di certificazione delle competenze e partenarriati</Typography>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                    Il CNOS-FAP CFP Don Bosco fornisce sul territorio la possibilità agli utenti di<br />
                    certificare le proprie competenze proponendo un’offerta formativa arricchita da<br />
                    partenariati stretti con importanti aziende a livello nazionale: FIAT (TECHPRO2),<br />
                    MAGNETI MARELLI, RAPIDOO, ENI, SCHNEIDER, HEIDEHAIN, KNX.
                </Typography>
            </Container><br /><br />


        </Layout>


    )
}