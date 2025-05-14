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
      <div className="flex items-center justify-center mb-8">
        <h2 className="text-3xl md:text-4xl text-secondary font-medium px-6">
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
              clickable: true,
            }}
            breakpoints={{
              768: {
                navigation: {
                  enabled: true,
                },
              },
            }}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            style={{ height: "450px", width: "100%" }}
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
                  src="/images/struttura/due_letti_singoli.jpg"
                  alt="Immagine della struttura 2"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full relative">
                <Image
                  src="/images/struttura/tre_letti_singoli.jpg"
                  alt="Immagine della struttura 3"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full relative">
                <Image
                  src="/images/struttura/letto_matrimoniale_letto_singolo.jpg"
                  alt="Immagine della struttura 4"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl text-secondary font-medium px-6 mb-8 text-center">
            Le camere
          </h2>
          <div className="container mx-auto max-w-4xl px-4 sm:px-6">
            <p className="mb-8 text-base sm:text-[1.313rem] text-primary">
              I nostri confortevoli alloggi vi offrono una straordinaria e
              indimenticabile esperienza di soggiorno in riva al mare. Ogni
              camera è dotata di servizi privati, aria condizionata,
              asciugacapelli e Wi-Fi gratuito.
            </p>
            <p className="mb-8 text-base sm:text-[1.313rem] text-primary">
              Il Soggiorno Marino Don Bosco dispone di diverse soluzioni pensate
              ad hoc per le famiglie e per i bambini: dalla camera singola a
              quella familiare.
            </p>
            <p className="mb-4 text-base sm:text-[1.313rem] text-primary">
              Il nostro impegno nel rispettare la pulizia delle camere e degli
              ambienti comuni sarà rigoroso e costante nel corso di tutta la
              stagione. Ad ogni ospite verrà garantito il cambio dei
              coprimaterassi e copricuscini - usa e getta - per l'intero
              soggiorno.
            </p>
          </div>
        </div>

        {/* Stile personalizzato per i controlli */}
        <style jsx global>{`
          .swiper-button-next,
          .swiper-button-prev {
            width: 40px !important;
            height: 40px !important;
            background-color: #0265a5 !important;
            border-radius: 50% !important;
            color: white !important;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1) !important;
            transition: all 0.3s ease !important;
          }

          .swiper-button-next:hover,
          .swiper-button-prev:hover {
            background-color: #035990 !important;
            transform: scale(1.05) !important;
            box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15) !important;
          }

          .swiper-button-next:after,
          .swiper-button-prev:after {
            font-size: 16px !important;
            font-weight: bold !important;
          }

          .swiper-pagination-bullet-active {
            background-color: #0265a5 !important;
          }

          @media (max-width: 767px) {
            .swiper-button-next,
            .swiper-button-prev {
              display: none !important;
            }
          }

          .swiper-custom {
            width: 100% !important;
            max-width: 100% !important;
          }
        `}</style>
      </div>
    </Layout>
  );
}
