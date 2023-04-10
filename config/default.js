import Logos from '/components/Logos'
import Footer from '/components/Footer'

export const siteName = "#PER23"
export const siteTitle = "Proposta Estate Ragazzi 2023 - San Donà di Piave"
export const siteDescription = "Sito ufficiale dell'Estate Ragazzi dell'Oratorio don Bosco di San Donà di Piave"

export const menu = [
    { title: 'Iscrizioni', url: '/iscrizioni' },
    { title: 'Oratorio', url: 'http://www.inoratorio.it' },
    { title: 'Cinema', url: 'https://cinema.donboscosandona.it' },
    { title: 'Privacy', url: '/privacy' },
]

/* export const header = <Logos
    logoUrl="https://archive.donboscosandona.it/img/ck/96448406eee9201111c084f9f70330b052012ac5.png"
    sponsorUrl="https://archive.donboscosandona.it/img/ck/20b01b69c5c5586ea921a398e557a7767d004959.png"
    color="#FFFFFF"
/> */

const menuFooter = menu

const socials = [
    { title: 'Facebook', imageUrl: 'https://archive.donboscosandona.it/img/ck/1cffc9d197e15de1f72a89477cc75e56073980b0.png', url: 'https://www.facebook.com/donboscosandona/?fref=ts' },
    { title: 'Instagram', imageUrl: 'https:///archive.donboscosandona.it/img/ck/5c1c2a74750c62b3349df0d555ea9a26d1c6e8af.png', url: 'https://www.instagram.com/donboscosandona/' },
    { title: 'Youtube', imageUrl: 'https://archive.donboscosandona.it/img/ck/36189d32ee9d4be0a612c292a430106948c85bfc.png', url: 'https://www.youtube.com/channel/UCZ2sxe9w7Yf9lP4nl65oAvg' },
    { title: 'Linkedin', imageUrl: 'https://archive.donboscosandona.it/img/ck/55ed185e94be2aa2a1d854487273a4d139e5475f.png', url: 'https://www.linkedin.com/company/c-f-p-don-bosco/' },
]

let images = []

export const footer = <Footer
    imageUrl="https://source.unsplash.com/random"
    color="#272727"
    opacitycolor="1"
    opacity={1}
    title1="Chi siamo"
    description1="..."
    title2="Seguici sui Social"
    socials={socials}
    title3=""
    images={images}
    menu={menuFooter}
    copyright="Copyright (C) 2023 9dreams Agency."
/>