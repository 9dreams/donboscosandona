import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0265A5] text-white pt-10 pb-4 w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-8 gap-x-12 px-4 sm:px-0">
          {/* Colonna 1 - Chi siamo */}
          <div className="text-center md:text-left">
            <h3 className="text-white text-lg sm:text-base font-bold mb-4">CHI SIAMO</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><Link href="/chi-siamo" className="hover:text-gray-200 transition-colors">ABOUT US</Link></li>
              <li><Link href="/bed-breakfast" className="hover:text-gray-200 transition-colors">BED & BREAKFAST</Link></li>
              <li><Link href="/gruppi" className="hover:text-gray-200 transition-colors">GRUPPI</Link></li>
            </ul>
          </div>

          {/* Colonna 2 - La struttura */}
          <div className="text-center md:text-left">
            <h3 className="text-white text-lg sm:text-base font-bold mb-4">LA STRUTTURA</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/la-cucina" className="hover:text-gray-200 transition-colors">LA CUCINA</Link></li>
            </ul>
            
            <h3 className="text-white text-lg sm:text-base font-bold mt-6 mb-4">APPUNTAMENTI</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/baby-club" className="hover:text-gray-200 transition-colors">BABY CLUB</Link></li>
            </ul>
          </div>

          {/* Colonna 3 - Social e contatti */}
          <div className="text-center md:text-left">
            <h3 className="text-white text-lg sm:text-base font-bold mb-4">SEGUICI SU</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="https://www.facebook.com" className="hover:text-gray-200 transition-colors flex items-center">
                <span className="mr-2">Facebook</span>
              </Link></li>
              <li><Link href="https://www.instagram.com" className="hover:text-gray-200 transition-colors flex items-center">
                <span className="mr-2">Instagram</span>
              </Link></li>
            </ul>
            
            <div className="mt-6">
              <p className="text-sm font-medium">+39 0421 299 158</p>
              <p className="text-sm font-medium">info@soggiornomarinobosco.it</p>
            </div>
          </div>

          {/* Colonna 4 - Logo e indirizzo */}
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-4 max-w-[160px] sm:max-w-[180px]">
              <Image 
                src="/images/logo-soggiorno-marino.png" 
                alt="Soggiorno Marino Don Bosco" 
                width={180} 
                height={80}
                className="object-contain bg-white p-2 rounded-lg"
              />
            </div>
            <div className="text-xs sm:text-sm text-center md:text-left">
              <p className="font-medium">via Selva Rosata, 61</p>
              <p className="font-medium">30013 Cavallino - Venezia</p>
              <p className="font-medium">C.F./P.IVA 03681180276</p>
            </div>
          </div>
        </div>

        {/* Linea di separazione */}
        <div className="border-t border-white/30 my-6"></div>

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-white/80">
          <div>
            Soggiorno Marino Don Bosco - via Selva Rosata, 61 - 30013 Cavallino - Venezia - VAT IT 03681180276
          </div>
          <div className="mt-4 md:mt-0 flex items-center">
            <span>Developed and design by <Link href="#" className="hover:underline font-medium">Matteo Buccudu</Link></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
