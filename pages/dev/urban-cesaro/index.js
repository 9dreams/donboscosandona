import Head from 'next/head'
import Layout from '/components/Layout'
import Carousel from '/components/Carousel'
import Settori from '/components/Settori'
import Articoli from '/components/Articoli'
import Esplora from '/components/Esplora'
import Eventi from '/components/Eventi'
import Team from 'dev/urban-cesaro/Team.js'

import { getDatiArticoli } from '/lib/articoli'


let members = [
  {
     name: "Alec Thompson",
     role: "CEO / CO-FOUNDER",
     description: "And I love you like...",
     imageUrl: "https...",
     linkedinUrl: "https...",
     facebookUrl: "https...",
     instagramUrl: "https...",
  }
]

let team = [
  {
    title: "Il nostor team",
    description: "Il nostro team di professionisti!"
  }
]


export default function Home({ datiArticoli }) {
  return (
    <Layout>
      <Head>
      </Head>
      <Team
        titolo="Il nostor team"
        descrizione="Il nostro team di professionisti!"
        members={ members }
        team={ team }
        cardWidth={ 3 }
      />
    </Layout>
  )
}

export async function getStaticProps() {
  const datiArticoli = getDatiArticoli();
  return {
    props: {
      datiArticoli,
    },
  }
}