import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero2.js'
import Paragraph from 'components/Paragraph'

export default function Pagina() {
  return (
    <Layout>
      <LandingHero
        opacity={0.2}
        title="Spazio Genitori"
        description=""
        imageUrl="/images/genitori/genfem.png"
      />
      <Paragraph
        title="Spazio genitori"
        subtitle="L’intento dell’Oratorio Don Bosco è di essere alleati dei genitori nell’educazione dei ragazzi, non sostituti!
        E visto che i nostri cortili non sono un parcheggio per i figli, è bello vedersi ogni tanto durante il periodo della P.E.R. per incontrarci, mettersi al servizio, scambiarci opinioni, ridere e scherzare…
        "
      >
        Ecco gli appuntamenti della P.E.R. dove i genitori sono stra-benvenuti:
        <li>Domenica 18 giugno, ore 9: Santa Messa di Apertura; a seguire incontro per delle comunicazioni in teatro.</li>
        <li>Tutte le serate organizzate!</li>
        <li>L’Oratorio è sempre aperto… venite a rinfrescarvi da noi!</li>	
        <li><strong>Sabato 8 Luglio, ore 15.30: Santa Messa di Ringraziamento al Santuario di Motta di Livenza... e alla fine ANGURIA PER TUTTI!!!</strong></li>

 
Per coloro che volessero regalare un po’ del proprio tempo e dare una mano a Don Bosco durante la P.E.R., non esiti a contattare don Bogdan. A fine maggio una riunione organizzativa!!!

      </Paragraph>
    </Layout>
  )
}
