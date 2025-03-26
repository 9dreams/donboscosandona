export default function Dovesiamo() {
  return (
    <>
    <title>Dove siamo - Emporio Solidale</title>
    <link rel="icon" type="image/x-icon" href="/images/servizi_favicon/favicon.ico" />

    <div class="flex flex-col">
      <div class="flex flex-col md:flex-row w-full bg-[#780202] p-3 items-center mx-auto border-b border-gray-300 justify-between mb-10">
        <div class="flex justify-center md:ml-10">
          <img
            src="/images/Logo_emporio.png"
            class="w-24 md:w-[140px] rounded-full"
            alt="Logo"
          />
        </div>
        <div class="w-full md:w-7/12 flex flex-col md:flex-row gap-3 md:gap-6 items-center justify-center text-center">
          {[
            { name: "Home Page", link: "/", class: "text-white" },
            { name: "Chi Siamo", link: "chisiamo", class: "text-white" },
            {
              name: "Dove Siamo",
              link: "dovesiamo",
              class: "text-[#C7AE6A]",
            },
            { name: "Trasparenza", link: "trasparenza", class: "text-white" },
            { name: "Servizi", link: "servizi", class: "text-white" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              class={`font-bold hover:text-[#C7AE6A] cursor-pointer ${item.class}`}
            >
              {item.name}
            </a>
          ))}
        </div>
        <div class="mt-3 md:mt-0 md:mr-10 flex justify-center items-center w-full md:w-auto">
          <input
            type="text"
            placeholder="Ricerca"
            class="shadow-lg rounded-md placeholder:text-white placeholder:font-bold p-2 text-white font-semibold bg-[#8f1d1d] w-full md:w-auto"
          />
        </div>
      </div>

      <div class="bg-white rounded-2xl shadow-xl flex flex-col 2xl:flex-row p-8 w-full justify-center">
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
    </>
  );
}
