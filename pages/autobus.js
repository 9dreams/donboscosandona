import Head from "next/head";
import Layout from "/components/Layout";
import LandingHero from "/components/LandingHero2.js";
import Paragraph from "components/Paragraph";
import Grid from "@mui/material/Grid";

export default function Pagina() {
  return (
    <Layout>
      <Head>
        <title>Proposta Estate Ragazzi di San Donà di Piave</title>
        <meta
          name="og:url"
          content="https://per.donboscosandona.it/autobus"
        />
        <meta name="og:type" content="website" />
        <meta name="og:locale" content="it_IT" />
        <meta
          name="og:title"
          content="Proposta Estate Ragazzi di San Donà di Piave"
        />
        <meta
          name="og:description"
          content="L'orario degli autobus dalle frazioni."
        />
        <meta name="og:image" content="/images/autobus.png" />
      </Head>
      <LandingHero
        opacity={0.0}
        title="Trasporto autobus"
        description="L'orario degli autobus dalle frazioni."
        imageUrl="/images/autobus.png"
      />

      <Paragraph title="Pagina in allestimento" />
    </Layout>
  );
}
