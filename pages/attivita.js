import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

import Head from 'next/head'
import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero2.js'
import Features from '/components/Features'
import Carousel from '/components/Carousel'
import PostInEvidenza from '/components/PostInEvidenza'
import Products from '/components/Products'
import Testimonials from '/components/Testimonials'
import Team from '/components/Team'
import Post from '/components/Post'
import Certifications from '@/components/Certifications'
import { Typography } from '@mui/material'
import Paragraph from "/components/Paragraph"

export default function Home({ datiArticoli }) {
    return (
        <Layout>
            <Head />
            <Container maxWidth="lg">
                <Paragraph
                    title="Cantami o Diva del pelide Achille l'ira funesta..."
                    subtitle={<span style={{ color: '' }}>Il percorso formativo al C.F.P. “don Bosco” è caratterizzato da una serie di <strong>attività</strong> che hanno l’<strong>obiettivo di concretizzare il progetto educativo</strong> che proponiamo ai nostri giovani e alle loro famiglie.</span>}
                    backgroundColor="#FFFFFF"
                    columnCount={1}
                    maxWidth="lg"
                    sx={{}}
                >
                </Paragraph>
                <Paragraph
                    title={<span style={{ color: '' }}>Festa dell’accoglienza – inizio anno</span>}
                    subtitle={<span style={{ color: '' }}>È un’occasione preziosa per <strong>creare</strong> quel <strong>clima di famiglia</strong> che caratterizza il nostro Progetto Educativo. La presenza delle famiglie è segno di condivisione del patto educativo che viene firmato da Direttore, genitori e giovani all’inizio del percorso formativo.

                    La festa ha inizio con una Santa Messa in chiesa, per affidare nella preghiera i giovani del nostro Centro, le loro famiglie e i formatori. Al termine della celebrazione, i formatori organizzano giochi e tornei rivolti a tutte le classi: vengono accumulati punti validi per una “super-pizza” di fine anno. La festa si conclude con un buffet divisi per classi.</span>}
                    backgroundColor="#FFFFFF"
                    columnCount={1}
                    maxWidth="lg"
                    sx={{}}
                >

                </Paragraph>
                <Paragraph
                    title={<span style={{ color: '' }}>Castagnata</span>}
                    subtitle={<span style={{ color: '' }}>È una tradizionale esperienza di tutte le scuole e dei centri salesiani, che ricorda le <strong>passeggiate autunnali di don Bosco</strong>.

                    In questa giornata i formatori accompagnano i gruppi classe nella visita di luoghi di particolare interesse storico-culturale e/o tecnico.
                    
                    Le esperienze degli ultimi anni del nostro Centro: diga del Vajont (PN), prosciuttificio di San Daniele (UD) e città di Udine, Cima del Monte Grappa (VI), Sacrario militare di Redipuglia (GO), azienda Maschio Gaspardo – sede di Morsano al Tagliamento (PN), Museo della Centrale e Immaginario Scientifico – Malnisio di Montereale Valcellina (PN), Aeroporto militare di Istrana (TV), città di Gorizia e di Trieste.</span>}
                    backgroundColor="#FFFFFF"
                    columnCount={1}
                    maxWidth="lg"
                    sx={{}}
                >
                </Paragraph>
                <Paragraph
                    title={<span style={{ color: '' }}>Festa dell'Immacolata</span>}
                    subtitle={<span style={{ color: '' }}>Per i salesiani questa festa è tanto cara e significativa perché segna l’<strong>origine della Congregazione</strong>.

                    Don Bosco era fermamente convinto dell’importanza di questo dogma di fede: Tutte le nostre cose più grandi ebbero principio e compimento nel giorno dell’Immacolata” (MB 17, 510).
                    
                    Allora anche noi come Centro vogliamo vivere una giornata particolare di festa con i nostri giovani e i formatori: una Santa Messa in chiesa per affidarci alla Mamma del Cielo e un momento di intervallo con un krapfen da gustare insieme prima della visione di un film nella sala teatro.</span>}
                    backgroundColor="#FFFFFF"
                    columnCount={1}
                    maxWidth="lg"
                    sx={{}}
                >
                </Paragraph>
                <Paragraph
                    title={<span style={{ color: '' }}>Festa di don Bosco</span>}
                    subtitle={<span style={{ color: '' }}>In questa occasione, centrale nel nostro percorso formativo, <strong>celebriamo e ringraziamo il nostro Santo fondatore, Padre e Maestro dei giovani</strong>.

                    Tradizionalmente la festa ha inizio con una Santa Messa in onore di San Giovanni Bosco. In seguito, come da tradizione, vengono consegnati gli Attestati di Qualifica ad ex-allievi/e dell’anno formativo precedente. Inoltre, viene proclamato l’Amico Sostenitore del C.F.P. “don Bosco”, consegnando una targa a chi ha contribuito in modo significativo allo sviluppo e alla crescita del nostro Centro. Infine, viene consegnata una Borsa di studio all’ex-allievo più meritevole dell’anno formativo precedente. La festa si conclude con la visione di un film in sala teatro.</span>}
                    backgroundColor="#FFFFFF"
                    columnCount={1}
                    maxWidth="lg"
                    sx={{}}
                >
                </Paragraph>
                <Paragraph
                    title={<span style={{ color: '' }}>Giornate di riflessione e amicizia</span>}
                    subtitle={<span style={{ color: '' }}>Nel percorso formativo dei nostri giovani sono fondamentali dei momenti nei quali il gruppo classe può dedicarsi del tempo al di fuori dell’attività formativa.

                    Questi momenti sono <strong>occasioni di crescita personale e di conoscenza del gruppo classe</strong>.
                    
                    Si tratta di un impegno che stimola a scoprire l’essenziale della vita e la quotidianità vissuta con i compagni di classe.
                    
                    È un incontro sincero con se stessi per conoscersi meglio, per apprezzare i doni ricevuti e lavorare sui propri difetti.</span>}
                    backgroundColor="#FFFFFF"
                    columnCount={1}
                    maxWidth="lg"
                    sx={{}}
                >
                </Paragraph>
                <Paragraph
                    title={<span style={{ color: '' }}>Gite</span>}
                    subtitle={<span style={{ color: '' }}>Tra le attività che il Centro offre ai nostri giovani, c’è un’occasione ricca e imperdibile: le visite didattiche di 3 giorni!

                    Si tratta di <strong>occasioni di crescita culturale, di fraterna amicizia, di tranquillo svago e di riflessione</strong>.
                    
                    Tradizionalmente le classi Prime si recano a Torino, per visitare i luoghi dove è nato e dove ha vissuto don Bosco. Sempre in programma è la visita alla città, passando per il Parco del Valentino e per la Basilica di Superga. Negli ultimi anni non sono mancate le visite al Museo Nazionale dell’Automobile, al Museo Egizio e al Museo Nazionale del Cinema.
                    
                    Per le classi Terze la gita si svolge a Roma: dalle sedi istituzionali (Palazzo Madama, Palazzo Chigi e Palazzo Montecitorio), alle bellezze storiche e ai luoghi di particolare interesse (Colosseo, Pantheon, Foro Romano, Fontana di Trevi, Piazza di Spagna e Piazza Navona, Basilica di San Pietro e Castel Sant’Angelo, Catacombe di San Callisto e Fosse Ardeatine).</span>}
                    backgroundColor="#FFFFFF"
                    columnCount={1}
                    maxWidth="lg"
                    sx={{}}
                >
                </Paragraph>
                <Paragraph
                    title={<span style={{ color: '' }}>Festa di fine anno</span>}
                    subtitle={<span style={{ color: '' }}>È un momento <strong>per dire GRAZIE</strong> per l’anno formativo che giunge al termine, con il desiderio di continuare a coltivare il clima di famiglia che caratterizza il nostro Progetto Educativo e per vivere un’estate ricca di belle esperienze.

                    Come per la Festa dell’accoglienza di inizio anno, anche in questa occasione la presenza delle famiglie è segno di condivisione del patto educativo che viene firmato da Direttore, genitori e giovani.
                    
                    Il programma classico della festa prevede la Santa Messa di ringraziamento in chiesa. Al termine, i formatori organizzano giochi e tornei rivolti a tutte le classi: vengono accumulati gli ultimi punti validi per la “super-pizza” di fine anno. La festa si conclude con un buffet divisi per classi.</span>}
                    backgroundColor="#FFFFFF"
                    columnCount={1}
                    maxWidth="lg"
                    sx={{}}
                >
                </Paragraph>
            </Container>
        </Layout>
    )
}
