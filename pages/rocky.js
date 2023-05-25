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
                siteName="Sueños Locos S.A."
                title="Rocky's Dream"
                description="Il sogno americano"
                imageUrl="https://www.focus.it/images/2022/04/15/pugilato_1500x1000.jpg"
                height="75"
            />
            <h1></h1>
            <Paragraph
                title="Breve introduzione al sogno"
            >
               Questa opzione descrive alla perfezione il sogno americano, quello in cui l'uomo comune può centrare qualunque traguardo, persino quello di affrontare sul ring il campione del mondo dei pesi massimi.
               Perché tu sarai l'eroe perdente per eccellenza e l'eroe perdente, si sa, è più amato di quello vincente.
               Perché fonde alla perfezione pugilato e romanticismo: per Rocky Balboa la storia d'amore con Adriana Pennino conta più del titolo mondiale.
               Tu verrai allenato continuamente da un coach professionista e alla fine dovrai sfidarti con uno dei campioni massimi di pugilato più famosi al mondo, questo sogno è adatto per le persone che amano allenarsi e fare pugilato.
            </Paragraph>
            <h1></h1>
            <Paragraph 
                  
                  topImageUrl="https://www.mmawiki.org/it/wp-content/uploads/2012/07/boxe.jpg"
                   
            />
            <Paragraph
                title="opinioni del cliente"
                subtite="eskere"
                avatarImageUrl="https://i.ytimg.com/vi/XfGD0VtwOiY/maxresdefault.jpg"
                columnCount="{2}"
                backgroundColor="#2c3e50"
                opacity={0.5}

                backgroundImageUrl="https://www.kombatnet.com/wp-content/uploads/2022/04/ring-da-combattimento-boxe-boxing-kickboxing-savate-muay-thai-thai-boxe-Kombatnet-Wiki.jpeg"
            >
               La migliore esperienza e allenamento che abbia mai fatto , soprattutto nella parte della corsa nei sentieri dell'isola e il coach era simpaticissimo e bravissimo, uno dei migliori che abbia mai avuto nei miei 10 anni di allenamento in palestra e al palazzatto dove pratico pugilato.
               Sono riuscito a mandare k.o. il campione per un soffio, ovviamente si erano presi cura anche dell'aspetto per la cura del cliente e quindi erano pronti in caso qualcuno si facesse male sempre. 5 stelle se potessi ne darei di più.
            </Paragraph>
            
            <h1></h1>
        </Layout>
    )
}

