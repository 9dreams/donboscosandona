import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

import Head from 'next/head'
import Layout from '/components/Layout'
import Carousel from '/components/Carousel'
import Settori from '/components/Settori'
import Articoli from '/components/Articoli'
import Esplora from '/components/Esplora'
import Eventi from '/components/Eventi'
import PostInEvidenza from '/components/PostInEvidenza'
import Post from '/components/Post'
import Footer from '/dev/gerryscotti/Footer'



import { TheFooter } from 'dev/gerryscotti/Footer'

let socials = [
  { title: 'Facebook', imageUrl: 'https...', url: '...' },
  { title: 'Instagram', imageUrl: 'https...', url: '...' },
  { title: 'Youtube', imageUrl: 'https...', url: '...' },
  { title: 'Linkedin', imageUrl: 'https...', url: '...' },
]

let images = [
  { title: 'Informatico', imageUrl: 'https...', url: '...' },
  { title: 'Informatico', imageUrl: 'https...', url: '...' },
  { title: 'Informatico', imageUrl: 'https...', url: '...' },
]

let menu = [
  { title: 'BLOG', url: '/informatico' },
  { title: 'PRESENTATION', url: '/energie' },
  { title: 'DISCOVER', url: '/elettrico' },
  { title: 'PAYMENT', url: '/meccanico' },
  { title: 'CONTACT US', url: '/motoristico' },
]
export default function Pagina({ TheFooter }) {
  return (
    <Footer
      imageUrl="https://immagine di sfondo"
      color="#777"
      opacitycolor="1"
      opacity={1}
      title1="About Us"
      description1="Creative Tim is a startup..."
      title2="Social Feed"
      socials={socials}
      title3="I Settori"
      images={images}
      menu={menu}
      copyright="Copyright (C) 2023 9dreams Agency."
    />
  )
}