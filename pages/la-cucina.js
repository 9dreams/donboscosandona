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
        <title>La cucina</title>
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
        numeroditelefono="       +39 0421 299 158
"
        posizioneSOGGIORNO="Via Selva Rosata, 61"
        testoTelefono="Tel"
        testoEmail="E-Mail"
        logoUrl="/images/logo_navbar.png"
      />
      <div className="flex items-center justify-center mb-4">
        <h2 className="text-3xl md:text-4xl text-secondary font-medium px-6">
          La nostra cucina
        </h2>
      </div>
      <div className="container mx-auto max-w-4xl px-4 sm:px-6">
        <p className="text-base sm:text-[1.313rem] text-primary mb-4 leading-normal">
          Il nostro Chef ogni giorno stupisce gli ospiti con{" "}
          <span className="font-bold">
            primi e secondi piatti di carne e pesce
          </span>
          , un{" "}
          <span className="font-bold">
            ricco buffet con antipasti, verdure cotte e crude di stagione e i
            dolci della casa
          </span>
          . La cordialità del personale ti darà l'impressione di essere in
          famiglia, godendo della serenità di non dover pensare a nulla.
        </p>
      </div>
      <div className="max-w-4xl container mx-auto px-4 sm:px-6 mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          <div
            className="relative rounded-lg overflow-hidden"
            style={{ height: "450px" }}
          >
            <Image
              src="/images/cucina/dettaglio_frutta.jpg"
              alt="Buffet di antipasti e piatti freddi"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
          <div
            className="relative rounded-lg overflow-hidden"
            style={{ height: "450px" }}
          >
            <Image
              src="/images/cucina/dettaglio_piatto_di_mare.jpg"
              alt="Insalata di mare e piatti tipici"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
          <div
            className="relative rounded-lg overflow-hidden"
            style={{ height: "450px" }}
          >
            <Image
              src="/images/cucina/dettaglio_piatto.jpg"
              alt="Gnocchi e specialità della casa"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
          <div
            className="relative rounded-lg overflow-hidden"
            style={{ height: "450px" }}
          >
            <Image
              src="/images/cucina/dettaglio_torte.jpg"
              alt="Dolci e frutta fresca"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
