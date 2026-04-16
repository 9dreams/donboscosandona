import Head from 'next/head'
import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero.js'
import Paragraph from 'components/Paragraph'

export default function Pagina() {
  return (
    <Layout>
      <Head>
        <title>Proposta Estate Ragazzi di San Donà di Piave</title>
        <meta name='og:url' content='https://per.donboscosandona.it/tema' />
        <meta name='og:type' content='website' />
        <meta name='og:locale' content='it_IT' />
        <meta
          name='og:title'
          content='Proposta Estate Ragazzi di San Donà di Piave'
        />
        <meta
          name='og:description'
          content='Il tema della Proposta Estate Ragazzi.'
        />
        <meta name='og:image' content='/images/tema.png' />
      </Head>
      <LandingHero
        opacity={0.3}
        title='SKY WARS'
        description='Il tema della Proposta Estate Ragazzi 2026'
        imageUrl='/images/tema.png'
      />
      <Paragraph>
        <p>
          Il momento di decidere chi sei è adesso!!
          <br />
          Cosa succede se prendi le narrazioni più antiche che l’umanità abbia
          mai conosciuto e le unisci all’universo di Star Wars?
          <br />
          Che ciò che sembra già sentito può tornare sempre nuovo!
        </p>
        <br />
        <p>
          Il “Protagonista” è Ben Gher, un ragazzo come tanti, che vive una vita
          come tante, che, come tutti, fa uno sbaglio e non riesce ad ammettere
          il suo errore! Riusciranno le storie dei suoi antenati, raccontate dal
          padre, a permettergli di capire che i suoi doni sono fatti per essere
          usati per il bene e con umiltà?
        </p>
        <br />
        <p>
          La Proposta Estate 2026 vuole farci sognare ed ispirare
          dall’ambientazione più stellare di sempre e dalle storie più vere che
          siano mai state tramandate.
        </p>
      </Paragraph>
    </Layout>
  )
}
