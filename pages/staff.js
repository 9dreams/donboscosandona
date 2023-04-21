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
        title: "Il cuoco",
        imageUrl:
            "https://th.bing.com/th/id/OIP.v0evlFS-YHEAunWbxxXyxAHaHa?pid=ImgDet&w=900&h=900&rs=1",
        description:
            " marco ungeretti e un noto quoco italiano, lui si ocupera di cucinare tutto quello neccesario",
    },
    {
        title: "Gestore sicurezza",
        imageUrl:
            "https://th.bing.com/th/id/R.77894c3967f728901a43dce06e8bc9f0?rik=%2fenGIpGANDW5HQ&pid=ImgRaw&r=0",
        description:
            "Nick sicurezza e colui che rende tutto sicuro",
    },
    {
        title: "Gestore costumi",
        imageUrl:
            "https://images2.corriereobjects.it/methode_image/2016/07/19/Moda/Foto%20Moda%20-%20Trattate/costumista%20cernigliaro%20mentre%20lavora%20a%20un%20intreccio-kyd-U4321064171071zGF-1224x916@Corriere-Web-Sezioni-593x443.jpg?v=20160721173610",
        description:
            "la signiora anna si occupa di creare tutti gli abiti di scena",
    },
    {
        title: "Gestore economia",
        imageUrl:
            "https://th.bing.com/th/id/OIP.Ie3VLUJmt1oNr6cQtJ41yQHaE8?pid=ImgDet&rs=1",
        description:
            "il signior carmine si occupa di preffisare un prezzo giusto per la vostra esperienza",
    },
];

// slides per il carousel
let slides = [
    {
        titolo: "Fatti un bel giro",
        descrizione:
            "Scopri tutti i segreti del nostro Centro con il tour virtuale!",
        immagine:
            "https://www.wallpapermania.eu/images/lthumbs/2013-01/4170_Love-between-animals-true-love.jpg",
        colore: "#ED4C67",
        opacity: 0.5,
        blur: "0.5rem",
        buttonText: "Scopri di più!",
        buttonUrl: "https:...",
    },
    {
        titolo: "Concorso nazionale settore elettrico",
        descrizione:
            "A maggio il nostro Centro avrà l'onore di ospitare il Concorso Nazionale del Settore Elettrico: tutti i Centri di Formazione Professionale salesiani d'Italia invieranno i loro campioni per una settimana di sfida e condivisione professionale...",
        colore: "#22aa22",
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
                title='Il nostro Staff'

                imageUrl="https://th.bing.com/th/id/R.4b25184c18aabb851af3f6276971eebb?rik=g1cjO4SLo1Je4A&pid=ImgRaw&r=0"
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
                Per noi avere uno staff gentile,accogliente e produttivo e molto importante, lo staf e diviso in base a quello che fanno nel isola, ogni gruppo ha un capo settore che regola il lavoro nella sua zona.

            </Paragraph>

            <Features
                title="i Capi settore "

                features={features}
                cardWidth={3}
            />



            <br /><br /><br /><br />

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
