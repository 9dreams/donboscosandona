import Head from 'next/head'
import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero.js'
import Paragraph from 'components/Paragraph'

export default function Pagina() {
  return (
    <Layout>
      <Head>
        <title>Proposta Estate Ragazzi di San Donà di Piave</title>
        <meta name='og:url' content='https://per.donboscosandona.it/dlc' />
        <meta name='og:type' content='website' />
        <meta name='og:locale' content='it_IT' />
        <meta
          name='og:title'
          content='Proposta Estate Ragazzi di San Donà di Piave'
        />
        <meta
          name='og:description'
          content="Dopo la campanella: il dopo-scuola dell'Oratorio don Bosco."
        />
        <meta name='og:image' content='/images/dlc.png' />
      </Head>
      <LandingHero
        opacity={0.2}
        title="Scuola d'Estate? Sì grazie!"
        imageUrl='/images/dlc.png'
      />
      <Paragraph title='' subtitle=''>
        <p>
          Cari genitori e ragazzi,
          <br />
          <br />
          Grazie al prezioso contributo del Comune di San Donà di Piave e del
          comune di Musile di Piave, siamo felici di annunciare la possibilità
          di partecipare al "DOPO LA CAMPANELLA" in versione estiva! "Scuola
          d’estate? Sì, grazie!", un'opportunità unica per combinare studio e
          divertimento durante le vacanze.
          <br />
          <br />
          Dal 14 luglio al 31 luglio 2025, dal lunedì al giovedì, potrete
          dedicarvi ai compiti estivi con il supporto qualificato dei nostri
          operatori, dei salesiani e dei giovani animatori della Proposta
          Estate. Questa iniziativa è aperta a tutti i ragazzi dalla seconda
          elementare alla terza media.
          <br />
          <br />
          Il "DOPO LA CAMPANELLA" mantiene la sua formula collaudata: alterniamo
          momenti di studio concentrato a vivaci attività di gioco all'aperto.
          Questo approccio, ispirato al carisma salesiano di Don Bosco,
          valorizza l'importanza della ricreazione tanto quanto l'impegno nello
          studio. Crediamo che il cortile sia il luogo ideale per stringere
          nuove amicizie, mentre le aule offrono un ambiente stimolante per
          crescere come buoni cristiani e onesti cittadini.
          <br />
          <br />
          Se le condizioni lo permetteranno e si presenterà l’occasione, un
          giovedì sarà dedicato a una divertente gita in un parco acquatico!
          <br />
          <br />
          Programma Giornaliero:
          <br />
          09:00: Accoglienza
          <br />
          09:30: Prima ora di compiti
          <br />
          10:30: Intervallo e giochi in cortile
          <br />
          11:00: Seconda ora di compiti
          <br />
          12:00: Pausa pranzo
          <br />
          14:30: Riapertura dell'oratorio e ritrovo
          <br />
          Medie: <br />
          15:00: Terza ora di compiti
          <br />
          15:45: Intervallo e giochi
          <br />
          16:15: quarta ora di compiti
          <br />
          Elementari: <br />
          15:00: terza ora di compiti
          <br />
          16:00: giochi organizzati.
          <br />
          17:00: Fine delle attività
          <br />
        </p>
      </Paragraph>
      <Paragraph title='Iscrizioni'>
        Iscrizioni a partire dal 23 giugno, secondo il calendario e l’orario che
        trovate al link del sito http://www.inoratorio.it/dlc o presso l’ufficio
        Tutor della Scuola di Formazione Professionale (tranne i giorni di
        uscite della P.E.R. e i weekend).
        <br />Per informazioni, contattare Andrea Pasqualetto (3917064430 / 0421
        338992).
      </Paragraph>
    </Layout>
  )
}
