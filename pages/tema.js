import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero2.js'
import Paragraph from 'components/Paragraph'

export default function Pagina() {
  return (
    <Layout>
      <LandingHero
        opacity={0.2}
        title="Tema"
        description="In questa pagina parleremo di un esempio."
        imageUrl="images/temi/persone.png"
      />
      <Paragraph
        title="Titolo"
        subtitle="Sottotitolo, ma solo se serve"
      >
        Qui va messo il testo del paragrafo. Qui va messo il testo del paragrafo. Qui va messo il testo del paragrafo. Qui va messo il testo del paragrafo. Qui va messo il testo del paragrafo. Qui va messo il testo del paragrafo. Qui va messo il testo del paragrafo. Qui va messo il testo del paragrafo. Qui va messo il testo del paragrafo. 
      </Paragraph>
    </Layout>
  )
}
