import Layout from "../components_emporio/Layout";

export default function Chisiamo() {
  return (
    <Layout>
      <title>Chi siamo - Emporio Solidale</title>
      <link
        rel="icon"
        type="image/x-icon"
        href="/images/servizi_favicon/favicon.ico"
      />

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
              Siamo una rete di{" "}
              <strong>Associazioni di Volontariato</strong> con l’obbiettivo di
              una progettazione partecipe. Il{" "}
              <strong>Progetto Emporio Solidale</strong> ha portato varie
              Associazioni con diverse competenze a investire risorse e
              professionalità in una rete condivisa con istituzioni e Servizi
              Sociali.
            </p>
            <p className="font-normal text-md text-gray-800 mb-3">
              L’Emporio Solidale del Basso Piave è costituito da un
              partenariato operativo tra{" "}
              <strong>Associazioni del territorio</strong>, che condivide i
              propri volontari con funzioni diverse, ricoprendo vari ruoli
              necessari alla gestione dell’Emporio stesso.
            </p>
            <p className="font-normal text-md text-gray-800 mb-3">
              Accoglienza, presa in carico, attività di distribuzione merce,
              controllo scadenze, addetti al magazzino, oppure referenti per i
              fornitori o per le istituzioni, raccolta di alimenti freschi
              presso la grande distribuzione, controllo e smaltimento rifiuti,
              corsi di formazione , turnazione volontari, oppure
              rendicontazione per i <strong>Progetti regionali</strong>.
            </p>
            <p className="font-normal text-md text-gray-800 mb-3">
              Ogni volontario di ciascuna Associazione, ponendo in risalto la
              propria identità associativa, mette a servizio del prossimo in
              difficoltà, le proprie competenze e attitudini, ricordando che il{" "}
              <strong>BENE nasce dal CUORE ed è accompagnato dalla MENTE</strong>
              , ponendosi accanto a ciascun assistito con umiltà ed empatia.
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
                  alt="Telefono"
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
                  alt="Email"
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

        <div className="flex flex-col w-11/12 md:w-11/12 gap-5 justify-center mb-20">
          <div className="flex flex-col w-full">
            <h1 className="font-semibold text-3xl text-gray-800 mb-10 text-center">
              I nostri partner
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 items-center">
              {/* Partner 1 */}
              <div className="flex flex-col border border-gray-200 rounded-3xl p-3 items-center w-full h-full shadow-md hover:shadow-lg transition-shadow duration-300">
                <img
                  src="images/comunesan.jpg"
                  className="w-full h-40 object-contain mb-2"
                  alt="Comune di San Donà di Piave"
                />
                <h1 className="text-md text-center font-medium">
                  Comune di San Donà di Piave
                </h1>
              </div>

              {/* Partner 2 */}
              <div className="flex flex-col border border-gray-200 rounded-3xl p-3 items-center w-full h-full shadow-md hover:shadow-lg transition-shadow duration-300">
                <img
                  src="images/aitsamlogo.jpg"
                  className="w-full h-40 object-contain mb-2"
                  alt="A.i.t.s.a.m."
                />
                <h1 className="text-md text-center font-medium">
                  <strong>A.i.t.s.a.m.</strong> Associazione italiana Tutela
                  Salute Mentale
                </h1>
              </div>

              {/* Partner 3 */}
              <div className="flex flex-col border border-gray-200 rounded-3xl p-3 items-center w-full h-full shadow-md hover:shadow-lg transition-shadow duration-300">
                <img
                  src="images/apheeraclea.jpg"
                  className="w-full h-40 object-contain mb-2"
                  alt="A.p.h.e."
                />
                <h1 className="text-md text-center font-medium">
                  <strong>A.p.h.e.</strong> Centro Casa dell’Accoglienza Eraclea
                </h1>
              </div>

              {/* Partner 4 */}
              <div className="flex flex-col border border-gray-200 rounded-3xl p-3 items-center w-full h-full shadow-md hover:shadow-lg transition-shadow duration-300">
                <img
                  src="images/alpontecop.png"
                  className="w-full h-40 object-contain mb-2"
                  alt="Al Ponte Coop. Sociale"
                />
                <h1 className="text-md text-center font-medium">
                  Al Ponte Coop. Sociale
                </h1>
              </div>

              {/* Partner 5 */}
              <div className="flex flex-col border border-gray-200 rounded-3xl p-3 items-center w-full h-full shadow-md hover:shadow-lg transition-shadow duration-300">
                <img
                  src="images/condividendoass.jpg"
                  className="w-full h-40 object-contain mb-2"
                  alt="Associazione Condividendo"
                />
                <h1 className="text-md text-center font-medium">
                  Associazione Condividendo
                </h1>
              </div>

              {/* Partner 6 */}
              <div className="flex flex-col border border-gray-200 rounded-3xl p-3 items-center w-full h-full shadow-md hover:shadow-lg transition-shadow duration-300">
                <img
                  src="images/assmariaeraclea.jpg"
                  className="w-full h-40 object-contain mb-2"
                  alt="Associazione In Cammino con Maria, Eraclea"
                />
                <h1 className="text-md text-center font-medium">
                  Associazione In Cammino con Maria, Eraclea
                </h1>
              </div>

              {/* Partner 7 */}
              <div className="flex flex-col border border-gray-200 rounded-3xl p-3 items-center w-full h-full shadow-md hover:shadow-lg transition-shadow duration-300">
                <img
                  src="images/assinsieme.png"
                  className="w-full h-40 object-contain mb-2"
                  alt="Associazione Insieme Si Fa"
                />
                <h1 className="text-md text-center font-medium">
                  Associazione Insieme Si Fa
                </h1>
              </div>

              {/* Partner 8 */}
              <div className="flex flex-col border border-gray-200 rounded-3xl p-3 items-center w-full h-full shadow-md hover:shadow-lg transition-shadow duration-300">
                <img
                  src="images/asssanvincenzo.jpg"
                  className="w-full h-40 object-contain mb-2"
                  alt="Associazione San Vincenzo de Paoli Santi LIberale e Bartolomea"
                />
                <h1 className="text-md text-center font-medium">
                  Associazione San Vincenzo de Paoli Santi LIberale e Bartolomea
                </h1>
              </div>

              {/* Partner 9 */}
              <div className="flex flex-col border border-gray-200 rounded-3xl p-3 items-center w-full h-full shadow-md hover:shadow-lg transition-shadow duration-300">
                <img
                  src="images/scuolamaterna.jpg"
                  className="w-full h-40 object-contain mb-2"
                  alt='Associazione Scuola Materna c"A. Spisani" Stretti di Eraclea'
                />
                <h1 className="text-md text-center font-medium">
                  Associazione Scuola Materna c"A. Spisani" Stretti di Eraclea
                </h1>
              </div>

              {/* Partner 10 */}
              <div className="flex flex-col border border-gray-200 rounded-3xl p-3 items-center w-full h-full shadow-md hover:shadow-lg transition-shadow duration-300">
                <img
                  src="images/sanpiox.jpg"
                  className="w-full h-40 object-contain mb-2"
                  alt="Associazione Società di San Vincenzo de Paoli San Pio X°"
                />
                <h1 className="text-md text-center font-medium">
                  Associazione Società di San Vincenzo de Paoli San Pio X°
                </h1>
              </div>

              {/* Partner 11 */}
              <div className="flex flex-col border border-gray-200 rounded-3xl p-3 items-center w-full h-full shadow-md hover:shadow-lg transition-shadow duration-300">
                <img
                  src="images/dicembre79.jpg"
                  className="w-full h-40 object-contain mb-2"
                  alt="Associazione Solidarietà Dicembre ‘79"
                />
                <h1 className="text-md text-center font-medium">
                  Associazione Solidarietà Dicembre ‘79
                </h1>
              </div>

              {/* Partner 12 */}
              <div className="flex flex-col border border-gray-200 rounded-3xl p-3 items-center w-full h-full shadow-md hover:shadow-lg transition-shadow duration-300">
                <img
                  src="images/duomosan.jpg"
                  className="w-full h-40 object-contain mb-2"
                  alt="Caritas Parrocchia Duomo S. Maria delle Grazie - San Donà di Piave"
                />
                <h1 className="text-md text-center font-medium">
                  Caritas Parrocchia Duomo S. Maria delle Grazie - San Donà di
                  Piave
                </h1>
              </div>

              {/* Partner 13 */}
              <div className="flex flex-col border border-gray-200 rounded-3xl p-3 items-center w-full h-full shadow-md hover:shadow-lg transition-shadow duration-300">
                <img
                  src="images/cavaiuto.jpg"
                  className="w-full h-40 object-contain mb-2"
                  alt="C.A.V. Centro Aiuto alla Vita"
                />
                <h1 className="text-md text-center font-medium">
                  <strong>C.A.V.</strong> Centro Aiuto alla Vita
                </h1>
              </div>

              {/* Partner 14 */}
              <div className="flex flex-col border border-gray-200 rounded-3xl p-3 items-center w-full h-full shadow-md hover:shadow-lg transition-shadow duration-300">
                <img
                  src="images/consorzioinsieme.png"
                  className="w-full h-40 object-contain mb-2"
                  alt="Consorzio Insieme Soc. Coop. Sociale"
                />
                <h1 className="text-md text-center font-medium">
                  Consorzio Insieme Soc. Coop. Sociale
                </h1>
              </div>

              {/* Partner 15 */}
              <div className="flex flex-col border border-gray-200 rounded-3xl p-3 items-center w-full h-full shadow-md hover:shadow-lg transition-shadow duration-300">
                <img
                  src="images/crocerossa.jpg"
                  className="w-full h-40 object-contain mb-2"
                  alt="Croce Rossa Italiana Comitato di Ve Onlus"
                />
                <h1 className="text-md text-center font-medium">
                  Croce Rossa Italiana Comitato di Ve Onlus
                </h1>
              </div>

              {/* Partner 16 */}
              <div className="flex flex-col border border-gray-200 rounded-3xl p-3 items-center w-full h-full shadow-md hover:shadow-lg transition-shadow duration-300">
                <img
                  src="images/mascimovimento.png"
                  className="w-full h-40 object-contain mb-2"
                  alt="Masci Movimento Adulti Scout Cattolici Italiani"
                />
                <h1 className="text-md text-center font-medium">
                  Masci Movimento Adulti Scout Cattolici Italiani
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
