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
                title="Jumanji"
                description="Sogno in una giungla pericolosa"
                imageUrl="https://sm.ign.com/t/ign_it/screenshot/default/jumanji-movie-2017-1_tmah.1280.jpg"
                opacity={0.2}
                height="75"
            />
            <h1></h1>
            <Paragraph
                title="Breve introduzione al sogno"
            >
               Puoi esplorare sentieri avventurosi attraverso le foreste , scoprire antichi tesori in grotte segrete o immergerti nelle acque dei laghi. Gli abitanti dell'isola non sono molto cordiali, dovrai stare attento agli indigeni cannibali con le loro frecce avvelenate o infuocate, ai leopardi e giaguari che ti aspettano nell'erba alta o nasxosti tra gli alberi.
               L'isola offre anche una varietà di attività che ti faranno sentire come un vero personaggio di Jumanji.Dovrai usare tutte le tue tecniche di sopravvivenza per rimanere vivo e sconfiggere il gioco.
            </Paragraph>
            <h1></h1>
            <Paragraph 
                  
                  topImageUrl="https://uglycreation.files.wordpress.com/2016/02/img_0353-1.jpg"
                   
            />
            <Paragraph
                title="opinioni del cliente"
                subtite="eskere"
                avatarImageUrl="https://st.depositphotos.com/1269204/2716/i/600/depositphotos_27167511-stock-photo-smiling-middle-aged-man.jpg"
                columnCount="{2}"
                backgroundColor="#2c3e50"
                opacity={0.5}

                backgroundImageUrl="https://images8.alphacoders.com/866/thumb-1920-866198.jpg"
            >
               Ci sono stato e ragazzi credetemi ne vale la pena. Una delle migliori esperienze che io abbia mai avuto e si può fare in qualsiasi periodo dell'anno , sia d'estate con il caldo afoso che nella stagione delle piogge ( la mia preferita e secondo me la migliore).
            </Paragraph>
            
            <h1></h1>
        </Layout>
    )
}

