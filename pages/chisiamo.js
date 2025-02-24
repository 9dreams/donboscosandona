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

  <div className='flex flex-col 2xl:flex-row w-11/12 md:w-7/12 gap-5 mb-40'>
    <div className='flex flex-col w-full 2xl:w-8/12'>
      <h1 className='font-semibold text-3xl text-gray-800 mb-8 text-center md:text-left'>EMPORIO SOLIDALE DEL BASSO PIAVE</h1>
      <h2 className='font-semibold text-2xl text-gray-800 mb-5 text-center md:text-left'>PROGETTO REGIONE VENETO</h2>
      <p className='font-normal text-md text-gray-800 mb-3'>
        Siamo una rete di <strong>Associazioni di Volontariato</strong> con l’obbiettivo di una progettazione partecipe. Il <strong>Progetto Emporio Solidale</strong> ha portato varie Associazioni con diverse competenze a investire risorse e professionalità in una rete condivisa con istituzioni e Servizi Sociali.
      </p>
      <p className='font-normal text-md text-gray-800 mb-3'>
        L’Emporio Solidale del Basso Piave è costituito da un partenariato operativo tra <strong>Associazioni del territorio</strong>, che condivide i propri volontari con funzioni diverse, ricoprendo vari ruoli necessari alla gestione dell’Emporio stesso.
      </p>
      <p className='font-normal text-md text-gray-800 mb-3'>
      Accoglienza, presa in carico, attività di distribuzione merce, controllo scadenze, addetti al magazzino, oppure referenti per i fornitori o per le istituzioni, raccolta di alimenti freschi presso la grande distribuzione, controllo e smaltimento rifiuti, corsi di formazione , turnazione volontari, oppure rendicontazione per i <strong>Progetti regionali</strong>.
      </p>
      <p className='font-normal text-md text-gray-800 mb-3'>
      Ogni volontario di ciascuna Associazione, ponendo in risalto la propria identità associativa, mette a servizio del prossimo in difficoltà, le proprie competenze e attitudini, ricordando che il <strong>BENE nasce dal CUORE ed è accompagnato dalla MENTE</strong>, ponendosi accanto a ciascun assistito con umiltà ed empatia.
      </p>
    </div>
    
    <div className='flex flex-col w-full 2xl:w-6/12'>
      <h3 className='font-semibold text-xl text-gray-800 mb-2 text-center md:text-left'>CAPOFILA DEL PROGETTO</h3>
      <p className='font-medium text-md text-gray-800 mb-3 text-center md:text-left'>Ass. San Vincenzo dè Paoli</p>
      <p className='font-medium text-md text-gray-800 mb-3 text-center md:text-left'>Conferenza Santi Liberale e Bartolomea</p>
      <p className='font-medium text-md text-gray-800 mb-5 text-center md:text-left'>San Donà di Piave.</p>
      
      <div className="flex flex-col md:flex-row gap-4 md:gap-5 mb-5">
        <div className="flex flex-col items-center justify-center py-4 md:py-6 rounded-3xl shadow-md  w-full md:w-1/2 bg-white border border-gray-300">
          <img src="https://cdn-icons-png.flaticon.com/512/392/392001.png" className="w-10 md:w-12 mb-3" />
          <span className="font-light text-gray-700 text-sm"><strong>Tel:</strong> 0421-332697</span>
          <span className="font-light text-gray-700 text-sm"><strong>Cell:</strong> 344 385 1626</span>
        </div>

        <div className="flex flex-col items-center justify-center py-4 md:py-6 rounded-3xl shadow-md  w-full md:w-1/2 bg-white border border-gray-300 max-w-md">
          <img src="https://www.5wmagazine.com/wp-content/uploads/2015/09/chiocciola.png" className="w-10 md:w-12 mb-2" />
          <span className="font-light text-gray-700"><strong>Mail:</strong></span>
          <span className="font-light text-gray-700 text-center break-words w-full text-sm">emporiosolidalebassopiave@gmail.com</span>
        </div>
      </div>
      
      <img src="https://italiani.coop/wp-content/uploads/2020/05/spesa2maggio-scaled.jpg" className="w-full rounded-lg" alt="Logo" />
    </div>
  </div>

  <div className='flex flex-col 2xl:flex-row w-11/12 md:w-11/12 gap-5 justify-center mb-20'>
    <div className='flex flex-col w-full 2xl:w-11/12'>
      <h1 className='font-semibold text-3xl text-gray-800 mb-10 text-center'>I nostri partner</h1>
      <div class='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 items-center'>
        <div class='flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full'>
          <img src='https://welfarex.it/img/loghi/Stemma_Citt_di_San_Don_di_Piave_20221221142628_870.png' class='w-full h-80 object-contain mb-3'/>
          <h1 class='text-md text-center'>Comune di San Donà di Piave</h1>
        </div>
        <div class='flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full'>
          <img src='https://imagecdn.spazioweb.it/e3/6f/e36f8277-b39e-45a6-b775-982067283840.png' class='w-full h-80 object-contain mb-3'/>
          <h1 class='text-md text-center'><strong>A.i.t.s.a.m.</strong> Associazione italiana Tutela Salute Mentale</h1>
        </div>
        <div class='flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full'>
          <img src='https://www.eraclea.com/wp-content/uploads/2017/07/casa_accoglienza_eraclea_inaugurazione.jpg' class='w-full h-80 object-contain mb-3'/>
          <h1 class='text-md text-center'>A.p.h.e. Centro Casa dell’Accoglienza Eraclea</h1>
        </div>
        <div class='flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG_ZO1rRLx0u0PHjwxn3BSx7EHlPzHaY0IjA&s' class='w-full h-80 object-contain mb-3'/>
          <h1 class='text-md text-center'>Al Ponte Coop. Sociale</h1>
        </div>
        <div class='flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full'>
          <img src='https://www.amicodelpopolo.it/wp-content/uploads/2023/11/coltivare-condividendo-copia.jpg' class='w-full h-80 object-contain mb-3'/>
          <h1 class='text-md text-center'>Associazione Condividendo</h1>
        </div>
        <div class='flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full'>
          <img src='https://www.holyart.it/blog/wp-content/uploads/sites/17/2022/06/maria-madre-della-chiesa.jpg' class='w-full h-80 object-contain mb-3'/>
          <h1 class='text-md text-center'>Associazione In Cammino con Maria, Eraclea</h1>
        </div>
        <div class='flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full'>
          <img src='https://www.politerapica.it/wp-content/uploads/Insieme-si-puo.-Insieme-funziona..png' class='w-full h-80 object-contain mb-3'/>
          <h1 class='text-md text-center'>Associazione Insieme Si Fa</h1>
        </div>
        <div class='flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full'>
          <img src='https://scontent-mxp2-1.xx.fbcdn.net/v/t39.30808-6/309361171_461379999366556_5931093882090883052_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=JrGeJjxlm-8Q7kNvgGUWNm3&_nc_oc=AdgfM4H5PODbpvg9VczG7XqfF9otT2R23r9P7Hq0w67M8Cez-fr0DssUuVcRR39DYjg&_nc_zt=23&_nc_ht=scontent-mxp2-1.xx&_nc_gid=ATfe2wbj6k5CqFKWcLo-2iH&oh=00_AYCSXZhQYc1dL3Rb-BYBfw6bvLQh5XB5Y-vnFQ3lwCPmDQ&oe=67C1FDA7' class='w-full h-80 object-contain mb-3'/>
          <h1 class='text-md text-center'>Associazione San Vincenzo de Paoli Santi LIberale e Bartolomea</h1>
        </div>
        <div class='flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full'>
          <img src='https://scontent-fco2-1.xx.fbcdn.net/v/t39.30808-6/471251101_583770417632504_5887413515959198536_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=_rxNnCXXgN4Q7kNvgFRKbfi&_nc_oc=Adihwhcygs0nupD34bzFUIFGC38ut9v9HrUkem3PLJc4-zVKBcOTRuBCN0UtrSf1juA&_nc_zt=23&_nc_ht=scontent-fco2-1.xx&_nc_gid=ADac5mke2po7-altCzon4GT&oh=00_AYCjA1HGPUX9KWd3CaF_RPWjsKLmqeXtFipd4o0RJmetTg&oe=67BB7C35' class='w-full h-80 object-contain mb-3'/>
          <h1 class='text-md text-center'>Associazione Scuola Materna c”A. Spisani” Stretti di Eraclea</h1>
        </div>
        <div class='flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full'>
          <img src='https://scontent-fco2-1.xx.fbcdn.net/v/t39.30808-6/308476570_460958519407889_7637449687006246554_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=cILzTayRc-UQ7kNvgHDYcFE&_nc_oc=AdjzXdvFHJ3Inl4FPC4zRyM_l9yUhmS4pz3yzorjvh_k_j-IjZPuuBvAeP4aGlfSnNs&_nc_zt=23&_nc_ht=scontent-fco2-1.xx&_nc_gid=AICA76pZWB4oFYQS0sM_2-B&oh=00_AYACVAay69ytcLgXXj3t1jnO-nRDk5Zb_yw0eJGNHgRSbA&oe=67BB8C31' class='w-full h-80 object-contain mb-3'/>
          <h1 class='text-md text-center'>Associazione Società di San Vincenzo de Paoli San Pio X°</h1>
        </div>
        <div class='flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full'>
          <img src='https://scontent-fco2-1.xx.fbcdn.net/v/t39.30808-6/417439277_717067103924648_4477952060480115277_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=hKuLVgMeXwEQ7kNvgFZqwgt&_nc_oc=AdijSSr9MWDsl3kiLV2X18AxvehPHf2LlWS3CAUbcLbeqmYzp4wawxt9ymHrIwPhBMU&_nc_zt=23&_nc_ht=scontent-fco2-1.xx&_nc_gid=AHUrnn-spqjVNpehD80VDmK&oh=00_AYBaEq4hgffwHLwAoI72iwL4uG5e_-p_6wdYMlvPz3PIOQ&oe=67BB7BB5' class='w-full h-80 object-contain mb-3'/>
          <h1 class='text-md text-center'>Associazione Solidarietà Dicembre ‘79</h1>
        </div>
        <div class='flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full'>
          <img src='https://scontent-fco2-1.xx.fbcdn.net/v/t39.30808-6/447188138_771948328465092_4022831559887833283_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=eI30neAD6MYQ7kNvgEkc6DF&_nc_oc=AdjTR1MycMb-KMKApolLh7W5mr1FgwcWFuLMBDT8pkyv6UGooYRSz8gqgYYjzM12NKw&_nc_zt=23&_nc_ht=scontent-fco2-1.xx&_nc_gid=ARHdjnuoW6M7jFV2YBHqgWP&oh=00_AYAiL_DoTPAUcb3cWRnivvOhv3ZvWvLxLAuGenwqcs0zsQ&oe=67BB5EE0' class='w-full h-80 object-contain mb-3'/>
          <h1 class='text-md text-center'>Caritas Parrocchia Duomo S. Maria delle Grazie - San Donà di Piave</h1>
        </div>
        <div class='flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full'>
          <img src='https://lh6.googleusercontent.com/-SgJCrGjAULs/S8wzbDYBMBI/AAAAAAAABts/Ftu2GLCl4VM/s293/Centro_di_Aiuto_alla_Vita.jpg' class='w-full h-80 object-contain mb-3'/>
          <h1 class='text-md text-center'>C.A.V. Centro Aiuto alla Vita</h1>
        </div>
        <div class='flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full'>
          <img src='https://www.consorzioinsieme.com/wp-content/uploads/2021/09/Consorzio-insieme-Logo-color.png.png' class='w-full h-80 object-contain mb-3'/>
          <h1 class='text-md text-center'>Consorzio Insieme Soc. Coop. Sociale</h1>
        </div>
        <div class='flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full'>
          <img src='https://scontent-fco2-1.xx.fbcdn.net/v/t39.30808-6/327183438_851842029379437_3716390394788203806_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=SDmVCmEZnI4Q7kNvgGk4181&_nc_oc=AdgZABGDaDXVh1RLCZhn0vDLaoldMKlbeL6kJvKggNEI96X2WLA-6AX9yA2hG-HIvEY&_nc_zt=23&_nc_ht=scontent-fco2-1.xx&_nc_gid=AMCiuGBuGLKFVVXGgNqbctG&oh=00_AYBraDVMOVTXlGp1-HFiY09gZXiOIM968Rm56-a0GkZ5xg&oe=67BB7EC2' class='w-full h-80 object-contain mb-3'/>
          <h1 class='text-md text-center'>Croce Rossa Italiana Comitato di Ve Onlus</h1>
        </div>
        <div class='flex flex-col border border-gray-200 rounded-3xl p-5 items-center w-full h-full'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/f/f7/Masci_logo.png' class='w-full h-80 object-contain mb-3'/>
          <h1 class='text-md text-center'>Masci Movimento Adulti Scout Cattolici Italiani</h1>
        </div>
      </div>
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
          <li class="mb-2"><a href="#" class="hover:underline">Emporio solidale</a></li>
          <li><a href="#" class="hover:underline">Del basso Piave</a></li>
        </ul>
      </div>
      <div class="text-center md:text-left">
        <h2 class="mb-4 text-sm font-semibold uppercase">Contatti</h2>
        <ul class="text-gray-300">
          <li class="mb-2"><a href="#" class="hover:underline">emporiosolidalebassopiave@gmail.com</a></li>
          <li class="mb-2"><a href="#" class="hover:underline">0421-332697</a></li>
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
