import Head from 'next/head'
import Link from 'next/link'

import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Container from '@mui/material/Container'

import styles from './Layout.module.css'

import Header from '/components/Header'
import Footer from '/components/Footer'

export const siteTitle = 'CFP CNOS-FAP DON BOSCO - San Donà di Piave';

const theme = createTheme()

const sezioni = [
    { titolo: 'Informatico', url: '/informatico' },
    { titolo: 'Energie', url: '/energie' },
    { titolo: 'Elettrico', url: '/elettrico' },
    { titolo: 'Meccanico', url: '/meccanico' },
    { titolo: 'Motoristico', url: '/motoristico' },
    { titolo: 'Carrozzeria', url: '/carrozzeria' },
    { titolo: 'Trasparenza', url: '/trasparenza' },
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
                <Footer />
            </div>
        </ThemeProvider>
    )
}
