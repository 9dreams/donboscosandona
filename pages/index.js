import Head from 'next/head'
import Layout from '/components/layout'
import Link from 'next/link'

import { getDatiArticoli } from '/lib/articoli'
import Date from '/components/date'

export default function Home({ datiArticoli }) {
  return (
    <Layout>
      <Head>
      </Head>

      <h2>Ultimi articoli</h2>

      <ul>
        {datiArticoli.map(
          ({ id, date, title }) => (
            <li key={id}>
              <Link href={'/articoli/' + id}>{title}</Link>
              <br />
              <small><Date dateString={date} /></small>
              <br />
            </li>
          )
        )}
      </ul>

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
