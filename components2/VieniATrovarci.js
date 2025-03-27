

const VieniATrovarci = () => {
  return (
    <>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/3 relative">
            <img
              src="/images/HeroFoto.jpg"
              alt="Decorazione storica"
              className="rounded-full w-"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/10 to-blue-100/20"></div>

          </div>

          <div className="md:w-2/3">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Vieni a Trovarmi!</h1>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                "Il tempo con i tuoi cari non ha prezzo. Nel nostro centro per anziani, comprendiamo l'importanza di momenti speciali con i tuoi nonni. Per questo motivo, offriamo orari flessibili e personalizzabili, per adattarsi al meglio alle tue esigenze e ai loro ritmi. Vieni a trovarci e scopri come possiamo aiutarti a creare ricordi indimenticabili." <br/>
                <br/>
                Da lunedi a venerdi :<br/><br/>

                <b className="inline-block px-1 py-2 border-b-2 border-yellow-500 ">Mattina: dalle 9.00 alle 11.30</b><br/>
                <b className="inline-block px-1 py-2 border-b-2 border-yellow-500 ">Pomeriggio: dalle 15.00 alle 17.30</b><br/>

              </p>
              <div className="mt-6">
               
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default VieniATrovarci;
