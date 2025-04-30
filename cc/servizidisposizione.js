import Image from "next/image";
import Servizio from "@/cc/servizio";
export default function Servizidisposizione({ servizi }) {
  return (
    <div className="mt-20 max-w-4xl mx-auto">
      {/* Titolo sopra le icone */}
      <h1 className="text-[2.6rem] font-semibold text-center mb-8 text-[#0265A5]">
        I servizi a vostra disposizione
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-14 gap-y-12">
        {servizi.map((servizio) => (
          <Servizio
            immagine={servizio.imgSrc}
            titolo={servizio.titolo}
            testo={servizio.descrizione}
          />
        ))}
      </div>
    </div>
  );
}
