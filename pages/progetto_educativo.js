import Layout from "/components/layout";
import Head from "next/head";
import Container from "@mui/material/Container";

export default function Home({ data }) {
  return (
    <Layout>
      <div className="mt-23">
        <Head />
        <div className="w-full h-[800px] overflow-hidden">
          <img
            src="/images/progetto-educativo.png"
            alt="Progetto"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="p-20 flex flex-col items-center">
        <div className="max-w-7xl w-full">
          <p className="text-2xl text-justify">
            Il Progetto Educativo del CNOS-FAP CFP Don Bosco si propone come
            risposta alle richieste dei genitori e alle esigenze di formazione
            dei giovani di un ampio contesto territoriale. È uno strumento che
            mette in luce l’identità del Centro, una guida che delinea le
            strategie e gli strumenti finalizzati al raggiungimento del successo
            scolastico, un testo che presenta quei valori umani e cristiani nei
            quali la Comunità Educativa si riconosce. Conformemente
            all’insegnamento di don Bosco, offre un disegno di educazione al
            futuro che investe sull’intelligenza (anche quella delle mani) e
            sulle potenzialità di ciascuno.
          </p>
          <a
            href="http://archive.donboscosandona.it/1-identita-del-centro-salesiano"
            className="text-[#0099ff] text-2xl hover:text-blue-600 block mt-10"
          >
            1 Identità del Centro Salesiano
          </a>
        </div>
        <div className="max-w-7xl w-full">
          <a
            href="http://archive.donboscosandona.it/2-i-soggetti"
            className="text-[#0099ff] text-2xl hover:text-blue-600 block mt-10"
          >
            2 I soggetti
          </a>
        </div>
        <div className="max-w-7xl w-full">
          <a
            href="http://archive.donboscosandona.it/3-il-coordinamento"
            className="text-[#0099ff] text-2xl hover:text-blue-600 block mt-10"
          >
            3 Il coordinamento
          </a>
        </div>
        <div className="max-w-7xl w-full">
          <a
            href="http://archive.donboscosandona.it/4-il-patto-educativo"
            className="text-[#0099ff] text-2xl hover:text-blue-600 block mt-10"
          >
            4 Il patto educativo
          </a>
        </div>
        <div className="max-w-7xl w-full">
          <a
            href="http://archive.donboscosandona.it/5-gli-obiettivi"
            className="text-[#0099ff] text-2xl hover:text-blue-600 block mt-10"
          >
            5 Gli obiettivi
          </a>
        </div>
        <div className="max-w-7xl w-full">
          <a
            href="http://archive.donboscosandona.it/6-le-azioni-educative"
            className="text-[#0099ff] text-2xl hover:text-blue-600 block mt-10"
          >
            6 Le azioni educative
          </a>
        </div>
        <div className="max-w-7xl w-full">
          <a
            href="http://archive.donboscosandona.it/7-metodologie-e-strumenti-didattici"
            className="text-[#0099ff] text-2xl hover:text-blue-600 block mt-10"
          >
            7 Metodologie e strumenti didattici
          </a>
        </div>
        <div className="max-w-7xl w-full">
          <a
            href="http://archive.donboscosandona.it/8-il-regolamento"
            className="text-[#0099ff] text-2xl hover:text-blue-600 block mt-10"
          >
            8 Il regolamento
          </a>
        </div>
        <div className="max-w-7xl w-full">
          <a
            href="http://archive.donboscosandona.it/9-attivita-promozionali"
            className="text-[#0099ff] text-2xl hover:text-blue-600 block mt-10"
          >
            9 Attività promozionali
          </a>
        </div>
        <div className="max-w-7xl w-full">
          <a
            href="http://archive.donboscosandona.it/10-valutazione"
            className="text-[#0099ff] text-2xl hover:text-blue-600 block mt-10"
          >
            10 Valutazione
          </a>
        </div>
      </div>
    </Layout>
  );
}
