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
        <title>Gruppi</title>
        <meta name="description" content="Gruppi" />
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
          Ospitalità per gruppi
        </h2>
      </div>
      <div className="container mx-auto max-w-4xl px-4 sm:px-6">
        <p className="text-base sm:text-[1.313rem] text-primary mb-4 leading-normal">
          <span className="font-bold">Da metà settembre a metà maggio</span>{" "}
          offriamo la possibilità ai gruppi (a partire da 30 persone sino a 150)
          di soggiornare presso la nostra struttura con cucina attrezzata, sala
          da pranzo, salone delle conferenze o condivisioni, cappellina, camere
          di varia tipologia (da 1 a 6 posti letto), parcheggio privato, 2
          ettari di parco esterno fronte mare (con campi da calcio, basket e
          pallavolo). Si potranno svolgere attività ricreative e di spiritualità
          per famiglie e ragazzi. <br></br>
          <span className="font-bold">
            Ogni camera è dotata di aria condizionata, riscaldamento,
            asciugacapelli e wi-fi gratuito.
          </span>
        </p>
      </div>
    </Layout>
  );
}
