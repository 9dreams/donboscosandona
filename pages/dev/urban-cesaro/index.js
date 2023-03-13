import Head from 'next/head'
import Layout from '/components/Layout'
import Carousel from '/components/Carousel'
import Settori from '/components/Settori'
import Articoli from '/components/Articoli'
import Esplora from '/components/Esplora'
import Eventi from '/components/Eventi'
import Team from '/dev/urban-cesaro/Team'

import { getDatiArticoli } from '/lib/articoli'



let members = [
  {
    name: "Filippo Urban",
    role: "è bravo a guidare su gta 5",
    description: "sono bello ",
    imageUrl: "https://www.focusjunior.it/content/uploads/2019/06/St3pNy-.jpeg",
    googleUrl:"",
    twitterUrl:"https://twitter.com/St3pNy",
  },
  {
    name: " Zaccaria Cesaro ",
    role: "programma senza sapere nulla ",
    description: "però è bravo ",
    imageUrl: "https://www.webboh.it/wp-content/uploads/2020/10/Surry-758x424.jpg",
  },
  {
    
    name: "Eros Simoncin ",
    role: "molto forte su soft air(non è vero)",
    description: " non è fortissimo  ",
    imageUrl: "https://media.gamerbrain.net/wp-content/uploads/2019/11/27094442/anima.jpg",
  },
  {
    name: "fake omar sylla ",
    role: "CEO / CO-FOUNDER",
    description: "And I love you like...",
    imageUrl: "https://www.ansa.it/webimages/foto_large_ls_350/2017/6/12/e7248097ded61e3394cadacb0d1c35d9.jpg",
  },
]

let team = [
  {
    title: "Il nostro team",
    description: "Il nostro team di professionisti!"
  }
]


export default function Home({ datiArticoli }) {
  return (
    <Layout>
      <Head>
      </Head>
      <Team
        members={members}
        team={team}
        cardWidth={3}
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
