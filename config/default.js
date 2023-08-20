import NavBar from '/components/NavBar'
import Footer from '/components/Footer'

export const siteName = "SFP DON BOSCO"
export const siteTitle = "SFP DON BOSCO - San Donà di Piave"
export const siteDescription = "Sito ufficiale della Scuola della Formazione Professionale don Bosco di San Donà di Piave"
export const siteBaseUrl = 'https://dev.donboscosandona.it'

export const menu = [
    { title: 'Home', url: '/' },
    { title: 'Contatti', url: '/contatti' },
    { title: 'Trasparenza', url: '/trasparenza' },
    { title: 'Privacy', url: '/privacy' },
]

export const logoUrl =
  'https://i.postimg.cc/zvqYsPKD/SFP-DON-BOSCO-SAN-DONA-BIANCO.png'

export const header = <NavBar menu={menu} siteName={siteName} logoUrl={logoUrl} />

const menuFooter = menu

const socials = [
    { title: 'Facebook', imageUrl: 'https://archive.donboscosandona.it/img/ck/1cffc9d197e15de1f72a89477cc75e56073980b0.png', url: 'https://www.facebook.com/donboscosandona/?fref=ts' },
    { title: 'Instagram', imageUrl: 'https://archive.donboscosandona.it/img/ck/5c1c2a74750c62b3349df0d555ea9a26d1c6e8af.png', url: 'https://www.instagram.com/donboscosandona/' },
    { title: 'Youtube', imageUrl: 'https://archive.donboscosandona.it/img/ck/36189d32ee9d4be0a612c292a430106948c85bfc.png', url: 'https://www.youtube.com/channel/UCZ2sxe9w7Yf9lP4nl65oAvg' },
    { title: 'Linkedin', imageUrl: 'https://archive.donboscosandona.it/img/ck/55ed185e94be2aa2a1d854487273a4d139e5475f.png', url: 'https://www.linkedin.com/company/c-f-p-don-bosco/' },
]

let images = [
    { imageUrl: 'https://archive.donboscosandona.it/img/column/42480c58c90ada8ff75c443fdde83ae71fea75ac.jpg?1539529685', },
    { imageUrl: 'https://archive.donboscosandona.it/img/column/417afaa0f0697f0f0aabf9ccf61030769cb76f14.jpg?1539529180', },
    { imageUrl: 'https://archive.donboscosandona.it/img/column/97f264e9d16a0856dd2cb973630af1cac4426f73.jpg?1539529314', },
    { imageUrl: 'https://archive.donboscosandona.it/img/column/b0bd034769ac3471bf375239f1e64e39f5684aa6.jpg?1539523300', },
    { imageUrl: 'https://archive.donboscosandona.it/img/column/342f349c6bb5bbf9a37b95353df2bee2309b9792.jpg?1539524741', },
]

export const footer = <Footer
    imageUrl="https://immagine di sfondo"
    color="#353b48"
    opacitycolor="1"
    opacity={1}
    title1="Chi siamo"
    description1="La SFP “don Bosco” di San Donà di Piave (VE) è una scuola della formazione professionale salesiana che prepara i giovani al mondo del lavoro, accompagnandoli in un percorso integrale di crescita umana e professionale."
    title2="Social"
    socials={socials}
    title3=""
    images={images}
    menu={menuFooter}
    copyright="Site by 9dreams Agency"
/>
