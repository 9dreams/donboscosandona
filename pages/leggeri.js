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
                title="Goku's Dream"
                description="Il sogno migliore a tema Dragon Ball"
                imageUrl="https://www.xtrafondos.com/wallpapers/resoluciones/19/casa-kame-de-dragon-ball_2560x1440_3963.jpg"
                opacity={0.2}
                height="75"
            />
            <h1></h1>
            <Paragraph
                title="Breve introduzione al sogno"
            >
               Nel mio sogno di Dragon Ball, mi ritrovo catapultato in un mondo di emozioni e avventure senza limiti. Mi unisco ai leggendari guerrieri Z, come Goku, Vegeta e gli altri, e intraprendiamo un epico viaggio attraverso dimensioni sconosciute. Attraverso pianeti straordinari e galassie lontane, affrontiamo sfide mortali e combattiamo nemici temibili. Sperimento il potere del Ki e imparo tecniche di combattimento sorprendenti, trasformandomi in Super Saiyan per affrontare minacce sempre più grandi. L'energia vibrante dei combattimenti riempie l'aria, mentre lancio pugni e calci ad alta velocità. Ogni scontro è un test di forza, intelligenza e determinazione, in cui superare i propri limiti è fondamentale per progredire. Durante il viaggio, stringo amicizie profonde con i miei compagni di squadra, imparando l'importanza dell'unità e della lealtà. Ogni vittoria è festeggiata con entusiasmo, e ogni sconfitta diventa un'opportunità per crescere e migliorarsi. Attraverso il cielo stellato, solco i mari e sfido il destino stesso, consapevole che il potere dell'universo è nelle mie mani. Alla fine del viaggio, mi rendo conto che la vera forza risiede nel cuore e nell'amore per coloro che mi circondano. E mentre il sogno si dissolve, il ricordo di quell'esperienza straordinaria rimane impresso nel mio animo, alimentando la mia determinazione nella vita reale.
            </Paragraph>
            <h1></h1>
            <Paragraph 
                  
                  topImageUrl="https://prod.assets.earlygamecdn.com/images/Dragon-Ball-Idle.jpg?mtime=1683561307"
                   
            />
            <Paragraph
                title="opinioni del cliente"
                subtite="eskere"
                avatarImageUrl="https://static.vecteezy.com/ti/foto-gratuito/p1/919781-happy-man-dare-thumbs-up-sign-foto.jpg"
                columnCount="{2}"
                backgroundColor="#2c3e50"
                opacity={0.5}

                backgroundImageUrl="https://i.imgur.com/JmrAs6G.jpg"
            >
               Ci sono stato per un estate intera ed è stata la migliore che io abbia mai passato , i costi non sono elevati e il servizio è veramente ottimo, ho scelto l'opzione del sogno in cooperativa , ovvero con più persone che hanno diversi gruppi e diversi ruoli. Ho partecipato nel ruolo di Crilin e nonostate io sia morto 4 volte mi sono divertito al massimo..
            </Paragraph>
            
            <h1></h1>
        </Layout>
    )
}

