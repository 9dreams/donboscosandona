import Head from "next/head";
import Layout from "/components/Layout";
import LandingHero from "/components/LandingHero.js";
import Paragraph from "components/Paragraph";

export default function Pagina() {
  return (
    <Layout>
      <Head>
        <title>Proposta Estate Ragazzi di San Donà di Piave</title>
        <meta name="og:url" content="https://per.donboscosandona.it/animatori" />
        <meta name="og:type" content="website" />
        <meta name="og:locale" content="it_IT" />
        <meta name="og:title" content="Proposta Estate Ragazzi di San Donà di Piave" />
        <meta
          name="og:description"
          content="La pagina dedicata agli animatori."
        />
        <meta
          name="og:image"
          content="/images/animatori.png"
        />
      </Head>
      <LandingHero
        opacity={0.2}
        title="Spazio animatori"
        imageUrl="/images/animatori.png"
      />
      <Paragraph title="Spazio animatori">
        Circa 200 ragazzi, dalla prima alla quarta superiore, che dopo le
        fatiche di un intenso anno scolastico, non scappano in spiaggia per
        rilassarsi, ma mettono il meglio delle loro energie a servizio dei più
        piccoli… ma chi ve lo fa fare?!?!?!?
        <br />
        A loro l’Oratorio regala:
        <br />
        -Lunedì 10 / Martedì 11 / Mercoledì 12 giugno, dalle 9 alle 12: tre
        incontri di formazione per acquisire uno stile e approfondire le
        motivazioni.
        <br />
        -Mercoledì 19 e 26 giugno, 3 luglio, 10 Luglio dalle 15 alle 19:
        Pit-Stop Animatori. L’Oratorio rimane a porte chiuse e gli animatori
        fanno il punto della situazione, cercando sempre il meglio per i
        ragazzi!
        <br />
        -Sabato 6 Luglio, pellegrinaggio per tutti al Santuario di Motta di
        Livenza, ore 11.00 la Santa Messa di ringraziamento... e alla fine
        ANGURIA PER TUTTI!!!
        <br />
        -Sabato 13 Luglio: dopo la risistemazione dell’Oratorio, una giornata di
        relax al mare... con grigliatona al tramonto!
        <br />
        -Molte le serate di danza e sfide sportive nel dopo cena...
        <br />
        e se il cammino continuasse anche nel periodo invernale?!?!?! Scopri
        tutte le proposte sul nostro sito www.inoratorio.it
        <br />
      </Paragraph>
    </Layout>
  );
}
