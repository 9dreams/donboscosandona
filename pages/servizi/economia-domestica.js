import Layout from "components_emporio/Layout.js";
import React from "react";
export default function Servizi() {
  return (
    <Layout>
      <title>Economia domestica - Emporio Solidale</title>
      <link rel="icon" type="image/x-icon" href="/images/servizi_favicon/favicon.ico" />

      <div class="flex flex-col">
       

        <div className="w-full bg-[url('')] bg-repeat bg-center">
          <div className="flex items-center justify-center md:justify-start pt-32 md:px-10 lg:pl-64 px-5">
            <a href="/" className="mb-4 md:mb-0">
              <p className="text-sm text-black">Emporio solidale</p>
            </a>
            <p className="ml-0 md:ml-12 lg:ml-24 text-sm text-black">
              Economia domestica
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center">
            <div className="flex flex-col px-5 md:px-10 lg:pl-64 pt-8 md:pt-14 pb-10 md:pb-20 gap-y-4 w-full lg:w-1/2">
              <a href="/">
                <h1 className="text-2xl md:text-3xl  text-black lg:text-4xl  hover:text-gray-300 transition-colors duration-200">
                  Corso di economia domestica
                </h1>
              </a>
              <p className="text-sm md:text-md text-black leading-relaxed">
                È un laboratorio per la promozione delle conoscenze degli
                aspetti pratici della vita di famiglia.
              </p>
              <p className="text-sm md:text-md text-black leading-relaxed">
                È rivolto in special modo a quelle persone, uomini o donne, che
                provenendo da paesi lontani, con usi e costumi molto diversi dal
                nostro, si trovano a volte in difficoltà nel gestire soprattutto
                i figli che si devono integrare con una quotidianità diversa da
                quella abituale.
              </p>
              <p className="text-sm md:text-md text-black leading-relaxed">
                Accompagnati da volontarie e personale specializzato, vengono a
                conoscenza di come si effettuano le pulizie di casa e con quali
                prodotti adeguati; come prendersi cura dei bambini e degli
                anziani; come pianificare la spesa alimentare, come tenere un
                bilancio familiare; inoltre tecniche base e cucinare piatti
                italiani.
              </p>
              <p className="text-sm md:text-md text-black leading-relaxed">
                Queste semplici nozioni possono essere anche di grande aiuto per
                poter trovare un lavoro fuori casa, contribuendo così al maggior
                sostentamento
              </p>
            </div>
            <div className="lg:w-1/2 flex justify-center items-center px-5 md:px-10 lg:pr-64 py-4">
              <img
                className="rounded-2xl shadow-md object-cover max-w-full h-auto md:h-96 lg:h-auto"
                src="/images/economia_domestica.jpeg"
                alt="Economia Domestica"
              />
            </div>
          </div>
        </div>
      </div>
      </Layout>
  );
}
