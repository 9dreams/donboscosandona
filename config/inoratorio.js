import NavBar from '/components/NavBar'
import Footer from '/components/Footer'
import Link from '@mui/material/Link'

export const siteName = "ORATORIO DON BOSCO"
export const siteTitle = "Oratorio don Bosco - San Donà di Piave"
export const siteDescription = "Sito ufficiale dell'Oratorio don Bosco di San Donà di Piave"
export const siteBaseUrl = 'https://www.inoratorio.it'

export const menu = [
    { title: 'Home', url: '/' },
    { title: 'Proposta Estate', url: 'https://per.donboscosandona.it' },
    { title: 'Cinema', url: 'https://cinema.donboscosandona.it' },
    { title: 'Scuola', url: 'https://www.donboscosandona.it' },
    { title: 'Soggiorno Marino', url: 'https://www.soggiornodonbosco.it' },
    { title: 'Privacy', url: 'http://archive.inoratorio.it/privacy-policy' },
]

export const logoUrl = null
export const header = <NavBar menu={menu} siteName={siteName} logoUrl={logoUrl} />

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
    title1="Oratorio don Bosco"
    description1="Il sito dell'Oratorio don Bosco di San Donà di Piave. Per divertirsi insieme crescendo nella fede e nella relazione con gli altri."
    title2="Seguici sui Social"
    socials={socials}
    title3=""
    images={images}
    menu={menuFooter}
    copyright={<Link color="#fff" href="https://archive.donboscosandona.it/9dreams-l-agenzia-di-comunicazione-del-settore-informatico">Copyright (C) 2024 9dreams Agency.</Link>}
/>