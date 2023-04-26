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
