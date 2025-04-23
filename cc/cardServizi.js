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
    <div className="container mx-auto px-6 lg:px-0 py-12 lg:py-24">
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
            <div className="absolute bottom-0 w-full h-10 flex items-center justify-center bg-[#99006E] text-white text-xs lg:text-sm font-bold uppercase tracking-wide px-6 lg:px-12 gap-3 text-center">
              <div className="hidden lg:inline-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="20"
                  fill="none"
                >
                  <path
                    fill="#fff"
                    d="m9.915 14.453 5.836-5.75-1.472-1.451-4.364 4.3L7.721 9.39l-1.472 1.45zM11 20q-1.936 0-3.628-.725a9.5 9.5 0 0 1-2.944-1.96 9.3 9.3 0 0 1-1.988-2.9 8.75 8.75 0 0 1-.736-3.575q0-1.909.736-3.575a9.3 9.3 0 0 1 1.988-2.901 9.5 9.5 0 0 1 2.944-1.96A9.1 9.1 0 0 1 11 1.68q1.936 0 3.628.726a9.5 9.5 0 0 1 2.944 1.959 9.3 9.3 0 0 1 1.988 2.9 8.75 8.75 0 0 1 .736 3.576 8.75 8.75 0 0 1-.736 3.575 9.3 9.3 0 0 1-1.988 2.9 9.5 9.5 0 0 1-2.944 1.96A9.1 9.1 0 0 1 11 20M4.39 0l1.446 1.425-4.39 4.326L0 4.326zm13.22 0L22 4.326 20.554 5.75l-4.39-4.326zM11 17.964q3.021 0 5.126-2.073 2.104-2.075 2.104-5.051 0-2.978-2.104-5.051T11 3.715 5.874 5.789t-2.104 5.05q0 2.978 2.104 5.052T11 17.964"
                  ></path>
                </svg>
              </div>
              {testoPrenotaSubito}
            </div>
          </div>

          <div className="p-6 lg:p-12 relative z-10 bg-[#FAFAFA] rounded-b-[2rem] w-full">
            <h2 className="text-xl lg:text-3xl font-light text-[#252525] mb-3 lg:mb-6 mt-3 leading-tight line-clamp-2 lg:h-[4.5rem] h-[4.3rem]">
              {titolo}
            </h2>
            <p className="mb-3 text-[#252525]">
              {testoPartenza} <strong>{luogoPartenza}</strong>
            </p>
            <p className="mb-3 text-[#252525]">
              {testoDurata} <strong>{durata}</strong>
            </p>
            <div className="flex flex-wrap gap-x-1 gap-y-0.5 text-[#252525]">
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
                <div className="text-xs text-[#252525]">{testoDa}</div>
                <div className="text-2xl lg:text-3xl font-medium text-[#252525]">
                  {prezzo}&nbsp;€
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
