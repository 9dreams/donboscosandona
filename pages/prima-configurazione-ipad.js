import Head from 'next/head'
import { Icon } from '@iconify/react'
import { Layout, LandingHero } from '/components'

// Pagina linkata da Servizi (config servizi.ipad.setup_url): il QR della
// ricevuta e le mail «iPad pronto» / «L'iPad si può attivare» portano qui.
// Diciture delle schermate come in iPadOS 27 (support.apple.com/it-it/105132,
// /104958 e Apple School Manager): «Impostazione Assistita», «Apple Account».

const ancore = [
  { href: '#prima', label: 'Prima di iniziare' },
  { href: '#configurazione', label: 'Configurazione' },
  { href: '#account-scuola', label: 'Account della scuola' },
  { href: '#app', label: 'App della scuola' },
  { href: '#account-personale', label: 'Apple Account personale' },
  { href: '#problemi', label: 'Problemi?' },
]

const passiIniziali = [
  {
    icona: 'ph:power',
    titolo: 'Accendi l\'iPad',
    testo: (
      <>
        Tieni premuto il tasto superiore finché compare il logo Apple. Sulla schermata{' '}
        <strong>«Ciao»</strong> scorri verso l'alto dal bordo inferiore dello schermo.
      </>
    ),
  },
  {
    icona: 'ph:translate',
    titolo: 'Scegli la lingua',
    testo: (
      <>
        Tocca <strong>Italiano</strong>.
      </>
    ),
  },
  {
    icona: 'ph:globe-hemisphere-west',
    titolo: 'Scegli il Paese o la zona',
    testo: (
      <>
        Tocca <strong>Italia</strong>. Se l'iPad ti propone di usare un altro dispositivo
        (<em>Inizia subito</em>), tocca <strong>«Configura senza un altro dispositivo»</strong>;
        se ti chiede le lingue della tastiera e della dettatura, lascia quelle proposte e tocca{' '}
        <strong>«Continua»</strong>.
      </>
    ),
  },
  {
    icona: 'ph:wifi-high',
    titolo: 'Collegati al Wi-Fi',
    testo: (
      <>
        Tocca il nome della rete Wi-Fi di casa e inserisci la sua password. Il Wi-Fi è{' '}
        <strong>indispensabile</strong>: senza connessione l'iPad non può ricevere la
        configurazione della scuola.
      </>
    ),
  },
  {
    icona: 'ph:buildings',
    titolo: 'Gestione remota',
    testo: (
      <>
        Compare la schermata <strong>«Gestione remota»</strong>: l'iPad ti avvisa che verrà
        configurato automaticamente dalla scuola. È tutto normale — è proprio il segno che la
        registrazione è andata a buon fine. Tocca <strong>«Continua»</strong>.
      </>
    ),
  },
]

function Passo({ numero, icona, titolo, children }) {
  return (
    <li className="flex gap-4">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1976D2] text-white font-bold">
        {numero}
      </span>
      <div className="flex-1 rounded-2xl bg-white dark:bg-[#181b23] border border-gray-200 dark:border-white/10 shadow-sm p-5">
        <div className="flex items-center gap-2 mb-2">
          <Icon icon={icona} className="text-2xl text-[#1976D2] dark:text-[#64B5F6]" />
          <h3 className="font-bold text-lg m-0">{titolo}</h3>
        </div>
        <div className="text-base leading-7 text-gray-700 dark:text-gray-300">{children}</div>
      </div>
    </li>
  )
}

function Avviso({ icona = 'ph:warning-circle', children }) {
  return (
    <div className="flex gap-4 items-start rounded-2xl border-l-4 border-amber-400 bg-amber-50 dark:bg-amber-950/30 p-5">
      <Icon icon={icona} className="text-2xl text-amber-500 shrink-0 mt-0.5" />
      <div className="text-sm md:text-base text-amber-900 dark:text-amber-200">{children}</div>
    </div>
  )
}

function Sezione({ id, icona, titolo, children }) {
  return (
    <section id={id} className="max-w-[900px] mx-auto px-4 md:px-8 mb-20 scroll-mt-28">
      <div className="flex items-center gap-3 mb-6">
        <Icon icon={icona} className="text-3xl text-[#1976D2] dark:text-[#64B5F6]" />
        <h2 className="text-3xl font-bold text-[#1976D2] dark:text-[#64B5F6] m-0">{titolo}</h2>
      </div>
      {children}
    </section>
  )
}

export default function PrimaConfigurazioneIpadPage() {
  return (
    <Layout>
      <Head>
        <title>Prima configurazione dell'iPad | SFP Don Bosco</title>
        <meta
          name="description"
          content="Istruzioni passo passo per lo studente che accende per la prima volta l'iPad registrato dalla scuola: lingua, Wi-Fi, account scolastico, app della scuola e Apple Account personale."
        />
      </Head>

      <LandingHero
        title="Il tuo iPad è pronto"
        description="Segui questi passi per accenderlo la prima volta, collegarlo al tuo account della scuola e ricevere le app per le lezioni."
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
        <h1 className="title-display text-4xl md:text-5xl mb-6">Prima configurazione dell'iPad</h1>
        <p className="text-lg leading-8 text-gray-600 dark:text-gray-300">
          Il tuo iPad è stato iscritto ad <strong>Apple School Manager</strong> e viene gestito
          dalla scuola con <strong>Jamf School</strong>. Alla prima accensione si collegherà da solo
          alla scuola: tu dovrai solo scegliere la lingua, collegarti al Wi-Fi ed entrare con il tuo
          account scolastico. Ci vogliono circa <strong>20–30 minuti</strong>.
        </p>
      </div>

      {/* Prima di iniziare */}
      <Sezione id="prima" icona="ph:list-checks" titolo="Prima di iniziare">
        <div className="grid sm:grid-cols-3 gap-5 mb-8">
          <div className="rounded-2xl bg-white dark:bg-[#181b23] border border-gray-200 dark:border-white/10 shadow-sm p-6">
            <Icon icon="ph:user-circle" className="text-3xl text-[#1976D2] dark:text-[#64B5F6] mb-3" />
            <h3 className="font-bold text-lg mb-1">Il tuo nome utente</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 m-0">
              Lo trovi sul <strong>foglio</strong> che ti abbiamo consegnato o nell'<strong>email</strong>{' '}
              di conferma della registrazione. Ha la forma{' '}
              <strong className="break-all">m.rossi@donboscosandona.it</strong>.
            </p>
          </div>
          <div className="rounded-2xl bg-white dark:bg-[#181b23] border border-gray-200 dark:border-white/10 shadow-sm p-6">
            <Icon icon="ph:key" className="text-3xl text-[#1976D2] dark:text-[#64B5F6] mb-3" />
            <h3 className="font-bold text-lg mb-1">La password iniziale</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 m-0">
              Al primo accesso la password è <strong>benvenuto</strong> (tutto minuscolo). Subito
              dopo ti verrà chiesto di sceglierne una nuova.
            </p>
          </div>
          <div className="rounded-2xl bg-white dark:bg-[#181b23] border border-gray-200 dark:border-white/10 shadow-sm p-6">
            <Icon icon="ph:battery-charging" className="text-3xl text-[#1976D2] dark:text-[#64B5F6] mb-3" />
            <h3 className="font-bold text-lg mb-1">Wi-Fi e carica</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 m-0">
              Tieni a portata di mano la <strong>password del Wi-Fi</strong> di casa e lascia
              l'iPad <strong>collegato al caricatore</strong> per tutta la configurazione.
            </p>
          </div>
        </div>

        <Avviso icona="ph:info">
          <p className="m-0">
            Le credenziali della scuola sono un <strong>account Google</strong> del dominio{' '}
            <strong>@donboscosandona.it</strong>: lo stesso nome utente e la stessa password
            servono per l'iPad, per l'Apple Account della scuola e per tutti i servizi Google
            (Classroom, Gmail, Drive).
          </p>
        </Avviso>
      </Sezione>

      {/* Impostazione Assistita */}
      <Sezione id="configurazione" icona="ph:device-tablet" titolo="Accensione e prime schermate">
        <p className="text-lg leading-8 mb-8">
          Alla prima accensione parte l'<strong>Impostazione Assistita</strong> di Apple. Segui le
          schermate in questo ordine:
        </p>
        <ol className="space-y-5 list-none p-0 m-0">
          {passiIniziali.map((p, i) => (
            <Passo key={p.titolo} numero={i + 1} icona={p.icona} titolo={p.titolo}>
              {p.testo}
            </Passo>
          ))}
        </ol>
      </Sezione>

      {/* Account della scuola */}
      <Sezione id="account-scuola" icona="ph:identification-card" titolo="Entra con l'account della scuola">
        <ol className="space-y-5 list-none p-0 m-0 mb-8">
          <Passo numero={6} icona="ph:sign-in" titolo="Accedi con Google">
            <p className="mt-0">
              Jamf School ti chiede di autenticarti: si apre la pagina di accesso di{' '}
              <strong>Google</strong>.
            </p>
            <ul className="list-disc pl-5 space-y-1 mb-0">
              <li>
                scrivi il tuo nome utente completo, per esempio{' '}
                <strong className="break-all">m.rossi@donboscosandona.it</strong>, e tocca{' '}
                <strong>Avanti</strong>;
              </li>
              <li>
                inserisci la password <strong>benvenuto</strong> e tocca <strong>Avanti</strong>.
              </li>
            </ul>
          </Passo>
          <Passo numero={7} icona="ph:password" titolo="Scegli la tua nuova password">
            <p className="mt-0">
              Al primo accesso Google ti chiede di <strong>cambiare la password</strong>: scrivila
              due volte e conferma. Da qui in poi userai sempre questa.
            </p>
            <p className="mb-0 text-sm text-gray-500 dark:text-gray-400">
              Scegli una password di almeno 8 caratteri che non usi altrove, e non dirla a nessuno.
              Se la dimentichi, scrivi all'assistenza (vedi in fondo alla pagina).
            </p>
          </Passo>
          <Passo numero={8} icona="ph:apple-logo" titolo="Accedi all'Apple Account della scuola">
            <p className="mt-0">
              Subito dopo l'iPad ti chiede di accedere con un <strong>Apple Account</strong>. Usa{' '}
              <strong>le stesse credenziali</strong>: scrivi il tuo indirizzo{' '}
              <strong className="break-all">@donboscosandona.it</strong>, verrai portato di nuovo
              alla pagina di Google e lì inserisci la <strong>nuova password</strong> che hai appena
              scelto.
            </p>
            <p className="mb-0 text-sm text-gray-500 dark:text-gray-400">
              Non usare qui il tuo Apple Account personale: lo potrai aggiungere alla fine.
            </p>
          </Passo>
          <Passo numero={9} icona="ph:sliders-horizontal" titolo="Le ultime schermate">
            <p className="m-0">
              Potrebbero comparire altre schermate, per esempio <strong>Codice</strong> (scegli un
              codice di 6 cifre per sbloccare l'iPad e ricordalo), <strong>Touch ID</strong> o{' '}
              <strong>Face ID</strong>, <strong>Aspetto</strong> o <strong>Dati e privacy</strong>.
              Leggi e tocca <strong>«Continua»</strong>: alla fine compare la schermata Home.
            </p>
          </Passo>
        </ol>
      </Sezione>

      {/* App della scuola */}
      <Sezione id="app" icona="ph:download-simple" titolo="Arrivano le app della scuola">
        <ol className="space-y-5 list-none p-0 m-0 mb-8">
          <Passo numero={10} icona="ph:hourglass-medium" titolo="Aspetta che finisca">
            <p className="mt-0">
              Appena compare la schermata Home, l'iPad inizia a scaricare da solo le{' '}
              <strong>app della scuola</strong>: le icone compaiono una alla volta, prima grigie e
              poi colorate. Possono servire diversi minuti.
            </p>
            <p className="mb-0">
              Durante questa fase <strong>lascia l'iPad acceso, sotto carica e collegato al
              Wi-Fi</strong>, e non toccare le impostazioni.
            </p>
          </Passo>
        </ol>
        <Avviso>
          <p className="m-0">
            <strong>Non ripristinare e non inizializzare mai l'iPad</strong> da solo: rimarrebbe
            comunque legato alla scuola e dovresti rifare tutta la configurazione. Se qualcosa non
            va, chiedi prima all'assistenza.
          </p>
        </Avviso>
      </Sezione>

      {/* Apple Account personale */}
      <Sezione id="account-personale" icona="ph:user-switch" titolo="Usa il tuo Apple Account personale">
        <p className="text-lg leading-8 mb-8">
          L'Apple Account della scuola non permette di scaricare app dall'App Store. Quando tutte
          le app della scuola sono installate, puoi sostituirlo con il tuo Apple Account personale
          (quello che usi per esempio sull'iPhone) e scaricare le app che vuoi.
        </p>
        <ol className="space-y-5 list-none p-0 m-0 mb-8">
          <Passo numero={11} icona="ph:sign-out" titolo="Esci dall'Apple Account della scuola">
            <ol className="list-decimal pl-5 space-y-1 m-0">
              <li>
                Apri <strong>Impostazioni</strong> e tocca il tuo nome, in alto nella colonna di
                sinistra.
              </li>
              <li>
                Scorri fino in fondo e tocca <strong>«Esci»</strong>.
              </li>
              <li>
                Se ti viene chiesto, scegli <strong>«Disconnetti ma non inizializzare»</strong> e
                inserisci il codice dell'iPad.
              </li>
            </ol>
            <p className="mb-0 mt-3 text-sm text-gray-500 dark:text-gray-400">
              Attenzione: non scegliere mai «Inizializza questo iPad».
            </p>
          </Passo>
          <Passo numero={12} icona="ph:sign-in" titolo="Entra con il tuo Apple Account">
            <ol className="list-decimal pl-5 space-y-1 m-0">
              <li>
                In <strong>Impostazioni</strong> tocca <strong>«Apple Account»</strong>, in alto a
                sinistra.
              </li>
              <li>
                Tocca <strong>«Accedi manualmente»</strong> e inserisci email e password del tuo
                Apple Account personale.
              </li>
            </ol>
            <p className="mb-0 mt-3 text-sm text-gray-500 dark:text-gray-400">
              Se non hai ancora un Apple Account, puoi crearlo dalla stessa schermata. Per chi ha
              meno di 14 anni l'account va creato da un genitore con In famiglia.
            </p>
          </Passo>
          <Passo numero={13} icona="ph:confetti" titolo="Goditi il tuo nuovo iPad">
            <p className="m-0">
              Ora puoi installare altre app dall'<strong>App Store</strong>. Le app della scuola
              restano sull'iPad e continuano ad aggiornarsi da sole. Le app per le lezioni, come
              Classroom, si usano con il tuo account <strong>@donboscosandona.it</strong>.
            </p>
          </Passo>
        </ol>
        <Avviso icona="ph:info">
          <p className="m-0">
            Alcune app o impostazioni potrebbero non essere disponibili, o essere bloccate durante
            l'orario scolastico: è la gestione della scuola tramite Jamf School, che serve a
            proteggere te e l'iPad.
          </p>
        </Avviso>
      </Sezione>

      {/* Problemi frequenti */}
      <Sezione id="problemi" icona="ph:lifebuoy" titolo="Qualcosa non va?">
        <div className="space-y-4">
          <div className="rounded-2xl bg-white dark:bg-[#181b23] border border-gray-200 dark:border-white/10 shadow-sm p-6">
            <h3 className="font-bold text-lg mb-2">Non compare la schermata «Gestione remota»</h3>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 m-0">
              L'iPad non risulta ancora iscritto alla scuola. Non andare avanti con la
              configurazione: spegnilo e scrivi all'assistenza indicando il nome dello studente.
            </p>
          </div>
          <div className="rounded-2xl bg-white dark:bg-[#181b23] border border-gray-200 dark:border-white/10 shadow-sm p-6">
            <h3 className="font-bold text-lg mb-2">La password «benvenuto» non funziona</h3>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 m-0">
              Controlla di aver scritto il nome utente completo, con{' '}
              <strong>@donboscosandona.it</strong>, e la password tutta in minuscolo. Se hai già
              cambiato la password in precedenza (per esempio su Classroom), usa quella nuova.
            </p>
          </div>
          <div className="rounded-2xl bg-white dark:bg-[#181b23] border border-gray-200 dark:border-white/10 shadow-sm p-6">
            <h3 className="font-bold text-lg mb-2">Le app non arrivano</h3>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 m-0">
              Verifica che l'iPad sia collegato al Wi-Fi e sotto carica, poi aspetta ancora
              qualche minuto. Se dopo un'ora mancano ancora, riavvia l'iPad; se il problema resta,
              scrivi all'assistenza.
            </p>
          </div>
        </div>
      </Sezione>

      {/* Serve aiuto? */}
      <section id="contatti" className="max-w-[800px] mx-auto px-4 md:px-8 mb-20 scroll-mt-28 text-center">
        <div className="rounded-2xl bg-white dark:bg-[#181b23] border border-gray-200 dark:border-white/10 shadow-sm p-8 md:p-10">
          <Icon icon="ph:question" className="text-4xl text-[#1976D2] dark:text-[#64B5F6] mb-3" />
          <h2 className="text-2xl font-bold text-[#1976D2] dark:text-[#64B5F6] mb-3">
            Hai bisogno di aiuto?
          </h2>
          <p className="text-base md:text-lg leading-8 text-gray-600 dark:text-gray-300">
            Scrivi a{' '}
            <a href="mailto:assistenza@donboscosandona.it" className="font-semibold">
              assistenza@donboscosandona.it
            </a>{' '}
            indicando nome, cognome e classe dello studente e, se puoi, una foto della schermata in
            cui ti sei fermato.
          </p>
        </div>
      </section>
    </Layout>
  )
}
