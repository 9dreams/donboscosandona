import Layout from "/components/Layout";
import LandingHero from "/components/LandingHero2.js";
import Paragraph from "components/Paragraph";
import Calendar from "/components/Calendar.js";

export default function Pagina() {
  return (
    <Layout>
      <LandingHero
        opacity={0.0}
        title="Calendario"
        imageUrl="/images/calendario.png"
      />
      <Calendar cardWidth={3} events={settimana0} />
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
    immagineUrl: "",
  },
  {
    date: "Venerdì 16 Giugno",
    morning: "Inizio attività",
    afternoon: "Presentazione squadre e grande gioco",
    immagineUrl: "",
  },
  {
    date: "Domenica 18 Giugno",
    morning: "Messa di apertura, incontro con i genitori, giochi e pranzo al sacco",
    immagineUrl: "",
  },
];

let settimana1 = [
  {
    date: "Lunedì 19 Giugno",
    morning: "Attività regolare",
    afternoon: "Giochi al parco e tornei",
    evening: "Al Cinema",
    immagineUrl: "",
  },
  {
    date: "Martedì 20 Giugno",
    morning: "Attività regolare",
    afternoon: "Giochi al parco e tornei",
    evening: "Oratorio's Got Talent",
    immagineUrl: "",
  },
  {
    date: "Mercoledì 21 Giugno",
    morning: "Attività regolare",
    afternoon: "Pit Stop animatori",
    evening: "Tornei animatori",
    immagineUrl: "",
  },
  {
    date: "Giovedì 22 Giugno",
    morning: "Gita a Noale",
    afternoon: "Gita a Noale",
    immagineUrl: "",
  },
  {
    date: "Venerdì 23 Giugno",
    morning: "Attività regolare",
    afternoon: "Ospite DEKRU",
    evening: "Spettacolo DEKRU",
    immagineUrl: "",
  },
  {
    date: "Sabato 24 Giugno",
    morning: "Gita animatori",
    immagineUrl: "",
  },
];

let settimana2 = [
  {
    date: "Lunedì 26 Giugno",
    morning: "Attività regolare",
    afternoon: "Quinta elementare e prima media al mare",
    evening: "Al Cinema",
    immagineUrl: "",
  },
  {
    date: "Martedì 27 Giugno",
    morning: "Gita in montagna: VALLE DEL GARES",
    afternoon: "Gita in montagna: VALLE DEL GARES",
    immagineUrl: "",
  },
  {
    date: "Mercoledì 28 Giugno",
    morning: "Attività regolare",
    afternoon: "Pit Stop animatori",
    evening: "Tornei animatori",
    immagineUrl: "",
  },
  {
    date: "Giovedì 29 Giugno",
    morning: "Attività regolare",
    afternoon: "Giochi al parco e tornei",
    immagineUrl: "",
  },
  {
    date: "Venerdì 30 Giugno",
    morning: "Attività regolare",
    afternoon: "Seconda e terza media al mare",
    evening: "Spettacolo DUNK ITALY SHOW",
    immagineUrl: "",
  },
];

let settimana3 = [
  {
    date: "Lunedì 3 Luglio",
    morning: "Cambio attività",
    afternoon: "Terza e quarta elementare al mare",
    evening: "Al Cinema",
    immagineUrl: "",
  },
  {
    date: "Martedì 4 Luglio",
    morning: "Gita al PARCO SIGURTA'",
    afternoon: "Gita al PARCO SIGURTA'",
    immagineUrl: "",
  },
  {
    date: "Mercoledì 5 Luglio",
    morning: "Attività regolare",
    afternoon: "Pit Stop animatori",
    evening: "Tornei animatori",
    immagineUrl: "",
  },
  {
    date: "Giovedì 6 Luglio",
    morning: "Attività regolare",
    afternoon: "Giochi al parco e tornei",
    evening: "Sfilata a squadre e giochi a stand con i genitori",
    immagineUrl: "",
  },
  {
    date: "Venerdì 7 Luglio",
    morning: "Attività regolare",
    afternoon: "Giochi al parco e tornei",
    evening: "Pellegrinaggio notturno terze medie",
    immagineUrl: "",
  },
  {
    date: "Sabato 8 Luglio",
    morning: "Pellegrinaggio",
    immagineUrl: "",
  },
];

let settimana4 = [
  {
    date: "Lunedì 10 Luglio",
    morning: "Attività regolare",
    afternoon: "Quinta elementare e prima media al mare",
    evening: "Al Cinema",
    immagineUrl: "",
  },
  {
    date: "Martedì 11 Luglio",
    morning: "Gita a Noale",
    afternoon: "Gita a Noale",
    immagineUrl: "",
  },
  {
    date: "Mercoledì 12 Luglio",
    morning: "Attività regolare",
    afternoon: "Pit Stop animatori",
    evening: "Tornei animatori",
    immagineUrl: "",
  },
  {
    date: "Giovedì 13 Luglio",
    morning: "Gita terze medie",
    afternoon: "Giochi al parco e tornei",
    immagineUrl: "",
  },
  {
    date: "Venerdì 14 Luglio",
    morning: "Attività regolare",
    afternoon: "Giochi al parco e tornei",
    evening: "SERATA FINALE",
    immagineUrl: "",
  },
  {
    date: "Lunedì 17 Luglio",
    evening: "Al Cinema",
    immagineUrl: "",
  },
];