import Footer from "@/cc/Footer";
import Navbar from "@/cc/Navbar";

export const siteName = "Soggiorno Marino don Bosco - Duna Verde";
export const siteTitle = "Soggiorno Marino don Bosco - Duna Verde";
export const siteDescription =
  "Soggiorno Marino don Bosco - Duna Verde - 61, 30013 Cavallino - Venezia";
export const siteBaseUrl = "https://dev.donboscosandona.it";

export const menu = [
  { href: "/", label: "ALL INCLUSIVE", isActive: true },
  { href: "/escursioni-giornaliere", label: "BED & BREAKFAST" },
  { href: "/servizi-professionali", label: "GRUPPI" },
  { href: "/chi-siamo", label: "CHI SIAMO" },
  { href: "/la-flotta", label: "STRUTTURA" },
  { href: "/news", label: "OFFERTE" },
  { href: "/news", label: "CARTA DEI SERVIZIto7" },
];

export const logoUrl =
  "https://i.postimg.cc/zvqYsPKD/SFP-DON-BOSCO-SAN-DONA-BIANCO.png";

export const header = (
  <Navbar menu={menu} siteName={siteName} logoUrl={logoUrl} />
);

export const footer = (
  <Footer
    titoloChiSiamo="CHI SIAMO"
    titoloStruttura="LA STRUTTURA"
    titoloSeguici="SEGUICI SU"
    numeroTelefono="+39 0421 299 158"
    email="info@soggiornomarinobosco.it"
    indirizzo1="via Selva Rosata, 61"
    indirizzo2="30013 Cavallino - Venezia"
    codiceFiscale="C.F./P.IVA 03681180276"
    testoFooter="Soggiorno Marino Don Bosco - via Selva Rosata, 61 - 30013 Cavallino - Venezia - VAT IT 03681180276"
    testoDeveloped="Developed and design by"
    nomeSviluppatore="Matteo Buccudu"
    linkAboutUs="/chi-siamo"
    linkBedBreakfast="/bed-breakfast"
    linkGruppi="/gruppi"
    linkLaCucina="/la-cucina"
    linkBabyClub="/baby-club"
    testoAboutUs="ABOUT US"
    testoBedBreakfast="BED & BREAKFAST"
    testoGruppi="GRUPPI"
    testoLaCucina="LA CUCINA"
    testoBabyClub="BABY CLUB"
    testoAppuntamenti="APPUNTAMENTI"
  />
);
