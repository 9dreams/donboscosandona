import Head from 'next/head'
import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero'
import { NewsWall, QuickNav } from '/components'
import Paragraph from '/components/Paragraph'

const ancore = [
  { href: '#orientamento', label: 'Orientamento' },
  { href: '#servizi-lavoro', label: 'Servizi al lavoro' },
  { href: '#incontro', label: 'Domanda e offerta' },
  { href: '#offerte', label: 'Offerte di lavoro' },
]

export default function Page({ data }) {
  return (
    <Layout>
      <Head />
      <LandingHero
        eyebrow='Orientamento e lavoro'
        title='Servizi al lavoro'
        description="Il nostro sportello è aperto tutti i giorni dalle 10.30 alle 11.30"
        imageUrl='/images/news/2023/sal.JPG'
      />
      <QuickNav links={ancore} />
      <Paragraph id='orientamento' title='Servizi di orientamento'>
        Il Centro è accreditato come sportello orientativo. Presso il Centro si
        svolgono attività di: 1- Orientamento previo visite guidate al Centro su
        richiesta; 2- Orientamento nei percorsi di Formazione Professionale
        iniziale; 3- Orientamento in uscita; 4- Orientamento in collaborazione
        con le scuole del primo e secondo ciclo del territorio. Il CFP collabora
        attivamente con la Federazione CNOS/FAP Veneto che è Ente accreditato
        per lo svolgimento dei servizi al lavoro presso la Regione Veneto.
        Questo servizio ha l’obiettivo di orientare, accompagnare e quindi
        facilitare l’inserimento lavorativo di persone che si trovano in
        condizioni di particolare debolezza nei confronti del mercato del
        lavoro, condizioni che possono trovare origine in fattori di tipo
        psicologico, sociale e/o culturale. L’attività si articola in progetti
        specifici che riguardano: adulti espulsi o a rischio di espulsione dal
        mercato del lavoro; soggetti svantaggiati, over 45, donne, migranti,
        soggetti a rischio di esclusione lavorativa e sociale; persone
        diversamente abili; minori che si trovano in condizione di disagio
        familiare. Attraverso la sua attività questo servizio si propone di:
        favorire I’incontro tra domanda e offerta di lavoro tenendo conto delle
        esigenze di chi si rivolge al nostro servizio; facilitare il processo di
        integrazione sociale e lavorativa delle persone che si trovano in
        difficoltà; collaborare con le attività produttive, istituzionali e di
        aiuto; accrescere il sentimento di autostima dell’utente; aiutare la
        persona che si rivolge al Centro a costruire attivamente la propria
        esistenza; diffondere informazioni su tematiche riguardanti il mercato
        del lavoro; lavorare in rete con strutture pubbliche e private che
        operano in favore dell’orientamento, della riqualificazione e
        dell’inserimento lavorativo. Il CNOS-FAP si avvale di SAL PLESK, sistema
        integrato per gestire l’incontro domanda ed offerta di PerformanSe,
        strumento informatizzato per l’orientamento e la valorizzazione delle
        competenze professionali, finalizzato alla crescita professionale nel
        contesto lavorativo.
      </Paragraph>

      <Paragraph id='servizi-lavoro' title='Servizi al Lavoro'>
        Il Centro collabora attivamente con la Federazione CNOS/FAP Veneto che è
        Ente accreditato per lo svolgimento dei servizi al lavoro presso la
        Regione Veneto. Questo servizio ha l’obiettivo di orientare,
        accompagnare e quindi facilitare l’inserimento lavorativo di persone che
        si trovano in condizioni di particolare debolezza nei confronti del
        mercato del lavoro, condizioni che possono trovare origine in fattori di
        tipo psicologico, sociale e/o culturale. L’attività si articola in
        progetti specifici che riguardano: adulti espulsi o a rischio di
        espulsione dal mercato del lavoro; soggetti svantaggiati, over 45,
        donne, migranti, soggetti a rischio di esclusione lavorativa e sociale;
        persone diversamente abili; minori che si trovano in condizione di
        disagio familiare. Attraverso la sua attività questo servizio si propone
        di: favorire I’incontro tra domanda e offerta di lavoro tenendo conto
        delle esigenze di chi si rivolge al nostro servizio; facilitare il
        processo di integrazione sociale e lavorativa delle persone che si
        trovano in difficoltà; collaborare con le attività produttive,
        istituzionali e di aiuto; accrescere il sentimento di autostima
        dell’utente; aiutare la persona che si rivolge al Centro a costruire
        attivamente la propria esistenza; diffondere informazioni su tematiche
        riguardanti il mercato del lavoro; lavorare in rete con strutture
        pubbliche e private che operano in favore dell’orientamento, della
        riqualificazione e dell’inserimento lavorativo.
      </Paragraph>

      <Paragraph id='incontro' title='Incontro domanda e offerta di lavoro'>
        Il CNOS-FAP si avvale di PerformanSe, strumento informatizzato per l’orientamento e la
        valorizzazione delle competenze professionali, finalizzato alla crescita
        professionale nel contesto lavorativo.
      </Paragraph>
      <div id='offerte' className='scroll-mt-28'>
        <NewsWall title='Offerte di lavoro' eyebrow='Lavoro' data={data} limit={7} />
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch(
    'https://channels.donboscosandona.it/api/posts/donboscosandona?q=job'
  )
  const data = await res.json()

  return {
    props: { data },
    revalidate: 3600, // I dati vengono ricaricati al massimo una volta all'ora
  }
}
