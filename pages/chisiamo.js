import Layout from "../components_emporio/Layout";


export default function Chisiamo() {
  return (
    <Layout>
    <title>Chi siamo - Emporio Solidale</title>
    <link rel="icon" type="image/x-icon" href="/images/servizi_favicon/favicon.ico" />

    <div className="flex flex-col items-center">

      <div className="flex flex-col 2xl:flex-row w-11/12 md:w-7/12 gap-5 mb-40 mt-32">
        <div className="flex flex-col w-full 2xl:w-8/12">
          <h1 className="font-semibold text-3xl text-gray-800 mb-8 text-center md:text-left">
            EMPORIO SOLIDALE DEL BASSO PIAVE
          </h1>
          <h2 className="font-semibold text-2xl text-gray-800 mb-5 text-center md:text-left">
            PROGETTO REGIONE VENETO
          </h2>
          <p className="font-normal text-md text-gray-800 mb-3">
            Siamo una rete di <strong>Associazioni di Volontariato</strong> con
            l’obbiettivo di una progettazione partecipe. Il{" "}
            <strong>Progetto Emporio Solidale</strong> ha portato varie
            Associazioni con diverse competenze a investire risorse e
            professionalità in una rete condivisa con istituzioni e Servizi
            Sociali.
          </p>
          <p className="font-normal text-md text-gray-800 mb-3">
            L’Emporio Solidale del Basso Piave è costituito da un partenariato
            operativo tra <strong>Associazioni del territorio</strong>, che
            condivide i propri volontari con funzioni diverse, ricoprendo vari
            ruoli necessari alla gestione dell’Emporio stesso.
          </p>
          <p className="font-normal text-md text-gray-800 mb-3">
            Accoglienza, presa in carico, attività di distribuzione merce,
            controllo scadenze, addetti al magazzino, oppure referenti per i
            fornitori o per le istituzioni, raccolta di alimenti freschi presso
            la grande distribuzione, controllo e smaltimento rifiuti, corsi di
            formazione , turnazione volontari, oppure rendicontazione per i{" "}
            <strong>Progetti regionali</strong>.
          </p>
          <p className="font-normal text-md text-gray-800 mb-3">
            Ogni volontario di ciascuna Associazione, ponendo in risalto la
            propria identità associativa, mette a servizio del prossimo in
            difficoltà, le proprie competenze e attitudini, ricordando che il{" "}
            <strong>BENE nasce dal CUORE ed è accompagnato dalla MENTE</strong>,
            ponendosi accanto a ciascun assistito con umiltà ed empatia.
          </p>
        </div>

        <div className="flex flex-col w-full 2xl:w-6/12">
          <h3 className="font-semibold text-xl text-gray-800 mb-2 text-center md:text-left">
            CAPOFILA DEL PROGETTO
          </h3>
          <p className="font-medium text-md text-gray-800 mb-3 text-center md:text-left">
            Ass. San Vincenzo dè Paoli
          </p>
          <p className="font-medium text-md text-gray-800 mb-3 text-center md:text-left">
            Conferenza Santi Liberale e Bartolomea
          </p>
          <p className="font-medium text-md text-gray-800 mb-5 text-center md:text-left">
            San Donà di Piave.
          </p>

          <div className="flex flex-col md:flex-row gap-4 md:gap-5 mb-5">
            <div className="flex flex-col items-center justify-center py-4 md:py-6 rounded-3xl shadow-md  w-full md:w-1/2 bg-white border border-gray-300">
              <img
                src="https://cdn-icons-png.flaticon.com/512/392/392001.png"
                className="w-10 md:w-12 mb-3"
              />
              <span className="font-light text-gray-700 text-sm">
                <strong>Tel:</strong> 0421-332697
              </span>
              <span className="font-light text-gray-700 text-sm">
                <strong>Cell:</strong> 344 385 1626
              </span>
            </div>

            <div className="flex flex-col items-center justify-center py-4 md:py-6 rounded-3xl shadow-md  w-full md:w-1/2 bg-white border border-gray-300 max-w-md">
              <img
                src="https://www.5wmagazine.com/wp-content/uploads/2015/09/chiocciola.png"
                className="w-10 md:w-12 mb-2"
              />
              <span className="font-light text-gray-700">
                <strong>Mail:</strong>
              </span>
              <span className="font-light text-gray-700 text-center break-words w-full text-sm">
                emporiosolidalebassopiave@gmail.com
              </span>
            </div>
          </div>

          <img
            src="https://italiani.coop/wp-content/uploads/2020/05/spesa2maggio-scaled.jpg"
            className="w-full rounded-lg"
            alt="Logo"
          />
        </div>
      </div>

      <div className="flex flex-col 2xl:flex-row w-11/12 md:w-11/12 gap-5 justify-center mb-20">
        <div className="flex flex-col w-full 2xl:w-11/12">
          <h1 className="font-semibold text-3xl text-gray-800 mb-10 text-center">
            I nostri partner
          </h1>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 items-center">
            <div class="flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full">
              <img
                src="images/comunesan.jpg"
                class="w-full h-80 object-contain mb-3"
              />
              <h1 class="text-md text-center">Comune di San Donà di Piave</h1>
            </div>
            <div class="flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full">
              <img
                src="images/aitsamlogo.jpg"
                class="w-full h-80 object-contain mb-3"
              />
              <h1 class="text-md text-center">
                <strong>A.i.t.s.a.m.</strong> Associazione italiana Tutela
                Salute Mentale
              </h1>
            </div>
            <div class="flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full">
              <img
                src="images/apheeraclea.jpg"
                class="w-full h-80 object-contain mb-3"
              />
              <h1 class="text-md text-center">
                <strong>A.p.h.e.</strong> Centro Casa dell’Accoglienza Eraclea
              </h1>
            </div>
            <div class="flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full">
              <img
                src="images/alpontecop.png"
                class="w-full h-80 object-contain mb-3"
              />
              <h1 class="text-md text-center">Al Ponte Coop. Sociale</h1>
            </div>
            <div class="flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full">
              <img
                src="images/condividendoass.jpg"
                class="w-full h-80 object-contain mb-3"
              />
              <h1 class="text-md text-center">Associazione Condividendo</h1>
            </div>
            <div class="flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full">
              <img
                src="images/assmariaeraclea.jpg"
                class="w-full h-80 object-contain mb-3"
              />
              <h1 class="text-md text-center">
                Associazione In Cammino con Maria, Eraclea
              </h1>
            </div>
            <div class="flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full">
              <img
                src="images/assinsieme.png"
                class="w-full h-80 object-contain mb-3"
              />
              <h1 class="text-md text-center">Associazione Insieme Si Fa</h1>
            </div>
            <div class="flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full">
              <img
                src="images/asssanvincenzo.jpg"
                class="w-full h-80 object-contain mb-3"
              />
              <h1 class="text-md text-center">
                Associazione San Vincenzo de Paoli Santi LIberale e Bartolomea
              </h1>
            </div>
            <div class="flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full">
              <img
                src="images/scuolamaterna.jpg"
                class="w-full h-80 object-contain mb-3"
              />
              <h1 class="text-md text-center">
                Associazione Scuola Materna c”A. Spisani” Stretti di Eraclea
              </h1>
            </div>
            <div class="flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full">
              <img
                src="images/sanpiox.jpg"
                class="w-full h-80 object-contain mb-3"
              />
              <h1 class="text-md text-center">
                Associazione Società di San Vincenzo de Paoli San Pio X°
              </h1>
            </div>
            <div class="flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full">
              <img
                src="images/dicembre79.jpg"
                class="w-full h-80 object-contain mb-3"
              />
              <h1 class="text-md text-center">
                Associazione Solidarietà Dicembre ‘79
              </h1>
            </div>
            <div class="flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full">
              <img
                src="images/duomosan.jpg"
                class="w-full h-80 object-contain mb-3"
              />
              <h1 class="text-md text-center">
                Caritas Parrocchia Duomo S. Maria delle Grazie - San Donà di
                Piave
              </h1>
            </div>
            <div class="flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full">
              <img
                src="images/cavaiuto.jpg"
                class="w-full h-80 object-contain mb-3"
              />
              <h1 class="text-md text-center">
                <strong>C.A.V.</strong> Centro Aiuto alla Vita
              </h1>
            </div>
            <div class="flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full">
              <img
                src="images/consorzioinsieme.png"
                class="w-full h-80 object-contain mb-3"
              />
              <h1 class="text-md text-center">
                Consorzio Insieme Soc. Coop. Sociale
              </h1>
            </div>
            <div class="flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full">
              <img
                src="images/crocerossa.jpg"
                class="w-full h-80 object-contain mb-3"
              />
              <h1 class="text-md text-center">
                Croce Rossa Italiana Comitato di Ve Onlus
              </h1>
            </div>
            <div class="flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full">
              <img
                src="images/mascimovimento.png"
                class="w-full h-80 object-contain mb-3"
              />
              <h1 class="text-md text-center">
                Masci Movimento Adulti Scout Cattolici Italiani
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
    </Layout>
  );
}
