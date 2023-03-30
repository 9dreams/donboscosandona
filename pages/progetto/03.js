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
                title="Il coordinamento"
                description="e l'animazione dell'azione educativa"
                buttonUrl={'https://youtu.be/0Fh458fo8SQ'}
                buttonText="Guarda il video"
                imageUrl="/images/informatico/settore-informatico.jpg"
                menu={menu}
            /><br />


            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h3" sx={{ color: 'text.secondary' }}>3. IL COORDINAMENTO E L’ANIMAZIONE DELL’AZIONE EDUCATIVA</Typography>
            </Container><br /><br />

            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h6" sx={{ color: 'text.secondary' }}>L’animazione pastorale è responsabilità innanzi tutto della comunità salesiana, in<br /> particolare del direttore e del Consiglio della comunità.<br /><br />

                    La comunità educativa pastorale ha come obiettivo esplicito l’evangelizzazione<br /> attuata attraverso: l’Insegnamento della Religione Cattolica, l’ispirazione cristiana<br /> delle discipline, dei percorsi formativi e delle metodologie didattiche, lo stile delle<br /> relazioni, i momenti di annuncio come il “Buongiorno”, le celebrazioni Eucaristiche,<br /> le Confessioni, i ritiri, la preghiera, gli esercizi spirituali.</Typography>
            </Container><br /><br />

            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}>3.1. Gli Organismi direttivi e di coordinamento</Typography>
            </Container>


            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}>3.1.1. Il Consiglio della casa</Typography>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                    Collabora con il direttore nell’espletamento della sua funzione di primo responsabile<br /> della CEP ed ha come compito primario il mantiene vivo lo spirito e lo stile educativo<br /> di Don Bosco in tutte le attività pastorali.
                </Typography>
            </Container><br /><br />

            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}>3.1.2. Il Consiglio della CEP</Typography>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                    Anima ed orienta tutta l’azione salesiana attraverso la riflessione, il dialogo, la<br /> programmazione e la revisione dell’azione educativo - pastorale.
                </Typography>
            </Container><br /><br />

            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}>3.1.3. L’Equipe di Pastorale Giovanile</Typography>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                    Affianca il coordinatore pastorale nell’adempimento dei propri incarichi. E’ composta<br /> da alcuni docenti coordinatori di classe/corso che insieme programmano,<br /> organizzano, coordinano e stimolano l’azione pastorale del CFP.
                </Typography>
            </Container><br /><br />

            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}>3.2. I ruoli di coordinamento dell’attività didattica e pastorale</Typography>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                    Per un'attività educativa efficace e coordinata all'interno del CFP, esistono ruoli<br /> particolari, definiti dettagliatamente nel mansionario allegato al “Manuale della<br /> Qualità”. Le figure di maggior riferimento per gli allievi sono:
                </Typography>
            </Container><br /><br />



            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}>3.2.1. Il Direttore dell’Opera Oratorio Don Bosco.</Typography>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                    Ha il compito di mantener vivo lo spirito e lo stile educativo di Don Bosco tra<br /> formatori, genitori e allievi; è il responsabile dell’opera e dei rapporti con i terzi;<br /> nomina su proposta del direttore del CFP i coordinatori, i docenti e i formatori laici;<br /> accetta e dimette gli alunni; ha facoltà di partecipare all’assemblea dei formatori e ai<br /> consigli di classe/corso. E’ il primo responsabile dell'azione formativo-professionale;<br /> assicura la gestione operativa del Centro garantendo l'attuazione della missione<br /> educativa e la promozione dei valori fondanti dell’Ente; ha compito amministrativo,<br /> di animazione e di organizzazione, in sintonia d’intenti con il direttore della casa<br /> salesiana ed il Consiglio della CEP.
                </Typography>
            </Container><br /><br />


            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}>3.2.2. Il Coordinatore Pastorale (Catechista).</Typography>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                    E’ responsabile dell'animazione delle attività pastorali del CFP; organizza i momenti<br /> di preghiera, le celebrazioni, le giornate di ritiro e la partecipazione dei giovani ai<br /> sacramenti della Riconciliazione e dell’Eucaristia; in collaborazione con il direttore,<br /> cura la formazione spirituale salesiana ed educativa dei docenti/formatori; assicura la<br /> relazione della CEP con la pastorale della Chiesa locale e con altre istituzioni<br /> educative del territorio; garantisce la disponibilità per la direzione spirituale, per i<br /> colloqui, per gli incontri personali con i ragazzi; promuove una particolare attenzione<br /> ai giovani in difficoltà o non inseriti in un contesto parrocchiale; coordina le iniziative<br /> di animazione vocazionale; favorisce il dialogo tra fede e cultura nelle diverse aree di<br /> insegnamento; segue l’animazione del tempo libero e delle attività complementari,<br /> con particolare attenzione all’associazionismo.
                </Typography>
            </Container><br /><br />


            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}>3.2.3. L’Economo o coordinatore della gestione amministrativa</Typography>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                    L’economo cura, in collaborazione con il direttore della casa e il suo consiglio, gli<br /> aspetti amministrativi e fiscali della gestione dell’opera e dell’attività scolastica..
                </Typography>
            </Container><br /><br />



            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}>3.2.4. Il Vice-Direttore del CFP</Typography>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                    Collabora strettamente con il direttore del CFP e svolge compiti delegati; cura la<br /> realizzazione del calendario, dell’orario, delle attività formative e dell’assistenza; vigila<br /> sulle assenze degli allievi; favorisce i colloqui tra genitori e insegnanti; contribuisce a<br /> creare un ambiente favorevole all’ordinato svolgimento delle attività; assicura un<br /> comportamento disciplinato degli allievi in accordo con il Progetto Educativo e<br /> coordina gli interventi disciplinari.
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
                <Typography variant="h5" sx={{ color: 'blue' }}>3.2.5. Il Tutor</Typography>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                    Si occupa di seguire il percorso formativo degli allievi in difficoltà organizzando<br /> attività a supporto della didattica; organizza e coordina gli insegnanti di sostegno;<br /> tiene i rapporti con gli Enti e i soggetti del territorio preposti a seguire il disagio; è<br /> referente alla salute e DSA.
                </Typography>
            </Container><br /><br />



            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}>3.2.6. Il Coordinatore dell’Orientamento.</Typography>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                    Coordina tutte le attività di orientamento; mantiene il contatto con la realtà<br /> scolastica delle scuole secondarie di primo e secondo grado del territorio per offrire<br /> percorsi adatti o alternativi agli alunni che si sentono portati per la formazione<br /> professionale.
                </Typography>
            </Container><br /><br />


            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}>3.2.7. Il Coordinatore di settore.</Typography>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                    Anima e coordina i formatori del proprio settore; coordina le attività, esegue gli<br /> acquisti del materiale di consumo; propone innovazioni tecnologiche e didattiche;<br /> collabora per la stesura dei progetti formativi; tiene i rapporti con le aziende del<br /> settore e organizza gli stage degli allievi.


                </Typography>
            </Container><br /><br />


            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}>3.2.8. Il Coordinatore di classe.</Typography>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                    Segue l’andamento generale della classe/corso e le situazioni individuali coordinando<br /> gli interventi didattici, educativi e pastorali; anima le relazioni interpersonali e<br /> coordina le iniziative all’interno delle classi/corsi; redige la presentazione della classe<br /> e consegna le pagelle ogni qual volta c’è l’incontro con i genitori; prepara la proposta<br /> di valutazione educativa in vista degli scrutini; redige il verbale di classe; fa presente<br /> al Direttore e al Vice-Direttore eventuali difficoltà nella conduzione della classe;<br /> organizza le visite tecniche.
                </Typography>
            </Container><br /><br />


            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}>3.2.9. I rappresentanti dei genitori</Typography>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                    Costituiscono un efficace tramite tra CFP e famiglia agevolando i rapporti tra<br /> docenti/formatori, genitori e studenti; si fanno portavoce dei problemi generali della<br /> classe/corso; partecipano ai consigli di classe/corso nei quali sia prevista la loro<br /> presenza.
                </Typography>
            </Container><br /><br />

            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}>3.2.10. I rappresentanti di classe degli alunni.</Typography>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                    Sono eletti dai compagni in numero di due; si fanno portavoce dei problemi e delle<br /> esigenze della propria classe; collaborano con i formatori e il coordinatore per<br /> mantenere all’interno della classe un clima sereno; si impegnano a far rispettare il<br /> regolamento; assicurano la loro presenza ai consigli di classe; richiedono,<br /> organizzano e guidano l’assemblea di classe redigendo il verbale da consegnare al<br /> Direttore del CFP.<br /><br />

                    Possono essere rimossi o sostituiti qualora non siano in grado di gestire il compito<br /> loro assegnato, o il loro comportamento non risultasse esemplare per i compagni.
                </Typography>
            </Container><br /><br />

            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}>3.3.  Le strutture di partecipazione</Typography>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                    Le strutture di partecipazione e corresponsabilità mirano a creare le condizioni<br /> migliori per una sempre maggiore comunione e collaborazione tra le diverse<br /> componenti della CEP.
                </Typography>
            </Container><br /><br />

            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}>3.3.1. Assemblea formatori</Typography>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                    È composta dal direttore, da tutti i formatori e da tutti gli educatori. All’assemblea dei<br /> formatori, convocata a scadenza settimanale, compete la programmazione degli<br /> orientamenti educativi e didattico/formativi in coerenza al progetto educativo.
                </Typography>
            </Container><br /><br />



            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}>3.3.2. Commissioni e dipartimenti</Typography>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                    Le commissioni e i dipartimenti (pastorale, disciplinare, ecc.…) si occupano in<br /> particolare di progettare, programmare e garantire l’attuazione delle iniziative<br /> inerenti l’azione educativa. Sono presiedute dal direttore del CFP, che può delegarne<br /> la conduzione ai docenti/coordinatori di settore.
                </Typography>
            </Container><br /><br />


            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}>3.3.3. Consiglio di classe.</Typography>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                    È composto dai formatori, dai rappresentanti dei genitori degli alunni di corso e dai<br /> rappresentanti di corso degli alunni ma può essere allargato agli educatori, al<br /> direttore della casa e al coordinatore pastorale. È presieduto dal direttore del CFP e<br /> guidato dal vice coordinatore didattico. Il compito di segretario viene svolto da un<br /> formatore designato dal direttore del CFP.<br /><br />

                    Il C.d.C. è momento di analisi dei passi compiuti dagli allievi, di individuazione dei<br /> problemi e ricerca di soluzioni adeguate.<br /><br />

                    La realizzazione delle unità didattiche, la valutazione periodica e finale degli alunni<br /> spettano al consiglio classe convocato con la sola presenza dei docenti.
                </Typography>
            </Container><br /><br />


            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}>3.3.4. Assemblea di classe</Typography>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                    È composta da tutti gli alunni di un corso. Può essere convocata solo previa<br /> approvazione dell’ordine del giorno da parte del direttore del CFP. Offre l’occasione<br /> di riflettere sull’andamento del percorso formativo; sollecita l’individuazione di un<br /> “impegno” mensile a fronte di un problema emerso.
                </Typography>
            </Container><br /><br />


        </Layout>


    )
}