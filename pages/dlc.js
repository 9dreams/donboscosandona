import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero2.js'
import Paragraph from 'components/Paragraph'

export default function Pagina() {
    return (
        <Layout>
            <LandingHero
                opacity={0.0}
                title="Dopo la Campanella"
                description="Il dopo scuola dell'Oratorio don Bosco"
                imageUrl="/images/dlc/imgsfondo1.png"
            />
            <Paragraph
                title=""
                subtitle=""
            >
                <font face="Verdana"><p>
                    L’attività di doposcuola nel nostro oratorio affonda le sue radici nel secolo scorso, per intuizione di don Alberto e nasce dal desiderio di offrire ai ragazzi un ambiente stimolante e accogliente, in cui poter svolgere i propri compiti scolastici e socializzare, confrontandosi con coetanei, compagni di classe e adulti. Il progetto quindi racchiude in sé la dimensione didattica, educativa, ludica e di sostegno.
                </p>

                    <p>
                        La diffusione del progetto, che conta ogni anno più di 150 iscritti,  è stata favorita dal contributo del Comune di San Donà di Piave e di altri enti locali limitrofi, come il Comune di Musile di Piave e Noventa di Piave.
                        Per rendere la proposta educativa e formativa sempre più efficace per i ragazzi, negli anni sono state avviate collaborazioni con i servizi territoriali come la Neuropsichiatria Infantile, l’Associazione “La Nostra Famiglia” e i servizi di Tutela Minori. Sono operative collaborazioni con l’Università di Trieste (sede di Portogruaro), l’Università di Padova e di Venezia.
                    </p>


                    <p>
                        I principali destinatari del progetto sono i bambini delle classi 3°- 4° e 5° della scuola primaria e gli allievi del triennio della scuola secondaria di primo grado, ma il supporto è aperto anche ai ragazzi che frequentano le scuole superiori.
                    </p>

                    <p>
                        <b>L’equipe di operatori è multidisciplinare e include educatori, psicologi e pedagogisti, oltre che volontari qualificati.</b>
                    </p>

                    Questi sono i nostri obiettivi:
                    <p>
                        <li>Approcciare lo studio ed il lavoro scolastico individuale in modo positivo e proficuo</li>
                        <li>Imparare o migliorare il metodo di studio</li>
                        <li>Recuperare le lacune nella preparazione e utilizzare un linguaggio specifico</li>
                        <li>Sostenere chi è in difficoltà attraverso i laboratori DSA</li>
                        <li>Migliorare l’autostima, la consapevolezza di sé e la socializzazione</li>
                    </p>

                    <p>
                        <b>L’attività si svolge all’interno dell’ambiente salesiano, educativo e gioioso, connotato dal metodo preventivo.</b> Il ragazzo è protagonista e viene supportato ed incoraggiato nello svolgimento delle attività scolastiche, offrendo opportunità di approfondimento, ma anche la possibilità di partecipare ad attività ludico ricreative quali corsi musicali e laboratori espressivi.
                    </p>

                    <p>
                        Nell’organizzazione del progetto risulta di fondamentale rilevanza il lavoro in rete, dove i nostri operatori si mettono in relazione con la famiglia, prima “agenzia educativa”, veicolo di valori e conoscenze, e con gli istituti scolastici, realtà formative nelle quali i ragazzi passano molto del loro tempo.
                    </p>

                    <p>
                        Importanti sono i momenti di incontro tra gli operatori, per verificare l’efficacia degli interventi attuati e ottimizzare i risultati, e con le famiglie, attraverso appuntamenti personali o durante gli incontri di verifica previsti nell’anno formativo, invitate ad esprimere esigenze e aspettative per elaborare insieme i percorsi educativi più adeguati.
                    </p>
                </font>

            </Paragraph>
        </Layout>
    )
}
