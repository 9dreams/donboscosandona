import Layout from "components_emporio/Layout.js";
import React from "react";
export default function Servizi() {
  return (
    <Layout>
      <title>Centro di ascolto - Emporio Solidale</title>
      <link rel="icon" type="image/x-icon" href="/images/servizi_favicon/favicon.ico" />

      <div class="flex flex-col">
      

        <div className="w-full bg-[url('')] bg-repeat bg-center">
          <div className="flex items-center justify-center md:justify-start pt-10 md:px-10 lg:pl-64 px-5">
            <a href="/" className="mb-4 md:mb-0">
              <p className="text-sm text-black">Emporio solidale</p>
            </a>
            <p className="ml-0 md:ml-12 lg:ml-24 text-sm text-black">
              Centro di ascolto
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center">
            <div className="flex flex-col px-5 md:px-10 lg:pl-64 pt-8 md:pt-14 pb-10 md:pb-20 gap-y-4 w-full lg:w-1/2">
              <a href="/">
                <h1 className="text-2xl md:text-3xl lg:text-4xl text-black hover:text-gray-300 transition-colors duration-200">
                  Centro di ascolto
                </h1>
              </a>
              <p className="text-sm md:text-md text-black leading-relaxed">
                È il primo approccio d’incontro a cui si rivolgono le persone
                che vivono situazioni di disagio. Con la presenza dei volontari
                delle Associazioni della rete, il centro si propone di
                accogliere, ascoltare e comprendere i racconti e le storie di
                sofferenza indipendentemente dalla razza, dal sesso e dalla
                religione.
              </p>
              <p className="text-sm md:text-md text-black leading-relaxed">
                Con sensibilità e umanità si orientano le persone che chiedono
                aiuto ad individuare le reali esigenze con la ricerca delle
                soluzioni più idonee, anche attraverso la presa in carico con i
                servizi più adatti presenti nel territorio. Attraverso la
                richiesta di specifici documenti, i volontari hanno gli
                strumenti per valutare la precisa situazione delle persone o
                delle famiglie attivando tutte le possibili soluzioni di aiuto
                necessarie.
              </p>
              <p className="text-sm md:text-md text-black leading-relaxed">
                I documenti necessari per potere accedere all’Emporio della
                spesa sono:
              </p>
              <ul className="text-sm md:text-md text-black ml-10 list-disc">
                <li>STATO DI FAMIGLIA</li>
                <li>DOCUMENTO D’IDENTITA’ E CODICE FISCALE</li>
                <li>ISEE</li>
                <li>CERTIFICATO DI DISOCCUPAZIONE O ULTIMA BUSTA PAGA</li>
                <li>ULTIMO AFFITTO PAGATO</li>
              </ul>
            </div>
            <div className="lg:w-1/2 flex justify-center items-center px-5 md:px-10 lg:pr-64 py-4">
              <img
                className="rounded-2xl shadow-md object-cover max-w-full h-auto md:h-96 lg:h-auto"
                src="/images/centro_ascolto.jpeg"
                alt="Solidarietà"
              />
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
                      href="./corso-di-cucito"
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
                      href="./economia-domestica"
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
                      href="./centro-di-ascolto"
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
