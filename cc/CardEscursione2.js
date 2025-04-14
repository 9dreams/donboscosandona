"use client";

import Image from "next/image";

export default function CardEscursione2({
  titolo,
  descrizione,
  luogoPartenza,
  durata,
  dataDisponibilita,
  prezzo,
  immagine,
  altImmagine,
  urlMappa,
}) {
  return (
    <div className="container mx-auto px-6 lg:px-0 py-12 lg:py-24">
      <div className="bg-[#FAFAFA] rounded-[2rem] p-5 sm:p-8 mb-6">
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          <div className="flex flex-col w-full lg:max-w-xs">
            <div className="relative w-full h-72 lg:h-[66%] mb-4">
              <Image
                src={immagine}
                alt={altImmagine}
                fill
                priority
                className="object-cover rounded-[1.25rem]"
                sizes="(max-width: 425px) 100vw, 425px"
              />
            </div>
            <div className="relative w-full h-64 lg:h-[34%]">
              <iframe
                src={urlMappa}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-[1.25rem]"
              ></iframe>
            </div>
          </div>

          <div className="flex-1 mt-6 lg:mt-0 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl lg:text-3xl text-[#252525] font-light mb-4 line-clamp-2">
                {titolo}
              </h2>
              <div className="text-[#252525] text-base mb-4 leading-relaxed line-clamp-5 html-renderer">
                <p>{descrizione}</p>
              </div>
              <div className="text-[#252525] text-base mb-2">
                Partenza: <strong>{luogoPartenza}</strong>
              </div>
              <div className="text-[#252525] text-base mb-2">
                Durata: <strong>{durata}</strong>
              </div>
              <div className="text-[#252525] text-base">
                Disponibile dal: <strong>{dataDisponibilita}</strong>
              </div>
            </div>

            <div className="flex items-center gap-5 mt-6">
              <button
                type="submit"
                className="bg-[#99006E] cursor-pointer text-white font-bold text-sm sm:text-base uppercase rounded-full px-5 sm:px-10 h-14 leading-none whitespace-nowrap overflow-hidden"
              >
                Prenota
              </button>
              <div>
                <div className="text-xs text-[#252525]">Da</div>
                <div className="text-2xl sm:text-3xl font-medium text-[#252525]">
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
