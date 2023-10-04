import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import Head from 'next/head'
import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero'
import Products from '/components/Products'
import Paragraph from '/components/Paragraph'

export default function Home() {
    return (
        <Layout>
            <Head />
            <LandingHero
                opacity={0.5}
                siteName="CFP DON BOSCO"
                title="EVENTI"
                description="Vieni a conoscere il bene che siamo e facciamo"
                buttonText="Guarda il video"
                imageUrl="https://brescia.unicusano.it/wp-content/uploads/2021/10/consigli-per-iniziare-una-carriera-come-organizzatore-di-eventi-min.jpg"
            />
            
         
                <Paragraph
                backgroundColor="#E7C27D"

                   title="Open School" 

                >

                   <br/><p>L’Open School è un’iniziativa annuale che il nostro Centro propone agli studenti delle scuole medie che
                   desiderano conoscere la nostra struttura, i nostri corsi e le nostre proposte educative e formative,attraverso visite guidate nei laboratori.</p> 
                  
                   <p>Il Coordinatore dell’Orientamento e i formatori accolgono nell’atrio del Centro le famiglie che
                   desiderano conoscere la nostra realtà formativa e il nostro Progetto Educativo. I formatori presenti 
                   accompagnano genitori e ragazzi a gruppi nella visita ai laboratori; in questi ambienti alcuni 
                   giovani del nostro Centro presentano le esercitazioni da loro preparate nei diversi Settori.</p>

                   <p>Al termine della visita guidata, la collaboratrice di segreteria è a disposizione per la distribuzione di materiale informativo, dei moduli di preiscrizione e per ogni richiesta di informazioni.</p> 
                   
                   <p>È un’ottima occasione per vedere da vicino e “toccare con mano” la realtà del nostro Centro…vieni a trovarci!</p>


                </Paragraph>

                <Paragraph

                   title="Scuol@zienda" 

                >

                   <p>L’iniziativa, che ha preso corpo nel 2008, ha la funzione di <b>favorire un incontro tra il mondo della scuola – impegnato nella formazione dei tecnici che metteranno le loro conoscenze a disposizione del mondo del lavoro – e il settore produttivo</b>, costituito dalle aziende che operano nel nostro territorio.</p> 
                  
                   <p>Il nostro Centro vuole dare la possibilità agli imprenditori della zona di presentare soluzioni tecnologiche nei settori meccanico, elettromeccanico, elettronico/informatico e dell’autoriparazione.</p>

                   <p>Durante l’evento si svolgono seminari ed incontri, tenuti dagli stessi imprenditori, su iniziative, novità e innovazioni nei settori del nostro Centro. Inoltre vengono predisposte delle aree espositive con la presentazione di alcuni prodotti innovativi delle aziende che partecipano all’evento.</p> 
               
                </Paragraph>

                <Paragraph

                   title="Convegno exallievi" 

                >

                <p>L’evento si svolge una volta all’anno, solitamente la seconda domenica di gennaio.</p>

                <p>Tutti gli Exallievi del nostro Centro sono invitati per un mezza giornata insieme, per rivivere il <b>clima di familiarità</b> e di <b>spirito salesiano</b> respirato negli anni in cui frequentavano il C.F.P. “don Bosco”. Vuole essere un’<b>occasione di incontro tra amici, di riflessione e di confronto.</b></p>

                <p>Inizialmente è previsto un incontro-confronto su un tema scelto per l’occasione. In seguito la S. Messa e, per concludere, la foto ricordo e il pranzo in allegria salesiana. Viene organizzata, inoltre, una lotteria il cui ricavato è destinato ad una borsa di studio per alcuni exallievi più meritevoli dell’Anno Formativo appena concluso.</p>
                
                </Paragraph>

                <Paragraph

                   title="Sfoglia il libretto dei 60 anni del C.F.P. “don Bosco”" 

                >

                <p>Nelle scorse edizioni:</p>

                <p>2018_Convegno <b>“La cultura del buon lavoro” e inaugurazione delle nuove aule del Centro</b>.</p>

                <p>2017_Intervento sul tema <b>“Il sistema duale: una forma nuova di formazione professionale_risorse e convenienza”</b>, con interventi e testimonianza di formatori ed imprenditori che collaborano alla sperimentazione .</p>

                <p>2016_Riflessione sul tema <b>“Il Sistema Preventivo in contesto non cristiano essere testimoni oggi”</b>.</p>

                <p>2015_Esperienze a confronto sul tema <b>“Insegnamenti tratti da don Bosco”</b>.</p>

                <p>2013_<b>Inaugurazione nuova aula FIAT </b>alla presenza del Rettor Maggiore dei salesiani don Pascual Chavez Villanueva.</p>

                <p>2012_<b>“Don Bosco: Padre, Maestro ed Amico”</b>.</p>

                <p>2011_<b>“Il nostro CFP: una proposta valida anche oggi? Nuovi scenari e nuovi giovani”</b>.</p>
                
                <br/>
                </Paragraph>
            













            
        </Layout>
    )
}