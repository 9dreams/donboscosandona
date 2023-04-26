import Logos from '/components/Logos'
import Footer from '/components/Footer'

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
    { title: 'Facebook', imageUrl: 'http://www.inoratorio.it/img/ck/cf4a1aad53f6a2eec3ff6ac8dfe78bbc6941c0b7.png', url: 'https://www.facebook.com/inoratorio/' },
    { title: 'Instagram', imageUrl: 'http://www.inoratorio.it/img/ck/a5c24d7a4215cc69e8e6954ed4ff307e8409e0c0.png', url: 'https://www.instagram.com/inoratorio.it/' },
    { title: 'Youtube', imageUrl: 'http://www.inoratorio.it/img/ck/3b92f113069615a5ef8fc2fdc9544d7ad90da149.png', url: 'https://www.youtube.com/user/inoratorio' },
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
    copyright="Copyright (C) 2023 9dreams Agency."
/>