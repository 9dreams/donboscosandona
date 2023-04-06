import Logos from '/components/Logos'
import Footer from '/components/Footer'

export const siteName = "CFP DON BOSCO"
export const siteTitle = "CFP DON BOSCO - San Donà di Piave"
export const siteDescription = "Sito ufficiale del Centro di Formazione Professionale don Bosco di San Donà di Piave"

export const menu = [
    { title: 'Chi siamo', url: '/chi-siamo' },
    { title: 'Contatti', url: '/contatti' },
    { title: 'Dove siamo', url: '/dove-siamo' },
    { title: 'Privacy', url: '/privacy' },
    { title: 'Trasparenza', url: '/trasparenza' },
]

export const header = <Logos
    logoUrl="https://archive.donboscosandona.it/img/ck/96448406eee9201111c084f9f70330b052012ac5.png"
    sponsorUrl="https://archive.donboscosandona.it/img/ck/20b01b69c5c5586ea921a398e557a7767d004959.png"
    color="#FFFFFF"
/>

const menuFooter = [
    { title: 'Informatico', url: '/informatico' },
    { title: 'Energie', url: '/energie' },
    { title: 'Elettrico', url: '/elettrico' },
    { title: 'Trasparenza', url: '/trasparenza' },
]

const socials = [
    { title: 'Facebook', imageUrl: 'https://archive.donboscosandona.it/img/ck/1cffc9d197e15de1f72a89477cc75e56073980b0.png', url: 'https://www.facebook.com/donboscosandona/?fref=ts' },
    { title: 'Instagram', imageUrl: 'https:///archive.donboscosandona.it/img/ck/5c1c2a74750c62b3349df0d555ea9a26d1c6e8af.png', url: 'https://www.instagram.com/donboscosandona/' },
    { title: 'Youtube', imageUrl: 'https://archive.donboscosandona.it/img/ck/36189d32ee9d4be0a612c292a430106948c85bfc.png', url: 'https://www.youtube.com/channel/UCZ2sxe9w7Yf9lP4nl65oAvg' },
    { title: 'Linkedin', imageUrl: 'https://archive.donboscosandona.it/img/ck/55ed185e94be2aa2a1d854487273a4d139e5475f.png', url: 'https://www.linkedin.com/company/c-f-p-don-bosco/' },
]

let images = [
    { title: '', imageUrl: 'https://source.unsplash.com/random', },
    { title: '', imageUrl: 'https://source.unsplash.com/random', },
    { title: '', imageUrl: 'https://source.unsplash.com/random', },
    { title: '', imageUrl: 'https://source.unsplash.com/random', },
]

export const footer = <Footer
    imageUrl="https://source.unsplash.com/random"
    color="#272727"
    opacitycolor="1"
    opacity={1}
    title1="About Us"
    description1="Footer che apparirà sul fondo di tutte le pagine del sito. Sarà possibile passare al componente un'immagine di sfondo opzionale oppure un colore di sfondo. L'attributo opaciy permetterà di sovrapporre all'immagine un Box con il colore di sfondo e un'opacità regolabile.
La prima colonna sarà destinata a un testo descrittivo, la seconda ai social, la terza a un menù di navigazione grafico (che porta ad es. ai settori).
"
    title2="Social Feed"
    socials={socials}
    title3="I Settori"
    images={images}
    menu={menuFooter}
    copyright="Copyright (C) 2023 9dreams Agency."
/>