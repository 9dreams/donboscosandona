import { Container, Grid, Typography } from '@mui/material'
import {
  Carousel,
  Certifications,
  Layout,
  LandingHero,
  Features,
  Products,
  Calendar,
  Testimonials,
  Team,
  Maps,
  Paragraph,
  Table,
  News,
  SwiperNews,
  Featured,
  NavBar,
  Logos,
  Sponsor,
  Elements,
  leftImageUrl
} from '/components'

export default function Home({ data, elementi }) {
  return (
    <Layout>
      <LandingHero
        imageUrl='images/3f.jpg'
      />
      <br></br>
       <Paragraph
        backgroundImageUrl=''
        backgroundColor=''
        opacity={0.8}
        blur='0.2rem'
        color='black'
        title='9Dreams lagenzia di comunicazione del settore informatico'
      >
        
        
Con l'acquisto del dominio e la definizione del logo, è da oggi operativa 9dreams, la divisione creativa del settore informatico...

Nel settore informatico del CFP DON BOSCO di San Donà di Piave abbiamo sempre portato avanti lo studio di Photoshop (il programma di fotoritocco per eccellenza) ma come spesso capita a scuola, quando si relega una cosa a dei semplici esercizi, non si innesca quella scintilla che fa esplodere la passione e apre nuovi orizzonti.

Di questo noi del settore abbiamo una lunga e fortunata esperienza, perché abbiamo scoperto come l'affidare ai nostri allievi l'assistenza informatica di tutto il Centro ci ha permesso da una parte di lavorare su problemi quotidiani reali, rendendo l'esperienza di laboratorio più vicina a quella di una vera azienda, dall'altra di sviluppare quelle competenze relazionali di interazione col cliente che vengono subito riconosciute quando gli allievi entrano in stage.

Quando a novembre in via sperimentale abbiamo acquistato un drone per fare riprese aeree, come insegnante ho avuto la gioia di sbalordirmi di fronte all'esplosione di creatività che questo ha innescato nei miei allievi: non mi vergogno di dire che io non sarei riuscito a pensare con tanta freschezza e vivacità quello che i ragazzi hanno prodotto in pochi giorni... e se questo è solo l'inizio, chissà cosa vedremo quando questa esperienza sarà maturata!

Così un po' alla volta i droni sono diventati due, si sono aggiunti una reflex, una fotocamera a 360°, tre caschi per la realtà virtuale, e chissà cos'altro verrà: ma tornando al discorso introduttivo, i mezzi e la creatività sono niente se non vengono messi al servizio di uno scopo!
      </Paragraph>


      <Paragraph
        backgroundImageUrl=''
        backgroundColor=''
        leftImageUrl='https://www.donboscosandona.it/images/informatico/server.png'
        opacity={0.8}
        blur='0.2rem'
        color='black'
      
      >
        
        
        E così l'idea iniziale di creare una web agency che lavorasse per dei clienti immaginari come in una simulazione d'impresa, è stata quasi immediatamente superata dall'illuminazione che noi i "clienti" reali li abbiamo già, ed è la nostra realtà Salesiana di San Donà: la Scuola Professionale, l'Oratorio, il Cinema, il Soggiorno Marino.... <br></br><br></br>

Da qui l'idea di metterci a disposizione con dei nuovi servizi di tipo "creativo" che vanno ad aggiungersi a quelli che già offrivamo con il supporto tecnico: e per celebrare una novità così importante serviva un nome all'altezza! Dovete sapere che nel 2024 ricorrerà il duecentesimo anniversario del sogno dei nove anni di don Bosco, avvenuto presumibilmente tra il 1824 e il 1825. La nostra scuola, aderendo alla proposta del Movimento Giovanile Salesiano, si lascerà ispirare da questo sogno per le proposte pastorali di questi tre anni.<br></br><br></br>

Giocando con le parole è nato il nome 9dreams (letteralmente nove sogni) per dire la nostra capacità di sognare e realizzare infinite idee creative: e il primo progetto sarà proprio la creazione del sito www.9dreams.it (rigorosamente ospitato sui server da noi gestiti) che ci permetterà di fare un'esperienza di programmazione collaborativa in stile open-source, grazie a GitHub, strumento imprescindibile per i programmatori di oggi.

<br></br><br></br><br></br><br></br><br></br><br></br><br></br>La collaborazione con le insegnanti di italiano e di inglese ci permetterà poi di mettere a frutto anche le competenze linguistiche, nella realizzazione dei post per i vari social.<br></br><br></br>

Insomma un'idea entusiasmante, che non poteva fiorire in un mese diverso da quello di gennaio, dedicato al nostro padre fondatore don Bosco: grazie don Bosco per l'ispirazione che non ci fai mai mancare! Fa' Signore che ce ne serviamo ogni giorno per far crescere i giovani che ci affidi!
prof. Andrea Ros

      </Paragraph>

      <Paragraph
        backgroundImageUrl=''
        backgroundColor='green'
        opacity={0.8}
        blur='0.2rem'
        color='black'
        title='SIAMO ANCHE DISPONIBILI A REALIZZARE GRATUITAMENTE SITI WEB PER ASSOCIAZIONI NO-PROFIT DEL TERRITORIO'
      ></Paragraph>

    </Layout>
  )
}
export async function getStaticProps() {
  let res = await fetch(
    'https://channels.donboscosandona.it/api/posts/inoratorio'
  )
  const data = await res.json()

  res = await fetch(
    'https://channels.donboscosandona.it/api/posts/donboscosandona_elements'
  )
  const elementi = await res.json()

  return {
    props: { data, elementi },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 minutes
    revalidate: 1800, // In secondi: il build viene fatto al massimo una volta ogni mezzora
  }
}

