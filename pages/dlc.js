import Head from "next/head";
import Layout from "/components/Layout";
import LandingHero from "/components/LandingHero.js";
import Paragraph from "components/Paragraph";

export default function Pagina() {
  return (
    <Layout>
      <Head>
        <title>Proposta Estate Ragazzi di San Donà di Piave</title>
        <meta
          name="og:url"
          content="https://per.donboscosandona.it/dlc"
        />
        <meta name="og:type" content="website" />
        <meta name="og:locale" content="it_IT" />
        <meta
          name="og:title"
          content="Proposta Estate Ragazzi di San Donà di Piave"
        />
        <meta
          name="og:description"
          content="Dopo la campanella: il dopo-scuola dell'Oratorio don Bosco."
        />
        <meta name="og:image" content="/images/dlc.png" />
      </Head>
      <LandingHero
        opacity={0.2}
        title="Scuola d'Estate? Sì grazie!"
        imageUrl="/images/dlc.png"
      />
      <Paragraph title="" subtitle="">
        <p>
        Cari ragazzi,
 
 con il contributo del Comune di San Dona’ di Piave, anche quest’anno – dopo il mese della Proposta Estate – riprenderanno le attività del Dopo La Campanella «Scuola d’estate? Si, grazie!».
        </p>
        <p>
        Da lunedì 15 luglio a giovedì 1 agosto 2024, avrete l’opportunità di svolgere i compiti per le vacanze con l’affiancamento dei nostri operatori, dei salesiani e di alcuni giovani animatori della Proposta Estate! L’invito è rivolto a tutti i ragazzi dal secondo anno della scuola primaria al terzo anno della scuola secondaria di I grado!
        </p>
        <p>
        Il nostro doposcuola alterna da sempre lo studio ai momenti di gioco in cortile! È questa la forza del carisma salesiano!! Secondo Don Bosco, infatti, la ricreazione è importante tanto quanto i compiti e l’impegno nello studio: dal cortile nascono le amicizie più belle, mentre nelle aule – studiando e imparando – ci si forma come buoni cristiani e onesti cittadini! E poi… è estate!! Una partita a calcio, a basket, a pallavolo o a ping-pong aiuterà sicuramente a rendere l’esperienza più piacevole e interessante!!!
        </p>
        <p>
          {" "}
          Ma non finisce qui! Dal lunedì al giovedì l’attività si svolgerà secondo gli orari indicati da calendario, ma un giovedì sarà dedicato all’uscita presso un parco acquatico…un po’ di sana spensieratezza, giusto per non soffrire troppo il caldo e per passare una giornata in compagnia!!
        </p>
        <p>CHE ASPETTI? NON PUOI MANCARE!</p>
        Orari della giornata:
        <p>
          <li>09:00 Accoglienza</li>
          <li>09:30 1^ ora di compiti</li>
          <li>10:30 Intervallo e giochi in cortile</li>
          <li>11:00 2^ ora di compiti</li>
          <li>12:00 Tutti a casa per il pranzo</li>
          <li>14:30 Riapertura cortili per tutti</li>
          <br />
          <li>
            <b>Medie:</b>{" "}
          </li>
          <li>15:00 3^ ora di compiti</li>
          <li>15:45 Intervallo e giochi in cortile</li>
          <li>16:15 4^ ora di compiti</li>
          <br />
          <li>
            <b>Elementari:</b>
          </li>
          <li>15:00 3^ ora di compiti</li>
          <li>16:00 Giochi organizzati in cortile</li>
          <br />
          <li>17:00 Arrivederci a domani per tutti</li>
        </p>
      </Paragraph>
      <Paragraph title="Iscrizioni">
      Iscrizioni a partire dal 24 giugno, secondo il calendario e l’orario che trovate al link del sito http://www.inoratorio.it/dlc o presso l’ufficio Tutor della Scuola di Formazione Professionale (tranne i giorni di uscite della P.E.R. e i weekend): Andrea Pasqualetto (3917064430 / 0421 338992).
      </Paragraph>
    </Layout>
  );
}
