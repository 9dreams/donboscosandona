import Head from 'next/head'
import Layout from '/components/Layout'
import Team from '/dev/urban-cesaro/Team'

import { getDatiArticoli } from '/lib/articoli'


let members = [
  {
    name: "Alec Thompson",
    role: "CEO / CO-FOUNDER",
    description: "And I love you like Kanye",
    description1:"loves Kanye. We need to restart the human foundation",
    imageUrl: "https://preview.redd.it/6ymh125pcra71.jpg?auto=webp&s=d0ec0c4112ca7a2a8f8228be3dfda0645091ac02",
    contatti:"email: xhvldavdgvdi phone:123456789",
    googleUrl:"f.urban@donboscosandona.it",
    linkedinUrl:"https://it.linkedin.com/",
    twitterUrl:"https://twitter.com/St3pNy",
  },
   {
    name: "Filippo Urban",
    role: "CEO / CO-FOUNDER",
    description: "And I love you like Kanye",
    description1:"loves Kanye. We need to restart the human foundation",
    contatti:"email: xhvldavdgvdi phone:123456789",
    imageUrl: "https://www.focusjunior.it/content/uploads/2019/06/St3pNy-.jpeg",
    googleUrl:"https://www.google.it/",
    linkedinUrl:"https://it.linkedin.com/",
    twitterUrl:"https://twitter.com/St3pNy",
  },
  {
    name: " Zaccaria Cesaro ",
    role: "CEO / CO-FOUNDER",
    description: "And I love you like Kanye",
    description1:"loves Kanye. We need to restart the human foundation",
    contatti:"email: xhvldavdgvdi phone:123456789",
    imageUrl: "https://www.webboh.it/wp-content/uploads/2020/10/Surry-758x424.jpg",
    googleUrl:"https://www.google.it/",
    linkedinUrl:"https://it.linkedin.com/",
    twitterUrl:"https://twitter.com/St3pNy",
  },
  
  
  {
    
    name: "Eros Simoncin",
    role: "CEO / CO-FOUNDER",
    description: "And I love you like Kanye",
    description1:"loves Kanye. We need to restart the human foundation",
    contatti:"email: xhvldavdgvdi phone:123456789",
    imageUrl: "https://media.gamerbrain.net/wp-content/uploads/2019/11/27094442/anima.jpg",
    googleUrl:"https://www.google.it/",
    linkedinUrl:"https://it.linkedin.com/",
    twitterUrl:"https://twitter.com/St3pNy",
  },
             
  
]

export default function Home({ datiArticoli }) {
  return (
    <Layout>
      <Head>
      </Head>
      <Team
        members={members}
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