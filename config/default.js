import Footer from '/components/Footer'
import NavBar from '/components/NavBar'

export const siteName = 'CFP DON BOSCO'
export const siteTitle = 'CFP DON BOSCO - San Donà di Piave'
export const siteDescription =
  'Sito ufficiale del Centro di Formazione Professionale don Bosco di San Donà di Piave'
export const siteBaseUrl = 'https://dev.donboscosandona.it'

export const menu = [
  { title: 'Chi siamo', url: '/chi-siamo' },
  { title: 'Contatti', url: '/contatti' },
  { title: 'Dove siamo', url: '/dove-siamo' },
  { title: 'Privacy', url: '/privacy' },
  { title: 'Trasparenza', url: '/trasparenza' },
]

export const logoUrl =
  'https://i.postimg.cc/zvqYsPKD/SFP-DON-BOSCO-SAN-DONA-BIANCO.png'

export const header = <NavBar menu={menu} siteName={siteName} logoUrl={logoUrl} />

const menuFooter = [
  { title: 'Informatico', url: '/informatico' },
  { title: 'Energie', url: '/energie' },
  { title: 'Elettrico', url: '/elettrico' },
  { title: 'Trasparenza', url: '/trasparenza' },
]

const socials = [
  
]

let images = [
  { title: '', imageUrl: 'https://source.unsplash.com/random' },
  { title: '', imageUrl: 'https://source.unsplash.com/random' },
  { title: '', imageUrl: 'https://source.unsplash.com/random' },
  { title: '', imageUrl: 'https://source.unsplash.com/random' },
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
    title2='Social Feed'
    socials={socials}
    title3='I Settori'
    images={images}
    menu={menuFooter}
    copyright='Copyright (C) 2023 9dreams Agency.'
  />
  
)
