import Head from 'next/head'

import Layout from '/components/layout'
import Date from '/components/date'

import { getIdArticoli, getDatiArticolo } from '/lib/articoli'

export default function Articolo({ datiArticolo }) {
    return (
        <Layout>
            <Head>
                <title>{datiArticolo.title}</title>
                <meta name="og:title" content={datiArticolo.title} />
            </Head>
            <h1>{datiArticolo.title}</h1>
            <br />
            <Date dateString={datiArticolo.date} />
            <div dangerouslySetInnerHTML={{ __html: datiArticolo.contentHtml }} />
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