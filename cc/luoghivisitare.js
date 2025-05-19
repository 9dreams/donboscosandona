"use client";

import Image from "next/image";
import Link from "next/link";

export default function LuoghiVisitare({
  section1Card1,
  section1Card2,
  section2Card1,
  section2Card2,
  section2Card3,
}) {
  return (
    <div className="py-12 mt-4 px-4 max-w-5xl mx-auto">
      {/* Titolo con linee decorative */}
      <div className="flex items-center justify-center mb-12">
        <h2 className="text-3xl md:text-4xl text-gray-800 font-medium px-6">
          I luoghi da visitare
        </h2>
      </div>

      {/* Prima riga con due card principali */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Card 1 Sezione 1 */}
        <div className="bg-[#FAFAFA] rounded-lg shadow-md overflow-hidden h-full flex flex-col">
          <div className="relative aspect-square w-full">
            <Image
              src={section1Card1.immagine}
              alt={section1Card1.alt}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6 text-left flex flex-col flex-grow">
            <h3 className="text-2xl text-gray-800 font-medium mb-4">
              {section1Card1.titolo}
            </h3>
            <p className="text-gray-600 mb-6 flex-grow">
              {section1Card1.descrizione}
            </p>
            <div className="mt-auto">
              <a href={section1Card1.link}>
                <button
                  type="button"
                  className="text-white cursor-pointer bg-[#0265A5] font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 whitespace-nowrap"
                >
                  SCOPRI DI PIÙ
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Card 2 Sezione 1 */}
        <div className="bg-[#FAFAFA] rounded-lg shadow-md overflow-hidden h-full flex flex-col">
          <div className="relative aspect-square w-full">
            <Image
              src={section1Card2.immagine}
              alt={section1Card2.alt}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6 text-left flex flex-col flex-grow">
            <h3 className="text-2xl text-gray-800 font-medium mb-4">
              {section1Card2.titolo}
            </h3>
            <p className="text-gray-600 mb-6 flex-grow">
              {section1Card2.descrizione}
            </p>
            <div className="mt-auto">
              <a href={section1Card2.link}>
                <button
                  type="button"
                  className="text-white cursor-pointer bg-[#0265A5] font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 whitespace-nowrap"
                >
                  SCOPRI DI PIÙ
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Seconda riga con tre card più piccole */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 Sezione 2 */}
        <div className="bg-[#FAFAFA] rounded-lg shadow-md overflow-hidden h-full flex flex-col">
          <div className="relative aspect-square w-full">
            <Image
              src={section2Card1.immagine}
              alt={section2Card1.alt}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4 text-left flex flex-col flex-grow">
            <h3 className="text-xl text-gray-800 font-medium mb-3">
              {section2Card1.titolo}
            </h3>
            <p className="text-gray-600 mb-4 flex-grow text-sm">
              {section2Card1.descrizione}
            </p>
            <div className="mt-auto">
              <a href={section2Card1.link}>
                <button
                  type="button"
                  className="text-white cursor-pointer bg-[#0265A5] font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 whitespace-nowrap"
                >
                  SCOPRI DI PIÙ
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Card 2 Sezione 2 */}
        <div className="bg-[#FAFAFA] rounded-lg shadow-md overflow-hidden h-full flex flex-col">
          <div className="relative aspect-square w-full">
            <Image
              src={section2Card2.immagine}
              alt={section2Card2.alt}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4 text-left flex flex-col flex-grow">
            <h3 className="text-xl text-gray-800 font-medium mb-3">
              {section2Card2.titolo}
            </h3>
            <p className="text-gray-600 mb-4 flex-grow text-sm">
              {section2Card2.descrizione}
            </p>
            <div className="mt-auto">
              <a href={section2Card2.link}>
                <button
                  type="button"
                  className="text-white cursor-pointer bg-[#0265A5] font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 whitespace-nowrap"
                >
                  SCOPRI DI PIÙ
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Card 3 Sezione 2 */}
        <div className="bg-[#FAFAFA] rounded-lg shadow-md overflow-hidden h-full flex flex-col">
          <div className="relative aspect-square w-full">
            <Image
              src={section2Card3.immagine}
              alt={section2Card3.alt}
              fill
              className="object-contain p-4"
            />
          </div>
          <div className="p-4 text-left flex flex-col flex-grow">
            <h3 className="text-xl text-gray-800 font-medium mb-3">
              {section2Card3.titolo}
            </h3>
            <p className="text-gray-600 mb-4 flex-grow text-sm">
              {section2Card3.descrizione}
            </p>
            <div className="mt-auto">
              <a href={section2Card3.link} target="_blank">
                <button
                  type="button"
                  className="text-white cursor-pointer bg-[#0265A5] font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 whitespace-nowrap"
                >
                  SCOPRI GLI ORARI
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
