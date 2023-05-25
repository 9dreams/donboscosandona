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
                title="Sogno muy rico"
                description="Il sogno migliore a tema Dragon Ball"
                imageUrl="https://www.madmass.it/wp-content/uploads/2017/05/pirati-dei-caraibi-la-vendetta-di-salazar.jpg"
                opacity={0.2}
                height="75"
            />
            <h1></h1>
            <Paragraph
                title="Breve introduzione al sogno"
            >
               Benvenuti nell'incantevole Isola dei Caraibi, un luogo magico che evoca l'avventura e la leggenda dei temibili pirati dei Caraibi. Quest'isola a tema è un paradiso per gli amanti dei pirati, offrendo un'esperienza indimenticabile in un ambiente pittoresco.
               Mentre metti piede sull'isola, sarai accolto da una spettacolare baia, con un porto costellato di imponenti navi pirate ancorate. La vista di queste maestose imbarcazioni ti trasporterà in un'epoca di ardimentose battaglie e grandi ricchezze.
               L'atmosfera sull'isola è vibrante e autentica, con pirati vestiti con abiti sgargianti, occhiacci fulminanti e fedeli spade. I visitatori possono unirsi a queste temibili ciurme o semplicemente immergersi nella storia e nell'avventura che permeano ogni angolo dell'isola.
               Esplora i caratteristici vicoli del villaggio pirata, pieni di negozi che vendono cappelli da pirata, vestiti eleganti, mappe del tesoro e repliche di armi antiche. Gli spettacoli teatrali e le ricostruzioni di combattimenti navali catturano l'immaginazione di grandi e piccini, mentre la musica dei Caraibi riempie l'aria, invitandoti a ballare e a goderti la festa.
            </Paragraph>
            <h1></h1>
            <Paragraph 
                  
                  topImageUrl="https://images.everyeye.it/img-notizie/pirati-caraibi-confini-mondo-film-piU-costoso-disney-v5-439830.jpg"
                   
            />
            <Paragraph
                title="opinioni del cliente"
                subtite="eskere"
                avatarImageUrl="https://1.bp.blogspot.com/-9AWY0O8spEk/TpAMPSHVwfI/AAAAAAAAC5E/qGGFyC6eEQA/s1600/Image15.jpg"
                columnCount="{2}"
                backgroundColor="#2c3e50"
                opacity={0.5}

                backgroundImageUrl="https://upload.wikimedia.org/wikipedia/it/6/6d/Piratideicaraibi_lamaledizionedelforzierefantasma.jpg"
            >
               Ho avuto il piacere di visitare l'Isola a tema Pirati dei Caraibi, e devo dire che è stata un'esperienza indimenticabile. L'atmosfera creata sull'isola è semplicemente magica. 
               Fin dal momento in cui metti piede sulla terraferma, ti immergi in un mondo di avventura e di storia.
               Il villaggio pirata è affascinante, con i suoi vicoli caratteristici e i negozi che vendono oggetti a tema pirata. Ho potuto acquistare un autentico cappello da pirata e una mappa del tesoro per sentirmi parte di quel mondo incantato. Gli spettacoli teatrali e le ricostruzioni di battaglie navali erano incredibilmente realistici, e mi hanno trasportato in un'epoca di audacia e coraggio.
            </Paragraph>
            
            <h1></h1>
        </Layout>
    )
}

