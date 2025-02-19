export default function Dovesiamo() {
  return (
    <div className="flex bg-white flex-col mt-16 justify-center items-center min-h-screen">
      <div className="flex flex-col md:flex-row w-full bg-[#780202] p-3 mb-5 items-center mx-auto border-b border-gray-300 justify-between">
        <div className="flex justify-center md:ml-10">
          <img
            src="/images/Logo_emporio.png"
            className="w-[140px] rounded-full"
            alt="Logo"
          />
        </div>
        <div className="w-full md:w-7/12 flex flex-col md:flex-row gap-5 md:gap-9 items-center justify-center mt-4 md:mt-0">
          <p className="font-bold text-white hover:text-[#C7AE6A]">Home Page</p>
          <p className="font-bold text-white hover:text-[#C7AE6A]">Chi Siamo</p>
          <p className="font-bold text-white hover:text-[#C7AE6A]">Dove Siamo</p>
          <p className="font-bold text-white hover:text-[#C7AE6A]">Trasparenza</p>
          <p className="font-bold text-white hover:text-[#C7AE6A]">Servizi</p>
        </div>
        <div className="mr-10 mt-4 md:mt-0">
          <input
            type="text"
            placeholder="Ricerca"
            className="shadow-lg rounded-md placeholder:text-white placeholder:font-bold p-1 text-white font-semibold bg-[#8f1d1d] w-full md:w-auto"
          />
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-xl flex flex-col 2xl:flex-row p-8 w-full justify-center">
        <div className="flex flex-col w-[100%] 2xl:w-6/12 space-y-6">
          <h2 className="text-4xl md:text-5xl text-center text-[#99006e]">
            Emporio Solidale del Basso Piave
          </h2>
          <p className="text-gray-700 text-center font-bold text-xl md:text-2xl">
            Progetto Regione Veneto
          </p>

          <div>
            <h3 className="text-lg text-center text-[#99006e]">Dove trovarci</h3>
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
            <h3 className="text-lg text-center text-[#99006e]">Come contattarci</h3>
            <div className="flex flex-col lg:flex-row 2xl:gap-8 lg:gap-8 mt-8 justify-between">
              <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow">
                <img className="w-20" src="images/telephone.png" alt="telefono"></img>
                <span className="text-lg mt-6 text-gray-600">Tel. 0421-332697</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow">
                <img className="w-20" src="images/smartphone.png" alt="cellulare"></img>
                <span className="text-lg mt-6 text-gray-600">
                  Cell. 344 3851626
                </span>
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

      <div className="bg-white rounded-2xl shadow-xl flex flex-col 2xl:flex-row p-8 w-full justify-center">
        <div className="flex flex-col w-[100%] 2xl:w-6/12 space-y-6">
          <h2 className="text-4xl md:text-5xl text-center text-[#99006e]">
            Emporio Solidale del Basso Piave
          </h2>
          <p className="text-gray-700 text-center font-bold text-xl md:text-2xl">
            Progetto Regione Veneto
          </p>

          <div>
            <h3 className="text-lg text-center text-[#99006e]">Dove trovarci</h3>
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
            <h3 className="text-lg text-center text-[#99006e]">Come contattarci</h3>
            <div className="flex flex-col lg:flex-row 2xl:gap-8 lg:gap-8 mt-8 justify-between">
              <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow">
                <img className="w-20" src="images/telephone.png" alt="telefono"></img>
                <span className="text-lg mt-6 text-gray-600">Tel. 0421-332697</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow">
                <img className="w-20" src="images/smartphone.png" alt="cellulare"></img>
                <span className="text-lg mt-6 text-gray-600">
                  Cell. 344 3851626
                </span>
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
    </div>
  );
}
