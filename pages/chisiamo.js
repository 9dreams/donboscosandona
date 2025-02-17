export default function Chisiamo() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex md:flex-row w-full bg-[#780202] p-3 flex-col mb-5 items-center mx-auto border-b border-gray-300 justify-between">
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
        <div class="mr-10">
          <input
            type="placeholder"
            placeholder="Ricerca"
            class="shadow-lg rounded-md placeholder:text-white placeholder:font-bold p-1 text-white font-semibold bg-[#8f1d1d] "
          ></input>
        </div>
      </div>
      
    </div>
  );
}
