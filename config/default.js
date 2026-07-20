import NavBar from '/components/NavBar'
import Footer from '/cc/Footer'

export const siteName = "SFP DON BOSCO"
export const siteTitle = "SFP DON BOSCO - San Donà di Piave"
export const siteDescription = "Sito ufficiale della Scuola della Formazione Professionale don Bosco di San Donà di Piave"
export const siteBaseUrl = 'https://dev.donboscosandona.it'

/** ID misurazione GA4 (Flussi di dati → Web). Un ID per sito/branch. */
export const gaMeasurementId = 'G-GDJJYGVN8F'

export const menu = [
    { title: 'Home', url: '/' },
    { title: 'Contatti', url: '/contatti' },
    { title: 'Elettrico', url: '/elettrico' },
    { title: 'Energia', url: '/energia' },
    { title: 'Informatico', url: '/informatico' },
    { title: 'Meccanico', url: '/meccanico' },
    { title: 'Automotive', url: '/automotive' },
    { title: 'Acquisto iPad', url: '/ipad' },
    { title: 'Trasparenza', url: '/trasparenza' },
    { title: 'Privacy', url: '/privacy' },
]

export const logoUrl =
  'https://i.postimg.cc/zvqYsPKD/SFP-DON-BOSCO-SAN-DONA-BIANCO.png'

export const header = <NavBar menu={menu} siteName={siteName} logoUrl={logoUrl} />

const menuFooter = menu

const socials = [
    { title: 'Facebook', platform: 'facebook', url: 'https://www.facebook.com/donboscosandona/?fref=ts' },
    { title: 'Instagram', platform: 'instagram', url: 'https://www.instagram.com/donboscosandona/' },
    { title: 'Youtube', platform: 'youtube', url: 'https://www.youtube.com/channel/UCZ2sxe9w7Yf9lP4nl65oAvg' },
    { title: 'Linkedin', platform: 'linkedin', url: 'https://www.linkedin.com/company/c-f-p-don-bosco/' },
    { title: 'TikTok', platform: 'tiktok', url: 'https://www.tiktok.com/@sfpdonbosco' },
]


let images = [
    { imageUrl: '/images/settori/elettrico.png', },
    { imageUrl: '/images/settori/energia.png', },
    { imageUrl: '/images/settori/informatico.png', },
    { imageUrl: '/images/settori/meccanico.png', },
    { imageUrl: '/images/settori/automotive.png', },
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
