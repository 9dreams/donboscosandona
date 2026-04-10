import Layout from "components_emporio/Layout.js";
import React from "react";
export default function Servizi() {
  return (
    <Layout>
      <title>Centro di ascolto - Emporio Solidale</title>
      <link rel="icon" type="image/x-icon" href="/images/servizi_favicon/favicon.ico" />

      <div class="flex flex-col">
      

        <div className="w-full bg-[url('')] bg-repeat bg-center">
          <div className="flex items-center justify-center md:justify-start pt-32 md:px-10 lg:pl-64 px-5">
            <a href="/" className="mb-4 md:mb-0">
              <p className="text-sm text-black">Emporio solidale</p>
            </a>
            <p className="ml-0 md:ml-12 lg:ml-24 text-sm text-black">
              Centro di ascolto
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center">
            <div className="flex flex-col px-5 md:px-10 lg:pl-64 pt-8 md:pt-14 pb-10 md:pb-20 gap-y-4 w-full lg:w-1/2">
              <a href="/">
                <h1 className="text-2xl md:text-3xl lg:text-4xl text-black hover:text-gray-300 transition-colors duration-200">
                  Centro di ascolto
                </h1>
              </a>
              <p className="text-sm md:text-md text-black leading-relaxed">
                È il primo approccio d’incontro a cui si rivolgono le persone
                che vivono situazioni di disagio. Con la presenza dei volontari
                delle Associazioni della rete, il centro si propone di
                accogliere, ascoltare e comprendere i racconti e le storie di
                sofferenza indipendentemente dalla razza, dal sesso e dalla
                religione.
              </p>
              <p className="text-sm md:text-md text-black leading-relaxed">
                Con sensibilità e umanità si orientano le persone che chiedono
                aiuto ad individuare le reali esigenze con la ricerca delle
                soluzioni più idonee, anche attraverso la presa in carico con i
                servizi più adatti presenti nel territorio. Attraverso la
                richiesta di specifici documenti, i volontari hanno gli
                strumenti per valutare la precisa situazione delle persone o
                delle famiglie attivando tutte le possibili soluzioni di aiuto
                necessarie.
              </p>
              <p className="text-sm md:text-md text-black leading-relaxed">
                I documenti necessari per potere accedere all’Emporio della
                spesa sono:
              </p>
              <ul className="text-sm md:text-md text-black ml-10 list-disc">
                <li>STATO DI FAMIGLIA</li>
                <li>DOCUMENTO D’IDENTITA’ E CODICE FISCALE</li>
                <li>ISEE</li>
                <li>CERTIFICATO DI DISOCCUPAZIONE O ULTIMA BUSTA PAGA</li>
                <li>ULTIMO AFFITTO PAGATO</li>
              </ul>
            </div>
            <div className="lg:w-1/2 flex justify-center items-center px-5 md:px-10 lg:pr-64 py-4">
              <img
                className="rounded-2xl shadow-md object-cover max-w-full h-auto md:h-96 lg:h-auto"
                src="/images/centro_ascolto.jpeg"
                alt="Solidarietà"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
