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
        title='PIANO TRIENNALE DELL’OFFERTA FORMATIVA'
        subtitle='Saluto del Direttore'
        avatarImageUrl='https://miurjb18.pubblica.istruzione.it/PTOF-FAMIGLIE/assets/img/ptof.png'
      >
      Il Piano Triennale dell'Offerta Formativa (PTOF) è il documento fondamentale costitutivo dell'identità culturale e progettuale delle istituzioni scolastiche ed esplicita la progettazione curricolare, extracurricolare, educativa e organizzativa che le singole scuole adottano nell'ambito della loro autonomia. Il piano è coerente con gli obiettivi generali ed educativi dei diversi tipi e indirizzi di studi e riflette le esigenze del contesto culturale, sociale ed economico della realtà locale, tenendo conto della programmazione territoriale dell'offerta formativa.
      </Paragraph>
      <Products
        title='I prodotti'
        description="Un'ampia scelta di indirizzi professionali: scopri quello che ti accende di più!"
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
      let prodotti3 = [
        {
          title: 'MUSICALE',
          category: '',
          description:
            'Il musicale e coreutico, articolato nelle rispettive sezioni, è indirizzato all’apprendimento teorico e tecnico-pratico della musica o della danza. Gli studenti acquisiscono, attraverso specifiche attività di composizione, interpretazione, esecuzione e rappresentazione, la padronanza della musica primo e secondo strumento o della danza classica o contemporanea',
          immagineUrl:
            'https://www.mississippimusicschool.it/wp-content/uploads/2023/10/Classificazione-degli-Strumenti-Musicali-piu-noti.jpg',
        },
        {
          title: 'CLASSICO',
          category: '',
          description:
            "Il classico consente di approfondire lo studio della civiltà classica e della cultura umanistica (letteratura italiana e straniera, storia, filosofia, storia dell’arte), senza per questo trascurare le scienze matematiche, fisiche e naturali. Gli studenti possono così comprendere la realtà contemporanea alla luce del confronto con la civiltà classica, che ha avuto un ruolo decisivo nella formazione della civiltà occidentale. L’accesso alla cultura classica è assicurato dallo studio intensivo del greco antico e del latino.",
          immagineUrl:
            'https://www.scuolawebinar.it/wp-content/uploads/2022/03/book-with-green-board-background-1024x683.jpg',
          url: '/energia',
        },
        {
          title: 'LINGUISTICO',
          category: '',
          description:
            "Il linguistico consente di approfondire lo studio di tre lingue e culture straniere nel quadro delle tipiche materie liceali (italiano, latino, lingua straniera, storia e geografia, matematica, fisica, scienze naturali e storia dell’arte). Una materia (a partire dal terzo anno) o due (a partire dal quarto anno) sono insegnate in lingua straniera.",
          immagineUrl:
            'https://blog.planyourfuture.eu/wp-content/uploads/2020/02/liceo-linguistico-768x576.jpg',
          url: '/informatico',
        },
      ]