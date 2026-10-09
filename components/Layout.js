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
            dialog: {
              position: 'fixed',
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 100000,
              backgroundColor: '#0b1f3a',
              color: '#fff',
              padding: '1rem 1.25rem',
              boxShadow: '0 -8px 40px rgba(11,31,58,.35)',
              fontFamily: 'var(--font-ui)',
            },
            // Le chiavi sostituiscono per intero quelle della libreria: si
            // ripetono i valori predefiniti che servono all'impaginazione.
            message: { minHeight: '32px', fontSize: '14px', lineHeight: 1.5, padding: '10px 0', color: 'rgba(255,255,255,.85)', fontFamily: 'var(--font-ui)' },
            policy: { fontSize: '14px', marginLeft: '10px', color: '#d9a21b', fontWeight: 600, textDecoration: 'underline' },
            optionLabel: { height: 'auto', width: 'auto', minHeight: '14px', fontSize: '14px', color: '#fff', display: 'inline-block', padding: '1px 0 0 20px', position: 'relative', top: 0, left: 0, zIndex: 1, cursor: 'default', verticalAlign: 'top', fontFamily: 'var(--font-ui)' },
            button: {
              backgroundColor: '#1976D2',
              border: 'none',
              margin: '5px',
              padding: '0.6rem 1.25rem',
              color: 'white',
              borderRadius: '9999px',
              fontWeight: 700,
              fontSize: '14px',
              fontFamily: 'var(--font-ui)',
              cursor: 'pointer',
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
