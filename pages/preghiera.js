import Layout from "/components/Layout";
import LandingHero from "/components/LandingHero2.js";
import Paragraph from "components/Paragraph";

export default function Pagina() {
  return (
    <Layout>
      <LandingHero
        opacity={0.2}
        title="Momenti di preghiera e riflessione"
        description=""
        imageUrl=""
      />
      <Paragraph>
    <p>La Proposta Estate desidera offrire a tutti i ragazzi ed animatori un tempo di qualità per prendersi cura di tutti gli aspetti della vita, compreso quello spirituale, prendendoci cura dell’amicizia tra di noi e con il Signore della nostra vita.</p>
    <p>Tutti i giorni dalle 9.30 alle 10.00 appuntamento in chiesa o in teatro per iniziare la nostra giornata. Tra canti, preghiera e la nostra bellissima storia lanciamo l’impegno della giornata</p>
    <p>Tutti i giorni, per chi vuole, alle 12:15 la preghiera dell’ora media in cappellina</p>
    <p>DOMENICA 18 GIUGNO - FESTA DI APERTURA CON TUTTE LE FAMIGLIE
Ore 9.00 – S. Messa; a seguire, incontro in teatro coi genitori per alcune importanti comunicazioni. Nel frattempo, i ragazzi si ritroveranno con i loro animatori!
</p>
<p>Venerdì 8 e Sabato 9 LUGLIO - PELLEGRINAGGIO
 
 <br />Il pellegrinaggio è un’esperienza fondamentale nel cammino della P.E.R.: dopo tanti doni ricevuti, è il momento di ringraziare, prima di lasciarci...
  
 <br />IL PROGRAMMA dettagliato verrà dato durante la P.E.R.
 </p>
 <p>Un gruppo partirà a piedi nel pomeriggio di venerdì 8, passerà la notte in sacco a pelo e materassini, ospitati presso la parrocchia di Grassaga.
 
 Un secondo gruppo partirà sabato mattina in pullman dall’oratorio per arrivare a Campo di Pietra, unendosi al primo gruppo e percorreranno gli ultimi 10 km a piedi assieme.
  
 Un terzo gruppo partirà in bicicletta sabato mattina e raggiungeranno il resto dei pellegrini per l’ultima tappa e il pranzo al sacco.
  
 Tutti  gli altri (pigri, fratelli, genitori, nonni, zii e chi vuole…) sono attesi per la S. Messa che sarà celebrata alle ore 15.30 al Santuario di Motta.
 … E POI ANGURIA PER TUTTI!!!</p>
      </Paragraph>
    </Layout>
  )
}
