import Logos from '/components/Logos'
import Footer from '/components/Footer'
import Link from '@mui/material/Link'

export const siteName = "#PER23"
export const siteTitle = "Proposta Estate Ragazzi 2023 - San Donà di Piave"
export const siteDescription = "Sito ufficiale dell'Estate Ragazzi dell'Oratorio don Bosco di San Donà di Piave"

export const menu = [
    { title: 'Home', url: '/' },
    { title: 'Oratorio don Bosco', url: 'http://www.inoratorio.it' },
    { title: 'Iscrizioni', url: '/iscrizioni' },
    { title: 'Calendario', url: '/calendario' },
    { title: 'Privacy', url: 'http://www.inoratorio.it/privacy-policy' },
]

/* export const header = <Logos
    logoUrl="https://archive.donboscosandona.it/img/ck/96448406eee9201111c084f9f70330b052012ac5.png"
    sponsorUrl="https://archive.donboscosandona.it/img/ck/20b01b69c5c5586ea921a398e557a7767d004959.png"
    color="#FFFFFF"
/> */

const menuFooter = menu

const socials = [
    { title: 'Facebook', imageUrl: '/images/social/facebook.png', url: 'https://www.facebook.com/inoratorio/' },
    { title: 'Instagram', imageUrl: '/images/social/instagram.png', url: 'https://www.instagram.com/inoratorio.it/' },
    { title: 'Youtube', imageUrl: '/images/social/youtube.png', url: 'https://www.youtube.com/user/inoratorio' },
]

let images = []

export const footer = <Footer
    imageUrl="https://source.unsplash.com/random"
    color="#272727"
    opacitycolor="1"
    opacity={1}
    title1="Proposta Estate Ragazzi"
    description1="La Proposta estiva dell'Oratorio don Bosco di San Donà di Piave. Per divertirsi insieme crescendo nella fede e nella relazione con gli altri."
    title2="Seguici sui Social"
    socials={socials}
    title3=""
    images={images}
    menu={menuFooter}
    copyright={<Link href="https://archive.donboscosandona.it/9dreams-l-agenzia-di-comunicazione-del-settore-informatico">Copyright (C) 2023 9dreams Agency.</Link>}
/>