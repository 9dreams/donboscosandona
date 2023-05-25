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
                title="Batman's Dream"
                description="Il sogno migliore a tema del personaggio di Batman"
                imageUrl="https://images.hdqwalls.com/download/4k-the-batman-knight-yu-1920x1080.jpg"
                opacity={0.2}
                height="75"
            />
            <h1></h1>
            <Paragraph
                title="Breve introduzione al sogno"
            >
               Mi ritrovai in una Gotham City cupa e minacciosa, avvolta dalle tenebre. Mentre camminavo per le strade deserte, un simbolo scuro risplendeva nel cielo notturno: il segno distintivo di Batman. Sentii un'ombra avvicinarsi e improvvisamente fui circondato da una serie di avversari sinistri. Ma all'improvviso Batman apparve, saltando dagli edifici circostanti con la sua maestria e potenza. Insieme combattiamo il male, mentre il suono delle nostre mosse echeggiava per le strade vuote. La mia paura si trasformò in coraggio e mi sentii parte di un'epica lotta per la giustizia. Il sogno si concluse con Batman scomparendo nelle ombre, lasciando un senso di speranza e la promessa che il male non avrebbe mai trionfato a Gotham City.
            </Paragraph>
            <h1></h1>
            <Paragraph 
                  
                  topImageUrl="https://cdn0.sbnation.com/polygon/2014-e3/cover-images/Batman.jpg"
                   
            />
            <Paragraph
                title="opinioni del cliente"
                subtite="eskere"
                avatarImageUrl="https://www.unina.it/documents/11897/0/Stephen+Hawking/a3c01826-103b-4e37-892c-9894e9d5127c?t=1521118239047"
                columnCount="{2}"
                backgroundColor="#2c3e50"
                opacity={0.5}

                backgroundImageUrl="https://media-assets.wired.it/photos/615d99fd9c11e61f3ea824d0/16:9/w_1280,c_limit/wired_placeholder_dummy.png"
            >
               "Wow! Il mio sogno a tema Batman è stato semplicemente epico! Mi sono sentito come un vero supereroe, sfrecciando tra le strade di Gotham City e lottando contro i criminali. L'attenzione ai dettagli e l'atmosfera coinvolgente mi hanno fatto vivere un'esperienza unica. Consigliatissimo!"
            </Paragraph>
            
            <Paragraph/>
            <h1></h1>
        </Layout>
    )
}

