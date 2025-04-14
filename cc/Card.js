import Image from "next/image";

export default function Card({
  titolo,
  titoloGrassetto,
  descrizione,
  testoBottone,
  immagineUrl,
  immagineAlt,
  coloreSfondoBottone,
  coloreTestoBottone,
  coloreHoverSfondoBottone,
  coloreHoverTestoBottone,
}) {
  return (
    <section className="py-12 lg:py-24 px-6">
      <div className="container mx-auto ">
        <div className="relative w-full lg:basis-2/3 xl:basis-1/2 max-w-3xl h-[35rem] rounded-[1.5rem] overflow-hidden group">
          <Image
            src={immagineUrl}
            alt={immagineAlt}
            fill
            className="object-cover group-hover:scale-[1.05] transition duration-300 ease-in-out"
            sizes="(max-width: 1024px) 100vw, 800px"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-900/70" />
          <div className="absolute inset-0 flex items-end">
            <div className="relative z-10 pb-8 pr-4 pl-4 lg:pl-8 text-white">
              <h2 className="text-[1.875rem] lg:text-[2.25rem] font-medium mb-4 leading-tight">
                <strong>{titoloGrassetto}</strong>{" "}
                {titolo.replace(titoloGrassetto, "").trim()}
              </h2>
              <p className="text-xs sm:text-sm lg:text-base mb-6">
                {descrizione}
              </p>
              <button
                type="button"
                className={`h-14 px-6 lg:px-12 ${coloreSfondoBottone} ${coloreTestoBottone} ${coloreHoverSfondoBottone} ${coloreHoverTestoBottone} font-bold transition-all uppercase rounded-full disabled:bg-[#99006E] disabled:cursor-not-allowed text-ellipsis overflow-hidden whitespace-nowrap leading-none cursor-pointer`}
              >
                {testoBottone}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
