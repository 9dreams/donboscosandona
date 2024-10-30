import Footer from '/components/Footer'
import NavBar from '/components/NavBar'

export const siteName = 'Andreus Resort'
export const siteTitle = 'Andreus Resort - Merano'
export const siteDescription =
  'Sito ufficiale del centro benessere Andreus Resort - Merano '
export const siteBaseUrl = 'https://dev.donboscosandona.it'

export const menu = [
  { title: 'Chi siamo', url: '/chi-siamo' },
  { title: 'Contatti', url: '/contatti' },
  { title: 'Dove siamo', url: '/dove-siamo' },
  { title: 'Richieste', url: '/privacy' },
]

export const logoUrl =
  'https://www.andreus-resorts.it/media/81689/andreus-resorts-logo-small-gray-2776563.svg'

export const header = <NavBar menu={menu} siteName={siteName} logoUrl={logoUrl} />

const menuFooter = [

]

const socials = [
  {
    title: 'Facebook',
    imageUrl:
      'https://archive.donboscosandona.it/img/ck/1cffc9d197e15de1f72a89477cc75e56073980b0.png',
    url: 'https://www.facebook.com/donboscosandona/?fref=ts',
  },
  {
    title: 'Instagram',
    imageUrl:
      'https:///archive.donboscosandona.it/img/ck/5c1c2a74750c62b3349df0d555ea9a26d1c6e8af.png',
    url: 'https://www.instagram.com/donboscosandona/',
  },
  {
    title: 'Youtube',
    imageUrl:
      'https://archive.donboscosandona.it/img/ck/36189d32ee9d4be0a612c292a430106948c85bfc.png',
    url: 'https://www.youtube.com/channel/UCZ2sxe9w7Yf9lP4nl65oAvg',
  },
  {
    title: 'Linkedin',
    imageUrl:
      'https://archive.donboscosandona.it/img/ck/55ed185e94be2aa2a1d854487273a4d139e5475f.png',
    url: 'https://www.linkedin.com/company/c-f-p-don-bosco/',
  },
]

let images = [
  { imageUrl: 'https://www.andreus-resorts.it/media/81689/logo-andreus-white-2769577.svg' },
  { imageUrl: 'https://www.andreus-resorts.it/media/81689/logo-white-golf-lodge-2769575.svg' },
  { imageUrl: 'https://www.andreus-resorts.it/media/81689/logo-white-sonnenalm-2769573.svg' },
]

export const footer = (
  <Footer
    imageUrl='https://source.unsplash.com/random'
    color='#272727'
    opacitycolor='1'
    opacity={1}
    title1='About Us'
    description1="Un concetto unico vi attende negli Andreus Resort, dove ognuno dei nostri 3 hotel propone una propria offerta completa. Approfittate dei singoli vantaggi dell’hotel che avete scelto: su richiesta, potete anche utilizzare l’area benessere e fitness ricca di varietà dell’Andreus Hotel. Attività come escursioni guidate, tour in bicicletta e golf sono aperte a tutti gli ospiti. Scoprite la varietà degli Andreus Resort e godetevi appieno la vostra vacanza.
"
    title2='Social Feed'
    socials={socials}
    images={images}
    menu={menuFooter}
    copyright='Copyright (C) 2023 9dreams Agency.'
  />
)
