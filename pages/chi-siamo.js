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
        <title>Storia</title>
        <meta
          name="description"
          content="Storia del Soggiorno Marino Don Bosco"
        />
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
      <div className="flex items-center justify-center mb-4">
        <h2 className="text-[2.625rem] text-secondary font-medium px-6">
          Le origini del soggiorno Marino don Bosco
        </h2>
      </div>
      <div className="container mx-auto max-w-4xl px-4 sm:px-6">
        <p className="text-base sm:text-[1.313rem] text-primary mb-4 leading-normal">
          La nascita del Soggiorno marino "don Bosco" è strettamente legata ad
          un eroico protagonista della storia e della trasformazione ambientale
          dei territori paludosi costieri su cui oggi sorge Duna Verde: il{" "}
          <span className="font-bold">dott. Giorgio Romiati.</span>
        </p>

        {/* Contenitore per l'immagine centrata con proporzioni originali */}
        <div className="flex justify-center my-8 mb-8">
          <div className="flex flex-col items-center">
            <Image
              src="/images/storia/effigie.jpg"
              alt="Effigie del dott. Romiati"
              width={500}
              height={400}
              className="object-contain"
              sizes="(max-width: 640px) 100vw, 500px"
            />
            <span className="block mt-2 text-sm text-primary text-[0.813rem] text-start w-full">
              Effigie del dott. Giorgio Romiati
            </span>
          </div>
        </div>
        <p className="text-base sm:text-[1.313rem] text-primary mb-4 leading-normal">
          Sul finire del XIX secolo, il giovane medico viene incaricato di
          occuparsi dell’opera di bonifica della vasta tenuta di famiglia, che
          si estende tra Brian ed Eraclea. Grazie alla sua profonda conoscenza
          dell’ambiente vallivo, durante la Grande Guerra riesce a portare a
          termine un’importante missione di spionaggio aprendosi una via di fuga
          fra i canneti. In tempo di pace, prosegue l’opera di bonifica delle
          terre alla foce del Livenza contribuendo a debellare la malaria e a
          risollevare le sorti umane ed economiche dei contadini.
        </p>
        <p className="text-base sm:text-[1.313rem] text-primary mb-4 leading-normal">
          Arrivato alla soglia dei novant'anni, non avendo eredi diretti, il
          dott. Romiati decide di parcellizzare la sua proprietà e donarla ad
          alcuni istituti caritatevoli. Si tratta di un terreno in parte coperto
          da bosco ceduo, opera di fiumi e correnti marine e quindi regno
          incontrastato delle zanzare, raggiungibile solo attraverso un lungo
          percorso che spazia su orizzonti vastissimi costeggiando tratti di
          canale. L'ambiente incontaminato di Valle{" "}
          <span className="font-bold">Altanea</span>, pur isolato, offre grandi
          potenzialità di sviluppo.
        </p>

        {/* Immagine a larghezza piena */}
        <div className="my-8">
          <Image
            src="/images/storia/mappa.jpg"
            alt="Valle Altanea"
            width={1200}
            height={600}
            className="w-full"
            sizes="100vw"
          />
          <span className="block mt-2 text-sm text-primary text-[0.813rem] text-start">
            Comparto delle colonie di valle Altanea
          </span>
        </div>
        <p className="text-base sm:text-[1.313rem] text-primary mb-4 leading-normal">
          Il lascito rappresenta un’ottima opportunità per l’Ispettoria veneta,
          che, al momento, è tuttavia costretta a rifiutare, date le onerose
          spese di urbanizzazione cui deve farsi carico; quando, dopo sei mesi,
          i Salesiani accettano la donazione, ne affidano la gestione all’
          <span className="font-bold">
            Oratorio don Bosco di San Donà di Piave
          </span>
          .
        </p>
        <p className="text-base sm:text-[1.313rem] text-primary mb-4 leading-normal">
          Nell’atto notarile, formalizzato il{" "}
          <span className="font-bold"> 16 dicembre 1966</span>, si precisa che
          il terreno di 2 ettari, 57 are e 80 centiare è da destinarsi a “sede
          edifici e impianti adatti a{" "}
          <span className="font-bold">Colonia marina</span> per bambini dai 6 ai
          14 anni”. Ultimate le opere necessarie, si procede alla costruzione di
          un primo fabbricato dislocato su tre piani, che spicca per le linee
          originali del design: visto dall’alto, l’edificio richiama la sagoma
          di un airone con le ali dispiegate, simbolo di eleganza, libertà e
          rispettoso amore verso il territorio e la sua storia. Una nota di
          poesia figurativa che risponde all’esigenza di ottimizzare la
          ventilazione e l’esposizione al sole del fabbricato.
        </p>
        <div className="my-8">
          <Image
            src="/images/storia/disegno_colonia.jpg"
            alt="Disegno della colonia con vista dall'alto

"
            width={1200}
            height={600}
            className="w-full"
            sizes="100vw"
          />
          <span className="block mt-2 text-sm text-primary text-[0.813rem] text-start">
            Disegno della colonia con vista dall'alto
          </span>
        </div>
        <p className="text-base sm:text-[1.313rem] text-primary mb-4 leading-normal mt-8">
          La nuova struttura, terminata a{" "}
          <span className="font-bold">marzo del 1969</span> , appare, agli occhi
          della vedova Romiati, come la realizzazione del sogno che il marito
          aveva lungamente coltivato…
        </p>
        <div className="my-8">
          <Image
            src="/images/storia/colonia_in_costruzione.jpg"
            alt="Disegno della colonia con vista dall'alto

"
            width={1200}
            height={600}
            className="w-full"
            sizes="100vw"
          />
          <span className="block mt-2 text-sm text-primary text-[0.813rem] text-start">
            1968 la Colonia in costruzione
          </span>
        </div>
        <div className="flex items-center justify-center mb-4">
          <h2 className="text-[2.625rem] text-secondary font-medium px-6">
            Estate 1970: si inaugura la struttura{" "}
          </h2>
        </div>
        <p className="text-base sm:text-[1.313rem] text-primary mb-4 leading-normal">
          Nell’estate del <span className="font-bold">1970</span> il{" "}
          <span className="font-bold"> Soggiorno Marino Don Bosco</span>{" "}
          accoglie i primi ragazzi in modo organizzato. Il posto è isolato ma
          raggiungibile facilmente con il pullman. La struttura dispone di
          spiaggia propria con attrezzature per la cura elioterapica (al tempo
          consigliata per favorire un corretto sviluppo fisico), lo sport e la
          piacevole ricreazione dei piccoli che possono contare sull’assistenza
          del personale salesiano e di alcuni giovani animatori.
        </p>

        {/* Grid di immagini - 6 immagini, 2 per riga */}
        <div className="grid grid-cols-2 gap-4 my-8">
          {/* Prima riga */}
          <div>
            <Image
              src="/images/storia/bambini_calcetto.jpg"
              alt="Immagine estate 1970"
              width={600}
              height={400}
              className="w-full"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
            <span className="block mt-2 text-sm text-primary text-[0.813rem] text-start">
              1980 calcetto
            </span>
          </div>
          <div>
            <Image
              src="/images/storia/bambini_giardino.jpg"
              alt="Immagine estate 1970"
              width={600}
              height={400}
              className="w-full"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
            <span className="block mt-2 text-sm text-primary text-[0.813rem] text-start">
              1980 in giardino
            </span>
          </div>

          {/* Seconda riga */}
          <div>
            <Image
              src="/images/storia/ragazzi_colonia.jpg"
              alt="Immagine estate 1970"
              width={600}
              height={400}
              className="w-full"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
            <span className="block mt-2 text-sm text-primary text-[0.813rem] text-start">
              1980 i ragazzi della colonia
            </span>
          </div>
          <div>
            <Image
              src="/images/storia/bambini_piccole_olimpiadi.jpg"
              alt="Immagine estate 1970"
              width={600}
              height={400}
              className="w-full "
              sizes="(max-width: 640px) 100vw, 50vw"
            />
            <span className="block mt-2 text-sm text-primary text-[0.813rem] text-start">
              1980 piccole olimpiadi
            </span>
          </div>

          {/* Terza riga */}
          <div>
            <Image
              src="/images/storia/bambini_bar.jpg"
              alt="Immagine estate 1970"
              width={600}
              height={400}
              className="w-full "
              sizes="(max-width: 640px) 100vw, 50vw"
            />
            <span className="block mt-2 text-sm text-primary text-[0.813rem] text-start">
              1980 bar
            </span>
          </div>
          <div>
            <Image
              src="/images/storia/bambini_colazione.jpg"
              alt="Immagine estate 1970"
              width={600}
              height={400}
              className="w-full"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
            <span className="block mt-2 text-sm text-primary text-[0.813rem] text-start">
              1980 colazione{" "}
            </span>
          </div>
        </div>
        <p className="text-base sm:text-[1.313rem] text-primary mb-4 leading-normal">
          L’intero complesso è progettato per assolvere alla funzione cui è
          destinato, quello di una Colonia. Questa tipologia organizzativa
          necessita di grandi camerate (la capienza complessiva prevista è di
          130 posti), una piccola infermeria, più sale ricreative, un refettorio
          e un ampio scoperto per i giochi organizzati e le sfide sportive
          aperte anche agli ospiti delle colonie vicine: le cosiddette “piccole
          olimpiadi.
        </p>
        <p className="text-base sm:text-[1.313rem] text-primary mb-4 leading-normal">
          Durante l’estate vengono programmati tre turni, della durata di poco
          meno di un mese (da fine giugno a metà settembre) sotto la particolare
          direzione del coadiutore salesiano Carlo Bussinello. Il primo turno è
          riservato ai figli dei dipendenti Shell (multinazionale olandese
          operante nel settore petrolifero) provenienti da tutta Italia. Ragazzi
          dalle inflessioni dialettali diverse, si ritrovano d’un colpo
          proiettati in una realtà lontana dalla propria, costretti a
          condividere camerate enormi, una medesima divisa a quadretti, tempi
          associativi e di svago scanditi con precisione rigorosa. Educatori
          esperti, i Salesiani riescono a far scomparire la nostalgia dai loro
          volti con la proposta di attività ricreative accattivanti, programmate
          con la massima attenzione ai bisogni formativi delle singole fasce
          d’età.
        </p>
        <div className="my-8">
          <Image
            src="/images/storia/personale_soggiorno.jpg"
            alt="Disegno della colonia con vista dall'alto

"
            width={1200}
            height={600}
            className="w-full"
            sizes="100vw"
          />
          <span className="block mt-2 text-sm text-primary text-[0.813rem] text-start">
            1980 il personale
          </span>
        </div>
        <p className="text-base sm:text-[1.313rem] text-primary mb-4 leading-normal">
          I turni di tarda estate raccolgono ragazzi dell’ECA (ente comunale
          assistenza) e gruppi parrocchiali. Nei rimanenti periodi dell’anno, il
          soggiorno marino viene utilizzato per ritiri, incontri, convegni e
          assemblee.
        </p>
        <p className="text-base sm:text-[1.313rem] text-primary mb-4 leading-normal">
          Nel <span className="font-bold">1976</span> si procede all’ampliamento
          dell’edificio che prevede una nuova costruzione più bassa e più
          piccola, con locali adibiti allo svago (e per questo chiamata “la
          Palestra”), al culto e alla sistemazione del personale.
        </p>
        <div className="my-8">
          <Image
            src="/images/storia/ritiro_centro_formazione_professionale.jpg"
            alt="Disegno della colonia con vista dall'alto

"
            width={1200}
            height={600}
            className="w-full"
            sizes="100vw"
          />
          <span className="block mt-2 text-sm text-primary text-[0.813rem] text-start">
            1984 ritiro del Centro di Formazione Professionale
          </span>
        </div>
        <p className="text-base sm:text-[1.313rem] text-primary mb-4 leading-normal">
          Riconvertita e messa a norma a distanza di vent’anni, la nuova Casa,
          dedicata a Domenico Savio, si trasforma in una struttura ricettiva
          autonoma e distaccata (solo nel 1999 verrà collegata al blocco
          principale per mezzo di un lungo porticato) dotata di cucina, cappella
          e un grande salone polivalente. Le camere con servizi, capienti ma
          decisamente meno ampie dei dormitori del blocco principale, consentono
          di accogliere una cinquantina di ospiti per attività a piccoli gruppi
          anche al di fuori del periodo stagionale.
        </p>
        <p className="text-base sm:text-[1.313rem] text-primary mb-4 leading-normal">
          L’intero complesso diventa in tal modo un valido supporto per la
          pastorale giovanile.
        </p>
        <div className="my-8">
          <Image
            src="/images/storia/amici_domenico_savio.jpg"
            alt="Disegno della colonia con vista dall'alto"
            width={1200}
            height={600}
            className="w-full"
            sizes="100vw"
          />
          <span className="block mt-2 text-sm text-primary text-[0.813rem] text-start">
            1989 ritiro Amici di Domenico Savio
          </span>
        </div>
        <div className="flex items-center justify-center mb-4">
          <h2 className="text-[2.625rem] text-secondary font-medium px-6">
            Da Colonia a Casa per Ferie
          </h2>
        </div>
        <p className="text-base sm:text-[1.313rem] text-primary mb-4 leading-normal">
          L’intero complesso diventa in tal modo un valido supporto per la
          pastorale giovanile.
        </p>
        <p className="text-base sm:text-[1.313rem] text-primary mb-4 leading-normal">
          Dopo la metà degli anni Ottanta, la richiesta di tale servizio
          comincia a ridursi a causa delle mutate abitudini di vita che portano
          gli italiani a preferire una vacanza di tipo familiare.
        </p>
        <p className="text-base sm:text-[1.313rem] text-primary mb-4 leading-normal">
          Si punta pertanto sulla concessione in autogestione di entrambe le
          strutture per l’accoglienza di gruppi sportivi e associativi o laici
          legati alle parrocchie. Ma tale attività fatica a decollare e a
          consolidarsi a causa dello stato dei locali, troppo spartani e del
          tutto inadatti ad una clientela più adulta ed esigente.
        </p>
        <p className="text-base sm:text-[1.313rem] text-primary mb-4 leading-normal">
          In tale scenario, i Salesiani, assecondando la lungimirante proposta
          dell’economo Giampietro Pettenon, maturano la convinzione di
          intervenire radicalmente sulla struttura convertendo la Colonia in un
          complesso ricettivo a carattere prevalentemente turistico, che
          conserva tuttavia le finalità sociali e culturali di partenza. Le tre
          camerate (troppo ampie per trattenere un po’ di tepore quando la
          brezza marina entra insidiosa attraverso i vecchi infissi portando con
          sé il profumo della salsedine) vengono frazionate in una ventina di
          stanze con bagno, di capienza variabile per soddisfare le richieste
          dei singoli e delle famiglie, che provengono per lo più da ambienti
          salesiani. Una hall spaziosa, un soggiorno luminoso e il servizio di
          ascensore aggiungono un tocco di qualità al nuovo Residence.
        </p>
        <div className="my-8">
          <Image
            src="/images/storia/inaugurazione_struttura.jpg"
            alt="Disegno della colonia con vista dall'alto"
            width={1200}
            height={600}
            className="w-full"
            sizes="100vw"
          />
          <span className="block mt-2 text-sm text-primary text-[0.813rem] text-start">
            1999 don Enrico Peretti inaugura la struttura rinnovata
          </span>
        </div>
        <p className="text-base sm:text-[1.313rem] text-primary mb-4 leading-normal">
          Anche se l’autorizzazione alla nuova destinazione d’uso era già stata
          concessa una decina d’anni prima, è solo nel{" "}
          <span className="font-bold">1999</span> che nasce a pieno titolo la{" "}
          <span className="font-bold">
            Casa per Ferie “Soggiorno Marino Don Bosco"
          </span>{" "}
          , un luogo ideale dove trascorrere una vacanza confortevole e
          rilassante assaporando il piacere di una cucina dai sapori
          tradizionali in un’atmosfera calda che profuma di famiglia. Fra i vari
          intrattenimenti offerti, particolarmente apprezzata è la processione
          di ferragosto, che si rinnova e si consolida fino a poco oltre il
          primo decennio degli anni Duemila. Organizzata con amorevole cura da
          don Mario Del Rizzo e dall’intero staff, coinvolge e richiama anche
          gli ospiti dei vicini villaggi turistici. All’imbrunire, la statua
          dell’Ausiliatrice viene trasportata a braccia lungo la scogliera
          illuminata dalla sola scia di fiaccole che si riflettono tremolanti
          sullo specchio d'acqua, per concludersi poi nel cortile del Soggiorno
          Marino con un “anguriata” nello stile salesiano.
        </p>
        <div className="my-8">
          <Image
            src="/images/storia/processione.jpg"
            alt="Disegno della colonia con vista dall'alto

"
            width={1200}
            height={600}
            className="w-full"
            sizes="100vw"
          />
          <span className="block mt-2 text-sm text-primary text-[0.813rem] text-start">
            2007 Processione di Maria Ausiliatrice
          </span>
        </div>
        <p className="text-base sm:text-[1.313rem] text-primary mb-4 leading-normal">
          Nello spazio verde circostante, le giovani piantine messe a dimora con
          l'amorevole cura degli inizi, hanno ormai lasciato spazio ad una
          pineta rigogliosa che ospita un parco giochi per i piccoli, dove
          divertirsi in assoluta sicurezza.
        </p>
        <div className="flex items-center justify-center mb-4">
          <h2 className="text-[2.625rem] text-secondary font-medium px-6">
            Ripartire dall'oggi
          </h2>
          
        </div>
        <p className="text-base sm:text-[1.313rem] text-primary mb-4 leading-normal">
          Nello spazio verde circostante, le giovani piantine messe a dimora con
          l'amorevole cura degli inizi, hanno ormai lasciato spazio ad una
          pineta rigogliosa che ospita un parco giochi per i piccoli, dove
          divertirsi in assoluta sicurezza.
        </p>
        <p className="text-base font-bold sm:text-[1.313rem] text-primary mt-12 mb-4 leading-normal">
   Autore: Wally Perissinotto
        </p>
      </div>
    </Layout>
  );
}
