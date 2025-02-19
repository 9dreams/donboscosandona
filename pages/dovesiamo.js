export default function Dovesiamo() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row w-full bg-[#780202] p-3 items-center mx-auto border-b border-gray-300 justify-between mb-10">
        <div className="flex justify-center md:ml-10">
          <img
            src="/images/Logo_emporio.png"
            className="w-24 md:w-[140px] rounded-full"
            alt="Logo"
          />
        </div>
        <div className="w-full md:w-7/12 flex flex-col md:flex-row gap-3 md:gap-6 items-center justify-center text-center">
          {[
            "Home Page",
            "Chi Siamo",
            "Dove Siamo",
            "Trasparenza",
            "Servizi",
          ].map((item, index) => (
            <p
              key={index}
              className="font-bold text-white hover:text-[#C7AE6A] cursor-pointer"
            >
              {item}
            </p>
          ))}
        </div>
        <div className="mt-3 md:mt-0 md:mr-10 flex justify-center items-center w-full md:w-auto">
          <input
            type="text"
            placeholder="Ricerca"
            className="shadow-lg rounded-md placeholder:text-white placeholder:font-bold p-2 text-white font-semibold bg-[#8f1d1d] w-full md:w-auto"
          />
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-xl flex flex-col 2xl:flex-row p-8 w-full justify-center">
        <div className="flex flex-col w-[100%] 2xl:w-6/12 space-y-6">
          <h2 className="text-4xl md:text-5xl text-center font-bold  text-[#780202]">
            Emporio Solidale del Basso Piave
          </h2>
          <p className="text-[#dfb031] text-center font-bold text-xl md:text-2xl">
            Progetto Regione Veneto
          </p>

          <div>
            <h3 className="text-lg text-center text-[#780202]">
              Dove trovarci
            </h3>
            <div className="grid grid-cols-1 gap-12 mt-8">
              <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow">
                <img className="w-20" src="images/map.png" alt="mappa"></img>
                <span className="text-lg mt-6 text-gray-600">
                  S. Donà di Piave - Via Molina, 25 -
                </span>
              </div>
            </div>
          </div>

          <div className="flex-col flex justify-center w-full">
            <h3 className="text-lg text-center text-[#780202]">
              Come contattarci
            </h3>
            <div className="flex flex-col lg:flex-row 2xl:gap-8 lg:gap-8 mt-8 justify-between">
              <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow">
                <img
                  className="w-20"
                  src="images/telephone.png"
                  alt="telefono"
                ></img>
                <span className="text-lg mt-6 text-gray-600">0421-332697</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow">
                <img
                  className="w-20"
                  src="images/smartphone.png"
                  alt="cellulare"
                ></img>
                <span className="text-lg mt-6 text-gray-600">344 3851626</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow">
                <img className="w-20" src="images/mail.png" alt="email"></img>
                <span className="text-lg mt-6 text-gray-600">
                  emporiosolidalebassopiave@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full 2xl:w-1/4 h-full lg:ml-20 rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2790.1100741537025!2d12.573169000000002!3d45.628525!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477956ffcb4f6c53%3A0xdccf27df858e4453!2sVia%20Molina%2C%2025%2C%2030027%20San%20Don%C3%A0%20di%20Piave%20VE%2C%20Italia!5e0!3m2!1sit!2sus!4v1739350953518!5m2!1sit!2sus"
            width="100%"
            height="400"
            className="rounded-lg"
          ></iframe>
        </div>
      </div>

      <div className="bg-white rounded-2xl mt-52 shadow-xl flex flex-col 2xl:flex-row p-8 w-full justify-center">
        <div className="flex flex-col w-[100%] 2xl:w-6/12 space-y-6">
          <h2 className="text-4xl md:text-5xl text-center font-bold text-[#780202]">
            Centro di Ascolto B. F. OZANAM
          </h2>
          <p className="text-[#dfb031] text-center font-bold text-xl md:text-2xl">
            Casa Saretta
          </p>

          <div>
            <h3 className="text-lg text-center text-[#780202]">
              Dove trovarci
            </h3>
            <div className="grid grid-cols-1 gap-12 mt-8">
              <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow">
                <img className="w-20" src="images/map.png" alt="mappa"></img>
                <span className="text-lg mt-6 text-gray-600">
                  Casa Saretta, via Pralungo, 12 - S. Donà di Piave (VE)
                </span>
              </div>
            </div>
          </div>

          <div className="flex-col flex justify-center w-full">
            <h3 className="text-lg text-center text-[#780202]">
              Come contattarci
            </h3>
            <div className="flex flex-col lg:flex-row 2xl:gap-8 lg:gap-8 mt-8 justify-between">
              <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow">
                <img
                  className="w-20"
                  src="images/telephone.png"
                  alt="telefono"
                ></img>
                <span className="text-lg mt-6 text-gray-600">0421-332697</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow">
                <img
                  className="w-20"
                  src="images/smartphone.png"
                  alt="cellulare"
                ></img>
                <span className="text-lg mt-6 text-gray-600">344 3851626</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow">
                <img className="w-20" src="images/mail.png" alt="email"></img>
                <span className="text-lg mt-6 text-gray-600">
                  sanvincenzodepaolisandonadipiave@yahoo.it
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full 2xl:w-1/4 h-full lg:ml-20 rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2790.1100741537025!2d12.573169000000002!3d45.628525!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477956ffcb4f6c53%3A0xdccf27df858e4453!2sVia%20Molina%2C%2025%2C%2030027%20San%20Don%C3%A0%20di%20Piave%20VE%2C%20Italia!5e0!3m2!1sit!2sus!4v1739350953518!5m2!1sit!2sus"
            width="100%"
            height="400"
            className="rounded-lg"
          ></iframe>
        </div>
      </div>

      <div className="flex justify-center w-full mt-12">
        <div className="flex flex-col items-center p-8 w-full max-w-6xl">
          <h2 className="text-4xl md:text-5xl text-center text-[#780202] font-bold mb-6">
            Documenti Necessari per l'Assistenza
          </h2>
          <p className="text-gray-700 text-center text-lg md:text-xl mb-8">
            Per ottenere l'assistenza è necessario presentare i seguenti
            documenti:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full">
            {[
              { img: "images/ci.jpg", text: "Carta di Identità" },
              {
                img: "https://www.yumpu.com/it/image/facebook/25681498.jpg",
                text: "Stato di Famiglia",
              },
              {
                img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.studiocommercialemarconi.com%2Fwp-content%2Fuploads%2F2012%2F10%2Fcapire-busta-paga.jpg&f=1&nofb=1&ipt=fe0a1d98dbbe7c9517da2f70496247c33745f8fc7d4536414ea54cfc09b87bd2&ipo=images",
                text: "Busta paga/Pensione",
              },
              {
                img: "https://www.cmdataweb.it/submenu/gestione-personale/Moduli/autocertificazione_disoccupazione.jpg",
                text: "Certificato Disoccupazione",
              },
              {
                img: "https://www.tpi.it/app/uploads/2019/02/isee-2019-1.jpg",
                text: "Modulo ISEE",
              },
              {
                img: "http://www.laziodisco.it/wp-content/uploads/2022/11/ricevuta-affitto.jpg",
                text: "Ricevuta Affitto",
              },
              {
                img: "https://blog.solignani.it/wp-content/uploads/2018/02/documenti.jpg",
                text: "Altri Documenti",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow"
              >
                <img className="w-96 h-80" src={item.img} alt={item.text} />
                <span className="text-lg mt-4 text-gray-600 text-center">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer class="bg-[#780202]">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div class="md:flex md:justify-between">
            <div class="mb-6 md:mb-0">
              <a href="#" class="flex items-center">
                <img
                  src="/images/Logo_emporio.png"
                  class="h-24 me-3"
                  alt="FlowBite Logo"
                />
              </a>
            </div>
            <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Recapiti
                </h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li class="mb-4">
                    <a href="https://flowbite.com/" class="hover:underline">
                      Emporio solidale
                    </a>
                  </li>
                  <li>
                    <a href="https://tailwindcss.com/" class="hover:underline">
                      Del basso Piave
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Contatti
                </h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li class="mb-4">
                    <a
                      href="https://github.com/themesberg/flowbite"
                      class="hover:underline "
                    >
                      emporiosolidalebassopiave@gmail.com
                    </a>
                  </li>
                  <li class="mb-4">
                    <a
                      href="#"
                      class="hover:underline"
                    >
                      0421-332697
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="hover:underline"
                    >
                      344 3851626
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div class="sm:flex sm:items-center sm:justify-between">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2025{" "}
              <a href="https://flowbite.com/" class="hover:underline">
                Emporio Solidale™
              </a>
              
            </span>
            <div class="flex mt-4 sm:justify-center sm:mt-0">
              <a
                href="#"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  class="w-4 h-4"
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
                <span class="sr-only">Facebook page</span>
              </a>
              <a
                href="#"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <svg
                  class="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 21 16"
                >
                  <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                </svg>
                <span class="sr-only">Discord community</span>
              </a>
              <a
                href="#"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <svg
                  class="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 17"
                >
                  <path
                    fill-rule="evenodd"
                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Twitter page</span>
              </a>
              <a
                href="#"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <svg
                  class="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">GitHub account</span>
              </a>
              <a
                href="#"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <svg
                  class="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Dribbble account</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
