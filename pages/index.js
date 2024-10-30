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
       <Paragraph
        title='QUALITA TRADIZIONE & GUSTO'
        subtitle='LA NOSTRA FILIOSOFIA DAL 1972'
        avatarImageUrl='https://dapino.it/wp-content/uploads/2023/07/homepino-2.jpg'
      >
      Tutta la qualità e i sapori della tradizione gastronomica italiana.

La cucina del ristorante Da Pino è il luogo dove il gusto prende forma.

Solo i migliori ingredienti, selezionati con cura e attenzione, provenienti dalle zone più vocate per qualità e genuinità e lavorati per offrire ogni giorno piatti unici e raffinati.

Mani infarinate che distendono con energia l’impasto, una base lievitata a lungo che poco a poco si tinge di un bel rosso acceso, ma anche di bianco e di altri infiniti colori.

Le sfumature e i profumi dei sapori unici infatti si riscoprono così, su un impasto elastico, morbido e digeribile, unico nel suo genere, che ne valorizza ogni sfaccettatura.
      </Paragraph>
      <Products
        title='I prodotti'
        description="Un'ampia scelta di gusti!"
        cardWidth={4}
        cardWidthXs={12}
        products={prodotti3}
      />
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
          titolo: 'LE NOVITA DELLA NOSTRA PIZZERIA!',
          descrizione:
            'Scopri tutte le nostre nuove pizze!',
          immagine:
            '/images/pizzeria.jpg',
          colore: '#ED4C67',
          colore2: 'rgba(100,100,100,0)',
          opacity: 0.3,
          blur: '0.1rem',
          buttonText: 'Scopri di più!',
          buttonUrl: 'https:...',
        },
        {
          titolo: 'Pino in festa!',
          descrizione:
            'Pino compie 50 anni!',
          immagine:
            '/images/50.jpg',
          colore: '#ED4C67',
          colore2: 'rgba(100,100,100,0)',
          opacity: 0.3,
          blur: '0.1rem',
          buttonText: 'Scopri di più!',
          buttonUrl: 'https:...',
        },
        {
          titolo: 'Vieni ad assaggiare tutte le nostre pizze!',
          descrizione:
            'Scopri anche i gusti speciali!',
          immagine:
            '/images/pizza2.jpeg',
          colore: '#ED4C67',
          colore2: 'rgba(100,100,100,0)',
          opacity: 0.3,
          blur: '0.1rem',
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
      let prodotti3 = [
        {
          title: 'PIZZE',
          category: '',
          description:
            'Ingredienti di qualità, una lunga lievitazione e una farcitura ricca e gustosa. Le nostre pizze sono il ritratto della leggerezza e del gusto. Delle pennellate di colore su una base croccante e digeribile, sempre al passo con la stagionalità e con prodotti di primissima scelta, selezionati direttamente da noi.',
          immagineUrl:
            'https://dapino.it/wp-content/uploads/2021/05/app-pizzalonga-pizzalonga.jpg',
        },
        {
          title: 'PASTA',
          category: '',
          description:
            "IL SAPORE DELLA TRADIZIONE. Solo i migliori ingredienti selezionati con attenzione e provenienti dalle zone più vocate per qualità e genuinità, lavorati per offrire ogni giorno piatti unici e raffinati.",
          immagineUrl:
            'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/a0/7b/d4/da-pino.jpg?w=1200&h=-1&s=1',
          url: '/energia',
        },
        {
          title: 'PESCE',
          category: '',
          description:
            "Vivi con noi i tuoi momenti speciali. Un evento, una festa, un anniversario, un meeting o una convention aziendale. I ristoranti Da Pino sono i locali ideali per condividere con la famiglia, gli amici o i colleghi un traguardo o un momento importante. Contattaci per saperne di più.",
          immagineUrl:
            'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/7a/ae/8d/20170527-204757-largejpg.jpg?w=1200&h=-1&s=1',
          url: '/informatico',
        },
      ]