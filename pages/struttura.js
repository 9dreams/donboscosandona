import Head from 'next/head'
import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero'
import Paragraph from '/components/Paragraph'
import { Section, SectionTitle, FeatureCard } from '/components/ui'

export default function Home() {
  return (
    <Layout>
      <Head />

      <LandingHero
        eyebrow='La nostra casa'
        title="L'ambiente del C.F.P. Don Bosco"
        description="Spazi moderni, laboratori all'avanguardia e un oratorio ricco di storia: il luogo ideale per crescere."
        buttonUrl='https://www.donboscosandona.it/virtual-tour/index.htm'
        buttonText='Virtual Tour'
        imageUrl='/images/struttura/donbosco_struttura.jpg'
      />

      <Section width='lg' className='mt-16'>
        <SectionTitle icon='ph:buildings'>Cosa offre ai giovani</SectionTitle>
        <div className='grid sm:grid-cols-3 gap-5'>
          <FeatureCard icon='ph:projector-screen' title='Aule didattiche multimediali'>
            fornite di computer e videoproiettore;
          </FeatureCard>
          <FeatureCard icon='ph:wrench' title='Laboratori di settore'>
            completi e dinamici che simulano le diverse realtà di impresa;
          </FeatureCard>
          <FeatureCard icon='ph:desktop-tower' title='Aule di informatica'>
            con computer e software costantemente aggiornati.
          </FeatureCard>
        </div>
      </Section>

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
