import Calendar from "../components_emporio/Calendar";
import LandingHero from "../components_emporio/LandingHero";
import Layout from "../components_emporio/Layout";
import News from "../components_emporio/News";
import Download from "../components_emporio/Download";
import Anziani from "../components_emporio/Anziani";
import Collab from "../components_emporio/Collab";
import Featured from "../components/Featured";

export default function Home({ data }) {
  const date = [
    {
      date: "15 Giugno",
      afternoon: "Inizio medie",
      evening: "Serata film",
      immagineUrl:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      url: "/elettrico",
    },
    {
      date: "15 Giugno",
      morning: "Inizio elementari",
      afternoon: "Inizio medie",
      evening: "Serata film",
      immagineUrl:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      url: "/elettrico",
      bgColor: "#ee5253",
    },
  ];

  return (
    <Layout>
      <LandingHero
        opacity={0.5}
        title="Emporio Solidale Basso Piave"
        description="Scopri un mondo  "
        imageUrl="images/landing.jpg"
      />
      <Featured data={data} limit={4} defaultTag="scuola" />

      {/* Aggiunto padding e sfondo per testare Tailwind */}
      <div className="bg-gray-100 py-10">
        <Calendar
          title="Avvisi Importanti"
          description="Scopri tutti gli avvisi"
          cardWidth={3}
          events={date}
        />
        <News title="News" data={data} limit={6} />

        {/* Contenitore con maggiore padding per evitare sovrapposizioni */}
        <div className="relative z-10 mt-12">
          <Anziani />
        </div>

        <Collab />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  let res = await fetch(
    "https://channels.donboscosandona.it/api/posts/inoratorio"
  );
  const data = await res.json();

  return {
    props: { data },
    revalidate: 1800, // Rigenera la pagina ogni 30 minuti
  };
}
