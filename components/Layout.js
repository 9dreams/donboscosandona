import Head from 'next/head'

import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import styles from './Layout.module.css'

import { header, footer, siteTitle, siteDescription } from '/config/default'

const theme = createTheme()

export default function Layout({ children }) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className={styles.container}>
                <Head>
                    <title>{siteTitle}</title>
                    <meta name="description" content={siteDescription} />
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

                {header}
                <main>
                    {children}
                </main>
                {footer}
            </div>
        </ThemeProvider>
    )
}
