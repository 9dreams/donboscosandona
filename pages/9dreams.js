import {
  Carousel,
  Certifications,
  Layout,
  LandingHero,
  Features,
  Products,
  Testimonials,
  Team,
  Maps,
  SwiperNews,
  Featured,
  Logos,
  Torneo,
  Paragraph,
} from "/components";

import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <LandingHero
        height={100}
        opacity={0}
        imageUrl="/images/informatico/9dreams.jpg"
      />
      {/*https://archive.donboscosandona.it/9dreams-l-agenzia-di-comunicazione-del-settore-informatico */}
     <Paragraph
        title="9dreams: l'agenzia di comunicazione del settore informatico"
        subtitle=""
      >
        <p style={{ fontSize: "22px" }}>
          <em>
            Con l'acquisto del dominio e la definizione del logo, è da oggi
            operativa 9dreams, la divisione creativa del settore informatico...
          </em>
        </p>
      
        Nel settore informatico del CFP DON BOSCO di San Donà di Piave abbiamo
        sempre portato avanti lo studio di Photoshop (il programma di
        fotoritocco per eccellenza) ma come spesso capita a scuola,
        <strong>
          {" "}
          quando si relega una cosa a dei semplici esercizi, non si innesca
          quella scintilla che fa esplodere la passione e apre nuovi orizzonti.
        </strong>{" "}
        <br /> <br />
        Di questo noi del settore abbiamo una lunga e fortunata esperienza,
        perché abbiamo scoperto come{" "}
        <strong>
          l'affidare ai nostri allievi l'assistenza informatica di tutto il
          Centro
        </strong>{" "}
        ci ha permesso da una parte di lavorare su problemi quotidiani reali,
        rendendo l'esperienza di laboratorio più vicina a quella di una vera
        azienda, dall'altra di sviluppare quelle competenze relazionali di
        interazione col cliente che vengono subito riconosciute quando gli
        allievi entrano in stage. <br /> <br />
        Quando a novembre in via sperimentale abbiamo acquistato un drone per
        fare riprese aeree, come insegnante ho avuto la gioia di sbalordirmi di
        fronte all'esplosione di creatività che questo ha innescato nei miei
        allievi: non mi vergogno di dire che io{" "}
        <strong>
          non sarei riuscito a pensare con tanta freschezza e vivacità quello
          che i ragazzi hanno prodotto in pochi giorni...
        </strong>{" "}
        e se questo è solo l'inizio, chissà cosa vedremo quando questa
        esperienza sarà maturata! <br /> <br />
        Così un po' alla volta i droni sono diventati due, si sono aggiunti una
        reflex, una fotocamera a 360°, tre caschi per la realtà virtuale, e
        chissà cos'altro verrà: ma tornando al discorso introduttivo,{" "}
        <strong>
          i mezzi e la creatività sono niente se non vengono messi al servizio
          di uno scopo!
        </strong>
      </Paragraph>

      <p style={{ width: "1100px" }}>
        <img
          src="/images/informatico/server.png"
          style={{
            width: "370px",
            marginLeft: "190px",
            float: "left",
            marginRight: "20px",
          }}
        />
        E così l'idea iniziale di creare una web agency che lavorasse per dei
        clienti immaginari come in una simulazione d'impresa, è stata quasi
        immediatamente superata dall'illuminazione che <strong> noi i "clienti" reali li
        abbiamo già, ed è la nostra realtà Salesiana di San Donà</strong>: la Scuola
        Professionale, l'Oratorio, il Cinema, il Soggiorno Marino...
        <br />
        <br />
        Da qui l'idea di metterci a disposizione con dei nuovi servizi di tipo
        "creativo" che vanno ad aggiungersi a quelli che già offrivamo con il
        supporto tecnico: e per celebrare una novità così importante serviva un
        nome all'altezza! Dovete sapere che <strong>nel 2024 ricorrerà il duecentesimo
        anniversario del sogno dei nove anni di don Bosco</strong>, avvenuto
        presumibilmente tra il 1824 e il 1825. La nostra scuola, aderendo alla
        proposta del <Link href={"https://www.donboscoland.it/it/"}> Movimento Giovanile Salesiano</Link>, si lascerà ispirare da
        questo sogno per le proposte pastorali di questi tre anni.
        <br />
        <br />
        <strong>Giocando con le parole è nato il nome 9dreams</strong> (letteralmente nove sogni)
        per dire la nostra capacità di sognare e realizzare infinite idee
        creative: e il primo progetto sarà proprio la creazione del sito
        <Link href={"https://www.9dreams.it/"}> www.9dreams.it</Link> (rigorosamente ospitato sui server da noi gestiti) che ci
        permetterà di fare un'esperienza di programmazione collaborativa in
        stile open-source, grazie a <Link href={"https://github.com/"}>GitHub</Link>, strumento imprescindibile per i
        programmatori di oggi.
      </p>
      <Paragraph>
        <strong>La collaborazione con le insegnanti di italiano e di inglese</strong> ci
        permetterà poi di mettere a frutto anche le competenze linguistiche,
        nella realizzazione dei post per i vari social. 
        <br />
        <br />
        Insomma un'idea
        entusiasmante, che non poteva fiorire in un mese diverso da quello di
        <strong> gennaio, dedicato al nostro padre fondatore don Bosco: grazie don Bosco </strong>
        per l'ispirazione che non ci fai mai mancare! Fa' Signore che ce ne
        serviamo ogni giorno per far crescere i giovani che ci affidi!<br/>
        <h5 style={{fontSize: "16px", color:"GrayText" }}><strong>prof. Andrea Ros</strong></h5>

      </Paragraph>
    </Layout>
  );
}
