"use client";

import Navbar from "@/cc/Navbar";
import Layout from "@/components/Layout";
import Featured from "@/components/Featured";
import Head from "next/head";
import Image from "next/image";

export async function getStaticProps() {
  let res = await fetch(
    "https://channels.donboscosandona.it/api/posts/inoratorio"
  );
  const data = await res.json();

  return {
    props: { data },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 minutes
    revalidate: 1800, // In secondi: il build viene fatto al massimo una volta ogni mezzora
  };
}

export default function Home({ data }) {
  return (
    <Layout>
      <Head>
        <title>Carta dei servizi</title>
        <meta name="description" content="Carta dei servizi" />
      </Head>

      <Featured data={data} limit={4} defaultTag="scuola" />
      <Navbar
        testo1="ALL INCLUSIVE"
        testo2="BED & BREAKFAST"
        testo3="GRUPPI"
        testo4="CHI SIAMO"
        testo5="STRUTTURA"
        testo6="OFFERTE"
        testo7="CARTA DEI SERVIZI"
        telefonoSuMisura="+39 041 530 23 63"
        faxSuMisura="+39 041 530 40 16"
        emailSuMisura="info@soggiornomarinobosco.it"
        titoloDoge="Soggiorno Marino Don Bosco"
        titoloHome="ALL INCLUSIVE"
        titoloEscursioni="BED & BREAKFAST"
        titoloServizi="GRUPPI"
        titoloChiSiamo="CHI SIAMO"
        titoloFlotta="STRUTTURA"
        titoloNews="OFFERTE"
        testoContattiSuMisura="Contatti per prodotti su misura"
        maildogedivenezia="info@soggiornomarinobosco.it"
        numeroditelefono="       +39 0421 299 158
"
        posizioneSOGGIORNO="Via Selva Rosata, 61"
        testoTelefono="Tel"
        testoEmail="E-Mail"
        logoUrl="/images/logo_navbar.png"
      />
      {/*  */}
      <div className="flex items-center justify-center mb-4">
        <h2 className="text-3xl md:text-4xl text-gray-800 font-medium px-6">
          Carta dei servizi
        </h2>
      </div>
      <div className="container mx-auto max-w-4xl px-4 sm:px-6">
        <p className="text-base sm:text-[1.313rem] text-[#666666] mb-12 leading-normal">
          Il <span className="font-bold">Soggiorno Marino Don Bosco</span>,
          gestito dai salesiani dell'Oratorio Don Bosco di San Donà di Piave,
          offre ai propri ospiti un ambiente familiare e sereno che favorisce il
          riposo del corpo e dello spirito. Lo{" "}
          <span className="font-bold">stile</span> è quello tipico delle Case
          salesiane, fatto di cordialità, familiarità, rispetto delle persone e
          delle cose. L'
          <span className="font-bold">
            attenzione alla crescita umana e cristiana
          </span>{" "}
          è rivolta a tutti ma in particolare ai giovani. Il carattere della
          casa richiede che l'abbigliamento delle persone che la frequentano sia
          sempre adeguato. A tutti viene cortesemente chiesto di collaborare
          affinché l'ambiente conservi il suo{" "}
          <span className="font-bold">stile ordinato e accogliente</span>.
        </p>

        <div className="flex items-center justify-center mb-4">
          <h2 className="text-3xl md:text-4xl text-gray-800 font-medium px-6">
            Arrivi e partenze
          </h2>
        </div>
        <ul className="text-base sm:text-[1.313rem] text-[#666666] mb-12 leading-normal list-disc">
          <li className="mb-2">
            Il Soggiorno Marino Don Bosco offre{" "}
            <span className="font-bold">soggiorni settimanali</span>, da sabato
            a sabato, o{" "}
            <span className="font-bold">periodi di soggiorno più brevi</span>{" "}
            (secondo la disponibilità).
          </li>
          <li className="mb-2">
            Il <span className="font-bold">check-in</span> è previsto intorno
            alle ore <span className="font-bold">15.00</span> circa del sabato
            di arrivo (ricordiamo di portare i documenti di identità); il{" "}
            <span className="font-bold">check-out</span> è previsto entro le ore{" "}
            <span className="font-bold">9.00</span> del giorno di partenza.
          </li>
          <li className="mb-2">
            E' possibile, per chi lo desidera, posticipare la partenza del
            sabato al tardo pomeriggio, prenotando il{" "}
            <span className="font-bold">
              servizio spiaggia extra al prezzo di €15
            </span>
            . La camera dovrà comunque essere liberata per le ore 9.00 del
            mattino
          </li>
          <li className="mb-2">
            Il nostro ristorante è lieto di proporre agli ospiti il{" "}
            <span className="font-bold">Saturday brunch</span>, un ricco buffet
            al prezzo di €20 per persona.
          </li>
          <li className="mb-2">
            L'<span className="font-bold">accesso alle camere</span> è
            consentito ai soli ospiti registrati. Agli eventuali visitatori
            chiediamo di presentarsi in portineria per potersi registrare.
          </li>
        </ul>
        <div className="flex items-center justify-center mb-4">
          <h2 className="text-3xl md:text-4xl text-gray-800 font-medium px-6">
            Ristorazione e bar
          </h2>
        </div>
        <ul className="text-base sm:text-[1.313rem] text-[#666666] mb-12 leading-normal list-disc">
          <li className="">
            Il <span className="font-bold">servizio di ristorazione</span> avrà
            i seguenti orari:
            <p className="">
              <span className="font-bold">Colazione</span> dalle ore 8.00 alle
              ore 9.30
            </p>
            <p className="">
              <span className="font-bold">Pranzo</span> dalle ore 12.30 alle ore
              13.30
            </p>
            <p className="">
              <span className="font-bold">Cena</span> dalle ore 19.30 alle ore
              20.30
            </p>
          </li>
          <li className="">
            Il <span className="font-bold">servizio bar</span> è aperto dalle
            ore 9.00 alle ore 23.30.
          </li>
        </ul>
        {/*  */}
        <div className="flex items-center justify-center mb-4">
          <h2 className="text-3xl md:text-4xl text-gray-800 font-medium px-6">
            Spiaggia
          </h2>
        </div>
        <ul className="text-base sm:text-[1.313rem] text-[#666666] mb-12 leading-normal list-disc">
          <li className="mb-2">
            Agli ospiti è assegnato un posto in{" "}
            <span className="font-bold">spiaggia privata</span> con ombrellone,
            sdraio e lettino.
          </li>
          <li className="mb-2">
            Tutti gli ospiti sono pregati di attenersi alle indicazioni del
            bagnino di salvataggio, rispettando la segnaletica esposta.
          </li>
          <li className="mb-2">
            I <span className="font-bold">giochi dei bambini</span> dovranno
            essere riposti negli appositi spazi in spiaggia.
          </li>
        </ul>

        {/* Sezione per famigliari e ospiti esterni */}
        <div className="flex items-center justify-center mb-4">
          <h2 className="text-3xl md:text-4xl text-gray-800 font-medium px-6">
            Servizi per famigliari e ospiti esterni
          </h2>
        </div>
        <p className="text-base sm:text-[1.313rem] text-[#666666] mb-4 leading-normal pr-6">
          I familiari e gli amici che desiderano trascorrere qualche ora insieme
          agli ospiti del Soggiorno Marino sono i benvenuti:
        </p>
        <ul className="text-base sm:text-[1.313rem] text-[#666666] mb-12 leading-normal list-disc">
          <li className="mb-2">
            il <span className="font-bold">pranzo</span> o la{" "}
            <span className="font-bold">cena</span> per amici o parenti degli
            ospiti alloggiati ha un costo di{" "}
            <span className="font-bold">€25 a persona</span>;
          </li>
          <li className="mb-2">
            il <span className="font-bold">servizio spiaggia</span> con
            ombrellone, sedia sdraio e lettino ha un costo di{" "}
            <span className="font-bold">€15</span>.
          </li>
        </ul>

        {/* Sezione orari */}
        <div className="flex items-center justify-center mb-4">
          <h2 className="text-3xl md:text-4xl text-gray-800 font-medium px-6">
            Orari
          </h2>
        </div>
        <p className="text-base sm:text-[1.313rem] text-[#666666] mb-4 leading-normal pr-6">
          <span className="font-bold">L'accesso agli ospiti</span> alloggiati è
          consentito fino alle ore <span className="font-bold">24.00</span>: si
          prega di avvisare in Reception in caso di rientro più tardi.
        </p>
        <ul className="text-base sm:text-[1.313rem] text-[#666666] mb-12 leading-normal list-disc">
          <li className="mb-2">
            In caso di necessità o di emergenza, in ogni stanza è presente un
            vademecum con il{" "}
            <span className="font-bold">numero telefonico</span> della struttura
            e i <span className="font-bold">principali recapiti</span>.
          </li>
        </ul>

        {/* Sezione attenzioni */}
        <div className="flex items-center justify-center mb-4">
          <h2 className="text-3xl md:text-4xl text-gray-800 font-medium px-6">
            Attenzioni
          </h2>
        </div>
        <ul className="text-base sm:text-[1.313rem] text-[#666666] mb-12 leading-normal list-disc">
          <li className="mb-2">
            Al pagamento del soggiorno, all'arrivo,{" "}
            <span className="font-bold">non si accettano assegni.</span>
          </li>
          <li className="mb-2">
            La <span className="font-bold">pulizia delle camere</span> e il{" "}
            <span className="font-bold">
              cambio della biancheria letto-bagno
            </span>
            viene effettuato il sabato. Il{" "}
            <span className="font-bold">cambio degli asciugamani</span> è
            previsto anche ogni mercoledì dai nostri collaboratori durante la
            permanenza. È facoltà degli ospiti il riassetto.
          </li>
          <li className="mb-2">
            Chiediamo gentilmente di non gettare nel WC{" "}
            <span className="font-bold">oggetti ingombranti</span> da smaltire
            negli appositi contenitori.
          </li>
          <li className="mb-2">
            Ricordiamo che, per far funzionare l'
            <span className="font-bold">aria condizionata</span>, è necessario
            chiudere completamente tutte le finestre della camera (altrimenti
            non parte).
          </li>
          <li className="mb-2">
            Per ragioni di sicurezza, non è consentito l'utilizzo di{" "}
            <span className="font-bold">
              ferri da stiro, fornelli elettrici e apparecchi frigoriferi
            </span>{" "}
            nelle camere. Invitiamo gli ospiti a rivolgersi in Reception in caso
            di necessità.
          </li>
          <li className="mb-2">
            Il nostro ampio <span className="font-bold">parcheggio</span> è a
            disposizione degli ospiti, ma non custodito; durante il check-in è
            possibile avvicinare temporaneamente il veicolo all'ingresso per
            scaricare i bagagli.
          </li>
          <li className="mb-2">
            Si declina ogni responsabilità per eventuali{" "}
            <span className="font-bold">
              smarrimenti o furti di denaro, oggetti o effetti personali
              all'interno della struttura, nel parco e nella spiaggia.
            </span>
          </li>
          <li className="mb-2">
            È vietato l'uso dell'ascensore ai{" "}
            <span className="font-bold">minori di 12 anni</span> se non
            accompagnati da un adulto.
          </li>
          <li className="mb-2">
            Chiediamo alle famiglie di{" "}
            <span className="font-bold">
              prestare attenzione ai propri figli
            </span>
            durante la giornata, specie quando si trovano in prossimità del
            mare.
          </li>
          <li className="mb-2">
            Chiediamo di limitare{" "}
            <span className="font-bold">l'uso del costume</span> nelle zone
            esterne della casa (parco e veranda).
          </li>
          <li className="mb-2">
            È consentito fumare nell'apposita{" "}
            <span className="font-bold">zona fumatori</span>.
          </li>
        </ul>

        <div></div>
      </div>
    </Layout>
  );
}
