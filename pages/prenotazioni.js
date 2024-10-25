import Head from 'next/head'

import {
  Layout,
  LandingHero,
  Products,
  SwiperNews,
  Paragraph,
  Sponsor,
  Table,
} from '/components'


function convertDateToLocalTime(dateString) {
  const date = new Date(dateString);
  return date.toLocaleString(); 
}

export default function Home({ data }) {
  let prenotazioni = data.bookings.filter((a) => a.status == 'ACCEPTED').sort((a, b) =>
    a.startTime.localeCompare(b.startTime)
  )

  return (
    <Layout>
      <Head />
      <Paragraph title='Prenotazioni Scuola Aperta'>
        {prenotazioni.map((prenotazione) => (
          <div className='border border-zinc-300 p-12 m-6 shadow-lg'>
            <h1>{convertDateToLocalTime(prenotazione.startTime)}</h1>
            <ul>
              {prenotazione.attendees.sort((a,b) => a.name.localeCompare(b.name)).map((iscritto) => (
                <li>{iscritto.name.toUpperCase()} - {iscritto.email}</li>
              ))}
            </ul>
          </div>
        ))}
      </Paragraph>
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch(
    'https://api.cal.com/v1/bookings?apiKey=cal_live_9c2f463077d591b9fd65e8294a7878ce'
  )
  const data = await res.json()

  return {
    props: { data },
    revalidate: 3600, // I dati vengono ricaricati al massimo una volta all'ora
  }
}
