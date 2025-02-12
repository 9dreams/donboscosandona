export default function Dovesiamo() {
  return (
    <div class="flex bg-white flex-col mt-16 justify-center items-center h-screen ">
      <div class="bg-white rounded-2xl shadow-xl flex flex-wrap lg:flex-nowrap p-8 w-[1800px]">
        <div class="flex flex-col w-full lg:w-1/2 space-y-6">
          <h2 class="text-5xl text-center text-[#99006e] ">
            Emporio Solidale del Basso Piavei
          </h2>
          <p class="text-gray-700 text-center font-bold text-2xl">
            Progetto Regione Veneto
          </p>

          <div>
            <h3 class="text-lg text-center text-[#99006e]">Dove trovarci</h3>
            <div class="grid grid-cols-1 gap-12 mt-8">
              <div class="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow">
                <img class="w-20" src="images/map.png"></img>
                <span class="text-lg mt-6 text-gray-600">
                  S. Donà di Piave - Via Molina, 25 -
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-lg text-center text-[#99006e]">Come contattarci</h3>
            <div class="grid grid-cols-3 gap-12 mt-8">
              <div class="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow">
                <img class="w-20" src="images/telephone.png"></img>
                <span class="text-lg mt-6 text-gray-600">Tel. 0421-332697</span>
              </div>
              <div class="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow">
                <img class="w-20" src="images/smartphone.png"></img>
                <span class="text-lg mt-6 text-gray-600">
                  Cell. 344 3851626
                </span>
              </div>
              <div class="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow">
                <img class="w-20" src="images/mail.png"></img>
                <span class="text-lg mt-6 text-gray-600">
                  emporiosolidalebassopiave@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full lg:w-1/2 h-full ml-20 rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2790.1100741537025!2d12.573169000000002!3d45.628525!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477956ffcb4f6c53%3A0xdccf27df858e4453!2sVia%20Molina%2C%2025%2C%2030027%20San%20Don%C3%A0%20di%20Piave%20VE%2C%20Italia!5e0!3m2!1sit!2sus!4v1739350953518!5m2!1sit!2sus"
            width="900"
            height="600"
          ></iframe>
        </div>
      </div>

      <div class="bg-white rounded-2xl shadow-xl mt-16 flex flex-wrap lg:flex-nowrap p-8 w-[1800px]">
        <div class="flex flex-col w-full lg:w-1/2 space-y-6">
          <h2 class="text-5xl text-center text-[#99006e] ">
            Centro di Ascolto B. F. OZANAM
          </h2>
          <p class="text-gray-700 text-center font-bold text-2xl">
            Casa Saretta
          </p>

          <div>
            <h3 class="text-lg text-center text-[#99006e]">Dove trovarci</h3>
            <div class="grid grid-cols-1 gap-12 mt-8">
              <div class="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow">
                <img class="w-20" src="images/map.png"></img>
                <span class="text-lg mt-6 text-gray-600">
                  Casa Saretta, via Pralungo, 12 - S. Donà di Piave (VE)
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-lg text-center text-[#99006e]">Come contattarci</h3>
            <div class="grid grid-cols-3 gap-12 mt-8">
              <div class="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow">
                <img class="w-20" src="images/telephone.png"></img>
                <span class="text-lg mt-6 text-gray-600">Tel. 0421-332697</span>
              </div>
              <div class="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow">
                <img class="w-20" src="images/smartphone.png"></img>
                <span class="text-lg mt-6 text-gray-600">
                  Cell. 344 3851626
                </span>
              </div>
              <div class="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow">
                <img class="w-20" src="images/mail.png"></img>
                <span class="text-lg mt-6 text-gray-600">
                  sanvincenzodepaolisandonadipiave@yahoo.it
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full lg:w-1/2 h-full ml-20 rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1394.8981816638263!2d12.564621!3d45.634827!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477950f899f1fa0d%3A0xdaaabb44b27b7c57!2sCasa%20Saretta!5e0!3m2!1sit!2sus!4v1739351381767!5m2!1sit!2sus"
            width="900"
            height="600"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
