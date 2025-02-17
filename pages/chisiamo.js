export default function Chisiamo() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex md:flex-row w-full bg-[#780202] p-3 flex-col items-center mx-auto border-b border-gray-300 justify-between mb-20">
        <div className=" flex justify-center ml-10">
          <img
            src="/images/Logo_emporio.png"
            className="w-[140px] rounded-full"
            alt="Logo"
          />
        </div>
        <div className="w-full md:w-7/12 flex flex-col md:flex-row gap-5 md:gap-9 items-center justify-center">
          <p className="font-bold text-white hover:text-[#C7AE6A]">Home Page</p>
          <p className="font-bold text-white hover:text-[#C7AE6A]">Chi Siamo</p>
          <p className="font-bold text-white hover:text-[#C7AE6A]">
            Dove Siamo
          </p>
          <p className="font-bold text-white hover:text-[#C7AE6A]">
            Trasparenza
          </p>
          <p className="font-bold text-white hover:text-[#C7AE6A]">Servizi</p>
        </div>
        <div class="mr-10 justify-center items-center">
          <input
            type="placeholder"
            placeholder="Ricerca"
            class="shadow-lg rounded-md placeholder:text-white placeholder:font-bold p-1 text-white font-semibold bg-[#8f1d1d] "
          ></input>
        </div>
      </div>
      <div class='flex flex-col 2xl:flex-row w-7/12 gap-5'>
        <div class='flex flex-col w-8/12'>
          <h1 class='font-semibold text-3xl text-gray-800 mb-12'>EMPORIO SOLIDALE DEL BASSO PIAVE</h1>
          <h1 class='font-semibold text-2xl text-gray-800 mb-5'>PROGETTO REGIONE VENETO</h1>
          <h1 class='font-normal text-lg text-gray-800 mb-3'>Siamo una rete di <strong>Associazioni di Volontariato</strong> con l’obbiettivo di una progettazione partecipe. Il <strong>Progetto Emporio Solidale</strong> ha portato varie Associazioni con diverse competenze a investire risorse e professionalità in una rete condivisa con istituzioni e Servizi Sociali, valorizzando la realizzazione di progetti in comune.</h1> 
          <h1 class='font-normal text-lg text-gray-800 mb-3'>L’Emporio Solidale del Basso Piave è costituito da un parternariato operativo tra <strong>Associazioni del territorio</strong>, che condivide i propri volontari con funzioni diverse, a ricoprire vari ruoli necessari alla gestione dell’Emporio stesso.</h1>
          <h1 class='font-normal text-lg text-gray-800 mb-3'>Accoglienza, presa in carico, attività di distribuzione merce, controllo scadenze, addetti al magazzino, oppure referenti per i fornitori o per le istituzioni, raccolta di alimenti freschi presso la grande distribuzione, controllo e smaltimento rifiuti, corsi di formazione , turnazione volontari, oppure rendicontazione per i <strong>Progetti regionali</strong>.</h1>
          <h1 class='font-normal text-lg text-gray-800'>Ogni volontario di ciascuna Associazione, ponendo in risalto la propria identità associativa, mette a servizio del prossimo in difficoltà, le proprie competenze e attitudini, ricordando che il <strong>BENE nasce dal CUORE ed è accompagnato dalla MENTE</strong>, ponendosi accanto a ciascun assistito con umiltà ed empatia.</h1>
        </div>
        <div class='flex flex-col w-6/12'>
        <h1 class='font-semibold text-xl text-gray-800 mb-2'>CAPOFILA DEL PROGETTO</h1>
        <h1 class='font-medium text-lg text-gray-800 mb-3'>Ass. San Vincenzo dè Paoli</h1>
        <h1 class='font-medium text-lg text-gray-800 mb-3'>Conferenza Santi Liberale e Bartolomea</h1>
        <h1 class='font-medium text-lg text-gray-800 mb-5'>San Donà di Piave</h1>
        <img
            src="https://www.emporiosolidalebassopiave.it/documents/3870210/9636149/EMPORIO+Spesa2.png/ce900357-93c4-c6b7-192f-6b0e029f5716?t=1606141167441"
            className="w-full"
            alt="Logo"
          />
        </div>
      </div>
    </div>
  );
}
