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
                title="Fantasy Island"
                description="La migliore isola a tema fantasy"
                imageUrl="https://wallpapercave.com/wp/wp8020214.jpg"
                opacity={0.2}
                height="75"
            />
            <h1></h1>
            <Paragraph
                title="Breve introduzione al sogno"
            >
               Benvenuti nell'Isola del Fantasy, un luogo incantato che ti trasporterà in un mondo di magia e meraviglia. Quest'isola a tema fantasy è un vero e proprio paradiso per gli amanti dell'immaginazione e dell'avventura.
               Appena metterai piede sull'isola, sarai accolto da una vista mozzafiato: imponenti montagne dalle cime avvolte dalle nuvole, foreste incantate che risuonano di melodie misteriose e una costa costellata di spiagge di sabbia dorata. L'aria stessa sembra vibrare di magia, creando una sensazione di meraviglia e stupore.
               L'intera isola è un vero e proprio regno fantastico, con castelli imponenti, torri di cristallo e ponti sospesi che collegano foreste incantate e valli nascoste. Ogni angolo dell'isola nasconde creature magiche, come elfi, fate e unicorni, pronti a incantarti con la loro bellezza e il loro mistero.
               Puoi esplorare sentieri avventurosi attraverso le foreste incantate, scoprire antichi tesori in grotte segrete o immergerti nelle acque cristalline di laghi incantati. Gli abitanti dell'isola ti accoglieranno a braccia aperte e saranno felici di condividere con te le loro storie e conoscenze magiche.
            </Paragraph>
            <h1></h1>
            <Paragraph 
                  
                  topImageUrl="https://wallpapers.net/world-fantasy-hd-wallpaper/download/3840x2160.jpg"
                   
            />
            <Paragraph
                title="opinioni del cliente"
                subtite="eskere"
                avatarImageUrl="https://thumbs.dreamstime.com/b/icona-del-segno-dell-utente-simbolo-della-persona-avatar-umano-84519083.jpg"
                columnCount="{2}"
                backgroundColor="#2c3e50"
                opacity={0.5}

                backgroundImageUrl="https://w.forfun.com/fetch/f4/f4b6dd382b9815ed340d123be37c7cdd.jpeg"
            >
              Ho avuto il privilegio di visitare l'Isola del Fantasy, e posso dire che è stata un'esperienza fuori dal comune. L'isola è un vero e proprio regno incantato, dove la fantasia prende vita in ogni suo angolo.
             Fin dal momento in cui ho messo piede sull'isola, sono stato accolto da una bellezza senza pari. Le montagne imponenti, le foreste incantate e le spiagge dorate hanno creato un panorama mozzafiato, come se fossi entrato in un dipinto magico.
             L'atmosfera sull'isola è pervasa da una magia tangibile. Ho avuto l'opportunità di incontrare creature fantastiche come elfi, fate e unicorni, che sembravano usciti dalle pagine di un libro di favole. Ogni passo mi faceva scoprire nuove meraviglie e mi faceva sentire parte di un mondo incantato.

            </Paragraph>
            
            <h1></h1>
        </Layout>
    )
}

