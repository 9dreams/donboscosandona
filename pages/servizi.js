import Layout from "../components_emporio/Layout";
import React from "react";


export default function Servizi() {
  return (
    <Layout>
    <title>Servizi - Emporio Solidale</title>
    <link rel="icon" type="image/x-icon" href="/images/servizi_favicon/favicon.ico" />

    <div class="flex flex-col">

      <div class="flex flex-col 2xl:flex-row w-11/12 md:w-9/10 mt-20 gap-5 justify-center mb-20 mt-32 mx-auto">
        <div class="flex flex-col w-full 2xl:w-11/12">
          <h1 class="font-semibold text-3xl text-[#780202] mb-10 text-center">
            I nostri servizi
          </h1>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 text-gray-700 gap-5 items-center">
            <div class="flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full">
              <img
                src="images/formazione-volontari.jpg"
                class="w-full h-80 object-contain mb-3"
              />
              <h1 class="text-md text-center text-3xl font-bold text-[#dfb031] mb-4">
                Formazione per volontari
              </h1>
              <h1 class="text-center text-black">
                I volontari operanti nella rete, vengono formati da
                professionisti, allo scopo di essere preparati ad affrontare le
                varie problematiche delle persone che stanno vivendo un momento
                di fragilità.
              </h1>
              <a href="/servizi/corso-volontari-2019">
                <button class="bg-[#8f1d1d] mt-4 p-3 rounded-2xl text-white hover:text-[#C7AE6A] mb-4">
                  SCOPRI I DETTAGLI DI QUESTO SERVIZIO
                </button>
              </a>
            </div>
            <div class="flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full">
              <img
                src="images/inserimento-socio-collaborativo.jpg"
                class="w-full h-80 object-contain mb-3"
              />
              <h1 class="text-md text-center text-3xl font-bold text-[#dfb031] mb-4">
                Inserimento socio collaborativo
              </h1>
              <h1 class="text-center text-black">
                L’Emporio si propone di aumentare l’efficienza dei processi di
                inserimento lavorativo attraverso il sostegno della cooperazione
                sociale ed imprenditoriale,
              </h1>
              <a href="/servizi/inserimento-socio-collaborativo">
                <button class="bg-[#8f1d1d] mt-10 p-3 rounded-2xl text-white hover:text-[#C7AE6A] mb-4">
                  SCOPRI I DETTAGLI DI QUESTO SERVIZIO
                </button>
              </a>
            </div>
            <div class="flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full">
              <img
                src="images/corso-economia-domestica.jpg"
                class="w-full h-80 object-contain mb-3"
              />
              <h1 class="text-md text-center text-3xl font-bold text-[#dfb031] mb-4 ">
                Corso di economia domestica
              </h1>
              <h1 class="text-center text-black">
                Laboratorio per la promozione delle conoscenze degli aspetti
                pratici della vita di famiglia. Special modo per chi deve
                gestire l' integrazione dei figli in una quotidianità diversa da
                quella abituale.
              </h1>
              <a href="/servizi/economia-domestica">
                <button class="bg-[#8f1d1d] mt-10 p-3 rounded-2xl text-white hover:text-[#C7AE6A] mb-4">
                  SCOPRI I DETTAGLI DI QUESTO SERVIZIO
                </button>
              </a>
            </div>
            <div class="flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full">
              <img
                src="images/corso-cucito.jpg"
                class="w-full h-80 object-contain mb-3"
              />
              <h1 class="text-md text-center text-3xl font-bold text-[#dfb031] mb-4">
                Corso di cucito
              </h1>
              <h1 class="text-center text-black">
                E’ un laboratorio base di formazione per imparare le primarie
                tecniche di taglio e cucito, rammendo, uso di macchine da cucire
                con l’ausilio di volontarie e personale specializzato.
              </h1>
              <a href="/servizi/corso-di-cucito">
                <button class="bg-[#8f1d1d] mt-10 p-3 rounded-2xl text-white hover:text-[#C7AE6A] mb-4">
                  SCOPRI I DETTAGLI DI QUESTO SERVIZIO
                </button>
              </a>
            </div>
            <div class="flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full">
              <img
                src="images/centro-ascolto.png"
                class="w-full h-80 object-contain mb-3"
              />
              <h1 class="text-md text-center text-3xl font-bold mb-4 text-[#dfb031]">
                Centro di ascolto
              </h1>
              <h1 class="text-center text-black">
                È il primo approccio d’incontro a cui si rivolgono le persone
                che vivono situazioni di disagio. Con la presenza dei volontari
                delle Associazioni della rete, il centro si propone di
                accogliere, ascoltare e comprendere i racconti e le storie di
                sofferenza indipendentemente dalla razza, dal sesso e dalla
                religione.
              </h1>
              <a href="/servizi/centro-di-ascolto">
                <button class="bg-[#8f1d1d] mt-10 p-3 rounded-2xl text-white hover:text-[#C7AE6A] mb-4">
                  SCOPRI I DETTAGLI DI QUESTO SERVIZIO
                </button>
              </a>
            </div>
            <div class="flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full">
              <img
                src="images/emporio-per-la-spesa.jpg"
                class="w-full h-80 object-contain mb-3"
              />
              <h1 class="text-md text-center text-3xl font-bold text-[#dfb031] mb-4">
                Emporio solidale per la spesa
              </h1>
              <h1 class="text-center text-black">
                È un centro di distribuzione fatto di persone per le persone,
                dove tanti volontari con impegno e responsabilità, si prendono
                cura dei bisogni primari di chi in un periodo difficile della
                propria vita chiede aiuto.
              </h1>
              <a href="/servizi/emporio-solidale-per-la-spesa">
                <button class="bg-[#8f1d1d] mt-10 p-3 rounded-2xl text-white hover:text-[#C7AE6A] mb-4">
                  SCOPRI I DETTAGLI DI QUESTO SERVIZIO
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer class="bg-[#780202] text-white w-full">
        <div class="w-full max-w-screen-xl p-4 py-6 lg:py-8 h-auto md:h-[25rem] mx-auto flex flex-col justify-center items-center">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-start w-full">
            <div class="flex justify-center md:justify-start">
              <a href="#">
                <img
                  src="/images/Logo_emporio.png"
                  class="h-20 md:h-24"
                  alt="Emporio Logo"
                />
              </a>
            </div>

            <div class="text-center md:text-left">
              <h2 class="mb-4 text-sm font-semibold uppercase">
                Corso di cucito
              </h2>
              <hr class="mb-2 border-gray-500" />
              <ul class="text-gray-300">
                <li class="mb-2">
                  <a
                    href="/servizi/corso-di-cucito"
                    class="hover:underline text-cyan-400"
                  >
                    Vai al corso
                  </a>
                </li>
              </ul>
            </div>

            <div class="text-center md:text-left">
              <h2 class="mb-4 text-sm font-semibold uppercase">
                Economia domestica
              </h2>
              <hr class="mb-2 border-gray-500" />
              <ul class="text-gray-300">
                <li class="mb-2">
                  <a
                    href="/servizi/economia-domestica"
                    class="hover:underline text-cyan-400"
                  >
                    Approfondimenti
                  </a>
                </li>
              </ul>
            </div>

            <div class="text-center md:text-left">
              <h2 class="mb-4 text-sm font-semibold uppercase">
                Centro di ascolto
              </h2>
              <hr class="mb-2 border-gray-500" />
              <ul class="text-gray-300">
                <li class="mb-2">
                  <a
                    href="/servizi/centro-di-ascolto"
                    class="hover:underline text-cyan-400"
                  >
                    Presentazione del servizio
                  </a>
                </li>
              </ul>
            </div>

            <div class="text-center md:text-left">
              <h2 class="mb-4 text-sm font-semibold uppercase">Recapiti</h2>
              <hr class="mb-2 border-gray-500" />
              <ul class="text-gray-300">
                <li class="mb-2">Emporio Solidale del Basso</li>
                <li class="mb-2">Piave San Donà di Piave (VE)</li>
              </ul>
            </div>

            <div class="text-center md:text-left">
              <h2 class="mb-4 text-sm font-semibold uppercase">Contatti</h2>
              <hr class="mb-2 border-gray-500" />
              <ul class="text-gray-300">
                <li class="mb-2">
                  e-mail:{" "}
                  <a
                    href="mailto:emporiosolidalebassopiave@gmail.com"
                    class="hover:underline text-cyan-400"
                  >
                    emporiosolidalebassopiave@gmail.com
                  </a>
                </li>
                <li class="mb-2">Fax e Telefono: 0421-332697</li>
                <li class="mb-2">Cellulare: 344 3851626</li>
              </ul>
            </div>
          </div>

          <hr class="my-6 border-gray-500 w-full" />

          <div class="flex flex-col sm:flex-row items-center justify-between w-full">
            <span class="text-sm text-gray-300">
              © 2025{" "}
              <a href="#" class="hover:underline">
                Emporio Solidale™
              </a>
            </span>
            <div class="mt-4 sm:mt-0">
              <a href="#" class="text-gray-300 hover:text-white">
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </Layout>
  );
}
