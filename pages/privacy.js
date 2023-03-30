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
                title="Centro Privacy-Policy"
                description="Leggi qua per la privacy policy"
                buttonText="Guarda il video"
                imageUrl="/images/privacy/imgsfondo.webp"
            />
            <Paragraph
                title="GDPR"
                subtitle="La tutela della privacy"
                columnCount={2}
            >
                Il nuovo Regolamento Europeo (UE) 2016/679 del Parlamento Europeo (GDPR) relativo alla protezione dei dati è stato pubblicato sulla GUUE del 4 maggio 2016, è entrato in vigore il 24 maggio del 2016 ed è divenuto pienamente operativo negli Stati membri dal 25 maggio 2018.
                Tale regolamento consolida e rende più omogenea la protezione dei dati personali dei cittadini e dei residenti dell’Unione Europea evitando lacune di tutela in ambito europeo e consacrando il diritto alla protezione dei dati personali degli interessati tra i diritti fondamentali e costituzionali.
                In conformità a quanto previsto dal Regolamento Europeo (UE) 2016/679 per la protezione dei dati personali la informiamo che l’Associazione C.F.P. CNOS/FAP Don Bosco ha nominato il Responsabile della Protezione dei Dati (RPD o DPO).
            </Paragraph>
            <Paragraph
                subtitle="Dati di contatto del Responsabile della Protezione dei Dati."
                backgroundColor="#fed"
            >
                <b>Avv. Marco Bernabè</b>
                <br />Via dei Salesiani, 15
                <br />30174 Venezia - Mestre (VENEZIA)
                <br />e-mail: marco.bernabe@ordineavvocativicenza.it
                <br />tel. 392 154 9739
            </Paragraph>
            <Paragraph
                title="Documentazione utile"
            >
                <Link href="http://www.garanteprivacy.it/web/guest/home/docweb/-/docweb-display/docweb/6264597">
                    Regolamento UE 2016 679. Con riferimenti ai considerando
                </Link>
                <br />
                <Link href="http://www.garanteprivacy.it/web/guest/regolamentoue/guida-all-applicazione-del-regolamento-europeo-in-materia-di-protezione-dei-dati-personali">
                    Guida all’applicazione del Regolamento europeo in materia di protezione dei dati personali
                </Link>
            </Paragraph>
            <Paragraph
                title="INFORMATIVA SUL TRATTAMENTO DEI DATI PERSONALI AI SENSI DELL ART. 13 DEL GDPR (GENERAL DATA PROTECTION REGULATION) 2016/679"
                subtitle="Perché queste informazioni"
            >
                Ai sensi dell’art. 13 del Regolamento UE 2016/679 (d’ora in poi Regolamento o anche solo GDPR) ti descriviamo le modalità di trattamento dei dati personali degli utenti che consultano questo sito web.
                <br />Ti precisiamo prima di tutto che il sito internet www.donboscosandona.it è di titolarità e gestito da Associazione CFP CNOS-FAP DON BOSCO, via XIII Martiri, 86 - 30027 San Donà di Piave (VE).
                <br />Raccogliamo i dati da te inseriti e i dati di navigazione per l’esecuzione del contratto.
                <br />Nel prosieguo, Ti illustreremo, quindi, le modalità e finalità di gestione del sito in riferimento al trattamento dei dati personali utilizzati nell’una e nell’altra ipotesi.
                <br />Ti precisiamo fin d’ora che il trattamento è effettuato in ossequio ai principi di liceità e correttezza, in conformità alla normativa vigente.
                <br />
                <br />La presente informativa non è da considerarsi valida per altri siti web eventualmente consultabili tramite links presenti su questo sito internet, rispetto ai quali non siamo in alcun modo responsabile.
            </Paragraph>

            <Container maxWidth="lg" sx={{ marginTop: '3rem', marginBottom: '3rem' }}>
                <font face="Verdana">
                    a. <strong>IDENTITÀ DI CONTATTO DEL TITOLARE DEL TRATTAMENTO DEI DATI PERSONALI E RESPONSABILE DELLA PROTEZIONE DEI DATI (RPD)</strong>
                    <p>
                        Ai sensi dell’art. 13 e 14 del GDPR Ti comunichiamo che il Titolare del trattamento dei tuoi dati personali forniti attraverso il sito internet è Associazione C.F.P. CNOS/FAP Don Bosco Via XIII Martiri 86 - 30027 San Donà di Piave (VE). Il Responsabile della protezione dei dati (RPD o DPO) è contattabile al seguente indirizzo: dpo@salesianinordest.it o telefonicamente al 041.2030438.
                    </p>

                    b.  <strong> QUALI DATI TRATTIAMO? PER CHE FINALITÀ? </strong>


                    <p>Sono i dati personali da te <strong>inseriti nei campi di registrazione</strong>, per accedere alle newsletter da noi proposte, per crearti (eventualmente) un  account utente personale o per stipulare un contratto con noi. Questi dati sono da noi trattati per le seguenti finalità:
                        <br />
                        <br />
                        1)la vendita o l’acquisto dei prodotti e servizi reperiti nel sito web e per le attività che ne siano direttamente o indirettamente connesse come, ad esempio, l’instaurazione e l’esecuzione del contratto o l’esecuzione di eventuali trattative precontrattuali in funzione della conclusione del successivo contratto, nonché per tutti gli obblighi direttamente o indirettamente connessi allo stesso.

                        <br />
                        <br />

                        2)per obblighi di legge di natura fiscale, amministrativa, tributaria etc. (ad esempio amministrazione clienti/fornitori; gestione del rapporto contrattuale; fatturazione; gestione ordini; incassi e pagamenti, consegna del bene).

                        <br />
                        <br />

                        3)per il perseguimento del legittimo interesse del titolare (a titolo esemplificativo ma non esaustivo: difesa in giudizio nel caso fosse necessario, ma anche marketing diretto) in ogni caso nel rispetto dei prevalenti diritti e libertà fondamentali dell’interessato che richiedono la protezione dei dati personali.

                        <br />
                        <br />

                        4)per l’invio di newsletter relative a prodotti e servizi o eventi riconducibili all’Ente su specifica richiesta dell’interessato.

                        <br />
                        <br />

                        In questi casi la base giuridica del trattamento è costituita dall’adempimento del contratto e dall’obbligo legale di trattare i dati (cfr. GDPR art. 6 lett. b), c) f)), nonché dal tuo consenso per le newsletter (GDPR art. 6 lett a).

                        <br />
                        <br />

                        Nel caso (solo eventuale, come anticipato precedentemente) di trattamento <strong>di dati particolari, la base giuridica di trattamento è costituita</strong> dal fatto che il trattamento è effettuato da un Ente ecclesiastico che persegue finalità religiose relativamente al trattamento dei membri, gli ex membri o le persone che hanno regolari contatti con l'ente a motivo delle sue finalità quando i dati personali non sono comunicati all’esterno e dal consenso nelle residue ipotesi (GDPR art. 9 lett. A) D) E) F)).

                        <br />
                        <br />

                        Ti precisiamo infine che l'invio facoltativo, esplicito e volontario di messaggi agli indirizzi di contatto dell’Ente, nonché la compilazione e l'inoltro dei moduli presenti sul sito comportano l'acquisizione dei dati di contatto del mittente, necessari a rispondere, nonché di tutti i dati personali inclusi nelle comunicazioni.
                    </p>

                    <br />
                    <br />
                    <i>DATI REGISTRATI AUTOMATICAMENTE</i>

                    <br />
                    <u>Dati di navigazione</u>
                    <br />
                    <br />
                    I sistemi informatici e le procedure software preposte al funzionamento di questo sito acquisiscono, nel corso del loro normale esercizio, alcuni dati personali la cui trasmissione è implicita nell'uso dei protocolli di comunicazione di Internet.
                    <br />
                    <br />

                    In questa categoria di dati rientrano:
                    <br />
                    <br />
                    <li>L'indirizzo della pagina che visiti sul nostro sito web</li>
                    <li>l'indirizzo IP del dispositivo</li>
                    <li>l'indirizzo del sito web visitato immediatamente prima (il cosiddetto "referrer")</li>
                    <li>data e ora della tua visita</li>
                    <li>le proprietà del dispositivo, in particolare il sistema operativo, il browser utilizzato e la dimensione della finestra del browser</li>


                    i nomi a dominio dei computer e dei terminali utilizzati dagli utenti, gli indirizzi in notazione URI/URL (Uniform Resource Identifier/Locator) delle risorse richieste, l'orario della richiesta, il metodo utilizzato nel sottoporre la richiesta al server, la dimensione del file ottenuto in risposta, il codice numerico indicante lo stato della risposta data dal server (buon fine, errore, ecc.) ed altri parametri relativi al sistema operativo e all'ambiente informatico dell'utente.



                    Tali dati, necessari per la fruizione dei servizi web, vengono anche trattati allo scopo di:
                    <li>
                        Ottenere informazioni statistiche sull'uso dei servizi (pagine più visitate, numero di visitatori per fascia oraria o giornaliera, aree geografiche di    provenienza, ecc.);
                    </li>

                    <li>Controllare il corretto funzionamento dei servizi offerti.</li>

                    <br />
                    I dati di navigazione non persistono per più di un anno e vengono cancellati immediatamente dopo la loro anonimizzazione (salve eventuali necessità di accertamento di reati da parte dell'Autorità giudiziaria).
                    <br />
                    <br />
                    COOKIE E ALTRI SISTEMI DI TRACCIAMENTO
                    <br />
                    <br />
                    Non viene fatto uso di cookie per la profilazione degli utenti, né vengono impiegati altri metodi di tracciamento.
                    <br />
                    <br />
                    Viene, invece, fatto uso di cookie di sessione (non persistenti) in modo strettamente limitato a quanto necessario per la navigazione sicura ed efficiente dei siti. La memorizzazione dei cookie di sessione nei terminali o nei browser è sotto il controllo dell'utente, laddove sui server, al termine delle sessioni HTTP, informazioni relative ai cookie restano registrate nei log dei servizi.

                    <br />
                    <br />

                    Il sito si appoggia a Google Analytics che svolge profilazione in forma anonima, inoltre è possibile condivisione di materiale con Facebook

                    <br />
                    <br />
                    c.   <strong>Destinatari dei dati personali</strong>
                    <p>

                        I tuoi dati comunicati per la conclusione del contratto saranno conservati per tutta la durata del contratto e per il periodo di tempo successivo prescritto da legge. In particolare si precisa che le scritture contabili, le fatture e la corrispondenza saranno conservati per 10 anni come previsto dalla legge; i dati necessari alla gestione di un eventuale contenzioso o recupero credito saranno conservati fino alla definizione del contenzioso.
                        <br />
                        <br />
                        I dati forniti per l’iscrizione alle newsletter saranno conservati per il periodo in cui il servizio è attivo.

                    </p>

                    d.   <strong>Obbligo di conferire i dati</strong>
                    <p>

                        Il conferimento dei dati è obbligatorio e necessario per lo svolgimento del contratto stipulato tra te e il Titolare del trattamento e per ricevere le newsletter, per cui l’eventuale rifiuto di conferire i dati personali richiesti comporta la cessazione del rapporto.
                        <br />
                        <br />
                        Il titolare rende noto, inoltre, che l'eventuale non comunicazione, o comunicazione errata, di una delle informazioni obbligatorie, ha come conseguenza l'impossibilità del titolare di garantire la congruità del trattamento stesso ai patti contrattuali per cui esso sia eseguito e la possibile mancata corrispondenza dei risultati del trattamento stesso agli obblighi imposti dalla normativa fiscale, amministrativa o del lavoro cui esso è indirizzato.
                    </p>

                    f.    <strong>Diritti dell’interessato</strong>

                    <p>

                        Potrai richiedere in ogni momento al titolare del trattamento l’accesso ai dati personali che ti riguardano e la rettifica o la cancellazione degli stessi o la limitazione del trattamento o di opporsi al loro trattamento (artt. 15 e ss. Del Regolamento), nonché il diritto alla portabilità dei dati, come previsto all’art. 13 comma 2 lettera b) GDPR.

                        <br />
                        <br />

                        La cancellazione non è consentita per i dati contenuti negli atti che devono obbligatoriamente essere conservati per legge.

                        <br />
                        <br />

                        Potrai revocare il consenso in qualsiasi momento, senza pregiudicare la liceità del trattamento basata sul consenso prestato prima della revoca.

                        <br />
                        <br />

                        Hai, inoltre, il diritto di proporre reclamo al Garante, come previsto dall'art. 77 del Regolamento stesso, o di adire le opportune sedi giudiziarie (art. 79 del Regolamento) nel caso in cui tu ritenga che il trattamento dei dati personali a te riferiti effettuato attraverso questo sito avvenga in violazione di quanto previsto dal Regolamento.
                    </p>
                    g.   <strong>Modalità di esercizio dei diritti</strong>

                    <p>Potrai in qualsiasi momento esercitare i diritti con raccomandata a.r. a Associazione C.F.P. CNOS/FAP Don Bosco Via XIII Martiri 86 – 30027 San Donà di Piave (VE),  oppure inviando una e-mail all’indirizzo privacy@donboscosandona.it indicando nell’oggetto la dicitura “accesso privacy”.</p>

                    <br />
                    <br />

                    <center><h2>Quali sono le informazioni che permettiamo ad altri servizi di raccogliere</h2></center>
                    <p>
                        Quando viene utilizzato il nostro sito web possiamo consentire a terzi di raccogliere informazioni su dispositivi, utilizzo e informazioni sulla posizione tramite cookie e altre tecnologie simili. Questi soggetti terzi raccolgono queste informazioni per i seguenti scopi e per altri scopi coerenti con le loro politiche sulla privacy:
                    </p>

                    <li>
                        Per analizzare l’uso dei nostri servizi: consentiamo a determinati fornitori di servizi di raccogliere queste informazioni per aiutarci a capire come viene utilizzato il nostro sito web e per aiutarci a migliorare il contenuto e il funzionamento dello stesso. Questi fornitori di servizi raccolgono dati di utilizzo statistico aggregati che non sono abbinati o collegati a nessun singolo utente.
                    </li>
                    <br />
                    <li>
                        Per fare in modo che i servizi di altre società funzionino sul nostro sito web: consentiamo alle aziende di utilizzare cookie e altre tecnologie simili per migliorare servizi e funzionalità del nostro sito web.
                    </li>
                    <br />
                    <li>
                        Per collegare la tua attività sul nostro sito web ai social network: abbiamo aggiunto alcune funzionalità al nostro sito web che consentono ai social network (come Facebook, Twitter, LinkedIn) di tenere traccia delle tue attività o di raccogliere determinate informazioni quando viene utilizzato il nostro sito web. Se sei preoccupato per il modo in cui un social network sta monitorando la tua attività, ti preghiamo di contattare il social network o rivedere la sua politica sulla privacy. Ad esempio, puoi consultare la politica sull’uso dei dati di Facebook all’indirizzo https://www.facebook.com/about/privacy/.
                    </li>


                    <br />
                    <br />

                    <center><h2>Cookies e tecnologie simili</h2></center>
                    <p>
                        Possiamo utilizzare una varietà di tecnologie per raccogliere informazioni sul tuo dispositivo e sull’utilizzo del nostro sito web. Queste tecnologie includono cookie, javascript, entity tags e archiviazione locale HTML. La maggior parte dei browser web può essere impostata per accettare o rifiutare l’utilizzo di alcune o tutte queste tecnologie. Per maggiori informazioni, consultare la sezione di questo documento dal titolo “Scegli come gestire i tuoi dati”.
                    </p>
                    <li>
                        Cookie – I cookie sono piccoli file di dati che vengono inviati dal server di un sito web e sono memorizzati sul disco rigido del dispositivo dell’utente solo per la durata della visita (“cookie di sessione”) o per un periodo determinato (“cookie permanenti”). I cookie contengono informazioni che possono essere successivamente lette da un server web.
                    </li>
                    <br />
                    <li>
                        Java Script: i Java Script sono snippet di codice incorporati in varie parti di un sito web allo scopo di facilitare varie operazioni, tra cui la velocità di aggiornamento di determinate funzionalità o il monitoraggio dell’utilizzo di vari componenti online.
                    </li>
                    <br />
                    <li>
                        Entity Tags e archiviazione HTML5: sono funzionalità che consentono di memorizzare porzioni di siti web e di memorizzarli nella cache all’interno del browser, accelerando le prestazioni del sito web.
                    </li>

                    <br />
                    <br />

                    <center><h2>Perché vengono utilizzate queste tecnologie</h2></center>

                    <p>
                        Alcune di queste tecnologie ci aiutano ad analizzare il traffico web e a valutare il volume di utilizzo delle funzionalità sul nostro sito web. Ci mostrano come i visitatori interagiscono, se ci sono errori di navigazione, il livello di utilizzo di determinate pagine web. Quando queste tecnologie vengono utilizzate per il monitoraggio delle prestazioni, non vengono raccolte informazioni che ti identificano.
                        <br />
                        <br />
                        Alcune di queste tecnologie migliorano la facilità d’uso del sito web accelerando i tempi di caricamento e aggiornamento delle pagine.
                    </p>


                    <br />
                    <br />

                    <center><h2>Quali cookie sono utilizzati sul nostro sito</h2></center>
                    <p>
                        Su nostro sito sono presenti solamente cookie di tipo tecnico, che pertanto non prevedono il consenso da parte dell’utente. Questi cookie sono necessari per il funzionamento del sito, raccogliendo dati di utilizzo in modo aggregato e in forma anonima.
                        <br />
                        <br />
                        I cookie che utilizziamo sono:
                    </p>

                    <li>
                        Cookie tecnici per il funzionamento del sito web;
                    </li>
                    <li>
                        Cookie di Google analytics che raccolgono dati di navigazione aggregati e in forma anonima, rientrano nella classificazione di cookie tecnici;
                    </li>
                    <li>
                        Cookie tecnico necessario per il funzionamento del banner informativo dei cookie.
                    </li>
                    <br />
                    I dati raccolti dai cookie tecnici vengono conservati dal nostro sistema per una durata di 6 mesi, così come previsto dalle linee guida del Garante Privacy.
                </font>
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
