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
                <font face="Verdana">
                    <p>
                        Ciao ragazzi,
                        grazie al contributo del comune,  anche quest’anno dopo la Proposta Estate continueremo l’attività: “Scuola d’estate? Si,grazie!”.
                        Da lunedì 17 luglio a giovedì 3 agosto 2017, per tutti i ragazzi dal secondo anno della scuola primaria al terzo anno della scuola secondaria ci sarà la possibilità di svolgere i compiti delle vacanze con il supporto dei nostri  operatori, ma non solo!
                    </p>


                    <p> Lo studio si alternerà a momenti di svago, gioco e allegria così tutto diventerà più interessante e piacevole. </p>
                        <p>
                            Ci saranno i nostri operatori pronti ad aiutarvi, coadiuvati da alcuni giovani animatori della Proposta Estate e dai salesiani del nostro oratorio.
                            Studieremo, giocheremo, ci divertiremo insieme nel vero spirito salesiano!
                        </p>
                   

                    
                       <p> L’attività si svolgerà dal lunedì al giovedì, secondo gli orari indicati nel calendario ed un giovedì sarà dedicato all’uscita presso un parco acquatico.
                        E’ una proposta che da anni offre l’Oratorio Don Bosco e che viene accolta sempre con grande entusiasmo …  non puoi mancare proprio tu!

                    </p>

                    Orario della giornata tipo:
                    <p>
                        <li>09:00 Accoglienza</li>
                        <li>09:30 1^ ora di compiti</li>
                        <li>10:30 Intervallo con attività ludico-ricreative</li>
                        <li>11:00 2^ ora di compiti</li>
                        <li>12:00 Tutti a casa per il pranzo</li>
                        <li>14:30 Riapertura cortili per tutti</li>
                        <br />
                        <li><b>Medie:</b> </li>
                        <li>alle 15:00 3^ ora di compiti</li> 
                        <li>15:45 Intervallo con attività ludico-ricreative</li>
                        <li>16:15 4^ ora di compiti</li>
                        <br />
                        <li><b>Elementari:</b></li>
                        <li>15:00 3^ ora di compiti</li>
                        <li>16:00 Attività ludico-ricreative con giochi organizzati</li>
                        <li>17:00 Arrivederci a domani per tutti</li>
                    </p>
                </font>

            </Paragraph>
        </Layout>
    )
}
