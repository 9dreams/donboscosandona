import Script from "next/script";

import '/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
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
    </>
  )
}
