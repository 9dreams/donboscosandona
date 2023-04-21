import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import Layout from "/components/Layout";
import LandingHero from "/components/LandingHero2.js";
import Features from "/components/Features";
import Carousel from "/components/Carousel";
import Products from "/components/Products";
import Testimonials from "/components/Testimonials";
import Team from "/components/Team";
import Post from "/components/Post";
import Certifications from "/components/Certifications";
import Maps from "/components/Maps";
import Paragraph from "/components/Paragraph";
import Table from "/components/Table";

import { getDatiArticoli } from "/lib/articoli";

// I punti di forza
const features = [
  {
    title: "Progetto educativo",
    imageUrl:
      "https://teamtrex.com.au/wp-content/uploads/2021/06/Strength-icon.png",
    description:
      "Un progetto chiaro e affidabile per far crescere e diventare uomini. ",
  },
  {
    title: "Didattica attiva",
    imageUrl:
      "https://teamtrex.com.au/wp-content/uploads/2021/06/Strength-icon.png",
    description:
      "Lezioni attive e coinvolgenti per dimenticare la noia e partecipare da protagonisti.",
  },
  {
    title: "Laboratori",
    imageUrl:
      "https://teamtrex.com.au/wp-content/uploads/2021/06/Strength-icon.png",
    description:
      "12 ore settimanali in laboratori tecnologicamente all'avanguardia per formare i professionisti del futuro.",
  },
  {
    title: "Servizi al lavoro",
    imageUrl:
      "https://teamtrex.com.au/wp-content/uploads/2021/06/Strength-icon.png",
    description:
      "Orientamento, stage e alternanza, i nostri esperti ti accompagneranno fino all'effettivo inserimento nelle aziende del settore.",
  },
];

// slides per il carousel
let slides = [
  {
    immagine:
      "https://www.calidario.it/wp-content/uploads/13-13-_Z5A1587-1.jpg",
    titolo: "Le nostre terme",
    descrizione:
      "se hai bisognio di un po di riposo ti consigliamo le nostre terme con ottimi massagiatori e massagiatrici",
  },
  {
    immagine:
      "https://www.iparchidivertimento.it/wp-content/uploads/2017/05/Gardaland-uno-dei-20-parchi-divertimento-piu-belli-in-Italia.jpg",
    titolo: "Le nostre giostre",
    descrizione:
      "le nostre giostre sono famose in tutto il mondo per essere a tema 'miti', infatti potrete salire sul buda espres una gistra che vi fara ripassare tutte le divinita greche",
     
      
  },
];

// Il nostro team
let members = [
  {
    name: "don Nicola Munari",
    role: "DIRETTORE / CATECHISTA",
    description: "And I love you like Kanye",
    description1: "loves Kanye. We need to restart the human foundation",
    imageUrl:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600",
    email: "c.coso@donboscosandona.it",
    phone: "0421 3388949874950",
  },
  {
    name: "Alessandro Cappelletto",
    role: "PRESIDE",
    description: "And I love you like Kanye",
    description1: "loves Kanye. We need to restart the human foundation",
    imageUrl:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    name: "Alessandro Ferro",
    role: "VICE-PRESIDE / TUTOR DIGITALE",
    description1:
      "Vicepreside, gestione organizzazione scolastica e pastorale, insegnamento area scientifica ",
    imageUrl:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600",

    email: "a.ferro@donboscosandona.it",
    phone: "0421 111 222",
  },
  {
    name: "Anna Maria D'Ambrosio",
    role: "RESPONSABILE DELLA DISCIPLINA",
    description1:
      "Gestione disciplina,organizzazione scolastica e insegnamento are cultura",
    imageUrl:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600",
    email: "l.hdggfd@donboscosandona.it",
    phone: "12365598445",
  },
];

let prodotti = [
  {
    title: "Prenota la tua vacanza",
    description:
      "Sei pronto per un anno pieno di avventure? Approfitta dello sconto fino al 20% e prenota il tuo soggiorno nei nostri hotel, i biglietti sono inclusi nel pacchetto!",
    immagineUrl:
      "https://staticfanpage.akamaized.net/wp-content/uploads/sites/33/2022/08/castello-walt-disney.jpg",
    url: "/shop",
  },
  {
    title: "Novità 2023",
    description:
      "per un eseprienza più genuina prova il nostro nuovo acqua park a tema shrek ",
    immagineUrl:
      "https://i.ytimg.com/vi/n8lpM4Vr9RA/maxresdefault.jpg",
    url: "/energia",
  },
  {
    title: "Dream island shop",
    description:
      "Scopri il nuovo negozio online di Dream island dove troverai tantissimi gadget personalizzati, articoli LEGO® esclusivi e tanto altro.",
    immagineUrl:
      "https://oasidelmattoncino.com/wp-content/uploads/2019/11/lego-bambini.png",
    url: "/informatico",
  },
];

const testimonials = [
  {
    name: "Michele Venturato",
    imageUrl:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600",
    text: "Grande scuola. Una vera scuola professionale e morale. Sforna ogni anno moltissimi tecnici aggiornati con I tempi e in grado di integrarsi con facilita' nel mondo del lavoro. Complimenti a tutto il sistema.",
    social: "@Google",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600",
    name: "Daniele Mladenovic",
    text: "Ho trascorso alcuni anni presso il CFP e ho trovato l'ambiente molto accogliente e confortevole, grazie alla disponibilità di tutto il personale. In particolare, ho apprezzato la passione degli insegnanti, che si sono dimostrati molto competenti. Inoltre, ho avuto l'opportunità di partecipare ad attività extracurricolari e progetti che mi hanno permesso di sviluppare le mie capacità. Infine, consiglio questo istituto sottolineando l'importanza dello sviluppo e della scoperta dei propri talenti che è ciò che ci rende unici.",
    social: "@BOBTEK",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600",
    name: "Pino West",
    text: "Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione ",
    social: "@PINOWEST",
  },
];

let certifications = [
  {
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Logo_Nutella.svg/2560px-Logo_Nutella.svg.png",
    
  },
  {
    logoUrl:
      "https://seeklogo.com/images/C/CERMET_SINCERT-logo-129ABB30BE-seeklogo.com.png",
    
  },
  {
    logoUrl:
      "https://seeklogo.com/images/C/CERMET_SINCERT-logo-129ABB30BE-seeklogo.com.png",
    
  },
  {
    logoUrl:
      "https://seeklogo.com/images/C/CERMET_SINCERT-logo-129ABB30BE-seeklogo.com.png",
   
  },
];

export default function Home({ datiArticoli }) {
  return (
    <Layout>
      <LandingHero
        opacity={0.5}
        title="Dream Island"
        description="esaudisci il duo desiderio nascosto"
        imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Island_of_Dreams2.jpg/1200px-Island_of_Dreams2.jpg"
      />
      <br />
      <br />
      <br />
      <br/>
      <br/>

      <Products

        cardWidth={4}
        products={prodotti}
      />

      <br/><br/><br/><br/>

      

      <Carousel slides={slides} />

        <Paragraph
          title="Chi siamo e cosa facciamo"
          rightImageUrl="https://www.benesserecorpomente.it/wp-content/uploads/2017/12/lampada-dei-desideri.jpg"
        >
          Nati dal idea di realizare il sognio di qualsiasi uomo,donna,bambino e bambina.
          grazie allo staf di dream island riuscirai a reaizarlo, vi bastera conttatarci e dopo un analisi del vostro sognio
          vi verra chiesto un quantitativo di denaro che puo essere pagato anche con dele comodissime rate mensili, nell prezzo e compreso
          cibo in base alle vostre preferenze e allogio in un hotel a tema
        </Paragraph>

      <Container>

      <Table
        title="prezzi per le giostre e le terme"
        backgroundImageUrl="https://www.altroconsumo.it/-/media/altroconsumo/images/home/vita-privata-e-famiglia/servizi-e-contratti/news/prezzi-inflazione-news_800x450.jpg?rev=e90f4ca4-b859-46f3-9323-004b90dca6ba&mw=660&hash=8710A6703FB6B01ECEC0397C1E07467D"
        backgroundColor="#102c54"
        opacity={0.8}
        blur="0.2rem"
        color="white"
        rows={[
          ["categorie", "minori di 18 anni", "maggiore di 18 anni"],
          ["livello Bronzo", 50, 70],
          ["livello Argento", 80, 85],
          ["livello Oro", 120, 150],
        ]}
      />

      </Container>
      <br/><br/><br/><br/>

      <Paragraph
        backgroundImageUrl="https://www.donnamoderna.com/content/uploads/2020/05/ecoterapia.jpg"
        backgroundColor="black"
        opacity={0.8}
        blur="0.2rem"
        color="white"
        title="Rendi possibile il tuo sonio"
        
      >
       il prezzo per la realizazione del sognio e apparte, la cifra medio per una famiglia si aggira intorno agli 800 €
      </Paragraph>
      <br/><br/><br/><br/>

      
      

      

     
    </Layout>
  );
}

export async function getStaticProps() {
  const datiArticoli = getDatiArticoli();
  return {
    props: {
      datiArticoli,
    },
  };
}
