import Layout from "../components_emporio/Layout";
import React from "react";

export default function Chisiamo() {
  return (
    <Layout>
    <title>Trasparenza - Emporio Solidale</title>
    <link rel="icon" type="image/x-icon" href="/images/servizi_favicon/favicon.ico" />

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

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 md:w-7/12  gap-5 items-center mb-20">
          <div class="flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full">
            <h1 class="text-md text-center mb-3">
              Bilancio2024EmporioSolidale.pdf
            </h1>
            <a
              class="bg-[#8f1d1d] p-3 rounded-2xl text-center text-white hover:text-[#C7AE6A] shadow-lg w-10/12"
              download
              href="/docs/Bilancio2024EmporioSolidale.pdf"
            >
              SCARICA QUI IL DOCUMENTO
            </a>
          </div>
          <div class="flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full">
            <h1 class="text-md text-center mb-3">
              BILANCIOMODD2024EmporioSolidale.pdf
            </h1>
            <a
              class="bg-[#8f1d1d] p-3 rounded-2xl text-center text-white hover:text-[#C7AE6A] shadow-lg w-10/12"
              download
              href="/docs/BILANCIOMODD2024EmporioSolidale.pdf"
            >
              SCARICA QUI IL DOCUMENTO
            </a>
          </div>
          <div class="flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full">
            <h1 class="text-md text-center mb-3">
              RENDICONTOATTIVITA2024.pdf
            </h1>
            <a
              class="bg-[#8f1d1d] p-3 text-center rounded-2xl text-white hover:text-[#C7AE6A] shadow-lg w-10/12"
              download
              href="/docs/RENDICONTOATTIVITA2024.pdf"
            >
              SCARICA QUI IL DOCUMENTO
            </a>
          </div>
          <div class="flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full">
            <h1 class="text-md text-center mb-3">
              RENDICONTOFINANZIARIO2024.pdf
            </h1>
            <a
              class="bg-[#8f1d1d] p-3 text-center rounded-2xl text-white hover:text-[#C7AE6A] shadow-lg w-10/12"
              download
              href="/docs/RENDICONTOFINANZIARIO2024.pdf"
            >
              SCARICA QUI IL DOCUMENTO
            </a>
          </div>
          <div class="flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full">
            <h1 class="text-md text-center mb-3">
              Raccoltafondinonmonetarie2.doc
            </h1>
            <a
              class="bg-[#8f1d1d] p-3 text-center rounded-2xl text-white hover:text-[#C7AE6A] shadow-lg w-10/12"
              download
              href="/docs/Raccoltafondinonmonetarie2.doc"
            >
              SCARICA QUI IL DOCUMENTO
            </a>
          </div>
          <div class="flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full">
            <h1 class="text-md text-center mb-3">
              Raccoltafondinonmonetarie.doc
            </h1>
            <a
              class="bg-[#8f1d1d] p-3 text-center rounded-2xl text-white hover:text-[#C7AE6A] shadow-lg w-10/12"
              download
              href="/docs/Raccoltafondinonmonetarie.doc"
            >
              SCARICA QUI IL DOCUMENTO
            </a>
          </div>
          <div class="flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full">
            <h1 class="text-md text-center mb-3">RFmonetarie2.doc</h1>
            <a
              class="bg-[#8f1d1d] p-3 text-center rounded-2xl text-white hover:text-[#C7AE6A] shadow-lg w-10/12"
              download
              href="/docs/RFmonetarie2.doc"
            >
              SCARICA QUI IL DOCUMENTO
            </a>
          </div>
          <div class="flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full">
            <h1 class="text-md text-center mb-3">RFmonetarie.doc</h1>
            <a
              class="bg-[#8f1d1d] p-3 text-center rounded-2xl text-white hover:text-[#C7AE6A] shadow-lg w-10/12"
              download
              href="/docs/RFmonetarie.doc"
            >
              SCARICA QUI IL DOCUMENTO
            </a>
          </div>
          <div class="flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full">
            <h1 class="text-md text-center mb-3">
              Relazionedimissionebilancio2024.docx
            </h1>
            <a
              class="bg-[#8f1d1d] p-3 text-center rounded-2xl text-white hover:text-[#C7AE6A] shadow-lg w-10/12"
              download
              href="/docs/Relazionedimissionebilancio2024.docx"
            >
              SCARICA QUI IL DOCUMENTO
            </a>
          </div>
          <div class="flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full">
            <h1 class="text-md text-center mb-3">
              VerbaleConsigliodirbilanci20242025.docx
            </h1>
            <a
              class="bg-[#8f1d1d] p-3 text-center rounded-2xl text-white hover:text-[#C7AE6A] shadow-lg w-10/12"
              download
              href="/docs/VerbaleConsigliodirbilanci20242025.docx"
            >
              SCARICA QUI IL DOCUMENTO
            </a>
          </div>
          <div class="flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full">
            <h1 class="text-md text-center mb-3">
              Verbaleassembleasocibilanci20242025.docx
            </h1>
            <a
              class="bg-[#8f1d1d] p-3 text-center rounded-2xl text-white hover:text-[#C7AE6A] shadow-lg w-10/12"
              download
              href="/docs/Verbaleassembleasocibilanci20242025.docx"
            >
              SCARICA QUI IL DOCUMENTO
            </a>
          </div>
          <div class="flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full">
            <h1 class="text-md text-center mb-3">
              BilancioPreventivo2025EmporioSolidale.xlsx
            </h1>
            <a
              class="bg-[#8f1d1d] p-3 text-center rounded-2xl text-white hover:text-[#C7AE6A] shadow-lg w-10/12"
              download
              href="/docs/BilancioPreventivo2025EmporioSolidale.xlsx"
            >
              SCARICA QUI IL DOCUMENTO
            </a>
          </div>
          <div class="flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full">
            <h1 class="text-md text-center mb-3">
              Analisi bilanci da 2016 2019 Emporio.pdf
            </h1>
            <a
              class="bg-[#8f1d1d] p-3 rounded-2xl text-center text-white hover:text-[#C7AE6A] shadow-lg w-10/12"
              download
              href="/docs/Analisibilanci20162019.pdf"
            >
              SCARICA QUI IL DOCUMENTO
            </a>
          </div>
          <div class="flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full">
            <h1 class="text-md text-center mb-3">
              1 07 Rendiconto raccolta pubblica di fondi.doc
            </h1>
            <a
              class="bg-[#8f1d1d] p-3 text-center rounded-2xl text-white hover:text-[#C7AE6A] shadow-lg w-10/12"
              download
              href="/docs/107Rendicontoraccoltapubblicadifondi(1).doc"
            >
              SCARICA QUI IL DOCUMENTO
            </a>
          </div>
          <div class="flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full">
            <h1 class="text-md text-center mb-3">
              BILANCIO 2021 EMPORIO SOLIDALE.pdf
            </h1>
            <a
              class="bg-[#8f1d1d] p-3 text-center rounded-2xl text-white hover:text-[#C7AE6A] shadow-lg w-10/12"
              download
              href="/docs/BILANCIO2021EMPORIOSOLIDALE.pdf"
            >
              SCARICA QUI IL DOCUMENTO
            </a>
          </div>
          <div class="flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full">
            <h1 class="text-md text-center mb-3">
              2 07 Rendiconto raccolta pubblica di fondi.doc
            </h1>
            <a
              class="bg-[#8f1d1d] p-3 text-center rounded-2xl text-white hover:text-[#C7AE6A] shadow-lg w-10/12"
              download
              href="/docs/207Rendicontoraccoltapubblicadifondi.doc"
            >
              SCARICA QUI IL DOCUMENTO
            </a>
          </div>
          <div class="flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full">
            <h1 class="text-md text-center mb-3">BILANCIO 2021 FIRMATO.pdf</h1>
            <a
              class="bg-[#8f1d1d] p-3 text-center rounded-2xl text-white hover:text-[#C7AE6A] shadow-lg w-10/12"
              download
              href="/docs/home.htm"
            >
              SCARICA QUI IL DOCUMENTO
            </a>
          </div>
          <div class="flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full">
            <h1 class="text-md text-center mb-3">
              3 07 Rendiconto raccolta pubblica di fondi.doc
            </h1>
            <a
              class="bg-[#8f1d1d] p-3 text-center rounded-2xl text-white hover:text-[#C7AE6A] shadow-lg w-10/12"
              download
              href="/docs/307Rendicontoraccoltapubblicadifondi.doc"
            >
              SCARICA QUI IL DOCUMENTO
            </a>
          </div>
          <div class="flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full">
            <h1 class="text-md text-center mb-3">
              Bilancio al 31 dicembre 2018 (1).pdf
            </h1>
            <a
              class="bg-[#8f1d1d] p-3 text-center rounded-2xl text-white hover:text-[#C7AE6A] shadow-lg w-10/12"
              download
              href="/docs/Bilancioal31dicembre2018(1).pdf"
            >
              SCARICA QUI IL DOCUMENTO
            </a>
          </div>
          <div class="flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full">
            <h1 class="text-md text-center mb-3">
              A 07 Rendiconto raccolta pubblica di fondi.doc
            </h1>
            <a
              class="bg-[#8f1d1d] p-3 text-center rounded-2xl text-white hover:text-[#C7AE6A] shadow-lg w-10/12"
              download
              href="/docs/A07Rendicontoraccoltapubblicadifondi.doc"
            >
              SCARICA QUI IL DOCUMENTO
            </a>
          </div>
          <div class="flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full">
            <h1 class="text-md text-center mb-3">
              Bilancio al 31 dicembre 2018.pdf
            </h1>
            <a
              class="bg-[#8f1d1d] p-3 text-center rounded-2xl text-white hover:text-[#C7AE6A] shadow-lg w-10/12"
              download
              href="/docs/Bilancioal31dicembre2018.pdf"
            >
              SCARICA QUI IL DOCUMENTO
            </a>
          </div>
          <div class="flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full">
            <h1 class="text-md text-center mb-3">
              B 07 Rendiconto raccolta pubblica di fondi 2.doc
            </h1>
            <a
              class="bg-[#8f1d1d] p-3 text-center rounded-2xl text-white hover:text-[#C7AE6A] shadow-lg w-10/12"
              download
              href="/docs/B07Rendicontoraccoltapubblicadifondi2.doc"
            >
              SCARICA QUI IL DOCUMENTO
            </a>
          </div>
          <div class="flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full">
            <h1 class="text-md text-center mb-3">
              Bilancio al 31 dicembre 2019.pdf
            </h1>
            <a
              class="bg-[#8f1d1d] p-3 text-center rounded-2xl text-white hover:text-[#C7AE6A] shadow-lg w-10/12"
              download
              href="/docs/Bilancioal31dicembre2019.pdf"
            >
              SCARICA QUI IL DOCUMENTO
            </a>
          </div>
          <div class="flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full">
            <h1 class="text-md text-center mb-3">
              Bilancio 2023 Emporio Solidale.pdf
            </h1>
            <a
              class="bg-[#8f1d1d] p-3 text-center rounded-2xl text-white hover:text-[#C7AE6A] shadow-lg w-10/12"
              download
              href="/docs/Bilancio2023EmporioSolidale.pdf"
            >
              SCARICA QUI IL DOCUMENTO
            </a>
          </div>
          <div class="flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full">
            <h1 class="text-md text-center mb-3">
              Bilancio analitico 2022 Emporio Solidale.pdf
            </h1>
            <a
              class="bg-[#8f1d1d] p-3 text-center rounded-2xl text-white hover:text-[#C7AE6A] shadow-lg w-10/12"
              download
              href="/docs/Bilancioanalitico2022EmporioSolidale.pdf"
            >
              SCARICA QUI IL DOCUMENTO
            </a>
          </div>
          <div class="flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full">
            <h1 class="text-md text-center mb-3">
              BILANCIO 2023 MOD D Emporio Solidale.pdf
            </h1>
            <a
              class="bg-[#8f1d1d] p-3 text-center rounded-2xl text-white hover:text-[#C7AE6A] shadow-lg w-10/12"
              download
              href="/docs/BILANCIO2023MODDEmporioSolidale.pdf"
            >
              SCARICA QUI IL DOCUMENTO
            </a>
          </div>
          <div class="flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full">
            <h1 class="text-md text-center mb-3">
              Bilancio Preventivo 2023 Emporio Solidale.pdf
            </h1>
            <a
              class="bg-[#8f1d1d] p-3 text-center rounded-2xl text-white hover:text-[#C7AE6A] shadow-lg w-10/12"
              download
              href="/docs/BilancioPreventivo2023EmporioSolidale.pdf"
            >
              SCARICA QUI IL DOCUMENTO
            </a>
          </div>
          <div class="flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full">
            <h1 class="text-md text-center mb-3">
              Bilancio Preventivo 2024 Emporio Solidale.xlsx
            </h1>
            <a
              class="bg-[#8f1d1d] p-3 text-center rounded-2xl text-white hover:text-[#C7AE6A] shadow-lg w-10/12"
              download
              href="/docs/BilancioPreventivo2024EmporioSolidale.xlsx"
            >
              SCARICA QUI IL DOCUMENTO
            </a>
          </div>
          <div class="flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full">
            <h1 class="text-md text-center mb-3">
              Emporio - Bilancio finanziario 2020.pdf
            </h1>
            <a
              class="bg-[#8f1d1d] p-3 text-center rounded-2xl text-white hover:text-[#C7AE6A] shadow-lg w-10/12"
              download
              href="/docs/Emporio-Bilanciofinanziario2020.pdf"
            >
              SCARICA QUI IL DOCUMENTO
            </a>
          </div>
          <div class="flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full">
            <h1 class="text-md text-center mb-3">
              Relazione di missione bilancio 2023 (3).docx
            </h1>
            <a
              class="bg-[#8f1d1d] p-3 text-center rounded-2xl text-white hover:text-[#C7AE6A] shadow-lg w-10/12"
              download
              href="/docs/Relazionedimissionebilancio2023(3).docx"
            >
              SCARICA QUI IL DOCUMENTO
            </a>
          </div>
          <div class="flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full">
            <h1 class="text-md text-center mb-3">
              Legge sulla Trasparenza.pdf
            </h1>
            <a
              class="bg-[#8f1d1d] p-3 text-center rounded-2xl text-white hover:text-[#C7AE6A] shadow-lg w-10/12"
              download
              href="/docs/LeggesullaTrasparenza.pdf"
            >
              SCARICA QUI IL DOCUMENTO
            </a>
          </div>
          <div class="flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full">
            <h1 class="text-md text-center mb-3">
              RENDICONTO ATTIVITA' 2023.pdf
            </h1>
            <a
              class="bg-[#8f1d1d] p-3 text-center rounded-2xl text-white hover:text-[#C7AE6A] shadow-lg w-10/12"
              download
              href="/docs/RENDICONTOATTIVITA2023.pdf"
            >
              SCARICA QUI IL DOCUMENTO
            </a>
          </div>
          <div class="flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full">
            <h1 class="text-md text-center mb-3">RELAZIONE 2021 FIRMATO.pdf</h1>
            <a
              class="bg-[#8f1d1d] p-3 text-center rounded-2xl text-white hover:text-[#C7AE6A] shadow-lg w-10/12"
              download
              href="/docs/RELAZIONE2021FIRMATO.pdf"
            >
              SCARICA QUI IL DOCUMENTO
            </a>
          </div>
          <div class="flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full">
            <h1 class="text-md text-center mb-3">
              RENDICONTO FINANZIARIO 2023.pdf
            </h1>
            <a
              class="bg-[#8f1d1d] p-3 text-center rounded-2xl text-white hover:text-[#C7AE6A] shadow-lg w-10/12"
              download
              href="/docs/RENDICONTOFINANZIARIO2023.pdf"
            >
              SCARICA QUI IL DOCUMENTO
            </a>
          </div>
          <div class="flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full">
            <h1 class="text-md text-center mb-3">
              Relazione di missione bilancio 2022.pdf
            </h1>
            <a
              class="bg-[#8f1d1d] p-3 text-center rounded-2xl text-white hover:text-[#C7AE6A] shadow-lg w-10/12"
              download
              href="/docs/relazionedimissionebilancio2022.pdf"
            >
              SCARICA QUI IL DOCUMENTO
            </a>
          </div>
          <div class="flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full">
            <h1 class="text-md text-center mb-3">Trasparenza 2020-2019.pdf</h1>
            <a
              class="bg-[#8f1d1d] p-3 text-center rounded-2xl text-white hover:text-[#C7AE6A] shadow-lg w-10/12"
              download
              href="/docs/Trasparenza2020-2019.pdf"
            >
              SCARICA QUI IL DOCUMENTO
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
