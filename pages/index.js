import Head from 'next/head'
import Layout from '/components/layout'

import { getDatiArticoli } from '/lib/articoli'

export default function Home({ datiArticoli }) {
  return (
    <Layout>
      <Head>
      </Head>

      <h2>Ultimi articoli</h2>

      <ul>
        {datiArticoli.map(
          ({ id, date, title }) => (
            <li>
              {title}
              <br />
              {id}
              <br />
              {date}  
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
