import Head from 'next/head'
import { Icon } from '@iconify/react'
import {
  Layout,
  LandingHero,
  Table,
  QuickNav,
  Intro,
  Section,
  SectionTitle,
  Card,
  FeatureCard,
  Steps,
  IconList,
  Callout,
  Button,
  Eyebrow,
  HelpBox,
  ContactLine,
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

const portaleEnroll = 'https://servizi.donboscosandona.it/enroll'

const ancore = [
  { href: '#registrazione', label: 'Registrazione iPad' },
  { href: '#unieuro', label: 'Unieuro' },
  { href: '#sme', label: 'SME' },
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
        eyebrow="Per le famiglie"
        title="iPad a scuola"
        description="Il tablet è lo strumento didattico scelto dalla Scuola: la famiglia lo acquista in autonomia, tramite i fornitori convenzionati oppure un canale personale."
        imageUrl="/images/iPad.png"
        mobileObjectPosition="right"
      />

      {/* Navigazione rapida tra le sezioni */}
      <QuickNav links={ancore} />

      {/* Introduzione */}
      <Intro title="Uno strumento personale, una scelta condivisa">
        <p>
          L'iPad è il dispositivo digitale che gli studenti utilizzano quotidianamente in classe: è
          integrato nella rete didattica dell'Istituto e gestito tramite <strong>Jamf School</strong>,
          il sistema di sicurezza e controllo con cui la scuola configura i tablet e installa il
          materiale didattico.
        </p>
        <p>
          Il modello richiesto è indicato dalla Scuola, ma <strong>l'acquisto resta a carico della
          famiglia</strong>, libera di scegliere come procedere. In questa pagina trovate l'elenco dei{' '}
          <strong>fornitori convenzionati</strong> con l'Istituto e tutte le indicazioni pratiche per
          completare l'acquisto correttamente.
        </p>
      </Intro>

      {/* Registrazione dell'iPad (enrollment) — obbligatoria per tutti */}
      <Section id="registrazione">
        <Card highlight className="p-6 md:p-10">
          <SectionTitle icon="ph:clipboard-text">Registrazione dell'iPad: obbligatoria per tutti</SectionTitle>
          <p className="font-serif text-xl leading-relaxed mb-6">
            Qualunque sia il modo in cui avete acquistato l'iPad — da un rivenditore convenzionato,
            in un altro negozio o perché ne avevate già uno in famiglia — <strong>prima di
            iniziare a usarlo dovete registrarlo</strong> con il modulo online della scuola. È il
            passaggio con cui l'iPad viene iscritto ad <strong>Apple School Manager</strong> e
            associato all'account scolastico dello studente: senza registrazione il dispositivo non
            può essere configurato e non potrà essere usato a scuola.
          </p>

          <Callout tone="warning">
            <p className="m-0">
              <strong>Non accendete e non configurate l'iPad appena acquistato</strong> finché la
              scuola non vi scrive che è pronto: se lo attivate prima che sia iscritto, va
              ripristinato e la configurazione ricomincia da capo.
            </p>
          </Callout>

          <h3 className="text-xl font-bold mb-4">Come funziona</h3>
          <Steps
            className="mb-8"
            items={[
              <>
                <strong>Compilate il modulo</strong> con i dati dello studente e indicate dove avete
                acquistato l'iPad: il modulo vi chiede solo quello che serve per il vostro caso.
              </>,
              <>
                <strong>Rivenditore convenzionato</strong> (Unieuro, MrDigital, C2 Group): l'iPad
                viene iscritto a distanza. Quando è tutto pronto riceverete un'email con il nome
                utente, la password iniziale e le istruzioni per accenderlo a casa.
              </>,
              <>
                <strong>Altro negozio o iPad già in famiglia</strong>: scegliete nel modulo un
                appuntamento per portare l'iPad a scuola. Lo configura l'ufficio tecnico e vi
                avvisiamo via email quando potete ritirarlo.
              </>,
            ]}
          />

          <Button href={portaleEnroll}>
            Registra l'iPad
          </Button>
          <p className="text-xs text-muted mt-4 mb-6 break-all">
            {portaleEnroll}
          </p>
          <p className="text-base m-0">
            Avete già ricevuto l'email che l'iPad è pronto?{' '}
            <a href="/prima-configurazione-ipad" className="font-semibold inline-flex items-center gap-1">
              Istruzioni per la prima configurazione <Icon icon="ph:arrow-right" />
            </a>
          </p>
        </Card>
      </Section>

      {/* Unieuro */}
      <Section id="unieuro">
        <SectionTitle icon="ph:storefront">Unieuro</SectionTitle>
        <p className="font-serif text-xl leading-relaxed mb-6">
          Tutti i <strong>punti vendita diretti Unieuro</strong> sono convenzionati con la Scuola per
          l'acquisto dell'iPad. L'acquisto avviene direttamente in negozio e la consegna del
          dispositivo è immediata.
        </p>

        <Callout tone="warning">
          <p className="m-0">
            <strong>Attenzione:</strong> i negozi <strong>Unieuro City</strong> — i punti vendita di
            piccolo formato, spesso in franchising, presenti nei centri storici — <strong>non sono
            inclusi</strong> nella convenzione. Prima di recarvi in negozio verificate che si tratti di
            un punto vendita <strong>Unieuro</strong> e non Unieuro City: in caso di dubbio contattate
            l'ufficio tecnico della scuola.
          </p>
        </Callout>

        <h3 className="text-xl font-bold mb-4">Quale modello scegliere</h3>
        <div className="grid sm:grid-cols-2 gap-5 mb-10">
          <FeatureCard icon="ph:device-tablet" title="iPad" meta="10ª generazione — almeno 128 GB">
            Per chi vuole risparmiare: va benissimo, purché con almeno 128 GB di memoria.
          </FeatureCard>
          <FeatureCard icon="ph:device-tablet" title="iPad" meta="11ª generazione" highlight badge="Consigliato">
            Il modello base più recente: potenza e autonomia più che sufficienti, riceverà
            aggiornamenti iPadOS ancora per molti anni.
          </FeatureCard>
        </div>

        <Table
          title="Negozi Unieuro convenzionati"
          subtitle="Punti vendita diretti più vicini a San Donà di Piave"
          rows={negoziUnieuro}
          flush
        />
        <p className="text-xs text-muted -mt-4 mb-10 px-2">
          Elenco basato sui punti vendita diretti pubblicati da Unieuro S.p.A. (esclusi i negozi in
          franchising Unieuro City), tra i più vicini a San Donà di Piave. Verificate orari e
          disponibilità sul sito{' '}
          <a href="https://www.unieuro.it" target="_blank" rel="noopener noreferrer">
            unieuro.it
          </a>{' '}
          prima di recarvi in negozio.
        </p>

        <Card className="p-6 md:p-8">
          <h3 className="text-xl font-bold mb-4">Dopo l'acquisto</h3>
          <IconList
            items={[
              { icon: 'ph:receipt', children: <>Conservate lo scontrino o la fattura d'acquisto.</> },
              {
                icon: 'ph:prohibit',
                children: (
                  <>
                    <strong>Non accendete l'iPad</strong>: verrà configurato dalla scuola al primo avvio.
                  </>
                ),
              },
              {
                icon: 'ph:camera',
                children: (
                  <>
                    Fotografate l'etichetta della <strong>scatola</strong> (con il numero di serie) e lo{' '}
                    <strong>scontrino</strong>, senza accendere il dispositivo.
                  </>
                ),
              },
              {
                icon: 'ph:clipboard-text',
                children: (
                  <>
                    <a href="#registrazione" className="font-semibold">
                      Registrate l'iPad
                    </a>{' '}
                    con il{' '}
                    <a href={portaleEnroll} target="_blank" rel="noopener noreferrer" className="font-semibold">
                      modulo online
                    </a>
                    : vi chiederà numero di serie, codice articolo, dati dello scontrino e le due foto.
                  </>
                ),
              },
            ]}
          />
        </Card>
      </Section>

      {/* SME */}
      <Section id="sme">
        <SectionTitle icon="ph:storefront">SME</SectionTitle>
        <p className="font-serif text-xl leading-relaxed mb-0">
          I punti vendita SME al momento non sono convenzionati con la nostra scuola.
        </p>
      </Section>

      {/* MrDigital */}
      <Section id="mrdigital">
        <SectionTitle icon="ph:truck">MrDigital — acquisto o noleggio</SectionTitle>
        <p className="font-serif text-xl leading-relaxed mb-6">
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
          <FeatureCard icon="ph:shopping-bag" title="Acquisto diretto">
            L'iPad diventa di proprietà della famiglia fin da subito.
          </FeatureCard>
          <FeatureCard icon="ph:arrows-clockwise" title="Noleggio">
            Formula a canone periodico, utile per diluire la spesa nel tempo.
          </FeatureCard>
        </div>

        <p className="font-serif text-xl leading-relaxed mb-6">
          A differenza di Unieuro — dove il dispositivo viene consegnato direttamente a voi — gli
          iPad ordinati tramite MrDigital vengono <strong>consegnati direttamente a scuola</strong>,
          dove verranno preparati e distribuiti agli studenti.
        </p>

        <Button href="https://donboscosandona.mrdigital.it/">
          Vai al portale MrDigital
        </Button>
      </Section>

      {/* C2 Group */}
      <Section id="c2group">
        <SectionTitle icon="ph:handshake">C2 Group — Convenzione Scuola</SectionTitle>
        <p className="font-serif text-xl leading-relaxed mb-6">
          Per l'anno scolastico 2026 è attiva anche la convenzione con{' '}
          <strong>C2 Group</strong>, partner dell'Istituto per la fornitura di tecnologia
          didattica. Le famiglie acquistano direttamente dal portale dedicato; i prodotti in
          convenzione sono predisposti per integrarsi con le piattaforme utilizzate a scuola.
        </p>

        <Card className="p-6 md:p-8 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2 m-0">Portale di acquisto</h3>
              <p className="text-sm text-muted m-0">
                Registrazione, catalogo prodotti e ordine online sul sito C2 Group.
              </p>
            </div>
            <Button href={portaleC2} className="shrink-0">
              Vai al portale C2 Group
            </Button>
          </div>
          <p className="text-xs text-muted mt-4 mb-0 break-all">
            {portaleC2}
          </p>
        </Card>

        <h3 className="text-xl font-bold mb-4">Come acquistare</h3>
        <Steps
          className="mb-6"
          items={[
            <>
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
            </>,
            <>
              <strong>Naviga la convenzione</strong> Salesiani SFP Don Bosco — San Donà di Piave
              (VE) e scegli i prodotti.
            </>,
            <>
              <strong>Personalizza</strong> l'ordine indicando il nome dello studente a cui sono
              destinati i prodotti.
            </>,
            <>
              <strong>Acquista</strong> con il metodo di pagamento preferito (bonifico, carta,
              finanziamento 12 mesi, Carta del Docente, GPay, …).
            </>,
          ]}
        />

        <div className="grid sm:grid-cols-2 gap-5 mb-8">
          <Callout tone="info" icon="ph:calendar-blank" title="Consegna" className="mb-0">
            <p className="m-0">
              Consegna prevista presso la scuola entro il <strong>3 settembre 2026</strong>, secondo
              le modalità definite dall'Istituto.
            </p>
          </Callout>
          <Card className="p-5">
            <Eyebrow className="mb-3">Hai una domanda?</Eyebrow>
            <h3 className="font-bold text-lg mb-2 m-0">Siamo qui per aiutarti</h3>
            <p className="text-sm text-muted mb-4">
              Per chiarimenti sulla Convenzione o domande sull'acquisto potete contattare
              direttamente il personale dedicato di C2 Group.
            </p>
            <div className="border-t border-line pt-4 space-y-2 text-sm">
              <p className="m-0">
                <strong>Marco Viacava</strong>
                <span className="text-muted">
                  {' '}
                  · Referente Convenzione · C2 Group
                </span>
              </p>
              <ContactLine icon="ph:phone" href="tel:+393409710671">340 9710671</ContactLine>
              <ContactLine icon="ph:envelope" href="mailto:apple@c2group.it">apple@c2group.it</ContactLine>
            </div>
          </Card>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button href={portaleC2}>
            Acquista sul portale
          </Button>
          <Button href="https://www.loom.com/share/cf7618de49c2482783180ad0de6cfdae" variant="outline" iconLeft="ph:play-circle">
            Video tutorial registrazione
          </Button>
        </div>
      </Section>

      {/* Modelli consigliati per chi possiede già un iPad */}
      <Section id="modelli" width="lg">
        <SectionTitle icon="ph:device-tablet">Avete già un iPad in famiglia?</SectionTitle>
        <p className="font-serif text-xl leading-relaxed mb-8">
          Se in famiglia è già disponibile un iPad, non è necessario acquistarne uno nuovo — a patto
          che il modello garantisca gli aggiornamenti di iPadOS per l'intera durata del percorso
          scolastico, spazio sufficiente per app e materiali didattici, e piena compatibilità con{' '}
          <strong>Jamf School</strong>, il sistema di gestione e sicurezza utilizzato dalla scuola.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          <FeatureCard icon="ph:device-tablet" title="iPad" meta="10ª generazione (2022) — almeno 128 GB">
            Per chi vuole risparmiare: va benissimo, purché con almeno 128 GB di memoria. È il
            modello minimo idoneo anche se acquistato nuovo da Unieuro.
          </FeatureCard>
          <FeatureCard icon="ph:device-tablet" title="iPad" meta="11ª generazione (2025)" highlight badge="Consigliato">
            Il modello base più recente: potenza e autonomia più che sufficienti, riceverà
            aggiornamenti iPadOS ancora per molti anni.
          </FeatureCard>
          <FeatureCard icon="ph:device-tablet" title="iPad Air" meta="dal 2022 (5ª generazione) in poi">
            Ottima scelta se già presente in famiglia: più potente e destinato a restare aggiornato
            più a lungo.
          </FeatureCard>
          <FeatureCard icon="ph:device-tablet" title="iPad Pro" meta="qualsiasi generazione recente">
            Pienamente compatibile con le attività didattiche, anche se non necessario per lo
            svolgimento del programma.
          </FeatureCard>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 mb-6">
          <Callout tone="warning" icon="ph:x-circle" title="Da evitare" className="mb-0">
            <p className="m-0">
              iPad con tasto Home e connettore Lightning (9ª generazione o precedenti) e modelli con
              meno di <strong>128 GB</strong> di memoria: rischiano di non ricevere più aggiornamenti
              iPadOS prima della fine del percorso e di non avere spazio sufficiente per app e
              materiali didattici.
            </p>
          </Callout>
          <Callout tone="brand" icon="ph:hard-drives" title="Memoria consigliata" className="mb-0">
            <p className="m-0">
              Indipendentemente dal modello, verificate che il taglio sia di almeno <strong>128 GB</strong>:
              nel tempo si accumulano app didattiche, documenti, video delle lezioni e gli
              aggiornamenti di sistema.
            </p>
          </Callout>
        </div>

        <Callout tone="warning" icon="ph:lock-key" title="Importante se riutilizzate un iPad già di famiglia" className="mb-0">
          <p>
            Prima di consegnare il dispositivo a scuola è necessario <strong>disattivare
            "Dov'è" (Find My)</strong>: l'iPad verrà infatti ripristinato e configurato ex novo
            dall'ufficio tecnico.
          </p>
          <p className="m-0">
            Se "Dov'è" non viene disattivato e non si riesce a risalire alle credenziali dell'Apple
            ID associato, il dispositivo resterà <strong>bloccato dal Blocco Attivazione</strong> del
            precedente proprietario: la scuola non potrà configurarlo, l'iPad non potrà essere
            utilizzato a scuola e quindi <strong>non sarà idoneo</strong>. In caso di dubbi
            contattate l'ufficio tecnico (
            <a href="mailto:assistenza@donboscosandona.it">assistenza@donboscosandona.it</a>) prima
            dell'inizio delle lezioni.
          </p>
        </Callout>
      </Section>

      {/* Chi non aderisce alla convenzione */}
      <Section id="non-convenzionato" width="max-w-[900px]">
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
      </Section>

      {/* Accessori consigliati */}
      <Section id="accessori" width="lg">
        <SectionTitle icon="ph:backpack">Accessori consigliati</SectionTitle>
        <p className="font-serif text-xl leading-relaxed mb-8">
          Per un utilizzo quotidiano a scuola, oltre al tablet è utile dotarsi di alcuni accessori:
        </p>

        <div className="grid sm:grid-cols-3 gap-5">
          <FeatureCard icon="ph:keyboard" title="Cover con tastiera">
            Protegge il dispositivo durante il trasporto e permette di scrivere più comodamente
            durante le lezioni.
          </FeatureCard>
          <FeatureCard icon="ph:pencil" title="Pencil">
            Utile per prendere appunti e disegnare. Non deve essere necessariamente il modello
            Apple originale: va bene anche una pencil compatibile di altri marchi.
          </FeatureCard>
          <FeatureCard icon="ph:plug-charging" title="Alimentatore">
            Se acquistate un iPad <strong>11ª generazione</strong>, l'alimentatore <strong>non è
            incluso</strong> nella confezione e va acquistato a parte; con l'iPad{' '}
            <strong>10ª generazione</strong> l'alimentatore è invece già compreso.
          </FeatureCard>
        </div>
      </Section>

      {/* Serve aiuto? */}
      <div id="contatti" className="scroll-mt-28">
        <HelpBox>
          Per qualsiasi dubbio sull'acquisto o sulla configurazione dell'iPad,
          scrivete sempre a{' '}
          <a href="mailto:assistenza@donboscosandona.it" className="font-semibold">
            assistenza@donboscosandona.it
          </a>
          .
        </HelpBox>
      </div>
    </Layout>
  )
}
