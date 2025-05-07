"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function SectionInitial({
  intestazione,
  titoloPrincipale,
  testoApertura1,
  testoApertura2,
  descrizione1,
  descrizione2,
  testoBottone,
  linkBottone,
  immagine1,
  immagine2,
  immagine3,
}) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
        {/* Colonna sinistra con testo */}
        <div className="lg:col-span-3">
          <div className="text-center lg:text-left">
            {/* Intestazione */}
            <p className="text-[#0265A5] text-sm mb-4">{intestazione}</p>

            {/* Titolo principale */}
            <h1 className="text-2xl lg:text-3xl text-gray-800 font-medium mb-4">
              {titoloPrincipale}
            </h1>

            {/* Testo di apertura */}
            <p className="text-[#0265A5] font-medium mb-3">
              {testoApertura1}
              <br />
              {testoApertura2}
            </p>

            {/* Descrizione */}
            <p className="text-gray-700 mb-4 text-sm lg:text-base">
              {descrizione1}
            </p>
            <p className="text-gray-700 mb-6 text-sm lg:text-base">
              {descrizione2}
            </p>

            {/* Pulsante "Scopri di più" */}
            <div className="flex justify-center lg:justify-start">
              <a
                href={linkBottone || "/chi-siamo"}
                className="text-white cursor-pointer bg-[#0265A5] font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 inline-block"
              >
                {testoBottone || "SCOPRI LA NOSTRA STORIA"}
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
                    src={immagine1}
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
                    src={immagine2}
                    alt="Slide 2"
                    fill
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative w-full h-full">
                  <Image
                    src={immagine3}
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
