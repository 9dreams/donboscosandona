import Head from 'next/head'
import Layout from '/components/layout'
import Carousel from '/components/Carousel'
import Settori from '/components/settori'
import Articoli from '/components/articoli'
import Esplora from '/components/esplora'
import Eventi from '/components/eventi'
import PostInEvidenza from '/components/postInEvidenza'

import { getDatiArticoli } from '/lib/articoli'

let postInEvidenza = {
  titolo: 'Le folli notti di Bilal',
  descrizione: 'Il dott. Bilal, noto migliardario pieno di schèi, passa le sue notti tra belle ragazze e partite a poker. Come inviati di donboscosandona siamo riusciti ad accedere a questo mondo esclusivo per raccontarvelo in prima persona...',
  immagine: 'https://media.istockphoto.com/id/522728130/it/foto/amici-divertirsi-giocando-a-poker.jpg?s=612x612&w=is&k=20&c=w2_p0SHrR_-cmURmZY9-dHXu3-qqVqN9QkdiZrgJpfc=',
  testoImmagine: 'Bilal seduto su un divanetto in mezzo a due tipe.',
  testoLink: 'Continua a leggere e scopri la cosa pazzesca che hanno fatto...',
}

export default function Home({ datiArticoli }) {
  return (
    <Layout>
      <Head>
      </Head>
      <PostInEvidenza post={ postInEvidenza } />
      <Carousel />
      <Settori />
      <Esplora />
      <Eventi />
      <Articoli dati={ datiArticoli } />
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
