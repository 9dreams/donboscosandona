import Head from 'next/head'
import { Icon } from '@iconify/react'
import {
  Layout,
  LandingHero,
  Table,
} from '/components'

// Punti vendita diretti Unieuro (esclusi i negozi in franchising Unieuro City)
// tra i più vicini a San Donà di Piave (VE).
// Fonte: elenco ufficiale dei punti vendita diretti pubblicato da Unieuro S.p.A.
const negoziUnieuro = [
  ['Comune', 'Indirizzo', 'Prov.'],
  ['Jesolo', 'Via Marcato Mons. Giovanni, 24 – C.C. Laguna Shopping', 'VE'],
  ['Portogruaro', 'Via Prati Guori, 29', 'VE'],
  ['Oderzo', 'Via Maestri del Commercio, 2 – Parco Comm. Stella', 'TV'],
  ['Marcon', 'Via E. Mattei, 1/C – C.C. Valecenter', 'VE'],
  ['Silea', 'Via Eroi di Podrute', 'TV'],
  ['Venezia (Mestre)', 'Via Don Federico Tosatto, snc', 'VE'],
  ['Paese', 'Via Sante Biasuzzi, 28 – C.C. La Castellana', 'TV'],
  ['Trebaseleghe', 'Via Malcanton, 40 – C.C. Emisfero', 'PD'],
  ['Ballò di Mirano', 'Via Stazione, 80', 'VE'],
  ['Conegliano', 'Viale Italia, 207', 'TV'],
  ['Fiume Veneto', 'Via Maestri del Lavoro, 42', 'PN'],
  ['Castelfranco Veneto', 'Viale Europa, 30', 'TV'],
]

const ancore = [
  { href: '#unieuro', label: 'Unieuro' },
  { href: '#mrdigital', label: 'MrDigital' },
  { href: '#c2group', label: 'C2 Group' },
  { href: '#modelli', label: 'iPad già in famiglia' },
  { href: '#non-convenzionato', label: 'Dispositivo personale' },
  { href: '#accessori', label: 'Accessori consigliati' },
  { href: '#contatti', label: 'Serve aiuto?' },
]

const portaleC2 =
  'https://c2group.click/Convenzione_Salesiani_San_Dona_di_Piave'

export default function IpadPage() {
  return (
    <Layout>
      <Head>
        <title>Acquisto iPad | SFP Don Bosco</title>
        <meta
          name="description"
          content="Guida per le famiglie all'acquisto dell'iPad: fornitori convenzionati con la scuola, istruzioni pratiche e modelli consigliati."
        />
      </Head>

      <LandingHero
        title="iPad a scuola"
        description="Il tablet è lo strumento didattico scelto dalla Scuola: la famiglia lo acquista in autonomia, tramite i fornitori convenzionati oppure un canale personale."
        imageUrl="/images/iPad.png"
        mobileObjectPosition="right"
      />

      {/* Navigazione rapida tra le sezioni */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 -mt-8 relative z-10">
        <div className="flex flex-wrap gap-3 justify-center bg-white dark:bg-[#181b23] rounded-2xl shadow-sm border border-gray-200 dark:border-white/10 p-4">
          {ancore.map((a) => (
            <a
              key={a.href}
              href={a.href}
              className="text-sm font-semibold px-4 py-2 rounded-full border border-[#1976D2]/30 dark:border-[#64B5F6]/30 text-[#1976D2] dark:text-[#64B5F6] hover:bg-[#1976D2] hover:text-white dark:hover:bg-[#64B5F6] dark:hover:text-[#0d0f14] transition-colors"
            >
              {a.label}
            </a>
          ))}
        </div>
      </div>

      {/* Introduzione */}
      <div className="max-w-[880px] mx-auto px-4 md:px-8 mt-16 mb-16 text-center">
        <h1 className="title-display text-4xl md:text-5xl mb-6">
          Uno strumento personale, una scelta condivisa
        </h1>
        <p className="text-lg leading-8 text-gray-600 dark:text-gray-300">
          L'iPad è il dispositivo digitale che gli studenti utilizzano quotidianamente in classe: è
          integrato nella rete didattica dell'Istituto e gestito tramite <strong>Jamf School</strong>,
          il sistema di sicurezza e controllo con cui la scuola configura i tablet e installa il
          materiale didattico.
        </p>
        <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
          Il modello richiesto è indicato dalla Scuola, ma <strong>l'acquisto resta a carico della
          famiglia</strong>, libera di scegliere come procedere. In questa pagina trovate l'elenco dei{' '}
          <strong>fornitori convenzionati</strong> con l'Istituto e tutte le indicazioni pratiche per
          completare l'acquisto correttamente.
        </p>
      </div>

      {/* Unieuro */}
      <section id="unieuro" className="max-w-[1000px] mx-auto px-4 md:px-8 mb-20 scroll-mt-28">
        <div className="flex items-center gap-3 mb-4">
          <Icon icon="ph:storefront" className="text-3xl text-[#1976D2] dark:text-[#64B5F6]" />
          <h2 className="text-3xl font-bold text-[#1976D2] dark:text-[#64B5F6] m-0">Unieuro</h2>
        </div>
        <p className="text-lg leading-8 mb-6">
          Tutti i <strong>punti vendita diretti Unieuro</strong> sono convenzionati con la Scuola per
          l'acquisto dell'iPad. L'acquisto avviene direttamente in negozio e la consegna del
          dispositivo è immediata.
        </p>

        <div className="flex gap-4 items-start rounded-2xl border-l-4 border-amber-400 bg-amber-50 dark:bg-amber-950/30 p-5 mb-8">
          <Icon icon="ph:warning-circle" className="text-2xl text-amber-500 shrink-0 mt-0.5" />
          <p className="text-sm md:text-base text-amber-900 dark:text-amber-200 m-0">
            <strong>Attenzione:</strong> i negozi <strong>Unieuro City</strong> — i punti vendita di
            piccolo formato, spesso in franchising, presenti nei centri storici — <strong>non sono
            inclusi</strong> nella convenzione. Prima di recarvi in negozio verificate che si tratti di
            un punto vendita <strong>Unieuro</strong> e non Unieuro City: in caso di dubbio contattate
            l'ufficio tecnico della scuola.
          </p>
        </div>

        <h3 className="text-xl font-bold mb-4">Quale modello scegliere</h3>
        <div className="grid sm:grid-cols-2 gap-5 mb-10">
          <div className="rounded-2xl bg-white dark:bg-[#181b23] border border-gray-200 dark:border-white/10 shadow-sm p-6">
            <Icon icon="ph:device-tablet" className="text-3xl text-[#1976D2] dark:text-[#64B5F6] mb-3" />
            <h3 className="font-bold text-lg mb-1">iPad</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">10ª generazione — almeno 128 GB</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Per chi vuole risparmiare: va benissimo, purché con almeno 128 GB di memoria.
            </p>
          </div>
          <div className="rounded-2xl bg-white dark:bg-[#181b23] border-2 border-[#1976D2] dark:border-[#64B5F6] shadow-sm p-6 relative">
            <span className="absolute -top-3 left-6 bg-[#1976D2] dark:bg-[#64B5F6] text-white dark:text-[#0d0f14] text-xs font-bold px-3 py-1 rounded-full">
              Consigliato
            </span>
            <Icon icon="ph:device-tablet" className="text-3xl text-[#1976D2] dark:text-[#64B5F6] mb-3" />
            <h3 className="font-bold text-lg mb-1">iPad</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">11ª generazione</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Il modello base più recente: potenza e autonomia più che sufficienti, riceverà
              aggiornamenti iPadOS ancora per molti anni.
            </p>
          </div>
        </div>

        <Table
          title="Negozi Unieuro convenzionati"
          subtitle="Punti vendita diretti più vicini a San Donà di Piave"
          rows={negoziUnieuro}
          backgroundColor="#ffffff"
          opacity={1}
          color="black"
          maxWidth="lg"
        />
        <p className="text-xs text-gray-500 dark:text-gray-400 -mt-4 mb-10 px-2">
          Elenco basato sui punti vendita diretti pubblicati da Unieuro S.p.A. (esclusi i negozi in
          franchising Unieuro City), tra i più vicini a San Donà di Piave. Verificate orari e
          disponibilità sul sito{' '}
          <a href="https://www.unieuro.it" target="_blank" rel="noopener noreferrer">
            unieuro.it
          </a>{' '}
          prima di recarvi in negozio.
        </p>

        <div className="rounded-2xl bg-white dark:bg-[#181b23] border border-gray-200 dark:border-white/10 shadow-sm p-6 md:p-8">
          <h3 className="text-xl font-bold mb-4">Dopo l'acquisto</h3>
          <ol className="space-y-4">
            <li className="flex gap-3">
              <Icon icon="ph:receipt" className="text-2xl text-[#1976D2] dark:text-[#64B5F6] shrink-0" />
              <span>Conservate lo scontrino o la fattura d'acquisto.</span>
            </li>
            <li className="flex gap-3">
              <Icon icon="ph:prohibit" className="text-2xl text-[#1976D2] dark:text-[#64B5F6] shrink-0" />
              <span>
                <strong>Non accendete l'iPad</strong>: verrà configurato dalla scuola al primo avvio.
              </span>
            </li>
            <li className="flex gap-3">
              <Icon icon="ph:camera" className="text-2xl text-[#1976D2] dark:text-[#64B5F6] shrink-0" />
              <span>
                Fotografate il <strong>numero di serie</strong> riportato sull'etichetta della{' '}
                <strong>scatola</strong> (senza accendere il dispositivo).
              </span>
            </li>
            <li className="flex gap-3">
              <Icon icon="ph:envelope-simple" className="text-2xl text-[#1976D2] dark:text-[#64B5F6] shrink-0" />
              <span>
                Inviate un'email a{' '}
                <a href="mailto:assistenza@donboscosandona.it" className="font-semibold">
                  assistenza@donboscosandona.it
                </a>{' '}
                allegando la foto del numero di serie e lo scontrino/ricevuta d'acquisto, indicando{' '}
                <strong>nome e cognome dello studente/essa</strong>.
              </span>
            </li>
          </ol>
        </div>
      </section>

      {/* MrDigital */}
      <section id="mrdigital" className="max-w-[1000px] mx-auto px-4 md:px-8 mb-20 scroll-mt-28">
        <div className="flex items-center gap-3 mb-4">
          <Icon icon="ph:truck" className="text-3xl text-[#1976D2] dark:text-[#64B5F6]" />
          <h2 className="text-3xl font-bold text-[#1976D2] dark:text-[#64B5F6] m-0">
            MrDigital — acquisto o noleggio
          </h2>
        </div>
        <p className="text-lg leading-8 mb-6">
          In alternativa a Unieuro, è disponibile il portale convenzionato{' '}
          <a
            href="https://donboscosandona.mrdigital.it/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold"
          >
            donboscosandona.mrdigital.it
          </a>
          , dove è possibile scegliere tra:
        </p>

        <div className="grid sm:grid-cols-2 gap-5 mb-6">
          <div className="rounded-2xl bg-white dark:bg-[#181b23] border border-gray-200 dark:border-white/10 shadow-sm p-6">
            <Icon icon="ph:shopping-bag" className="text-2xl text-[#1976D2] dark:text-[#64B5F6] mb-2" />
            <h3 className="font-bold mb-1">Acquisto diretto</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              L'iPad diventa di proprietà della famiglia fin da subito.
            </p>
          </div>
          <div className="rounded-2xl bg-white dark:bg-[#181b23] border border-gray-200 dark:border-white/10 shadow-sm p-6">
            <Icon icon="ph:arrows-clockwise" className="text-2xl text-[#1976D2] dark:text-[#64B5F6] mb-2" />
            <h3 className="font-bold mb-1">Noleggio</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Formula a canone periodico, utile per diluire la spesa nel tempo.
            </p>
          </div>
        </div>

        <p className="text-lg leading-8 mb-6">
          A differenza di Unieuro — dove il dispositivo viene consegnato direttamente a voi — gli
          iPad ordinati tramite MrDigital vengono <strong>consegnati direttamente a scuola</strong>,
          dove verranno preparati e distribuiti agli studenti.
        </p>

        <a
          href="https://donboscosandona.mrdigital.it/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1976D2] font-bold hover:bg-[#1565C0] transition-colors"
          style={{ color: '#fff' }}
        >
          Vai al portale MrDigital <Icon icon="ph:arrow-right" style={{ color: '#fff' }} />
        </a>
      </section>

      {/* C2 Group */}
      <section id="c2group" className="max-w-[1000px] mx-auto px-4 md:px-8 mb-20 scroll-mt-28">
        <div className="flex items-center gap-3 mb-4">
          <Icon icon="ph:handshake" className="text-3xl text-[#1976D2] dark:text-[#64B5F6]" />
          <h2 className="text-3xl font-bold text-[#1976D2] dark:text-[#64B5F6] m-0">
            C2 Group — Convenzione Scuola
          </h2>
        </div>
        <p className="text-lg leading-8 mb-6">
          Per l'anno scolastico 2026 è attiva anche la convenzione con{' '}
          <strong>C2 Group</strong>, partner dell'Istituto per la fornitura di tecnologia
          didattica. Le famiglie acquistano direttamente dal portale dedicato; i prodotti in
          convenzione sono predisposti per integrarsi con le piattaforme utilizzate a scuola.
        </p>

        <div className="rounded-2xl bg-white dark:bg-[#181b23] border border-gray-200 dark:border-white/10 shadow-sm p-6 md:p-8 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2 m-0">Portale di acquisto</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 m-0">
                Registrazione, catalogo prodotti e ordine online sul sito C2 Group.
              </p>
            </div>
            <a
              href={portaleC2}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#1976D2] font-bold hover:bg-[#1565C0] transition-colors shrink-0"
              style={{ color: '#fff' }}
            >
              Vai al portale C2 Group <Icon icon="ph:arrow-right" style={{ color: '#fff' }} />
            </a>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 mb-0 break-all">
            {portaleC2}
          </p>
        </div>

        <h3 className="text-xl font-bold mb-4">Come acquistare</h3>
        <ol className="space-y-4 mb-6">
          <li className="flex gap-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1976D2] text-white text-sm font-bold">
              1
            </span>
            <span>
              <strong>Registrati</strong> sul portale C2 Group e crea un account (se non ne hai già
              uno).{' '}
              <a
                href="https://www.loom.com/share/cf7618de49c2482783180ad0de6cfdae"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold inline-flex items-center gap-1"
              >
                Guarda il video tutorial <Icon icon="ph:play-circle" className="text-lg" />
              </a>
            </span>
          </li>
          <li className="flex gap-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1976D2] text-white text-sm font-bold">
              2
            </span>
            <span>
              <strong>Naviga la convenzione</strong> Salesiani SFP Don Bosco — San Donà di Piave
              (VE) e scegli i prodotti.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1976D2] text-white text-sm font-bold">
              3
            </span>
            <span>
              <strong>Personalizza</strong> l'ordine indicando il nome dello studente a cui sono
              destinati i prodotti.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1976D2] text-white text-sm font-bold">
              4
            </span>
            <span>
              <strong>Acquista</strong> con il metodo di pagamento preferito (bonifico, carta,
              finanziamento 12 mesi, Carta del Docente, GPay, …).
            </span>
          </li>
        </ol>

        <div className="grid sm:grid-cols-2 gap-5 mb-8">
          <div className="rounded-2xl bg-sky-50 dark:bg-sky-950/20 border-l-4 border-sky-400 p-5">
            <div className="flex items-center gap-2 mb-2">
              <Icon icon="ph:calendar-blank" className="text-xl text-sky-500" />
              <h3 className="font-bold m-0">Consegna</h3>
            </div>
            <p className="text-sm text-sky-900 dark:text-sky-200 m-0">
              Consegna prevista presso la scuola entro il <strong>3 settembre 2026</strong>, secondo
              le modalità definite dall'Istituto.
            </p>
          </div>
          <div className="rounded-2xl bg-white dark:bg-[#181b23] border border-gray-200 dark:border-white/10 shadow-sm p-5">
            <span className="inline-block text-xs font-bold tracking-wide uppercase text-[#1976D2] dark:text-[#64B5F6] bg-[#1976D2]/10 dark:bg-[#64B5F6]/15 px-2.5 py-1 rounded-md mb-3">
              Hai una domanda?
            </span>
            <h3 className="font-bold text-lg mb-2 m-0">Siamo qui per aiutarti</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Per chiarimenti sulla Convenzione o domande sull'acquisto potete contattare
              direttamente il personale dedicato di C2 Group.
            </p>
            <div className="border-t border-gray-200 dark:border-white/10 pt-4 space-y-2 text-sm">
              <p className="m-0">
                <strong>Marco Viacava</strong>
                <span className="text-gray-500 dark:text-gray-400">
                  {' '}
                  · Referente Convenzione · C2 Group
                </span>
              </p>
              <p className="m-0 flex items-center gap-2">
                <Icon icon="ph:phone" className="text-lg text-[#1976D2] dark:text-[#64B5F6]" />
                <a href="tel:+393409710671">340 9710671</a>
              </p>
              <p className="m-0 flex items-center gap-2">
                <Icon icon="ph:envelope" className="text-lg text-[#1976D2] dark:text-[#64B5F6]" />
                <a href="mailto:apple@c2group.it">apple@c2group.it</a>
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href={portaleC2}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1976D2] font-bold hover:bg-[#1565C0] transition-colors"
            style={{ color: '#fff' }}
          >
            Acquista sul portale <Icon icon="ph:arrow-right" style={{ color: '#fff' }} />
          </a>
          <a
            href="https://www.loom.com/share/cf7618de49c2482783180ad0de6cfdae"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#1976D2]/40 dark:border-[#64B5F6]/40 text-[#1976D2] dark:text-[#64B5F6] font-bold hover:bg-[#1976D2]/5 dark:hover:bg-[#64B5F6]/10 transition-colors"
          >
            <Icon icon="ph:play-circle" className="text-xl" />
            Video tutorial registrazione
          </a>
        </div>
      </section>

      {/* Modelli consigliati per chi possiede già un iPad */}
      <section id="modelli" className="max-w-[1100px] mx-auto px-4 md:px-8 mb-20 scroll-mt-28">
        <div className="flex items-center gap-3 mb-4">
          <Icon icon="ph:device-tablet" className="text-3xl text-[#1976D2] dark:text-[#64B5F6]" />
          <h2 className="text-3xl font-bold text-[#1976D2] dark:text-[#64B5F6] m-0">
            Avete già un iPad in famiglia?
          </h2>
        </div>
        <p className="text-lg leading-8 mb-8">
          Se in famiglia è già disponibile un iPad, non è necessario acquistarne uno nuovo — a patto
          che il modello garantisca gli aggiornamenti di iPadOS per l'intera durata del percorso
          scolastico, spazio sufficiente per app e materiali didattici, e piena compatibilità con{' '}
          <strong>Jamf School</strong>, il sistema di gestione e sicurezza utilizzato dalla scuola.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          <div className="rounded-2xl bg-white dark:bg-[#181b23] border border-gray-200 dark:border-white/10 shadow-sm p-6">
            <Icon icon="ph:device-tablet" className="text-3xl text-[#1976D2] dark:text-[#64B5F6] mb-3" />
            <h3 className="font-bold text-lg mb-1">iPad</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              10ª generazione (2022) — almeno 128 GB
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Per chi vuole risparmiare: va benissimo, purché con almeno 128 GB di memoria. È il
              modello minimo idoneo anche se acquistato nuovo da Unieuro.
            </p>
          </div>
          <div className="rounded-2xl bg-white dark:bg-[#181b23] border-2 border-[#1976D2] dark:border-[#64B5F6] shadow-sm p-6 relative">
            <span className="absolute -top-3 left-6 bg-[#1976D2] dark:bg-[#64B5F6] text-white dark:text-[#0d0f14] text-xs font-bold px-3 py-1 rounded-full">
              Consigliato
            </span>
            <Icon icon="ph:device-tablet" className="text-3xl text-[#1976D2] dark:text-[#64B5F6] mb-3" />
            <h3 className="font-bold text-lg mb-1">iPad</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              11ª generazione (2025)
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Il modello base più recente: potenza e autonomia più che sufficienti, riceverà
              aggiornamenti iPadOS ancora per molti anni.
            </p>
          </div>
          <div className="rounded-2xl bg-white dark:bg-[#181b23] border border-gray-200 dark:border-white/10 shadow-sm p-6">
            <Icon icon="ph:device-tablet" className="text-3xl text-[#1976D2] dark:text-[#64B5F6] mb-3" />
            <h3 className="font-bold text-lg mb-1">iPad Air</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">dal 2022 (5ª generazione) in poi</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Ottima scelta se già presente in famiglia: più potente e destinato a restare aggiornato
              più a lungo.
            </p>
          </div>
          <div className="rounded-2xl bg-white dark:bg-[#181b23] border border-gray-200 dark:border-white/10 shadow-sm p-6">
            <Icon icon="ph:device-tablet" className="text-3xl text-[#1976D2] dark:text-[#64B5F6] mb-3" />
            <h3 className="font-bold text-lg mb-1">iPad Pro</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">qualsiasi generazione recente</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Pienamente compatibile con le attività didattiche, anche se non necessario per lo
              svolgimento del programma.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 mb-6">
          <div className="rounded-2xl bg-sky-50 dark:bg-sky-950/20 border-l-4 border-sky-400 p-5">
            <div className="flex items-center gap-2 mb-2">
              <Icon icon="ph:x-circle" className="text-xl text-sky-500" />
              <h3 className="font-bold m-0">Da evitare</h3>
            </div>
            <p className="text-sm text-sky-900 dark:text-sky-200">
              iPad con tasto Home e connettore Lightning (9ª generazione o precedenti) e modelli con
              meno di <strong>128 GB</strong> di memoria: rischiano di non ricevere più aggiornamenti
              iPadOS prima della fine del percorso e di non avere spazio sufficiente per app e
              materiali didattici.
            </p>
          </div>
          <div className="rounded-2xl bg-white dark:bg-[#181b23] border border-gray-200 dark:border-white/10 p-5">
            <div className="flex items-center gap-2 mb-2">
              <Icon icon="ph:hard-drives" className="text-xl text-[#1976D2] dark:text-[#64B5F6]" />
              <h3 className="font-bold m-0">Memoria consigliata</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Indipendentemente dal modello, verificate che il taglio sia di almeno <strong>128 GB</strong>:
              nel tempo si accumulano app didattiche, documenti, video delle lezioni e gli
              aggiornamenti di sistema.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border-l-4 border-sky-400 bg-sky-50 dark:bg-sky-950/20 p-6">
          <div className="flex items-center gap-2 mb-3">
            <Icon icon="ph:lock-key" className="text-xl text-sky-500" />
            <h3 className="font-bold m-0">Importante se riutilizzate un iPad già di famiglia</h3>
          </div>
          <p className="text-sm text-sky-900 dark:text-sky-200 mb-3">
            Prima di consegnare il dispositivo a scuola è necessario <strong>disattivare
            "Dov'è" (Find My)</strong>: l'iPad verrà infatti ripristinato e configurato ex novo
            dall'ufficio tecnico.
          </p>
          <p className="text-sm text-sky-900 dark:text-sky-200 m-0">
            Se "Dov'è" non viene disattivato e non si riesce a risalire alle credenziali dell'Apple
            ID associato, il dispositivo resterà <strong>bloccato dal Blocco Attivazione</strong> del
            precedente proprietario: la scuola non potrà configurarlo, l'iPad non potrà essere
            utilizzato a scuola e quindi <strong>non sarà idoneo</strong>. In caso di dubbi
            contattate l'ufficio tecnico (
            <a href="mailto:assistenza@donboscosandona.it">assistenza@donboscosandona.it</a>) prima
            dell'inizio delle lezioni.
          </p>
        </div>
      </section>

      {/* Chi non aderisce alla convenzione */}
      <section id="non-convenzionato" className="max-w-[900px] mx-auto px-4 md:px-8 mb-20 scroll-mt-28">
        <div className="rounded-2xl bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/40 p-6 md:p-10">
          <div className="flex items-center gap-3 mb-4">
            <Icon icon="ph:info" className="text-3xl text-red-500" />
            <h2 className="text-2xl font-bold text-red-600 dark:text-red-400 m-0">
              Importante
            </h2>
          </div>
          <p className="text-base md:text-lg leading-8 italic text-red-900 dark:text-red-200">
            Per chi non compra dai rivenditori convenzionati elencati sopra, e per chi ha già un iPad, ricordiamo che il dispositivo personale dovrà comunque essere integrato
            nella rete scolastica.
          </p>
          <p className="text-base md:text-lg leading-8 italic text-red-900 dark:text-red-200 mt-4">
            Poiché questa scelta richiede un intervento personalizzato da parte del nostro ufficio
            tecnico (configurazione ex novo del dispositivo, installazione dei software didattici e
            inserimento nel sistema di controllo e sicurezza), <b> è previsto un contributo di €20,00 a
            copertura dei costi di gestione tecnica.</b>
          </p>
          <p className="text-base md:text-lg leading-8 italic text-red-900 dark:text-red-200 mt-4">Ringraziamo per la collaborazione.</p>
        </div>
      </section>

      {/* Accessori consigliati */}
      <section id="accessori" className="max-w-[1100px] mx-auto px-4 md:px-8 mb-20 scroll-mt-28">
        <div className="flex items-center gap-3 mb-4">
          <Icon icon="ph:backpack" className="text-3xl text-[#1976D2] dark:text-[#64B5F6]" />
          <h2 className="text-3xl font-bold text-[#1976D2] dark:text-[#64B5F6] m-0">
            Accessori consigliati
          </h2>
        </div>
        <p className="text-lg leading-8 mb-8">
          Per un utilizzo quotidiano a scuola, oltre al tablet è utile dotarsi di alcuni accessori:
        </p>

        <div className="grid sm:grid-cols-3 gap-5">
          <div className="rounded-2xl bg-white dark:bg-[#181b23] border border-gray-200 dark:border-white/10 shadow-sm p-6">
            <Icon icon="ph:keyboard" className="text-3xl text-[#1976D2] dark:text-[#64B5F6] mb-3" />
            <h3 className="font-bold text-lg mb-1">Cover con tastiera</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Protegge il dispositivo durante il trasporto e permette di scrivere più comodamente
              durante le lezioni.
            </p>
          </div>
          <div className="rounded-2xl bg-white dark:bg-[#181b23] border border-gray-200 dark:border-white/10 shadow-sm p-6">
            <Icon icon="ph:pencil" className="text-3xl text-[#1976D2] dark:text-[#64B5F6] mb-3" />
            <h3 className="font-bold text-lg mb-1">Pencil</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Utile per prendere appunti e disegnare. Non deve essere necessariamente il modello
              Apple originale: va bene anche una pencil compatibile di altri marchi.
            </p>
          </div>
          <div className="rounded-2xl bg-white dark:bg-[#181b23] border border-gray-200 dark:border-white/10 shadow-sm p-6">
            <Icon icon="ph:plug-charging" className="text-3xl text-[#1976D2] dark:text-[#64B5F6] mb-3" />
            <h3 className="font-bold text-lg mb-1">Alimentatore</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Se acquistate un iPad <strong>11ª generazione</strong>, l'alimentatore <strong>non è
              incluso</strong> nella confezione e va acquistato a parte; con l'iPad{' '}
              <strong>10ª generazione</strong> l'alimentatore è invece già compreso.
            </p>
          </div>
        </div>
      </section>

      {/* Serve aiuto? */}
      <section id="contatti" className="max-w-[800px] mx-auto px-4 md:px-8 mb-20 scroll-mt-28 text-center">
        <div className="rounded-2xl bg-white dark:bg-[#181b23] border border-gray-200 dark:border-white/10 shadow-sm p-8 md:p-10">
          <Icon icon="ph:question" className="text-4xl text-[#1976D2] dark:text-[#64B5F6] mb-3" />
          <h2 className="text-2xl font-bold text-[#1976D2] dark:text-[#64B5F6] mb-3">
            Hai bisogno di altre informazioni?
          </h2>
          <p className="text-base md:text-lg leading-8 text-gray-600 dark:text-gray-300">
            Per qualsiasi dubbio sull'acquisto o sulla configurazione dell'iPad,
            scrivete sempre a{' '}
            <a href="mailto:assistenza@donboscosandona.it" className="font-semibold">
              assistenza@donboscosandona.it
            </a>
            .
          </p>
        </div>
      </section>
    </Layout>
  )
}
