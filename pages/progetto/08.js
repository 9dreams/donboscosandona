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
import Paragraph from '/components/Paragraph'
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
                title="Regolamento"
                description="Relazioni, buone prassi e azioni"
                buttonUrl={'https://youtu.be/0Fh458fo8SQ'}
                buttonText="Guarda il video"
                imageUrl="/images/informatico/settore-informatico.jpg"
                menu={menu}
            /><br />

            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h4" sx={{ color: 'text.secondary' }}>Regolamento di Disciplina</Typography>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                    Gli studenti, come titolari del diritto della “libertà di apprendimento”, sono<br /> protagonisti primari del cammino formativo, partecipano in modo creativo<br /> all’elaborazione e attuazione di esso, nelle forme rese progressivamente possibili dal<br /> maturare dell’età e con le caratteristiche loro proprie di autenticità ed entusiasmo.<br /><br />

                    Le norme del presente Regolamento si ispirano ai principi dello Statuto degli<br /> Studenti e delle Studentesse della scuola secondaria (DPR 249/98 e successive<br /> modifiche ed integrazioni), nel quale la scuola è definita come "luogo di formazione e<br /> di educazione mediante lo studio … comunità di dialogo, ricerca, di esperienza<br /> sociale informata ai valori democratici e volta alla crescita della persona in tutti gli<br /> aspetti".<br /><br />

                    I valori democratici di riferimento nella vita della comunità scolastica sono quelli<br /> espressi dalla nostra Costituzione e si basano sulla libertà di espressione, di pensiero,<br /> di coscienza e di religione, sul rispetto reciproco di tutte le persone che la<br /> compongono, quale che sia la loro età e condizione, nel ripudio di ogni barriera<br /> ideologica, sociale e culturale.<br /><br />

                    Il "Regolamento di Disciplina", nell’individuare i comportamenti che configurano<br /> mancanze disciplinari, intende porsi non solo come strumento sanzionatorio di<br /> comportamenti scorretti, ma come strumento di promozione di comportamenti e<br /> atteggiamenti responsabili sia a livello individuale che collettivo, nella convinzione<br /> che il rispetto della legge a tutti i livelli è strumento esso stesso per la promozione<br /> del diritto alla cittadinanza e allo studio. Per questo motivo tutti i provvedimenti<br /> disciplinari hanno finalità educative, tendono a rafforzare il senso di responsabilità e<br /> a ripristinare i rapporti corretti all'interno della comunità scolastica.<br /><br />

                    Il Regolamento di Disciplina, nell’individuare le sanzioni e gli organi competenti a<br /> comminarle, si pone come strumento di trasparenza e di garanzia.<br /><br />

                    Tutte le disposizioni si applicano anche nel caso in cui le lezioni si svolgano con la<br /> didattica a distanza. A seguito dell’emergenza sanitaria in corso è stato redatto il<br /> Protocollo di sicurezza scolastico per il rischio Covid ad integrazione del Documento<br /> Valutazione Rischi; pertanto l’assolto rispetto delle norme e delle procedure in esso<br /> contenute rientra a tutti gli effetti nell’ambito della sicurezza nei luoghi di lavoro ed<br /> ogni trasgressione sarà sanzionata.
                </Typography>
            </Container><br /><br />


            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}>1.Norme generali di comportamento</Typography>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                    “Gli studenti sono tenuti a frequentare regolarmente i corsi e ad assolvere<br /> assiduamente agli impegni di studio”. (D.P.R. 249/1998 Art. 3 Comma 1)<br /><br />

                    Per raggiungere gli obiettivi formativi che la Comunità Educativa del CFP Don Bosco<br /> propone è indispensabile osservare alcune norme e mantenere un comportamento<br /> educato che è anzitutto scelta personale e responsabile di ogni persona.<br /><br /><br />



                    1.Il rispetto della persona è essenziale: in classe, in laboratorio, nei cortili e nei vari<br /> ambienti di vita comune l’atteggiamento deve essere corretto ed educato nel<br /> rispetto del lavoro di formatori e compagni; è bene, inoltre, evitare manifestazioni<br /> di affetto ed effusioni non consone al contesto scolastico.<br />
                    2.Il decoro e la cura della propria persona nell'abbigliamento, nella pulizia<br /> personale e nel linguaggio sono segno di rispetto.<br />
                    3.Una condotta corretta ed educata deve essere mantenuta anche nel venire e<br /> tornare da scuola ed entro i mezzi di trasporto a tutela del buon nome del<br /> Centro.<br />
                    4.È segno di maturità personale, oltre che dovere civico, rispettare gli ambienti, gli<br /> arredi, il materiale didattico e le attrezzature, in quanto tali beni sono a servizio di<br /> tutta la comunità educativa del CFP.<br />
                    5.Ogni allievo del Centro deve accettare e impegnarsi su tutte le materie di corso,<br /> pertanto non potrà rifiutare la presenza, la valutazione e le relative verifiche in<br /> una o più materie; In caso contrario sarà soggetto a sanzione disciplinare.<br /><br /><br />


                    Il Direttore, gli insegnanti e ogni adulto parte della Comunità Educativa hanno il<br /> diritto e il dovere di intervenire in qualsiasi momento a tutela della disciplina, della<br /> buona educazione e dell’identità del Centro.<br /><br /><br />



                    Strumenti privilegiati di comunicazione sono:<br /><br />

                    LIBRETTO SCOLASTICO: il libretto è personale e riservato, costituisce per l’allievo il<br /> documento ufficiale per le relazioni scuola/famiglia e ha valore giuridico.<br /><br />

                    In particolare serve alla famiglia per giustificare assenze e ritardi, per richiedere<br /> permessi di uscita anticipata.<br /><br />

                    Esso verrà consegnato all’inizio dell’anno formativo e dovrà essere firmato dall’allievo<br /> e da uno o entrambi i genitori o da chi esercita la patria potestà. Tale persona<br /> provvederà in seguito a firmare ogni comunicazione. L’allievo deve avere cura del<br /> libretto evitando disegni, cancellature e scritte e dovrà portarlo sempre con sé per<br /> esibirlo ad ogni richiesta degli insegnanti. In caso di smarrimento, danneggiamento<br /> o esaurimento degli spazi per le giustificazioni dovrà essere acquistato un duplicato<br /> al costo stabilito dal Centro. Falsificazioni e contraffazioni saranno disciplinarmente<br /> sanzionate come riportato nella relativa tabella. Si raccomanda ai genitori di<br /> controllarlo regolarmente, almeno una volta alla settimana.<br /><br />

                    REGISTRO ONLINE: è lo strumento primario di comunicazione scuola/famiglia per<br /> quanto riguarda:<br /><br />

                    a.le valutazioni e il rendimento scolastico<br />
                    b.la programmazione e le attività didattiche<br />
                    c.il calendario scolastico<br />
                    d.le comunicazioni e gli avvisi<br />
                    e.le note disciplinari<br />
                    f.la registrazione di assenze, ritardi e uscite fuori orario<br />
                    g.la prenotazione del colloquio individuale con gli insegnanti<br /><br /><br />


                    L’accesso al portale è possibile mediante l’utilizzo di username e password<br /> personali fornite dal Centro alla famiglia e all’allievo. Si raccomanda ai genitori di<br /> controllarlo regolarmente per poter monitorare l’andamento scolastico del figlio e/o<br /> apporre le apposite firme richieste in caso di comunicazioni.<br /><br />

                    È necessario che il genitore non fornisca le proprie credenziali al figlio, in quanto<br /> l’istituzione scolastica non è più in grado di sapere se la famiglia è realmente a<br /> conoscenza della situazione scolastica del ragazzo.
                </Typography>
            </Container><br /><br />

            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}>2.Rispetto dei tempi</Typography>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                    Durante l'orario scolastico, compresi gli intervalli, l’allievo deve essere sempre<br /> presente al Centro. È richiesta la massima puntualità all’inizio e alla ripresa delle<br /> lezioni dopo l’intervallo e dopo la pausa pranzo. L’ingresso e l’uscita dai rispettivi<br /> ambienti scolastici sono regolati dal suono della campanella. È vietato allontanarsi<br /> dal Centro, anche durante l’intervallo o la pausa pranzo, senza previa autorizzazione<br /> del Direttore o del suo Delegato.<br /><br />

                    L’esonero dalla parte pratica di educazione motoria (parziale o totale) deve essere<br /> chiesto al Direttore o del suo Delegato con domanda scritta accompagnata da <br />certificato medico. Tuttavia l’alunno è tenuto alla presenza alla lezione.
                </Typography>
            </Container><br /><br />

            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}>3.Assenze</Typography>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                    Dopo ogni assenza lo studente deve presentare al Direttore o suo delegato prima<br /> dell’inizio della prima ora del giorno di rientro giustificazione scritta sul libretto<br /> scolastico, firmata dai genitori o da chi ne fa le veci, anche se l’allievo è maggiorenne.<br /> Nel caso in cui la firma sia diversa da quella depositata in calce al libretto, le assenze<br /> non saranno giustificate e il Direttore o suo delegato deciderà il da farsi.<br /><br />

                    L’assenza prolungata per ragioni diverse dalla malattia deve essere concordata in<br /> anticipo con il Direttore o suo delegato.<br /><br />

                    L’allievo privo di giustificazione o con giustificazione incompleta, oltre il secondo<br /> giorno dal rientro a scuola, non sarà ammesso alle lezioni, e, se minore, avrà l’obbligo<br /> di permanere nei locali della scuola. In tal caso, il Direttore o suo delegato si riserverà<br /> di contattare la famiglia, così come nel caso di assenze ricorrenti o con motivazioni<br /> poco chiare.<br /><br />

                    Si precisa che le assenze sono conteggiate in ore e non in giorni, pertanto sono<br /> calcolate come assenza anche le ore di entrata posticipata e di uscita anticipata<br /> rispetto all’orario scolastico.<br /><br />

                    Ai sensi della normativa regionale, il mancato conseguimento del limite minimo di<br /> frequenza, pari ad almeno il 75% dell'orario annuale, comporta l'esclusione dallo<br /> scrutinio finale e la non ammissione alla classe successiva o all'esame finale.
                </Typography>
            </Container><br /><br />

            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}>4.Enrate ed uscite</Typography>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                    L’ingresso e l’uscita in orari diversi da quelli regolari devono essere richiesti mediante<br /> permesso debitamente firmato sul libretto scolastico e vidimato dal Direttore o dal<br /> suo delegato. La giustificazione dovrà essere presentata all’insegnante di classe.<br /><br />

                    a.Gli allievi in ritardo rispetto all’orario di inizio sprovvisti di permesso firmato dalle<br /> famiglie potranno essere ammessi in aula dal Direttore o dal suo delegato. Sono<br /> comunque tenuti a presentare il giorno successivo, o al massimo entro due<br /> giorni, regolare giustificazione. Qualora ciò non avvenga, verranno<br /> immediatamente avvisate le famiglie.<br />
                    b.Se a causa di valida motivazione lo studente dovesse avere la necessità di un<br /> permesso permanente di entrata/uscita fuori orario, dovrà farne richiesta<br /> specifica al Direttore o al suo delegato.<br />
                    c.Per le uscite anticipate rispetto al termine regolare delle lezioni o l’assenza dalle<br /> lezioni pomeridiane, l’alunno dovrà presentare richiesta sul libretto scolastico<br /> firmata dei genitori, o di chi ne fa le veci, al Direttore o suo delegato, prima<br /> dell’inizio della prima ora.<br />
                    d.Le uscite anticipate dovute ad indisposizione avverranno solo nel caso in cui un<br /> famigliare o un suo delegato vengano a prendere il ragazzo a scuola. Le uscite<br /> per altri motivi saranno autorizzate dopo che il Direttore o un suo delegato avrà<br /> preavvertito la famiglia e avuto il consenso scritto dalla stessa.<br />
                    e.Qualora si presentasse al Centro un soggetto terzo per prelevare<br /> anticipatamente lo studente, i genitori saranno immediatamente contattati per<br /> verificarne la veridicità. Nel caso siano irraggiungibili telefonicamente, il Centro<br /> non potrà permettere l'uscita anticipata dello studente: ciò potrà avvenire solo<br /> mediante delega scritta da parte dei genitori.
                </Typography>
            </Container><br /><br />

            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}>5.Norme di comportamento</Typography>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                    ACCESSO E USO DEI LOCALI: Ogni aula deve essere usata per il solo scopo didattico;<br /> non è consentito, quindi, affiggere poster, locandine, manifesti non in sintonia con<br /> l'ambiente. La stessa bacheca esposta in corridoio, deve essere utilizzata solo per le<br /> comunicazioni scolastiche e dal personale della scuola.<br /><br />

                    Non è consentito inoltre lasciare in aula, al termine delle lezioni, materiale scolastico<br /> e/o utile allo svolgimento delle attività motorie o di laboratorio. Al cambio dell’ora<br /> tutti gli studenti devono rimanere in classe.<br /><br />

                    Durante gli intervalli e la ricreazione, nessuno può rimanere o accedere alle aule e ai<br /> laboratori senza la presenza di un formatore. Durante gli spostamenti tra i vari<br /> ambienti la classe deve rimanere compatta, evitando schiamazzi e comportamenti<br /> contrari alla sicurezza come correre per i corridoi e le scale.<br /><br /><br />



                    ACCESSO ALLA SEGRETERIA: l’accesso alla segreteria è consentito agli allievi<br /> solamente al di fuori delle lezioni e in base all’orario previsto.<br /><br /><br />



                    COMPORTAMENTO IN AULA/LABORATORIO: l’allievo dovrà mantenere un<br /> comportamento adeguato e consono agli ambienti, secondo la buona educazione e<br /> le indicazioni dei formatori (non si mangia, non si mastica chewingum, si chiede la<br /> parola per parlare, non ci si dondola sulla sedia, ecc.). Lo studente deve mantenere il<br /> posto assegnato ed essere munito di tutto il materiale necessario per la giornata; non<br /> si accettano richieste di uscita durante le lezioni al fine di prelevare il materiale da<br /> altre aule né è consentito di lasciarlo in deposito presso le stesse.<br /><br />

                    Le uscite per recarsi ai servizi sono possibili solo durante la seconda, terza, quinta e<br /> settima ora di lezione, uno per volta; qualsiasi richiesta di uscita sarà comunque<br /> valutata in maniera obiettiva dall’insegnante.<br /><br />

                    Gli allievi espulsi dall’aula devono sostare in corridoio, nei pressi dell’aula.<br /><br />

                    Gli utenti sono tenuti a seguire scrupolosamente le disposizioni impartite dai<br /> formatori in materia antinfortunistica ed i regolamenti specifici dei vari laboratori.<br /><br /><br />



                    INTERVALLO E RICREAZIONE: gli allievi utilizzeranno esclusivamente gli spazi<br /> indicati, opportunamente sorvegliati dagli insegnanti a tutela della sicurezza.<br /><br /><br />



                    RACCOLTA DIFFERENZIATA: secondo la legislazione vigente è obbligatorio<br /> differenziare la raccolta dei rifiuti usufruendo degli appositi contenitori dislocati nelle<br /> aree comuni del Centro. Presso le aule saranno disponibili esclusivamente i<br /> contenitori di raccolta carta e secco non riciclabile. Per le modalità di differenziazione<br /> si dovrà fare riferimento ai cartelli esplicativi esposti.<br /><br /><br />



                    SOMMINISTRAZIONE DI MEDICINALI: Il Centro non è autorizzato a somministrare<br /> alcun medicinale. Nel caso di alunni con patologie che necessitano l’assunzione di<br /> farmaci di mantenimento o a scopo profilattico, la famiglia può richiedere la<br /> collaborazione della scuola. Il riferimento per la gestione di questo problema è <br />costituito dalle Linee Guida per la somministrazione di farmaci a scuola dei Ministero<br /> del Lavoro e MIUR del 25.11.05. Le situazioni nelle quali è ammessa la <br />somministrazione sono quelle che non richiedono competenze specialistiche di tipo <br />sanitario né l’esercizio di discrezionalità tecnica. In ogni caso è previsto che la scuola<br /> debba acquisire richiesta formale dei genitori e certificazione medica attestante lo <br />stato di malattia dell’alunno con la prescrizione specifica dei farmaci da assumere<br /> che specifichi modalità e tempi di somministrazione, posologia e regole di conservazione.<br /><br />

                    L’organizzazione di questo “servizio” spetta al coordinatore educativo-didattico, che<br /> dovrà verificare la disponibilità tra il proprio personale innanzitutto tra gli addetti PS.<br /> È opportuno, in casi particolari, prevedere anche un addestramento “in situazione”<br /> da parte del medico curante. La scuola provvede a individuare locali idonei per la<br /> somministrazione e tenuta dei farmaci, e il coordinatore educativo-didattico ne<br /> autorizzerà l’accesso ai famigliari, in caso possano provvedere autonomamente.<br /><br />

                    Il rifiuto da parte del personale scolastico di assumere questo incarico per paura delle<br /> eventuali conseguenze non trova giustificazione, dal momento che non è <br />riconosciuta alcuna responsabilità a loro carico, se sono state seguite correttamente<br /> le indicazioni del medico, mentre potrebbe configurarsi come omissione di soccorso<br /> (art. 593 CP) la mancata somministrazione secondo le procedure previste.<br /><br />

                    Usufruiscono di tale “servizio” gli allievi con malattia cronica (patologia che non<br /> guarisce e che richiede terapia di mantenimento, es. asma, diabete), in cui i farmaci<br /> devono essere assunti con orari e posologia costanti, ma anche quegli allievi che <br />sono affetti da patologie che possono comportare urgenze (es. convulsioni, shock <br />anafilattico) prevedibili, con manifestazioni corrispondenti a quelle previste e<br /> descritte dal medico, in cui i farmaci devono essere somministrati con la modalità e<br /> la posologia prescritte. Nel caso che l’urgenza non presenti i sintomi descritti dal<br /> medico o riguardi un allievo per il quale non è stata avanzata alcuna richiesta, la<br /> gestione spetterà all’addetto PS e non dovrà essere somministrato alcun farmaco.<br /><br />

                    <b>Certificazioni da acquisire per la somministrazione di farmaci agli allievi</b><br /><br />

                    1. richiesta dei genitori motivata (somministrazione del farmaco non differibile in<br /> orario extrascolastico e impossibilità di provvedere autonomamente), in cui si <br />autorizza il personale individuato dalla scuola a somministrare il farmaco al figlio, con<br /> la modalità e il dosaggio indicati dal medico<br /><br />

                    2. prescrizione medica intestata all’alunno recante:<br /><br />

                    ● il nome commerciale del farmaco<br /><br />

                    ● la modalità di somministrazione<br /><br />

                    ● l’esatta posologia<br /><br />

                    ● l’orario di somministrazione<br /><br />

                    3. istruzioni del medico curante, intestate all’alunno, indirizzate al coordinatore<br /> educativo-didattico, su posologia e modalità di somministrazione del farmaco in <br />caso della comparsa di episodi acuti di cui devono essere descritti i sintomi e sui<br /> comportamenti da assumere nel caso il farmaco non risultasse efficace.<br /><br /><br />



                    USO DI MEZZI INFORMATICI E PRIVACY:<br /><br />

                    È vietata senza autorizzazione della Direzione o di un suo delegato (docente), la<br /> realizzazione di immagini o registrazioni audio-video all’interno del Centro compresa<br /> la registrazione delle lezioni.<br /><br />

                    È vietato l’uso fraudolento di mezzi informatici, anche personali, quali rete wi-fi,<br /> internet, mail, social network nei confronti della scuola e/o dei compagni.<br /><br />

                    Viene considerata mancanza grave la diffusione tramite (posta elettronica, WiFi, chat,<br /> social network, ecc.) di materiale multimediale atto ad offendere la dignità delle<br /> persone o il prestigio del<br /><br />

                    Centro.<br /><br />

                    Sarà richiesta l’immediata rimozione del materiale inserito e saranno presi<br /> provvedimenti disciplinari in base alla gravità del fatto, anche in sede giuridica.<br /><br />

                    <b>Accesso ad internet e password personale:</b> per accedere ai servizi informatici del<br /> Centro viene assegnata, ad ogni allievo, una password strettamente personale non<br /> cedibile a terzi. L’utilizzo di una password altrui comporta la sospensione dei servizi<br /> informatici e sanzioni disciplinari.<br /><br />

                    Se necessario per le attività didattiche, il Centro può fornire l’accesso a Internet.<br /><br />

                    L’utilizzo di Internet ed il download devono essere sempre preventivamente<br /> autorizzati dal formatore.<br /><br />

                    È vietata e oggetto di interventi disciplinari la navigazione in siti che abbiano<br /> contenuti contrari<br /><br />

                    all’ispirazione e all’orientamento del Centro. A tale scopo tutto il traffico viene<br /> monitorato.<br /><br /><br />



                    DIVIETO DI FUMO: secondo la legislazione vigente è assolutamente vietato fumare<br /> all’interno del Centro, sia nei locali interni che nei cortili, qualsiasi tipo di sigarette:<br /> commerciali, non commerciali, elettroniche. Per i trasgressori si prenderanno le<br /> sanzioni previste successivamente.<br /><br /><br />



                    USO DI CELLULARI E DISPOSITIVI MULTIMEDIALI: Ne è consentito l’uso solo durante<br /> le ricreazioni. Durante le lezioni i cellulari e tutti i dispositivi multimediali non inerenti<br /> all’attività formativa devono essere spenti e riposti nell’apposito armadietto. Se i<br /> telefoni vengono trovati in possesso dell’allievo durante le lezioni o se l’attività<br /> didattica viene interrotta dal suono di un cellulare, se ne prevede il ritiro e la<br /> comunicazione ai genitori mediante il registro elettronico, verranno restituiti solo al<br /> genitore dal giorno successivo al ritiro.<br /><br />

                    BULLISMO: Il bullismo è un abuso di potere che si concretizza in tutte quelle azioni di<br /> sistematica prevaricazione e sopruso, messe in atto da parte di uno studente/alunno,<br /> definito ”bullo” (o da parte di un gruppo), nei confronti di un altro studente/alunno,<br /> percepito come debole, definito ”vittima” e può assumere forme differenti (fisico,<br /> verbale, relazionale). Qualsiasi atto di bullismo è ritenuto mancanza grave o<br /> gravissima. Il cyberbullismo è il termine che indica un tipo di attacco continuo,<br /> ripetuto, offensivo e sistematico attuato mediante gli strumenti della rete che in<br /> pochissimo tempo danneggia la reputazione della vittima in una comunità molto<br /> ampia, anche perché i contenuti, una volta pubblicati, possono riapparire a più<br /> riprese in luoghi diversi. Qualsiasi atto di cyberbullismo è ritenuto mancanza<br /> gravissima. Le condotte di cyberbullismo, anche se poste in essere in altro luogo, in<br /> altro tempo rispetto all'edificio e all'orario scolastico (es. messaggi offensivi che<br /> partono di notte, dal pc di casa...), se conosciute dagli operatori scolastici (formatore,<br /> Direttore) rientrano nelle azioni perseguibili a scuola. Gli studenti devono essere<br /> coscienti del disvalore della condotta bullo/cyberbullo. Lo stesso disvalore viene<br /> attribuito a chi, omertosamente, mostra indifferenza a chi, all'interno del gruppo,<br /> rafforza la condotta aggressiva e chi comunque concorre alla condotta.<br /><br />

                    Ruoli e compiti delle varie figure:<br /><br />

                    1.         IL DIRETTORE:<br /><br />
                    <li>
                        individua attraverso il Collegio dei Formatori un referente del bullismo e <br />cyberbullismo;</li>
                    <li>coinvolge, nella prevenzione e contrasto al fenomeno del bullismo, tutte le<br /> componenti della comunità scolastica, particolarmente quelle che operano<br /> nell'area dell'informatica, partendo dall'utilizzo sicuro di Internet a scuola;</li><br />
                    <li>prevede eventuali corsi di aggiornamenti e formazione in materia di prevenzione<br /> dei fenomeni di bullismo e cyberbullismo, rivolti al personale docente e non<br /> docente;</li>
                    <li>promuove sistematicamente azioni di sensibilizzazione dei fenomeni del<br /> bullismo e cyberbullismo nel territorio in rete con enti, associazioni, istituzioni<br /> locali ed altre scuole, coinvolgendo alunni, docenti, genitori ed esperti;</li><br />
                    <li>favorisce la discussione all'interno della scuola, attraverso i vari organi collegiali,<br /> creando i presupposti di regole condivise di comportamento per il contrasto e<br /> prevenzione dei fenomeni del bullismo e cyberbullismo;</li><br />
                    <li>prevede azioni culturali ed educative rivolte agli studenti, per acquisire le<br /> competenze necessarie all’esercizio di una cittadinanza digitale consapevole.</li><br /><br />
                    2.         IL REFERENTE DEL “BULLISMO E CYBERBULLISMO”<br /><br />

                    <li>promuove la conoscenza e la consapevolezza del bullismo e del cyber-bullismo<br /> attraverso progetti</li>
                    <li>d'istituto che coinvolgano genitori, studenti e tutto il personale;</li><br />
                    <li>coordina le attività di prevenzione ed informazione sulle sanzioni previste e sulle responsabilità di natura civile e penale, anche con eventuale affiancamento di genitori e studenti;</li><br />
                    <li>si rivolge a partner esterni alla scuola, quali servizi sociali e sanitari, aziende del<br /> privato sociale, forze di polizia, per realizzare un progetto di prevenzione;</li><br />
                    <li>cura rapporti di rete fra scuole per eventuali convegni/seminari/corsi.</li><br /><br />
                    3.         IL COLLEGIO FORMATORI:<br /><br />

                    <li>promuove scelte didattiche ed educative, anche in collaborazione con altre<br /> scuole in rete, per la prevenzione del fenomeno.</li><br /><br />
                    4.         IL CONSIGLIO DI CLASSE:<br /><br />

                    <li>pianifica attività didattiche e/o integrative finalizzate al coinvolgimento attivo e<br /> collaborativo degli studenti e all'approfondimento di tematiche che favoriscano<br /> la riflessione e la presa di coscienza della necessità dei valori di convivenza civile;</li><br />
                    <li>favorisce un clima collaborativo all'interno della classe e nelle relazioni con le<br /> famiglie, propone progetti di educazione alla legalità e alla cittadinanza attiva.</li><br /><br />
                    5          IL COORDINATORE DI CLASSE:<br /><br />

                    <li>intraprende azioni congruenti con gli allievi della classe che coordina, tenuto<br /> conto che l’istruzione ha un ruolo fondamentale sia nell’acquisizione e rispetto<br /> delle norme relative alla convivenza civile, sia nella trasmissione dei valori legati<br /> ad un uso responsabile di internet;</li><br />
                    <li>dialoga con gli allievi verificando le situazioni che possano sfociare in fenomeni<br /> del bullismo e cyberbullismo;</li><br />
                    <li>coinvolge il Referente del “Bullismo e Cyberbullismo” per azioni di prevenzione;</li><br />
                    <li>valorizza nell'attività didattica una modalità di lavoro di tipo cooperativo e spazi<br /> di riflessioni da intraprendere con gli studenti.</li><br /><br />
                    6.         IL FORMATORE:<br /><br />

                    <li>intraprende azioni congruenti con gli allievi delle proprie classi, tenuto conto che<br /> l’istruzione ha un ruolo fondamentale sia nell’acquisizione e rispetto delle norme<br /> relative alla convivenza civile, sia nella trasmissione dei valori legati ad un uso<br /> responsabile di internet;</li><br />
                    <li>valorizza nell'attività didattica una modalità di lavoro di tipo cooperativo e spazi<br /> di riflessioni da intraprendere con gli studenti.</li><br /><br />
                    7.         I GENITORI:<br /><br />

                    <li>partecipano attivamente alle azioni di formazione/informazione, istituite dalle<br /> scuole sui comportamenti sintomatici del bullismo e del cyberbullismo;</li><br />
                    <li>sono attenti ai comportamenti dei propri figli;</li><br />
                    <li>vigilano sull’uso delle tecnologie da parte dei ragazzi, con particolare attenzione<br /> ai tempi, alle modalità, agli atteggiamenti conseguenti (i genitori dovrebbero<br /> allertarsi se uno studente, dopo l’uso di internet o del proprio telefonino, mostra<br /> stati depressivi, ansiosi o paura);</li><br />
                    <li>conoscono le azioni messe in campo dalla scuola e collaborano secondo le<br /> modalità previste dal Patto di Corresponsabilità;</li><br />
                    <li>conoscono il codice di comportamento dello studente;</li><br />
                    <li>conoscono le sanzioni previste da regolamento d’istituto nei casi di bullismo,<br /> cyberbullismo e navigazione on-line a rischio.</li><br /><br />
                    8.         GLI ALLIEVI:<br /><br />

                    <li>sono coinvolti nella progettazione e nella realizzazione delle iniziative scolastiche,<br /> al fine di favorire un miglioramento del clima relazionale; in particolare, dopo<br /> opportuna formazione, possono operare come educatori tra pari;</li><br />
                    <li>imparano le regole basilari, per rispettare gli altri, quando sono connessi alla rete,<br /> facendo attenzione alle comunicazioni che inviano utilizzando i social media e le<br /> altre forme comunicative che consente la rete;</li><br />
                    <li>non è loro consentito, durante le attività didattiche o comunque all’interno della<br/> scuola, acquisire – mediante telefonini cellulari o altri dispositivi elettronici –<br/> immagini, filmati o registrazioni vocali, se non per finalità didattiche, previo<br/> consenso del docente. La divulgazione del materiale acquisito all’interno<br/> dell’istituto è utilizzabile solo per fini esclusivamente personali di studio o<br/> documentazione, e comunque nel rispetto del diritto alla riservatezza di tutti;</li><br/>
                    <li>durante le lezioni o le attività didattiche in genere non possono usare cellulari,<br/> giochi elettronici e riproduttori di musica, se non per finalità didattiche, previo<br/> consenso del docente.</li><br/><br/><br/>


                    Sono da considerarsi tipologie persecutorie qualificate come bullismo e<br/> cyberbullismo per i quali si dispongono le sanzioni previste dal Regolamento di<br/> disciplina con percorso di mediazione e relativa segnalazione alle autorità<br/> competenti:v<br/>

                    <b>Bullismo:</b><br/><br/>

                    • la violenza fisica, psicologica o l’intimidazione del gruppo, specie se reiterata;<br/><br/>

                    • l’intenzione di nuocere;<br/><br/>

                    • l’isolamento della vittima.<br/><br/>

                    <b>Cyberbullismo:</b><br/><br/>

                    • Flaming: Litigi on line nei quali si fa uso di un linguaggio violento e volgare;<br/><br/>

                    • Harassment: molestie attuate attraverso l’invio ripetuto di linguaggi offensivi;<br/><br/>

                    • Cyberstalking: invio ripetuto di messaggi che includono esplicite minacce fisiche, al<br/> punto che la vittima arriva a temere per la propria incolumità;<br/><br/>

                    • Denigrazione: pubblicazione all’interno di comunità virtuali, quali newsgroup, blog,<br/> forum di discussione,<br/><br/>

                    messaggistica immediata, siti internet, di pettegolezzi e commenti crudeli,<br/> calunniosi e denigratori;<br/><br/>

                    • Outing estorto: registrazione delle confidenze – raccolte all’interno di un ambiente<br/> privato - creando un clima di fiducia e poi inserite integralmente in un blog pubblico;<br/><br/>

                    • Impersonificazione: insinuazione all’interno dell’account di un’altra persona con<br/> l’obiettivo di inviare dal medesimo messaggi ingiuriosi che screditino la vittima;<br/><br/>

                    • Esclusione: estromissione intenzionale dall’attività on line;<br/><br/>

                    • Sexting: invio di messaggi via smartphone ed Internet, corredati da immagini a<br/> sfondo sessuale.<br/><br/>

                    Ulteriori comportamenti rientranti nella fattispecie previste dalla legge 71/2017.<br/><br/><br/>



                    Una volta accertato quanto sopra, “salvo che il fatto costituisca reato, (…) il direttore o<br/> il formatore delegato che venga a conoscenza di atti di cyberbullismo ne informa<br/> tempestivamente i soggetti esercenti la responsabilità genitoriale ovvero i tutori dei<br/> minori coinvolti e attiva adeguate azioni di carattere educativo. (art. 5 comma 1<br/> L.71/2017). “<br/><br/><br/>



                    BESTEMMIA: è assolutamente vietato bestemmiare in qualsiasi ambiente.<br/><br/>

                    INTRODUZIONE DI PORNOGRAFIA: è vietato introdurre, utilizzare o diffondere<br/> materiale offensivo della persona sia sotto forma cartacea che multimediale.<br/><br/>

                    INTRODUZIONE E/O USO DI ALCOLICI E SOSTANZE STUPEFACENTI: è fatto divieto di<br/> introdurre e utilizzare qualsiasi bevanda alcolica o sostanza stupefacente (droga).
                </Typography>
            </Container><br /><br />

            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}>6. Rispetto dei materiali e delle cose.</Typography>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                    <u>BENI PERSONALI E FURTO</u>: è vietata la sottrazione o la ricettazione di qualsiasi bene<br /> della scuola e non, nonché il furto ai danni di terzi. Si invita a non portare a scuola<br /> oggetti di valore non attinenti l’attività didattica.<br /><br />

                    Il Centro non è tenuto in alcun modo a ricevere e custodire i beni personali degli<br /> allievi, tra cui abbigliamento, <del>libri</del>, mezzi di locomozione, ecc., né assume alcuna<br /> responsabilità o risponde della loro custodia, conservazione e sottrazione, qualora<br /> siano portati o introdotti all’interno dell’Istituto. È fatto obbligo agli stessi allievi di<br /> apprestare tutte le cautele necessarie per impedire a loro carico qualsiasi evento<br /> dannoso.<br /><br />



                    <u>DANNEGGIAMENTO DI LOCALI E ATTREZZATURE</u>: in caso di danneggiamento o<br /> manomissione l’allievo responsabile e la sua famiglia sono tenuti a risarcire il danno arrecato. Nel caso in cui il<br /> responsabile non sia individuabile con sicurezza, il risarcimento in quota parte è richiesto a ogni studente che utilizza tale locale o<br /> attrezzatura.<br /><br />



                    <u>SEGNALAZIONE E DENUNCIA ALL’AUTORITÀ GIUDIZIARIA</u>:<br /><br /><br />



                    Il Direttore della Casa e il Direttore della Scuola hanno la competenza di<br /> rappresentanza esterna e di relazione con l’esterno.<br /><br />

                    E pertanto deve denunciare la notizia di reato trasmettendo le informazioni di cui è<br /> in possesso direttamente alla Procura della Repubblica competente o ad organi di<br /> Polizia Giudiziaria del territorio.<br /><br />

                    Ciò vale sia nel caso in cui il minore sia vittima che autore del reato.<br /><br />

                    I minori possono essere autori di reati, ossia degli stessi reati degli adulti.<br /><br />

                    Nell’ambito scolastico gli episodi di bullismo concentrano intorno a sé la maggior<br /> parte dei reati commessi dagli alunni. Il bullismo in sé non è un reato, posto che<br /> nessuna disposizione se ne occupa esplicitamente: il bullismo, però, costituisce la<br /> somma e/o la ripetizione di reati previsti dall’ordinamento, quali la violenza privata,<br /> l’estorsione, ingiuria, la diffamazione, gli atti persecutori e discriminatori a sfondo<br /> razziale, politico o sessuale, la violenza fisica e/o sessuale, la realizzazione e diffusione<br /> di materiale pedopornografico, gli atti vandalici e di danneggiamento, la detenzione<br /> a fine di spaccio e la cessione a qualunque titolo di stupefacenti. Quale che sia lo<br /> scenario, comunque, il Direttore della Casa, ricevuta notizia del reato, è obbligato a<br /> denunciare, senza ritardo, all’Autorità giudiziaria i reati procedibili d’ufficio commessi<br /> dagli studenti, verificatisi o rilevati all’interno dell’istituto, o comunque di cui è venuto<br /> a conoscenza in ragione del proprio ruolo.<br /><br />

                    La denuncia va effettuata quale che sia l’età dell’autore del reato (e quindi anche per<br /> i minori di anni 14): ogni valutazione circa il rilievo dell’imputabilità è rimessa<br /> esclusivamente all’Autorità giudiziaria.<br /><br />

                    La denuncia può essere fatta sia in forma orale (presso gli uffici della Polizia di stato o<br /> dei Carabinieri che provvederanno direttamente alla verbalizzazione ed all’inoltro<br /> all’autorità giudiziaria competente) sia in forma scritta, con indicazione chiara del<br /> denunciante e sottoscrizione della stessa. La denuncia può anche essere trasmessa<br /> direttamente alla Procura presso il Tribunale dei minorenni. Nella denuncia devono<br /> essere presenti tutti i dati acquisiti e disponibili (oltre al “racconto” del fatto, l’identità<br /> delle persone coinvolte, le modalità di acquisizione della notizia di reato, ecc.) con<br /> indicazione delle persone a conoscenza dei fatti o testimoni degli stessi. Anche in<br /> questo caso, la denuncia va fatta senza ritardo in rapporto alla gravità dei fatti.
                </Typography>
            </Container><br /><br />

            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'blue' }}>7. Rispetto degli obblighi giuridici e disciplina</Typography>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                    La responsabilità disciplinare è personale.<br /><br />

                    Essa è assunta per mancanze disciplinari, le quali sono costituite dai comportamenti<br /> dello studente considerati reato dalla vigente legislazione ovvero che violano i doveri<br /> stabiliti dall’art. 3 del D.P.R. 24 giugno 1998 n. 249 o quelli contenuti nei punti<br /> precedenti del presente Regolamento ovvero le violazioni del progetto educativo.<br /><br />

                    a)         <b>Mancanze: lievi-gravi-gravissime</b><br /><br />

                    In ogni caso sono considerate mancanze lievi:<br /><br />

                    Reiterata dimenticanza del libretto scolastico; ritardi ripetuti non dovuti a oggettivi<br /> problemi di trasporto; ritardi al rientro dall’intervallo o al cambio dell’ora; mancata  o<br /> non tempestiva presentazione della richiesta di giustificazione in caso di assenza;<br /> prolungamento senza motivo dell'uscita autorizzata dalla classe; sosta durante le ore<br /> di lezione nei corridoi e avanti ai distributori; interruzione ripetuta e deliberata della<br /> lezione, rendendo difficile il suo svolgimento con richieste immotivate o futili;<br /> disturbo della lezione anche chiacchierando con i compagni durante spiegazioni,<br /> interrogazioni e compiti in classe; richiesta ripetuta di uscita dall'aula senza valido<br /> motivo; indisponibilità a verifiche e valutazioni; mancato svolgimento dei compiti<br /> assegnati a casa. Comportamento non adeguato sui mezzi di trasporto, adozione di<br /> un abbigliamento non adeguato all’ambiente scolastico, mancanza materiale<br /> didattico, (danneggiamento del tesserino di riconoscimento per negligenza non so<br /> se da mettere o no inteso come tesserino che diamo ai ragazzi che vanno in stage),<br /> danneggiamento del libretto scolastico per negligenza, dimenticanza della chiave dell’armadietto personale, dimenticanza utilizzo DPI.<br /><br /><br />



                    In ogni caso sono considerate mancanze gravi:<br /><br />

                    Mancato rispetto delle norme di sicurezza sul lavoro. Uso del telefono cellulare o altri<br /> dispositivi elettronici non autorizzati durante le lezioni; uso di linguaggio volgare;<br /> imbrattamento di oggetti e ambienti della scuola; adozione di un linguaggio non<br /> adeguato all’ambiente scolastico; lancio di oggetti dalla finestra; fumare nei locali<br /> della scuola e nelle pertinenze; assenze ingiustificate ripetute; falsificazione della<br /> altrui firma;; possesso non autorizzato delle credenziali di accesso alla rete internet<br /> della scuola di altri soggetti; manomissione del registro elettronico; diffusione in<br /> vario modo di scritti, immagini o filmati che siano lesivi del decoro e del buon nome<br /> dell’istituto o di persone legate a vario titolo ad esso; scrittura sui muri, porte, arredi, e<br /> attrezzature; rottura e/o danneggiamento di vetri, porte, muri, arredi, attrezzature,<br /> libri e oggetti vari; incisioni su banchi, porte, muri; sottrazione di beni, valori e<br /> oggetti,  manomissione e/o distruzione di beni della scuola, la bestemmia, le<br /> minacce, le percosse e le ingiurie rivolte al personale della scuola ovvero ad altri<br /> studenti sia in forma scritta che verbale, danneggiamento del libretto scolastico per<br /> atto voluto, uscita dall’istituto senza permesso.<br /><br />

                    In ogni caso sono considerate mancanze gravissime:<br /><br />

                    Tenere, ripetutamente nel corso del tempo, comportamenti offensivi e/o aggressivi<br /> individualmente o in gruppo ai danni di uno o più alunni con lo scopo di esercitare<br /> un potere o un dominio su di essi, attraverso aggressioni fisiche (percosse, spinte,<br /> prepotenze fisiche), verbali (ingiurie, diffamazioni, ricatti, intimidazioni, vessazioni,<br /> insulti) o indirette. Tali comportamenti sono puniti anche se tenuti attraverso varie<br /> forme di comunicazione social e comunque on line e comunque mediante uso di<br /> dispositivi elettronici, e quindi indipendentemente dal loro verificarsi nell'arco<br /> temporale della presenza a scuola, rilevando esclusivamente l'essere posti in essere a<br /> danno di altri membri della comunità scolastica. L’uso e lo spaccio di sostanze<br /> stupefacenti, le lesioni fisiche a persone; tenere comportamenti astrattamente<br /> configurabili come reati che violino la dignità e il rispetto della persona umana (ad es.<br /> violenza privata, minaccia, percosse, ingiurie, reati di natura sessuale etc.). La<br /> falsificazione e/o il fraudolento utilizzo di profili social altrui.<br /><br />

                    Per i comportamenti che non rientrano nelle esemplificazioni sopra riportate, si adotterà, per quanto possibile, il criterio dell’analogia.<br /><br /><br />



                    b)   Sanzioni<br /><br />

                    In relazione alle mancanze disciplinari e alla loro gravità, possono essere applicate,<br /> anche cumulativamente, le seguenti sanzioni:<br /><br />

                    a.    Il richiamo verbale;<br /><br />

                    b.    Il richiamo scritto sul registro elettronico visibile ad allievo e alla famiglia;<br /><br />

                    c.    Ammonizione scritta del Direttore/responsabile disciplina;<br /><br />

                    d.    La sospensione temporanea dalle lezioni e dalla frequenza della scuola, fino ad un massimo di giorni 15;<br /><br />

                    e.     Allontanamento dalle lezioni per un periodo superiore a 15 giorni;<br /><br />

                    f.    Allontanamento dello studente dalla comunità scolastica fino al termine dell’anno scolastico;<br /><br />

                    g.    L’ esclusione dallo scrutinio finale o la non ammissione all’Esame di qualifica.<br /><br />

                    Rimane salva la sanzione amministrativa per chi non ottempera al divieto di fumo nei locali scolastici e nelle pertinenze.<br /><br />

                    Le infrazioni lievi sono sanzionate dal formatore che le rileva con il richiamo verbale e/o scritto. Nel caso di recidiva o nel caso in cui le circostanze lo richiedano, viene irrogata la sanzione dell’ammonizione scritta del Direttore/responsabile disciplina.<br /><br />

                    Nel caso in cui l’allievo prenda quattro note disciplinari nell’arco del trimestre il consiglio di disciplina viene convocato per valutare la gravità delle mancanze.<br /><br /><br />



                    <b>Le infrazioni gravi vengono sanzionate con la sospensione dalle lezioni fino a un massimo di 15 giorni.</b><br /> È possibile, in considerazione del caso specifico, che la<br /> sospensione dalle lezioni sia con obbligo di frequenza, vale a dire che l’allievo ha<br /> l’obbligo di recarsi a scuola, ma non è ammesso alle lezioni, facendo attività<br /> alternative.<br /><br />

                    L’allontanamento dello studente può essere disposto anche quando ha commesso<br /> reati gravi o il suo comportamento costituisca pericolo per l’incolumità delle persone:<br /> in tal caso la durata sarà commisurata alle esigenze della situazione e l’atto viene<br /> adottato dal Direttore con procedura d’urgenza, fatta salva la necessità di<br /> confermare l’allontanamento da parte dell’Organo deputato all’irrogazione della<br /> sanzione con la procedura prevista al punto e.<br /><br /><br />



                    Le infrazioni gravissime vengono punite con la sospensione dalle lezioni per una<br /> durata commisurata alla gravità del fatto, per un periodo superiore a 15 giorni.<br /><br />

                    La sanzione che provoca l’allontanamento dalle lezioni per un periodo superiore a 15<br /> giorni può essere adottata se ricorrono due condizioni, entrambe necessarie:<br /><br />

                    a.         Devono essere stati commessi “reati che violino la dignità e il rispetto della<br /> persona umana” (es. violenza privata, minaccia, percosse, ingiurie, reati di natura<br /> sessuale etc.) oppure deve concretizzarsi una situazione di pericolo per l’incolumità<br /> delle persone;<br /><br />

                    b.         Il fatto commesso dev’essere di tale gravità da richiedere una deroga<br /> all’allontanamento fino a 15 giorni. In tal caso la durata dell’allontanamento è<br /> adeguata alla gravità dell’infrazione, ovvero al permanere della situazione di pericolo.<br /><br /><br />



                    La sanzione che provoca l’allontanamento dalle lezioni fino al termine dell’anno<br /> scolastico, oppure esclusione dallo scrutinio finale o la non ammissione all’Esame di<br /> qualifica, può essere adottata se ricorrono due condizioni:<br /><br />

                    a.         Dev’esserci una recidiva nel caso di reati che violino la dignità e il rispetto per<br /> la persona umana, oppure atti di grave violenza o connotati da una particolare<br /> gravità tali da determinare seria apprensione a livello sociale;<br /><br />

                    b.         Non sono attuabili interventi per un reinserimento responsabile e tempestivo<br /> dello studente nella comunità scolastica durante l’anno scolastico.<br /><br /><br />



                    L’eventuale ritiro dalla scuola e/o il trasferimento ad altro Centro non interrompe il<br /> procedimento <br /><br /><br />disciplinare.



                    c)         Sanzioni alternative<br /><br />

                    Può essere prevista, anche in aggiunta alle sanzioni previste al punto 7a, la possibilità<br /> di prestare attività a favore della comunità scolastica. Le attività previste consistono<br /> nel supportare e agevolare i servizi offerti dalla scuola, in linea con il progetto<br /> educativo della scuola. A titolo di esempio le attività possono essere: volontariato;<br /> pulizia ambienti; piccole manutenzioni; attività di ricerca e studio con<br /> approfondimenti relativi ai fatti accaduti, lavori di Segreteria, nel pieno rispetto del<br /> Regolamento sulla privacy (GDPR 2016) e delle norme sulla sicurezza sui luoghi di<br /> lavoro (D.Lgs. 81/08 e D.Lgs. 106/09)<br /><br /><br />



                    d)         Organi disciplinari<br /><br />

                    Gli organi che irrogano sanzioni disciplinari possono essere individuali (formatore,<br /> responsabile disciplina e Direttore) e collegiali (Consiglio di disciplina).<br /><br />

                    Il Consiglio di disciplina è costituito da 3 docenti coordinatori di classe formatori, dal<br /> responsabile disciplina del Centro e dal Direttore del CFP che lo presiede.<br /><br />

                    Le sanzioni disciplinari che comportano allontanamento dalla scuola possono essere<br /> adottate solo dal Consiglio di disciplina. Gli Organi disciplinari collegiali si riuniscono<br /> in presenza o, nel caso di divieto di riunione, a distanza.<br /><br />

                    In particolare:<br /><br />

                    le sanzioni di cui alle lettere a. e b. del punto 7b del presente Regolamento sono<br /> irrogate dal formatore che rileva una infrazione che, a suo parere, non rivesta carattere di gravità;<br />
                    la sanzione di cui alla lettera c. del punto 7b del presente Regolamento è irrogata<br /> dal Direttore o da un suo delegato su segnalazione del singolo formatore o del<br /> consiglio di classe;<br />
                    le sanzioni di cui alle lettere d., e., f., g. del punto 7b del presente Regolamento<br /> sono irrogate dal Consiglio di disciplina<br />
                    le sanzioni per infrazioni commesse durante le sessioni d'esame sono irrogate<br /> dalla Commissione d'esame e sono applicabili anche ai candidati esterni.<br /><br />
                    La scelta della sanzione alternativa va effettuata dall'organo competente ad irrogare<br /> la sanzione principale, in relazione ai bisogni educativi emersi nel caso specifico e<br /> previo consenso dell'alunno o dei suoi genitori, se minorenne.<br /><br />

                    L'organo competente ad infliggere sanzioni di un certo grado può sempre infliggere<br /> quelle di grado inferiore.<br /><br /><br />



                    e)         Il procedimento disciplinare

                    Le sanzioni disciplinari di cui alle lettere a. e b. del presente Regolamento sono<br /> assunte dal formatore dopo aver esplicitato con chiarezza al singolo alunno le<br /> motivazioni che lo inducono ad adottare il provvedimento: in caso di contestazione<br /> da parte dell’allievo il tutto deve essere verbalizzato nel registro on-line.<br /><br />

                    Salvo i casi di irrogazione delle sanzioni di cui alle lettere a., b., il procedimento<br /> disciplinare è avviato dal Direttore o suo delegato in forma semplificata per la<br /> sanzione di cui alla lettera c., mediante contestazione scritta e dettagliata nel registr<br />o on line.<br /><br /><br />



                    Per le sanzioni di cui alle lettere d, e, f, g, il Direttore o suo delegato predispone<br /> comunicazione scritta dell'avvio del procedimento contenente:<br /><br />

                    •  Indicazione sommaria del fatto;<br /><br />

                    •  Avviso della convocazione davanti al Consiglio di disciplina con indicazione di data,<br /> ora e sede;<br /><br />

                    •   Avviso della possibilità di depositare memorie e di esercitare il diritto di difesa,<br /> anche con l'audizione personale o l'assistenza di persona di fiducia e di prendere<br /> visione e/o estrarre copia;<br /><br />

                    •   L'individuazione del responsabile dell'istruttoria.<br /><br />

                    La convocazione è comunicata tempestivamente allo studente maggiorenne e/o ai genitori, se minorenne.

                    Il Consiglio di disciplina, di fronte a fatti gravi, deve essere convocato nel più breve<br /> tempo possibile da parte del Presidente dell’Organo Collegiale, compatibilmente con<br /> le esigenze di difesa e, comunque, non oltre tre giorni.<br /><br />

                    L'alunno minorenne che accetta di intervenire al procedimento deve essere<br /> accompagnato dall'esercente la responsabilità genitoriale, appositamente invitato.<br /><br />

                    Ogni alunno sottoposto a procedimento disciplinare ha facoltà di produrre prove e<br /> testimonianze a lui favorevoli.<br /><br />

                    Il Direttore o suo delegato provvederà nell’immediatezza a dare comunicazione alla<br /> famiglia delle predette circostanze e della possibilità di presentare ricorso, che non<br /> sospende comunque il provvedimento, all’organo di garanzia entro il termine di 5<br /> giorni decorrenti dal ricevimento del provvedimento disciplinare.   Nel caso di<br /> presenza del genitore all’audizione, la comunicazione della sanzione deve prevedere<br /> anche i termini del ricorso e l’organo deputato a riceverlo. Può inoltre, secondo<br /> quanto previsto al punto h), essere richiesta la sospensione della sanzione, alle sole<br /> condizioni ivi previste.<br /><br />

                    Nel fascicolo del procedimento disciplinare vengono inserite tutte le informazioni<br /> raccolte, utili per accertare il fatto, con indicazione di eventuali testimoni in grado di<br /> riferire e le memorie scritte eventualmente depositate.<br /><br />

                    Davanti al Consiglio di disciplina si procede all'audizione, se presenti, dello studente<br /> individuato come responsabile, degli esercenti la responsabilità genitoriale e di<br /> eventuali persone da questi indicate come difensori o testimoni e si annota<br /> l'eventuale richiesta di sanzione alternativa.<br /><br />

                    All'esito dell'istruttoria, il Consiglio delibera a maggioranza dei presenti e, in caso di<br /> accertamento della responsabilità disciplinare sulla base di elementi concreti, precisi<br /> e concordanti dai quali si desuma che l'infrazione disciplinare è stata effettivamente<br /> commessa dallo studente incolpato, irroga la relativa sanzione.<br /><br />

                    Della deliberazione viene redatto verbale contenente:<br /><br />

                    a) L'indicazione dei componenti (presenti e assenti) e del segretario verbalizzante;<br /><br />

                    b) Gli estremi dell'episodio;<br /><br />

                    c) I nomi di eventuali testimoni e la sintetica esposizione dei fatti da loro riportati;<br /><br />

                    d) Le ragioni dello studente passibile di sanzione;<br /><br />

                    e) La motivazione del provvedimento finale;<br /><br />

                    f) La sanzione disciplinare inflitta e l'eventuale sanzione alternativa;<br /><br />

                    g) L'attività in favore della comunità scolastica nella quale è possibile convertire la sanzione;<br /><br />

                    h) Il termine entro il quale è possibile impugnare il provvedimento avanti l'Organo di<br />Garanzia Interno, pari a cinque giorni;<br /><br />

                    i) la delibera è comunicata direttamente mediante consegna di copia scritta allo<br /> studente interessato e, se minorenne, agli esercenti la responsabilità genitoriale se<br /> presenti all’audizione; nel caso di assenza all’audizione, la delibera di cui sopra è<br /> inviata nel più breve tempo possibile e comunque entro il giorno successivo<br /> attraverso il registro elettronico ed il libretto personale ed è inserita nel fascicolo<br /> personale dell'allievo con eventuale omissione dell'identità di terzi.<br /><br />

                    Il procedimento disciplinare deve concludersi entro trenta giorni dall’avvio,<br /> prorogabili di ulteriori giorni quindici per esigenze istruttorie.<br /><br />



                    f)         Comunicazione delle sanzioni<br /><br />

                    Delle sanzioni di cui alle lettere b, c, del punto 7b del presente Regolamento la<br /> famiglia è informata attraverso il registro elettronico.<br /><br />

                    Tutti gli altri provvedimenti adottati devono essere integralmente comunicati per<br /> iscritto alla famiglia, con lettera da inserire in copia agli atti della scuola e nel<br /> fascicolo personale dell'alunno.<br /><br />

                    Le sanzioni disciplinari vanno inserite nel fascicolo personale dello studente e, come<br /> quest'ultimo, lo seguono in occasione di trasferimento da una scuola ad un'altra o di<br /> passaggio ad altra tipologia di istruzione. Nel caso in cui nel testo della sanzione si<br /> faccia riferimento a dati sensibili che<br /> riguardano altre persone coinvolte nei fatti che hanno dato luogo alla sanzione stessa, si applica il principio dell'indispensabilità del<br /> trattamento dei dati sensibili che porta ad operare con "omissis" sull'identità delle<br /> persone coinvolte e comunque nel necessario rispetto del Regolamento UE 679/2016,<br /> così come attuato dal Decreto Legislativo n.101 del 10/08/2018.<br /><br />

                    Il cambiamento di scuola non pone fine ad un procedimento disciplinare iniziato, ma<br /> esso segue il suo iter fino alla conclusione.<br /><br /><br />



                    g)         Organo di Garanzia Interno<br /><br />

                    L'Organo di Garanzia Interno all'Istituto è costituito dal coordinatore didattico, che lo<br /> presiede, dal Coordinatore pastorale, da due docenti designati dall’Assemblea dei<br /> formatori e da uno studente maggiorenne e da un genitore; nel caso di impossibilità<br /> di designare lo studente maggiorenne viene elevato a due la rappresentanza dei<br /> genitori; le diverse componenti designano anche un membro supplente. I<br /> componenti designati nell’Organo di garanzia interno non possono far parte del<br /> Consiglio di disciplina, i membri durano in carica un anno scolastico.<br /><br />

                    L’Organo di garanzia è competente a decidere sui ricorsi in materia disciplinare e sui<br /> reclami proposti dagli studenti o da chiunque vi abbia interesse contro le violazioni<br /> del D.P.R. 24.06.1998 “Statuto delle studentesse e degli studenti”, anche contenute<br /> nel Regolamento dell'Istituto e a formulare proposte al Direttore in merito ad<br /> eventuali modifiche<br /> al presente Regolamento di disciplina per adeguarne il<br /> funzionamento alle esigenze della scuola, nel rispetto dello Statuto delle studentesse<br /><br /> e degli studenti e del Patto educativo di Corresponsabilità.<br /><br />

                    In caso di incompatibilità di un membro (in quanto interessato ai fatti oggetto di<br /> decisione o membro dell'organo che ha inflitto la sanzione), questo verrà sostituito<br /> dal membro supplente. La sostituzione opera anche in caso di dovere di astensione<br /> (es. qualora faccia parte dell'O.G. lo studente sanzionato o un suo genitore). L'Organo<br /> di Garanzia è validamente costituito quando è presente la maggioranza dei<br /> componenti e delibera a maggioranza dei votanti. In caso di parità, prevale il voto del<br /> Presidente. La riunione dell’Organo di garanzia è valida anche a distanza, qualora sia<br /> vietato l’incontro in presenza.<br /><br />



                    h)         Impugnazioni<br /><br />

                    Avverso il provvedimento di irrogazione delle sanzioni disciplinari, entro cinque giorni dalla comunicazione, è ammesso, da parte di chiunque abbia interesse, ricorso scritto all'Organo di Garanzia Interno istituito dalla scuola.<br /><br />

                    <u>Lo studente sanzionato, o l’esercente la responsabilità genitoriale nel caso di minorenne, presente in sede di audizione e che ha ricevuto in tale sede la notifica della sanzione, può chiedere la sospensione della sanzione invocando il possibile danno grave ed irreparabile e presupponendo i requisiti del fumus boni iuris, presentando richiesta immediata contestualmente alla notifica del provvedimento.</u><br /><br />

                    In tal caso la sanzione è sospesa, in attesa del pronunciamento dell’Organo di<br /> Garanzia.<br /><br />

                    L'Organo di Garanzia decide in via ordinaria entro cinque giorni dalla presentazione<br /> del ricorso.<br /><br />

                    L'Organo di Garanzia ha il compito di deliberare in primo luogo circa l'ammissibilità<br /> del ricorso e, in caso affermativo, di valutare la correttezza della procedura messa in<br /> atto per l'irrogazione delle sanzioni.<br /><br />

                    L'ammissibilità del ricorso, pena l'irricevibilità, è legata a:<br /><br />

                    •          aspetti non presi in esame durante l'accertamento,<br /><br />

                    •          carenza di motivazione,<br /><br />

                    •          eccesso della sanzione.<br /><br />

                    Valutata la correttezza o meno del procedimento seguito per l'irrogazione della<br /> sanzione, l'Organo di Garanzia, con delibera motivata presa a maggioranza semplice<br /> dei presenti (non è ammessa l'astensione dal voto), può:<br /><br />

                    a-         confermare la sanzione,<br /><br />

                    b-         riformare la sanzione,<br /><br />

                    La riforma della sanzione a sua volta può comprendere una o più delle seguenti<br /> azioni:<br /><br />

                    a- modifica parziale o totale;<br /><br />

                    b- annullamento;<br /><br />

                    c- remissione al medesimo organo irrogante per una nuova valutazione sulla base di<br /> nuovi criteri o evidenze;<br /><br />

                    d- remissione ad altro organo irrogante qualora nella fase analitica sia emersa<br /> l'incompetenza dell'organo che ha inflitto la sanzione;<br /><br />

                    Il provvedimento dell'Organo di Garanzia Interno di applicazione della sanzione ha carattere definitivo.<br /><br />



                    i) Quadro riassuntivo delle mancanze e delle sanzioni<br /><br />


                </Typography>
            </Container><br /><br />

            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image
                    src="/images/progetto/tabella.png"
                    alt=""
                    width={1920}
                    height={1500}

                />
            </Container><br /><br /><br /><br />


        </Layout>


    )
}