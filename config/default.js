import Footer from "@/cc/Footer";
import Navbar from "@/cc/Navbar";

export const siteName = "Soggiorno Marino don Bosco - Duna Verde";
export const siteTitle = "Soggiorno Marino don Bosco - Duna Verde";
export const siteDescription =
  "Sito ufficiale del Centro di Formazione Professionale don Bosco di San Donà di Piave";
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
    logo={{
      src: "/images/logo_navbar.png",
      alt: "Logo",
      width: 100,
      height: 120,
      className: "",
    }}
    titolo={{
      children: "Soggiorno Marino don Bosco - Duna Verde",
      className: "font-medium text-xl mb-3 text-[#696969]",
    }}
    indirizzo={{
      children: "Viale Selva Rosata, 81, 30021 Duna Verde VE",
      className: "text-base text-[#252525]",
    }}
    contattiTitolo1={{
      children: "Contatti per prodotti su misura",
      className: "font-medium text-[#696969] text-base mb-3",
    }}
    telefono1={{
      children: "+39 041 530 23 63",
      href: "tel:+390415302363",
      className: "hover:text-[#0265A5]",
    }}
    fax1={{
      children: "+39 041 530 40 16",
      href: "tel:+390415304016",
      className: "hover:text-[#0265A5]",
    }}
    email1={{
      children: "info@dogedivenezia.it",
      href: "mailto:info@dogedivenezia.it",
      className: "hover:text-[#0265A5]",
    }}
    contattiTitolo2={{
      children: "Contatti Individuali / Escursioni",
      className: "font-medium text-[#0265A5] text-base mb-3",
    }}
    telefono2={{
      children: "+39 041 315 63 02",
      href: "tel:+390413156302",
      className: "hover:text-[#0265A5]",
    }}
    fax2={{
      children: "+39 041 315 63 02",
      href: "tel:+390413156302",
      className: "hover:text-[#0265A5]",
    }}
    email2={{
      children: "api@dogedivenezia.it",
      href: "mailto:api@dogedivenezia.it",
      className: "hover:text-[#0265A5]",
    }}
    seguiciTitolo={{
      children: "Follow us",
      className: "font-medium text-[#0265A5] text-base",
    }}
    pagamentoTitolo={{
      children: "I nostri metodi di pagamento",
      className: "text-base font-medium text-[#0265A5]",
    }}
    pagamentoImmagine={{
      src: "/images/footer/carte.webp",
      alt: "Carte",
      width: 400,
      height: 100,
      className:
        "object-contain lg:object-left object-center w-full h-full md:w-auto md:h-auto",
    }}
    infoAzienda={{
      children:
        "Soggiorno Marino don Bosco - Duna Verde -   CIN: IT027005B7FBR2IJIS",
    }}
    privacyLink={{
      children: "Privacy",
      href: "/privacy",
      className: "text-white hover:text-gray-200",
    }}
    cookiePolicy={{
      children: "Cookie policy",
    }}
    sviluppatoDa={{
      children: "Design & Develop by",
    }}
    mediacyLink={{
      children: "Matteo Buccudu",
      href: "/",
      target: "_blank",
      className: "transition-all hover:text-secondary-300",
    }}
    iconaFacebook={
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        className="stroke-none fill-current"
      >
        <path d="m24.352 21.048.52-3.233h-3.25v-2.098c0-.884.453-1.746 1.904-1.746H25v-2.752A19 19 0 0 0 22.383 11c-2.669 0-4.414 1.548-4.414 4.351v2.464H15v3.233h2.968v7.816a12.3 12.3 0 0 0 3.653 0v-7.816z"></path>
      </svg>
    }
    iconaInstagram={
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        className="stroke-none fill-current"
      >
        <path d="M20 12.622c2.404 0 2.687 0 3.636.053.571.006 1.137.11 1.673.31.39.144.744.374 1.033.673.3.29.53.643.674 1.033.199.536.303 1.102.309 1.673.044.949.053 1.232.053 3.636s0 2.687-.053 3.636a5 5 0 0 1-.31 1.673 2.99 2.99 0 0 1-1.706 1.707 5 5 0 0 1-1.673.309c-.949.044-1.232.053-3.636.053s-2.687 0-3.636-.053a5 5 0 0 1-1.673-.31 2.8 2.8 0 0 1-1.033-.673 2.8 2.8 0 0 1-.674-1.033 5 5 0 0 1-.309-1.673c-.044-.949-.053-1.232-.053-3.636s0-2.687.053-3.636c.006-.571.11-1.137.31-1.673.144-.39.374-.744.673-1.033.29-.3.643-.53 1.033-.674a5 5 0 0 1 1.673-.309c.949-.044 1.232-.053 3.636-.053M20 11c-2.435 0-2.75.01-3.706.055a6.6 6.6 0 0 0-2.185.424 4.6 4.6 0 0 0-2.637 2.626 6.6 6.6 0 0 0-.417 2.19C11.011 17.248 11 17.564 11 20s.01 2.75.055 3.706c.016.747.159 1.486.424 2.185a4.6 4.6 0 0 0 2.626 2.637 6.6 6.6 0 0 0 2.185.423C17.25 29 17.565 29 20 29s2.753 0 3.71-.055a6.6 6.6 0 0 0 2.185-.424 4.6 4.6 0 0 0 2.633-2.626 6.6 6.6 0 0 0 .423-2.185C29 22.75 29 22.435 29 20s0-2.753-.055-3.71a6.6 6.6 0 0 0-.424-2.185 4.6 4.6 0 0 0-2.626-2.633 6.6 6.6 0 0 0-2.19-.417C22.752 11.011 22.436 11 20 11"></path>
        <path d="M20 15.38a4.62 4.62 0 1 0 0 9.24 4.62 4.62 0 0 0 0-9.24m0 7.623a3 3 0 1 1 2.121-.882 3 3 0 0 1-2.12.88zM24.805 16.275a1.08 1.08 0 1 0 0-2.16 1.08 1.08 0 0 0 0 2.16"></path>
      </svg>
    }
    iconaTwitter={
      <svg
        width="18"
        height="18"
        viewBox="0 0 19 18"
        className="stroke-none fill-current"
      >
        <path d="M14.945 0h2.914l-6.394 7.637L18.938 18H13.07l-4.59-6.297L3.223 18H.309l6.777-8.168L-.07 0H5.94l4.149 5.754Zm-1.02 16.207h1.618L5.093 1.727H3.356Zm0 0"></path>
      </svg>
    }
  />
);
