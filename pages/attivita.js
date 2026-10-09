import Head from 'next/head'
import { Icon } from '@iconify/react'
import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero.js'
import { Intro, Section } from '/components/ui'

// Le attività dell'anno formativo, nell'ordine in cui si svolgono.
const attivita = [
    {
        id: 'festa-dellaccoglienza-inizio-anno',
        icon: 'ph:balloon',
        title: 'Festa dell’accoglienza – inizio anno',
        body: (
            <>
                <p>È un’occasione preziosa per <strong>creare</strong> quel <strong>clima di famiglia</strong> che caratterizza il nostro Progetto Educativo. La presenza delle famiglie è segno di condivisione del patto educativo che viene firmato da Direttore, genitori e giovani all’inizio del percorso formativo.</p>
                <p>La festa ha inizio con una Santa Messa in chiesa, per affidare nella preghiera i giovani del nostro Centro, le loro famiglie e i formatori. Al termine della celebrazione, i formatori organizzano giochi e tornei rivolti a tutte le classi: vengono accumulati punti validi per una “super-pizza” di fine anno. La festa si conclude con un buffet divisi per classi.</p>
            </>
        ),
    },
    {
        id: 'castagnata',
        icon: 'ph:tree',
        title: 'Castagnata',
        body: (
            <>
                <p>È una tradizionale esperienza di tutte le scuole e dei centri salesiani, che ricorda le <strong>passeggiate autunnali di don Bosco</strong>.</p>
                <p>In questa giornata i formatori accompagnano i gruppi classe nella visita di luoghi di particolare interesse storico-culturale e/o tecnico.</p>
                <p>Le esperienze degli ultimi anni del nostro Centro: diga del Vajont (PN), prosciuttificio di San Daniele (UD) e città di Udine, Cima del Monte Grappa (VI), Sacrario militare di Redipuglia (GO), azienda Maschio Gaspardo – sede di Morsano al Tagliamento (PN), Museo della Centrale e Immaginario Scientifico – Malnisio di Montereale Valcellina (PN), Aeroporto militare di Istrana (TV), città di Gorizia e di Trieste.</p>
            </>
        ),
    },
    {
        id: 'festa-dellimmacolata',
        icon: 'ph:star',
        title: "Festa dell'Immacolata",
        body: (
            <>
                <p>Per i salesiani questa festa è tanto cara e significativa perché segna l’<strong>origine della Congregazione</strong>.</p>
                <p>Don Bosco era fermamente convinto dell’importanza di questo dogma di fede: Tutte le nostre cose più grandi ebbero principio e compimento nel giorno dell’Immacolata” (MB 17, 510).</p>
                <p>Allora anche noi come Centro vogliamo vivere una giornata particolare di festa con i nostri giovani e i formatori: una Santa Messa in chiesa per affidarci alla Mamma del Cielo e un momento di intervallo con un krapfen da gustare insieme prima della visione di un film nella sala teatro.</p>
            </>
        ),
    },
    {
        id: 'festa-di-don-bosco',
        icon: 'ph:hands-praying',
        title: 'Festa di don Bosco',
        body: (
            <>
                <p>In questa occasione, centrale nel nostro percorso formativo, <strong>celebriamo e ringraziamo il nostro Santo fondatore, Padre e Maestro dei giovani</strong>.</p>
                <p>Tradizionalmente la festa ha inizio con una Santa Messa in onore di San Giovanni Bosco. In seguito, come da tradizione, vengono consegnati gli Attestati di Qualifica ad ex-allievi/e dell’anno formativo precedente. Inoltre, viene proclamato l’Amico Sostenitore del C.F.P. “don Bosco”, consegnando una targa a chi ha contribuito in modo significativo allo sviluppo e alla crescita del nostro Centro. Infine, viene consegnata una Borsa di studio all’ex-allievo più meritevole dell’anno formativo precedente. La festa si conclude con la visione di un film in sala teatro.</p>
            </>
        ),
    },
    {
        id: 'giornate-di-riflessione-e-amicizia',
        icon: 'ph:heart',
        title: 'Giornate di riflessione e amicizia',
        body: (
            <>
                <p>Nel percorso formativo dei nostri giovani sono fondamentali dei momenti nei quali il gruppo classe può dedicarsi del tempo al di fuori dell’attività formativa.</p>
                <p>Questi momenti sono <strong>occasioni di crescita personale e di conoscenza del gruppo classe</strong>.</p>
                <p>Si tratta di un impegno che stimola a scoprire l’essenziale della vita e la quotidianità vissuta con i compagni di classe.</p>
                <p>È un incontro sincero con se stessi per conoscersi meglio, per apprezzare i doni ricevuti e lavorare sui propri difetti.</p>
            </>
        ),
    },
    {
        id: 'gite',
        icon: 'ph:airplane-tilt',
        title: 'Gite',
        body: (
            <>
                <p>Tra le attività che il Centro offre ai nostri giovani, c’è un’occasione ricca e imperdibile: le visite didattiche di 3 giorni!</p>
                <p>Si tratta di <strong>occasioni di crescita culturale, di fraterna amicizia, di tranquillo svago e di riflessione</strong>.</p>
                <p>Tradizionalmente le classi Prime si recano a Torino, per visitare i luoghi dove è nato e dove ha vissuto don Bosco. Sempre in programma è la visita alla città, passando per il Parco del Valentino e per la Basilica di Superga. Negli ultimi anni non sono mancate le visite al Museo Nazionale dell’Automobile, al Museo Egizio e al Museo Nazionale del Cinema.</p>
                <p>Per le classi Terze la gita si svolge a Roma: dalle sedi istituzionali (Palazzo Madama, Palazzo Chigi e Palazzo Montecitorio), alle bellezze storiche e ai luoghi di particolare interesse (Colosseo, Pantheon, Foro Romano, Fontana di Trevi, Piazza di Spagna e Piazza Navona, Basilica di San Pietro e Castel Sant’Angelo, Catacombe di San Callisto e Fosse Ardeatine).</p>
            </>
        ),
    },
    {
        id: 'festa-di-fine-anno',
        icon: 'ph:confetti',
        title: 'Festa di fine anno',
        body: (
            <>
                <p>È un momento <strong>per dire GRAZIE</strong> per l’anno formativo che giunge al termine, con il desiderio di continuare a coltivare il clima di famiglia che caratterizza il nostro Progetto Educativo e per vivere un’estate ricca di belle esperienze.</p>
                <p>Come per la Festa dell’accoglienza di inizio anno, anche in questa occasione la presenza delle famiglie è segno di condivisione del patto educativo che viene firmato da Direttore, genitori e giovani.</p>
                <p>Il programma classico della festa prevede la Santa Messa di ringraziamento in chiesa. Al termine, i formatori organizzano giochi e tornei rivolti a tutte le classi: vengono accumulati gli ultimi punti validi per la “super-pizza” di fine anno. La festa si conclude con un buffet divisi per classi.</p>
            </>
        ),
    },
];

export default function Home() {
    return (
        <Layout>
            <Head />
            <LandingHero
                eyebrow="Progetto educativo"
                title="Le attività"
                imageUrl="/images/struttura/donbosco_esterno.jpg"
            />
            <Intro title="Cantami o Diva del pelide Achille l'ira funesta...">
                <p>Il percorso formativo al C.F.P. “don Bosco” è caratterizzato da una serie di <strong>attività</strong> che hanno l’<strong>obiettivo di concretizzare il progetto educativo</strong> che proponiamo ai nostri giovani e alle loro famiglie.</p>
            </Intro>

            <Section width="lg">
                <ol className="m-0 p-0 list-none grid gap-6 md:grid-cols-2">
                    {attivita.map((a, i) => (
                        <li key={a.id} id={a.id} className="scroll-mt-28 rounded-2xl bg-surface border border-line shadow-sm p-6 md:p-8">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand/10 text-brand">
                                    <Icon icon={a.icon} className="text-2xl" />
                                </span>
                                <div>
                                    <span className="block text-xs font-bold uppercase tracking-widest text-muted">{String(i + 1).padStart(2, '0')}</span>
                                    <h2 className="text-2xl font-bold tracking-tight text-brand leading-tight m-0">{a.title}</h2>
                                </div>
                            </div>
                            <div className="prose-site text-[17px]! [&_p:last-child]:mb-0">{a.body}</div>
                        </li>
                    ))}
                </ol>
            </Section>
        </Layout>
    )
}
