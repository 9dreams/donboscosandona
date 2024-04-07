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
          Ciao ragazzi, grazie al contributo del Comune, anche quest’anno dopo
          la Proposta Estate continueremo l’attività: “Scuola d’estate?
          Si,grazie!”. Da lunedì 17 luglio a giovedì 3 agosto 2023, per tutti i
          ragazzi dal secondo anno della scuola primaria al terzo anno della
          scuola secondaria ci sarà la possibilità di svolgere i compiti delle
          vacanze con il supporto dei nostri operatori, ma non solo!
        </p>
        <p>
          {" "}
          Lo studio si alternerà a momenti di svago, gioco e allegria così tutto
          diventerà più interessante e piacevole.{" "}
        </p>
        <p>
          Ci saranno i nostri operatori pronti ad aiutarvi, coadiuvati da alcuni
          giovani animatori della Proposta Estate e dai salesiani del nostro
          oratorio. Studieremo, giocheremo, ci divertiremo insieme nel vero
          spirito salesiano!
        </p>
        <p>
          {" "}
          L’attività si svolgerà dal lunedì al giovedì, secondo gli orari
          indicati nel calendario ed un giovedì sarà dedicato all’uscita presso
          un parco acquatico. E’ una proposta che da anni offre l’Oratorio Don
          Bosco e che viene accolta sempre con grande entusiasmo … non puoi
          mancare proprio tu!
        </p>
        Orario della giornata tipo:
        <p>
          <li>09:00 Accoglienza</li>
          <li>09:30 1^ ora di compiti</li>
          <li>10:30 Intervallo con attività ludico-ricreative</li>
          <li>11:00 2^ ora di compiti</li>
          <li>12:00 Tutti a casa per il pranzo</li>
          <li>14:30 Riapertura cortili per tutti</li>
          <br />
          <li>
            <b>Medie:</b>{" "}
          </li>
          <li>alle 15:00 3^ ora di compiti</li>
          <li>15:45 Intervallo con attività ludico-ricreative</li>
          <li>16:15 4^ ora di compiti</li>
          <br />
          <li>
            <b>Elementari:</b>
          </li>
          <li>15:00 3^ ora di compiti</li>
          <li>16:00 Attività ludico-ricreative con giochi organizzati</li>
          <br />
          <li>17:00 Arrivederci a domani per tutti</li>
        </p>
      </Paragraph>
      <Paragraph title="Iscrizioni">
        Iscrizioni a partire dal 26 giugno, secondo il calendario e l’orario che
        trovate nel link presente nel sito http://www.inoratorio.it/dlc (tranne
        i giorni di uscita della PER e week-end) presso l’ufficio Tutor del
        Centro di Formazione Professionale: Andrea Pasqualetto (391 706 4430
        oppure 0421 338 992)
      </Paragraph>
    </Layout>
  );
}
