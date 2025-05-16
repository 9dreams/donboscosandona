import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

import Image from "next/image";

export default function Footer({
  titoloChiSiamo,
  titoloStruttura,
  titoloSeguici,
  numeroTelefono,
  email,
  indirizzo1,
  indirizzo2,
  codiceFiscale,
  testoFooter,
  testoDeveloped,
  nomeSviluppatore,
  linkAboutUs,
  linkBedBreakfast,
  linkGruppi,
  linkLaCucina,
  linkBabyClub,
  testoAboutUs,
  testoBedBreakfast,
  testoGruppi,
  testoLaCucina,
  testoBabyClub,
  testoAppuntamenti,
}) {
  return (
    <footer className="bg-[#0265A5] text-white pt-10 pb-4 w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-8 gap-x-12 px-4 sm:px-0">
          {/* Colonna 1 - Chi siamo */}
          <div className="text-center md:text-left">
            <h3 className="text-white text-lg sm:text-base font-bold mb-4">
              {titoloChiSiamo}
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a
                  href={linkAboutUs || "#"}
                  className="hover:text-gray-200 transition-colors"
                >
                  {testoAboutUs}
                </a>
              </li>
              <li>
                <a
                  href={linkBedBreakfast || "#"}
                  className="hover:text-gray-200 transition-colors"
                >
                  {testoBedBreakfast}
                </a>
              </li>
              <li>
                <a
                  href={linkGruppi || "#"}
                  className="hover:text-gray-200 transition-colors"
                >
                  {testoGruppi}
                </a>
              </li>
            </ul>
          </div>

          {/* Colonna 2 - La struttura */}
          <div className="text-center md:text-left">
            <h3 className="text-white text-lg sm:text-base font-bold mb-4">
              {titoloStruttura}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={linkLaCucina || "#"}
                  className="hover:text-gray-200 transition-colors"
                >
                  {testoLaCucina}
                </a>
              </li>
            </ul>

            <h3 className="text-white text-lg sm:text-base font-bold mt-6 mb-4">
              {testoAppuntamenti}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={linkBabyClub || "#"}
                  className="hover:text-gray-200 transition-colors"
                >
                  {testoBabyClub}
                </a>
              </li>
            </ul>
          </div>

          {/* Colonna 3 - Social e contatti */}
          <div className="text-center md:text-left">
            <h3 className="text-white text-lg sm:text-base font-bold mb-4">
              {titoloSeguici}
            </h3>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a
                href="https://www.facebook.com/soggiornomarinodonbosco/"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <FaFacebook className="text-white w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/soggiornodonbosco"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <FaInstagram className="text-white w-6 h-6" />
              </a>
            </div>

            <div className="mt-6">
              <p className="text-sm font-medium">
                <a href={`tel:${numeroTelefono}`} className="hover:underline">
                  {numeroTelefono}
                </a>
              </p>
              <p className="text-sm font-medium">
                <a href={`mailto:${email}`} className="hover:underline">
                  {email}
                </a>
              </p>
            </div>
          </div>

          {/* Colonna 4 - Logo e indirizzo */}
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-4 max-w-[160px] sm:max-w-[180px]">
              <Image
                src="/images/footer/white_logo_footer.png"
                alt="Soggiorno Marino Don Bosco"
                width={180}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="text-xs sm:text-sm text-center md:text-left">
              <p className="font-medium">{indirizzo1}</p>
              <p className="font-medium">{indirizzo2}</p>
              <p className="font-medium">{codiceFiscale}</p>
            </div>
          </div>
        </div>

        {/* Linea di separazione */}
        <div className="border-t border-white/30 my-6"></div>

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-white/80">
          <div>{testoFooter}</div>
          <div className="mt-4 md:mt-0 flex items-center">
            <span>
              {testoDeveloped}{" "}
              <a
                href="https://github.com/DevMatrix8080"
                className="hover:underline font-medium"
              >
                {nomeSviluppatore}
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
