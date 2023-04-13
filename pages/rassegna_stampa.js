import Head from 'next/head'
import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero2'
import Products from '/components/Products'

let rassegna_stampa = [
    {
        category: "Dal Centro don Bosco nasce un'agenzia web",
        description: "Articolo pubblicato sul Il Gazzettino - 23 gennaio 2021",
        immagineUrl: "/images/rassegna_stampa/agenzia.jpg",
        url: "/docs/rassegna_stampa/agenzia.pdf"
    },
    {
        category: "Al don Bosco di San Donà si spiega davanti al computer",
        description: "Articolo pubblicato su La Nuova Venezia - 4 Marzo 2020",
        immagineUrl: "/images/rassegna_stampa/computer.jpg",
        url: "/docs/rassegna_stampa/computer.pdf"
    },
    {
        category: "La fucina dei meccanici - Don Bosco, boom di iscritti",
        description: "Articolo pubblicato su Il Gazzettino Venezia-Mestre - 5 novembre 2018",
        immagineUrl: "/images/rassegna_stampa/fucina.jpg",
        url: "/docs/rassegna_stampa/fucina.pdf"
    },
    {
        category: "Servono operai specializzati - Appello per il Don Bosco",
        description: "Articolo pubblicato su Il Gazzettino Venezia-Mestre - 4 giugno 2018",
        immagineUrl: "/images/rassegna_stampa/operai.jpg",
        url: "/docs/rassegna_stampa/operai.pdf"
    },
    {
        category: "Un bagno di folla per Pippo Inzaghi",
        description: "Articolo pubblicato su La Nuova Venezia-Mestre - 1 febbraio 2018",
        immagineUrl: "/images/rassegna_stampa/inzaghi.jpg",
        url: "/docs/rassegna_stampa/inzaghi.pdf"
    },
    {
        category: "Il video dei ragazzi emoziona Inzaghi: mi date forza",
        description: "Articolo pubblicato su Il Gazzettino Venezia-Mestre - 1 febbraio 2018",
        immagineUrl: "/images/rassegna_stampa/forza.jpg",
        url: "/docs/rassegna_stampa/forza.pdf"
    },
    {
        category: "Inaugurazione aule 2018",
        description: "Articolo pubblicato su Il Gazzettino Venezia-Mestre - 23 gennaio 2018",
        immagineUrl: "/images/rassegna_stampa/aule.jpg",
        url: "/docs/rassegna_stampa/aule.pdf"
    },
    {
        category: "Quality pro: la riparazione si forma con qualità",
        description: "Articolo pubblicato su PARTS IN OFFICINA - N.2 - marzo/aprile 2017",
        immagineUrl: "/images/rassegna_stampa/quality.jpg",
        url: "/docs/rassegna_stampa/quality.pdf"
    },
]


export default function Home() {
    return (
        <Layout>
            <Head />
            <LandingHero
                opacity={0.8}
                siteName="CFP DON BOSCO"
                title="RASSEGNA STAMPA"
                description="Articoli apparsi sulla stampa ufficiale"
                imageUrl="https://www.focusjunior.it/content/uploads/2021/06/giornali-gazzetta-corriere.jpg"
            />
            <Products
             cardWidth={3}
             products={rassegna_stampa}
             />
        </Layout>
    )
}