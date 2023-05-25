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
                title="Pirati dei caraibi"
                description="Il sogno migliore a tema della vita da ricchi"
                imageUrl="https://images.unsplash.com/photo-1604689598793-b8bf1dc445a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                opacity={0.2}
                height="75"
            />
            <h1></h1>
            <Paragraph
                title="Breve introduzione al sogno"
            >
               Mi ritrovo immerso in un mondo onirico avvolto da sfavillanti bagliori d'oro. Cammino su un sentiero di diamanti, mentre l'aria profuma di lusso e opulenza. In ogni angolo si ergono sontuose dimore con giardini incantevoli e fontane scintillanti. Sono circondato da persone vestite di sete lucenti e gioielli sfavillanti, sorridono e brindano al successo. Sentendomi invaso da una sensazione di abbondanza, mi ritrovo tra le mura di una banca imponente, il simbolo stesso del potere finanziario. Le casseforti si aprono magicamente, rivelando montagne di monete d'oro e banconote che fluttuano nell'aria come foglie preziose. La mia anima si riempie di gioia mentre immergo le mani in questo mare di ricchezza. Mi sento libero, in grado di realizzare ogni desiderio. Ma nel profondo del mio cuore, capisco che la vera ricchezza risiede nel condividere questo benessere con coloro che amo.
            </Paragraph>
            <h1></h1>
            <Paragraph 
                  
                  topImageUrl="https://cdn.shopify.com/s/files/1/0566/6534/2108/products/1A1A2171-2-2000x800_2000x.jpg?v=1649852929"
                   
            />
            <Paragraph
                title="opinioni del cliente"
                subtite="eskere"
                avatarImageUrl="https://cdn.motor1.com/images/mgl/pElZo/s1/4x3/tequila-lanciafiamme-e-tavole-da-surf-tutte-le-pazzie-di-elon-musk.webp"
                columnCount="{2}"
                backgroundColor="black"
                opacity={0.5}

                backgroundImageUrl="https://images.unsplash.com/photo-1624365169364-0640dd10e180?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            >
               "Sono rimasto incantato dal mio sogno sulla ricchezza! Mi sono ritrovato circondato da lussuose ville, macchine di lusso e abiti eleganti. Ogni desiderio si avverava con un semplice schiocco delle dita. L'atmosfera era permeata di opulenza e successo. Mi sono svegliato con un sorriso, desiderando che quel sogno diventasse realtà nella mia vita. Un'esperienza onirica davvero coinvolgente!"
            </Paragraph>
            <Paragraph/>
            <h1></h1>
        </Layout>
    )
}

