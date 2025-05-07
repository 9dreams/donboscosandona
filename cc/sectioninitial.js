"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function SectionInitial() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
        {/* Colonna sinistra con testo */}
        <div className="lg:col-span-3">
          <div className="text-center lg:text-left">
            {/* Intestazione */}
            <p className="text-[#0265A5] text-sm mb-4">
              Soggiorno Marino don Bosco
            </p>

            {/* Titolo principale */}
            <h1 className="text-2xl lg:text-3xl text-gray-800 font-medium mb-4">
              Tra verde e azzurro
            </h1>

            {/* Testo di apertura */}
            <p className="text-[#0265A5] font-medium mb-3">
              Il Soggiorno Marino Don Bosco
              <br />
              riaprirà per la stagione estiva venerdì 24 maggio 2025.
            </p>

            {/* Descrizione */}
            <p className="text-gray-700 mb-4 text-sm lg:text-base">
              Il Soggiorno Marino Don Bosco e la Casa Domenico Savio sono
              immersi in un ampio giardino fronte mare, con accesso diretto alla
              spiaggia privata in località Duna Verde, nei pressi di Caorle,
              caratteristica cittadina di mare e di pescatori. Duna Verde si
              trova a metà strada tra le splendide campagne venete e la città di
              Venezia, meta prediletta del turismo internazionale.
            </p>
            <p className="text-gray-700 mb-6 text-sm lg:text-base">
              A pochi chilometri di distanza numerose località turistiche e
              città di interesse artistico sono mete ideali per le vostre
              escursioni e gite fuori porta. La riviera e il lido si accendono
              di sera di iniziative e feste.
            </p>

            {/* Pulsante "Scopri di più" */}
            <div className="flex justify-center lg:justify-start">
              <a
                href="/chi-siamo"
                className="text-white cursor-pointer bg-[#0265A5] font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 inline-block"
              >
                SCOPRI LA NOSTRA STORIA
              </a>
            </div>
          </div>
        </div>

        {/* Colonna destra con Swiper */}
        <div className="lg:col-span-2">
          <div className="aspect-square w-full">
            <Swiper
              modules={[Pagination, Autoplay, EffectFade]}
              spaceBetween={0}
              slidesPerView={1}
              effect={"fade"}
              fadeEffect={{ crossFade: true }}
              pagination={{
                clickable: true,
                el: null,
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              navigation={false}
              className="rounded-lg overflow-hidden h-full w-full"
            >
              <SwiperSlide>
                <div className="relative w-full h-full">
                  <Image
                    src="/images/initialsection/bagnino.jpg"
                    alt="Slide 1"
                    fill
                    className="object-cover"
                    priority={true}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative w-full h-full">
                  <Image
                    src="/images/initialsection/sky_.jpg"
                    alt="Slide 2"
                    fill
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative w-full h-full">
                  <Image
                    src="/images/initialsection/caorle_ambiente.jpg"
                    alt="Slide 3"
                    fill
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
