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
    name: "Alec Thompson",
    role: "CEO / CO-FOUNDER",
    description: "And I love you like Kanye loves Kanye. We need to restart the human foundation",
    imageUrl: "https://preview.redd.it/6ymh125pcra71.jpg?auto=webp&s=d0ec0c4112ca7a2a8f8228be3dfda0645091ac02",
    googleUrl:"f.urban@donboscosandona.it",
    linkedinUrl:"https://it.linkedin.com/",
    twitterUrl:"https://twitter.com/St3pNy",
  },
   {
    name: "Filippo Urban",
    role: "è bravo a guidare su gta 5",
    description: "sono bello ",
    imageUrl: "https://www.focusjunior.it/content/uploads/2019/06/St3pNy-.jpeg",
    googleUrl:"https://www.google.it/",
    linkedinUrl:"https://it.linkedin.com/",
    twitterUrl:"https://twitter.com/St3pNy",
  },
  {
    name: " Zaccaria Cesaro ",
    role: "programma senza sapere nulla ",
    description: "però è bravo ",
    imageUrl: "https://www.webboh.it/wp-content/uploads/2020/10/Surry-758x424.jpg",
    googleUrl:"https://www.google.it/",
    linkedinUrl:"https://it.linkedin.com/",
    twitterUrl:"https://twitter.com/St3pNy",
  },
  
  
  {
    
    name: "Eros Simoncin",
    role: "molto forte su soft air(non è vero)",
    description: " non è fortissimo  ",
    imageUrl: "https://media.gamerbrain.net/wp-content/uploads/2019/11/27094442/anima.jpg",
    googleUrl:"https://www.google.it/",
    linkedinUrl:"https://it.linkedin.com/",
    twitterUrl:"https://twitter.com/St3pNy",
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
        cardWidth={4}
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