import Head from 'next/head'
import Link from 'next/link'

import styles from './layout.module.css'

export const siteTitle = 'CFP CNOS-FAP DON BOSCO - San Donà di Piave';

export default function Layout({ children }) {
    return (
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
            <header>

            </header>
            <main>
                {children}
                <Link href="/">Torna alla Home</Link>
            </main>
            <footer>
                
            </footer>
        </div>
    )
}