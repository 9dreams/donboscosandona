import Layout from "/components/Layout";
import LandingHero from "/components/LandingHero2.js";
import Paragraph from "components/Paragraph";

export default function Pagina() {
  return (
    <Layout>
      <LandingHero
        opacity={0.2}
        title="I nostri pomeriggi"
        description="Divertimento assicurato!"
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
