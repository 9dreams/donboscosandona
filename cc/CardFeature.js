import Image from "next/image";

export default function CardFeature({
  prenotazione,
  prezzo,
  pagamenti,
  territorio,
}) {
  return (
    <div className="container mx-auto lg:py-24 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
        <div className="bg-[#fafafa] p-6 rounded-4xl">
          <div className="shadow-custom rounded-4xl lg:p-12 p-6 flex flex-col gap-2 items-center">
            <Image
              src={prenotazione.immagine}
              alt={prenotazione.altImmagine}
              width={55}
              height={64}
              className="mb-6"
              priority={false}
            />
            <p className="text-xl text-[#99006e] text-center whitespace-nowrap">
              {prenotazione.titolo}
            </p>
            <p className="text-base text-[#252525] text-center">
              {prenotazione.descrizione}
            </p>
          </div>
        </div>
        <div className="bg-[#fafafa] p-6 rounded-4xl">
          <div className="shadow-custom rounded-4xl lg:p-12 p-6 flex flex-col gap-2 items-center">
            <Image
              src={prezzo.immagine}
              alt={prezzo.altImmagine}
              width={64}
              height={64}
              className="mb-6"
              priority={false}
            />
            <p className="text-xl text-[#99006e] text-center whitespace-nowrap">
              {prezzo.titolo}
            </p>
            <p className="text-base text-[#252525] text-center">
              {prezzo.descrizione}
            </p>
          </div>
        </div>
        <div className="bg-[#fafafa] p-6 rounded-4xl">
          <div className="shadow-custom rounded-4xl lg:p-12 p-6 flex flex-col gap-2 items-center">
            <Image
              src={pagamenti.immagine}
              alt={pagamenti.altImmagine}
              width={73}
              height={56}
              className="mb-6"
              priority={false}
            />
            <p className="text-xl text-[#99006e] text-center whitespace-nowrap">
              {pagamenti.titolo}
            </p>
            <p className="text-base text-[#252525] text-center">
              {pagamenti.descrizione}
            </p>
          </div>
        </div>
        <div className="bg-[#fafafa] p-6 rounded-4xl">
          <div className="shadow-custom rounded-4xl lg:p-12 p-6 flex flex-col gap-2 items-center">
            <Image
              src={territorio.immagine}
              alt={territorio.altImmagine}
              width={67}
              height={64}
              className="mb-6"
              priority={false}
            />
            <p className="text-xl text-[#99006e] text-center whitespace-nowrap">
              {territorio.titolo}
            </p>
            <p className="text-base text-[#252525] text-center">
              {territorio.descrizione}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
