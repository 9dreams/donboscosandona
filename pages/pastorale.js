import Container from '@mui/material/Container'
import Head from 'next/head'
import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero2.js'
import Products from '/components/Products'
import Paragraph from '@/components/Paragraph'
import { Typography } from '@mui/material'

// Voci del menù per il componente LandingHero

let menu = [
    { title: 'Chi siamo', url: '/chi-siamo' },
    { title: 'Contatti', url: '/contatti' },
    { title: 'Dove siamo', url: '/dove-siamo' },
    { title: 'Trasparenza', url: '/trasparenza' },
]






let pastorale = [
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
                title="Centro Pastorale"
                description="Per diventare come insegna don Bosco ''buoni cristiani e onesti cittadini!''"
                buttonUrl={'https://www.youtube.com/watch?v=wyjm1yGmu9g'}
                buttonText="Guarda il video"
                imageUrl="https://www.famigliasalesiana.org/public/Pagine/RETTOR-MAGGIORE.jpg"
                menu={menu} />

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



                <br />
                <br />


                <h1>Obiettivi educativi: la crescita integrale della persona</h1>
                <p>
                    <font size="4">
                        Il progetto educativo del CFP Don Bosco mette al centro il giovane per favorire la sua formazione integrale; lo rende soggetto attivo della sua maturazione coinvolgendolo consapevolmente in un programma di crescita che mira ad una vita piena e gioiosa; lo apre alla dimensione sociale rendendolo capace di contribuire alla crescita della società nella ricerca del bene comune.
                    </font>
                </p>


                <br />


                <h1>La formazione religiosa</h1>
                <font size="4">
                    La dimensione etico religiosa viene veicolata attraverso l’insegnamento della religione, le feste, le celebrazioni, gli incontri di preghiera, le giornate di amicizia e riflessione, i ritiri, le manifestazioni giovanili, le esperienze di volontariato, la missionarietà.
                </font>


                <br />
                <br />


                <h1>La formazione della coscienza</h1>
                <font size="4">
                    L’educazione impartita in un CFP salesiano rimanda ad un modello di vita e di uomo che deriva dall’antropologia cristiana. Pertanto, il CFP si riserva di: presentare proposte culturali, sociali e civili coerenti con il messaggio cristiano; esprimere una valutazione critica dei modelli in contrasto con tali valori; difendere, nel mondo del lavoro, i diritti dei più deboli.
                </font>


                <br />
                <br />


                <h1>L'educazione dell'affettività</h1>
                <font size="4">
                    È fondamentale creare attorno ai giovani un clima educativo ricco di scambi comunicativo-affettivi. II sentirsi accolto, riconosciuto, stimato e amato è, per ogni individuo, la migliore lezione sull’amore.
                    Allo stesso modo, il confronto con persone che vivono l’amore come forma di rispetto verso sé e gli altri ha la forza della testimonianza. Una vocazione matrimoniale vissuta con convinzione e aperta alla procreazione responsabile, si riverbera sui giovani favorendo l'apertura seria e serena all'amore. La testimonianza del religioso, che vive in modo limpido e lieto la sua donazione nella castità, fa percepire al giovane la possibilità di vivere una simile esperienza d'amore.
                    Il servizio fraterno ai piccoli ed ai poveri e il contatto guidato con situazioni di sofferenza educa all’amore gratuito.
                </font>


                <br />
                <br />


                <h1>Il Coordinatore Pastorale (Catechista)</h1>
                <font size="4">
                    E’ responsabile dell'animazione delle attività pastorali del CFP; organizza i momenti di preghiera, le celebrazioni, le giornate di ritiro e la partecipazione dei giovani ai sacramenti della Riconciliazione e dell’Eucaristia; in collaborazione con il direttore, cura la formazione spirituale salesiana ed educativa dei docenti/formatori; assicura la relazione della CEP con la pastorale della Chiesa locale e con altre istituzioni educative del territorio; garantisce la disponibilità per la direzione spirituale, per i colloqui, per gli incontri personali con i ragazzi; promuove una particolare attenzione ai giovani in difficoltà o non inseriti in un contesto parrocchiale; coordina le iniziative di animazione vocazionale; favorisce il dialogo tra fede e cultura nelle diverse aree di insegnamento; segue l’animazione del tempo libero e delle attività complementari, con particolare attenzione all’associazionismo.
                </font>
            </Container><Products
                title=""
                description=""
                cardWidth={4}
                products={pastorale} />
        </Layout>
    )
}
