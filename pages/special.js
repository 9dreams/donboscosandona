import Layout from "/components/Layout";
import LandingHero from "/components/LandingHero2.js";
import Paragraph from "components/Paragraph";

export default function Pagina() {
  return (
    <Layout>
      <LandingHero
        opacity={0.2}
        title="Gruppo Special"
        description="L'attività cucita su misura per i ragazzi di terza media!"
        imageUrl="/images/special/speciallll.webp"
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
  )
}
