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
    link: "/nonni-vigili",
  },
];

export default function Anziani() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url(https://149797850.v2.pressablecdn.com/wp-content/uploads/2024/04/Website-Photos-14.png)",
        }}
      />

      <div className="relative z-10 px-6 py-12 flex flex-col justify-center items-center text-black overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-red-500">
            I servizi che offriamo
          </h1>
          <p className="text-lg md:text-xl text-red-500">
            Inizia il tuo viaggio con noi oggi!
          </p>
        </motion.div>

        <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {scrollableContent.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
            >
              <Link href={item.link} passHref>
                {" "}
                <a style={{ textDecoration: "none", color: "inherit" }}>
                  <div className="relative w-full h-64 sm:h-80">
                    <Image
                      src={item.image}
                      alt={item.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-lg"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                      {item.title}
                    </h2>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </a>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
