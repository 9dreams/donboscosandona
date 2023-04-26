import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero2.js'
import Paragraph from 'components/Paragraph'
import Products from '/components/Products.js'

let settimana1 = [
  {
    title: "15 GIUGNO",
    description: "Ini",
    immagineUrl: "http://www.inoratorio.it/img/column/f9de1e15784a9947c6263f665621c07723d13098.jpg?1651928152",
  },
]

export default function Pagina() {
  return (
    <Layout>
      <LandingHero
        opacity={0.2}
        title="Calendario"
        imageUrl="/images/calendario.png"
      />
      <Products
        products={settimana1}
        cardWidth={4}
      />
    </Layout>
  )
}
