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
        <title>Baby Club</title>
        <meta
          name="description"
          content="La cucina del Soggiorno Marino Don Bosco a Caorle"
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
        <h2 className="text-3xl md:text-4xl text-secondary font-medium px-6">
          Servizio Baby Club
        </h2>
      </div>
      <div className="container mx-auto max-w-4xl px-4 sm:px-6">
        <p className="text-base sm:text-[1.313rem] text-primary mb-4 leading-normal">
          Abbiamo posto la felicità della tua famiglia al centro della nostra
          attenzione, creando tanti servizi ed emozionanti attività all’aperto
          per lo svago dei più piccoli e la serenità dei genitori.
        </p>
        <p className="text-base sm:text-[1.313rem] text-primary mb-4 leading-normal">
          Il Baby Club gratuito, seguito da un team esperto, propone un
          calendario ricco di attività e divertimento per la gioia dei tuoi
          bambini, da giugno a settembre.
        </p>
        <p className="text-base sm:text-[1.313rem] text-primary mb-4 leading-normal">
          Il Baby Club gratuito, seguito da un team esperto, propone un
          calendario ricco di attività e divertimento per la gioia dei tuoi
          bambini, da giugno a settembre.
        </p>

        {/* Spazio aggiuntivo prima degli appuntamenti */}
        <div className="mt-12">
          <p className="text-base text-center sm:text-[1.313rem] text-primary mb-4 leading-normal">
            Gli imperdibili appuntamenti della settimana:
          </p>
          <p className="text-base text-center sm:text-[1.313rem] font-bold text-primary mb-4 leading-normal">
            Anguriata{" "}
          </p>
          <p className="text-base text-center sm:text-[1.313rem] font-bold text-primary mb-4 leading-normal">
            Nutella Party
          </p>
          <p className="text-base text-center sm:text-[1.313rem] font-bold text-primary mb-4 leading-normal">
            Spettacoli di giocoleria
          </p>
          <div className="flex items-center justify-center mt-24 mb-4">
            <h2 className="text-3xl text-center md:text-4xl text-secondary font-medium px-6">
              Il servizio sarà attivo dal lunedì al venerdì dalle ore 15.30 alle
              ore 18.30.
            </h2>
          </div>
        </div>
      </div>
    </Layout>
  );
}
