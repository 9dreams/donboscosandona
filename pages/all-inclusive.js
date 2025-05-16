"use client";

import Navbar from "@/cc/Navbar";
import Layout from "@/components/Layout";
import Featured from "@/components/Featured";
import Head from "next/head";
import Image from "next/image";

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
      <Head>
        <title>All Inclusive</title>
        <meta
          name="description"
          content="Servizio All Inclusive presso il Soggiorno Marino Don Bosco a Caorle"
        />
      </Head>

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
      <div className="flex items-center justify-center mb-4">
        <h2 className="text-3xl md:text-4xl text-gray-800 font-medium px-6">
          Servizio All Inclusive
        </h2>
      </div>
      <div className="container mx-auto max-w-4xl px-4 sm:px-6">
        <p className="text-base sm:text-[1.313rem] text-[#666666] mb-4 leading-normal">
          La nostra struttura offre ai propri ospiti la possibilità di
          soggiornare usufruendo della{" "}
          <span className="font-bold">formula B&B</span>. Questa offerta è
          pensata per tutti gli amanti delle gite fuori porta che hanno
          intenzione di vivere la propria vacanza conoscendo meglio il
          territorio e visitando le attrattive principali vicino a noi:{" "}
          <span className="font-bold">Caorle</span>, la laguna e i suoi casoni;
          <span className="font-bold">Venezia</span> e le isole;{" "}
          <span className="font-bold">Jesolo</span> con la sua zona pedonale più
          lunga d'Europa; i numerosi{" "}
          <span className="font-bold">parchi acquatici</span> per tutta la
          famiglia; i<span className="font-bold">percorsi cicloturistici</span>{" "}
          per vivere delle giornate immersi nella natura e all'aria aperta… La
          formula offre un soggiorno con camera e prima colazione,{" "}
          <span className="font-bold">PER UN MINIMO DI DUE NOTTI</span>. Dopo
          aver ricaricato le energie, al vostro risveglio sarete accolti dai
          profumi provenienti dalla nostra cucina: la colazione prevede,
          infatti, un ricchissimo buffet che spazia dai cibi dietetici alle
          proposte più golose.
        </p>
        <div className="max-w-4xl container mx-auto">
          <Image
            src="/images/bedbreakfast/tabella.png"
            alt="Bed & Breakfast orari"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
            quality={100}
            priority
          />
        </div>
        <p className="text-base sm:text-[1.313rem] text-[#0265A5] mb-4 mt-4 font-bold">
          Per chi desidera soggiornare da noi trascorrendo una giornata al mare,
          l'offerta B&B (per un minimo di due notti) include anche il posto auto
          e il posto in spiaggia riservato con ombrellone, sedia a sdraio e
          lettino.
        </p>
        <div>
          <p className="text-base sm:text-[1.313rem] text-[#666666] mb-4 mt-4 leading-normal">
            Per la <span className="font-bold">registrazione</span> sono
            necessari i documenti di riconoscimento validi di tutti gli ospiti
            (carta d'identità, passaporto o patente per i cittadini italiani).
          </p>
          <p className="text-base sm:text-[1.313rem] text-[#666666] mb-4 leading-normal">
            Le <span className="font-bold">camere</span> sono dotate di bagno,
            aria condizionata, riscaldamento e asciugacapelli, preparate con
            biancheria letto-bagno
          </p>
          <p className="text-base sm:text-[1.313rem] text-[#666666] mb-4 leading-normal">
            Il <span className="font-bold">parcheggio</span> è privato ma non
            custodito.
          </p>
          <p className="text-base sm:text-[1.313rem] text-[#666666] mb-4 leading-normal">
            La camera è riservata solo al ricevimento dell'{" "}
            <span className="font-bold">acconto pari a € 100</span>, da versare
            entro 5 giorni dalla prenotazione, pena la decadenza della stessa.
          </p>
          <p className="text-base sm:text-[1.313rem] text-[#666666] mb-4 leading-normal">
            Il pagamento dell'acconto, indirizzato a{" "}
            <span className="font-bold">
              ORATORIO DON BOSCO - via XIII Martiri n. 86 - 30027 San Donà di
              Piave (VE)
            </span>{" "}
            , può avvenire con accredito sul{" "}
            <span className="font-bold">Conto Corrente Bancario BPM</span>{" "}
            <span className="underline">IBAN</span> : IT 56 Z 05034 36282 0000
            0000 4212 - <span className="underline">CODICE SWIFT</span> :
            BAPPIT21713 CIN: IT027005B7FBR21JIS
          </p>
          <p className="text-base sm:text-[1.313rem] text-[#666666] mb-4 leading-normal">
            Il pagamento del saldo avverrà direttamente in struttura all'arrivo,
            con le seguenti modalità di pagamento: carta di credito, POS o
            contanti (non si accettano assegni).
          </p>
          <p className="leading-normal text-base sm:text-[1.313rem] text-[#666666] mb-4 font-bold">
            L'acconto sarà restituito solo in caso di disdetta pervenuta almeno
            30 giorni prima della data di inizio soggiorno
          </p>

          {/* Sezione informazioni e prenotazioni */}
          <div className="my-8">
            <h3 className="leading-normal text-center text-lg sm:text-[1.8rem] text-[#0265A5] font-medium mb-6">
              INFORMAZIONI e PRENOTAZIONI:
            </h3>

            <div className="bg-[#D84936] text-center p-4 rounded-md mb-6 max-w-xl mx-auto">
              <p className="text-black mb-1">via email:</p>
              <p className="text-black text-lg sm:text-xl font-medium">
                info@soggiornodonbosco.it
              </p>
            </div>

            <p className="text-center text-[#0265A5] text-lg sm:text-xl mb-6">
              da lunedì 3 febbraio 2025
            </p>

            <div className="bg-[#D84936] text-center p-4 rounded-md mb-6 max-w-xl mx-auto">
              <p className="text-black mb-1">Telefono:</p>
              <p className="text-black text-lg sm:text-xl font-medium">
                +39 0421 299 158
              </p>
            </div>

            <div className="text-center text-[#0265A5] text-base sm:text-xl mb-2">
              <p className="mb-1">
                da lunedì a venerdì, dalle ore 9.00 alle ore 12.30.
              </p>
              <p className="mb-1">(fino al 23 maggio)</p>
              <p>Dal 24 maggio tutti i giorni dalle 8.30 alle 21.30.</p>
            </div>

            <div className="text-center mt-8 mb-4">
              <p className="text-gray-700 text-base sm:text-xl mb-2">
                Visita il nostro sito{" "}
                <a
                  href="/"
                  className="text-[#0265A5] font-medium hover:underline"
                >
                  soggiornodonbosco.it
                </a>
              </p>
              <p className="text-gray-700 text-base sm:text-xl mb-4">
                e i nostri social
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-4">
                <a
                  href="https://instagram.com/soggiornodonbosco"
                  className="bg-[#FFC107] text-black py-2 px-4 rounded-md text-center hover:bg-[#e6af06] transition-colors w-full sm:w-auto"
                >
                  instagram.com/soggiornodonbosco
                </a>
                <a
                  href="https://facebook.com/soggiornodonbosco"
                  className="bg-[#FFC107] text-black py-2 px-4 rounded-md text-center hover:bg-[#e6af06] transition-colors w-full sm:w-auto"
                >
                  facebook.com/soggiornodonbosco
                </a>
              </div>

              <p className="text-gray-700 text-base sm:text-xl">
                per altre informazioni e offerte speciali!
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
