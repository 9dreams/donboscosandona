"use client";

import { useState } from "react";
import Image from "next/image";

export default function Privacy({
  rifiutaButtonText,
  titolo,
  descrizione,
  privacyText,
  accettaTuttoText,
  accettaNecessariText,
  preferenzeGDPRText,
  poweredByText,
  privacyLabLogoUrl,
  privacyLabLogoAlt,
  cookiePolicyText,
  onAccettaTutto,
  onAccettaNecessari,
  onRifiuta,
  onPreferenzeGDPR,
  onCookiePolicy,
  bgColor,
  hoverBgColor,
  textColor,
}) {
  const [isVisible, setIsVisible] = useState(true);

  const handleAccettaTutto = () => {
    onAccettaTutto();
    setIsVisible(false);
  };

  const handleAccettaNecessari = () => {
    onAccettaNecessari();
    setIsVisible(false);
  };

  const handleRifiuta = () => {
    onRifiuta();
    setIsVisible(false);
  };

  return isVisible ? (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-6 shadow-lg z-50 transition-opacity duration-300 ease-in-out">
      <div className="container mx-auto">
        <div className="flex justify-end mb-2">
          <button
            onClick={handleRifiuta}
            className="text-gray-500 hover:text-gray-700 cursor-pointer"
          >
            {rifiutaButtonText}
          </button>
        </div>

        <h2 className="text-xl font-bold mb-4">{titolo}</h2>

        <p className="text-gray-600 mb-4">{descrizione}</p>

        <p className="text-gray-600 mb-4">{privacyText}</p>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <button
              onClick={handleAccettaTutto}
              className={`${bgColor} text-white px-6 py-2 rounded ${hoverBgColor} cursor-pointer`}
            >
              {accettaTuttoText}
            </button>
            <button
              onClick={handleAccettaNecessari}
              className={`${bgColor} text-white px-6 py-2 rounded ${hoverBgColor} cursor-pointer`}
            >
              {accettaNecessariText}
            </button>
            <button
              onClick={onPreferenzeGDPR}
              className={`${textColor} hover:underline cursor-pointer`}
            >
              {preferenzeGDPRText}
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-gray-600">{poweredByText}</span>
            <img
              src={privacyLabLogoUrl}
              alt={privacyLabLogoAlt}
              className="h-6"
            />
          </div>
        </div>

        <button
          onClick={onCookiePolicy}
          className={`${textColor} hover:underline mt-4 cursor-pointer`}
        >
          {cookiePolicyText}
        </button>
      </div>
    </div>
  ) : (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-6 shadow-lg z-50 transition-opacity duration-300 ease-in-out opacity-0 pointer-events-none"></div>
  );
}
