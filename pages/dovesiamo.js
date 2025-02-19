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

      <footer class="bg-[#780202] text-white">
  <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
      <div class="flex justify-center md:justify-start">
        <a href="#">
          <img src="/images/Logo_emporio.png" class="h-24" alt="Emporio Logo" />
        </a>
      </div>
      <div class="text-center md:text-left">
        <h2 class="mb-4 text-sm font-semibold uppercase">Recapiti</h2>
        <ul class="text-gray-300">
          <li class="mb-2"><a href="#" class="hover:underline">Emporio solidale</a></li>
          <li><a href="#" class="hover:underline">Del basso Piave</a></li>
        </ul>
      </div>
      <div class="text-center md:text-left">
        <h2 class="mb-4 text-sm font-semibold uppercase">Contatti</h2>
        <ul class="text-gray-300">
          <li class="mb-2"><a href="#" class="hover:underline">emporiosolidalebassopiave@gmail.com</a></li>
          <li class="mb-2"><a href="#" class="hover:underline">0421-332697</a></li>
          <li><a href="#" class="hover:underline">344 3851626</a></li>
        </ul>
      </div>
    </div>
    <hr class="my-6 border-gray-500" />
    <div class="flex flex-col sm:flex-row items-center justify-between">
      <span class="text-sm text-gray-300">© 2025 <a href="#" class="hover:underline">Emporio Solidale™</a></span>
      <div class="mt-4 sm:mt-0">
        <a href="#" class="text-gray-300 hover:text-white">
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
            <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</footer>

    </div>
  );
}
