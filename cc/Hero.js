import Image from "next/image";

export default function Hero({
  immagineUrl = "/images/hero/venice.jpg",
  immagineAlt = "Immagine Hero",
  titoloTesto = "Escursioni Giornaliere a Venezia,",
  sottotitoloTesto = "un incanto sospeso sull'acqua.",
}) {
  return (
    <div className="p-12 mt-32">
      <div className="rounded-3xl lg:h-[40rem] h-[30rem] relative w-full before:rounded-3xl before:absolute before:z-[1] before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-b before:from-transparent before:to-stone-900 before:opacity-40">
        <div className="absolute inset-0">
          <Image
            src={immagineUrl}
            alt={immagineAlt}
            fill
            sizes="100vw"
            className="object-cover rounded-3xl"
            priority
          />
        </div>
        <div className="absolute bottom-12 left-12 z-10">
          <div className="container mx-auto px-6">
            <h1 className="lg:text-5xl text-3xl text-white font-bold m-0">
              {titoloTesto}
            </h1>
            <p className="lg:text-5xl text-3xl text-white font-normal m-0">
              {sottotitoloTesto}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
