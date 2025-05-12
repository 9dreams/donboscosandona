"use client";

import Navbar from "@/cc/Navbar";
import Privacy from "@/cc/Privacy";
import CardServizi from "@/cc/cardServizi";
import Layout from "@/components/Layout";
import Featured from "@/components/Featured";
import Servizidisposizione from "@/cc/servizidisposizione";
import ContattiSoggiorno from "@/cc/contattisoggiorno";
import SectionInitial from "@/cc/sectioninitial";
import LuoghiVisitare from "@/cc/luoghivisitare";
const servizi = [
  {
    imgSrc: "/images/servizidisposizione/spiaggia_privata.png",
    alt: "Spiaggia privata",
    titolo: "Spiaggia privata",
    descrizione:
      "Una spiaggia riservata agli ospiti del soggiorno garantisce la tranquillità di cui la tua famiglia ha bisogno.",
  },
  {
    imgSrc: "/images/servizidisposizione/ombrelloni_sdraio.png",
    alt: "Ombrelloni e sdraio",
    titolo: "Ombrelloni e sdraio",
    descrizione:
      "Ogni camera ha in dotazione un ombrellone con sdraio e lettino.",
  },
  {
    imgSrc: "/images/servizidisposizione/guardiaspiaggia.png",
    alt: "Guardiaspiaggia",
    titolo: "Guardiaspiaggia",
    descrizione:
      "Nel periodo estivo la balneazione è sorvegliata in determinati orari.",
  },
  {
    imgSrc: "/images/servizidisposizione/ascensore.png",
    alt: "Ascensore",
    titolo: "Ascensore",
    descrizione:
      "I piani superiori sono raggiungibili da tutti grazie a un comodo ascensore.",
  },
  {
    imgSrc: "/images/servizidisposizione/aria_condizionata.png",
    alt: "Aria condizionata",
    titolo: "Aria condizionata",
    descrizione:
      "Il relax in camera è garantito da un moderno impianto di condizionamento.",
  },
  {
    imgSrc: "/images/servizidisposizione/bagno_interno.png",
    alt: "Bagno in camera",
    titolo: "Bagno in camera",
    descrizione:
      "Tutte le camere sono dotate di servizi igienici riservati e asciugacapelli.",
  },
  {
    imgSrc: "/images/servizidisposizione/wifi.png",
    alt: "Wi-Fi",
    titolo: "Free Wi-Fi",
    descrizione:
      "La navigazione dai tuoi dispositivi mobili è garantita da una moderna connessione in fibra ottica.",
  },
  {
    imgSrc: "/images/servizidisposizione/cappella.png",
    alt: "Cappella",
    titolo: "Cappella",
    descrizione:
      "Il Soggiorno è dotato di una cappella per chi desidera coltivare il suo rapporto con il Signore.",
  },
  {
    imgSrc: "/images/servizidisposizione/bar.png",
    alt: "Bar",
    titolo: "Bar",
    descrizione:
      "Nella comoda hall del Soggiorno è sempre a disposizione un servizio bar.",
  },
  {
    imgSrc: "/images/servizidisposizione/sala_conferenze.png",
    alt: "Sala conferenze",
    titolo: "Sala conferenze",
    descrizione:
      "I gruppi che prenotano la casa possono usufruire della sala conferenze per i loro momenti di studio.",
  },
  {
    imgSrc: "/images/servizidisposizione/parcheggio_privato.png",
    alt: "Parcheggio privato",
    titolo: "Parcheggio privato",
    descrizione:
      "All'interno dell'area recintata del Soggiorno un comodo parcheggio privato è riservato agli ospiti.",
  },
  {
    imgSrc: "/images/servizidisposizione/bandiera_blu.png",
    alt: "Bandiera Blu",
    titolo: "Bandiera Blu",
    descrizione:
      "La Bandiera Blu è sinonimo di acque pulite, di spiagge ben curate e di attenzione per le esigenze ambientali.",
  },
];

// Array per la prima sezione: Scoperta di Caorle e Itinerari in bici
const SECTION1 = [
  {
    titolo: "Alla scoperta di Caorle",
    descrizione:
      "Immaginate diciotto chilometri di spiaggia sabbiosa color oro, mare pulito adatto ai bambini, limpido, pescoso e pieno di tesori sommersi, per la gioia dei pescatori e amanti delle immersioni e degli sport acquatici, e poi le dune, la natura incontaminata, il borgo storico sul mare, le eccellenze enogastronomiche del territorio...",
    link: "https://www.caorle.eu/it",
    immagine: "/images/luoghivisitare/mare_caorle.png",
    alt: "Vista di Caorle al tramonto",
  },
  {
    titolo: "Itinerari in bicicletta",
    descrizione:
      "Con il servizio bici gratuito offerto dal Soggiorno Marino don Bosco, fare un'uscita in bicicletta è uno dei modi migliori per vivere la natura nei dintorni di Caorle. Scegli il percorso più adatto a te... o provane uno diverso ogni giorno... e parti per l'avventura. Caorle e i suoi territori incontaminati ti stanno aspettando!",
    link: "https://www.komoot.com/it-it/guide/619197/percorsi-bici-e-piste-ciclabili-nei-dintorni-di-caorle",
    immagine: "/images/luoghivisitare/bici.png",
    alt: "Persone che osservano il paesaggio dalla bicicletta",
  },
];

// Array per la seconda sezione: le altre card
const SECTION2 = [
  {
    titolo: "Ospitalità per gruppi",
    descrizione:
      "Per soggiorni di almeno 40 ospiti, siamo a tua disposizione nei periodi dedicati all'ospitalità per i gruppi...",
    link: "/gruppi",
    immagine: "/images/luoghivisitare/sala.png",
    alt: "Sala da pranzo per gruppi",
  },
  {
    titolo: "Servizio bici gratuito",
    descrizione:
      "Biciclette su prenotazione gratuita per splendide scampagnate alla scoperta di Caorle e dintorni.",
    link: "/servizio-bici",
    immagine: "/images/luoghivisitare/pista_ciclabile.jpg",
    alt: "Pista ciclabile",
  },
  {
    titolo: "ATVO",
    descrizione:
      "Una comoda fermata degli autobus di fronte al Soggiorno Marino ti permetterà di viaggiare sulle linee ATVO: 4a / Aeroporto Marco Polo di Venezia - Caorle - P.S.Margherita - Lido Altanea - Duna Verde 97 / Caorle - Porto S. Margherita - Duna Verde Anche i biglietti possono essere acquistati comodamente all'interno del Soggiorno.",
    link: "https://www.atvo.it/it-orari-e-autolinee.html",
    immagine: "/images/luoghivisitare/ATVO.png",
    alt: "Logo ATVO",
  },
];

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
        emailSuMisura="info@soggiornomarinobosco.it"
        titoloDoge="Soggiorno Marino Don Bosco"
        titoloHome="ALL INCLUSIVE"
        titoloEscursioni="BED & BREAKFAST"
        titoloServizi="GRUPPI"
        titoloChiSiamo="CHI SIAMO"
        titoloFlotta="STRUTTURA"
        titoloNews="OFFERTE"
        testoContattiSuMisura="Contatti per prodotti su misura"
        maildogedivenezia="info@soggiornomarinobosco.it"
        numeroditelefono="+39 041 530 23 63"
        posizioneSOGGIORNO="Via Selva Rosata, 61"
        testoTelefono="Tel"
        testoEmail="E-Mail"
        logoUrl="/images/logo_navbar.png"
      />

      <SectionInitial
        intestazione="Soggiorno Marino don Bosco"
        titoloPrincipale="Tra verde e azzurro"
        testoApertura1="Il Soggiorno Marino Don Bosco"
        testoApertura2="riaprirà per la stagione estiva venerdì 24 maggio 2025."
        descrizione1="Il Soggiorno Marino Don Bosco e la Casa Domenico Savio sono immersi in un ampio giardino fronte mare, con accesso diretto alla spiaggia privata in località Duna Verde, nei pressi di Caorle, caratteristica cittadina di mare e di pescatori. Duna Verde si trova a metà strada tra le splendide campagne venete e la città di Venezia, meta prediletta del turismo internazionale."
        descrizione2="A pochi chilometri di distanza numerose località turistiche e città di interesse artistico sono mete ideali per le vostre escursioni e gite fuori porta. La riviera e il lido si accendono di sera di iniziative e feste."
        testoBottone="SCOPRI LA NOSTRA STORIA"
        linkBottone="/chi-siamo"
        immagine1="/images/initialsection/bagnino.jpg"
        immagine2="/images/initialsection/sky_.jpg"
        immagine3="/images/initialsection/caorle_ambiente.jpg"
      />
      <div className="items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="items-center justify-center px-4 sm:px-8">
            <div className="flex flex-col items-center">
              <h2 className="text-[30px] sm:text-[40px] md:text-[50px] mb-8 text-center">
                I nostri servizi
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
                <CardServizi
                  urlImmagine="/images/servizio_inclusive.png"
                  altImmagine="Murano (26)"
                  titolo="Servizio all-inclusive"
                  descrizioneservizio="Il nostro servizio di ospitalità classica, della durata di una settimana, da sabato a sabato..."
                  testoBottonePrenota="SCOPRI DI PIÙ"
                />
                <CardServizi
                  urlImmagine="/images/cardservizi/bed_breakfast.png"
                  altImmagine="Murano (26)"
                  titolo="Bed & Breakfast"
                  descrizioneservizio="Per tutti gli amanti delle gite fuori porta, la nostra formula che offre un soggiorno con camera e prima colazione a partire da 31 € a persona..."
                  testoBottonePrenota="SCOPRI DI PIÙ"
                />
                <CardServizi
                  urlImmagine="/images/cardservizi/family_time.jpg"
                  altImmagine="Murano (26)"
                  titolo="Family Time"
                  descrizioneservizio="Regala alla tua famiglia un tempo di qualità per stare assieme in un ambiente di serenità e pace, dove costruire ricordi indimenticabili che cementano legami indissolubili..."
                  testoBottonePrenota="SCOPRI DI PIÙ"
                />
                <CardServizi
                  urlImmagine="/images/cardservizi/vacanza_nonni.png"
                  altImmagine="Murano (26)"
                  titolo="Regala una vacanza ai tuoi nonni"
                  descrizioneservizio="Quest'anno regala ai tuoi nonni una vacanza al mare all'insegna del riposo e della tranquillità in un ambiente sicuro e protetto..."
                  testoBottonePrenota="SCOPRI DI PIÙ"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Servizidisposizione servizi={servizi} />
      <LuoghiVisitare
        section1Card1={SECTION1[0]}
        section1Card2={SECTION1[1]}
        section2Card1={SECTION2[0]}
        section2Card2={SECTION2[1]}
        section2Card3={SECTION2[2]}
      />
      <ContattiSoggiorno
        titoloPagina="Contatti"
        nomeSoggiorno="SOGGIORNO MARINO DON BOSCO"
        telefono="+39 0421 299 158"
        email="info@soggiornomarinobosco.it"
        indirizzo1="via Selva Rosata, 61"
        indirizzo2="30013 Cavallino - Venezia"
        testoSeguici="Seguici su"
        linkFacebook="https://www.facebook.com"
        linkInstagram="https://www.instagram.com"
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
        bgColor="bg-[#0265A5]"
        hoverBgColor="hover:bg-[#0265A5]"
        textColor="text-[#0265A5]"
      />
    </Layout>
  );
}
