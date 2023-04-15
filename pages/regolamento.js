import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero2.js'
import Paragraph from 'components/Paragraph'

export default function Pagina() {
    return (
        <Layout>
            <LandingHero
                opacity={0.2}
                title="“Regolamento” della P.E.R."
                description=""
                imageUrl="/images/regolamento/rego.webp"
            />
            <Paragraph
                title="Ecco qui tutte le regole da rispettare alla P.E.R!!!"
                subtitle=""
            >
                <font face="Verdana">
                    <p>
                        La Proposta Estate Ragazzi è organizzata dall’Oratorio don Bosco presso la propria sede di San Donà di Piave nel periodo dal <b>15 giugno al 14 luglio 2023.</b>
                        È un’attività di animazione educativa, ricreativa e culturale che si ispira ad una visione cristiana della vita e al metodo educativo di don Bosco, aperta a chiunque ne condivida le finalità educative.
                    </p>

                    <p>
                        L’attività, per <b>ragazzi/e dalla 3° classe elementare (anno 2014) alla 3ª classe delle scuole medie (anno 2009)</b>, si svolge dal lunedì al venerdì, il mattino dalle <b>h. 9:30 alle h. 12:00</b> ed il pomeriggio dalle <b>h. 15:00 alle h. 18:00</b>, ad eccezione dei giorni programmati di uscita.
                        Nella giornata di <b>mercoledì</b> le attività si svolgeranno <b>solo il mattino</b>, mentre il pomeriggio è riservato agli operatori ed animatori per le opportune riunioni di coordinamento, programmazione e formazione.
                        All’inizio dell’attività viene fornito agli iscritti un calendario dettagliato.
                    </p>

                    <p>
                        Il direttore dell’Oratorio e della Comunità Salesiana è <b>don Nicola Munari</b>, il responsabile per l’organizzazione, il coordinamento e la gestione della Proposta Estate Ragazzi è <b>don Michele Bortolato</b>, che si avvale della collaborazione di corresponsabili, <b>operatori (animatori/educatori con specifica e prolungata esperienza nel settore), animatori (volontari con più di un anno di esperienza) ed aiuto-animatori</b> (volontari che hanno frequentato corsi di formazione specifici) e <b>adulti volontari</b> che in vario modo aiutano, più o meno direttamente a contatto con i ragazzi, condividendo le modalità e finalità educative tipiche del carisma salesiano di Don Bosco. Gli animatori, <b>aiuto-animatori</b> e adulti volontari prestano la loro opera in modo gratuito.
                        Tutti i collaboratori coinvolti nell’attività partecipano, prima dell’avvio della stessa, a particolari corsi di formazione ed aggiornamento sia interni alla struttura che esterni.
                        È estremamente gradita la <b>collaborazione dei genitori</b>, sia nell’intento educativo esplicitamente assunto con l’iscrizione del figlio, sia nella conduzione della Proposta Estate Ragazzi attraverso impegni concreti.
                    </p>

                    <p>
                        Trattandosi di un’attività ricreativa, si chiarisce che l’assistenza non ha capillarità e puntualità di tipo scolastico, per cui l’organizzazione non risponde di <b>chi non rispetta gli orari o si assenta senza avvisare</b>, soprattutto quando vengono addotte motivazioni non verificabili (ad esempio: Mi ha detto la mamma ...).
                    </p>

                    <p>
                        Gli iscritti alla Proposta Estate Ragazzi sono coperti da precisa <b>garanzia assicurativa</b> sia durante l’attività svolta in sede che durante le uscite programmate in calendario. Si declina ogni responsabilità per coloro che non sono presenti, o liberamente si allontanano prima del termine delle attività organizzate.
                        L’Oratorio don Bosco declina ogni responsabilità nel caso si verifichino <b>danneggiamenti e/o smarrimenti e/o furti di cellulari, effetti personali e denaro.</b>
                        Essendo l’Oratorio ambiente educativo e non una spiaggia pubblica è richiesto un <b>abbigliamento adatto al luogo</b> (non si può giocare a petto nudo, non ci si presenta con magliette troppo succinte, indumenti strappati, ecc...).
                        La direzione si riserva la possibilità di allontanare (in qualsiasi momento) l’iscritto/a per motivi disciplinari, previa comunicazione ai genitori o a chi ne fa le veci.
                        Per quanto non descritto o contemplato nel presente regolamento, si rimanda al comune buon senso, fermo restando l’insindacabilità del giudizio espresso dal direttore don Nicola Munari e dal coordinatore della Proposta Estate Ragazzi, don Michele Bortolato.
                    </p>
                </font>
            </Paragraph>
        </Layout>
    )
}
