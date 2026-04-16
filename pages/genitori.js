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
          content="https://per.donboscosandona.it/genitori"
        />
        <meta name="og:type" content="website" />
        <meta name="og:locale" content="it_IT" />
        <meta
          name="og:title"
          content="Proposta Estate Ragazzi di San Donà di Piave"
        />
        <meta
          name="og:description"
          content="Lo spazio dedicato ai genitori."
        />
        <meta name="og:image" content="/images/genitori.png" />
      </Head>
      <LandingHero
        opacity={0.2}
        title="Spazio Genitori"
        imageUrl="/images/genitori.png"
      />
      <Paragraph title="Spazio genitori">
        <p>
          L’intento dell’Oratorio Don Bosco è di essere alleati dei genitori
          nell’educazione dei ragazzi, non sostituti! E visto che i nostri
          cortili non sono un parcheggio per i figli, è bello vedersi ogni tanto
          durante il periodo della P.E.R. per incontrarci, mettersi al servizio,
          scambiarci opinioni, ridere e scherzare…
        </p>
        <br />
        <p>
          Ecco gli appuntamenti della P.E.R. dove i genitori sono
          stra-benvenuti:
        </p>
        <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
          <li>
            Domenica 14 giugno, ore 9: Santa Messa di Apertura; a seguire
            incontro per delle comunicazioni in teatro.
          </li>
          <li>Tutte le serate organizzate!</li>
          <li>l’Oratorio è sempre aperto… venite a rinfrescarvi da noi!</li>
          <li>
            Sabato 11 Luglio, ore 11.00: Santa Messa di Ringraziamento al
            Santuario di Motta di Livenza... e alla fine ANGURIA PER TUTTI!!!
          </li>
        </ul>
        <br />
        <p>
          Per coloro che volessero regalare un po’ del proprio tempo e dare una
          mano a Don Bosco durante la P.E.R., non esitino a contattare don
          Simone.
        </p>
      </Paragraph>
    </Layout>
  );
}
