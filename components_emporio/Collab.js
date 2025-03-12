export default function Collab() {
  const collabData = [
    {
      icon: "✔",
      title: "Concessione San Vincenzo",
      description:
        "Supporto alle aziende per accedere alle agevolazioni della Legge Gadda.",
    },
    {
      icon: "🍃",
      title: "Sostenibilità",
      description:
        "Gli avanzi vengono destinati agli animali, al compostaggio o trasformati in biogas.",
    },
    {
      icon: "👥",
      title: "Collaborazioni",
      description:
        "Con i servizi sociali, Casa Vittoria (dove ragazzi con sindrome di Down producono marmellate) e l'Emporio Solidale.",
    },
    {
      icon: "✔",
      title: "Donazioni",
      description:
        "McDonald's fornisce pasti ogni giovedì, le mense scolastiche contribuiscono durante scioperi o esuberi.",
    },
    {
      icon: "🌍",
      title: "Recupero Alimentare",
      description:
        "Gli alimenti in eccesso vengono redistribuiti per ridurre gli sprechi e aiutare chi è in difficoltà.",
    },
    {
      icon: "🏭",
      title: "Energia Rinnovabile",
      description:
        "Gli scarti organici vengono trasformati in biogas per generare energia pulita.",
    },
    {
      icon: "🤝",
      title: "Progetti Finanziati",
      description:
        "Il programma è supportato dalla regione e dal Banco Alimentare per garantire continuità e sviluppo.",
    },
    {
      icon: "📦",
      title: "Logistica Solidale",
      description:
        "Organizzazione efficiente della distribuzione alimentare per massimizzare l'impatto sociale.",
    },
  ];

  return (
    <div className="max-w-xl mx-auto p-16 shadow-lg rounded-2xl border mb-16 border-gray-200 bg-white">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Collaborazione e Sostenibilità
      </h2>
      <div className="space-y-4 text-gray-700">
        {collabData.map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            <span className="text-green-500 font-bold" aria-hidden="true">
              {item.icon}
            </span>
            <p>
              <strong>{item.title}</strong>: {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
