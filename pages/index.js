import { Container, Grid, Typography } from '@mui/material'
import {
  Carousel,
  Certifications,
  Layout,
  LandingHero,
  Features,
  Products,
  Calendar,
  Testimonials,
  Team,
  Maps,
  Paragraph,
  Table,
  News,
  SwiperNews,
  Featured,
  NavBar,
  Logos,
  Sponsor,
  Elements,
} from '/components'

export default function Home({ data, elementi }) {
  return (
    <Layout>
       <Carousel slides={slides} />
      </Layout>
      )
      }
      export async function getStaticProps() {
        let res = await fetch(
          'https://channels.donboscosandona.it/api/posts/inoratorio'
        )
        const data = await res.json()
      
        res = await fetch(
          'https://channels.donboscosandona.it/api/posts/donboscosandona_elements'
        )
        const elementi = await res.json()
      
        return {
          props: { data, elementi },
          // Next.js will attempt to re-generate the page:
          // - When a request comes in
          // - At most once every 10 minutes
          revalidate: 1800, // In secondi: il build viene fatto al massimo una volta ogni mezzora
        }
      }
      let slides = [
        {
          titolo: 'LE NOVITA DELLA SCUOLA PRIMARIA!',
          descrizione:
            'Scopri tutte le nostre novità di questo anno!',
          immagine:
            '/images/scuolaprimaria.jpg',
          colore: '#ED4C67',
          colore2: 'rgba(100,100,100,0)',
          opacity: 0.8,
          blur: '0.5rem',
          buttonText: 'Scopri di più!',
          buttonUrl: 'https:...',
        },
        {
          titolo: 'Fatti un bel giro',
          descrizione:
            'Scopri tutti i segreti del nostro Centro con il tour virtuale!',
          immagine:
            '/images/scuolaprimaria2.jpg',
          colore: '#ED4C67',
          colore2: 'rgba(100,100,100,0)',
          opacity: 0.8,
          blur: '0.5rem',
          buttonText: 'Scopri di più!',
          buttonUrl: 'https:...',
        },
        {
          titolo: 'Fatti un bel giro',
          descrizione:
            'Scopri tutti i segreti del nostro Centro con il tour virtuale!',
          immagine:
            '/images/scuolaprimaria3.jpg',
          colore: '#ED4C67',
          colore2: 'rgba(100,100,100,0)',
          opacity: 0.8,
          blur: '0.5rem',
          buttonText: 'Scopri di più!',
          buttonUrl: 'https:...',
        },
        {
          titolo: 'Fatti un bel giro',
          descrizione:
            'Scopri tutti i segreti del nostro Centro con il tour virtuale!',
          immagine:
            '/images/scuolaprimaria4.jpg',
          colore: '#ED4C67',
          colore2: 'rgba(100,100,100,0)',
          opacity: 0.8,
          blur: '0.5rem',
          buttonText: 'Scopri di più!',
          buttonUrl: 'https:...',
        },
        {
          titolo: 'Fatti un bel giro',
          descrizione:
            'Scopri tutti i segreti del nostro Centro con il tour virtuale!',
          immagine:
            '/images/scuolaprimaria5.jpg',
          colore: '#ED4C67',
          colore2: 'rgba(100,100,100,0)',
          opacity: 0.8,
          blur: '0.5rem',
          buttonText: 'Scopri di più!',
          buttonUrl: 'https:...',
        },
      ]