import Head from 'next/head'

import { Container, Typography } from '@mui/material'

import Layout from '/components/Layout'
import Date from '/components/Date'
import LandingHero from '/components/LandingHero2'

import { getIdArticoli, getDatiArticolo } from '/lib/articoli'

// Voci del menù per il componente LandingHero
let menu = [
    { title: 'Chi siamo', url: '/chi-siamo' },
    { title: 'Contatti', url: '/contatti' },
    { title: 'Dove siamo', url: '/dove-siamo' },
    { title: 'Trasparenza', url: '/trasparenza' },
]

export default function Articolo({ datiArticolo }) {
    return (
        <Layout>
            <Head>
                <title>{datiArticolo.title}</title>
                <meta name="og:title" content={datiArticolo.title} />
            </Head>
            <LandingHero
                opacity={0.5}
                siteName="CFP DON BOSCO"
                title={datiArticolo.title}
                description={datiArticolo.abstract}
                buttonUrl=""
                buttonText="Guarda il video"
                imageUrl={datiArticolo.imageUrl}
                menu={menu}
            />
            <Container
                maxWidth="lg"
                sx={{
                    paddingTop: '5rem',
                    paddingBottom: '5rem',
                    minHeight: '70vh'
                }}
            >
                <Date dateString={datiArticolo.date} />
                <div dangerouslySetInnerHTML={{ __html: datiArticolo.contentHtml }} />
            </Container>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getIdArticoli()

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const datiArticolo = await getDatiArticolo(params.id)

    return {
        props: {
            datiArticolo,
        },
    }
}