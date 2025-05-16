"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function PhotoGallery() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    {
      src: "/images/struttura/photogallery/vista_ambiente_esterno.jpg",
      alt: "Immagine 1",
    },
    {
      src: "/images/struttura/photogallery/vista_ambiente_esterno_natura.jpg",
      alt: "Immagine 2",
    },
    {
      src: "/images/struttura/photogallery/vista_ambiente_esterno_prato.jpg",
      alt: "Immagine 3",
    },
    {
      src: "/images/struttura/photogallery/vista_ambiente_fiori.jpg",
      alt: "Immagine 4",
    },
    {
      src: "/images/struttura/photogallery/vista_ambiente_gradangolare.jpg",
      alt: "Immagine 5",
    },
    {
      src: "/images/struttura/photogallery/vista_ambiente_esterno_piccolo_parco.jpg",
      alt: "Immagine 6",
    },
    {
      src: "/images/struttura/photogallery/vista_ambiente_esterno_natura_con_verde.jpg",
      alt: "Immagine 7",
    },
    {
      src: "/images/struttura/photogallery/vista_ambiente_esterno_focus_fiori.jpg",
      alt: "Immagine 8",
    },
    {
      src: "/images/struttura/photogallery/vista_ambiente_esterno__.jpg",
      alt: "Immagine 9",
    },
    {
      src: "/images/struttura/photogallery/vista_ambiente_esterno_soggiorno.jpg",
      alt: "Immagine 10",
    },
    {
      src: "/images/struttura/photogallery/vista_ambiente_soggiorno_presenza_verde.jpg",
      alt: "Immagine 11",
    },
    {
      src: "/images/struttura/photogallery/vista_natura_soggiorno_scorcio_spiaggia.jpg",
      alt: "Immagine 12",
    },
    {
      src: "/images/struttura/photogallery/ombrelloni_soggiorno.jpg",
      alt: "Immagine 13",
    },
    {
      src: "/images/struttura/photogallery/ombrelloni_sdraie_soggiorno_.jpg",
      alt: "Immagine 14",
    },
    {
      src: "/images/struttura/photogallery/vista_soggiorno_esterna.jpg",
      alt: "Immagine 15",
    },
    {
      src: "/images/struttura/photogallery/vista_ambiente_esterno_soggiorno_presenza_natura.jpg",
      alt: "Immagine 16",
    },
    {
      src: "/images/struttura/photogallery/vista_ambiente_esterno_parco_giochi.jpg",
      alt: "Immagine 17",
    },
    {
      src: "/images/struttura/photogallery/vista_ambiente_esterno_soggiorno_marino.jpg",
      alt: "Immagine 18",
    },
    {
      src: "/images/struttura/photogallery/vista_ambiente_soggiorno_parcheggio.jpg",
      alt: "Immagine 19",
    },
    {
      src: "/images/struttura/photogallery/vista_natura_soggiorno.jpg",
      alt: "Immagine 20",
    },
    {
      src: "/images/struttura/photogallery/vista_soggiorno_presenza_natura.jpg",
      alt: "Immagine 21",
    },
    {
      src: "/images/struttura/photogallery/vista_soggiorno_presenza_natura.jpg",
      alt: "Immagine 22",
    },
    {
      src: "/images/struttura/photogallery/vista_natura_soggiorno_marino_don_bosco.jpg",
      alt: "Immagine 23",
    },
    {
      src: "/images/struttura/photogallery/cappellina.jpg",
      alt: "Immagine 24",
    },
    {
      src: "/images/struttura/photogallery/vista_panoramica_lettini_ombrellini_soggiorno.jpg",
      alt: "Immagine 25",
    },
    {
      src: "/images/struttura/photogallery/dettaglio_ombrellone_soggiorno.jpg",
      alt: "Immagine 26",
    },
    { src: "/images/struttura/due_letti_singoli.jpg", alt: "Immagine 19" },
    { src: "/images/struttura/due_letti_singoli.jpg", alt: "Immagine 19" },
    { src: "/images/struttura/due_letti_singoli.jpg", alt: "Immagine 19" },
    { src: "/images/struttura/due_letti_singoli.jpg", alt: "Immagine 19" },
    { src: "/images/struttura/due_letti_singoli.jpg", alt: "Immagine 19" },
    { src: "/images/struttura/due_letti_singoli.jpg", alt: "Immagine 19" },
    { src: "/images/struttura/due_letti_singoli.jpg", alt: "Immagine 19" },
    { src: "/images/struttura/due_letti_singoli.jpg", alt: "Immagine 19" },
    { src: "/images/struttura/due_letti_singoli.jpg", alt: "Immagine 19" },
    { src: "/images/struttura/due_letti_singoli.jpg", alt: "Immagine 19" },
    { src: "/images/struttura/due_letti_singoli.jpg", alt: "Immagine 19" },
  ];

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // Impedisce lo scorrimento della pagina quando il modale è aperto
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto"; // Ripristina lo scorrimento della pagina
  };

  // Funzione per scaricare l'immagine
  const downloadImage = (src, alt) => {
    const link = document.createElement("a");
    link.href = src;
    link.download = alt || "immagine-soggiorno-marino";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container mx-auto max-w-4xl py-12 px-4">
      {/* Titolo della galleria */}
      <h2 className="text-3xl md:text-4xl text-gray-800 font-medium text-center mb-8">
        Photogallery
      </h2>

      {/* Griglia di immagini */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {images.map((image, index) => (
          <div
            key={index}
            className="aspect-square relative overflow-hidden rounded-md cursor-pointer hover:opacity-90 transition-opacity group"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              onClick={() => openModal(index)}
            />
            <div className="absolute bottom-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  downloadImage(image.src, image.alt);
                }}
                className="bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full shadow-md"
                title="Scarica immagine"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modale per visualizzazione a schermo intero */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <button
            className="absolute top-4 right-4 text-white text-4xl z-10"
            onClick={closeModal}
          >
            &times;
          </button>

          <button
            className="absolute top-4 left-4 text-white z-10 bg-white bg-opacity-20 hover:bg-opacity-30 p-2 rounded-md flex items-center"
            onClick={() =>
              downloadImage(
                images[currentImageIndex].src,
                images[currentImageIndex].alt
              )
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            <span>Scarica</span>
          </button>

          <div className="w-full h-full max-w-6xl max-h-[80vh] relative">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              initialSlide={currentImageIndex}
              loop={true}
              className="w-full h-full"
              onSlideChange={(swiper) => setCurrentImageIndex(swiper.realIndex)}
            >
              {images.map((image, index) => (
                <SwiperSlide
                  key={index}
                  className="flex items-center justify-center"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-contain"
                      sizes="100vw"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </div>
  );
}
