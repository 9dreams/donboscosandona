import LandingHero from 'dev/fv/LandingHero'
import { getDatiArticoli } from '/lib/articoli'

import Head from 'next/head'
import Layout from '/components/Layout'
import PostInEvidenza from '/components/PostInEvidenza'

let postInEvidenza = {
    titolo: 'Le folli notti di Bilal',
    descrizione: 'Il dott. Bilal, noto migliardario pieno di schèi, passa le sue notti tra belle ragazze e partite a poker. Come inviati di donboscosandona siamo riusciti ad accedere a questo mondo esclusivo per raccontarvelo in prima persona...',
    immagine: 'https://media.istockphoto.com/id/522728130/it/foto/amici-divertirsi-giocando-a-poker.jpg?s=612x612&w=is&k=20&c=w2_p0SHrR_-cmURmZY9-dHXu3-qqVqN9QkdiZrgJpfc=',
    testoImmagine: 'Bilal seduto su un divanetto in mezzo a due tipe.',
    testoLink: 'Continua a leggere e scopri la cosa pazzesca che hanno fatto...',
  }

let settori = [
    { title: 'Informatico', url: "https://cinema.donboscosandona.it" },
    { title: 'Energie', url: '/energie' },
    { title: 'Elettrico', url: '/elettrico' },
    { title: 'Meccanico', url: '/meccanico' },
]

export default function Home({ datiArticoli }) {
    return (
        <Layout>
            <Head>
            </Head>
            <PostInEvidenza post={postInEvidenza} />
            <LandingHero
                siteName="CFP DON BOSCO"
                title="Your Story Starts With Us."
                description="Every landing page needs a small description......."
                imageUrl="https://source.unsplash.com/random"
                opacity={0.7}
                buttonText="WATCH VIDEO"
                buttonUrl="https://cinema.donboscosandona.it"
                menu={settori} 
            />
        </Layout>
    )
}

export async function getStaticProps() {
    const datiArticoli = getDatiArticoli();
    return {
        props: {
            datiArticoli,
        },
    }
}
