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
          content="https://per.donboscosandona.it/special"
        />
        <meta name="og:type" content="website" />
        <meta name="og:locale" content="it_IT" />
        <meta
          name="og:title"
          content="Proposta Estate Ragazzi di San Donà di Piave"
        />
        <meta
          name="og:description"
          content="Gruppo Special: l'attività cucita su misura per i ragazzi di terza media!"
        />
        <meta name="og:image" content="/images/special.png" />
      </Head>
      <LandingHero
        opacity={0.0}
        title="Gruppo Special"
        description="L'attività cucita su misura per i ragazzi di terza media!"
        imageUrl="/images/special.png"
      />
      <Paragraph>
        <p>
          Per ragazzi e ragazze troppo grandi per fare le solite attività e
          laboratori…. ma ancora troppo piccoli per mettersi al servizio degli
          altri come animatori…
        </p>

        <p>
          Attività SPECIALI che vengono attivate man mano che i ragazzi finisco
          gli esami scritti e gli orali. Divertenti sì, ma che ti lanciano verso
          uno stile di servizio e gratuità, in vista del prossimo anno...
        </p>

        <p>
          Nell’iscrizione dovranno SCEGLIERE UN LABORATORIO PER LA PRIMA ORA, E
          SEGNARSI SUL GRUPPO SPECIAL ALLA SECONDA ORA.
        </p>

        <p>
          Attenzione: la partecipazione al Gruppo Special potrebbe comportare
          spese aggiuntive.
        </p>
      </Paragraph>
    </Layout>
  );
}
