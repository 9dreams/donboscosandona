import { Layout, Carousel } from '/components';
import { excludeTag } from '/lib/posts'

const activities = [
  {
    title: 'Attività Educative',
    image: 'http://archive.inoratorio.it/img/column/daac7f166a35aed93e13de057b5ee87ec833df60.jpg?1517601159',
    alt: 'Attività 1',
    body: 'Il progetto offre attività di doposcuola e supporto scolastico per studenti dalle scuole elementari alle superiori, inclusi laboratori creativi, gruppi di studio personalizzati e ripetizioni individuali, con obiettivi educativi concordati in fase di iscrizione.',
  },
  {
    title: 'Laboratori Creativi',
    image: 'http://archive.inoratorio.it/img/column/266250e7aafa0a1f4045ae2ead19638761ca2eca.jpg?1517601160',
    alt: 'Attività 2',
    body: 'L’attività si svolge dal lunedì al venerdì, suddividendo il tempo tra compiti, supporto scolastico e attività ludico-ricreative. Gli studenti delle scuole elementari e medie lavorano in gruppi, con supporto individuale limitato a gruppi di studio e ripetizioni.',
  },
  {
    title: 'Supporto Psicologico',
    image: 'http://archive.inoratorio.it/img/column/6a3b075844f340c4d41a6969e1662092c21b2177.jpg?1517601162',
    alt: 'Attività 3',
    body: `Iscrizioni doposcuola mercoledì e venerdì su prenotazione. Completa con appuntamento dal Tutor. Per gruppi studio e ripetizioni, contattare il referente.

Info:
Dr. Andrea Pasqualetto
T: 0421 338 992
C: 391 706 4430
E: campanella@donboscosandona.it`,
  },
]

export default function Home({ data, elementi }) {
  return (
    <Layout>
      <Carousel
        slides={slides}
        height={100}
        animation="slide"
        interval={5000}
        duration={1000}
      />
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="mt-10">
          <h2 className="text-3xl font-bold text-center mb-6">
            Le Nostre Attività
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {activities.map((item) => (
              <article
                key={item.title}
                className="rounded-xl bg-white dark:bg-neutral-900 shadow-md overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-[200px] object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 whitespace-pre-line">
                    {item.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <a
            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2BOScoBnq5AOW8BgaVQzwxaq9kZ6XvH3C_HGV0I3iCNKZqGAiAPWs1XbwbyWh8V7kPMZHVjZc9"
            className="inline-block rounded-lg bg-[var(--brand-blue)] px-5 py-2.5 text-base text-white hover:opacity-90"
          >
            Prenota Ora
          </a>
        </div>

        <div className="mt-8 text-center">
          <img
            src='http://archive.inoratorio.it/img/ck/2850edcef06dff4c46fd4b4c89b93d192aa710a9.png'
            alt="Immagine dopo la campanella"
            className="block mx-auto max-w-full"
          />
        </div>

        <div className="mt-10 mb-16">
          <h2 className="text-3xl font-bold text-center mb-2">
            DOPO LA CAMPANELLA
          </h2>
          <h3 className="text-xl text-center mb-6">
            Il dopo scuola dell&apos;Oratorio don Bosco
          </h3>
          <p className="mb-4 text-justify">
            L’attività di doposcuola nel nostro oratorio affonda le sue radici nel secolo scorso,
            per intuizione di don Alberto e nasce dal desiderio di offrire ai ragazzi un ambiente stimolante
            e accogliente, in cui poter svolgere i propri compiti scolastici e socializzare, confrontandosi
            con coetanei, compagni di classe e adulti. Il progetto quindi racchiude in sé la dimensione didattica,
            educativa, ludica e di sostegno.
          </p>

          <p className="mb-4 text-justify">
            La diffusione del progetto, che conta ogni anno più di 150 iscritti, è stata favorita dal
            contributo del Comune di San Donà di Piave e di altri enti locali limitrofi, come il Comune
            di Musile di Piave e Noventa di Piave.
          </p>

          <p className="mb-4 text-justify">
            Per rendere la proposta educativa e formativa sempre più efficace per i ragazzi, negli anni
            sono state avviate collaborazioni con i servizi territoriali come la Neuropsichiatria Infantile,
            l’Associazione “La Nostra Famiglia” e i servizi di Tutela Minori. Sono operative collaborazioni
            con l’Università di Trieste (sede di Portogruaro), l’Università di Padova e di Venezia.
          </p>

          <p className="mb-4 text-justify">
            I principali destinatari del progetto sono i bambini delle classi 3°- 4° e 5° della scuola primaria
            e gli allievi del triennio della scuola secondaria di primo grado, ma il supporto è aperto anche ai ragazzi
            che frequentano le scuole superiori.
          </p>

          <p className="mb-4 text-justify">
            L’equipe di operatori è multidisciplinare e include educatori, psicologi e pedagogisti, oltre che
            volontari qualificati.
          </p>

          <h4 className="text-lg font-semibold mt-6 mb-2">
            Questi i nostri obiettivi:
          </h4>
          <ul className="list-disc ml-5 mb-4 space-y-1">
            <li>Approcciare lo studio ed il lavoro scolastico individuale in modo positivo e proficuo</li>
            <li>Imparare o migliorare il metodo di studio</li>
            <li>Recuperare le lacune nella preparazione e utilizzare un linguaggio specifico</li>
            <li>Sostenere chi è in difficoltà attraverso i laboratori DSA</li>
            <li>Migliorare l’autostima, la consapevolezza di sé e la socializzazione</li>
          </ul>

          <p className="mb-4 text-justify">
            L’attività si svolge all’interno dell’ambiente salesiano, educativo e gioioso, connotato dal
            metodo preventivo. Il ragazzo è protagonista e viene supportato ed incoraggiato nello svolgimento
            delle attività scolastiche, offrendo opportunità di approfondimento, ma anche la possibilità di
            partecipare ad attività ludico ricreative quali corsi musicali e laboratori espressivi.
          </p>

          <p className="mb-4 text-justify">
            Nell’organizzazione del progetto risulta di fondamentale rilevanza il lavoro in rete, dove
            i nostri operatori si mettono in relazione con la famiglia, prima “agenzia educativa”, veicolo
            di valori e conoscenze, e con gli istituti scolastici, realtà formative nelle quali i ragazzi
            passano molto del loro tempo.
          </p>

          <p className="mb-4 text-justify">
            Importanti sono i momenti di incontro tra gli operatori, per verificare l’efficacia degli
            interventi attuati e ottimizzare i risultati, e con le famiglie, attraverso appuntamenti
            personali o durante gli incontri di verifica previsti nell’anno formativo, invitate ad
            esprimere esigenze e aspettative per elaborare insieme i percorsi educativi più adeguati.
          </p>
        </div>
      </div>
    </Layout>
  );
}



export async function getStaticProps() {
  let res = await fetch(
    'https://channels.donboscosandona.it/api/posts/inoratorio'
  );
  const data = excludeTag(await res.json(), 'screen');

  res = await fetch(
    'https://channels.donboscosandona.it/api/posts/donboscosandona_elements'
  );
  const elementi = await res.json();

  return {
    props: { data, elementi },
    revalidate: 1800, // 30 minuti
  };
}

const slides = [
  {
    titolo: 'In Oratorio',
    descrizione: '',
    immagine: 'https://img.freepik.com/foto-gratuito/compagni-di-classe-borsa-degli-amici-educazione-scolastica_53876-137717.jpg?t=st=1731923108~exp=1731926708~hmac=c1f8df5ca03deb230bbffb0ac59527ebb5800462be7e9b629187a6a24b16aafe&w=1380',
    colore2: 'rgba(100,100,100,0)',
    buttonText: 'Scopri di più!',
  },
  {
    titolo: 'Dopo La campanella',
    descrizione: '',
    immagine: 'https://img.freepik.com/foto-gratuito/tutti-conoscono-la-risposta-giusta_329181-14229.jpg?t=st=1731923170~exp=1731926770~hmac=975702e29cefd4b1894d3bd16c09c8d4edb94efaeb3a5fe1367baa21ed5882b5&w=1380',
    colore2: 'rgba(100,100,100,0)',
  },
]


const servizi = [
  {
    id: 1,
    titolo: 'Personal Trainer',
    immagine: 'https://www.stevensportingclub.it/wp-content/uploads/2023/01/18.jpg',
    abstract: 'Scopri come un personal trainer può aiutarti a raggiungere i tuoi obiettivi di fitness.',
  },
  {
    id: 2,
    titolo: 'Attrezzature all\'avanguardia',
    immagine: 'https://www.fitnessway.it/wp-content/uploads/2022/06/aprire-una-palestra.jpg',
    abstract: 'Utilizziamo attrezzature moderne e sicure per offrirti la migliore esperienza di allenamento possibile.',
  },
  {
    id: 3,
    titolo: 'Professionalità',
    immagine: 'https://www.robur.com/hubfs/referenze-it/ROBUR_referenze_Palestra-futura-Voghera.jpg',
    abstract: 'Il nostro team di esperti è sempre disponibile per guidarti e supportarti in ogni fase del tuo percorso di fitness.',
  },
]

const prodotti = [
  {
    id: 1,
    titolo: 'Manubri',
    immagine: 'https://cdns3.fitfit.fitness/it/media/items/originals/18778-Palestra-New-Genesi-Gym-MlEc1.jpg',
    abstract: 'Acquista manubri di alta qualità per allenarti a casa o in palestra.',
  },
  {
    id: 2,
    titolo: 'Integratori',
    immagine: 'https://www.superpalestra.it/wp-content/uploads/2017/09/integratori-palestra.jpg',
    abstract: 'Scopri la nostra selezione di integratori per supportare la tua dieta e migliorare le performance.',
  },
  {
    id: 3,
    titolo: 'Divise personalizzate',
    immagine: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0HWVOjU-MSeOGtqLxP4ygGib9BObCQYxmNQ&s',
    abstract: 'Scegli la nostra linea di divise personalizzate per sentirti parte del nostro team.',
  },
]
