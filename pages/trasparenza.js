export default function Chisiamo() {
    return (
      <div className="flex flex-col items-center">
    <div className="flex flex-col md:flex-row w-full bg-[#780202] p-3 items-center mx-auto border-b border-gray-300 justify-between mb-20">
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
  
    <div className='flex flex-col 2xl:flex-col justify-center items-center text-center w-11/12 md:w-7/12 gap-5 mb-10'>
      <div className='flex flex-col w-full 2xl:w-8/12'>
        <h1 className='font-semibold text-4xl text-gray-800 mb-8 text-center '>EMPORIO SOLIDALE</h1>
        <h2 className='font-semibold text-3xl  mb-5 text-center text-[#dfb031]'>Trasparenza</h2>
        <p className='font-normal text-md text-gray-800 mb-3'>
        Scarica i documenti dell'Emporio per visualizzare l'andamento delle nostre attività. La trasparenza e la rendicontazione del nostro operato è molto importante per la gestione delle risorse e del sostegno che riceviamo. 
        </p>
      </div>
      
      <div className='flex flex-col w-full 2xl:w-6/12'>
        <h3 className='font-semibold text-3xl text-gray-800 text-center'>DOCUMENTI</h3>
        
        
      </div>
    </div>
  
    <div class='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 md:w-7/12  gap-5 items-center mb-20'>
        <div class='flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full'>
          <h1 class='text-md text-center mb-3'>Analisi bilanci da 2016 2019 Emporio.pdf</h1>
          <button class='bg-[#8f1d1d] p-3 rounded-2xl text-white hover:text-[#C7AE6A] shadow-lg w-10/12'>
            SCARICA QUI IL DOCUMENTO
          </button>
        </div>
        <div class='flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full'>
          <h1 class='text-md text-center mb-3'>1 07 Rendiconto raccolta pubblica di fondi.doc</h1>
          <button class='bg-[#8f1d1d] p-3 rounded-2xl text-white hover:text-[#C7AE6A] shadow-lg w-10/12'>
            SCARICA QUI IL DOCUMENTO
          </button>
        </div>
        <div class='flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full'>
          <h1 class='text-md text-center mb-3'>BILANCIO 2021 EMPORIO SOLIDALE.pdf</h1>
          <button class='bg-[#8f1d1d] p-3 rounded-2xl text-white hover:text-[#C7AE6A] shadow-lg w-10/12'>
            SCARICA QUI IL DOCUMENTO
          </button>
        </div>
        <div class='flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full'>
          <h1 class='text-md text-center mb-3'>2 07 Rendiconto raccolta pubblica di fondi.doc</h1>
          <button class='bg-[#8f1d1d] p-3 rounded-2xl text-white hover:text-[#C7AE6A] shadow-lg w-10/12'>
            SCARICA QUI IL DOCUMENTO
          </button>
        </div>
        <div class='flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full'>
          <h1 class='text-md text-center mb-3'>BILANCIO 2021 FIRMATO.pdf</h1>
          <button class='bg-[#8f1d1d] p-3 rounded-2xl text-white hover:text-[#C7AE6A] shadow-lg w-10/12'>
            SCARICA QUI IL DOCUMENTO
          </button>
        </div>
        <div class='flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full'>
          <h1 class='text-md text-center mb-3'>3 07 Rendiconto raccolta pubblica di fondi.doc</h1>
          <button class='bg-[#8f1d1d] p-3 rounded-2xl text-white hover:text-[#C7AE6A] shadow-lg w-10/12'>
            SCARICA QUI IL DOCUMENTO
          </button>
        </div>
        <div class='flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full'>
          <h1 class='text-md text-center mb-3'>Bilancio al 31 dicembre 2018 (1).pdf</h1>
          <button class='bg-[#8f1d1d] p-3 rounded-2xl text-white hover:text-[#C7AE6A] shadow-lg w-10/12'>
            SCARICA QUI IL DOCUMENTO
          </button>
        </div>
        <div class='flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full'>
          <h1 class='text-md text-center mb-3'>A 07 Rendiconto raccolta pubblica di fondi.doc</h1>
          <button class='bg-[#8f1d1d] p-3 rounded-2xl text-white hover:text-[#C7AE6A] shadow-lg w-10/12'>
            SCARICA QUI IL DOCUMENTO
          </button>
        </div>
        <div class='flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full'>
          <h1 class='text-md text-center mb-3'>Bilancio al 31 dicembre 2018.pdf</h1>
          <button class='bg-[#8f1d1d] p-3 rounded-2xl text-white hover:text-[#C7AE6A] shadow-lg w-10/12'>
            SCARICA QUI IL DOCUMENTO
          </button>
        </div>
        <div class='flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full'>
          <h1 class='text-md text-center mb-3'>B 07 Rendiconto raccolta pubblica di fondi 2.doc</h1>
          <button class='bg-[#8f1d1d] p-3 rounded-2xl text-white hover:text-[#C7AE6A] shadow-lg w-10/12'>
            SCARICA QUI IL DOCUMENTO
          </button>
        </div>
        <div class='flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full'>
          <h1 class='text-md text-center mb-3'>Bilancio al 31 dicembre 2019.pdf</h1>
          <button class='bg-[#8f1d1d] p-3 rounded-2xl text-white hover:text-[#C7AE6A] shadow-lg w-10/12'>
            SCARICA QUI IL DOCUMENTO
          </button>
        </div>
        <div class='flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full'>
          <h1 class='text-md text-center mb-3'>Bilancio 2023 Emporio Solidale.pdf</h1>
          <button class='bg-[#8f1d1d] p-3 rounded-2xl text-white hover:text-[#C7AE6A] shadow-lg w-10/12'>
            SCARICA QUI IL DOCUMENTO
          </button>
        </div>
        <div class='flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full'>
          <h1 class='text-md text-center mb-3'>Bilancio analitico 2022 Emporio Solidale.pdf</h1>
          <button class='bg-[#8f1d1d] p-3 rounded-2xl text-white hover:text-[#C7AE6A] shadow-lg w-10/12'>
            SCARICA QUI IL DOCUMENTO
          </button>
        </div>
        <div class='flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full'>
          <h1 class='text-md text-center mb-3'>BILANCIO 2023 MOD D Emporio Solidale.pdf</h1>
          <button class='bg-[#8f1d1d] p-3 rounded-2xl text-white hover:text-[#C7AE6A] shadow-lg w-10/12'>
            SCARICA QUI IL DOCUMENTO
          </button>
        </div>
        <div class='flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full'>
          <h1 class='text-md text-center mb-3'>Bilancio Preventivo 2023 Emporio Solidale.pdf</h1>
          <button class='bg-[#8f1d1d] p-3 rounded-2xl text-white hover:text-[#C7AE6A] shadow-lg w-10/12'>
            SCARICA QUI IL DOCUMENTO
          </button>
        </div>
        <div class='flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full'>
          <h1 class='text-md text-center mb-3'>Bilancio Preventivo 2024 Emporio Solidale.xlsx</h1>
          <button class='bg-[#8f1d1d] p-3 rounded-2xl text-white hover:text-[#C7AE6A] shadow-lg w-10/12'>
            SCARICA QUI IL DOCUMENTO
          </button>
        </div>
        <div class='flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full'>
          <h1 class='text-md text-center mb-3'>Emporio - Bilancio finanziario 2020.pdf</h1>
          <button class='bg-[#8f1d1d] p-3 rounded-2xl text-white hover:text-[#C7AE6A] shadow-lg w-10/12'>
            SCARICA QUI IL DOCUMENTO
          </button>
        </div>
        <div class='flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full'>
          <h1 class='text-md text-center mb-3'>Relazione di missione bilancio 2023 (3).docx</h1>
          <button class='bg-[#8f1d1d] p-3 rounded-2xl text-white hover:text-[#C7AE6A] shadow-lg w-10/12'>
            SCARICA QUI IL DOCUMENTO
          </button>
        </div>
        <div class='flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full'>
          <h1 class='text-md text-center mb-3'>Legge sulla Trasparenza.pdf</h1>
          <button class='bg-[#8f1d1d] p-3 rounded-2xl text-white hover:text-[#C7AE6A] shadow-lg w-10/12'>
            SCARICA QUI IL DOCUMENTO
          </button>
        </div>
        <div class='flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full'>
          <h1 class='text-md text-center mb-3'>RENDICONTO ATTIVITA' 2023.pdf</h1>
          <button class='bg-[#8f1d1d] p-3 rounded-2xl text-white hover:text-[#C7AE6A] shadow-lg w-10/12'>
            SCARICA QUI IL DOCUMENTO
          </button>
        </div>
        <div class='flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full'>
          <h1 class='text-md text-center mb-3'>RELAZIONE 2021 FIRMATO.pdf</h1>
          <button class='bg-[#8f1d1d] p-3 rounded-2xl text-white hover:text-[#C7AE6A] shadow-lg w-10/12'>
            SCARICA QUI IL DOCUMENTO
          </button>
        </div>
        <div class='flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full'>
          <h1 class='text-md text-center mb-3'>RENDICONTO FINANZIARIO 2023.pdf</h1>
          <button class='bg-[#8f1d1d] p-3 rounded-2xl text-white hover:text-[#C7AE6A] shadow-lg w-10/12'>
            SCARICA QUI IL DOCUMENTO
          </button>
        </div>
        <div class='flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full'>
          <h1 class='text-md text-center mb-3'>Relazione di missione bilancio 2022.pdf</h1>
          <button class='bg-[#8f1d1d] p-3 rounded-2xl text-white hover:text-[#C7AE6A] shadow-lg w-10/12'>
            SCARICA QUI IL DOCUMENTO
          </button>
        </div>
        <div class='flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full'>
          <h1 class='text-md text-center mb-3'>Trasparenza 2020-2019.pdf</h1>
          <button class='bg-[#8f1d1d] p-3 rounded-2xl text-white hover:text-[#C7AE6A] shadow-lg w-10/12'>
            SCARICA QUI IL DOCUMENTO
          </button>
        </div>
      </div>


    <footer class="bg-[#780202] text-white w-full">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div class="flex justify-center md:justify-start">
          <a href="#">
            <img src="/images/Logo_emporio.png" class="h-24" alt="Emporio Logo" />
          </a>
        </div>
        <div class="text-center md:text-left">
          <h2 class="mb-4 text-sm font-semibold uppercase">Recapiti</h2>
          <ul class="text-gray-300">
            <li class="mb-3"><a href="#" class="hover:underline">Emporio solidale</a></li>
            <li><a href="#" class="hover:underline">Del basso Piave</a></li>
          </ul>
        </div>
        <div class="text-center md:text-left">
          <h2 class="mb-4 text-sm font-semibold uppercase">Contatti</h2>
          <ul class="text-gray-300">
            <li class="mb-3"><a href="#" class="hover:underline">emporiosolidalebassopiave@gmail.com</a></li>
            <li class="mb-3"><a href="#" class="hover:underline">0421-332697</a></li>
            <li><a href="#" class="hover:underline">344 3851626</a></li>
          </ul>
        </div>
      </div>
      <hr class="my-6 border-gray-500" />
      <div class="flex flex-col sm:flex-row items-center justify-between">
        <span class="text-sm text-gray-300">© 2025 <a href="#" class="hover:underline">Emporio Solidale™</a></span>
        <div class="mt-4 sm:mt-0">
          <a href="#" class="text-gray-300 hover:text-white">
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
              <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
  </div>
  
    );
  }
  