"use client";

import Image from "next/image";
import { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Navbar({
  testo1,
  testo2,
  testo3,
  testo4,
  testo5,
  testo6,
  testo7,
  telefonoSuMisura,
  emailSuMisura,
  titoloDoge,
  titoloHome,
  titoloEscursioni,
  titoloServizi,
  titoloChiSiamo,
  titoloFlotta,
  titoloNews,
  testoContattiSuMisura,
  posizioneSOGGIORNO,
  testoTelefono,
  testoEmail,
  logoUrl,
  testoSocial,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/all-inclusive", label: testo1 },
    { href: "/b-b", label: testo2 },
    { href: "/gruppi", label: testo3 },
    { href: "/chi-siamo", label: testo4 },
    { href: "/scopri-la-struttura", label: testo5 },
    { href: "/offerte", label: testo6 },
    { href: "/carta-dei-servizi", label: testo7 },
  ];

  return (
    <header className="fixed top-0 w-full z-20">
      {/* Navbar */}
      <div className="flex py-2 justify-between border-b border-b-gray-100 bg-white lg:px-12 px-6">
        <div className="flex gap-6">
          <a href="/">
            <Image
              src={logoUrl}
              alt="Logo"
              width={120}
              height={70}
              className="transition-all"
            />
          </a>
        </div>

        <div className="flex items-center gap-3 xl:gap-6">
          <div className="block lg:hidden">
            <button onClick={() => setIsMenuOpen(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="31"
                height="22"
                viewBox="0 0 31 22"
                fill="none"
              >
                <path
                  fill="#1D1D1D"
                  d="M2.53 22v-3.667H31V22zm5.694-9.167V9.167H31v3.666zM0 3.667V0h31v3.667z"
                ></path>
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex gap-3 xl:gap-6 2xl:gap-12 items-center">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                <span
                  className={`hover:text-[#048BE6]`}
                >
                  {link.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${
          isMenuOpen ? "visible" : "invisible"
        }`}
      >
        <div
          className={`absolute inset-0 bg-white transform transition-all duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center p-6">
            <a href="/" onClick={() => setIsMenuOpen(false)}>
              <Image src={logoUrl} alt="Logo" width={80} height={94} />
            </a>
            <button onClick={() => setIsMenuOpen(false)} className="p-2">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col items-center text-center pt-8 space-y-6">
            <a href="/" className="text-[#048BE6] text-2xl">
              {titoloHome}
            </a>
            <a href="/escursioni-giornaliere" className="text-black text-2xl">
              {titoloEscursioni}
            </a>
            <a href="/servizi-professionali" className="text-black text-2xl">
              {titoloServizi}
            </a>
            <a href="/chi-siamo" className="text-black text-2xl">
              {titoloChiSiamo}
            </a>
            <a href="/la-flotta" className="text-black text-2xl">
              {titoloFlotta}
            </a>
            <a href="/news" className="text-black text-2xl">
              {titoloNews}
            </a>
          </div>

          <div className="text-center mt-12 space-y-4">
            <h3 className="text-[#048BE6] text-xl">{titoloDoge}</h3>
            <p>{posizioneSOGGIORNO}</p>

            <div className="mt-8">
              <h4 className="text-[#048BE6] text-lg">
                {testoContattiSuMisura}
              </h4>
              <p>
                {testoTelefono}: {telefonoSuMisura}
              </p>
              <p>
                {testoEmail}: {emailSuMisura}
              </p>
            </div>

            {/* Icone social aggiunte qui */}
            <div className="mt-8">
              <h4 className="text-[#048BE6] text-lg">
                {testoSocial || "Seguici"}
              </h4>
              <div className="flex justify-center space-x-4 mt-4">
                <a
                  href="https://www.facebook.com/soggiornomarinobosco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0265A5] hover:text-[#025084]"
                >
                  <FaFacebook size={24} />
                </a>
                <a
                  href="https://www.instagram.com/soggiornomarinobosco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0265A5] hover:text-[#025084]"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="https://twitter.com/soggiornomarinobosco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0265A5] hover:text-[#025084]"
                >
                  <FaTwitter size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
