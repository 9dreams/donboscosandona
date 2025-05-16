import Layout from "components_emporio/Layout.js";
import React from "react";

export default function Servizi() {
  return (
    <Layout>
      <title>Corso Volontari 2019 - Emporio Solidale</title>
      <link rel="icon" type="image/x-icon" href="/images/servizi_favicon/favicon.ico" />

      <div class="flex flex-col">

        <div className="w-screen bg-[url('')] bg-repeat bg-center">
          <div className="flex flex-row p-20 pb-[31rem]">
            <a href="/">
              <p className="text-sm text-black">Emporio Solidale</p>
            </a>
            <p className="ml-24 text-sm color-[#272833]">
              Corso Volontari 2019
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
