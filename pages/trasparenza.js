import Layout from "../components_emporio/Layout";
import React from "react";
import { FaFilePdf, FaFileWord, FaFileExcel, FaFile, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

const documentList = [
  {
    name: "Bilancio 2024",
    filename: "Bilancio2024EmporioSolidale.pdf",
    type: "pdf",
  },
  {
    name: "Bilancio MOD D 2024",
    filename: "BILANCIOMODD2024EmporioSolidale.pdf",
    type: "pdf",
  },
  {
    name: "Rendiconto Attività 2024",
    filename: "RENDICONTOATTIVITA2024.pdf",
    type: "pdf",
  },
  {
    name: "Rendiconto Finanziario 2024",
    filename: "RENDICONTOFINANZIARIO2024.pdf",
    type: "pdf",
  },
  {
    name: "Raccolta Fondi Non Monetarie 2",
    filename: "Raccoltafondinonmonetarie2.doc",
    type: "word",
  },
  {
    name: "Raccolta Fondi Non Monetarie",
    filename: "Raccoltafondinonmonetarie.doc",
    type: "word",
  },
  {
    name: "RF Monetarie 2",
    filename: "RFmonetarie2.doc",
    type: "word",
  },
  {
    name: "RF Monetarie",
    filename: "RFmonetarie.doc",
    type: "word",
  },
  {
    name: "Relazione di Dimissione Bilancio 2024",
    filename: "Relazionedimissionebilancio2024.docx",
    type: "word",
  },
  {
    name: "Verbale Consiglio Direttivo Bilanci 2024-2025",
    filename: "VerbaleConsigliodirbilanci20242025.docx",
    type: "word",
  },
  {
    name: "Verbale Assemblea Soci Bilanci 2024-2025",
    filename: "Verbaleassembleasocibilanci20242025.docx",
    type: "word",
  },
  {
    name: "Bilancio Preventivo 2025",
    filename: "BilancioPreventivo2025EmporioSolidale.xlsx",
    type: "excel",
  },
  {
    name: "Analisi Bilanci 2016-2019",
    filename: "Analisibilanci20162019.pdf",
    type: "pdf",
  },
  {
    name: "Rendiconto Raccolta Pubblica Fondi",
    filename: "107Rendicontoraccoltapubblicadifondi(1).doc",
    type: "word",
  },
  {
    name: "Bilancio 2021",
    filename: "BILANCIO2021EMPORIOSOLIDALE.pdf",
    type: "pdf",
  },
  {
    name: "Rendiconto Raccolta Pubblica Fondi 2",
    filename: "207Rendicontoraccoltapubblicadifondi.doc",
    type: "word",
  },
  {
    name: "Bilancio 2021 Firmato",
    filename: "home.htm",
    type: "file",
  },
  {
    name: "Rendiconto Raccolta Pubblica Fondi 3",
    filename: "307Rendicontoraccoltapubblicadifondi.doc",
    type: "word",
  },
  {
    name: "Bilancio al 31 Dicembre 2018 (1)",
    filename: "Bilancioal31dicembre2018(1).pdf",
    type: "pdf",
  },
  {
    name: "Rendiconto Raccolta Pubblica Fondi A",
    filename: "A07Rendicontoraccoltapubblicadifondi.doc",
    type: "word",
  },
  {
    name: "Bilancio al 31 Dicembre 2018",
    filename: "Bilancioal31dicembre2018.pdf",
    type: "pdf",
  },
  {
    name: "Rendiconto Raccolta Pubblica Fondi B 2",
    filename: "B07Rendicontoraccoltapubblicadifondi2.doc",
    type: "word",
  },
  {
    name: "Bilancio al 31 Dicembre 2019",
    filename: "Bilancioal31dicembre2019.pdf",
    type: "pdf",
  },
  {
    name: "Bilancio 2023",
    filename: "Bilancio2023EmporioSolidale.pdf",
    type: "pdf",
  },
  {
    name: "Bilancio Analitico 2022",
    filename: "Bilancioanalitico2022EmporioSolidale.pdf",
    type: "pdf",
  },
  {
    name: "Bilancio 2023 MOD D",
    filename: "BILANCIO2023MODDEmporioSolidale.pdf",
    type: "pdf",
  },
  {
    name: "Bilancio Preventivo 2023",
    filename: "BilancioPreventivo2023EmporioSolidale.pdf",
    type: "pdf",
  },
  {
    name: "Bilancio Preventivo 2024",
    filename: "BilancioPreventivo2024EmporioSolidale.xlsx",
    type: "excel",
  },
  {
    name: "Bilancio Finanziario 2020",
    filename: "Emporio-Bilanciofinanziario2020.pdf",
    type: "pdf",
  },
  {
    name: "Relazione di Missione Bilancio 2023 (3)",
    filename: "Relazionedimissionebilancio2023(3).docx",
    type: "word",
  },
  {
    name: "Legge sulla Trasparenza",
    filename: "LeggesullaTrasparenza.pdf",
    type: "pdf",
  },
  {
    name: "Rendiconto Attività 2023",
    filename: "RENDICONTOATTIVITA2023.pdf",
    type: "pdf",
  },
  {
    name: "Relazione 2021 Firmato",
    filename: "RELAZIONE2021FIRMATO.pdf",
    type: "pdf",
  },
  {
    name: "Rendiconto Finanziario 2023",
    filename: "RENDICONTOFINANZIARIO2023.pdf",
    type: "pdf",
  },
  {
    name: "Relazione di Missione Bilancio 2022",
    filename: "relazionedimissionebilancio2022.pdf",
    type: "pdf",
  },
  {
    name: "Trasparenza 2019-2020",
    filename: "Trasparenza2020-2019.pdf",
    type: "pdf",
  },
];

export default function Chisiamo() {
  const getFileIcon = (type) => {
    switch (type) {
      case "pdf":
        return <FaFilePdf size={32} color="#DC382C" />; // Colore rosso per PDF
      case "word":
        return <FaFileWord size={32} color="#2B579A" />; // Colore blu per Word
      case "excel":
        return <FaFileExcel size={32} color="#217346" />; // Colore verde per Excel
      default:
        return <FaFile size={32} color="#6B7280" />; // Colore grigio per altri file
    }
  };

  return (
    <Layout>
      <title>Trasparenza - Emporio Solidale</title>
      <link
        rel="icon"
        type="image/x-icon"
        href="/images/servizi_favicon/favicon.ico"
      />

      <div className="flex flex-col items-center">
        <div className="flex flex-col 2xl:flex-col justify-center items-center text-center w-11/12 md:w-7/12 gap-5 mb-10 mt-32">
          <div className="flex flex-col w-full 2xl:w-8/12">
            <h1 className="font-semibold text-4xl text-gray-800 mb-8 text-center ">
              EMPORIO SOLIDALE
            </h1>
            <h2 className="font-semibold text-3xl  mb-5 text-center text-[#dfb031]">
              Trasparenza
            </h2>
            <p className="font-normal text-md text-gray-800 mb-3">
              Scarica i documenti dell'Emporio per visualizzare l'andamento
              delle nostre attività. La trasparenza e la rendicontazione del
              nostro operato è molto importante per la gestione delle risorse e
              del sostegno che riceviamo.
            </p>
          </div>

          <div className="flex flex-col w-full 2xl:w-6/12">
            <h3 className="font-semibold text-3xl text-gray-800 text-center">
              DOCUMENTI:
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full max-w-7xl px-4 mb-20">
          {documentList.map((doc, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6"
              whileHover={{ y: -5 }}
            >
              <div className="p-4 mb-4 rounded-full bg-gray-200"> {/* Sfondo grigio chiaro */}
                {getFileIcon(doc.type)}
              </div>
              <h1 className="text-lg font-semibold text-gray-800 text-center mb-4">
                {doc.name}
              </h1>
              <a
                className="w-full bg-gradient-to-br from-[#780202] to-[#b31217] text-white font-medium py-3 px-6 rounded-lg hover:from-[#b31217] hover:to-[#780202] transition-all duration-300 flex items-center justify-center space-x-2"
                download
                href={`/docs/${doc.filename}`}
              >
                <FaDownload />
                <span>Scarica Documento</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
