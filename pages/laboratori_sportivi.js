import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero2.js'
import Paragraph from 'components/Paragraph'
import Image from 'next/image'
import Products from '/components/Products.js'


let products = [
  {
    title: "CALCIO",
    category: "1ª ora elementari / 2ª ora medie",
    description: "Sport di squadra giocato con un pallone su un campo di gioco rettangolare; l'obiettivo è di segnare più punti (detti gol o reti) facendo passare il pallone fra i pali della porta avversaria.",
    immagineUrl: "https://i.ibb.co/WWD039t/calcio.jpg",
    url: "https..."
  },

  {
    title: "BASKET",
    category: "1ª ora elementari / 2ª ora medie",
    description: "Sport di squadra in cui due formazioni di cinque giocatori ciascuna si affrontano per segnare con un pallone nel canestro avversario, secondo una serie di regole prefissate e con un punteggio che varia dalla posizione di tiro.",
    immagineUrl: "https://i.ibb.co/TPg50zh/basket.jpg",
    url: "https..."
  },

  {
    title: "PALLAVOLO",
    category: "1ª ora elementari / 2ª ora medie",
    description: "Sport di squadra il cui scopo è realizzare punti facendo sì che la palla tocchi terra nel campo avversario, separato da una rete alta più di 200 cm.",
    immagineUrl: "https://i.ibb.co/6t37yg5/pallavolo.jpg",
    url: "https..."
  },

  {
    title: "PING PONG",
    category: "1ª ora elementari / 2ª ora medie",
    description: "Il tennis tavolo, più popolarmente conosciuto come ping pong e inventato nel 1884, è uno degli sport di maggior diffusione nel mondo ed è una specialità olimpica.",
    immagineUrl: "https://i.ibb.co/vQkNwpM/ping-pong.jpg",
    url: "https..."
  },

  {
    title: " FRISBEE",
    category: "1ª ora elementari / 2ª ora medie",
    description: "Uno sport atleticamente completo dove uomini e donne giocano assieme e dove l’arbitro e’ il Fair Play di ogni giocatore!",
    immagineUrl: "https://i.ibb.co/G7gc03b/ultimte-frisbee.jpg",
    url: "https..."
  },

  {
    title: "RUGBY",
    category: "1ª ora elementari / 2ª ora medie",
    description: "Sport di squadra in cui il campo è diviso in due metà, con due zone di meta nei dieci metri finali di entrambe. Portando la palla nella zona di meta della squadra avversaria realizzi cinque punti e ottieni il diritto di tirare un calcio di trasformazione che ne vale due...",
    immagineUrl: "https://i.ibb.co/fYftd0N/rugby.jpg",
    url: "https..."
  },

  {
    title: "TAEKWONDO",
    category: "1ª ora elementari / 2ª ora medie",
    description: "Quando anche tirare calci e pugni diventa un'arte! In collaborazione con TKD Città del Piave",
    immagineUrl: "https://i.ibb.co/YtXXmgV/taekwondo.jpg",
    url: "https..."
  },


  {
    title: "PALLAMANO",
    category: "1ª ora elementari / 2ª ora medie",
    description: "In collaborazione con ASD PALLAMANO MUSILE",
    immagineUrl: "https://i.ibb.co/FXdpX5Q/pallamano.jpg",
    url: "https..."
  },
]

export default function Pagina() {
  return (
    <Layout>
      <LandingHero
        opacity={0.2}
        title="Laboratori Sportivi"
        description="In questa pagina troverete le informazioni relative ai laboratori sportivi."
        imageUrl="https://i.ibb.co/3pyCN0t/copertina.jpg"
      />
      <br />



      <Products
        title="I nostri laboratori sportivi"
        products={products}
        cardWidth={4}
      />




      <br /><br />
    </Layout>
  )
}
