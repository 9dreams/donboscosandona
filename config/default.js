import Footer from '/components/Footer'
import NavBar from '/components/NavBar'

export const siteName = 'PLAN YOUR LIFE'
export const siteTitle = 'PLAN YOUR LIFE'
export const siteDescription =
  'Centro di orientamento scolastico e professionale'
export const siteBaseUrl = 'https://www.planyourlife.it'

export const menu = [
  { title: 'Home', url: '/' },
  { title: 'Orientamento', url: '/orientamento' },
]

export const logoUrl = '/images/logo_grigio.png'

export const header = (
  <NavBar menu={menu} siteName={siteName} logoUrl={logoUrl} />
)

const menuFooter = menu

const socials0 = [
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

let socials = [
  {
    title: 'Instagram',
    imageUrl:
      'https:///archive.donboscosandona.it/img/ck/5c1c2a74750c62b3349df0d555ea9a26d1c6e8af.png',
    url: 'https://www.instagram.com/martinadianese',
  },
]

let images = []

export const footer = (
  <Footer
    imageUrl='https://source.unsplash.com/random'
    color='#272727'
    opacitycolor='1'
    opacity={1}
    title1='Chi sono'
    description1='Sono Orientatrice Asnor e pedagogista clinico, principalmente mi occupo di orientamento scolastico e professionale, guidando non solo gli studenti nella scelta di percorsi che rispecchiano le loro aspirazioni, interessi, che sono anche realistici e sostenibili nel lungo termine, ma anche aiutando le persone a prendere decisioni informate riguardo alla loro carriera, ai percorsi formativi necessari e alle opportunità professionali disponibili. Questo processo è utile sia per i giovani che stanno entrando nel mondo del lavoro sia per chi sta pensando di cambiare carriera.'
    title2='Social'
    socials={socials}
    title3=''
    images={images}
    menu={menuFooter}
    copyright='Site by 9dreams Agency'
  />
)
