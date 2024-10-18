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
      <LandingHero
        opacity={0.5}
        title='scuola primaria E.De Amicis'
        description='Diventa adulto con il metodo educativo di don Bosco preparandoti ad entrare a testa alta nel mondo professionale di domani!'
        imageUrl='https://static.vecteezy.com/system/resources/previews/011/520/307/original/under-construction-web-page-warning-vector.jpg'
      />
      </Layout>
      )
      }