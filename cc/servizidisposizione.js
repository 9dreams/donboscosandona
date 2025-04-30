import Image from "next/image";
import Servizio from "@/cc/servizio";
export default function Servizidisposizione() {
  return (
    <div className="mt-20 max-w-4xl mx-auto">
      {/* Titolo sopra le icone */}
      <h1 className="text-[2.6rem] font-semibold text-center mb-8 text-[#0265A5]">
        I servizi a vostra disposizione
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-12">
        <Servizio immagine=""  titolo="" testo=""/>
        {/* Servizio 1 */}
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center w-full h-32">
            <Image
              src="/images/servizidisposizione/spiaggia_privata.png"
              alt="Spiaggia privata"
              width={100}
              height={100}
              className="rounded-full object-contain"
            />
          </div>
          <h2 className="text-xl mt-2 text-center mb-2 text-[#0265A5]">
            Spiaggia privata
          </h2>
          <p className="text-center text-[#666666] text-base">
            Una spiaggia riservata agli ospiti del soggiorno garantisce la
            tranquillità di cui la tua famiglia ha bisogno.
          </p>
        </div>

        {/* Servizio 2 */}
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center w-full h-32">
            <Image
              src="/images/servizidisposizione/ombrelloni_sdraio.png"
              alt="Ombrelloni e sdraio"
              width={100}
              height={100}
              className="rounded-full object-contain"
            />
          </div>
          <h2 className="text-xl mt-2 text-center mb-2 text-[#0265A5]">
            Ombrelloni e sdraio
          </h2>
          <p className="text-center text-[#666666] text-base">
            Ogni camera ha in dotazione un ombrellone con sdraio e lettino.
          </p>
        </div>

        {/* Servizio 3 */}
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center w-full h-32">
            <Image
              src="/images/servizidisposizione/guardiaspiaggia.png"
              alt="Guardiaspiaggia"
              width={100}
              height={100}
              className="rounded-full object-contain"
            />
          </div>
          <h2 className="text-xl mt-2 text-center mb-2 text-[#0265A5]">
            Guardiaspiaggia
          </h2>
          <p className="text-center text-[#666666] text-base">
            Nel periodo estivo la balneazione è sorvegliata in determinati
            orari.
          </p>
        </div>

        {/* Servizio 4 */}
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center w-full h-32">
            <Image
              src="/images/servizidisposizione/ascensore.png"
              alt="Ascensore"
              width={100}
              height={100}
              className="rounded-full object-contain"
            />
          </div>
          <h2 className="text-xl mt-2 text-center mb-2 text-[#0265A5]">
            Ascensore
          </h2>
          <p className="text-center text-[#666666] text-base">
            I piani superiori sono raggiungibili da tutti grazie a un comodo
            ascensore.
          </p>
        </div>

        {/* Servizio 5 */}
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center w-full h-32">
            <Image
              src="/images/servizidisposizione/aria_condizionata.png"
              alt="Aria condizionata"
              width={100}
              height={100}
              className="rounded-full object-contain"
            />
          </div>
          <h2 className="text-xl mt-2 text-center mb-2 text-[#0265A5]">
            Aria condizionata
          </h2>
          <p className="text-center text-[#666666] text-base">
            Il relax in camera è garantito da un moderno impianto di
            condizionamento.
          </p>
        </div>

        {/* Servizio 6 */}
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center w-full h-32">
            <Image
              src="/images/servizidisposizione/bagno_interno.png"
              alt="Bagno in camera"
              width={100}
              height={100}
              className="rounded-full object-contain"
            />
          </div>
          <h2 className="text-xl mt-2 text-center mb-2 text-[#0265A5]">
            Bagno in camera
          </h2>
          <p className="text-center text-[#666666] text-base">
            Tutte le camere sono dotate di servizi igienici riservati e
            asciugacapelli.
          </p>
        </div>

        {/* Servizio 7 */}
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center w-full h-32">
            <Image
              src="/images/servizidisposizione/wifi.png"
              alt="Wi-Fi"
              width={100}
              height={100}
              className="rounded-full object-contain"
            />
          </div>
          <h2 className="text-xl mt-2 text-center mb-2 text-[#0265A5]">
            Free Wi-Fi
          </h2>
          <p className="text-center text-[#666666] text-base">
            La navigazione dai tuoi dispositivi mobili è garantita da una
            moderna connessione in fibra ottica.
          </p>
        </div>

        {/* Servizio 8 */}
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center w-full h-32">
            <Image
              src="/images/servizidisposizione/cappella.png"
              alt="Cappella"
              width={100}
              height={100}
              className="rounded-full object-contain"
            />
          </div>
          <h2 className="text-xl mt-2 text-center mb-2 text-[#0265A5]">
            Cappella
          </h2>
          <p className="text-center text-[#666666] text-base">
            Il Soggiorno è dotato di una cappella per chi desidera coltivare il
            suo rapporto con il Signore. Nel periodo estivo un sacerdote
            garantisce la Santa Messa quotidiana.
          </p>
        </div>

        {/* Servizio 9 */}
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center w-full h-32">
            <Image
              src="/images/servizidisposizione/bar.png"
              alt="Bar"
              width={100}
              height={100}
              className="rounded-full object-contain"
            />
          </div>
          <h2 className="text-xl mt-2 text-center mb-2 text-[#0265A5]">Bar</h2>
          <p className="text-center text-[#666666] text-base">
            Nella comoda hall del Soggiorno è sempre a disposizione un servizio
            bar.
          </p>
        </div>

        {/* Servizio 10 */}
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center w-full h-32">
            <Image
              src="/images/servizidisposizione/sala_conferenze.png"
              alt="Sala conferenze"
              width={100}
              height={100}
              className="rounded-full object-contain"
            />
          </div>
          <h2 className="text-xl mt-2 text-center mb-2 text-[#0265A5]">
            Sala conferenze
          </h2>
          <p className="text-center text-[#666666] text-base">
            I gruppi che prenotano la casa possono usufruire della sala
            conferenze per i loro momenti di studio.
          </p>
        </div>

        {/* Servizio 11 */}
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center w-full h-32">
            <Image
              src="/images/servizidisposizione/parcheggio_privato.png"
              alt="Parcheggio privato"
              width={100}
              height={100}
              className="rounded-full object-contain"
            />
          </div>
          <h2 className="text-xl mt-2 text-center mb-2 text-[#0265A5]">
            Parcheggio privato
          </h2>
          <p className="text-center text-[#666666] text-base">
            All'interno dell'area recintata del Soggiorno un comodo parcheggio
            privato è riservato agli ospiti.
          </p>
        </div>

        {/* Servizio 12 */}
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center w-full h-32">
            <Image
              src="/images/servizidisposizione/bandiera_blu.png"
              alt="Bandiera Blu"
              width={100}
              height={100}
              className="rounded-full object-contain"
            />
          </div>
          <h2 className="text-xl mt-2 text-center mb-2 text-[#0265A5]">
            Bandiera Blu
          </h2>
          <p className="text-center text-[#666666] text-base">
            La Bandiera Blu è sinonimo di acque pulite, di spiagge ben curate,
            di attenzione per le esigenze ambientali e di sensibilizzazione
            verso le tematiche ecologiche.
          </p>
        </div>
      </div>
    </div>
  );
}