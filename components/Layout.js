import Head from 'next/head'
import { useEffect, useState, useMemo } from 'react'
import { useTheme as useNextTheme } from 'next-themes'

import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import dynamic from 'next/dynamic'

import styles from './Layout.module.css'

import { header, footer, siteTitle, siteDescription } from '/config/default'

function buildMuiTheme(mode) {
  const isDark = mode === 'dark'
  return createTheme({
    palette: {
      mode,
      primary: { main: isDark ? '#64B5F6' : '#1976D2' },
      secondary: { main: '#FF9800' },
      background: {
        default: isDark ? '#0d0f14' : '#f7f9fb',
        paper: isDark ? '#181b23' : '#ffffff',
      },
      text: {
        primary: isDark ? '#e8eaf0' : '#353B48',
        secondary: isDark ? '#9da3af' : '#717783',
      },
    },
    typography: {
      fontFamily: "'Inter Tight', sans-serif",
      h1: { fontFamily: "'Inter Tight', sans-serif", color: isDark ? '#64B5F6' : '#1976D2', fontWeight: 700 },
      h2: { fontFamily: "'Inter Tight', sans-serif", color: isDark ? '#64B5F6' : '#1976D2', fontWeight: 700 },
      h3: { fontFamily: "'Inter Tight', sans-serif", color: isDark ? '#64B5F6' : '#1976D2', fontWeight: 600 },
      h4: { fontFamily: "'Inter Tight', sans-serif", color: isDark ? '#64B5F6' : '#1976D2', fontWeight: 600 },
      h5: { fontFamily: "'Inter Tight', sans-serif", color: isDark ? '#64B5F6' : '#1976D2', fontWeight: 600 },
      h6: { fontFamily: "'Inter Tight', sans-serif", color: isDark ? '#64B5F6' : '#1976D2', fontWeight: 600 },
    },
  })
}

const CookieBanner = dynamic(
  () => import('@palmabit/react-cookie-law').then((m) => m.CookieBanner),
  { ssr: false }
)

export default function Layout({ children }) {
  const [isMounted, setIsMounted] = useState(false)
  const { resolvedTheme } = useNextTheme()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const muiTheme = useMemo(
    () => buildMuiTheme(resolvedTheme === 'dark' ? 'dark' : 'light'),
    [resolvedTheme]
  )

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <div className={styles.container}>
        <Head>
          <title>{siteTitle}</title>
          <meta name='description' content={siteDescription} />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='icon' href='/favicon.ico' />
        </Head>

        {isMounted && (
          <CookieBanner
            message='Questo sito utilizza i cookies e altre tecniche di tracciamento per migliorare la tua esperienza di navigazione, per mostrarti contenuti personalizzati e annunci mirati, per analizzare il traffico sul sito e per capire da dove arrivano i visitatori.'
            wholeDomain={true}
            onAccept={() => {}}
            onAcceptPreferences={() => {}}
            onAcceptStatistics={() => {}}
            onAcceptMarketing={() => {}}
            policyLink='https://www.donboscosandona.it/privacy'
            privacyPolicyLinkText='Privacy Policy'
            necessaryOptionText='Necessari'
            preferencesOptionText='Preferenze'
            statisticsOptionText='Statistiche'
            marketingOptionText='Marketing'
            acceptButtonText='Accetta'
            declineButtonText='Nega il consenso'
            managePreferencesButtonText='Gestisci le preferenze'
            savePreferencesButtonText='Salva e chiudi'
            styles={{
              button: {
                backgroundColor: '#2980b9',
                border: 'none',
                margin: '5px',
                padding: '0.5rem',
                color: 'white',
                borderRadius: '2rem',
              },
            }}
          />
        )}

        {header}
        <main className="layout-main">{children}</main>
        {footer}
      </div>
    </ThemeProvider>
  )
}
