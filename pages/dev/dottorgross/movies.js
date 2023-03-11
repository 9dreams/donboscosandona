import Head from 'next/head'
import Layout from '/components/Layout'
import Movies from '/dev/dottorgross/Movies'

export default function Page({data}) {
  return (
    <Layout>
      <Head>
      </Head>
      <Movies data={data} />
    </Layout>
  )
}

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export async function getStaticProps() {
  const data = await fetcher('https://cinema.donboscosandona.it/movie/featured.json')

  return {
    props: {
      data
    }
  }
}


