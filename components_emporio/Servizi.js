import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Typography } from "@mui/material";

const scrollableContent = [
  {
    title: "Formazione per volontari",
    description:
      "I volontari operanti nella rete, vengono formati da professionisti, allo scopo di essere preparati ad affrontare le varie problematiche delle persone che stanno vivendo un momento di fragilità.",
    image: "/images/formazione-volontari.jpg",
    link: null,
    icon: "👥",
  },
  {
    title: "Inserimento socio collaborativo",
    description:
      "L'Emporio favorisce l'inserimento lavorativo tramite la rete associativa, valorizzando le potenzialità delle persone. In collaborazione con i Servizi Sociali, offre opportunità di lavoro a soggetti a rischio di emarginazione. Coinvolgendoli anche nell'emporio, restituisce loro speranza e attiva risorse per il cambiamento.",
    image: "/images/inserimento-socio-collaborativo.jpg",
    link: "/servizi/inserimento-socio-collaborativo",
    icon: "🤝",
  },
  {
    title: "Corso di economia domestica",
    description:
      "È un laboratorio per la promozione delle conoscenze degli aspetti pratici della vita di famiglia.",
    image: "/images/corso-economia-domestica.jpg",
    link: "/servizi/economia-domestica",
    icon: "💰",
  },
  {
    title: "Corso di cucito",
    description:
      "E' un laboratorio base di formazione per imparare le primarie tecniche di taglio e cucito, rammendo, uso di macchine da cucire con l'ausilio di volontarie e personale specializzato.",
    image: "/images/corso-cucito.jpg",
    link: "/servizi/corso-di-cucito",
    icon: "🧵",
  },
  {
    title: "Centro di ascolto",
    description:
      "È il primo approccio d'incontro a cui si rivolgono le persone che vivono situazioni di disagio. Con la presenza dei volontari delle Associazioni della rete, il centro si propone di accogliere, ascoltare e comprendere i racconti e le storie di sofferenza indipendentemente dalla razza, dal sesso e dalla religione.",
    image: "/images/centro-ascolto.png",
    link: "/servizi/centro-di-ascolto",
    icon: "👂",
  },
  {
    title: "Emporio solidale per la spesa",
    description:
      "È un centro di distribuzione fatto di persone per le persone, dove tanti volontari con impegno e responsabilità, si prendono cura dei bisogni primari di chi in un periodo difficile della propria vita chiede aiuto.",
    image: "/images/emporio-per-la-spesa.jpg",
    link: "/servizi/emporio-solidale-per-la-spesa",
    icon: "🛒",
  },
  {
    title: "Nonni Vigili",
    description:
      "Aiuti verso gli “anziani” ovvero chi è prima della pensione e ha bisogno di trovare lavoro viene aiutato a trovare un lavoro / progetti stipendiati per dargli una minima entrata per esempio progetto nonni vigili",
    image: "https://qdpnews.it/wp-content/uploads/2018/08/Nonno-vigile.jpg",
    link: null,
    icon: "👴",
  },
  {
    title: "Consegna a domicilio",
    description:
      "Per chi è impossibilitato a recarsi presso la nostra sede, offriamo un servizio di consegna della spesa a domicilio. I nostri volontari si occupano di portare i beni di prima necessità direttamente a casa vostra, garantendo supporto anche a chi ha difficoltà motorie o di trasporto.",
    image: "/images/consegna-domicilio.jpg",
    link: "/servizi/consegna-a-domicilio",
    icon: "🚚",
  },
];

export default function Servizi() {
  return (
    <div className="relative py-16 bg-gradient-to-b from-gray-50 to-white">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 px-4"
      >
        <Typography
          component="h2"
          className="text-4xl md:text-5xl font-bold mb-6"
          sx={{ color: "#780202" }}
        >
          <span className="text-black">I nostri <span className="text-red-500">Servizi</span></span>
        </Typography>
        <Typography
          className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto"
        >
          Scopri come possiamo aiutarti nel tuo percorso di crescita e supporto
        </Typography>
        <div className="w-24 h-1 bg-red-500 mx-auto mt-6"></div>
      </motion.div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {scrollableContent.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              {item.link ? (
                <Link href={item.link} className="block h-full group">
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full transform transition-all duration-300 hover:shadow-2xl flex flex-col">
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="transform transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl shadow-lg">
                        {item.icon}
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-[#780202] transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 line-clamp-4 mb-4 flex-grow">
                        {item.description}
                      </p>
                      <div className="inline-flex items-center text-[#780202] font-semibold group-hover:text-[#b31217] transition-colors duration-300">
                        Scopri di più
                        <svg className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ) : (
                <div className="h-full">
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full transform transition-all duration-300 hover:shadow-2xl flex flex-col">
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="transform transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl shadow-lg">
                        {item.icon}
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 line-clamp-4 flex-grow">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
