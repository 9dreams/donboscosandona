import Head from "next/head";
import Layout from "/components/Layout";
import LandingHero from "/components/LandingHero.js";
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
        imageUrl="/images/preghiera.png"
      />
      <Paragraph>
        <p>
          La Proposta Estate desidera offrire ai ragazzi ed agli animatori un
          tempo di qualità per prendersi cura di tutti gli aspetti della vita,
          compreso quello spirituale, prendendoci cura dell’amicizia con il
          Signore della nostra vita, in modo che cresca l’amicizia tra noi.
        </p>
        <br />
        <p>
          Tutti i giorni dalle 9.15 alle 9.45 appuntamento in chiesa o in teatro
          per iniziare la nostra giornata. Tra canti, preghiera e la nostra
          bellissima storia lanciamo l’impegno della giornata.
          <br />
          Tutti i giorni, per chi vuole, alle 12:15 la preghiera dell’angelus in
          cappellina.
        </p>
        <br />
        <p>
          <strong>
            DOMENICA 14 GIUGNO - FESTA DI APERTURA CON TUTTE LE FAMIGLIE
          </strong>
          <br />
          Ore 9.00 – S. Messa; a seguire, incontro in teatro coi genitori per
          alcune importanti comunicazioni. Nel frattempo, i ragazzi si
          ritroveranno con i loro animatori per giocare e fare festa coi
          gonfiabili.
          <br />
          In questa giornata di festa ci sarà anche la gara delle torte delle
          squadre! (Potrete portare le torte da casa, scrivendo gli ingredienti,
          e saranno giudicate in una gara che darà punti alle squadre della
          P.E.R.)
          <br />
          Sempre domenica mattina verranno distribuite le magliette della P.E.R.
          26.
        </p>
        <br />
        <p>
          <strong>SABATO 11 LUGLIO - PELLEGRINAGGIO</strong>
          <br />
          Il pellegrinaggio quest'anno chiuderà la P.E.R. e permetterà di
          ringraziare il Signore di quanto ci avrà donato di vivere durante il
          mese di P.E.R. 26. Come al solito andremo a Motta di Livenza in bici
          per concludere nelle mani di Maria.
        </p>
        <br />
        <p>
          IL PROGRAMMA dettagliato verrà dato durante la PER.
          <br />
          Ciò che non cambia mai invece è… l’ANGURIA PER TUTTI!!!
        </p>
      </Paragraph>
    </Layout>
  );
}
