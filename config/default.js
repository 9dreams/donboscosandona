import NavBar from '/components/NavBar'
import Footer from '/cc/Footer'

export const siteName = "SFP DON BOSCO"
export const siteTitle = "SFP DON BOSCO - San Donà di Piave"
export const siteDescription = "Sito ufficiale della Scuola della Formazione Professionale don Bosco di San Donà di Piave"
export const siteBaseUrl = 'https://dev.donboscosandona.it'

export const menu = [
    { title: 'Home', url: '/' },
    { title: 'Contatti', url: '/contatti' },
    { title: 'Elettrico', url: '/elettrico' },
    { title: 'Energia', url: '/energia' },
    { title: 'Informatico', url: '/informatico' },
    { title: 'Meccanico', url: '/meccanico' },
    { title: 'Automotive', url: '/automotive' },
    { title: 'Trasparenza', url: '/trasparenza' },
    { title: 'Privacy', url: '/privacy' },
]

export const logoUrl =
  'https://i.postimg.cc/zvqYsPKD/SFP-DON-BOSCO-SAN-DONA-BIANCO.png'

export const header = <NavBar menu={menu} siteName={siteName} logoUrl={logoUrl} />

const menuFooter = menu

const socials = [
    { title: 'Facebook', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/667px-2023_Facebook_icon.svg.png', url: 'https://www.facebook.com/donboscosandona/?fref=ts' },
    { title: 'Instagram', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/640px-Instagram_icon.png', url: 'https://www.instagram.com/donboscosandona/' },
    { title: 'Youtube', imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-youtube-logo-icon-download-in-svg-png-gif-file-formats--social-media-70-flat-icons-color-pack-logos-432560.png', url: 'https://www.youtube.com/channel/UCZ2sxe9w7Yf9lP4nl65oAvg' },
    { title: 'Linkedin', imageUrl: 'https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png', url: 'https://www.linkedin.com/company/c-f-p-don-bosco/' },
    { title: 'TikTok', imageUrl: 'https://seeklogo.com/images/T/tiktok-logo-1F4A5DCD45-seeklogo.com.png', url: 'https://www.tiktok.com/@sfpdonbosco' },
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
