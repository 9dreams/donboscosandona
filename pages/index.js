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
import Servizidisposizione from "@/cc/servizidisposizione"


const servizi = [
  {
    imgSrc: "/images/servizidisposizione/spiaggia_privata.png",
    alt: "Spiaggia privata",
    titolo: "Spiaggia privata",
    descrizione: "Una spiaggia riservata agli ospiti del soggiorno garantisce la tranquillità di cui la tua famiglia ha bisogno."
  },
  {
    imgSrc: "/images/servizidisposizione/ombrelloni_sdraio.png",
    alt: "Ombrelloni e sdraio",
    titolo: "Ombrelloni e sdraio",
    descrizione: "Ogni camera ha in dotazione un ombrellone con sdraio e lettino."
  },
  {
    imgSrc: "/images/servizidisposizione/guardiaspiaggia.png",
    alt: "Guardiaspiaggia",
    titolo: "Guardiaspiaggia",
    descrizione: "Nel periodo estivo la balneazione è sorvegliata in determinati orari."
  },
  {
    imgSrc: "/images/servizidisposizione/ascensore.png",
    alt: "Ascensore",
    titolo: "Ascensore",
    descrizione: "I piani superiori sono raggiungibili da tutti grazie a un comodo ascensore."
  },
  {
    imgSrc: "/images/servizidisposizione/aria_condizionata.png",
    alt: "Aria condizionata",
    titolo: "Aria condizionata",
    descrizione: "Il relax in camera è garantito da un moderno impianto di condizionamento."
  },
  {
    imgSrc: "/images/servizidisposizione/bagno_interno.png",
    alt: "Bagno in camera",
    titolo: "Bagno in camera",
    descrizione: "Tutte le camere sono dotate di servizi igienici riservati e asciugacapelli."
  },
  {
    imgSrc: "/images/servizidisposizione/wifi.png",
    alt: "Wi-Fi",
    titolo: "Free Wi-Fi",
    descrizione: "La navigazione dai tuoi dispositivi mobili è garantita da una moderna connessione in fibra ottica."
  },
  {
    imgSrc: "/images/servizidisposizione/cappella.png",
    alt: "Cappella",
    titolo: "Cappella",
    descrizione: "Il Soggiorno è dotato di una cappella per chi desidera coltivare il suo rapporto con il Signore."
  },
  {
    imgSrc: "/images/servizidisposizione/bar.png",
    alt: "Bar",
    titolo: "Bar",
    descrizione: "Nella comoda hall del Soggiorno è sempre a disposizione un servizio bar."
  },
  {
    imgSrc: "/images/servizidisposizione/sala_conferenze.png",
    alt: "Sala conferenze",
    titolo: "Sala conferenze",
    descrizione: "I gruppi che prenotano la casa possono usufruire della sala conferenze per i loro momenti di studio."
  },
  {
    imgSrc: "/images/servizidisposizione/parcheggio_privato.png",
    alt: "Parcheggio privato",
    titolo: "Parcheggio privato",
    descrizione: "All'interno dell'area recintata del Soggiorno un comodo parcheggio privato è riservato agli ospiti."
  },
  {
    imgSrc: "/images/servizidisposizione/bandiera_blu.png",
    alt: "Bandiera Blu",
    titolo: "Bandiera Blu",
    descrizione: "La Bandiera Blu è sinonimo di acque pulite, di spiagge ben curate e di attenzione per le esigenze ambientali."
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
      <Servizidisposizione
        servizi={servizi}
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
