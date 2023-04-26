import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero2.js'
import Paragraph from 'components/Paragraph'
import Products from '/components/Products.js'

let products = [
  {
    title: "SCENOGRAFIA",
    category: "1ª ora medie / 2ª ora elementari",
    description: "Prepariamo gli sfondi per gli spettacoli della PER",
    immagineUrl: "http://www.inoratorio.it/img/column/f9de1e15784a9947c6263f665621c07723d13098.jpg?1651928152",
  },
  {
    title: "DECOUPAGES",
    category: "1ª ora medie / 2ª ora elementari",
    description: "Decora ritagliando",
    immagineUrl: "http://www.inoratorio.it/img/column/7cc3f025a60012d08c8c7d422ccba4196203469d.jpg?1651927632",
  },
  {
    title: "FILI E PERLINE",
    category: "1ª ora medie / 2ª ora elementari",
    description: "L’arte dell’intreccio di corde e stoffe per realizzare magnifici braccialetti … ma non solo.",
    immagineUrl: "http://www.inoratorio.it/img/column/60765859b53e87fa78efa5d7393f75cac00efad7.jpg?1556285282",
  },
  {
    title: "STAMPA SU STOFFA",
    category: "1ª ora medie / 2ª ora elementari",
    description: "Riproduci su stoffa la tua creatività grafica",
    immagineUrl: "http://www.inoratorio.it/img/column/6ac5f890119d331858c0be1105f0c631c2caa1c4.jpg?1651928315",
  },
  {
    title: "TUTTO CARTA",
    category: "1ª ora medie / 2ª ora elementari",
    description: "La carta in 3 dimensioni",
    immagineUrl: "http://www.inoratorio.it/img/column/d2a3fef72f5ed749fc5322523ba926b5131977ab.jpg?1556285208",
  },
  {
    title: "AQUILONI",
    category: "1ª ora medie / 2ª ora elementari",
    description: "L’attività che vi lascerà con il naso all’insù",
    immagineUrl: "http://www.inoratorio.it/img/column/a715d4b0d413487f07503af4edd38da3469e36a7.jpg?1556288088",
  },
  {
    title: "PIROGRAFIA",
    category: "1ª ora medie / 2ª ora elementari",
    description: "Scriviamo con il fuoco sul legno",
    immagineUrl: "http://www.inoratorio.it/img/column/520dfa6fc141bede5f020d6e3c3a0e2473b0d95b.jpg?1651925402",
  },
  {
    title: "ECO ART",
    category: "1ª ora medie / 2ª ora elementari",
    description: "La creatività sostenibile",
    immagineUrl: "http://www.inoratorio.it/img/column/bce2cba4a0f3ef33ba91f2e181a631cdc7bfea28.jpg?1651927968",
  },
  {
    title: "STRING ART",
    category: "1ª ora elementari / 2ª ora elementari",
    description: "Cosa si può fare con una tavoletta di legno, dei chiodi e fili colorati? magnifiche opere d’arte",
    immagineUrl: "http://www.inoratorio.it/img/column/ef7a75464c2272e09d4ca8da862ac7b45fcc7324.jpg?1556285329",
  },
  {
    title: "INFORMATICA AVANZATA",
    category: "1ª ora medie / 2ª ora medie",
    description: "",
    immagineUrl: "http://www.inoratorio.it/img/column/62f9887df45a235c36257d49f99765386b736a3d.jpg?1651927498",
  },
  {
    title: "MULTIMEDIA",
    category: "1ª ora medie / 2ª ora medie",
    description: "Elaborazione di foto e video in digitale",
    immagineUrl: "http://www.inoratorio.it/img/column/6f355212673fe620dc3c67466753c5f22f8b3785.jpg?1651927456",
  },
  {
    title: "GIOCHI DA TAVOLO",
    category: "1ª ora medie / 2ª ora elementari",
    description: "Divertiti con noi con i giochi da tavolo più belli del mondo",
    immagineUrl: "http://www.inoratorio.it/img/column/ea2862105d595faaa0bb78671367632d5810a58d.jpg?1651925594",
  },
  {
    title: "IMPIANTI ELETTRICI",
    category: "1ª ora medie / 2ª ora medie",
    description: "",
    immagineUrl: "https://www.gionaengineering.com/wp-content/uploads/2013/02/1-impianti-elettrici_1260_645.jpg",
  },
  {
    title: "POLLICE VERDE",
    category: "1ª ora medie / 2ª ora elementari",
    description: "Se il giardinaggio è la tua passione...",
    immagineUrl: "https://novalac.it/wp-content/uploads/2014/08/Piantiamo%20insieme-e1480428044251.jpg",
  },
  {
    title: "TUTTO BICI",
    category: "1ª ora medie / 2ª ora elementari",
    description: "Un team di ciclo-meccanici pronti ad aggiustare qualsiasi guasto",
    immagineUrl: "https://mountainbike.bicilive.it/files/2021/03/mtb-tutorial-manutenzione-2021-gonfiaggio-pneumatici.jpg",
  },
]

export default function Pagina() {
  return (
    <Layout>
      <LandingHero
        opacity={0.2}
        title="Laboratori Manuali"
        imageUrl="/images/manuali.png"
      />
      <Products
        products={products}
        cardWidth={3}
      />
    </Layout>
  )
}
