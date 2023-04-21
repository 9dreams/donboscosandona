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
            "https://cdn2.civitatis.com/espana/vigo/galeria/isla-ons.jpg",
        colore: "#f8f32b",
        opacity: 0.3,
        
    },
    {
       
        immagine:
            "https://th.bing.com/th/id/R.f3140683aafce1d71451442b3cbc2662?rik=3HFKqhbtlrdamQ&pid=ImgRaw&r=0",
        colore: "#f8f32b",
        opacity: 0.3,
        
    },
    {
       
        immagine:
            "https://th.bing.com/th/id/R.5573a7eb11594f34fd384a8d5ae1c3bd?rik=IgKZqMgfHC7Vvw&pid=ImgRaw&r=0",
        colore: "#f8f32b",
        opacity: 0.3,
        
    },
    {
       
        immagine:
            "https://www.crucerosriasbaixas.com/wp-content/uploads/2019/06/Isla-de-ons-7-1.jpg",
        colore: "#f8f32b",
        opacity: 0.3,
        
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
        title: "Dove siamo?",
        description:
            "Dreams Island si trova nella fantastica isola di Ons, in Sp.....",
        immagineUrl:
            "https://th.bing.com/th/id/R.624700fc4a51b4dd3f2ad8a73e607f6c?rik=i1hgED1aXA5DEg&pid=ImgRaw&r=0",
        url: "/elettrico",
    },
    {
        title: "Come funziona il nostro servizio",
        description:
            "Il servizio che offriamo alla dream island e quello di realizare il tuo sognio personale in modo facile infatti baster........",
        immagineUrl:
            "https://th.bing.com/th/id/R.d82596bdaa001867ab9eb0a736d6dc61?rik=6D4LJCAkni8lyg&pid=ImgRaw&r=0",
        url: "/energia",
    },
    {
        title: "Il nostro staf",
        description:
            "ogni grande azzienda ha il suo staf, il nostro e composto da.....",
        immagineUrl:
            "https://th.bing.com/th/id/OIP.TL0uQ59gckmw2BknzGlgiAHaEZ?pid=ImgDet&w=1920&h=1140&rs=1",
        url: "/informatico",
    },
];

const testimonials = [
    {
        name: "Michele Venturato",
        imageUrl:
            "https://th.bing.com/th/id/OIP.82_My22QpvNrp2T4EGw9xgHaGq?pid=ImgDet&rs=1",
        text: "bellisomo posto ci sono stato quest estate con mia moglie, il nostro sognio nera quello di esplorare una casa degli orrori ma non avevamo il coraggio di andare in una cassa vera, grazie a dream islan abbiamo potuto fare tutto in sicurezza. la cosa piu bella e stata la cura al dettaglio di tutto",
        social: "@Google",
    },
    {
        imageUrl:
            "https://th.bing.com/th/id/OIP.p0jJRiFn-AkY155DAs9d9AHaE8?pid=ImgDet&rs=1",
        name: "Daniele Mladenovic",
        text: "Ciao oggi volevo raccontarvi la mia esperienza a Dream island, uno dei miei sogni era quello di essere il protagonista in uno scenario simile a star wars, mi proposero una simulazione (inizialmente ero scettico), dopo il pagamento aspettai solo un mese. arrivato la mi dieddero il materiale nescessario e iniziammo una missione inventata pero devo ammetere che e stata la eseprienza stupenda ",
        social: "@BOBTEK",
    },
    {
        imageUrl:
            "https://th.bing.com/th/id/OIP.iGR94-o7mdpomhnbFMYZ4wHaHa?pid=ImgDet&rs=1",
        name: "Pino West",
        text: "Wow, questa e lunica cosa che mi viene in mente dopo essere stato a drem islan, qualche mese va avevo chiesto se potessere creare una specie di battle royale realistico a tema Fortinte, devo dire che sono piu che sodistaffatto e stata la cosa piu bella che abbia mai fatto, trovate tutto nel mio canale you tube mi chiamo gepettoilnerd",
        social: "@PINOWEST",
    },
];

let certifications = [
    {
        logoUrl:
            "https://seeklogo.com/images/C/CERMET_SINCERT-logo-129ABB30BE-seeklogo.com.png",
        text1: "ISO 9001:2015",
        text2: "Reg. n. 2593-A - Settore EA: 37",
    },
    {
        logoUrl:
            "https://seeklogo.com/images/C/CERMET_SINCERT-logo-129ABB30BE-seeklogo.com.png",
        text1:
            "Progettazione ed erogazione di attività formative e di orientamento",
    },
    {
        logoUrl:
            "https://seeklogo.com/images/C/CERMET_SINCERT-logo-129ABB30BE-seeklogo.com.png",
        text1: "Authorised Training Center",
    },
    {
        logoUrl:
            "https://seeklogo.com/images/C/CERMET_SINCERT-logo-129ABB30BE-seeklogo.com.png",
        text1: "Cod. A033 - Formazione Iniziale,",
        text2: "Superiore e Orientamento",
    },
];

export default function Home({ datiArticoli }) {
    return (
        <Layout>
            <LandingHero
                opacity={0.5}
                title='Dove sieamo?'

                imageUrl="https://campingisladeons.com/wp-content/uploads/2018/04/isla-de-ons-1.jpg"
            />

            <Container maxWidth={false} sx={{ backgroundColor: "#f8f32b", height: "100px" }}></Container>
            <Container maxWidth={false} sx={{ background: "linear-gradient(to bottom, #f8f32b 80%, #ffffff 100%)", height: "150px" }}>
                <Typography
                    style={{ textAlign: "center", paddingBottom: "2rem", }}
                    component="h2"
                    variant="h3"
                    color=""

                    gutterBottom
                >
                    <center> <b>Dream islan si trova in spagnia nell isola di ons  </b></center>
                </Typography>
                <br /><br /><br /><br /><br />


            </Container>
            <br /><br /><br /><br />

            <Paragraph
                backgroundImageUrl="https://www.donnamoderna.com/content/uploads/2020/05/ecoterapia.jpg"
                backgroundColor="#f8f32b"
                opacity={0.8}
                blur="0.2rem"
                color="black"

            >
                <h2>QL'isola di Ons è una meravigliosa isola spagnola situata nella Ria di Pontevedra, al largo della costa galiziana nel nord-ovest della Spagna. Questo paradiso naturale, che fa parte del Parco nazionale delle isole Atlantiche, è raggiungibile in barca dal porto di Bueu, attraverso un piacevole viaggio di 40 minuti.

                    L'isola di Ons è famosa per le sue acque cristalline, le sue bellissime spiagge e le sue magnifiche vedute panoramiche. Qui si possono ammirare le scogliere, le spiagge selvagge, le dune di sabbia e le piccole insenature. Inoltre, questa isola offre ai visitatori la possibilità di praticare lo snorkeling, il kayak, il trekking e l'escursionismo.

                    L'isola di Ons è anche conosciuta per la sua flora e fauna selvatica, tra cui la gorizia in rosso, una pianta endemica protetta, e diverse specie di uccelli, come la gazza marina e il pettegolezzo.

                    Sull'isola di Ons c'è un piccolo villaggio turistico, dove si possono trovare alcuni bar, ristoranti e alloggi. Qui è possibile assaggiare la deliziosa gastronomia locale, come il pesce fresco, la zuppa di pesce e la torta di Santiago.

                    In sintesi, se siete alla ricerca di una fuga dalla frenesia della città, l'isola di Ons è il posto ideale per trovare relax, natura e avventura.</h2>
            </Paragraph>
            <br /><br /><br /><br /> <br/> 
            <Typography
                style={{ textAlign: "center", paddingBottom: "2rem", }}
                component="h2"
                variant="h3"
                color=""

                gutterBottom
            > 
                <center> <b>imagini del isola </b></center>
                <br/> 
            </Typography>

            <Carousel slides={slides} />

            <br/> <br/> <br/> <br/> <br/> <br/>

            <Container maxWidth={false} sx={{ background: "linear-gradient(to top, #272727 60%, #ffffff 90%)", height: "100px" }}></Container>



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
