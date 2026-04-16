import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { Search, Description, Event } from '@mui/icons-material';
import { servizi, news, documenti, eventi } from '../data/staticData';
import Navbar from '../components_emporio/Navbar';

// Funzione di ricerca
const searchContent = (query, content) => {
  if (!query) return [];
  if (!content) return [];
  const searchTerm = query.toLowerCase();
  return content.filter(item => 
    item.titolo?.toLowerCase().includes(searchTerm) ||
    item.abstract?.toLowerCase().includes(searchTerm) ||
    item.descrizione?.toLowerCase().includes(searchTerm) ||
    item.categoria?.toLowerCase().includes(searchTerm) ||
    item.luogo?.toLowerCase().includes(searchTerm)
  );
};

export default function SearchResults() {
  const router = useRouter();
  const { q } = router.query;
  const [results, setResults] = useState({ servizi: [], news: [], documenti: [], eventi: [] });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!q) return;
    
    // Ricerca nei dati statici
    const serviziResults = searchContent(q, servizi);
    const newsResults = searchContent(q, news);
    const documentiResults = searchContent(q, documenti);
    const eventiResults = searchContent(q, eventi);
    
    setResults({
      servizi: serviziResults,
      news: newsResults,
      documenti: documentiResults,
      eventi: eventiResults
    });
    setIsLoading(false);
  }, [q]);

  // Funzione per formattare la data
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('it-IT', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <>
      <title>Ricerca - Emporio Solidale</title>
      <link rel="icon" type="image/x-icon" href="/images/servizi_favicon/favicon.ico" />
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow bg-gray-50 pt-24 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Risultati della ricerca
              </h1>
              <div className="flex items-center text-gray-600">
                <Search className="mr-2" />
                <span>Termine ricercato: <span className="font-semibold">{q}</span></span>
              </div>
            </div>

            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#780202]"></div>
              </div>
            ) : (
              <div className="space-y-12">
                {/* Risultati Servizi */}
                {results.servizi.length > 0 && (
                  <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Servizi</h2>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                      {results.servizi.map((servizio, index) => (
                        <motion.div
                          key={servizio.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                          <a href={servizio.link} className="block">
                            {servizio.immagine && (
                              <div className="relative h-48">
                                <img
                                  src={servizio.immagine}
                                  alt={servizio.titolo}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            )}
                            <div className="p-6">
                              <h3 className="text-xl font-semibold text-gray-900 mb-2">{servizio.titolo}</h3>
                              <p className="text-gray-600 line-clamp-3">{servizio.descrizione}</p>
                            </div>
                          </a>
                        </motion.div>
                      ))}
                    </div>
                  </section>
                )}

                {/* Risultati News */}
                {results.news.length > 0 && (
                  <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">News</h2>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                      {results.news.map((news, index) => (
                        <motion.div
                          key={news.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                          <a href={news.link} className="block">
                            {news.immagine && (
                              <div className="relative h-48">
                                <img
                                  src={news.immagine}
                                  alt={news.titolo}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            )}
                            <div className="p-6">
                              <h3 className="text-xl font-semibold text-gray-900 mb-2">{news.titolo}</h3>
                              <p className="text-gray-600 line-clamp-3">{news.abstract}</p>
                              <div className="mt-4 flex flex-wrap gap-2">
                                {news.tag?.map((tag, i) => (
                                  <span key={i} className="px-2 py-1 bg-red-50 text-[#780202] text-sm rounded-full">
                                    #{tag}
                                  </span>
                                ))}
                              </div>
                              <div className="mt-4 text-sm text-gray-500">
                                {formatDate(news.pubblicazione)}
                              </div>
                            </div>
                          </a>
                        </motion.div>
                      ))}
                    </div>
                  </section>
                )}

                {/* Risultati Documenti */}
                {results.documenti.length > 0 && (
                  <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Documenti</h2>
                    <div className="grid gap-4 md:grid-cols-2">
                      {results.documenti.map((documento, index) => (
                        <motion.div
                          key={documento.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-white p-4 rounded-lg shadow flex items-start gap-4 hover:shadow-md transition-shadow duration-300"
                        >
                          <div className="w-12 h-12 flex-shrink-0 bg-[#780202]/10 rounded-full flex items-center justify-center text-2xl">
                            {documento.emoji}
                          </div>
                          <div className="flex-grow">
                            <h3 className="font-semibold text-gray-900">{documento.titolo}</h3>
                            <p className="text-sm text-gray-600 mt-1">{documento.descrizione}</p>
                            <div className="flex items-center gap-4 mt-2">
                              <span className="text-xs px-2 py-1 bg-[#780202]/10 text-[#780202] rounded-full">
                                {documento.categoria}
                              </span>
                            </div>
                            <a
                              href={documento.link}
                              className="inline-flex items-center gap-2 mt-2 text-[#780202] hover:text-[#b31217] text-sm font-medium"
                            >
                              <Description className="text-base" />
                              Scarica {documento.tipo}
                            </a>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </section>
                )}

                {/* Risultati Eventi */}
                {results.eventi.length > 0 && (
                  <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Eventi</h2>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                      {results.eventi.map((evento, index) => (
                        <motion.div
                          key={evento.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                          {evento.immagine && (
                            <div className="relative h-48">
                              <img
                                src={evento.immagine}
                                alt={evento.titolo}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          )}
                          <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{evento.titolo}</h3>
                            <p className="text-gray-600 mb-4">{evento.descrizione}</p>
                            <div className="space-y-2 text-sm text-gray-500">
                              <div className="flex items-center gap-2">
                                <Event className="text-[#780202] text-base" />
                                <span>{formatDate(evento.data)} - {evento.orario}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="font-medium">Luogo:</span>
                                <span>{evento.luogo}</span>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </section>
                )}

                {/* Nessun risultato */}
                {results.servizi.length === 0 && 
                 results.news.length === 0 && 
                 results.documenti.length === 0 && 
                 results.eventi.length === 0 && (
                  <div className="text-center py-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                      Nessun risultato trovato
                    </h2>
                    <p className="text-gray-600">
                      Prova a cercare utilizzando termini diversi
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-[#780202] text-white w-full">
          <div className="w-full max-w-screen-xl p-4 py-6 lg:py-8 h-auto md:h-[25rem] mx-auto flex flex-col justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start w-full">
              <div className="flex justify-center md:justify-start">
                <a href="/">
                  <img
                    src="/images/Logo_emporio.png"
                    className="h-20 md:h-24"
                    alt="Emporio Logo"
                  />
                </a>
              </div>

              <div className="text-center md:text-left">
                <h2 className="mb-4 text-sm font-semibold uppercase">
                  Corso di cucito
                </h2>
                <hr className="mb-2 border-gray-500" />
                <ul className="text-gray-300">
                  <li className="mb-2">
                    <a
                      href="/servizi/corso-di-cucito"
                      className="hover:underline text-cyan-400"
                    >
                      Vai al corso
                    </a>
                  </li>
                </ul>
              </div>

              <div className="text-center md:text-left">
                <h2 className="mb-4 text-sm font-semibold uppercase">
                  Economia domestica
                </h2>
                <hr className="mb-2 border-gray-500" />
                <ul className="text-gray-300">
                  <li className="mb-2">
                    <a
                      href="/servizi/economia-domestica"
                      className="hover:underline text-cyan-400"
                    >
                      Approfondimenti
                    </a>
                  </li>
                </ul>
              </div>

              <div className="text-center md:text-left">
                <h2 className="mb-4 text-sm font-semibold uppercase">
                  Centro di ascolto
                </h2>
                <hr className="mb-2 border-gray-500" />
                <ul className="text-gray-300">
                  <li className="mb-2">
                    <a
                      href="/servizi/centro-di-ascolto"
                      className="hover:underline text-cyan-400"
                    >
                      Presentazione del servizio
                    </a>
                  </li>
                </ul>
              </div>

              <div className="text-center md:text-left">
                <h2 className="mb-4 text-sm font-semibold uppercase">Recapiti</h2>
                <hr className="mb-2 border-gray-500" />
                <ul className="text-gray-300">
                  <li className="mb-2">Emporio Solidale del Basso</li>
                  <li className="mb-2">Piave San Donà di Piave (VE)</li>
                </ul>
              </div>

              <div className="text-center md:text-left">
                <h2 className="mb-4 text-sm font-semibold uppercase">Contatti</h2>
                <hr className="mb-2 border-gray-500" />
                <ul className="text-gray-300">
                  <li className="mb-2">Tel: 0421 1885467</li>
                  <li className="mb-2">emporiosolidale@gmail.com</li>
                </ul>
              </div>
            </div>
            <hr className="my-6 border-gray-500 w-full" />
            <div className="flex flex-col sm:flex-row items-center justify-between w-full">
              <span className="text-sm text-gray-300">
                © 2026 Emporio Solidale™. Questo sito è stato realizzato dagli allievi Buccudu Matteo, Marcon Filippo e Menegaldo Riccardo.
              </span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
} 