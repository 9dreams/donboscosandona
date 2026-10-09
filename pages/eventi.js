import Head from 'next/head'
import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero'
import Paragraph from '/components/Paragraph'
import { QuickNav, Section, SectionTitle, Card } from '/components/ui'

const ancore = [
    { href: '#open-school', label: 'Open School' },
    { href: '#scuolazienda', label: 'Scuol@zienda' },
    { href: '#exallievi', label: 'Convegno exallievi' },
    { href: '#edizioni', label: 'Nelle scorse edizioni' },
]

const edizioni = [
    ['2018', <><b>“La cultura del buon lavoro” e inaugurazione delle nuove aule del Centro</b>.</>, 'Convegno'],
    ['2017', <>Intervento sul tema <b>“Il sistema duale: una forma nuova di formazione professionale_risorse e convenienza”</b>, con interventi e testimonianza di formatori ed imprenditori che collaborano alla sperimentazione .</>],
    ['2016', <>Riflessione sul tema <b>“Il Sistema Preventivo in contesto non cristiano essere testimoni oggi”</b>.</>],
    ['2015', <>Esperienze a confronto sul tema <b>“Insegnamenti tratti da don Bosco”</b>.</>],
    ['2013', <><b>Inaugurazione nuova aula FIAT </b>alla presenza del Rettor Maggiore dei salesiani don Pascual Chavez Villanueva.</>],
    ['2012', <><b>“Don Bosco: Padre, Maestro ed Amico”</b>.</>],
    ['2011', <><b>“Il nostro CFP: una proposta valida anche oggi? Nuovi scenari e nuovi giovani”</b>.</>],
]

export default function Home() {
    return (
        <Layout>
            <Head />
            <LandingHero
                eyebrow="Per le famiglie"
                title="EVENTI"
                description="Vieni a conoscere il bene che siamo e facciamo"
                imageUrl="/images/home/lab.jpg"
            />
            <QuickNav links={ancore} />

            <Paragraph id="open-school" title="Open School" subtitle="Per le famiglie">
                <p>L’Open School è un’iniziativa annuale che il nostro Centro propone agli studenti delle scuole medie che
                desiderano conoscere la nostra struttura, i nostri corsi e le nostre proposte educative e formative,attraverso visite guidate nei laboratori.</p>

                <p>Il Coordinatore dell’Orientamento e i formatori accolgono nell’atrio del Centro le famiglie che
                desiderano conoscere la nostra realtà formativa e il nostro Progetto Educativo. I formatori presenti
                accompagnano genitori e ragazzi a gruppi nella visita ai laboratori; in questi ambienti alcuni
                giovani del nostro Centro presentano le esercitazioni da loro preparate nei diversi Settori.</p>

                <p>Al termine della visita guidata, la collaboratrice di segreteria è a disposizione per la distribuzione di materiale informativo, dei moduli di preiscrizione e per ogni richiesta di informazioni.</p>

                <p>È un’ottima occasione per vedere da vicino e “toccare con mano” la realtà del nostro Centro…vieni a trovarci!</p>
            </Paragraph>

            <Paragraph id="scuolazienda" title="Scuol@zienda" subtitle="Dal 2008">
                <p>L’iniziativa, che ha preso corpo nel 2008, ha la funzione di <b>favorire un incontro tra il mondo della scuola – impegnato nella formazione dei tecnici che metteranno le loro conoscenze a disposizione del mondo del lavoro – e il settore produttivo</b>, costituito dalle aziende che operano nel nostro territorio.</p>

                <p>Il nostro Centro vuole dare la possibilità agli imprenditori della zona di presentare soluzioni tecnologiche nei settori meccanico, elettromeccanico, elettronico/informatico e dell’autoriparazione.</p>

                <p>Durante l’evento si svolgono seminari ed incontri, tenuti dagli stessi imprenditori, su iniziative, novità e innovazioni nei settori del nostro Centro. Inoltre vengono predisposte delle aree espositive con la presentazione di alcuni prodotti innovativi delle aziende che partecipano all’evento.</p>
            </Paragraph>

            <Paragraph id="exallievi" title="Convegno exallievi" subtitle="Seconda domenica di gennaio">
                <p>L’evento si svolge una volta all’anno, solitamente la seconda domenica di gennaio.</p>

                <p>Tutti gli Exallievi del nostro Centro sono invitati per un mezza giornata insieme, per rivivere il <b>clima di familiarità</b> e di <b>spirito salesiano</b> respirato negli anni in cui frequentavano il C.F.P. “don Bosco”. Vuole essere un’<b>occasione di incontro tra amici, di riflessione e di confronto.</b></p>

                <p>Inizialmente è previsto un incontro-confronto su un tema scelto per l’occasione. In seguito la S. Messa e, per concludere, la foto ricordo e il pranzo in allegria salesiana. Viene organizzata, inoltre, una lotteria il cui ricavato è destinato ad una borsa di studio per alcuni exallievi più meritevoli dell’Anno Formativo appena concluso.</p>
            </Paragraph>

            <Section id="edizioni" width="lg">
                <SectionTitle icon="ph:book-open" subtitle="Nelle scorse edizioni:">
                    Sfoglia il libretto dei 60 anni del C.F.P. “don Bosco”
                </SectionTitle>
                <Card className="p-6 md:p-8">
                    <ol className="relative m-0 p-0 list-none border-l-2 border-line ml-2 space-y-6">
                        {edizioni.map(([anno, testo, etichetta]) => (
                            <li key={anno} className="relative pl-6">
                                <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-surface bg-brand" />
                                <span className="inline-block rounded-md bg-ochre px-2 py-0.5 text-xs font-bold text-ink mb-1">
                                    {anno}{etichetta ? '_' + etichetta : ''}
                                </span>
                                <p className="m-0 text-[17px] leading-relaxed">{testo}</p>
                            </li>
                        ))}
                    </ol>
                </Card>
            </Section>
        </Layout>
    )
}
