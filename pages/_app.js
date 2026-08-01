import { ThemeProvider } from 'next-themes'

import GoogleAnalytics from '/components/GoogleAnalytics'
import '/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
