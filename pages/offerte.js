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
        <title>Offerte</title>
        <meta
          name="description"
          content="Offerte del Soggiorno Marino Don Bosco"
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
        numeroditelefono="       +39 0421 299 158
"
        posizioneSOGGIORNO="Via Selva Rosata, 61"
        testoTelefono="Tel"
        testoEmail="E-Mail"
        logoUrl="/images/logo_navbar.png"
      />
      <div className="flex items-center justify-center mb-4">
        <h2 className="text-[2.625rem] text-secondary font-medium px-6">
          Estate #2025: le Offerte
        </h2>
      </div>

      <div className="container mx-auto max-w-4xl px-4 sm:px-6">
        <h2 className="text-[1.75rem] text-secondary text-left font-medium mb-4">
          Giubileo 2025
        </h2>
        <p className="text-base sm:text-[1.313rem] text-primary mb-4 leading-normal">
          In occasione del <span className="font-bold">Giubileo 2025</span>{" "}
          (fino a fine disponibilità camere) dal 24 maggio al 07 giugno 2025!{" "}
          <span className="font-bold">Bambini gratis fino a 4 anni.</span>
        </p>
        <p className="text-base sm:text-[1.313rem] text-secondary font-bold mb-4 leading-normal">
          L'anno del Giubileo...
        </p>
        <p className="text-base sm:text-[1.313rem] text-primary mb-4 leading-normal">
          Il Soggiorno Marino Don Bosco immerso nel verde con ampio parco giochi
          e spiaggia fronte mare, propone prezzi speciali per un'esperienza di
          villeggiatura all'insegna della buona cucina del meritato riposo e
          della tranquillità.
        </p>
        <p className="text-base sm:text-[1.313rem] text-primary font-bold mb-2 leading-normal">
          Scegli la formula che fa per te:
        </p>
        <p className="text-base sm:text-[1.313rem] text-primary mb-2 leading-normal">
          Pensione completa € 210.00
        </p>
        <p className="text-base sm:text-[1.313rem] text-primary  mb-2 leading-normal">
          Mezza pensione € 156.00
        </p>
        <p className="text-base sm:text-[1.313rem] text-primary  mb-4 leading-normal">
          Camera e colazione € 105.00
        </p>

        <p className="text-base sm:text-[1.313rem] text-primary mb-4 leading-normal">
          Contattaci!
        </p>
        {/* Fuga 3 giorni */}
        <div className="mt-8">
          <div className="bg-[#6699cc] text-white py-2 px-2 inline-block mb-2">
            <p className="text-base sm:text-[1.313rem] font-medium m-0 leading-normal">
              Fuga di 3 Giorni
            </p>
          </div>
          <p className="text-base sm:text-[1.313rem] font-bold text-primary mb-2 leading-normal">
            Dal 24 maggio al 7 giugno 2025!
          </p>
          <p className="text-base sm:text-[1.313rem] text-primary mb-4 leading-normal">
            L’ideale per una vacanza da vivere alla riscoperta del piacere delle
            passeggiate all'aperto, fronte mare, e della buona cucina.{" "}
            <span className="font-bold">
              Aperitivo di Benvenuto con cicchetti veneziani all'arrivo gratis.
            </span>
          </p>
          <p className="text-base sm:text-[1.313rem] text-primary mb-2 leading-normal">
            L'esperienza{" "}
          </p>
          <p className="text-base sm:text-[1.313rem] text-primary mb-4 leading-normal">
            Il Soggiorno Marino don Bosco di Duna Verde, nei pressi di{" "}
            <span className="font-bold">
              Caorle, cittadina di mare e di pescatori
            </span>{" "}
            a metà strada tra le splendide campagne venete e la città di
            Venezia, è il{" "}
            <span className="font-bold">
              {" "}
              luogo ideale per piacevoli passeggiate, escursioni in bicicletta,
              gite in barca o visite nelle meravigliose località turistiche
            </span>{" "}
            e nelle città di interesseartistico, mete ideali per le gite fuori
            porta, come <span className="font-bold">Venezia,</span> città
            prediletta del turismo internazionale, Verona, Vicenza, Padova e i
            Colli Euganei.
          </p>
          <p className="text-base sm:text-[1.313rem] font-bold text-primary mb-2 leading-normal">
            Scegli la formula che fa per te:
          </p>
          <p className="text-base sm:text-[1.313rem] text-primary mb-2 leading-normal">
            Pensione completa € 210.00
          </p>
          <p className="text-base sm:text-[1.313rem] text-primary mb-2 leading-normal">
            Mezza pensione € 156.00
          </p>
          <p className="text-base sm:text-[1.313rem] text-primary mb-8 leading-normal">
            Camera e colazione € 105.00
          </p>
          <p className="text-base sm:text-[1.313rem] text-primary mb-8 leading-normal">
            Contattaci!
          </p>
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
