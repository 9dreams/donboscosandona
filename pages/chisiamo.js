export default function Chisiamo() {
  return (
    <div className="flex flex-col items-center">
  <div className="flex flex-col md:flex-row w-full bg-[#780202] p-3 items-center mx-auto border-b border-gray-300 justify-between mb-10">
    <div className="flex justify-center md:ml-10">
      <img src="/images/Logo_emporio.png" className="w-24 md:w-[140px] rounded-full" alt="Logo" />
    </div>
    <div className="w-full md:w-7/12 flex flex-col md:flex-row gap-3 md:gap-6 items-center justify-center text-center">
      {['Home Page', 'Chi Siamo', 'Dove Siamo', 'Trasparenza', 'Servizi'].map((item, index) => (
        <p key={index} className="font-bold text-white hover:text-[#C7AE6A] cursor-pointer">{item}</p>
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

  <div className='flex flex-col 2xl:flex-row w-11/12 md:w-7/12 gap-5'>
    <div className='flex flex-col w-full 2xl:w-8/12'>
      <h1 className='font-semibold text-3xl text-gray-800 mb-6 text-center md:text-left'>EMPORIO SOLIDALE DEL BASSO PIAVE</h1>
      <h2 className='font-semibold text-2xl text-gray-800 mb-4 text-center md:text-left'>PROGETTO REGIONE VENETO</h2>
      <p className='font-normal text-lg text-gray-800 mb-3'>
        Siamo una rete di <strong>Associazioni di Volontariato</strong> con l’obbiettivo di una progettazione partecipe. Il <strong>Progetto Emporio Solidale</strong> ha portato varie Associazioni con diverse competenze a investire risorse e professionalità in una rete condivisa con istituzioni e Servizi Sociali.
      </p>
      <p className='font-normal text-lg text-gray-800 mb-3'>
        L’Emporio Solidale del Basso Piave è costituito da un partenariato operativo tra <strong>Associazioni del territorio</strong>, che condivide i propri volontari con funzioni diverse, ricoprendo vari ruoli necessari alla gestione dell’Emporio stesso.
      </p>
    </div>
    
    <div className='flex flex-col w-full 2xl:w-6/12'>
      <h3 className='font-semibold text-xl text-gray-800 mb-2 text-center md:text-left'>CAPOFILA DEL PROGETTO</h3>
      <p className='font-medium text-lg text-gray-800 mb-3 text-center md:text-left'>Ass. San Vincenzo dè Paoli</p>
      <p className='font-medium text-lg text-gray-800 mb-3 text-center md:text-left'>Conferenza Santi Liberale e Bartolomea</p>
      <p className='font-medium text-lg text-gray-800 mb-5 text-center md:text-left'>San Donà di Piave.</p>
      
      <div className="flex flex-col md:flex-row gap-4 md:gap-5 mb-5">
        <button className="flex flex-col items-center justify-center py-4 md:py-6 rounded-3xl shadow-sm hover:bg-opacity-30 hover:shadow-lg transition duration-150 w-full md:w-1/2 bg-white border border-gray-300">
          <img src="https://cdn-icons-png.flaticon.com/512/392/392001.png" className="w-10 md:w-12 mb-2" />
          <span className="font-light text-gray-700"><strong>Tel:</strong> 0421-332697</span>
          <span className="font-light text-gray-700"><strong>Cell:</strong> 344 385 1626</span>
        </button>

        <button className="flex flex-col items-center justify-center py-4 md:py-6 rounded-3xl shadow-sm hover:bg-opacity-30 hover:shadow-lg transition duration-150 w-full md:w-1/2 bg-white border border-gray-300">
          <img src="https://www.5wmagazine.com/wp-content/uploads/2015/09/chiocciola.png" className="w-10 md:w-12 mb-2" />
          <span className="font-light text-gray-700"><strong>Mail:</strong></span>
          <span className="font-light text-gray-700 text-center">emporiosolidalebassopiave@gmail.com</span>
        </button>
      </div>
      
      <img src="https://italiani.coop/wp-content/uploads/2020/05/spesa2maggio-scaled.jpg" className="w-full rounded-lg" alt="Logo" />
    </div>
  </div>
</div>

  );
}
