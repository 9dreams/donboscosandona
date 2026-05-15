import Script from "next/script";
import { ThemeProvider } from 'next-themes'

import '/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Script
        strategy='lazyOnload'
        src='https://www.googletagmanager.com/gtag/js?id=G-GDJJYGVN8F'
      />
      <Script strategy='lazyOnload'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-GDJJYGVN8F');
        `}
      </Script>

      <Component {...pageProps} />
    </ThemeProvider>
  )
}
