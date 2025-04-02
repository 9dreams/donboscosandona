import Footer from '/components/Footer'
import NavBar from '/components/NavBar'

export const siteName = 'Soggiorno Don Bosco'
export const siteTitle = 'Soggiorno Don Bosco - Duna Verde'
export const siteDescription =
  ''
export const siteBaseUrl = 'https://dev.donboscosandona.it'

export const menu = [
  { title: 'Chi siamo', url: '/chi-siamo' },
  { title: 'Contatti', url: '/contatti' },
  { title: 'Dove siamo', url: '/dove-siamo' },
  { title: 'Privacy', url: '/privacy' },
  { title: 'Trasparenza', url: '/trasparenza' },
]

export const logoUrl =
  '/images/log13.png'

export const header = <NavBar menu={menu} siteName={siteName} logoUrl={logoUrl} />

const menuFooter = [
  { title: '', url: '/informatico' },
  { title: '', url: '/energie' },
  { title: '', url: '/elettrico' },
  { title: '', url: '/trasparenza' },
]

const socials = [
  
]

let images = [
  { title: '', imageUrl: 'https://www.soggiornodonbosco.it/img/ck/1e1d8514786de1acf318b387c6daa2c5c9449fe3.png w-300'  },
]

export const footer = (
  <Footer
    imageUrl='https://source.unsplash.com/random'
    color='#272727'
    opacitycolor='1'
    opacity={1}
    title1='Chi siamo'
    description1="
    ALL INCLUSIVE
BED & BREAKFAST 
GRUPPI

CARTA DEI SERVIZI
PRIVACY POLICY
"
    title2='' 
    description2=''

    socials={socials}
    images={images}
    menu={menuFooter}
    copyright='Copyright (C) 2023 9dreams Agency.'
    title3='LA STRUTTURA
LA CUCINA

APPUNTAMENTI
BABY CLUB

Seguici su Facebook
Seguici su Instagram'
   
  />
  
)
