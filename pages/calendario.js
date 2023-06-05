import Head from "next/head";
import Layout from "/components/Layout";
import LandingHero from "/components/LandingHero2.js";
import Paragraph from "components/Paragraph";
import Calendar from "/components/Calendar.js";

export default function Pagina() {
  return (
    <Layout>
      <Head>
        <title>Proposta Estate Ragazzi di San Donà di Piave</title>
        <meta
          name="og:url"
          content="https://per.donboscosandona.it/calendario"
        />
        <meta name="og:type" content="website" />
        <meta name="og:locale" content="it_IT" />
        <meta
          name="og:title"
          content="Proposta Estate Ragazzi di San Donà di Piave"
        />
        <meta
          name="og:description"
          content="Il calendario dettagliato delle giornate e delle serate."
        />
        <meta name="og:image" content="/images/calendario.png" />
      </Head>
      <LandingHero
        opacity={0.0}
        title="Calendario"
        description="Il calendario dettagliato delle giornate e delle serate."
        imageUrl="/images/calendario.png"
      />
      <Calendar cardWidth={4} events={settimana0} />
      <Calendar title="Prima settimana" cardWidth={3} events={settimana1} />
      <Calendar title="Seconda settimana" cardWidth={3} events={settimana2} />
      <Calendar title="Terza settimana" cardWidth={3} events={settimana3} />
      <Calendar title="Quarta settimana" cardWidth={3} events={settimana4} />
    </Layout>
  );
}

let settimana0 = [
  {
    date: "Giovedì 15 Giugno",
    morning: "Inizio elementari",
    afternoon: "Inizio medie",
    immagineUrl: "/images/calendario/inizio.png",
  },
  {
    date: "Venerdì 16 Giugno",
    morning: "Inizio attività",
    afternoon: "Presentazione squadre e grande gioco",
    immagineUrl: "/images/calendario/inizio2.png",
  },
  {
    date: "Domenica 18 Giugno",
    morning:
      "Messa di apertura, incontro con i genitori, giochi e pranzo al sacco",
    immagineUrl: "/images/calendario/messa.png",
  },
];

let settimana1 = [
  {
    date: "Lunedì 19 Giugno",
    morning: "Attività regolare",
    afternoon: "Giochi al parco e tornei",
    evening: "ore 20.45 Film TRANSFORMERS - IL RISVEGLIO 3D",
    immagineUrl: "/images/calendario/transformers.png",
  },
  {
    date: "Martedì 20 Giugno",
    morning: "Attività regolare",
    afternoon: "Giochi al parco e tornei",
    evening: "Oratorio's Got Talent",
    immagineUrl: "/images/calendario/talent.png",
  },
  {
    date: "Mercoledì 21 Giugno",
    morning: "Attività regolare",
    afternoon: "Pit Stop animatori",
    evening: "Tornei animatori",
    immagineUrl: "/images/calendario/animatori.png",
  },
  {
    date: "Giovedì 22 Giugno",
    morning: "Gita a Noale",
    afternoon: "Gita a Noale",
    immagineUrl: "/images/calendario/noale.png",
  },
  {
    date: "Venerdì 23 Giugno",
    morning: "Attività regolare",
    afternoon: "Ospite DEKRU",
    evening: "Spettacolo DEKRU",
    immagineUrl: "/images/calendario/dekru.png",
  },
  {
    date: "Sabato 24 Giugno",
    morning: "Gita animatori",
    immagineUrl: "/images/calendario/gita_animatori.png",
  },
];

let settimana2 = [
  {
    date: "Lunedì 26 Giugno",
    morning: "Attività regolare",
    afternoon: "Quinta elementare e prima media al mare",
    evening: "ore 20.45 Film THE FLASH",
    immagineUrl: "/images/calendario/flash.png",
  },
  {
    date: "Martedì 27 Giugno",
    morning: "Gita in montagna: VALLE DEL GARES",
    afternoon: "Gita in montagna: VALLE DEL GARES",
    immagineUrl: "/images/calendario/gares.png",
  },
  {
    date: "Mercoledì 28 Giugno",
    morning: "Attività regolare",
    afternoon: "Pit Stop animatori",
    evening: "Tornei animatori",
    immagineUrl: "/images/calendario/animatori.png",
  },
  {
    date: "Giovedì 29 Giugno",
    morning: "Attività regolare",
    afternoon: "Giochi al parco e tornei",
    immagineUrl: "/images/calendario/regolare.png",
  },
  {
    date: "Venerdì 30 Giugno",
    morning: "Attività regolare",
    afternoon: "Seconda e terza media al mare",
    evening: "Spettacolo DUNK ITALY SHOW",
    immagineUrl: "/images/calendario/dunk.png",
  },
];

let settimana3 = [
  {
    date: "Lunedì 3 Luglio",
    morning: "Cambio attività",
    afternoon: "Terza e quarta elementare al mare",
    evening: "ore 20.45 Film ELEMENTAL 3D",
    immagineUrl: "/images/calendario/elemental.png",
  },
  {
    date: "Martedì 4 Luglio",
    morning: "Gita al PARCO SIGURTA'",
    afternoon: "Gita al PARCO SIGURTA'",
    immagineUrl: "/images/calendario/sigurtà.png",
  },
  {
    date: "Mercoledì 5 Luglio",
    morning: "Attività regolare",
    afternoon: "Pit Stop animatori",
    evening: "Tornei animatori",
    immagineUrl: "/images/calendario/animatori.png",
  },
  {
    date: "Giovedì 6 Luglio",
    morning: "Attività regolare",
    afternoon: "Giochi al parco e tornei",
    evening: "Sfilata a squadre e giochi a stand con i genitori",
    immagineUrl: "/images/calendario/sfilata.png",
  },
  {
    date: "Venerdì 7 Luglio",
    morning: "Attività regolare",
    afternoon: "Giochi al parco e tornei",
    evening: "Pellegrinaggio notturno terze medie",
    immagineUrl: "/images/calendario/regolare.png",
  },
  {
    date: "Sabato 8 Luglio",
    morning: "Pellegrinaggio",
    immagineUrl: "/images/calendario/pellegrinaggio.png",
  },
];

let settimana4 = [
  {
    date: "Lunedì 10 Luglio",
    morning: "Attività regolare",
    afternoon: "Giochi al parco e tornei",
    evening: "ore 20.45 Film INDIANA JONES E IL QUADRANTE DEL DESTINO 3D",
    immagineUrl: "/images/calendario/indiana.png",
  },
  {
    date: "Martedì 11 Luglio",
    morning: "Gita a Noale",
    afternoon: "Gita a Noale",
    immagineUrl: "/images/calendario/noale.png",
  },
  {
    date: "Mercoledì 12 Luglio",
    morning: "Attività regolare",
    afternoon: "Pit Stop animatori",
    evening: "Tornei animatori",
    immagineUrl: "/images/calendario/animatori.png",
  },
  {
    date: "Giovedì 13 Luglio",
    morning: "Gita terze medie",
    afternoon: "Giochi al parco e tornei",
    immagineUrl: "/images/calendario/regolare.png",
  },
  {
    date: "Venerdì 14 Luglio",
    morning: "Attività regolare",
    afternoon: "Giochi al parco e tornei",
    evening: "SERATA FINALE",
    immagineUrl: "/images/calendario/finale.png",
  },
  {
    date: "Lunedì 17 Luglio",
    evening: "ore 20.45 Film MISSION IMPOSSIBLE - DEAD RECKONING",
    immagineUrl: "/images/calendario/mission.png",
  },
];
