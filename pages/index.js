import Grid from '@mui/material/Grid'

import Head from 'next/head'
import Layout from '/components/layout'
import Carousel from '/components/Carousel'
import Settori from '/components/settori'
import Articoli from '/components/articoli'
import Esplora from '/components/esplora'
import Eventi from '/components/eventi'
import PostInEvidenza from '/components/postInEvidenza'
import Post from '/components/Post'

import { getDatiArticoli } from '/lib/articoli'

let postInEvidenza = {
  titolo: 'Le folli notti di Bilal',
  descrizione: 'Il dott. Bilal, noto migliardario pieno di schèi, passa le sue notti tra belle ragazze e partite a poker. Come inviati di donboscosandona siamo riusciti ad accedere a questo mondo esclusivo per raccontarvelo in prima persona...',
  immagine: 'https://media.istockphoto.com/id/522728130/it/foto/amici-divertirsi-giocando-a-poker.jpg?s=612x612&w=is&k=20&c=w2_p0SHrR_-cmURmZY9-dHXu3-qqVqN9QkdiZrgJpfc=',
  testoImmagine: 'Bilal seduto su un divanetto in mezzo a due tipe.',
  testoLink: 'Continua a leggere e scopri la cosa pazzesca che hanno fatto...',
}

let posts = [
  {
    titolo: 'Le notti di Manuel',
    data: '6 marzo 2023',
    testo: 'Andiamo insieme a scoprire le follie del nostro Manuel...',
    immagine: 'https://source.unsplash.com/random',
    url: 'https://cinema.donboscosandona.it'
  },
  {
    titolo: 'Le notti di Martino',
    data: '5 marzo 2023',
    testo: 'Andiamo insieme a scoprire le follie del nostro Martino...',
    immagine: 'https://source.unsplash.com/random',
    url: 'https://cinema.donboscosandona.it'
  },
]

let slides = [
  {
    titolo: 'Slide spaziale',
    descrizione: 'Questa slide conterrà un\'immagine dello spazio presa a caso da Unsplash',
    immagine: 'https://source.unsplash.com/1600x900/?space'
  },
  {
    titolo: 'Tinta unita',
    descrizione: 'Questa slide conterrà un colore Android Green tinta unita',
    colore: '#A3CB38'
  },
  {
    titolo: 'Slide ritratto',
    descrizione: 'Questa slide conterrà un ritratto preso a caso da Unsplash',
    immagine: 'https://source.unsplash.com/1600x900/?portrait'
  },
  {
    titolo: 'Slide acquatica',
    descrizione: 'Questa slide conterrà un\'immagine acquatica (o di un water) presa a caso da Unsplash',
    immagine: 'https://source.unsplash.com/1600x900/?water'
  },
  {
    titolo: 'Slide della natura',
    descrizione: 'Questa slide conterrà un\'immagine della natura presa a caso da Unsplash',
    immagine: 'https://source.unsplash.com/1600x900/?nature'
  },
]

export default function Home({ datiArticoli }) {
  return (
    <Layout>
      <Head>
      </Head>
      <PostInEvidenza post={ postInEvidenza } />
      <Grid container spacing={ 4 }>
        {
          posts.map(
            (post) => (
              <Post post={post} />
            )
          )
        }
      </Grid>
      <Carousel slides={ slides } />
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
