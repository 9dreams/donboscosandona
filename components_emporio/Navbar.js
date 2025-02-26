export default function Chisiamo() {
  return (
    <div className="flex flex-col md:flex-row w-full bg-[#780202] p-3 items-center mx-auto border-b border-gray-300 justify-between">
      <div className="flex justify-center md:ml-10">
        <img src="public/images/Logo_emporio.png" className="w-24 md:w-[140px] rounded-full" alt="Logo" />
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
  );
}
