"use client";

import Image from "next/image";
import Link from "next/link";

export default function LuoghiVisitare() {
  return (
    <div className="py-12 mt-4 px-4 max-w-5xl mx-auto">
      {/* Titolo con linee decorative */}
      <div className="flex items-center justify-center mb-12">
        <div className="h-[1px] bg-[#0265A5] w-1/4"></div>
        <h2 className="text-3xl md:text-4xl text-gray-800 font-medium px-6">
          I luoghi da visitare
        </h2>
        <div className="h-[1px] bg-[#0265A5] w-1/4"></div>
      </div>

      {/* Prima riga con due card principali */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Card Caorle */}
        <div className="bg-[#FAFAFA] rounded-lg shadow-md overflow-hidden h-full flex flex-col">
          <div className="relative aspect-square w-full">
            <Image
              src="/images/luoghivisitare/mare_caorle.png"
              alt="Vista di Caorle al tramonto"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6 text-left flex flex-col flex-grow">
            <h3 className="text-2xl text-gray-800 font-medium mb-4">
              Alla scoperta di Caorle
            </h3>
            <p className="text-gray-600 mb-6 flex-grow">
              Immaginate diciotto chilometri di spiaggia sabbiosa color oro,
              mare pulito adatto ai bambini, limpido, pescoso e pieno di tesori
              sommersi, per la gioia dei pescatori e amanti delle immersioni e
              degli sport acquatici, e poi le dune, la natura incontaminata, il
              borgo storico sul mare, le eccellenze enogastronomiche del
              territorio...
            </p>
            <div className="mt-auto">
              <a href="/caorle">
                <button
                  type="button"
                  className="text-white cursor-pointer bg-[#0265A5] font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 whitespace-nowrap"
                >
                  SCOPRI DI PIÙ
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Card Itinerari in bicicletta */}
        <div className="bg-[#FAFAFA] rounded-lg shadow-md overflow-hidden h-full flex flex-col">
          <div className="relative aspect-square w-full">
            <Image
              src="/images/luoghivisitare/bici.png"
              alt="Persone che osservano il paesaggio dalla bicicletta"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6 text-left flex flex-col flex-grow">
            <h3 className="text-2xl text-gray-800 font-medium mb-4">
              Itinerari in bicicletta
            </h3>
            <p className="text-gray-600 mb-6 flex-grow">
              Con il servizio bici gratuito offerto dal Soggiorno Marino don
              Bosco, fare un'uscita in bicicletta è uno dei modi migliori per
              vivere la natura nei dintorni di Caorle. Scegli il percorso più
              adatto a te... o provane uno diverso ogni giorno... e parti per
              l'avventura. Caorle e i suoi territori incontaminati ti stanno
              aspettando!
            </p>
            <div className="mt-auto">
              <a href="/itinerari-bici">
                <button
                  type="button"
                  className="text-white cursor-pointer bg-[#0265A5] font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 whitespace-nowrap"
                >
                  SCOPRI DI PIÙ
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Seconda riga con tre card più piccole */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card Ospitalità per gruppi */}
        <div className="bg-[#FAFAFA] rounded-lg shadow-md overflow-hidden h-full flex flex-col">
          <div className="relative aspect-square w-full">
            <Image
              src="/images/luoghivisitare/sala.png"
              alt="Sala da pranzo per gruppi"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4 text-left flex flex-col flex-grow">
            <h3 className="text-xl text-gray-800 font-medium mb-3">
              Ospitalità per gruppi
            </h3>
            <p className="text-gray-600 mb-4 flex-grow text-sm">
              Per soggiorni di almeno 40 ospiti, siamo a tua disposizione nei
              periodi dedicati all'ospitalità per i gruppi...
            </p>
            <div className="mt-auto">
              <a href="/gruppi">
                <button
                  type="button"
                  className="text-white cursor-pointer bg-[#0265A5] font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 whitespace-nowrap"
                >
                  SCOPRI DI PIÙ
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Card Servizio bici gratuito */}
        <div className="bg-[#FAFAFA] rounded-lg shadow-md overflow-hidden h-full flex flex-col">
          <div className="relative aspect-square w-full">
            <Image
              src="/images/luoghivisitare/pista_ciclabile.jpg"
              alt="Pista ciclabile"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4 text-left flex flex-col flex-grow">
            <h3 className="text-xl text-gray-800 font-medium mb-3">
              Servizio bici gratuito
            </h3>
            <p className="text-gray-600 mb-4 flex-grow text-sm">
              Biciclette su prenotazione gratuita per splendide scampagnate alla
              scoperta di Caorle e dintorni.
            </p>
            <div className="mt-auto">
              <a href="/servizio-bici">
                <button
                  type="button"
                  className="text-white cursor-pointer bg-[#0265A5] font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 whitespace-nowrap"
                >
                  SCOPRI DI PIÙ
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Card ATVO */}
        <div className="bg-[#FAFAFA] rounded-lg shadow-md overflow-hidden h-full flex flex-col">
          <div className="relative aspect-square w-full">
            <Image
              src="/images/luoghivisitare/ATVO.png"
              alt="Logo ATVO"
              fill
              className="object-contain p-4"
            />
          </div>
          <div className="p-4 text-left flex flex-col flex-grow">
            <p className="text-gray-600 mb-4 flex-grow text-sm">
              Una comoda fermata degli autobus di fronte al Soggiorno Marino ti
              permetterà di viaggiare sulle linee ATVO: 4a / Aeroporto Marco
              Polo di Venezia - Caorle - P.S.Margherita - Lido Altanea - Duna
              Verde 97 / Caorle - Porto S. Margherita - Duna Verde Anche i
              biglietti possono essere acquistati comodamente all'interno del
              Soggiorno.
            </p>
            <div className="mt-auto">
              <a
                href="https://www.atvo.it/it-orari-e-autolinee.html"
                target="_blank"
              >
                <button
                  type="button"
                  className="text-white cursor-pointer bg-[#0265A5] font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 whitespace-nowrap"
                >
                  SCOPRI GLI ORARI
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
