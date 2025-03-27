

const ChiSiamo = () => {
  return (
    <>

<div className="max-w-6xl mx-auto px-4 py-12">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/3 relative">
                        <img
                            src="/images/HeroFoto.jpg"
                            alt="Decorazione storica"
                            className="object-cover rounded-full"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/10 to-blue-100/20"></div>
                        <div className="hidden md:block absolute -left-8 -top-8 w-32 h-32 border-4 border-amber-300 rounded-full opacity-50"></div>
                        <div className="hidden md:block absolute -right-5 -bottom-2 w-24 h-24 border-4 border-blue-200 rounded-full opacity-50"></div>
                    </div>

                    <div className="md:w-2/3">
                        <h1 className="text-3xl font-bold text-gray-800 mb-6">Chi siamo?</h1>
                        <div className="prose prose-lg text-gray-600 space-y-4">
                            <p>
                                Qualche breve cenno alla Storia dell'IPAB "MONUMENTO AI CADUTI IN GUERRA". Dopo l'annessione del Veneto
                                all'Italia, l'Amministrazione comunale di San Donà ebbe un diverso assetto, rispetto a quello avuto
                                sino ad ora...
                            </p>
                            <div className="mt-6">
                                <a
                                    href="#"
                                    className="inline-block px-1 py-2 border-b-2 border-yellow-500 hover:scale-105 transition-all duration-300"
                                >
                                    Continua a leggere
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      
    </>
  );
};

export default ChiSiamo;
