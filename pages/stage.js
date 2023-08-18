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
        title: "",
        category: "",
        description: "",
        immagineUrl: "",
        url: ""
    },
    {
        title: "",
        category: "",
        description: "",
        immagineUrl: "",
        url: ""
    },
    {
        title: "",
        category: "",
        description: "",
        immagineUrl: "",
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
                title="STAGE"
                description="Completano la proposta formativa e permettono il graduale inserimento nel mondo del lavoro"
                imageUrl="https://www.informezgroup.it/wp-content/uploads/2021/08/alternanza-scuola-lavoro-cose-scaled.jpg"
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

                <p>
                    Lo stage rappresenta un momento fondamentale nella formazione professionale perché punto d’incontro tra formazione e lavoro. È uno strumento indispensabile per fare esperienza concreta nel settore prescelto, per valutare la predisposizione verso l’attività intrapresa, per proporsi nel mercato del lavoro con un curriculum arricchito non solo nella forma (titolo rilasciato), ma soprattutto nella sostanza (competenza acquisita nella pratica svolta).
                </p>

                <br />
                <br />

                <h1>Proseguimento degli studi e Sistema Duale</h1>
                <p>
                    Da alcuni anni, il percorso che il CFP propone non si conclude con il conseguimento della qualifica, ma offre l’opportunità di proseguire gli studi con un 4° anno formativo.
                    Il valore aggiunto di questa proposta consiste nel preparare persone capaci di rispondere alla complessità del mercato del lavoro favorendo l’acquisizione di competenze tecniche, sviluppando intraprendenza, imprenditorialità e capacità di apprendere dall’esperienza. E’ anche un’opportunità per ottenere una formazione di base conforme agli standard nazionali, per farsi conoscere dalle aziende, per ottenere un inserimento lavorativo agevole e un contratto di apprendistato;
                    Il percorso termina con un esame e il conseguimento di un diploma di tecnico riparatore di veicoli a motore, tecnico per la conduzione e la manutenzione di impianti automatizzati.
                </p>

                <br />
                <br />

                <h1>Che cos’è il Sistema Duale?</h1>
                <p>
                    E’ un modello di formazione professionale alternata fra scuola e lavoro che vede le istituzioni formative e i datori di lavoro fianco a fianco nel processo formativo.
                    La formazione si attua in collaborazione con l’azienda: le materie teoriche si svolgono presso il CFP mentre la formazione professionalizzante si tiene nei laboratori ed officine aziendali. La formazione aziendale avviene secondo due modalità: l’alternanza scuola - lavoro e il contratto di apprendistato.
                    La partecipazione al sistema duale di formazione professionale comporta una serie di diritti e doveri: il diritto alla coerenza tra le attività svolte in azienda e il titolo da conseguire; il diritto alla formazione in materia di salute e sicurezza sui luoghi di lavoro, il diritto alla valutazione e certificazione delle competenze. Per essere ammesso all’esame conclusivo l’allievo deve frequentare il 75% del percorso previsto dal Piano Formativo Individuale e raggiungere gli obiettivi formativi per la prosecuzione del contratto. Il mancato conseguimento di tali obiettivi costituisce un giustificato motivo di licenziamento.
                    Alla fine del percorso l’allievo dovrà sostenere un esame il cui superamento porterà al conseguimento di un diploma di qualifica, titolo che permetterà di esplorare nuove opportunità: l’inserimento in azienda come apprendista; la prosecuzione degli studi per giungere all’esame di maturità; la frequenza ad un percorso di ITS.
                </p>

                <br />
                <br />

                <h1>Alternanza scuola lavoro</h1>
                <p>Nella forma dell’alternanza l’allievo rimane in carico della struttura formativa e si reca in azienda per le ore previste dall’accordo che viene stipulato tra azienda e CFP.
                    L'alternanza si realizza svolgendo attività all'interno e all'esterno della scuola, in un percorso ideale che parte dalla didattica laboratoriale e giunge al rapporto di collaborazione fra scuole, studenti ed imprese ospitanti. Il percorso è monitorato dai soggetti coinvolti, che affidano al tutor scolastico e aziendale un ruolo di particolare rilievo.
                </p>

                <br />
                <br />

                <h1>Il contratto di apprendistato</h1>
                <p>Con il contratto di apprendistato, l’alunno apprendista è dipendente dell’azienda; frequenta le ore di formazione presso il CFP, ore per le quali non viene retribuito. Il tempo passato in azienda viene ripartito in ore concordate per la formazione e ore di ordinario lavoro. Il monte ore totale previsto dal sistema duale è di 490 ore di formazione presso il CFP e 500 in azienda.
                    L'apprendistato è un contratto di lavoro a tempo determinato finalizzato alla formazione e all'occupazione giovanile.
                    Il Decreto Legislativo n. 81/2015, operando una revisione profonda della disciplina normativa del Jobs Act, ha reso questo modello contrattuale particolarmente vantaggioso per il datore di lavoro, che può beneficiare di alcune agevolazioni retributive e contributive.
                </p>




            </Container>

        </Layout>
    )
}