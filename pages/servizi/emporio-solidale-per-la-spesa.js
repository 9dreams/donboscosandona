export default function Servizi() {
  return (
    <>
      <title>Emporio solidale per la spesa - Emporio Solidale</title>
      <link rel="icon" href="/images/servizi_favicon/favicon.ico" />

      <div class="flex flex-col">
        <div class="flex flex-col md:flex-row w-full bg-[#780202] p-3 items-center mx-auto border-b border-gray-300 justify-between">
          <div class="flex justify-center md:ml-0 lg:ml-10 mb-2 md:mb-0">
            <img
              src="/images/Logo_emporio.png"
              class="w-20 md:w-[120px] lg:w-[140px] rounded-full"
              alt="Logo"
            />
          </div>
          <div class="w-full md:w-7/12 flex flex-col md:flex-row gap-3 md:gap-6 items-center justify-center text-center">
            {[
              { name: "Home Page", link: "/", class: "text-white" },
              { name: "Chi Siamo", link: "chisiamo", class: "text-white" },
              { name: "Dove Siamo", link: "dovesiamo", class: "text-white" },
              { name: "Trasparenza", link: "trasparenza", class: "text-white" },
              {
                name: "Servizi",
                link: "servizi",
                class: "text-[#C7AE6A]",
              },
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
          <div class="mt-3 md:mt-0 md:mr-0 lg:mr-10 flex justify-center items-center w-full md:w-auto">
            <input
              type="text"
              placeholder="Ricerca"
              class="shadow-lg rounded-md placeholder:text-white placeholder:font-bold p-2 text-white font-semibold bg-[#8f1d1d] w-full md:w-auto"
            />
          </div>
        </div>

        <div className="w-full bg-[url('/images/servizi_favicon/sfondo.png')] bg-repeat bg-center">
          <div className="flex flex-col md:flex-row pt-10 md:pt-20 px-5 md:px-10 lg:pl-20">
            <a href="/" className="mb-4 md:mb-0">
              <p className="text-sm text-white">Emporio Solidale</p>
            </a>
            <p className="ml-0 md:ml-12 lg:ml-24 text-sm text-white">Emporio solidale per la spesa</p>
          </div>
          <div className="flex flex-col px-5 md:px-10 lg:pl-20 pt-8 md:pt-14 pb-10 md:pb-20 gap-y-4 w-full md:w-4/5 lg:w-1/2">
            <h1 className="text-2xl md:text-3xl lg:text-4xl text-white">Emporio solidale per la spesa</h1>
            <p className="text-sm md:text-md text-white">È un centro di distribuzione fatto di persone per le persone, dove tanti volontari con impegno e responsabilità, si prendono cura dei bisogni primari di chi in un periodo difficile della propria vita chiede aiuto.</p>
            <p className="text-sm md:text-md text-white">Dal 2016 si propone di dare una risposta immediata ai bisogni più urgenti delle famiglie in momentanea difficoltà, mettendo a disposizione generi alimentari attraverso una vasta rete di solidarietà, coinvolgendo le molteplici Associazioni del territorio, nel rispetto dei diritti umani e della qualità della vita.</p>
            <p className="text-sm md:text-md text-white">Un vero supermercato all’interno del quale si possono reperire gratuitamente prodotti alimentari e per l’igiene della persona, raccolti attraverso la “Colletta Alimentare” e “Il Banco Alimentare”. Inoltre prodotti freschi, frutta e verdura, vengono donati dai supermercati convenzionati con l’Emporio nel rispetto della legge 166 del 2016 contro gli sprechi alimentari. L’Emporio Solidale è aperto martedì e giovedì dalle 15.00 alle 17.00 e il sabato dalle 10.00 alle 12.00.</p>
            <h2 className="text-xl md:text-2xl text-white">Come funziona il servizio?</h2>
            <p className="text-sm md:text-md text-white">Viene erogata una spesa mensile alle persone in difficoltà.</p>
            <h2 className="text-xl md:text-2xl text-white">Cosa devo fare?</h2>
            <p className="text-sm md:text-md text-white">Devi recarti al centro di ascolto Beato Federico Ozanam in via Pralungo, 12 a San Donà di Piave (presso casa Saretta) con i seguenti documenti:</p>
            <ul className="text-sm md:text-md text-white list-disc pl-5">
              <li>Fotocopia carta di identità</li>
              <li>Stato famiglia (rilasciato dal comune “USO ONLUS”)</li>
              <li>Busta paga e/o pensione dei componenti</li>
              <li>Certificato di disoccupazione recente</li>
              <li>Modello ISEE (rilasciato dal comune di residenza o il CAF)</li>
              <li>Ricevuta d’affitto pagato nell’ultimo mese</li>
              <li>Ogni altro documento che dimostri lo stato economico di necessità</li>
            </ul>
            <h2 className="text-xl md:text-2xl text-white">Quando Il centro di ascolto è aperto?</h2>
            <p className="text-sm md:text-md text-white">Il centro è aperto secondo i seguenti orari:</p>
            <ul className="text-sm md:text-md text-white list-disc pl-5">
              <li>Mercoledì dalle 15 alle 17</li>
              <li>Giovedì dalle 10 alle 12</li>
              <li>Venerdì dalle 15 alle 17</li>
            </ul>
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
                <h2 class="mb-4 text-sm font-semibold uppercase">Servizi</h2>
                <ul class="text-gray-300">
                  <li class="mb-2">
                    <a href="#" class="hover:underline">
                      Corso di cucito
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="#" class="hover:underline">
                      Vai al corso
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="#" class="hover:underline">
                      Economia domestica
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="#" class="hover:underline">
                      Approfondimenti
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="#" class="hover:underline">
                      Centro di ascolto
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">
                      Presentazione del servizio
                    </a>
                  </li>
                </ul>
              </div>

              <div class="text-center md:text-left">
                <h2 class="mb-4 text-sm font-semibold uppercase">Contatti</h2>
                <ul class="text-gray-300">
                  <li class="mb-2">
                    <p>
                      <span className="font-semibold">Recapiti:</span> Emporio Solidale del Basso Piave San Donà di Piave (VE)
                    </p>
                  </li>
                  <li class="mb-2">
                    <p>
                      <span className="font-semibold">e-mail:</span> <a href="mailto:emporiosolidalebassopiave@gmail.com" class="hover:underline">emporiosolidalebassopiave@gmail.com</a>
                    </p>
                  </li>
                  <li class="mb-2">
                    <p>
                      <span className="font-semibold">Fax e Telefono:</span> 0421-332697
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="font-semibold">Cellulare:</span> 344 3851626
                    </p>
                  </li>
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