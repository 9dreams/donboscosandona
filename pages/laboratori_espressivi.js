import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero2.js'
import Paragraph from 'components/Paragraph'
import Products from '/components/Products.js'

let products = [
  {
    title: "CLOWNERIE",
    category: "1ª ora elementari / 2ª ora medie",
    description: "Diventa anche tu un bravissimo giocoliere e fai divertire i tuoi amici!",
    immagineUrl: "http://www.inoratorio.it/img/column/4ec55682734019711be21ae9943657b24ad593a9.jpg?1651925492",
  },
  {
    title: "CANTO",
    category: "1ª ora elementari / 2ª ora medie",
    description: "Passi ore nella doccia cantando a squarciagola davanti a un pubblico immaginario? Partecipa a questa attività, e il pubblico lo avrai davvero!",
    immagineUrl: "http://www.inoratorio.it/img/column/14219bd7feb8ad24996a2994f8dcc3b921105f73.jpg?1651927817",
  },
  {
    title: "REPORTER PER CASO",
    category: "1ª ora medie / 2ª ora elementari",
    description: "Creiamo il giornalino della PER con tutte le novità, gli scoop e tante interviste",
    immagineUrl: "http://www.inoratorio.it/img/column/5a93287e71b29877a5281cf467be3f8d68fbc69d.jpg?1556288964",
  },
  {
    title: "DRAW UP",
    category: "1ª ora medie / 2ª ora elementari",
    description: "Fai uscire l’artista che c’è in te! Realizza vere e proprie opere d’arte utilizzando le più diverse tecniche artistiche",
    immagineUrl: "http://www.inoratorio.it/img/column/7c4b29134d827583e6eabbed10d4e3bfed464091.jpg?1651924985",
  },
]

let serata = [
  {
    title: "BALLI DI GRUPPO",
    category: "1ª ora elementari / 2ª ora medie",
    description: "Grandi novità! Non solo Zumba... quest'anno si gira il mondo con balli Country, Sudamericani e Danze Etniche...",
    immagineUrl: "http://www.inoratorio.it/img/column/5105eccf797e52f29899439822d77535f5087673.jpg?1556291971",
  },
  {
    title: "BALLO HIP-HOP",
    category: "1ª ora elementari / 2ª ora medie",
    description: "",
    immagineUrl: "https://previews.123rf.com/images/prometeus/prometeus1501/prometeus150100052/35065128-modern-dancers-dancing-in-the-garage-urban-lifestyle-hip-hop-generation.jpg",
  },
  {
    title: "TEATRO SKETCH",
    category: "1ª ora medie / 2ª ora elementari",
    description: "Assieme agli animatori prepariamo gli sketch comici che verranno messi in scena durante le accoglienze del pomeriggio. I più belli saranno presentati alla serata finale!!!",
    immagineUrl: "http://www.inoratorio.it/img/column/41e06006898dccf8f0a7d4a8355a9ff3b7cf8da7.jpg?1651925781",
  },
  {
    title: "CHITARRA",
    category: "1ª ora elementari / 2ª ora medie",
    description: "Perfezionare la tecnica o scoprire la passione per lo strumento musicale più diffuso al mondo! (se hai la chitarra è meglio... anche se alcune le possiamo fornire noi!)",
    immagineUrl: "http://www.inoratorio.it/img/column/10c0eb81bfda3bf61745b765ea88102a5c410bdf.jpg?1556289237",
  },
]

export default function Pagina() {
  return (
    <Layout>
      <LandingHero
        opacity={0.2}
        title="Laboratori Espressivi"
        description=""
        imageUrl="/images/espressivi.png"
      />
      <Products
        title="Laboratori espressivi / musicali"
        products={products}
        cardWidth={3}
      />
      <Products
        title="Laboratori per la serata finale"
        subtitle="Nota: non è previsto il cambio attività a metà PER."
        products={serata}
        cardWidth={3}
      />
    </Layout>
  )
}
