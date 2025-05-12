import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const scrollableContent = [
  {
    title: "Formazione per volontari",
    description:
      "I volontari operanti nella rete, vengono formati da professionisti, allo scopo di essere preparati ad affrontare le varie problematiche delle persone che stanno vivendo un momento di fragilità.",
    image: "/images/formazione-volontari.jpg",
    link: "/servizi/corso-volontari-2019",
  },

  {
    title: "Inserimento socio collaborativo",
    description:
      "L’Emporio favorisce l’inserimento lavorativo tramite la rete associativa, valorizzando le potenzialità delle persone. In collaborazione con i Servizi Sociali, offre opportunità di lavoro a soggetti a rischio di emarginazione. Coinvolgendoli anche nell’emporio, restituisce loro speranza e attiva risorse per il cambiamento.",
    image: "/images/inserimento-socio-collaborativo.jpg",
    link: "/servizi/inserimento-socio-collaborativo",
  },
  {
    title: "Corso di economia domestica",
    description:
      "È un laboratorio per la promozione delle conoscenze degli aspetti pratici della vita di famiglia.",
    image: "/images/corso-economia-domestica.jpg",
    link: "/servizi/economia-domestica",
  },
  {
    title: "Corso di cucito",
    description:
      "E’ un laboratorio base di formazione per imparare le primarie tecniche di taglio e cucito, rammendo, uso di macchine da cucire con l’ausilio di volontarie e personale specializzato.",
    image: "/images/corso-cucito.jpg",
    link: "/servizi/corso-di-cucito",
  },
  {
    title: "Centro di ascolto",
    description:
      "È il primo approccio d’incontro a cui si rivolgono le persone che vivono situazioni di disagio. Con la presenza dei volontari delle Associazioni della rete, il centro si propone di accogliere, ascoltare e comprendere i racconti e le storie di sofferenza indipendentemente dalla razza, dal sesso e dalla religione.",
    image: "/images/centro-ascolto.png",
    link: "/servizi/centro-di-ascolto",
  },
  {
    title: "Emporio solidale per la spesa",
    description:
      "È un centro di distribuzione fatto di persone per le persone, dove tanti volontari con impegno e responsabilità, si prendono cura dei bisogni primari di chi in un periodo difficile della propria vita chiede aiuto.",
    image: "/images/emporio-per-la-spesa.jpg",
    link: "/servizi/emporio-solidale-per-la-spesa",
  },
  {
    title: "Nonni Vigili",
    description:
      "Aiuti verso gli “anziani” ovvero chi è prima della pensione e ha bisogno di trovare lavoro viene aiutato a trovare un lavoro / progetti stipendiati per dargli una minima entrata per esempio progetto nonni vigili",
    image: "https://qdpnews.it/wp-content/uploads/2018/08/Nonno-vigile.jpg",
    link: "/servizi/",
  },
];
export default function Anziani() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black to-gray-900">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url(https://149797850.v2.pressablecdn.com/wp-content/uploads/2024/04/Website-Photos-14.png)",
        }}
      />
      
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      <div className="relative z-10 px-6 py-16 flex flex-col justify-center items-center text-black overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            <span className="text-red-500">I servizi</span> che offriamo
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
            Scopri come possiamo aiutarti nel tuo percorso di crescita e supporto
          </p>
          <div className="w-24 h-1 bg-red-500 mx-auto mt-6"></div>
        </motion.div>

        <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {scrollableContent.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              whileHover={{ 
                y: -10,
                scale: 1.03,
              }}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl"
            >
              <Link 
                href={item.link}
                className="block h-full" 
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="relative w-full h-64 sm:h-72 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
                </div>
                <div className="p-8 text-center">
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">
                    {item.title}
                  </h2>
                  <div className="w-16 h-1 bg-red-500 mx-auto mb-4"></div>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  <div className="mt-6">
                    <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-red-700 to-red-600 text-white font-semibold text-base shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gradient-to-l cursor-pointer">
                      <span role="img" aria-label="search">🔎</span>
                      Scopri di più
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
