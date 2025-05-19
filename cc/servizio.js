import Image from "next/image";

export default function Servizio({ immagine, titolo, testo }) {
  return (
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
      <h2 className="text-xl mt-2 text-center mb-2 text-[#0265A5]">{titolo}</h2>
      <p className="text-center text-primary text-base">{testo}</p>
    </div>
  );
}
