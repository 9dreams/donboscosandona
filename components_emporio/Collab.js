import { motion } from "framer-motion"; // Aggiunto import

export default function Collab() {
  const collabData = [
    {
      icon: "✔",
      title: "Concessione San Vincenzo",
      description:
        "Supporto alle aziende per accedere alle agevolazioni della Legge Gadda.",
      iconBgColor: "bg-blue-100",
      iconTextColor: "text-blue-500",
    },
    {
      icon: "🍃",
      title: "Sostenibilità",
      description:
        "Gli avanzi vengono destinati agli animali, al compostaggio o trasformati in biogas.",
      iconBgColor: "bg-green-100",
      iconTextColor: "text-green-500",
    },
    {
      icon: "👥",
      title: "Collaborazioni",
      description:
        "Con i servizi sociali, Casa Vittoria (dove ragazzi con sindrome di Down producono marmellate) e l'Emporio Solidale.",
      iconBgColor: "bg-pink-100",
      iconTextColor: "text-pink-500",
    },
    {
      icon: "✔",
      title: "Donazioni",
      description:
        "McDonald's fornisce pasti ogni giovedì, le mense scolastiche contribuiscono durante scioperi o esuberi.",
      iconBgColor: "bg-yellow-100",
      iconTextColor: "text-yellow-500",
    },
    {
      icon: "🌍",
      title: "Recupero Alimentare",
      description:
        "Gli alimenti in eccesso vengono redistribuiti per ridurre gli sprechi e aiutare chi è in difficoltà.",
      iconBgColor: "bg-purple-100",
      iconTextColor: "text-purple-500",
    },
    {
      icon: "🏭",
      title: "Energia Rinnovabile",
      description:
        "Gli scarti organici vengono trasformati in biogas per generare energia pulita.",
      iconBgColor: "bg-indigo-100",
      iconTextColor: "text-indigo-500",
    },
    {
      icon: "🤝",
      title: "Progetti Finanziati",
      description:
        "Il programma è supportato dalla regione e dal Banco Alimentare per garantire continuità e sviluppo.",
      iconBgColor: "bg-red-100",
      iconTextColor: "text-red-500",
    },
    {
      icon: "📦",
      title: "Logistica Solidale",
      description:
        "Organizzazione efficiente della distribuzione alimentare per massimizzare l'impatto sociale.",
      iconBgColor: "bg-teal-100",
      iconTextColor: "text-teal-500",
    },
  ];

  return (
    <div className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-red-500">Collaborazione</span> e Sostenibilità
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            Scopri le nostre iniziative per un impatto positivo e duraturo.
          </p>
          <div className="w-24 h-1 bg-red-500 mx-auto mt-6"></div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {collabData.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out border border-gray-100 flex flex-col items-center text-center"
            >
              <div
                className={`w-16 h-16 text-3xl mb-5 rounded-full flex items-center justify-center ${item.iconBgColor} ${item.iconTextColor}`}
              >
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
