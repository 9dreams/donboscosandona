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
          content="https://per.donboscosandona.it/pomeriggi"
        />
        <meta name="og:type" content="website" />
        <meta name="og:locale" content="it_IT" />
        <meta
          name="og:title"
          content="Proposta Estate Ragazzi di San Donà di Piave"
        />
        <meta
          name="og:description"
          content="I nostri pomeriggi: divertimento assicurato!"
        />
        <meta name="og:image" content="/images/pomeriggi.png" />
      </Head>
      <LandingHero
        opacity={0.3}
        title="I nostri pomeriggi"
        imageUrl="/images/pomeriggi.png"
      />
      <Paragraph>
        <p>
          Ore 15.00: momento di tranquillità (si fa per dire) all’ombra, dove
          gli animatori si “inventeranno” sempre qualcosa di simpatico e
          coinvolgente!!!
        </p>
        <p>
          Ore 15.30: ci aspettano i super giochi a squadre che andranno ad
          assegnare parecchi punti per la classifica generale!
        </p>
        <p>
          Quando saremo in oratorio ci sfideremo a:
          <li>
            <strong>Basket</strong>
          </li>
          <li>
            <strong>Volley</strong>
          </li>
          <li>
            <strong>Ping Pong</strong>
          </li>
          <li>
            <strong>Calcio</strong>
          </li>
          <li>
            <strong>Palla guerra</strong>
          </li>
          <li>
            <strong>Racchettoni</strong>
          </li>
          <br></br>O a sport più tranquilli come:
          <li>Calcio balilla</li>
          <li>Scacchi</li>
          <li>Forza 4</li>
          Oppure a grandi giochi al parco per ravvivare un po' la città!!!!
        </p>
      </Paragraph>
    </Layout>
  );
}
