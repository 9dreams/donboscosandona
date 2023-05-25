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
                title="Cristiano Ronaldo's Dream"
                description="Il sogno migliore organizzato a tema Cristiano Ronaldo"
                imageUrl="https://www.hdwallpapers.in/download/backside_of_cristiano_ronaldo_4k_hd_ronaldo-3840x2160.jpg"
                opacity={0.2}
                height="75"
            />
            <h1></h1>
            <Paragraph
                title="Breve introduzione al sogno"
            >
               Se hai sempre sognato di vivere una settimana da CR7 allora questo è il posto giusto. Grazie alla nostra esperienza deluxe potrai immergerti nella vita di questo campione provando sulla tua pelle la fatica, la fama, i soldi e molto altro. Potrai vedere e passare tute le squadre in cui Ronaldo ha giocato e trascorrereai un riassunto della sua vita che si è costruito con il passare degli anni, dalle delusioni alle vittorie. Grazie a questa esperienza capirai veramente cosa vuol dire essere un campione e se effettivamente il tuo vero sogno di diventare come lui si potrà avverare dato che proverai la vera sofferenza e dedizione che ha impiegato CR7.
            </Paragraph>
            <h1></h1>
            <Paragraph 
                  
                  topImageUrl="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt75a3c0e6c91f13ac/60dbed0f47339c0fc01dbb26/b08eed06dac2d44b3a3896c85ecade5dbc4dcd50.jpg"
                   
            />
            <Paragraph
                title="opinioni del cliente"
                subtite="eskere"
                avatarImageUrl="https://biografieonline.it/img/bio/Gerry_Scotti.jpg"
                columnCount="{2}"
                backgroundColor="#2c3e50"
                opacity={0.5}

                backgroundImageUrl="https://img.sportmediaset.mediaset.it/binary/14.$plit/C_29_fotogallery_1025281__ImageGallery__imageGalleryItem_21_image.jpg"
            >
               Ho sempre sognato di essere Cristiano Ronaldo, volevo essere un atleta completo e super famoso, pieno di macchine e soldi. Sin da piccolo ho sempre sognato di esser un calciatore famoso, anzi più precisamente CR7. Mi ha sempre attirato la sua detereminazione e il suo spirito da leader, inoltre le sue fantastiche abilità hanno fatto sempre parti dei miei sogni più grandi, fino ad oggi però dato che grazie a Dreams Island ho esaudito il mio più grande sogno di vivere una settimana come lui. Devo assolutamente confermare che è stata una fantastica esperienza, e che mi ha motivato ancora di più a diventare come lui. 
            </Paragraph>
            <Paragraph/>
            <h1></h1>
        </Layout>
    )
}

