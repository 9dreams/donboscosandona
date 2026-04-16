import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#780202] text-white w-full">
      <div className="w-full max-w-screen-xl p-4 py-6 lg:py-8 h-auto md:h-[25rem] mx-auto flex flex-col justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start w-full">
          <div className="flex justify-center md:justify-start">
            <a href="#">
              <img
                src="/images/Logo_emporio.png"
                className="h-20 md:h-24"
                alt="Emporio Logo"
              />
            </a>
          </div>

          <div className="text-center md:text-left">
            <h2 className="mb-4 text-sm font-semibold uppercase">
              Corso di cucito
            </h2>
            <hr className="mb-2 border-gray-500" />
            <ul className="text-gray-300">
              <li className="mb-2">
                <a
                  href="/servizi/corso-di-cucito"
                  className="hover:underline text-[#dfb031]"
                >
                  Vai al corso
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h2 className="mb-4 text-sm font-semibold uppercase">
              Economia domestica
            </h2>
            <hr className="mb-2 border-gray-500" />
            <ul className="text-gray-300">
              <li className="mb-2">
                <a
                  href="/servizi/economia-domestica"
                  className="hover:underline text-[#dfb031]"
                >
                  Approfondimenti
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h2 className="mb-4 text-sm font-semibold uppercase">
              Centro di ascolto
            </h2>
            <hr className="mb-2 border-gray-500" />
            <ul className="text-gray-300">
              <li className="mb-2">
                <a
                  href="/servizi/centro-di-ascolto"
                  className="hover:underline text-[#dfb031]"
                >
                  Presentazione del servizio
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h2 className="mb-4 text-sm font-semibold uppercase">Recapiti</h2>
            <hr className="mb-2 border-gray-500" />
            <ul className="text-gray-300">
              <li className="mb-2">Emporio Solidale del Basso</li>
              <li className="mb-2">Piave San Donà di Piave (VE)</li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h2 className="mb-4 text-sm font-semibold uppercase">Contatti</h2>
            <hr className="mb-2 border-gray-500" />
            <ul className="text-gray-300">
              <li className="mb-2">
                e-mail:{" "}
                <a
                  href="mailto:emporiosolidalebassopiave@gmail.com"
                  className="hover:underline text-[#dfb031] break-all"
                >
                  emporiosolidalebassopiave@gmail.com
                </a>
              </li>
              <li className="mb-2">Fax e Telefono: 0421-332697</li>
              <li className="mb-2">Cellulare: 344 3851626</li>
            </ul>
          </div>
        </div>

        <hr className="my-6 border-gray-500 w-full" />

        <div className="flex flex-col sm:flex-row items-center justify-between w-full">
          <span className="text-sm text-gray-300">
            © 2026{" "}
            <a href="#" className="hover:underline">
              Emporio Solidale™
            </a>
            . Questo sito è stato realizzato dagli allievi Buccudu Matteo, Marcon Filippo e Menegaldo Riccardo.
          </span>
          <div className="mt-4 sm:mt-0">
            <a href="https://www.facebook.com/p/Emporio-Solidale-Basso-Piave-San-Vincenzo-De-Paoli-ODV-San-Donà-di-Piave-100089118798074/?locale=it_IT" className="text-gray-300 hover:text-white">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" 
                alt="Facebook logo" 
                className="w-5 h-5"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
