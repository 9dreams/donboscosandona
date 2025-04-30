import Image from "next/image";

export default function Servizio({ immagine, titolo, testo }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-12">
      {/* Servizio 1 */}
      <div className="flex flex-col items-center">
        <div className="flex justify-center items-center w-full h-32">
          <Image
            src={immagine}
            alt="Spiaggia privata"
            width={100}
            height={100}
            className="rounded-full object-contain"
          />
        </div>
        <h2 className="text-xl mt-2 text-center mb-2 text-[#0265A5]">
          {titolo}
        </h2>
        <p className="text-center text-[#666666] text-base">{testo}</p>
      </div>
    </div>
  );
}
