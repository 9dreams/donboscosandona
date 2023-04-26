import Layout from "/components/Layout";
import LandingHero from "/components/LandingHero2.js";
import Paragraph from "components/Paragraph";
import Calendar from "/components/Calendar.js";

let settimana1 = [
  {
    title: "15 GIUGNO",
    description: "Ini",
    immagineUrl:
      "http://www.inoratorio.it/img/column/f9de1e15784a9947c6263f665621c07723d13098.jpg?1651928152",
  },
];

export default function Pagina() {
  return (
    <Layout>
      <LandingHero
        opacity={0.2}
        title="Calendario"
        imageUrl="/images/calendario.png"
      />
      <Calendar cardWidth={3} events={settimana0} />
    </Layout>
  );
}

let settimana0 = [
  {
    date: "15 Giugno",
    morning: "Inizio elementari",
    afternoon: "Inizio medie",
    evening: "Serata film",
    immagineUrl:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    url: "/elettrico",
  },
];
