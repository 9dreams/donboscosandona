import Image from "next/image";

export default function cardServizi({
  urlImmagine,
  altImmagine,
  titolo,
  luogoPartenza,
  durata,
  dataInizio,
  dataFine,
  prezzo,
  testoPrenotaSubito,
  testoPartenza,
  testoDurata,
  testoDisponibileDal,
  testoAl,
  testoDa,
  testoBottonePrenota,
}) {
  return (

     
      <div className="max-w-[474px] mr-6">
        <div className="mb-6 rounded-[2rem] shadow overflow-hidden group">
          <div className="relative w-full h-72">
            <Image
              src={urlImmagine}
              alt={altImmagine}
              fill
              className="rounded-t-[1.5rem] object-cover"
              sizes="(max-width: 1024px) calc(100vw / 1.15), (max-width: 1280px) calc(100vw / 2), calc(100vw / 3)"
            />
          </div>

          <div className="p-6 lg:p-12 relative z-10 bg-[#FAFAFA] rounded-b-[2rem] w-full">
            <h2 className="text-xl lg:text-3xl font-light text-[#666666] mb-3 lg:mb-6 mt-3 leading-tight line-clamp-2 lg:h-[4.5rem] h-[4.3rem]">
              {titolo}
            </h2>
            <p className="mb-3 text-[#666666]">
              {testoPartenza} <strong>{luogoPartenza}</strong>
            </p>
            <p className="mb-3 text-[#666666]">
              {testoDurata} <strong>{durata}</strong>
            </p>
            <div className="flex flex-wrap gap-x-1 gap-y-0.5 text-[#666666]">
              {testoDisponibileDal} <strong>{dataInizio}</strong>
              <span>
                {testoAl}: <strong>{dataFine}</strong>
              </span>
            </div>
            <div className="flex items-center gap-6 my-6">
              <button
                type="submit"
                className="h-14 px-6 lg:px-12 bg-[#99006E] text-white font-bold rounded-full uppercase cursor-pointer"
              >
                {testoBottonePrenota}
              </button>
              <div>
                <div className="text-xs text-[#666666]">{testoDa}</div>
                <div className="text-2xl lg:text-3xl font-medium text-[#666666]">
                  {prezzo}&nbsp;€
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
  );
}
