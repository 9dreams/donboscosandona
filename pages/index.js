import {
  Layout,
  Maps,
  SwiperNews,
  Featured,
} from '/components'

export default function Home({ data }) {
  return (
    <Layout>
      <Featured data={data} />
      <SwiperNews title='News' data={data} limit={12} />
      <Maps
        maxWidth='100%'
        maxHeight='550px'
        url='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5580.05343317009!2d12.5710658!3d45.6301996!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477956fe076b4157%3A0x29fb231d47465883!2sCnos%20Fap%20Don%20Bosco!5e0!3m2!1sit!2sit!4v1680507660807!5m2!1sit!2sit'
      />
    </Layout>
  )
}

/* // This gets called on every request
export async function getServerSideProps() {
  const res = await fetch(
    'https://channels.donboscosandona.it/api/posts/donboscosandona'
  )
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
} */

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps() {
  const res = await fetch(
    'https://channels.donboscosandona.it/api/posts/donboscosandona'
  )
  const data = await res.json()

  return {
    props: { data },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 minutes
    revalidate: 600, // In secondi: il build viene fatto al massimo una volta ogni dieci minuti
  }
}


