import Head from 'next/head'
import {
  Layout,
  LandingHero,
  Products,
  Intro,
  Section,
  Card,
  FeatureCard,
  Callout,
} from '/components'

let products = [
    {
        title: "Configurazione dispositivi",
        category: "",
        description: "Se avete recentemente acquistato un dispositivo, e vi serve aiuto per configurarlo o per passare i dati da un dispositivo all'altro, noi possiamo aiutarvi! ",
        immagineUrl: "/images/assistenza/stampantecute.jpg"
    },
    {
        title: "Sostituzione componenti hardware computer",
        category: "",
        description: "Un computer risulta lento ed obsoleto? Non vi preoccupate, basta mandare una richiesta di assistenza e noi vi porteremo un computer sostituvo con al suo interno ogni applicazione che vi può servire, nel mentre che sistemeremo/cambieremo il computer obsoleto!",
        immagineUrl: "/images/assistenza/comphardware.png"
    },
    {
        title: "Assistenza generale",
        category: "",
        description: "Se vi serve una mano con un dispositivo che dal nulla smette di funzionare o ha qualche funzione disattivata, possiamo aiutarvi! Come ad esempio il collegamento della stampante alla rete wi-fi per la stampa wireless!",
        immagineUrl: "/images/assistenza/assistenza2pc.webp"
    },
    {
        title: "Installazione sistema operativo Computer",
        category: "",
        description: "Se un computer ha bisogno di essere aggiornato, con un nuovo sistema operativo, basta mandare una richiesta di assistenza, e noi, quando avremo tempo libero, verremo a darvi una mano senza esitare! ",
        immagineUrl: "/images/assistenza/installazionesist.png"
    },
    {
        title: "Pulizia Computer",
        category: "",
        description: "Un computer è troppo lento o fa rumore? Mandate una richiesta di assistenza, e noi porteremo un computer sostitutivo nel mentre che puliremo e metteremo apposto il computer!",
        immagineUrl: "/images/assistenza/pulizia.jpg"
    },
    {
        title: "Assistenza iPad",
        category: "",
        description: "Se un iPad ha problemi, o non va qualche funzione che dovrebbe andare, noi arriveremo in vostro soccorso e cercare di darvi una mano al massimo delle nostre possibilità!",
        immagineUrl: "/images/assistenza/assistenzaipad.png"
    },
]

export default function Assistenza() {
  return (
    <Layout>
      <Head>
        <title>Centro Assistenza Informatica | SFP Don Bosco</title>
      </Head>
      <LandingHero
        eyebrow="Settore informatico"
        title="Centro Assistenza Informatica Don Bosco"
        description="Leggi qua per sapere quello che facciamo!!"
        imageUrl="/images/assistenza/assistenzafoto.jpg"
      />

      <Intro title="Benvenuti nella pagina del centro di assistenza informatica della nostra scuola!">
        <p>
          Il nostro centro di assistenza informatica è qui per aiutare gli studenti, i docenti e il
          personale della scuola a risolvere problemi tecnologici e migliorare la loro esperienza di
          utilizzo della tecnologia nella scuola. Siamo specializzati in problemi informatici che
          riguardano l&apos;utilizzo di software, hardware e di reti informatiche.
        </p>
      </Intro>

      <Section width="lg">
        <div className="grid md:grid-cols-2 gap-5">
          <FeatureCard icon="ph:wrench" title="Assistenza in situ">
            Offriamo assistenza in situ per la risoluzione di problemi tecnici, come ad esempio il
            ripristino di un computer, la configurazione di una stampante, la connessione alla rete
            Wi-Fi della scuola e la risoluzione di problemi di connettività.
          </FeatureCard>
          <FeatureCard icon="ph:desktop-tower" title="Supporto remoto">
            Inoltre, offriamo anche supporto remoto per i problemi tecnici che possono essere risolti
            da remoto, come ad esempio l&apos;assistenza nella configurazione di software specifici.
          </FeatureCard>
        </div>
        <div className="prose-site mt-8">
          <p>
            Il nostro personale altamente qualificato e professionale è disponibile per rispondere
            alle tue domande e aiutarti a risolvere qualsiasi problema tecnico che tu possa avere.
            Per ottenere assistenza, puoi visitare il nostro centro di assistenza informatica o
            contattarci tramite telefono o e-mail.
          </p>
          <p>
            Siamo impegnati a fornire un servizio di alta qualità e una risposta tempestiva alle
            richieste di assistenza. Non esitare a contattarci per qualsiasi problema informatico tu
            possa avere. Siamo qui per aiutarti!
          </p>
        </div>
      </Section>

      <Section>
        <Callout tone="brand" icon="ph:device-tablet" title="Assistenza iPad" className="mb-0">
          <p>
            Il nostro centro assistenza per iPad offre tanti servizi per garantire che i dispositivi
            degli studenti funzionino correttamente. Siamo in grado di risolvere problemi di
            connessione Wi-Fi e di configurare le reti in modo che gli studenti possano connettersi
            facilmente alla rete scolastica.
          </p>
          <p className="m-0">
            Inoltre, offriamo anche una gestione remota per i dispositivi degli studenti. Questo
            servizio consente di bloccare gli iPad in modo da impedire l&apos;accesso a determinati
            siti web o applicazioni durante le lezioni, garantendo un ambiente di apprendimento più
            concentrato e mirato.
          </p>
        </Callout>
      </Section>

      <Products title="Ecco alcune delle cose che facciamo:" products={products} cardWidth={4} />

      <Section width="lg">
        <Card className="p-6 md:p-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/assistenza/valutazioni.png"
            alt="Le valutazioni del servizio di assistenza"
            className="mx-auto max-w-full h-auto"
          />
        </Card>
      </Section>
    </Layout>
  )
}
