import Head from 'next/head'
import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero'
import Paragraph from '/components/Paragraph'

export default function Home() {
  return (
    <Layout>
      <Head />

      <LandingHero
        opacity={0.5}
        title="L'ambiente del C.F.P. Don Bosco"
        description="Spazi moderni, laboratori all'avanguardia e un oratorio ricco di storia: il luogo ideale per crescere."
        buttonUrl='https://www.donboscosandona.it/virtual-tour/index.htm'
        buttonText='Virtual Tour'
        imageUrl='/images/struttura/donbosco_struttura.jpg'
      />

      <Paragraph title='Cosa offre ai giovani'>
        <ul>
          <li><b>Aule didattiche multimediali</b> fornite di computer e videoproiettore;</li>
          <li><b>Laboratori di settore</b> completi e dinamici che simulano le diverse realtà di impresa;</li>
          <li><b>Aule di informatica</b> con computer e software costantemente aggiornati.</li>
        </ul>
      </Paragraph>

      <Paragraph
        title='Il nostro ambiente'
        rightImageUrl='/images/struttura/donbosco_esterno.jpg'
      >
        Il nostro Centro di Formazione Professionale si trova all'interno dell'Opera Salesiana "don Bosco" che offre ai nostri giovani un Oratorio ricco di storia, un ambiente dinamico e vivace, accogliente e propositivo, che custodisce con quotidiana fedeltà lo spirito di don Bosco.
        <br /><br />
        L'atrio di ingresso, l'aula magna e gli uffici completano una struttura funzionale che risponde alle esigenze didattiche ed educative dei nostri percorsi formativi.
        <br /><br />
        La sala giochi, il bar, la chiesa, il cinema teatro, il cortile con la storica giostra e i campi da gioco sono a disposizione dei nostri giovani e rendono l'ambiente completo e funzionale per le attività scolastiche ed extrascolastiche.
      </Paragraph>
    </Layout>
  )
}
