import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import Layout from "@/components/Layout";
import LandingHero from "@/components/LandingHero2";
import Products from "@/components/Products";
import Paragraph from "@/components/Paragraph";
import Maps from "@/components/Maps";



export default function Pagina() {
    return (
        <Layout>
            <LandingHero
                siteName="CFP DON BOSCO"
                title="DREAMS ISLAND"
                description="La miglior isola su cui trascorrere le vacanze ed immergersi nei proprio sogni"
                imageUrl="https://rare-gallery.com/uploads/posts/349427-4k-wallpaper.jpg"
                opacity={0.2}
                height="75"
            />
            <h1></h1>
            <Paragraph
                title="La nostra isola dei sogni"
                subtite="eskere"
                avatarImageUrl="https://www.salernoformazione.com/wp-content/uploads/2018/07/2-3.jpg"
                columnCount="{2}"
                backgroundColor="#2c3e50"
                opacity={0.5}

                backgroundImageUrl="https://www.hamiltonislandweddings.com/wp-content/uploads/2014/12/1806010833.jpg"
            >
               Benvenuti all'Isola dei Sogni, un luogo magico dove ogni desiderio diventa realtà. Immagina un'isola incantata circondata da acque cristalline e spiagge di sabbia bianca. Qui troverai un'ampia gamma di servizi di lusso per soddisfare ogni tua richiesta. Resort esclusivi ti offriranno suite di lusso con vista panoramica, ristoranti gourmet con cucine internazionali e chef di fama mondiale. Potrai rilassarti presso spa di classe mondiale, immergerti in acque termali rigeneranti e partecipare a avventure emozionanti come snorkeling, escursioni e sport acquatici. Sia che tu stia cercando relax, divertimento o avventura, l'Isola dei Sogni è il luogo perfetto per realizzare ogni tuo desiderio.
            </Paragraph>
            <Products
                title='I nostri sogni più famosi'
                description='Ecco i nostri sogni più desirati dai clienti.'
                products={categorie}
                cardWidth={4}
                borderRadius="10px"
            />
             <Products
                title='I nostri 2 sogni più richiesti:'
                products={cardcentrali}
                cardWidth={6}
                borderRadius="10px"
            />   
            
            <h1></h1>
        </Layout>
    )
}

let categorie = [
    {
        title: "Dragon Ball",
        description: "Nel mio sogno di Dragon Ball, mi unisco a Goku e gli altri guerrieri Z in un epico viaggio attraverso mondi incredibili, combattendo potenti nemici e scoprendo il potenziale illimitato del Ki.",
        immagineUrl: "https://openseauserdata.com/files/3c4bc3acd3845cf8fbb5889844211821.png",
        url: "/leggeri"
    },
    {
        title: "Pirati dei caraibi",
        description: "Nel sogno a tema Pirati dei Caraibi, navigo tra mari tempestosi e isole remote, combattendo con spade e cercando tesori nascosti. Sento la brezza marina sul viso mentre la mia nave solca le onde, avventurandomi in una storia di avventura, tradimento e libertà senza limiti.",
        immagineUrl: "https://i.imgur.com/kgmBEwM.jpeg",
        url: "/gara"
    },
    {
        title: "Fantasy World",
        description: "In un viaggio onirico in un mondo fantasy incantato, attraverso terre incognite e foreste magiche. Incontro creature mitiche, affronto pericolosi incantesimi e scopro antichi segreti. La mia anima si riempie di meraviglia e avventura mentre esploro un universo di pura fantasia.",
        immagineUrl: "https://i.imgur.com/IqQMKed.png",
        url: "/riprese"
    },
    {
        title: "Cristiano Ronaldo",
        description: "In un viaggio onirico a tema Cristiano Ronaldo, mi ritrovo in uno stadio scintillante, circondato da una folla che esplode di entusiasmo. Con il numero 7 sulla schiena, dribblo avversari con agilità e segno gol straordinari. L'energia e la passione del calcio mi travolgono, mentre celebro il talento e la determinazione di un vero campione.",
        immagineUrl: "https://i.imgur.com/1EjXsbx.png",
        url: "/militari"
    },
    {
        title: "Jumanji",
        description: "Nel mio sogno a tema Jumanji, mi ritrovo catapultato in un'avventura mozzafiato all'interno del gioco. Attraverso foreste pericolose e caverne misteriose, affronto sfide mortali e risolvo enigmi per tornare alla realtà. Con un gruppo di coraggiosi compagni, sperimento l'emozione e l'imprevedibilità di un mondo virtuale che prende vita.",
        immagineUrl: "https://i.imgur.com/bPgb1QR.png",
        url: "/jumanji"
    },
    {
        title: "Batman",
        description: "In un sogno a tema Batman, mi trasformo nell'oscuro Cavaliere di Gotham City. Guidato dalla mia saggezza e abilità, mi lancio nell'oscurità per combattere il crimine. Saltando tra grattacieli e solcando le strade, sconfiggo i supercriminali e proteggo la città con la mia forza e intelligenza. L'ombra di Batman si erge come simbolo di giustizia in un mondo corrotto.",
        immagineUrl: "https://i.imgur.com/Jk1BrW8.png",
        url: "/batman"
    },
]

let cardcentrali = [
    {
        title: "Ricchezza",
        description: "In un sogno a tema della ricchezza, mi immergo in un mondo di lusso e abbondanza. Splendide ville, auto di lusso e viaggi esotici diventano la mia realtà. Denaro e successo mi circondano, concedendomi ogni desiderio materiale. Tuttavia, scopro che la vera ricchezza risiede nella felicità, nell'amore e nel benessere interiore.",
        immagineUrl: "https://i.imgur.com/Xaw800L.png",
        url: "/ricchezza"
    },
    {
        title: "Rocky Balboa",
        description: "In un sogno a tema Rocky Balboa, mi trasformo in un combattente determinato. Allenandomi duramente e superando le mie limitazioni, entro nell'arena come un underdog. Con pugni potenti e una volontà di ferro, affronto avversari implacabili, risorgendo sempre dopo ogni caduta. L'adrenalina e il coraggio mi guidano verso la vittoria, mentre il pubblico mi acclama come un eroe del ring.",
        immagineUrl: "https://i.imgur.com/0z92p5G.png",
        url: "/rocky"
    },
]

let in_evidenza = [
    {
        title: "DJI Mavic 3 Classico",
        category: 'Leggeri',
        description: "Per volare senza limiti nel giardino di casa!",
        immagineUrl: "https://cdn11.bigcommerce.com/s-fj3z5r15lm/images/stencil/500x659/products/1413/7385/DJI_MAVIC_3_CLASSIC_DJI_RC_N1_01__18053.1673255904.jpg?c=2"
    },
    {
        title: "Dji Matrice 300 RTK",
        category: 'Per riprese',
        description: "Per eseguire fantastiche riprese in giro per il mondo",
        immagineUrl: "https://www.drone-store.it/wp-content/uploads/2020/05/dji-matrice-300-rtk.jpg"
    },
    {
        title: "HAPPYMODEL Larva X ",
        category: 'Da corsa',
        description: "Per sfrecciare alle massime velocità",
        immagineUrl: "https://images-eu.ssl-images-amazon.com/images/I/41F5qqfgxNL._AC_UL232_SR232,232_.jpg"
    },
    {
        title: "Drone militare lanciarazzi P900",
        category: 'Militari',
        description: "Per bombardare le vecchiette",
        immagineUrl: "https://5.imimg.com/data5/ECOM/Default/2023/1/CN/EX/XZ/53951950/militarycamoblack-500x500.jpg"
    },
]