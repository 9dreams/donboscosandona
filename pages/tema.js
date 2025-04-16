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
        <meta name='og:image' content='/images/tema.webp' />
      </Head>
      <LandingHero
        opacity={0.3}
        title='SAVED TO SAVE'
        description='Il tema della Proposta Estate Ragazzi 2025'
        imageUrl='/images/tema.webp'
      />
      <Paragraph>
        <p>
          <i>
            “Cos’è questo simbolo sulla mia mano?”
            <br />
            “È il segno che sei un cavaliere di draghi!”
            <br />
            “Il tuo drago ti ha scelto, e ora avete un legame che non si può
            spezzare! La vita dell’uno è legata a quella dell’altra.”
          </i>
        </p>
        <br />
        <p>
          Eragon è un ragazzo semplice, che vive con lo zio e il cugino. In
          mezzo a giorni sempre uguali gli capita fra le mani, dal nulla, un
          uovo, un uovo di drago. È qualcosa di inaspettato che capita nella
          vita di Eragon e lui deve decidere cosa fare: sarà il cavaliere che
          tanti sperano possa salvare Alagaësia o si arrenderà davanti a
          Galbatorix e ad un futuro che sembra impossibile?
        </p>
        <br />
        <p>
          In questa storia colma di tradimenti e di slanci di fiducia, la verità
          molte volte sarà messa in discussione. Eragon sarà in grado di fare la
          scelta giusta ed andare controcorrente? Una cosa è certa! Eragon non
          sarà mai lasciato solo! Sarà salvato tante volte e tante volte salverà
          altri; perché la vera forza sta nella speranza che un aiuto arrivi
          sempre per chi combatte per il bene.
        </p>
        <br />
        <p>
          La Proposta Estate 2025 vuole farci sognare ed ispirare attraverso la
          storia di Eragon, nel primo libro del ciclo dell’eredità per
          riscoprire la forza che viene dalla speranza nel bene!
        </p>
      </Paragraph>
    </Layout>
  )
}
