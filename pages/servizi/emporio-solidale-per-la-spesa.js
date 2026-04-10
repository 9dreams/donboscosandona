import Layout from "components_emporio/Layout.js";
import React from "react";
import Head from "next/head";

export default function Servizi() {
  return (
    <Layout>
      <Head>
        <title>Emporio solidale per la spesa - Emporio Solidale</title>
        <link rel="icon" type="image/x-icon" href="/images/servizi_favicon/favicon.ico" />
      </Head>

      <div className="flex flex-col">


        <div className="w-full bg-[url('')] bg-repeat bg-center">
          <div className="flex items-center justify-center md:justify-start pt-32 md:px-10 lg:pl-64 px-5">
            <a href="/" className="mb-4 md:mb-0">
              <p className="text-sm text-black">Emporio Solidale</p>
            </a>
            <p className="ml-0 md:ml-12 lg:ml-24 text-sm text-black">
              Emporio solidale per la spesa
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center">
            <div className="flex flex-col px-5 md:px-10 lg:pl-64 pt-8 md:pt-14 pb-10 md:pb-20 gap-y-4 w-full lg:w-1/2">
              <h1 className="text-2xl md:text-3xl lg:text-4xl text-black hover:text-gray-300 transition-colors duration-200">
                Emporio solidale per la spesa
              </h1>
              <p className="text-sm md:text-md text-black leading-relaxed">
                È un centro di distribuzione fatto di persone per le persone,
                dove tanti volontari con impegno e responsabilità, si prendono
                cura dei bisogni primari di chi in un periodo difficile della
                propria vita chiede aiuto.
              </p>
              <p className="text-sm md:text-md text-black leading-relaxed">
                Dal 2016 si propone di dare una risposta immediata ai bisogni
                più urgenti delle famiglie in momentanea difficoltà, mettendo a
                disposizione generi alimentari attraverso una vasta rete di
                solidarietà, coinvolgendo le molteplici Associazioni del
                territorio, nel rispetto dei diritti umani e della qualità della
                vita.
              </p>
              <p className="text-sm md:text-md text-black leading-relaxed">
                Un vero supermercato all’interno del quale si possono reperire
                gratuitamente prodotti alimentari e per l’igiene della persona,
                raccolti attraverso la “Colletta Alimentare” e “Il Banco
                Alimentare”. Inoltre prodotti freschi, frutta e verdura, vengono
                donati dai supermercati convenzionati con l’Emporio nel rispetto
                della legge 166 del 2016 contro gli sprechi alimentari.
                L’Emporio Solidale è aperto martedì e giovedì dalle 15.00 alle
                17.00 e il sabato dalle 10.00 alle 12.00.
              </p>
              <h2 className="text-xl md:text-2xl text-black">
                Come funziona il servizio?
              </h2>
              <p className="text-sm md:text-md text-black leading-relaxed">
                Viene erogata una spesa mensile alle persone in difficoltà.
              </p>
              <h2 className="text-xl md:text-2xl text-black">
                Cosa devo fare?
              </h2>
              <p className="text-sm md:text-md text-black leading-relaxed">
                Devi recarti al centro di ascolto Beato Federico Ozanam in via
                Pralungo, 12 a San Donà di Piave (presso casa Saretta) con i
                seguenti documenti:
              </p>
              <ul className="text-sm md:text-md text-black list-disc pl-5">
                <li>Fotocopia carta di identità</li>
                <li>Stato famiglia (rilasciato dal comune “USO ONLUS”)</li>
                <li>Busta paga e/o pensione dei componenti</li>
                <li>Certificato di disoccupazione recente</li>
                <li>
                  Modello ISEE (rilasciato dal comune di residenza o il CAF)
                </li>
                <li>Ricevuta d’affitto pagato nell’ultimo mese</li>
                <li>
                  Ogni altro documento che dimostri lo stato economico di
                  necessità
                </li>
              </ul>
              <h2 className="text-xl md:text-2xl text-black">
                Quando Il centro di ascolto è aperto?
              </h2>
              <p className="text-sm md:text-md text-black leading-relaxed">
                Il centro è aperto secondo i seguenti orari:
              </p>
              <ul className="text-sm md:text-md text-black list-disc pl-5">
                <li>Mercoledì dalle 15 alle 17</li>
                <li>Giovedì dalle 10 alle 12</li>
                <li>Venerdì dalle 15 alle 17</li>
              </ul>
            </div>
            <div className="lg:w-1/2 flex justify-center items-center px-5 md:px-10 lg:pr-64 py-4">
              <img
                className="rounded-2xl shadow-md object-cover max-w-full h-auto md:h-96 lg:h-auto"
                src="/images/emporio-solidale-per-la-spesa.jpeg"
                alt="Emporio Solidale Per La Spesa"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
