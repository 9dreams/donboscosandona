export default function Servizi() {
  return (
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
            "Home Page",
            "Chi Siamo",
            "Dove Siamo",
            "Trasparenza",
            "Servizi",
          ].map((item, index) => (
            <p
              key={index}
              class="font-bold text-white hover:text-[#C7AE6A] cursor-pointer"
            >
              {item}
            </p>
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

      <div class="flex flex-col 2xl:flex-row w-11/12 md:w-9/10 mt-20 gap-5 justify-center mb-20">
        <div class="flex flex-col w-full 2xl:w-11/12">
          <h1 class="font-semibold text-3xl text-[#780202] mb-10 text-center">
            I nostri servizi
          </h1>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 text-gray-700 gap-5 items-center">
            <div class="flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full">
              <img
                src="https://www.emporiosolidalebassopiave.it/documents/3870210/3918093/volontariato.jpg/cd25fe84-6956-d948-01fd-a7153a62451e?t=1575477910201&download=true"
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
              <button class="bg-[#8f1d1d] mt-4 p-3 rounded-2xl text-white hover:text-[#C7AE6A] mb-4">
              SCOPRI I DETTAGLI DI QUESTO SERVIZIO
              </button>
            </div>
            <div class="flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full">
              <img
                src="https://www.emporiosolidalebassopiave.it/documents/3870210/3918093/attenzione+e+curiosit%C3%A0.jpg/b9b9e0d9-66f6-ad81-703b-acfc8181d8d3?t=1575477906796&download=true"
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
              <button class="bg-[#8f1d1d] mt-10 p-3 rounded-2xl text-white hover:text-[#C7AE6A] mb-4">
              SCOPRI I DETTAGLI DI QUESTO SERVIZIO
              </button>
            </div>
            <div class="flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full">
              <img
                src="https://www.emporiosolidalebassopiave.it/documents/3870210/3918093/volontari.jpg/0027cdd7-c05e-469c-8451-376d3cee3fc5?t=1575477909848&download=true"
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
              <button class="bg-[#8f1d1d] mt-4 p-3 rounded-2xl text-white hover:text-[#C7AE6A] mb-4">
              SCOPRI I DETTAGLI DI QUESTO SERVIZIO
              </button>
            </div>
            <div class="flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full">
              <img
                src="https://www.emporiosolidalebassopiave.it/documents/3870210/3926454/abstract%20corso%20cucito.jpg/ac3c653a-011e-aec2-f078-deb04fdc5dae?t=1575549135562&download=true"
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
              <button class="bg-[#8f1d1d] mt-4 p-3 rounded-2xl text-white hover:text-[#C7AE6A]">
              SCOPRI I DETTAGLI DI QUESTO SERVIZIO
              </button>
            </div>
            <div class="flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full">
              <img
                src="https://www.emporiosolidalebassopiave.it/documents/3870210/3918089/copertina%20corso%20psico3.png/4f47f976-2169-bc19-5536-49d9ba1718bf?t=1575477875808&download=true"
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
              <button class="bg-[#8f1d1d] mt-4 p-3 rounded-2xl text-white hover:text-[#C7AE6A]">
              SCOPRI I DETTAGLI DI QUESTO SERVIZIO
              </button>
            </div>
            <div class="flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full">
              <img
                src="https://www.emporiosolidalebassopiave.it/documents/3870210/3928054/IMG_4207.jpg/9af8321d-4c86-041c-2ede-4b3a6cf3b65a?t=1575554949561&download=true"
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
              <button class="bg-[#8f1d1d] mt-10 p-3 rounded-2xl text-white hover:text-[#C7AE6A]">
                SCOPRI I DETTAGLI DI QUESTO SERVIZIO
              </button>
            </div>
          </div>
        </div>
      </div>

      <footer class="bg-[#780202] text-white w-full">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div class="flex justify-center md:justify-start">
              <a href="#">
                <img
                  src="/images/Logo_emporio.png"
                  class="h-24"
                  alt="Emporio Logo"
                />
              </a>
            </div>
            <div class="text-center md:text-left">
              <h2 class="mb-4 text-sm font-semibold uppercase">Recapiti</h2>
              <ul class="text-gray-300">
                <li class="mb-2">
                  <a href="#" class="hover:underline">
                    Emporio solidale
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:underline">
                    Del basso Piave
                  </a>
                </li>
              </ul>
            </div>
            <div class="text-center md:text-left">
              <h2 class="mb-4 text-sm font-semibold uppercase">Contatti</h2>
              <ul class="text-gray-300">
                <li class="mb-2">
                  <a href="#" class="hover:underline">
                    0421-332697
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:underline">
                    344 3851626
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr class="my-6 border-gray-500" />
          <div class="flex flex-col sm:flex-row items-center justify-between">
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
  );
}
