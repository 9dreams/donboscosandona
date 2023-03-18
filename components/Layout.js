import Head from 'next/head'
import Link from 'next/link'

import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Container from '@mui/material/Container'

import styles from './Layout.module.css'

import Footer from '/components/Footer'

export const siteTitle = 'CFP DON BOSCO - San Donà di Piave';

const theme = createTheme()

const sezioni = [
    { title: 'Informatico', url: '/informatico' },
    { title: 'Energie', url: '/energie' },
    { title: 'Elettrico', url: '/elettrico' },
    { title: 'Trasparenza', url: '/trasparenza' },
]

let socials = [
    { title: 'Facebook', imageUrl: 'https://www.donboscosandona.it/img/ck/1cffc9d197e15de1f72a89477cc75e56073980b0.png', url: 'https://www.facebook.com/donboscosandona/?fref=ts' },
    { title: 'Instagram', imageUrl: 'https://www.donboscosandona.it/img/ck/5c1c2a74750c62b3349df0d555ea9a26d1c6e8af.png', url: 'https://www.instagram.com/donboscosandona/' },
    { title: 'Youtube', imageUrl: 'https://www.donboscosandona.it/img/ck/36189d32ee9d4be0a612c292a430106948c85bfc.png', url: 'https://www.youtube.com/channel/UCZ2sxe9w7Yf9lP4nl65oAvg' },
    { title: 'Linkedin', imageUrl: 'https://www.donboscosandona.it/img/ck/55ed185e94be2aa2a1d854487273a4d139e5475f.png', url: 'https://www.linkedin.com/company/c-f-p-don-bosco/' },
]

let images = [
    { title: '', imageUrl: 'https://www.donboscosandona.it/img/column/f65e4622afa225a8f6f407cff0b9e616279eea44.jpg?1570719707', },
    { title: '', imageUrl: 'https://www.donboscosandona.it/img/column/f65e4622afa225a8f6f407cff0b9e616279eea44.jpg?1570719707', },
    { title: '', imageUrl: 'https://www.donboscosandona.it/img/column/f65e4622afa225a8f6f407cff0b9e616279eea44.jpg?1570719707', },
    { title: '', imageUrl: 'https://www.donboscosandona.it/img/column/f65e4622afa225a8f6f407cff0b9e616279eea44.jpg?1570719707', },
    { title: '', imageUrl: 'https://www.donboscosandona.it/img/column/f65e4622afa225a8f6f407cff0b9e616279eea44.jpg?1570719707', },
    { title: '', imageUrl: 'https://www.donboscosandona.it/img/column/f65e4622afa225a8f6f407cff0b9e616279eea44.jpg?1570719707', },
]


export default function Layout({ children }) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className={styles.container}>
                <Head>
                    <title>{siteTitle}</title>
                    <meta name="description" content="Sito ufficiale del Centro di Formazione Professionale don Bosco di San Donà di Piave" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/favicon.ico" />
                    <meta
                        property="og:image"
                        content={`https://og-image.vercel.app/${encodeURI(
                            siteTitle,
                        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                    />
                    <meta name="og:title" content={siteTitle} />
                    <meta name="twitter:card" content="summary_large_image" />
                </Head>

                <main>
                    {children}
                </main>
                <Footer
                    imageUrl="https://immagine di sfondo"
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
                    menu={sezioni}
                    copyright="Copyright (C) 2023 9dreams Agency."
                />
            </div>
        </ThemeProvider>
    )
}
