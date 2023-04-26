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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFeL47LAIOeLKCMEqewapB5ShAA1uOZUjHXA&usqp=CAU",
    category: "1ªora medie / 2ªora medie",
  },
  {
    title: "SCACCHI",
    description: "Impara a giocare a scacchi e sfida i tuio amici",
    immagineUrl:
      "https://www.laleggepertutti.it/cl_resize/EzOEyVJT6a-wnLFgZF7m2-BJeYG-Pd63Rxzb6l576TQ/rs:fill:500:0/g:ce/q:70/aHR0cHM6Ly93d3cubGFsZWdnZXBlcnR1dHRpLml0L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzEwL1NjYWNjaGktcmVnb2xlLXN0cmF0ZWdpYS5qcGc",
    category: "1ªora medie / 2ªora elementari",
  },
  {
    title: "SARTORIA",
    description: "I bottoni e gli orli non saranno più un problema",
    immagineUrl:
      "https://ladyabbigliamento.it/wp-content/uploads/2021/07/lady-abbigliamento-sartoria.jpg",
    category: "1ªora medie / 2ªora elementari",
  },
  {
    title: "HOTELLERIE",
    description:
      "Piccole regole per dei servizi impeccabili a tavola, nel riordino delle stanze e nell'accoglienza",
    immagineUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzACSbigXO6FokzmpuRQbikVaR6V9CiK3erQ&usqp=CAU",
    category: "1ªora medie / 2ªora elementari",
  },
  {
    title: "TRAFORO",
    description: "L'intaglio del legno per dei lavori indimenticabili",
    immagineUrl:
      "https://crea.hobbyland.eu/wp-content/uploads/2021/07/Copertina-intaglio-Small-1024x683.png",
    category: "1ªora medie / 2ªora elementari",
  },
  {
    title: "IMBIANCHINO",
    description: "Colore, pennello e non solo!",
    immagineUrl:
      "https://www.lucasimonettodecorazioni.it/images/articoli/imbianchino.jpg",
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
