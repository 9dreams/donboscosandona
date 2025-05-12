"use client";

import Navbar from "@/cc/Navbar";
import Layout from "@/components/Layout";
import Featured from "@/components/Featured";
import Head from "next/head";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

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
        <title>Scopri la struttura</title>
        <meta name="description" content="Scopri la struttura" />
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
      {/*  */}
      <div className="flex items-center justify-center mb-4">
        <h2 className="text-3xl md:text-4xl text-gray-800 font-medium px-6">
          Scopri la struttura
        </h2>
      </div>
      <div className="container mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mb-12 relative">
          <Swiper
            modules={[Navigation, Pagination, EffectFade]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              enabled: false,
            }}
            pagination={{
              enabled: true,
              clickable: true
            }}
            breakpoints={{
              768: {
                navigation: {
                  enabled: true,
                },
              }
            }}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            style={{ height: "450px" }}
            className="rounded-xl overflow-hidden swiper-custom"
          >
            <SwiperSlide>
              <div className="w-full h-full relative">
                <Image
                  src="/images/letto_singola.jpg"
                  alt="Immagine della struttura 1"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full relative">
                <Image
                  src="/images/due_letti_singoli.jpg"
                  alt="Immagine della struttura 2"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full relative">
                <Image
                  src="/images/letto_singola.jpg"
                  alt="Immagine della struttura 3"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </SwiperSlide>
          </Swiper>

          {/* Stile personalizzato per i controlli */}
          <style jsx global>{`
            .swiper-button-next,
            .swiper-button-prev {
              width: 32px !important;
              height: 32px !important;
              background-color: #048be6 !important;
              border-radius: 50% !important;
              color: white !important;
            }

            .swiper-button-next:after,
            .swiper-button-prev:after {
              font-size: 14px !important;
              font-weight: bold !important;
            }

            .swiper-pagination-bullet-active {
              background-color: #048be6 !important;
            }

            @media (max-width: 767px) {
              .swiper-button-next,
              .swiper-button-prev {
                display: none !important;
              }
            }
          `}</style>
        </div>
      </div>
    </Layout>
  );
}
