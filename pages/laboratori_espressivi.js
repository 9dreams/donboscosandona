import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero2.js'
import Paragraph from 'components/Paragraph'
import { color, Container } from '@mui/system'
import Products from 'components/Products'

let prodotti = [
    {
      title: "Elettrico",
      category: "QUALIFICA DI OPERATORE ELETTRICO",
      description: "Installa ed effettua la manutenzione di impianti civili e industriali, sia con tecnologie tradizionali che automatizzate. Realizza la programmazione dei componenti domotici e dei controllori programmabili industriali.",
      immagineUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      url: "/elettrico"
    },
    {
      title: "Energia",
      category: "QUALIFICA DI OPERATORE DI IMPIANTI TERMO-IDRAULICI",
      description: "Interviene nell'installazione, collaudo e manutenzione di impianti termici, idraulici, di condizionamento e fotovoltaici, con una particolare attenzione al risparmio energetico, anche grazie alla building automation.",
      immagineUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      url: "/energia"
    },
    {
      title: "Informatico",
      category: "DIPLOMA DI TECNICO INFORMATICO",
      description: "Installa e configura hardware e software, esegue la manutenzione di sistemi, reti e terminali utente, fornisce assistenza tecnica, effettua l'elaborazione e la manutenzione di dati su archivi digitali. Con il quarto anno in Sistema Duale diventa tecnico sviluppatore di Soluzioni Software.",
      immagineUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      url: "/informatico"
    },
  ]

export default function Pagina() {
  return (
    <Layout>
      <LandingHero
        opacity={0.2}
        title="Laboratori espressivi"

        description ="I laboratori espressivi sono spazi in cui le persone possono esplorare e comunicare le proprie emozioni e pensieri in modo creativo e spontaneo, attraverso l'utilizzo di diversi media espressivi, come la pittura, la musica, la danza, la scrittura e la fotografia."
        imageUrl="https://images.ctfassets.net/22n7d68fswlw/1HfuJqJtRZUtdbXoyuLUzr/ae1df87ceddcee109109c2c6513c731d/Pinocchio_01.jpg"
      />
      <Paragraph
      >
        <container >
        <center><h1>Attività espressive</h1></center>
        </container>

    

      </Paragraph>

      <Products
        title="Some of Our Awesome Products"
        description="This is the paragraph......."
        products={ products }
        cardWidth={ 4 }
        />
     
      

      
    </Layout>
  )
}
