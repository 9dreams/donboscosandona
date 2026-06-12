import Head from 'next/head'
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { header, footer, siteTitle, siteDescription } from '/config/default'

const CookieBanner = dynamic(
  () => import('@palmabit/react-cookie-law').then((m) => m.CookieBanner),
  { ssr: false }
)

export default function Layout({ children }) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div className="p-0 m-0">
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
      <main className="pt-[72px]">{children}</main>
      {footer}
    </div>
  )
}
