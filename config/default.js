import { Height } from '@mui/icons-material'
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
  { title: '', imageUrl: '/images/soggiorno.png'   },
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

    socials={socials}
    images={images}
    menu={menuFooter}
    copyright='Copyright (C) 2023 9dreams Agency.'
       description2='+39 0421 299 158
       info@soggiornodonbosco.it
 
       via Selva Rosata, 81
       30021 Caorle - Venezia
       CIN IT027005B7FBR2IJIS'
  />
  
)
