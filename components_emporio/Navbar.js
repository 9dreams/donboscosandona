export default function Chisiamo() {
  return (
    <div className='flex flex-col md:flex-row w-full bg-[#780202] p-3 items-center mx-auto border-b border-gray-300 justify-between mb-0'>
      <div className='flex justify-center md:ml-10'>
        <img
          src='/images/Logo_emporio.png'
          className='w-24 md:w-[140px] rounded-full'
          alt='Logo'
        />
      </div>
      <div className='w-full md:w-7/12 flex flex-col md:flex-row gap-3 md:gap-6 items-center justify-center text-center'>
        {[
          { name: 'Home Page', link: '/', class: 'text-[#C7AE6A]' },
          {
            name: 'Chi Siamo',
            link: 'chisiamo',
            class: 'text-white',
          },
          { name: 'Dove Siamo', link: 'dovesiamo', class: 'text-white' },
          { name: 'Trasparenza', link: 'trasparenza', class: 'text-white' },
          { name: 'Servizi', link: 'servizi', class: 'text-white' },
          { name: 'Documenti', link: 'documenti', class: 'text-white' },
        ].map((item, index) => (
          <a
            key={index}
            href={item.link}
            className={`font-bold hover:text-[#C7AE6A] cursor-pointer ${item.class}`}
          >
            {item.name}
          </a>
        ))}
      </div>
      <div className='mt-3 md:mt-0 md:mr-10 flex justify-center items-center w-full md:w-auto relative'>
        <input
          type='text'
          placeholder='Ricerca'
          className='shadow-lg rounded-full pl-10 pr-4 py-2 placeholder:text-white/80 placeholder:font-medium text-white font-semibold bg-[#8f1d1d] hover:bg-[#9f2d2d] focus:bg-[#9f2d2d] transition-colors w-full md:w-48 outline-none focus:ring-2 focus:ring-[#C7AE6A]/50'
        />
        <svg 
          className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/70"
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
    </div>
  )
}
