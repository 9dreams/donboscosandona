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
        title='Re-Creation'
        description='From law to love'
        imageUrl='/images/tema.png'
      />
      <Paragraph title='Un’altra storia fantasy?'>
        <p>
          <i>
            Ma questa non è solo una storia come tante altre! Come no? Vuoi
            dirmi che si può andare in altri mondi attraverso anelli o armadi!
            Forse no, hai ragione! Ma forse il nostro mondo è più di ciò che
            sembra!
          </i>
        </p>
        <p>
          Digory, Polly, Peter, Susan, Edmund, Lucy e chissà quanti altri
          ragazzi come loro hanno delle storie incredibili da raccontare… Cosa
          le accomuna? Il mondo di Narnia, la strega Jadis e Aslan. Chissà cosa
          avranno a che vedere tutte queste cose??? Beh, non ci resta che venire
          alla PER e scoprirlo!
        </p>
        <p>Il mondo di Narnia è un mondo fantastico, pieno di fauni, centauri, minotauri, animali che parlano, e per quanto code, corna e pellicce possano essere diverse da noi, poi i cuori e le menti sono gli stessi e devono sempre trovare una strada in mezzo alle complicate vicende che la vita li porta ad affrontare. Sarà il leone Aslan a vincere la battaglia o la perfida Strega Bianca?</p>
        <p>La Proposta Estate 2024 vuole farci sognare ed ispirare attraverso i racconti delle Cronache di Narnia per riscoprire la bellezza di una vita piena di gioia!  </p>
      </Paragraph>
    </Layout>
  )
}
