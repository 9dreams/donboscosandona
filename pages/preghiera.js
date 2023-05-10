import Head from "next/head";
import Layout from "/components/Layout";
import LandingHero from "/components/LandingHero2.js";
import Paragraph from "components/Paragraph";

export default function Pagina() {
  return (
    <Layout>
      <Head>
        <title>Proposta Estate Ragazzi di San Donà di Piave</title>
        <meta
          name="og:url"
          content="https://per.donboscosandona.it/preghiera"
        />
        <meta name="og:type" content="website" />
        <meta name="og:locale" content="it_IT" />
        <meta
          name="og:title"
          content="Proposta Estate Ragazzi di San Donà di Piave"
        />
        <meta
          name="og:description"
          content="Momenti di preghiera e riflessione: per coltivare ogni giorno il nostro rapporto con Dio."
        />
        <meta name="og:image" content="/images/preghiera.png" />
      </Head>
      <LandingHero
        opacity={0.2}
        title="Momenti di preghiera e riflessione"
        description="Per coltivare ogni giorno il nostro rapporto con Dio."
        imageUrl="/images/preghiera.png"
      />
      <Paragraph>
        <p>
          La Proposta Estate desidera offrire a tutti i ragazzi ed animatori un
          tempo di qualità per prendersi cura di tutti gli aspetti della vita,
          compreso quello spirituale, prendendoci cura dell’amicizia tra di noi
          e con il Signore della nostra vita.
        </p>
        <p>
          Tutti i giorni dalle 9.30 alle 10.00 appuntamento in chiesa o in
          teatro per iniziare la nostra giornata. Tra canti, preghiera e la
          nostra bellissima storia lanciamo l’impegno della giornata
        </p>
        <p>
          Tutti i giorni, per chi vuole, alle 12:15 la preghiera dell’ora media
          in cappellina
        </p>
        <p>
          DOMENICA 18 GIUGNO - FESTA DI APERTURA CON TUTTE LE FAMIGLIE Ore 9.00
          – S. Messa; a seguire, incontro in teatro coi genitori per alcune
          importanti comunicazioni. Nel frattempo, i ragazzi si ritroveranno con
          i loro animatori!
        </p>
        <p>
          Venerdì 7 e Sabato 8 LUGLIO - PELLEGRINAGGIO
          <br />
          Il pellegrinaggio è un’esperienza fondamentale nel cammino della
          P.E.R.: dopo tanti doni ricevuti, è il momento di ringraziare, prima
          di lasciarci...
          <br />
          IL PROGRAMMA dettagliato verrà dato durante la P.E.R.
        </p>
        <p>
          Un gruppo partirà a piedi nel pomeriggio di venerdì 7, passerà la
          notte in sacco a pelo e materassini, ospitati presso la parrocchia di
          Grassaga. Un secondo gruppo
          partirà in bicicletta sabato mattina e raggiungerà il resto dei
          pellegrini per l’ultima tappa e il pranzo al sacco. Tutti gli altri
          (pigri, fratelli, genitori, nonni, zii e chi vuole…) sono attesi per
          la S. Messa che sarà celebrata alle ore 11.00 al Santuario di Motta. …
          E POI ANGURIA PER TUTTI!!!
        </p>
      </Paragraph>
    </Layout>
  );
}
