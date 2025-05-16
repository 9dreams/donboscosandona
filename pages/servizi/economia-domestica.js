import Layout from "components_emporio/Layout.js";
import React from "react";
export default function Servizi() {
  return (
    <Layout>
      <title>Economia domestica - Emporio Solidale</title>
      <link rel="icon" type="image/x-icon" href="/images/servizi_favicon/favicon.ico" />

      <div class="flex flex-col">
       

        <div className="w-full bg-[url('')] bg-repeat bg-center">
          <div className="flex items-center justify-center md:justify-start pt-10 md:px-10 lg:pl-64 px-5">
            <a href="/" className="mb-4 md:mb-0">
              <p className="text-sm text-black">Emporio solidale</p>
            </a>
            <p className="ml-0 md:ml-12 lg:ml-24 text-sm text-black">
              Economia domestica
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center">
            <div className="flex flex-col px-5 md:px-10 lg:pl-64 pt-8 md:pt-14 pb-10 md:pb-20 gap-y-4 w-full lg:w-1/2">
              <a href="/">
                <h1 className="text-2xl md:text-3xl  text-black lg:text-4xl  hover:text-gray-300 transition-colors duration-200">
                  Corso di economia domestica
                </h1>
              </a>
              <p className="text-sm md:text-md text-black leading-relaxed">
                È un laboratorio per la promozione delle conoscenze degli
                aspetti pratici della vita di famiglia.
              </p>
              <p className="text-sm md:text-md text-black leading-relaxed">
                È rivolto in special modo a quelle persone, uomini o donne, che
                provenendo da paesi lontani, con usi e costumi molto diversi dal
                nostro, si trovano a volte in difficoltà nel gestire soprattutto
                i figli che si devono integrare con una quotidianità diversa da
                quella abituale.
              </p>
              <p className="text-sm md:text-md text-black leading-relaxed">
                Accompagnati da volontarie e personale specializzato, vengono a
                conoscenza di come si effettuano le pulizie di casa e con quali
                prodotti adeguati; come prendersi cura dei bambini e degli
                anziani; come pianificare la spesa alimentare, come tenere un
                bilancio familiare; inoltre tecniche base e cucinare piatti
                italiani.
              </p>
              <p className="text-sm md:text-md text-black leading-relaxed">
                Queste semplici nozioni possono essere anche di grande aiuto per
                poter trovare un lavoro fuori casa, contribuendo così al maggior
                sostentamento
              </p>
            </div>
            <div className="lg:w-1/2 flex justify-center items-center px-5 md:px-10 lg:pr-64 py-4">
              <img
                className="rounded-2xl shadow-md object-cover max-w-full h-auto md:h-96 lg:h-auto"
                src="/images/economia_domestica.jpeg"
                alt="Economia Domestica"
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
