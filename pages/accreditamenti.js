
import Head from 'next/head'
import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero.js'
import Products from '/components/Products'
import { getDatiArticoli } from '/lib/articoli'


let settori = [
    {
        title: "ISO 9001:2015 Reg. n. 2593-A - Settore EA: 37",
        category: "",
        description: "",
        immagineUrl: "/images/accreditamenti/ISO9001.jpg",
        url: "https://www.accredia.it/"
    },
    {
        title: "Progettazione ed erogazione di attività formative e di orientamento",
        category: "",
        description: "",
        immagineUrl: "/images/accreditamenti/kiwa.jpg",
        url: "https://www.kiwa.com/it/it/"
    },
    {
        title: "Authorised Training Center",
        category: "",
        description: "",
        immagineUrl: "/images/accreditamenti/KNX.jpg",
        url: "https://www.knx.org/knx-it/per-la-tua-casa/vantaggi/end-customers/?gclid=Cj0KCQjw8qmhBhClARIsANAtbodrPzllABHMVAz7hZ-NkVFU1FsmZYKx5UGglzySeQ-DAs8mMIRXQvMaAgHJEALw_wcB"
    },
    {
        title: "Cod. A033 - Formazione Iniziale,Superiore e Orientamento",
        category: "",
        description: "",
        immagineUrl: "/images/accreditamenti/Organismo.jpg",
        url: "https://www.regione.veneto.it/web/lavoro/accreditamento-FORMAZIONE"
    },
]



export default function Home({ datiArticoli }) {
    return (
        <Layout>
            <Head />
            <LandingHero
                eyebrow="Qualità"
                title="Accreditamenti"
                description="Accreditamenti e certificazioni rilasciate al nostro Centro"
                buttonUrl={'https://www.youtube.com/watch?v=wyjm1yGmu9g'}
                buttonText="Guarda il video"
                imageUrl="/images/accreditamenti/accreditamento.jpg"
            />
            <Products
                title="Accreditamenti"
                description=""
                cardWidth={3}
                products={settori}
            />
        </Layout>
    )
}

export async function getStaticProps() {
    const datiArticoli = getDatiArticoli()
    return {
        props: {
            datiArticoli,
        },
    }
}