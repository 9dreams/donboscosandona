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
        <meta
          name="og:title"
          content="Proposta Estate Ragazzi di San Donà di Piave"
        />
        <meta
          name="og:description"
          content="La pagina dedicata agli animatori."
        />
        <meta name="og:image" content="/images/animatori.png" />
      </Head>
      <LandingHero
        opacity={0.2}
        title="Spazio animatori"
        imageUrl="/images/animatori.png"
      />
      <Paragraph title="Spazio animatori">
        <p>
          Circa 200 giovani, dalla prima alla quarta superiore, che dopo gli
          impegni di un intenso anno scolastico, non pensano a riposare o a sè
          stessi, ma mettono il meglio delle loro energie a servizio dei più
          piccoli…
        </p>
        <br />
        <p>A loro l’Oratorio regala:</p>
        <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
          <li>
            dal 08 al 10 giugno, dalle 9 alle 12: incontri di formazione per
            acquisire uno stile e approfondire le motivazioni.
          </li>
          <li>
            Mercoledì 10, 17 e 24 giugno, 1 luglio, dalle 15 alle 22.30: Pit-Stop
            Animatori. L’Oratorio rimane a porte chiuse e gli animatori fanno il
            punto della situazione, cercando sempre il meglio per i ragazzi!
          </li>
          <li>
            Venerdì 10 Luglio: dopo la risistemazione dell’Oratorio, una
            giornata di relax… con cena al tramonto!
          </li>
          <li>
            Sabato 11 Luglio, pellegrinaggio per tutti al Santuario di Motta di
            Livenza, ore 11.00 la Santa Messa di ringraziamento... e alla fine
            ANGURIA PER TUTTI!!!
          </li>
          <li>Molte le serate di danza e sfide sportive nel dopo cena...</li>
        </ul>
        <br />
        <p>
          … e se il cammino continuasse anche nel periodo invernale?!?!?! Scopri
          tutte le proposte sul nostro sito{" "}
          <a
            href="https://www.inoratorio.it"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.inoratorio.it
          </a>
        </p>
      </Paragraph>
    </Layout>
  );
}
