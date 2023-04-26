import Layout from "/components/Layout";
import LandingHero from "/components/LandingHero2.js";
import Paragraph from "components/Paragraph";
import Products from "@/components/Products";

let laboratori = [
  {
    title: "PRESEPISTA",
    description:
      "Crea la tua capanna per il presepe, impara l'arte del presepista",
    immagineUrl:
      "/images/laboratori/presepista.jpeg",
    category: "1ªora medie / 2ªora medie",
  },
  {
    title: "SCACCHI",
    description: "Impara a giocare a scacchi e sfida i tuio amici",
    immagineUrl:
      "/images/laboratori/scacchi.jpeg",
    category: "1ªora medie / 2ªora elementari",
  },
  {
    title: "SARTORIA",
    description: "I bottoni e gli orli non saranno più un problema",
    immagineUrl:
      "/images/laboratori/sartoria.jpeg",
    category: "1ªora medie / 2ªora elementari",
  },
  {
    title: "HOTELLERIE",
    description:
      "Piccole regole per dei servizi impeccabili a tavola, nel riordino delle stanze e nell'accoglienza",
    immagineUrl:
      "/images/laboratori/hotellerie.jpeg",
    category: "1ªora medie / 2ªora elementari",
  },
  {
    title: "TRAFORO",
    description: "L'intaglio del legno per dei lavori indimenticabili",
    immagineUrl:
      "/images/laboratori/traforo.png",
    category: "1ªora medie / 2ªora elementari",
  },
  {
    title: "IMBIANCHINO",
    description: "Colore, pennello e non solo!",
    immagineUrl:
      "/images/laboratori/imbianchino.jpeg",
    category: "1ªora medie / 2ªora elementari",
  },
];

export default function Pagina() {
  return (
    <Layout>
      <LandingHero
        opacity={0.2}
        title="I nuovi laboratori"
        description="In questa pagina parleremo dei nuovi laboratori della proposta estate 2023."
        imageUrl="/images/novità.png"
      />
      <Products
        title="Novità 2023"
        description="Ecco i laboratori che verranno aggiunti quest'anno"
        cardWidth={4}
        products={laboratori}
        cardHeigth={4}
      />
    </Layout>
  );
}
