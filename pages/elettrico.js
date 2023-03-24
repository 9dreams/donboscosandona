import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

import Head from 'next/head'
import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero2.js'
import Features from '/components/Features'
import Carousel from '/components/Carousel'
import PostInEvidenza from '/components/PostInEvidenza'
import Products from '/components/Products'
import Testimonials from '/components/Testimonials'
import Team from '/components/Team'
import Post from '/components/Post'

// Voci del menù per il componente LandingHero
let menu = [
    { title: 'Chi siamo', url: '/chi-siamo' },
    { title: 'Contatti', url: '/contatti' },
    { title: 'Dove siamo', url: '/dove-siamo' },
    { title: 'Trasparenza', url: '/trasparenza' },
]




const features = [
    {
        title: "installazione e manutenzione ",
        image: "/images/elettrico/download.png",
        description: "Interviene nell’installazione e manutenzione di impianti civili ed industriali"
    },
    {
        title: "Domotica",
        image: "https://www.casazerlini.it/storage/app/media/appartamenti/icone/domotica.png",
        description: "Realizza la programmazione dei componenti domotici e dei controllori programmabili"
    },
    {
        title: "Laboratori",
        image: "/images/elettrico/4211847-icona-cacciavite-costruzione-gratuito-vettoriale.jpg",
        description: "Esegue i disegni al CAD con la distribuzione dei componenti"
    },

]
let settori = [
    {
        title: "Elettrico",
        category: "QUALIFICA DI OPERATORE ELETTRICO",
        description: "Installa ed effettua la manutenzione di impianti civili e industriali, sia con tecnologie tradizionali che automatizzate. Realizza la programmazione dei componenti domotici e dei controllori programmabili industriali.",
        immagineUrl: "https://www.donboscosandona.it/img/column/42480c58c90ada8ff75c443fdde83ae71fea75ac.jpg?1539529685",
        url: "https://www.donboscosandona.it/elettrico"
    },
    {
        title: "Energia",
        category: "QUALIFICA DI OPERATORE DI IMPIANTI TERMO-IDRAULICI",
        description: "Interviene nell'installazione, collaudo e manutenzione di impianti termici, idraulici, di condizionamento e fotovoltaici, con una particolare attenzione al risparmio energetico, anche grazie alla building automation.",
        immagineUrl: "https://www.donboscosandona.it/img/column/417afaa0f0697f0f0aabf9ccf61030769cb76f14.jpg?1539529180",
        url: "https://www.donboscosandona.it/energia"
    },
    {
        title: "Informatico",
        category: "DIPLOMA DI TECNICO INFORMATICO",
        description: "Installa e configura hardware e software, esegue la manutenzione di sistemi, reti e terminali utente, fornisce assistenza tecnica, effettua l'elaborazione e la manutenzione di dati su archivi digitali. Con il quarto anno in Sistema Duale diventa tecnico sviluppatore di Soluzioni Software.",
        immagineUrl: "https://www.donboscosandona.it/img/column/97f264e9d16a0856dd2cb973630af1cac4426f73.jpg?1539529314",
        url: "https://www.donboscosandona.it/informatico"
    },
    {
        title: "Meccanico",
        category: "DIPLOMA DI TECNICO PER LA CONDUZIONE E LA MANUTENZIONE DI IMPIANTI AUTOMATIZZATI",
        description: "Realizza lavorazioni al tornio, fresatrice e macchine utensili in generale. Partendo dal progetto realizzato con il CAD effettua la programmazione delle macchine a controllo numerico. Realizza saldature ad arco, TIG, MAG, taglio al plasma.",
        immagineUrl: "https://www.donboscosandona.it/img/column/b0bd034769ac3471bf375239f1e64e39f5684aa6.jpg?1539523300",
        url: "https://www.donboscosandona.it/meccanico"
    },
    {
        title: "Motoristico / Carrozzeria",
        category: "QUALIFICA DI OPERATORE ALLA RIPARAZIONE DI VEICOLI A MOTORE",
        description: "Effettua riparazioni e manutenzione dei motori e dell'autoveicolo in tutte le sue parti. Effettua diagnosi e prove sui gas di scarico intervenendo per risolvere le anomalie.",
        immagineUrl: "https://www.donboscosandona.it/img/column/342f349c6bb5bbf9a37b95353df2bee2309b9792.jpg?1539524741",
        url: "https://www.donboscosandona.it/motoristico"
    },
]
let members = [
    {
        name: "don Nicola Munari",
        role: "DIRETTORE / CATECHISTA",
        description: "And I love you like Kanye",
        description1: "loves Kanye. We need to restart the human foundation",
        imageUrl: "https://media.gamerbrain.net/wp-content/uploads/2019/11/27094442/anima.jpg",
        email: "c.coso@donboscosandona.it",
        phone: '0421 3388949874950',
    },
    {
        name: "Alessandro Cappelletto",
        role: "PRESIDE",
        description: "And I love you like Kanye",
        description1: "loves Kanye. We need to restart the human foundation",
        imageUrl: "https://preview.redd.it/6ymh125pcra71.jpg?auto=webp&s=d0ec0c4112ca7a2a8f8228be3dfda0645091ac02",
        email: "c.ciaoooo@donboscosandona.it",
        phone: '123456',
    },
    {
        name: "Alessandro Ferro",
        role: "VICE-PRESIDE / TUTOR DIGITALE",
        description: "And I love you like Kanye",
        description1: "loves Kanye. We need to restart the human foundation",
        imageUrl: "https://media.licdn.com/dms/image/C5603AQHlyDoD0W6G-A/profile-displayphoto-shrink_800_800/0/1551801387517?e=2147483647&v=beta&t=JT3YTFL7g1ykrUcSwl7W0_iO0YSiBolctjntN2T9dCA",

        email: "a.ferro@donboscosandona.it",
        phone: '0421 111 222',
    },
    {
        name: "Anna Maria D'Ambrosio",
        role: "RESPONSABILE DELLA DISCIPLINA",
        description: "And I love you like Kanye",
        description1: "loves Kanye. We need to restart the human foundation",
        imageUrl: "https://www.webboh.it/wp-content/uploads/2020/10/Surry-758x424.jpg",
        email: "l.hdggfd@donboscosandona.it",
        phone: '12365598445',
    },
    {
        name: "Roberta Toffoletto e Alessia Zanin",
        role: "SEGRETERIA DIDATTICA",
        description: "And I love you like Kanye",
        description1: "loves Kanye. We need to restart the human foundation",
        imageUrl: "https://www.webboh.it/wp-content/uploads/2020/10/Surry-758x424.jpg",
        email: "c.cosocoso@donboscosandona.it",
        phone: '0421 123456338 950',
    },
    {
        name: "Andrea Pasqualetto",
        role: "ORIENTAMENTO IN ENTRATA / SOSTEGNO",
        description: "And I love you like Kanye",
        description1: "loves Kanye. We need to restart the human foundation",
        imageUrl: "https://www.webboh.it/wp-content/uploads/2020/10/Surry-758x424.jpg",
        email: "c.cosinocoso@donboscosandona.it",
        phone: '123456 338 950',
    },
    {
        name: "Francesco Cicogna",
        role: "COORDINATORE STAGE / CORSI PER ADULTI",
        description: "And I love you like Kanye",
        description1: "loves Kanye. We need to restart the human foundation",
        imageUrl: "https://preview.redd.it/6ymh125pcra71.jpg?auto=webp&s=d0ec0c4112ca7a2a8f8228be3dfda0645091ac02",
        email: "hhh.coso@donboscosandona.it",
        phone: '0421 338 950',
    },
    {
        name: "Martina Dianese",
        role: "ORIENTAMENTO IN USCITA / SERVIZI AL LAVORO",
        description: "And I love you like Kanye",
        description1: "loves Kanye. We need to restart the human foundation",
        imageUrl: "https://media.licdn.com/dms/image/C5603AQHlyDoD0W6G-A/profile-displayphoto-shrink_800_800/0/1551801387517?e=2147483647&v=beta&t=JT3YTFL7g1ykrUcSwl7W0_iO0YSiBolctjntN2T9dCA",
        email: "c.coso@donboscosandona.it",
        phone: '0421 338 950',
    },
]

export default function Elettrico() {
    return (
        <Layout>
            <Head />
            {

            }
            <LandingHero
                opacity={0.5}
                siteName="CFP DON BOSCO"
                title="Settero Elettrico"
                description="OPERATORE ELETTRICO"
                buttonUrl={'https://www.youtube.com/watch?v=wyjm1yGmu9g'}
                buttonText="Guarda il video"
                imageUrl="/images/elettrico/elet1.jpg"
                menu={menu}
            />
        
            <Features
                title="I nostri punti di forza"
                description="Scopri perché il CFP DON BOSCO è davvero la scuola che fa al caso tuo!"
                features={features}
                cardWidth={4
                }
            />
                <Products
                title="I settori"
                description="Un'ampia scelta di indirizzi professionali: scopri quello che ti accende di più!"
                cardWidth={4}
                products={settori}
            />
            
            <Team
                title="Contatti"
                description="Formatori che ti aiutano a crescere con il cuore di don Bosco"
                members={members}
                cardWidth={3}
            />
        </Layout>
    )
}