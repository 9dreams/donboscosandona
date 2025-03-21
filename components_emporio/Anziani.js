import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const scrollableContent = [
  {
    title: "Corso di Cucito",
    description:
      "E’ un laboratorio base di formazione per imparare le primarie tecniche di taglio e cucito, rammendo, uso di macchine da cucire con l’ausilio di volontarie e personale specializzato.",
    image:
      "https://www.cnafrosinone.it/wp-content/uploads/2022/12/CORSO_CUCITO_SITAM-scaled-e1671533146879-862x575.jpg",
  },
  {
    title: "Centro di Ascolto",
    description:
      "È il primo approccio d’incontro a cui si rivolgono le persone che vivono situazioni di disagio. Con la presenza dei volontari delle Associazioni della rete, il centro si propone di accogliere, ascoltare e comprendere i racconti e le storie di sofferenza indipendentemente dalla razza, dal sesso e dalla religione.",
    image:
      "https://www.emporiosolidalebassopiave.it/documents/3870210/3918089/copertina%20corso%20psico3.png/4f47f976-2169-bc19-5536-49d9ba1718bf?t=1575477875808&download=true",
  },
  {
    title: "Emporio Solidale per la spesa",
    description:
      "È un centro di distribuzione fatto di persone per le persone, dove tanti volontari con impegno e responsabilità, si prendono cura dei bisogni primari di chi in un periodo difficile della propria vita chiede aiuto.",
    image:
      "https://www.emporiosolidalebassopiave.it/documents/3870210/3928054/IMG_4207.jpg/9af8321d-4c86-041c-2ede-4b3a6cf3b65a?t=1575554949561&download=true",
  },
  {
    title: "Nonni Vigili",
    description:
      'Aiuti verso gli “anziani” ovvero chi è prima della pensione e ha bisogno di trovare lavoro viene aiutato a trovare un lavoro / progetti stipendiati per dargli una minima entrata per esempio progetto nonni vigili',
    image: "https://qdpnews.it/wp-content/uploads/2018/08/Nonno-vigile.jpg",
  },
];

export default function Anziani() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Background Image */}
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

      {/* Main Content */}
      <div className="relative z-10 px-6 py-12 flex flex-col justify-center items-center text-black overflow-y-auto">
        {/* Heading with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-red-500">
            I servizi che offriamo - Inizia il tuo viaggio con noi nel mondo della solidarietà
          </h1>
          <p className="text-lg md:text-xl text-red-500">
            Inizia il tuo viaggio con noi oggi!
          </p>
        </motion.div>

        {/* Card Grid Section */}
        <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Cards with Animations */}
          {scrollableContent.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
            >
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
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
