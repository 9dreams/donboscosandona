import Logos from '/components/Logos'
import Footer from '/components/Footer'

export const siteName = "I DRONI DEL PIAVE"
export const siteTitle = "I DRONI DEL PIAVE - La tua droneria officiale di fiducia"
export const siteDescription = "La migliore e ufficiale droneria di San Donà di Piave"

export const menu = [


  
    
]

const menuFooter = [
   
   
]

export const header = ""

const socials = [
    { title: 'Facebook', imageUrl: 'https://archive.donboscosandona.it/img/ck/1cffc9d197e15de1f72a89477cc75e56073980b0.png', url: 'https://www.facebook.com/donboscosandona/?fref=ts' },
    { title: 'Instagram', imageUrl: 'https:///archive.donboscosandona.it/img/ck/5c1c2a74750c62b3349df0d555ea9a26d1c6e8af.png', url: 'https://www.instagram.com/donboscosandona/' },
    { title: 'Youtube', imageUrl: 'https://archive.donboscosandona.it/img/ck/36189d32ee9d4be0a612c292a430106948c85bfc.png', url: 'https://www.youtube.com/channel/UCZ2sxe9w7Yf9lP4nl65oAvg' },
    { title: 'Linkedin', imageUrl: 'https://archive.donboscosandona.it/img/ck/55ed185e94be2aa2a1d854487273a4d139e5475f.png', url: 'https://www.linkedin.com/company/c-f-p-don-bosco/' },
]

let images = [
    { title: '', imageUrl: 'https://openseauserdata.com/files/3c4bc3acd3845cf8fbb5889844211821.png', },
    { title: '', imageUrl: 'https://i.imgur.com/kgmBEwM.jpeg', },
    { title: '', imageUrl: 'https://i.imgur.com/IqQMKed.png', },
    { title: '', imageUrl: 'https://i.imgur.com/1EjXsbx.png', },
    { title: '', imageUrl: 'https://i.imgur.com/bPgb1QR.png', },
    { title: '', imageUrl: 'https://i.imgur.com/Jk1BrW8.png', },
    { title: '', imageUrl: 'https://i.imgur.com/Xaw800L.png', },
    { title: '', imageUrl: 'https://i.imgur.com/0z92p5G.png', },
]

export const footer = <Footer
    imageUrl="https://source.unsplash.com/random"
    color="#272727"
    opacitycolor="1"
    opacity={1}
    title1="I collaboratori"
    description1="1. Leonardo Pavan: Il genio del design, crea esperienze web straordinarie grazie alle sue abilità.
    2. Giacomo Pistolato: Il codice è la sua arma, sviluppa siti web perfetti , è uno dei migliori tra noi. 
    3. Simone Mazzola: Il navigatore digitale, guida il team verso il successo online. "
    
    socials={socials}
    title3="I Settori"
    images={images}
    menu={menuFooter}
    copyright="Copyright (C) 2023 9dreams Agency."
/>