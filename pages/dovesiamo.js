import Layout from "../components_emporio/Layout";
import React from "react";

export default function Dovesiamo() {
  return (
    <Layout>
    <title>Dove siamo - Emporio Solidale</title>
    <link rel="icon" type="image/x-icon" href="/images/servizi_favicon/favicon.ico" />

    <div class="flex flex-col">

      <div class="bg-white rounded-2xl shadow-xl flex flex-col 2xl:flex-row p-8 mt-32 w-full justify-center">
        <div class="flex flex-col w-[100%] 2xl:w-6/12 space-y-6">
          <h2 class="text-4xl md:text-5xl text-center font-bold  text-[#780202]">
            Emporio Solidale del Basso Piave
          </h2>
          <p class="text-[#dfb031] text-center font-bold text-xl md:text-2xl">
            Progetto Regione Veneto
          </p>

          <div>
            <h3 class="text-lg text-center text-[#780202]">Dove trovarci</h3>
            <div class="grid grid-cols-1 gap-12 mt-8">
              <div class="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow">
                <img class="w-20" src="images/map.png" alt="mappa"></img>
                <span class="text-lg mt-6 text-gray-600">
                  S. Donà di Piave - Via Molina, 25 -
                </span>
              </div>
            </div>
          </div>

          <div class="flex-col flex justify-center w-full">
            <h3 class="text-lg text-center text-[#780202]">Come contattarci</h3>
            <div class="flex flex-col lg:flex-row 2xl:gap-8 lg:gap-8 mt-8 justify-between">
              <div class="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow">
                <img
                  class="w-20"
                  src="images/telephone.png"
                  alt="telefono"
                ></img>
                <span class="text-lg mt-6 text-gray-600">0421-332697</span>
              </div>
              <div class="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow">
                <img
                  class="w-20"
                  src="images/smartphone.png"
                  alt="cellulare"
                ></img>
                <span class="text-lg mt-6 text-gray-600">344 3851626</span>
              </div>
              <div class="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow">
                <img class="w-20" src="images/mail.png" alt="email"></img>
                <span class="text-lg mt-6 text-gray-600">
                  emporiosolidalebassopiave@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full 2xl:w-1/4 h-full lg:ml-20 rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2790.1100741537025!2d12.573169000000002!3d45.628525!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477956ffcb4f6c53%3A0xdccf27df858e4453!2sVia%20Molina%2C%2025%2C%2030027%20San%20Don%C3%A0%20di%20Piave%20VE%2C%20Italia!5e0!3m2!1sit!2sus!4v1739350953518!5m2!1sit!2sus"
            width="100%"
            height="400"
            class="rounded-lg"
          ></iframe>
        </div>
      </div>

      <div class="bg-white rounded-2xl mt-52 shadow-xl flex flex-col 2xl:flex-row p-8 w-full justify-center">
        <div class="flex flex-col w-[100%] 2xl:w-6/12 space-y-6">
          <h2 class="text-4xl md:text-5xl text-center font-bold text-[#780202]">
            Centro di Ascolto B. F. OZANAM
          </h2>
          <p class="text-[#dfb031] text-center font-bold text-xl md:text-2xl">
            Casa Saretta
          </p>

          <div>
            <h3 class="text-lg text-center text-[#780202]">Dove trovarci</h3>
            <div class="grid grid-cols-1 gap-12 mt-8">
              <div class="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow">
                <img class="w-20" src="images/map.png" alt="mappa"></img>
                <span class="text-lg mt-6 text-gray-600">
                  Casa Saretta, via Pralungo, 12 - S. Donà di Piave (VE)
                </span>
              </div>
            </div>
          </div>

          <div class="flex-col flex justify-center w-full">
            <h3 class="text-lg text-center text-[#780202]">Come contattarci</h3>
            <div class="flex flex-col lg:flex-row 2xl:gap-8 lg:gap-8 mt-8 justify-between">
              <div class="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow">
                <img
                  class="w-20"
                  src="images/telephone.png"
                  alt="telefono"
                ></img>
                <span class="text-lg mt-6 text-gray-600">0421-332697</span>
              </div>
              <div class="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow">
                <img
                  class="w-20"
                  src="images/smartphone.png"
                  alt="cellulare"
                ></img>
                <span class="text-lg mt-6 text-gray-600">344 3851626</span>
              </div>
              <div class="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow">
                <img class="w-20" src="images/mail.png" alt="email"></img>
                <span class="text-lg mt-6 text-gray-600">
                  sanvincenzodepaolisandonadipiave@yahoo.it
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full 2xl:w-1/4 h-full lg:ml-20 rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2790.1100741537025!2d12.573169000000002!3d45.628525!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477956ffcb4f6c53%3A0xdccf27df858e4453!2sVia%20Molina%2C%2025%2C%2030027%20San%20Don%C3%A0%20di%20Piave%20VE%2C%20Italia!5e0!3m2!1sit!2sus!4v1739350953518!5m2!1sit!2sus"
            width="100%"
            height="400"
            class="rounded-lg"
          ></iframe>
        </div>
      </div>

      <div class="flex flex-col 2xl:flex-row w-11/12 md:w-9/10 mt-20 gap-5 justify-center mb-20">
        <div class="flex flex-col w-full 2xl:w-11/12">
          <h1 class="font-semibold text-3xl text-[#780202] mb-10 text-center">
            Per avere l'assistenza è necessario presentare i seguenti documenti:
          </h1>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 text-gray-700 gap-5 items-center">
            <div class="flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full">
              <img
                src="images/ci.jpg"
                class="w-full h-80 object-contain mb-3"
              />
              <h1 class="text-md text-center">Carta di Identità</h1>
            </div>
            <div class="flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full">
              <img
                src="https://www.yumpu.com/it/image/facebook/25681498.jpg"
                class="w-full h-80 object-contain mb-3"
              />
              <h1 class="text-md text-center">
                <strong>A.i.t.s.a.m.</strong>Stato di FamigliaStato di Famiglia
              </h1>
            </div>
            <div class="flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full">
              <img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.studiocommercialemarconi.com%2Fwp-content%2Fuploads%2F2012%2F10%2Fcapire-busta-paga.jpg&f=1&nofb=1&ipt=fe0a1d98dbbe7c9517da2f70496247c33745f8fc7d4536414ea54cfc09b87bd2&ipo=images"
                class="w-full h-80 object-contain mb-3"
              />
              <h1 class="text-md text-center">
                Busta paga/PensioneBusta paga/Pensione
              </h1>
            </div>
            <div class="flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full">
              <img
                src="https://www.cmdataweb.it/submenu/gestione-personale/Moduli/autocertificazione_disoccupazione.jpg"
                class="w-full h-80 object-contain mb-3"
              />
              <h1 class="text-md text-center">
                Certificato DisoccupazioneCertificato Disoccupazione
              </h1>
            </div>
            <div class="flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full">
              <img
                src="https://www.tpi.it/app/uploads/2019/02/isee-2019-1.jpg"
                class="w-full h-80 object-contain mb-3"
              />
              <h1 class="text-md text-center">Modulo ISEEModulo ISEE</h1>
            </div>
            <div class="flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full">
              <img
                src="http://www.laziodisco.it/wp-content/uploads/2022/11/ricevuta-affitto.jpg"
                class="w-full h-80 object-contain mb-3"
              />
              <h1 class="text-md text-center">
                Ricevuta AffittoRicevuta Affitto
              </h1>
            </div>
            <div class="flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full">
              <img
                src="https://blog.solignani.it/wp-content/uploads/2018/02/documenti.jpg"
                class="w-full h-80 object-contain mb-3"
              />
              <h1 class="text-md text-center">
                Altri DocumentiAltri Documenti
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
}
