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
                    In conformità a quanto previsto dal Regolamento Europeo (UE) 2016/679 per la protezione dei dati personali la informiamo che l’Associazione C.F.P. CNOS/FAP Don Bosco ha nominato il Responsabile della Protezione dei Dati (RPD o DPO).

                    <br />
                    <br />

                    <h2> Dati di contatto del Responsabile della Protezione dei Dati. </h2>
                    Avv. Marco Bernabè
                    <br /> Via dei Salesiani, 15
                    <br /> 30174 Venezia - Mestre (VENEZIA)
                    <br /> e-mail: marco.bernabe@ordineavvocativicenza.it
                    <br /> tel. 392 154 9739

                    <br />
                    <br />

                    <h2> Documentazione utile: </h2>
                    Regolamento UE 2016 679. Con riferimenti ai considerando
                    <br /> Guida all’applicazione del Regolamento europeo in materia di protezione dei dati personali
                    <br />
                    <br />

                    <h3><center> INFORMATIVA SUL TRATTAMENTO DEI DATI PERSONALI </center></h3>
                    <h3><center>AI SENSI DELL ART. 13</center></h3>
                    <h3><center>DEL GDPR (GENERAL DATA PROTECTION REGULATION) 2016/679</center></h3>
                    <br />PERCHÉ QUESTE INFORMAZIONI?
                    <br />Ai sensi dell’art. 13 del Regolamento UE 2016/679 (d’ora in poi Regolamento o anche solo GDPR) ti descriviamo le modalità di trattamento dei dati personali degli utenti che consultano questo sito web.

                    <br /> Ti precisiamo prima di tutto che il sito internet www.donboscosandona.it è di titolarità e gestito da Associazione CFP CNOS-FAP DON BOSCO, via XIII Martiri, 86 – 30027 San Donà di Piave (VE).

                    <br />Raccogliamo i dati da te inseriti e i dati di navigazione per l’esecuzione del contratto.

                    <br />Nel prosieguo, Ti illustreremo, quindi, le modalità e finalità di gestione del sito in riferimento al trattamento dei dati personali utilizzati nell’una e nell’altra ipotesi.

                    <br />Ti precisiamo fin d’ora che il trattamento è effettuato in ossequio ai principi di liceità e correttezza, in conformità alla normativa vigente.

                    <br />La presente informativa non è da considerarsi valida per altri siti web eventualmente consultabili tramite links presenti su questo sito internet, rispetto ai quali non siamo in alcun modo responsabile

                    <br />
                    <br />
                    <br />




                    <h4><center>IDENTITÀ DI CONTATTO DEL TITOLARE DEL TRATTAMENTO DEI DATI PERSONALI E RESPONSABILE DELLA PROTEZIONE DEI DATI (RPD)</center></h4>
                    Ai sensi dell’art. 13 e 14 del GDPR Ti comunichiamo che il Titolare del trattamento dei tuoi dati personali forniti attraverso il sito internet è Associazione C.F.P. CNOS/FAP Don Bosco – Via XIII Martiri 86 - 30027 San Donà di Piave (VE). Il Responsabile della protezione dei dati (RPD o DPO) è contattabile al seguente indirizzo: dpo@salesianinordest.it o telefonicamente al 041.2030438.
                    <br />
                    <br />
                    <h4><center>QUALI DATI TRATTIAMO? PER CHE FINALITÀ?</center></h4>
                    Ti precisiamo che sono dati personali le informazioni che si riferiscono a una persona fisica identificata o identificabile, come il nome, l'indirizzo e-mail, il numero di telefono, l'indirizzo postale o l'indirizzo IP del computer.

                    <br />
                    <br />Sono dati particolari quelli che rivelano l’origine razziale o etnica, le opinioni politiche, le convinzioni religiose o filosofiche, o l’appartenenza sindacale, nonché i dati genetici, dati biometrici intesi a identificare in modo univoco una persona fisica, i dati relativi alla salute o alla vita sessuale o all’orientamento sessuale della persona.

                    <br />
                    <br />Nel nostro sito tendenzialmente trattiamo solo dati personali (sono gli unici richiesti per la conclusione del contratto o per l’iscrizione alle newsletter) ma potrebbe succedere che, incidentalmente, possano essere trattati dati particolari (pensa, ad esempio, se la tua mail dovesse manifestare il tuo orientamento religioso o politico).

                    <br />
                    <br />Ti precisiamo che nel sito in cui stai navigando vengono raccolti i seguenti dati personali:

                    <br />
                    <br /><h4><center>DATI DA TE INSERITI</center></h4>

                    Sono i dati personali da te inseriti nei campi di registrazione, per accedere alle newsletter da noi proposte, per crearti (eventualmente) un account utente personale o per stipulare un contratto con noi. Questi dati sono da noi trattati per le seguenti finalità:

                    <br />
                    <br />1) La vendita o l’acquisto dei prodotti e servizi reperiti nel sito web e per le attività che ne siano direttamente o indirettamente connesse come, ad esempio, l’instaurazione e l’esecuzione del contratto o l’esecuzione di eventuali trattative precontrattuali in funzione della conclusione del successivo contratto, nonché per tutti gli obblighi direttamente o indirettamente connessi allo stesso.

                    <br />
                    <br />2) Per obblighi di legge di natura fiscale, amministrativa, tributaria etc. (ad esempio amministrazione clienti/fornitori; gestione del rapporto contrattuale; fatturazione; gestione ordini; incassi e pagamenti, consegna del bene).

                    <br />
                    <br />3) Per il perseguimento del legittimo interesse del titolare (a titolo esemplificativo ma non esaustivo: difesa in giudizio nel caso fosse necessario, ma anche marketing diretto) in ogni caso nel rispetto dei prevalenti diritti e libertà fondamentali dell’interessato che richiedono la protezione dei dati personali.

                    <br />
                    <br />4) Per l’invio di newsletter relative a prodotti e servizi o eventi riconducibili all’Ente su specifica richiesta dell’interessato.

                    In questi casi la base giuridica del trattamento è costituita dall’adempimento del contratto e dall’obbligo legale di trattare i dati (cfr. GDPR art. 6 lett. b), c) f)), nonché dal tuo consenso per le newsletter (GDPR art. 6 lett a).

                    <br />Nel caso (solo eventuale, come anticipato precedentemente) di trattamento di dati particolari, la base giuridica di trattamento è costituita dal fatto che il trattamento è effettuato da un Ente ecclesiastico che persegue finalità religiose relativamente al trattamento dei membri, gli ex membri o le persone che hanno regolari contatti con l'ente a motivo delle sue finalità quando i dati personali non sono comunicati all’esterno e dal consenso nelle residue ipotesi (GDPR art. 9 lett. A) D) E) F)).

                    <br />Ti precisiamo infine che l'invio facoltativo, esplicito e volontario di messaggi agli indirizzi di contatto dell’Ente, nonché la compilazione e l'inoltro dei moduli presenti sul sito comportano l'acquisizione dei dati di contatto del mittente, necessari a rispondere, nonché di tutti i dati personali inclusi nelle comunicazioni.

                    <h4>DATI REGISTRATI AUTOMATICAMENTE</h4>
                    <h4>Dati di navigazione</h4>

                    I sistemi informatici e le procedure software preposte al funzionamento di questo sito acquisiscono, nel corso del loro normale esercizio, alcuni dati personali la cui trasmissione è implicita nell'uso dei protocolli di comunicazione di Internet.
                    <br />
                    <br />
                    In questa categoria di dati rientrano:

                    <br />
                    <li>L'indirizzo della pagina che visiti sul nostro sito web</li>
                    <li>l'indirizzo IP del dispositivo</li>
                    <li>l'indirizzo del sito web visitato immediatamente prima (il cosiddetto "referrer")</li>
                    <li>data e ora della tua visita</li>
                    <li>le proprietà del dispositivo, in particolare il sistema operativo, il browser utilizzato e la dimensione della finestra del browser</li>

                    <br />i nomi a dominio dei computer e dei terminali utilizzati dagli utenti, gli indirizzi in notazione URI/URL (Uniform Resource Identifier/Locator) delle risorse richieste, l'orario della richiesta, il metodo utilizzato nel sottoporre la richiesta al server, la dimensione del file ottenuto in risposta, il codice numerico indicante lo stato della risposta data dal server (buon fine, errore, ecc.) ed altri parametri relativi al sistema operativo e all'ambiente informatico dell'utente.

                    <br />
                    <br />Tali dati, necessari per la fruizione dei servizi web, vengono anche trattati allo scopo di:
                    <li>Ottenere informazioni statistiche sull'uso dei servizi (pagine più visitate, numero di visitatori per fascia oraria o giornaliera, aree geografiche di provenienza, ecc.);</li>
                    <li>Controllare il corretto funzionamento dei servizi offerti.</li>

                    <br />I dati di navigazione non persistono per più di un anno e vengono cancellati immediatamente dopo la loro anonimizzazione (salve eventuali necessità di accertamento di reati da parte dell'Autorità giudiziaria).

                    <br />
                    <br />COOKIE E ALTRI SISTEMI DI TRACCIAMENTO

                    <br />
                    <br />Non viene fatto uso di cookie per la profilazione degli utenti, né vengono impiegati altri metodi di tracciamento.

                    <br />
                    <br />Viene, invece, fatto uso di cookie di sessione (non persistenti) in modo strettamente limitato a quanto necessario per la navigazione sicura ed efficiente dei siti. La memorizzazione dei cookie di sessione nei terminali o nei browser è sotto il controllo dell'utente, laddove sui server, al termine delle sessioni HTTP, informazioni relative ai cookie restano registrate nei log dei servizi.

                    <br />
                    <br />Il sito si appoggia a Google Analytics che svolge profilazione in forma anonima, inoltre è possibile condivisione di materiale con Facebook

                    <br />
                    <br />
                    <h4>c. Destinatari dei dati personali</h4>
                    I dati saranno trattati all’interno della struttura dal personale autorizzato preposto alla gestione del sito internet e all’amministrazione e contabilità e potranno essere comunicati ai seguenti soggetti nominati responsabili esterni del trattamento:

                    <br />
                    <br />
                    Aruba spa per il servizio di hosting

                    <br />
                    <br />L’elenco aggiornato dei responsabili esterni nominati è disponibile a semplice richiesta.

                    Potranno, inoltre, essere comunicati ad altre Case salesiane per il perseguimento delle medesime finalità per cui sono stati raccolti, nonché agli istituti bancari e a società esterne (ad esempio consorzi) che prestano servizi strumentali all’esecuzione del contratto.
                    <br />
                    <br />
                    I dati raccolti non verranno in alcun modo diffusi.

                    <br />
                    <br />
                    <h4>d. Periodo di conservazione dei dati personali</h4>
                    I tuoi dati comunicati per la conclusione del contratto saranno conservati per tutta la durata del contratto e per il periodo di tempo successivo prescritto da legge. In particolare si precisa che le scritture contabili, le fatture e la corrispondenza saranno conservati per 10 anni come previsto dalla legge; i dati necessari alla gestione di un eventuale contenzioso o recupero credito saranno conservati fino alla definizione del contenzioso.
                    <br />
                    <br />
                    I dati forniti per l’iscrizione alle newsletter saranno conservati per il periodo in cui il servizio è attivo.


                </p>
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
