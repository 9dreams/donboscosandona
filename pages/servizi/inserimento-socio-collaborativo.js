import Layout from "components_emporio/Layout.js";
import React from "react";
export default function Servizi() {
  return (
    <Layout>
      <title>Inserimento socio collaborativo - Emporio Solidale</title>
      <link rel="icon" type="image/x-icon" href="/images/servizi_favicon/favicon.ico" />

      <div class="flex flex-col">
        

        <div className="w-full bg-[url('')] bg-repeat bg-center">
          <div className="flex items-center justify-center md:justify-start pt-10 md:px-10 lg:pl-64 px-5">
            <a href="/" className="mb-4 md:mb-0">
              <p className="text-sm text-black">Emporio Solidale</p>
            </a>
            <p className="ml-0 md:ml-12 lg:ml-24 text-sm text-black">
              Inserimento socio collaborativo
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center">
            <div className="flex flex-col px-5 md:px-10 lg:pl-64 pt-8 md:pt-14 pb-10 md:pb-20 gap-y-4 w-full lg:w-1/2">
              <a href="/">
                <h1 className="text-2xl md:text-3xl lg:text-4xl text-black hover:text-gray-300 transition-colors duration-200">
                  Inserimento socio collaborativo
                </h1>
              </a>
              <p className="text-sm md:text-md text-black leading-relaxed">
                Attraverso il contatto con la rete associativa, l’Emporio si
                propone di aumentare l’efficienza dei processi di inserimento
                lavorativo attraverso il sostegno della cooperazione sociale ed
                imprenditoriale, valorizzando le potenzialità lavorative della
                persona.
              </p>
              <p className="text-sm md:text-md text-black leading-relaxed">
                In costante dialogo con i Servizi Sociali dei Comuni, si
                propongono occasioni di lavoro a soggetti ad alto rischio di
                emarginazione sociale, coinvolgendoli anche all’interno
                dell’emporio stesso, restituendo loro la speranza di un
                cambiamento, attivando tutte le risorse possibili.
              </p>
            </div>
            <div className="lg:w-1/2 flex justify-center items-center px-5 md:px-10 lg:pr-64 py-4">
              <img
                className="rounded-2xl shadow-md object-cover max-w-full h-auto md:h-96 lg:h-auto"
                src="/images/inserimento_socio_collaborativo.jpeg"
                alt="Inserimento Socio Collaborativo"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
