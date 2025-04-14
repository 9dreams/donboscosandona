"use client";

import Navbar from "@/cc/Navbar";
import Hero from "@/cc/Hero";
import Titolo from "@/cc/Titolo";
import Footer from "@/cc/Footer";
import Privacy from "@/cc/Privacy";
import Card from "@/cc/Card";
import CardEscursione2 from "@/cc/CardEscursione2";
import CardFeature from "@/cc/CardFeature";
import CardEscursione from "@/cc/CardEscursione";
import Contatti from "@/cc/Contatti";


export default function Home() {
  return (
    <main>
      <Navbar
        testo1="ALL INCLUSIVE"
        testo2="BED & BREAKFAST"
        testo3="GRUPPI"
        testo4="CHI SIAMO"
        testo5="STRUTTURA"
        testo6="OFFERTE"
        testo7="News"
        testo8="Contatti"
        telefonoSuMisura="+39 041 530 23 63"
        faxSuMisura="+39 041 530 40 16"
        emailSuMisura="info@dogedivenezia.it"
        telefonoIndividuali="+39 041 315 63 02"
        emailIndividuali="api@dogedivenezia.it"
        linguaItaliano="IT"
        linguaInglese="EN"
        linguaTedesco="DE"
        linguaFrancese="FR"
        linguaSpagnolo="ES"
        titoloDoge="Il Doge di Venezia"
        titoloHome="Home Page"
        titoloEscursioni="Escursioni Giornaliere"
        titoloServizi="Servizi Professionali"
        titoloChiSiamo="Chi Siamo"
        titoloFlotta="La Flotta"
        titoloNews="News"
        testoContattiSuMisura="Contatti per prodotti su misura"
        maildogedivenezia="info@dogedivenezia.it"
        numeroditelefono="+39 041 530 23 63"
        testoContattiIndividuali="Contatti Individuali / Escursioni"
        selettorelinguaITA="IT"
        serviziProfessionali="Servizi Professionali"
        selettorelinguaENG="EN"
        selettorelinguaDE="DE"
        selettorelinguaFR="FR"
        selettorelinguaES="ES"
        numerodicellulare="+39 041 315 63 02"
        testoescursionigiornaliere="Escursioni Giornaliere"
        posizioneDOGE="Via Treportina, 30 I-30013 Cavallino Treporti - Venezia"
        testoTelefono="Tel"
        mailAPI="api@dogedivenezia.it"
        testoFax="Fax"
        testoEmail="E-Mail"
        testoSocial="Seguici"
        logoUrl="/images/navbar/logo.webp"
      />
      <Hero
        immagineUrl="/images/hero/venice.jpg"
        immagineAlt="Immagine Hero"
        titoloTesto="Escursioni Giornaliere a Venezia,"
        sottotitoloTesto="un incanto sospeso sull'acqua"
      />
      <Titolo
        titolo1="Escursioni Giornaliere"
        titolo2="Nessuno ti mostrerà"
        venezia="Venezia"
        titolo3={
          <>
            Lasciati trasportare da una brezza marina mentre ammiri i palazzi
            storici, i ponti iconici e i tesori nascosti della città. Vivi
            l'emozione di vedere{" "}
            <span className="text-[#99006e] font-semibold">Venezia</span> dal
            suo elemento più autentico: l'acqua.
          </>
        }
        stile="text-[#99006e] font-semibold"
      />
      <CardEscursione
        urlImmagine="/images/cardescursione/murano2.webp"
        altImmagine="Murano (26)"
        titolo="Escursione alle 3 Isole Murano - Burano - Torcello (Da Venezia)"
        luogoPartenza="Venezia"
        durata="6h 30min"
        dataInizio="1 aprile 2024"
        dataFine="31 marzo 2026"
        prezzo="35,00"
        testoPrenotaSubito="prenota subito, si esaurisce facilmente!"
        testoPartenza="Partenza:"
        testoDurata="Durata:"
        testoDisponibileDal="Disponibile dal:"
        testoAl="al"
        testoDa="Da"
        testoBottonePrenota="Prenota"
      />
      <CardEscursione2
        titolo="Escursione alle 3 Isole Murano - Burano - Torcello (Da Venezia)"
        descrizione="La nostra prima tappa, Murano, scopri perché l'isola è rinomata per le sue vetrerie con una visita a una fabbrica di vetro locale. Guarda un abile artigiano durante una dimostrazione della lavorazione del vetro. Successivamente, avrai circa un'ora sull'isola per fare shopping in uno dei tanti negozi di vetro."
        luogoPartenza="Venezia"
        durata="6h 30min"
        dataDisponibilita="1 aprile 2024"
        prezzo="35,00"
        immagine="/images/cardescursione/murano_venice.webp"
        altImmagine="Murano (26)"
        urlMappa="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2799.935943006592!2d12.457208287171033!3d45.455997250089766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477eb1c7a88973a5%3A0x568247814ad7d782!2sVia%20Treportina%2C%2030%2C%2030013%20Cavallino-Treporti%20VE%2C%20Italia!5e0!3m2!1sit!2sit!4v1652450992365!5m2!1sit!2sit"
      />
      <CardFeature
        prenotazione={{
          immagine: "/images/cardfeature/phone.png",
          altImmagine: "Prenota",
          titolo: "Prenotazione Istantanea",
          descrizione:
            "Prenota il tuo tour a Venezia in pochi click, senza attese.",
        }}
        prezzo={{
          immagine: "/images/cardfeature/prezzo.png",
          altImmagine: "Prezzo",
          titolo: "Miglior Prezzo Garantito",
          descrizione:
            "Offriamo i migliori prezzi per un'esperienza indimenticabile.",
        }}
        pagamenti={{
          immagine: "/images/cardfeature/pagamenti.png",
          altImmagine: "Pagamenti",
          titolo: "Pagamenti 100% Sicuri",
          descrizione: "Goditi il tuo tour con pagamenti sicuri e affidabili.",
        }}
        territorio={{
          immagine: "/images/cardfeature/venezianita.png",
          altImmagine: "Venezianita",
          titolo: "Del Territorio",
          descrizione:
            "Veneziani da generazioni: passione e amore per la città.",
        }}
      />

      <Card
        titoloGrassetto="Matrimonio"
        titolo="Matrimonio a Bordo"
        descrizione="Scopri il fascino di Venezia in un modo unico e romantico con il nostro servizio 'Matrimonio a Bordo'. Immagina di dire 'Sì' circondato dalle incantevoli acque della laguna veneziana."
        testoBottone="Scopri di più"
        immagineUrl="https://backoffice.dogedivenezia.it/assets/090ed0d7-6236-4c1c-813f-ececad5c79af.JPG"
        immagineAlt="Matrimonio a bordo"
        coloreSfondoBottone="bg-white"
        coloreTestoBottone="text-[#99006E]"
        coloreHoverSfondoBottone="hover:bg-[#99006E]"
        coloreHoverTestoBottone="hover:text-white"
      />

      <Contatti
        titoloSezione="Contattaci"
        descrizione="Scrivici per problemi con la prenotazione o se vuoi chiederci maggiori informazioni riguardo i tour."
        titoloContattiSuMisura="Contatti per prodotti su misura"
        telefonoSuMisura="+39 041 530 23 63"
        emailSuMisura="info@dogedivenezia.it"
        titoloContattiIndividuali="Contatti Individuali / Escursioni"
        telefonoIndividuali="+39 041 315 63 02"
        emailIndividuali="api@dogedivenezia.it"
        coordinateMappa="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2799.935943006592!2d12.457208287171033!3d45.455997250089766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477eb1c7a88973a5%3A0x568247814ad7d782!2sVia%20Treportina%2C%2030%2C%2030013%20Cavallino-Treporti%20VE%2C%20Italia!5e0!3m2!1sit!2sit!4v1652450992365!5m2!1sit!2sit"
        immagineTelefono="/images/contatti/phone1__.png"
        immagineEmail="/images/contatti/contact_email.png"
        altImmagineTelefono="Icona telefono"
        altImmagineEmail="Icona email"
      />

      <Footer
        logo={{
          src: "/images/footer/doge_footer.webp",
          alt: "Logo",
          width: 80,
          height: 94,
          className: "",
        }}
        titolo={{
          children: "Il Doge di Venezia",
          className: "font-medium text-xl mb-3 text-[#99006E]",
        }}
        indirizzo={{
          children: "Via Treportina , 30 I-30013 Cavallino Treporti - Venezia",
          className: "text-base text-[#252525]",
        }}
        contattiTitolo1={{
          children: "Contatti per prodotti su misura",
          className: "font-medium text-[#99006E] text-base mb-3",
        }}
        telefono1={{
          children: "+39 041 530 23 63",
          href: "tel:+390415302363",
          className: "hover:text-[#99006E]",
        }}
        fax1={{
          children: "+39 041 530 40 16",
          href: "tel:+390415304016",
          className: "hover:text-[#99006E]",
        }}
        email1={{
          children: "info@dogedivenezia.it",
          href: "mailto:info@dogedivenezia.it",
          className: "hover:text-[#99006E]",
        }}
        contattiTitolo2={{
          children: "Contatti Individuali / Escursioni",
          className: "font-medium text-[#99006E] text-base mb-3",
        }}
        telefono2={{
          children: "+39 041 315 63 02",
          href: "tel:+390413156302",
          className: "hover:text-[#99006E]",
        }}
        fax2={{
          children: "+39 041 315 63 02",
          href: "tel:+390413156302",
          className: "hover:text-[#99006E]",
        }}
        email2={{
          children: "api@dogedivenezia.it",
          href: "mailto:api@dogedivenezia.it",
          className: "hover:text-[#99006E]",
        }}
        seguiciTitolo={{
          children: "Follow us",
          className: "font-medium text-[#99006E] text-base",
        }}
        pagamentoTitolo={{
          children: "I nostri metodi di pagamento",
          className: "text-base font-medium text-[#99006E]",
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
            "Il Doge di Venezia S.r.l. - P.Iva: IT03515100273 - Rea VE - 315238",
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
          children: "Mediacy Web Agency Venezia",
          href: "https://www.mediacy.it/",
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
      <Privacy
        rifiutaButtonText="Rifiuta cookie non necessari ×"
        titolo="Questo sito web raccoglie alcuni dati personali dei visitatori e utenti"
        descrizione="Con il tuo consenso, noi e i nostri partner utilizziamo i cookie e tecnologie simili per archiviare, accedere ed elaborare i dati personali come, ad esempio, la visita al sito web o la personalizzazione degli annunci."
        privacyText="Poiché rispettiamo il tuo diritto alla privacy, è possibile scegliere di non consentire alcuni tipi di cookie. Clicca su preferenze GDPR per saperne di più."
        accettaTuttoText="ACCETTA TUTTO"
        accettaNecessariText="ACCETTA NECESSARI"
        preferenzeGDPRText="Preferenze GDPR"
        poweredByText="Powered by"
        privacyLabLogoUrl="/images/privacy/privacylab.png"
        privacyLabLogoAlt="PrivacyLab"
        cookiePolicyText="Visualizza la Cookie Policy Completa"
        onAccettaTutto={() => {}}
        onAccettaNecessari={() => {}}
        onRifiuta={() => {}}
        onPreferenzeGDPR={() => {}}
        onCookiePolicy={() => {}}
        bgColor="bg-[#99006E]"
        hoverBgColor="hover:bg-[#7a0058]"
        textColor="text-[#99006E]"
      />
    </main>
  );
}
