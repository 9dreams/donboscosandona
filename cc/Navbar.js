"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar({
  testo1,
  testo2,
  testo3,
  testo4,
  testo5,
  testo6,
  testo7,
  testo8,
  telefonoSuMisura,
  faxSuMisura,
  serviziProfessionali,
  emailSuMisura,
  telefonoIndividuali,
  emailIndividuali,
  linguaItaliano,
  linguaInglese,
  linguaTedesco,
  linguaFrancese,
  linguaSpagnolo,
  titoloDoge,
  titoloHome,
  titoloEscursioni,
  titoloServizi,
  titoloChiSiamo,
  titoloFlotta,
  titoloNews,
  testoContattiSuMisura,
  maildogedivenezia,
  numeroditelefono,
  testoContattiIndividuali,
  selettorelinguaITA,
  selettorelinguaENG,
  selettorelinguaDE,
  selettorelinguaFR,
  selettorelinguaES,
  numerodicellulare,
  testoescursionigiornaliere,
  posizioneDOGE,
  testoTelefono,
  mailAPI,
  testoFax,
  testoEmail,
  testoSocial,
  logoUrl,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: testo1, isActive: true },
    { href: "/escursioni-giornaliere", label: testo2 },
    { href: "/servizi-professionali", label: testo3 },
    { href: "/chi-siamo", label: testo4 },
    { href: "/la-flotta", label: testo5 },
    { href: "/news", label: testo6 },
    { href: "/news", label: testo7 },
    { href: "/news", label: testo8 },
  ];

  return (
    <header className="fixed top-0 w-full z-20">
      <div className="bg-[#99006E] text-white lg:flex items-center text-xs font-medium lg:px-12 px-6 max-h-8 py-3 hidden md:block">
        <div className="hidden md:flex justify-between w-full h-full items-center px-4 lg:px-8">
          <div className="flex gap-2 text-sm font-semibold uppercase">
            <div className="cursor-pointer hover:text-gray-300">
              {linguaItaliano}
            </div>
            <span>/</span>
            <div className="cursor-pointer hover:text-gray-300">
              {linguaInglese}
            </div>
            <span>/</span>
            <div className="cursor-pointer hover:text-gray-300">
              {linguaTedesco}
            </div>
            <span>/</span>
            <div className="cursor-pointer hover:text-gray-300">
              {linguaFrancese}
            </div>
            <span>/</span>
            <div className="cursor-pointer hover:text-gray-300">
              {linguaSpagnolo}
            </div>
          </div>
          <div className="flex flex-wrap gap-8 text-sm w-full md:w-auto mt-2 md:mt-0 md:justify-end">
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
              <span className="font-medium">{serviziProfessionali}</span>
              <a
                href="mailto:info@dogedivenezia.it"
                className="hover:text-gray-300"
              >
                {maildogedivenezia}
              </a>
              <a href="tel:+390415302363" className="hover:text-gray-300">
                {numeroditelefono}
              </a>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
              <span className="font-medium">{testoescursionigiornaliere}</span>
              <a
                href="mailto:api@dogedivenezia.it"
                className="hover:text-gray-300"
              >
                {mailAPI}
              </a>
              <a href="tel:+390413156302" className="hover:text-gray-300">
                {numerodicellulare}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex py-2 justify-between border-b border-b-gray-100 bg-white lg:px-12 px-6">
        <div className="flex gap-6">
          <a href="/">
            <Image
              src={logoUrl}
              alt="Logo"
              width={80}
              height={94}
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
                  className={`hover:text-[#99006E] ${
                    link.isActive ? "active font-bold" : ""
                  }`}
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
          {/* Header con Logo e X */}
          <div className="flex justify-between items-center p-6">
            <a href="/" onClick={() => setIsMenuOpen(false)}>
              <Image
                src={logoUrl}
                alt="Logo"
                width={80}
                height={94}
              />
            </a>
            <button onClick={() => setIsMenuOpen(false)} className="p-2">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </button>
          </div>

          {/* Menu Links */}
          <div className="flex flex-col items-center text-center pt-8 space-y-6">
            <a href="/" className="text-[#99006E] text-2xl font-medium">
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

          {/* Language Selector */}
          <div className="flex justify-center space-x-3 mt-12 text-xl">
            <span>{selettorelinguaITA}</span> /{" "}
            <span>{selettorelinguaENG}</span> / <span>{selettorelinguaDE}</span>{" "}
            /<span>{selettorelinguaFR}</span> / <span>{selettorelinguaES}</span>
          </div>

          {/* Contact Info */}
          <div className="text-center mt-12 space-y-4">
            <h3 className="text-[#99006E] text-xl">{titoloDoge}</h3>
            <p>{posizioneDOGE}</p>

            <div className="mt-8">
              <h4 className="text-[#99006E] text-lg">
                {testoContattiSuMisura}
              </h4>
              <p>
                {testoTelefono}: {telefonoSuMisura}
              </p>
              <p>
                {testoFax}: {faxSuMisura}
              </p>
              <p>
                {testoEmail}: {emailSuMisura}
              </p>
            </div>

            <div className="mt-8">
              <h4 className="text-[#99006E] text-lg">
                {testoContattiIndividuali}
              </h4>
              <p>
                {testoTelefono}: {telefonoIndividuali}
              </p>
              <p>
                {testoEmail}: {emailIndividuali}
              </p>
            </div>

            <div className="mt-8">
              <h4 className="text-[#99006E] text-lg">{testoSocial}</h4>
              <div className="flex justify-center space-x-4 mt-4">
                <a
                  href="https://www.facebook.com/dogedivenezia/?fref=ts"
                  target="_blank"
                  className="w-10 h-10 rounded-full border border-black flex items-center justify-center hover:text-[#99006E]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="none"
                    className="hover:text-[#99006E]"
                  >
                    <circle
                      cx="20"
                      cy="20"
                      r="19.5"
                      stroke="currentColor"
                    ></circle>
                    <g clipPath="url(#facebook_svg__a)">
                      <path
                        fill="currentColor"
                        d="m24.352 21.048.52-3.233h-3.25v-2.098c0-.884.453-1.746 1.904-1.746H25v-2.752A19 19 0 0 0 22.383 11c-2.669 0-4.414 1.548-4.414 4.351v2.464H15v3.233h2.968v7.816a12.3 12.3 0 0 0 3.653 0v-7.816z"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="facebook_svg__a">
                        <path fill="#fff" d="M15 11h10v18H15z"></path>
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/ildogedivenezia_"
                  target="_blank"
                  className="w-10 h-10 rounded-full border border-black flex items-center justify-center hover:text-[#99006E]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="none"
                    className="hover:text-[#99006E]"
                  >
                    <circle
                      cx="20"
                      cy="20"
                      r="19.5"
                      stroke="currentColor"
                    ></circle>
                    <g fill="currentColor" clipPath="url(#instagram_svg__a)">
                      <path d="M20 12.622c2.404 0 2.687 0 3.636.053.571.006 1.137.11 1.673.31.39.144.744.374 1.033.673.3.29.53.643.674 1.033.199.536.303 1.102.309 1.673.044.949.053 1.232.053 3.636s0 2.687-.053 3.636a5 5 0 0 1-.31 1.673 2.99 2.99 0 0 1-1.706 1.707 5 5 0 0 1-1.673.309c-.949.044-1.232.053-3.636.053s-2.687 0-3.636-.053a5 5 0 0 1-1.673-.31 2.8 2.8 0 0 1-1.033-.673 2.8 2.8 0 0 1-.674-1.033 5 5 0 0 1-.309-1.673c-.044-.949-.053-1.232-.053-3.636s0-2.687.053-3.636c.006-.571.11-1.137.31-1.673.144-.39.374-.744.673-1.033.29-.3.643-.53 1.033-.674a5 5 0 0 1 1.673-.309c.949-.044 1.232-.053 3.636-.053M20 11c-2.435 0-2.75.01-3.706.055a6.6 6.6 0 0 0-2.185.424 4.6 4.6 0 0 0-2.637 2.626 6.6 6.6 0 0 0-.417 2.19C11.011 17.248 11 17.564 11 20s.01 2.75.055 3.706c.016.747.159 1.486.424 2.185a4.6 4.6 0 0 0 2.626 2.637 6.6 6.6 0 0 0 2.185.423C17.25 29 17.565 29 20 29s2.753 0 3.71-.055a6.6 6.6 0 0 0 2.185-.424 4.6 4.6 0 0 0 2.633-2.626 6.6 6.6 0 0 0 .423-2.185C29 22.75 29 22.435 29 20s0-2.753-.055-3.71a6.6 6.6 0 0 0-.424-2.185 4.6 4.6 0 0 0-2.626-2.633 6.6 6.6 0 0 0-2.19-.417C22.752 11.011 22.436 11 20 11"></path>
                      <path d="M20 15.38a4.62 4.62 0 1 0 0 9.24 4.62 4.62 0 0 0 0-9.24m0 7.623a3 3 0 1 1 2.121-.882 3 3 0 0 1-2.12.88zM24.805 16.275a1.08 1.08 0 1 0 0-2.16 1.08 1.08 0 0 0 0 2.16"></path>
                    </g>
                    <defs>
                      <clipPath id="instagram_svg__a">
                        <path fill="#fff" d="M11 11h18v18H11z"></path>
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a
                  href="https://x.com/DogeNavigazioni"
                  target="_blank"
                  className="w-10 h-10 rounded-full border border-black flex items-center justify-center hover:text-[#99006E]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 19 18"
                  >
                    <path
                      d="M14.945 0h2.914l-6.394 7.637L18.938 18H13.07l-4.59-6.297L3.223 18H.309l6.777-8.168L-.07 0H5.94l4.149 5.754Zm-1.02 16.207h1.618L5.093 1.727H3.356Zm0 0"
                      className="stroke-none fill-current"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
