import Head from 'next/head'
import Container from '@mui/material/Container'

import {
  Layout,
  LandingHero,
  Products,
  SwiperNews,
  Paragraph,
  Sponsor,
  Table,
} from '/components'

export default function Home({ data }) {
  return (
    <Layout>
      <Head />
      <Container maxWidth="xl">
        <img src="/images/settori/Automotive2.png" />
      </Container>
      <Paragraph
        title="Operatore Alla autoriparazione"
        subtitle="Qualifica triennale"
        rightImageUrl="/images/codici_progetti.png"
      >
        L'operatore automotive interviene, a livello esecutivo, nei processi di riparazione
meccanica, elettronica, di carrozzeria del veicolo con autonomia e responsabilità limitate
che prevedono le procedure e le metodiche della sua operatività. La qualificazione
nell'applicazione/utilizzo di metodologie di base sempre in un percorso crescente, di
strumenti e di informazioni gli consente di svolgere attività relative alle riparazioni
ordinarie e straordinarie degli autoveicoli, con competenze nell'approntamento delle
attrezzature, di controllo e verifica di conformità delle lavorazioni assegnate, proprie della
autoriparazione.
        <h3>Competenze sviluppate nel corso dei tre anni:</h3>
        <ol>
          <li> Sostituzioni di componenti di usura del veicolo</li>
          <li>Interventi di manutenzione ordinaria e straordinaria del veicolo</li>
          <li>Diagnosi dirette nelle reti Can e indirette sui fumi di scarico</li>
          <li>
          Lavorazioni di carrozzeria, spot repair, adas
          </li>
          <li>
          Revisione veicolo, veicolo ibrido
          </li>
        </ol>
      </Paragraph>
      <Paragraph
        title="Tecnico Automotive"
        subtitle="Diploma Professionale Quadriennale in
Sistema Duale con indirizzo riparatore veicoli
a motore"
      >
        Il Tecnico automotive interviene con autonomia, nel quadro di azione stabilito e delle
specifiche assegnate, contribuendo - in rapporto ai diversi ambiti di esercizio al
presidio del processo di ciclo aziendale, dall’accettazione alla capacità riparativa, ai
preventivi di riparazione, ai processi di marketing, ai processi di revisione dei veicoli e
attraverso la partecipazione all'individuazione delle risorse strumentali e tecnologiche più
idonee, Collabora nell'organizzazione operativa delle lavorazioni e la valutazione del
risultato. Possiede competenze funzionali - in rapporto ai diversi indirizzi - alla
produzione di documentazione tecnica, di manutenzione.
Competenze del tecnico meccanico:
        <ol>
          <h3>Competenze del tecnico meccanico</h3>
          <li>
          Operare in sicurezza e nel rispetto delle norme di igiene e di salvaguardia ambientale,
          identificando e prevenendo situazioni di rischio per sé, per gli altri e per l'ambiente
          </li>
          <li>
          Provvedere in modo dinamico al ciclo di officina effettuando lavorazioni con
strumentazione specifica di settore e producendo documentazione tecnica di
avanzamento e valutazione relativa alle lavorazioni svolte ed interazione con il cliente.
          </li>
        </ol>
        <br>
        </br>
        <br>
        </br>
        <h1>Il percorso di formazione nel settore automotive prevede lo sviluppo di conoscenze crescenti negli anni nei quattro ambiti che compongono il veicolo: Elettrico, elettronico, meccanico e carrozzeria</h1>
      </Paragraph>
      <Products
              title="Primo anno"
              description=""
              cardWidth={4}
              cardWidthXs={6}
              products={primo_anno}
            />
            <Products
              title="Secondo anno"
              description=""
              cardWidth={3}
              cardWidthXs={6}
              products={secondo_anno}
            />
            <Products
              title="Terzo anno"
              description=""
              cardWidth={3}
              cardWidthXs={6}
              products={terzo_anno}
            />
            <Products
              title="Quarto anno"
              description=""
              cardWidth={4}
              cardWidthXs={6}
              products={quarto_anno}
            />
            <SwiperNews title="News dal Settore Automotive" data={data} limit={15} />
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch(
    'https://channels.donboscosandona.it/api/posts/inoratorio?q=automotive'
  )
  const data = await res.json()

  return {
    props: { data },
    revalidate: 3600, // I dati vengono ricaricati al massimo una volta all'ora
  }
}

let primo_anno = [
  {
    title: '',
    description: 'Normative di sicurezza per l’uso di strumenti e attrezzature',
    immagineUrl: '/images/meccanico/sicurezza.png',
  },
  {
    title: '',
    description: 'Costruzione di pannelli elettrici didattici al fine di una lettura di schemi elettrici',
    immagineUrl: '/images/automotive/pannelli.jpg',
  },
  {
    title: '',
    description: "Realizzazione e lettura di fasi di lavoro attraverso la costruzione di modellini didattici",
    immagineUrl: '/images/automotive/modellino.jpg',
  },
  {
    title: '',
    description: 'Conoscenza della composizione meccanica attraverso lo smontaggio e rimontaggio di motori ',
    immagineUrl: '/images/automotive/sistemazione2.jpg',
  },
  {
    title: '',
    description:
      'Conoscenza della strumentazione specifica di settore',
    immagineUrl: '/images/automotive/attrezzo.jpg',
  },
  {
    title: '',
    description: 'Esperienza di approccio delle principali lavorazioni in carrozzeria, carteggiatura, lucidatura fari, stuccatura, wrapping, cubicatura , pulizia veicolo',
    immagineUrl: '/images/automotive/wrap.jpg',
  },
]

let secondo_anno = [
  {
    title: '',
    description: 'Manutenzione ordinaria del veicolo, tagliandi e sostituzioni',
    immagineUrl: '/images/automotive/sistemazione.jpg',
  },
  {
    title: '',
    description: 'Sostituzione e controllo gruppo freni',
    immagineUrl: '/images/automotive/freni.jpg',
  },
  {
    title: '',
    description: 'Fasatura e controllo di motori a cavalletto',
    immagineUrl: '/images/automotive/motore.jpg',
  },
  {
    title: '',
    description:
      'Smontaggio e rimontaggio pneumatici',
    immagineUrl: '/images/automotive/gommatura.jpg',
  },
  {
    title: '',
    description: 'Equilibratura pneumatici',
    immagineUrl: '/images/automotive/calibrazione.jpg',
  },
  {
    title: '',
    description: 'Assetto ruote',
    immagineUrl: '/images/automotive/moto.jpg',
  },
  {
    title: '',
    description: 'Controlli e sostituzioni principali ai vari componenti elettrici, elettronici, lucidatura veicolo',
    immagineUrl: '/images/automotive/lucidatura.jpg',
  },
  {
    title: '',
    description: 'Uso di strumenti di diagnosi',
    immagineUrl: '/images/automotive/diagnosi.jpg',
  },
  {
    title: '',
    description: 'Disegno CAD su specifiche di settore',
    immagineUrl: '/images/automotive/pc.jpg',
  },
]

let terzo_anno = [
  {
    title: '',
    description: 'Revisione veicolo',
    immagineUrl: '/images/automotive/revisione.jpg',
  },
  {
    title: '',
    description: 'Analisi gas di scarico',
    immagineUrl: '/images/automotive/scarico.jpg',
  },
  {
    title: '',
    description: 'Impianti climatizzazione nel veicolo',
    immagineUrl: '/images/automotive/guastii.jpg',
  },
  {
    title: '',
    description: 'Diagnosi strumentale avanzata',
    immagineUrl: '/images/automotive/avanzata.jpg',
  },
  {
    title: '',
    description: 'Simulatore auto ibrida',
    immagineUrl: '/images/automotive/ibrida.jpg',
  },
  {
    title: '',
    description: 'Ricerca guasti con strumentazione',
    immagineUrl: '/images/automotive/guasti.jpg',
  },
  {
    title: '',
    description: 'Lettura schemi elettrici/elettronici dell’autoveicolo',
    immagineUrl: '/images/automotive/schemi.jpg',
  },
  {
    title: '',
    description: 'Banche dati da case costruttrici',
    immagineUrl: '/images/automotive/database.jpg',
  },
  {
    title: '',
    description: 'Messa in fase di motorizzazioni varie con uso di strumentazione specifica',
    immagineUrl: '/images/automotive/fase.jpg',
  },
]

let quarto_anno = [
  {
    title: '',
    description: 'Risoluzioni di problematiche su cicli di lavorazione in azienda',
    immagineUrl: '/images/automotive/azienda.jpg',
  },
  {
    title: '',
    description:
      'Accettazione e rapporto con il cliente',
    immagineUrl: '/images/automotive/cliente2.jpg',
  },
  {
    title: '',
    description: ' Preventivi di riparazione su software dedicati',
    immagineUrl: '/images/automotive/preventivi.jpg',
  },
  {
    title: '',
    description: 'Gestione della strumentazione specifica',
    immagineUrl: '/images/automotive/strumentazionnnnnnne.jpg',
  },
  {
    title: '',
    description: 'Uso banche dati con specifiche tecniche di riparazione',
    immagineUrl: '/images/automotive/banche.jpg',
  },
  {
    title: '',
    description: 'Controlli di qualità nel veicolo, revisioni e normative',
    immagineUrl:
      '/images/automotive/revisione2.jpg',
  },
  {
    title: '',
    description: 'Classificazione del rifiuto, documentazione specifica',
    immagineUrl: '/images/automotive/pezzi.jpg',
  },
  {
    title: '',
    description: 'Gestione delle risorse aziendali, magazzino, forniture',
    immagineUrl: '/images/automotive/magazzino.jpg',
  },
  {
    title: '',
    description: 'Rendicontazione lavoro svolto, uso dei tempari di riparazione, gestione delle garanzie',
    immagineUrl:
      '/images/automotive/lavoro.jpg',
  },
]

let sponsor = [
  'https://agsol.com/wp-content/uploads/2018/09/new-microsoft-logo-SIZED-SQUARE.jpg',
  'https://assets.ubuntu.com/v1/57a889f6-ubuntu-logo112.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1200px-Cisco_logo_blue_2016.svg.png',
  'https://dev.socialidnow.com/images/9/94/Mikrotik-logo.png',
  'https://www.raspberrypi.org/app/uploads/2018/03/RPi-Logo-Reg-SCREEN.png',
  'https://www.arduino.cc/en/uploads/Trademark/ArduinoCommunityLogo.png',
  'https://images-eu.ssl-images-amazon.com/images/I/413W%2BhcdyEL.png',
  'https://www.comitec.it/img/logo.png?v=1.1',
  'https://archive.donboscosandona.it/img/ck/1e0a315dbf7a64beb118a36bbc2148c8d20f55a3.png',
  'https://www.amd.com/system/files/11340-oculus-logo-hero-vertical-447x362.png',
]
