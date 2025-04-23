"use client";

import Navbar from "@/cc/Navbar";
import Privacy from "@/cc/Privacy";
import Card from "@/cc/Card";
import CardEscursione2 from "@/cc/CardEscursione2";
import CardFeature from "@/cc/CardFeature";
import CardServizi from "@/cc/cardServizi";
import Contatti from "@/cc/Contatti";
import Layout from "@/components/Layout";
import Featured from "@/components/Featured";

export async function getStaticProps() {
  let res = await fetch(
    "https://channels.donboscosandona.it/api/posts/inoratorio"
  );
  const data = await res.json();

  return {
    props: { data },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 minutes
    revalidate: 1800, // In secondi: il build viene fatto al massimo una volta ogni mezzora
  };
}

export default function Home({ data }) {
  return (
    <Layout>
      <Featured data={data} limit={4} defaultTag="scuola" />
      <Navbar
        testo1="ALL INCLUSIVE"
        testo2="BED & BREAKFAST"
        testo3="GRUPPI"
        testo4="CHI SIAMO"
        testo5="STRUTTURA"
        testo6="OFFERTE"
        testo7="CARTA DEI SERVIZI"
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
        logoUrl="/images/logo_navbar.png"
      />

      <div className=" items-center text-center justify-center">
        {" "}
        <h2 className="text-[30px]">I nostri servizi</h2>
      </div>
      {/* Grid 2 card per desktop con 4 righe */}
      <div className="container items-center justify-center">      <div className="grid grid-cols-2 ">      
        
        <CardServizi
        urlImmagine="/images/servizio_inclusive.png"
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
      <CardServizi
        urlImmagine="/images/servizio_inclusive.png"
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
      <CardServizi
        urlImmagine="/images/servizio_inclusive.png"
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
      <CardServizi
        urlImmagine="/images/servizio_inclusive.png"
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
      /></div></div>



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
    </Layout>
  );
}
