import Layout from "components_emporio/Layout.js";
import React from "react";
import Head from "next/head";

export default function ConsegnaDomicilio() {
  return (
    <Layout>
      <Head>
        <title>Consegna a domicilio - Emporio Solidale</title>
        <link rel="icon" type="image/x-icon" href="/images/servizi_favicon/favicon.ico" />
      </Head>

      <div className="flex flex-col">
        <div className="w-full">
          <div className="flex items-center justify-center md:justify-start pt-32 md:px-10 lg:pl-64 px-5">
            <a href="/" className="mb-4 md:mb-0">
              <p className="text-sm text-black">Emporio Solidale</p>
            </a>
            <p className="ml-0 md:ml-12 lg:ml-24 text-sm text-black">
              Consegna a domicilio
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center">
            <div className="flex flex-col px-5 md:px-10 lg:pl-64 pt-8 md:pt-14 pb-10 md:pb-20 gap-y-4 w-full lg:w-1/2">
              <h1 className="text-2xl md:text-3xl lg:text-4xl text-black hover:text-gray-300 transition-colors duration-200">
                Consegna a domicilio
              </h1>
              <p className="text-sm md:text-md text-black leading-relaxed">
                L'Emporio Solidale non è solo un luogo fisico, ma una rete di sostegno che arriva fin dove c'è bisogno. 
                Siamo consapevoli che non tutti hanno la possibilità di recarsi presso la nostra sede per ritirare la spesa, 
                sia per motivi di salute, età avanzata o mancanza di mezzi di trasporto.
              </p>
              <p className="text-sm md:text-md text-black leading-relaxed">
                Per questo motivo, abbiamo attivato il servizio di <strong>consegna a domicilio</strong>. 
                I nostri volontari, con la massima discrezione e cura, consegnano i pacchi spesa direttamente alla porta 
                delle famiglie e delle persone singole che ne fanno richiesta e che rientrano nei criteri di assistenza.
              </p>
              <h2 className="text-xl md:text-2xl text-black">
                Come richiedere il servizio?
              </h2>
              <p className="text-sm md:text-md text-black leading-relaxed">
                Il servizio è riservato a chi è già accreditato presso l'Emporio Solidale o a chi si trova in una 
                situazione di temporanea impossibilità agli spostamenti. Per attivarlo è necessario:
              </p>
              <ul className="text-sm md:text-md text-black list-disc pl-5 font-semibold">
                <li>Contattare i Servizi Sociali o il Centro di Ascolto</li>
                <li>Segnalare la necessità di consegna a domicilio motivandone le ragioni</li>
                <li>Concordare il giorno e la fascia oraria per la ricezione</li>
              </ul>
              <h2 className="text-xl md:text-2xl text-black">
                Un gesto di vicinanza
              </h2>
              <p className="text-sm md:text-md text-black leading-relaxed">
                Oltre alla consegna materiale dei beni, questo servizio rappresenta un momento di incontro e di 
                monitoraggio delle situazioni di fragilità, permettendoci di non lasciare nessuno da solo.
              </p>
            </div>
            <div className="lg:w-1/2 flex justify-center items-center px-5 md:px-10 lg:pr-64 py-4">
              <img
                className="rounded-2xl shadow-md object-cover max-w-full h-auto md:h-96 lg:h-auto"
                src="/images/consegna-domicilio.jpg"
                alt="Consegna a domicilio Emporio Solidale"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
