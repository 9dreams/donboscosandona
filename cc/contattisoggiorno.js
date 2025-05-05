import React from "react";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function ContattiSoggiorno({
  titoloPagina,
  nomeSoggiorno,
  telefono,
  email,
  indirizzo1,
  indirizzo2,
  testoSeguici,
  linkFacebook,
  linkInstagram,
  linkTwitter,
}) {
  return (
    <div className="max-w-4xl mx-auto flex flex-col py-6 sm:py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8 sm:mb-12">
          {titoloPagina}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          <div className="h-[350px] sm:h-[400px] w-full mx-auto relative rounded-lg overflow-hidden shadow-md mb-8 sm:mb-10 md:mb-0 order-1 md:order-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.7089848777193!2d12.791233833766396!3d45.56038587017919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDMzJzM3LjQiTiAxMsKwNDcnMjguNCJF!5e0!3m2!1sit!2sit!4v1620000000000!5m2!1sit!2sit"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mappa Soggiorno Marino Don Bosco"
              className="absolute inset-0"
            ></iframe>
          </div>

          {/* Informazioni di contatto - Posizionate sotto su mobile e tablet, a sinistra su desktop */}
          <div className="flex flex-col items-center space-y-4 sm:space-y-6 order-2 md:order-1 md:items-start text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-[#0265A5]">
              {nomeSoggiorno}
            </h3>

            <div className="space-y-3 sm:space-y-4">
              <p className="text-gray-700">
                <span className="font-semibold">Tel.</span> {telefono}
              </p>
              <p className="text-gray-700">
                <a
                  href={`mailto:${email}`}
                  className="text-[#0265A5] hover:underline"
                >
                  {email}
                </a>
              </p>
              <p className="text-gray-700">{indirizzo1}</p>
              <p className="text-gray-700">{indirizzo2}</p>
            </div>

            <div className="mt-4 sm:mt-6">
              <p className="text-gray-700 mb-3 sm:mb-4">{testoSeguici}</p>
              <div className="flex space-x-4 sm:space-x-5 justify-center md:justify-start">
                <a
                  href={linkFacebook || "https://www.facebook.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 sm:p-3 bg-[#0265A5]/10 rounded-full hover:bg-[#0265A5]/20 transition-colors"
                >
                  <FaFacebook className="w-5 h-5 sm:w-6 sm:h-6 text-[#0265A5]" />
                </a>
                <a
                  href={linkInstagram || "https://www.instagram.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 sm:p-3 bg-[#0265A5]/10 rounded-full hover:bg-[#0265A5]/20 transition-colors"
                >
                  <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6 text-[#0265A5]" />
                </a>
                <a
                  href={linkTwitter || "https://twitter.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 sm:p-3 bg-[#0265A5]/10 rounded-full hover:bg-[#0265A5]/20 transition-colors"
                >
                  <FaXTwitter className="w-5 h-5 sm:w-6 sm:h-6 text-[#0265A5]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
