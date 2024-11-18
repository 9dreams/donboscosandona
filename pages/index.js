import { Container, Grid, Typography, Box } from '@mui/material'
import { Layout, NewsCard, Credits } from '/components'
import { AccessTime, Info, Group, Star } from '@mui/icons-material'

export default function Home({ data, elementi }) {
  return (
    <Layout>
      <Box id='home' sx={{ position: 'relative', width: '100%', mb: 4 }}>
        <img src='images/fotoragazzi.jpg' width='100%' height='100vh'></img>
      </Box>
      <Container>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography
            variant='h3'
            gutterBottom
            sx={{
              fontWeight: 'bold',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 1, // Per distanziare l'icona dal testo
            }}
          >
            <Info
              id='chi-siamo'
              fontSize='large'
              sx={{ color: 'primary.main' }}
            />
            Chi Siamo
          </Typography>
        </Box>
        <Typography variant='body1' paragraph sx={{ lineHeight: 1.7, mb: 3 }}>
          <strong>Anffas San Donà di Piave APS</strong>, ente locale di Anffas
          Nazionale, Associazione di famiglie di persone con disabilità
          intellettive e del neuro-sviluppo, è un Ente del Terzo Settore
          presente nel territorio sandonatese dal 1974, con quasi un centinaio
          di famiglie iscritte, provenienti dai comuni dell’Asl 4 Veneto
          Orientale.
        </Typography>
        <Typography variant='body1' paragraph sx={{ lineHeight: 1.7, mb: 3 }}>
          Le finalità associative sono la tutela e la promozione della persona
          con disabilità intellettiva, promuovendo l’inclusione sociale nei vari
          ambiti: inclusione scolastica, inserimento inclusivo nel proprio
          contesto sociale e nel mondo del lavoro. Le attività che Anffas offre
          ai propri aderenti familiari ed anche ai non iscritti all’Associazione
          sono:
        </Typography>
        <Box component='ul' sx={{ pl: 3, mb: 3 }}>
          {[
            'Consulenza ed informazione alle famiglie',
            'Assistenza per le pratiche burocratiche',
            'Sostegno e consulenza psicologica',
            'Informazioni legali',
          ].map((item) => (
            <Typography
              key={item}
              component='li'
              variant='body1'
              sx={{ mb: 1, display: 'flex', alignItems: 'center' }}
            >
              <Group sx={{ color: 'secondary.main', mr: 1 }} />
              {item}
            </Typography>
          ))}
        </Box>
        <Typography variant='body1' paragraph sx={{ lineHeight: 1.7, mb: 3 }}>
          Ogni settimana, oltre 70 persone con disabilità di tutte le età
          frequentano la sede, partecipando a numerosi laboratori, tra cui:
        </Typography>
        <Grid container spacing={2} sx={{ mb: 4 }}>
          {[
            [
              'Potenziamento cognitivo',
              'Musigiocando',
              'Cucina',
              'Canto',
              'Shiatsu qi-gong',
              'Musica Band',
            ],
            [
              'Autonomia',
              'Sessualità',
              'Manualità',
              'Ballo',
              'Nordic Wolking',
              'Fotografia',
            ],
          ].map((column, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Box component='ul' sx={{ pl: 3 }}>
                {column.map((item) => (
                  <Typography
                    key={item}
                    component='li'
                    variant='body1'
                    sx={{ mb: 1, display: 'flex', alignItems: 'center' }}
                  >
                    <Star sx={{ color: 'warning.main', mr: 1 }} />
                    {item}
                  </Typography>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>
        <Typography variant='body1' paragraph sx={{ lineHeight: 1.7, mb: 3 }}>
          Durante l’estate, proponiamo il centro estivo e il progetto campeggio.
          Nei fine settimana, organizziamo feste, momenti di ritrovo e
          condivisione, attività ludico-motorie, anche in collaborazione con
          enti e altre associazioni del territorio.
        </Typography>
        <Box sx={{ textAlign: 'center', mt: 4, mb: 6 }}>
          <Typography
            variant='h6'
            sx={{
              fontWeight: 'bold',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <AccessTime sx={{ color: 'primary.main' }} />
            Orari
          </Typography>
          <Typography variant='body1'>
            La struttura è aperta dal lunedì al venerdì, dalle 8:00 alle 12:30 e
            dalle 15:00 alle 18:30.
          </Typography>
        </Box>

        <Box id='laboratori' sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant='h4' sx={{ fontWeight: 'bold', mb: 3 }}>
            I nostri laboratori
          </Typography>
          <Grid container spacing={4} justifyContent='center'>
            {prodotti.map((prodotto) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={prodotto.id}
                sx={{ textAlign: 'left' }} // Allinea il contenuto a sinistra
              >
                <NewsCard post={prodotto} sx={{ textAlign: 'left' }} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
      <div className='m-10'>
        <Credits />
      </div>
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

// I punti di forza
const features = [
  {
    title: 'Progetto educativo',
    imageUrl:
      'https://teamtrex.com.au/wp-content/uploads/2021/06/Strength-icon.png',
    description:
      'Un progetto chiaro e affidabile per far crescere e diventare uomini. ',
    url: 'https://cinema.donboscosandona.it',
  },
  {
    title: 'Didattica attiva',
    imageUrl:
      'https://teamtrex.com.au/wp-content/uploads/2021/06/Strength-icon.png',
    description:
      'Lezioni attive e coinvolgenti per dimenticare la noia e partecipare da protagonisti.',
  },
  {
    title: 'Laboratori',
    imageUrl:
      'https://teamtrex.com.au/wp-content/uploads/2021/06/Strength-icon.png',
    description:
      "12 ore settimanali in laboratori tecnologicamente all'avanguardia per formare i professionisti del futuro.",
  },
  {
    title: 'Servizi al lavoro',
    imageUrl:
      'https://teamtrex.com.au/wp-content/uploads/2021/06/Strength-icon.png',
    description:
      "Orientamento, stage e alternanza, i nostri esperti ti accompagneranno fino all'effettivo inserimento nelle aziende del settore.",
  },
]

let servizi = [
  {
    id: 1,
    titolo: 'Toelettatura',
    immagine: 'https://img.pgol.it/meta/0124-Toelettatura.jpg',
    pubblicazione: 'Disponibile ora',
    abstract:
      'Servizio professionale di toelettatura per tutti i tipi di animali.',
  },
  {
    id: 2,
    titolo: 'Servizio di adozione',
    immagine:
      'https://www.comunecoriglianorossano.eu/wp-content/uploads/2021/08/cani-min.jpg',
    pubblicazione: 'Sempre attivo',
    abstract: 'Adotta un amico a quattro zampe e cambia la sua vita!',
  },
  {
    id: 3,
    titolo: 'Consulenza veterinaria',
    immagine:
      'https://naturopet.it/wp-content/uploads/2019/03/consulenza-veterinaria-Naturopet.png',
    pubblicazione: 'Disponibile su appuntamento',
    abstract:
      'Consulenze veterinarie professionali per la salute del tuo animale.',
  },
]

// slides per il carousel
let slides = [
  {
    titolo: 'Fatti un bel giro',
    descrizione:
      'Scopri tutti i segreti del nostro centro con il tour virtuale!',
    immagine:
      'https://www.anffas.net/wp-content/uploads/2021/06/anffas-sandon%C3%A0-di-piave-sede-1.jpg',
    colore: '#ED4C67',
    colore2: 'rgba(100,100,100,0)',
    opacity: 0.8,
    blur: '0.5rem',
    buttonText: 'Scopri di più!',
    buttonUrl: 'https://www.anffas.net/sede',
  },
  {
    titolo: 'I nostri laboratori',
    descrizione:
      'Scopri i nostri laboratori settimanali per persone con disabilità intellettive e del neuro-sviluppo.',
    immagine:
      'https://www.anffas.net/wp-content/uploads/2021/06/anffas-sandon%C3%A0-di-piave-laboratori-1.jpg',
    colore: '#22aa22',
    colore2: 'rgba(100,100,100,0)',
    buttonText: 'Scopri i laboratori!',
    buttonUrl: 'https://www.anffas.net/laboratori',
  },
  {
    titolo: 'Sostieni Anffas',
    descrizione:
      'Sostieni Anffas San Donà di Piave donando il tuo 5xmille, a te non costa niente e per noi è importante!',
    immagine:
      'https://www.anffas.net/wp-content/uploads/2021/06/anffas-sandon%C3%A0-di-piave-donazioni-1.jpg',
    colore: '#3498db',
    colore2: 'rgba(100,100,100,0)',
    buttonText: 'Donazione',
    buttonUrl: 'https://www.anffas.net/donazioni',
  },
]

let prodotti = [
  {
    id: 1,
    titolo: 'Potenziamento cognitivo',
    immagine: '/images/potenziamento_cognitivo.jpg',
    pubblicazione: 'Tenuto dalla psicologa Marianna Trevisiol',
    abstract:
      "Mira all'acquisizione delle potenzialità cognitive negli associati più giovani ed al mantenimento in quelli più anziani.",
    articolo: false,
    tag: 'Cognitivo, Psicologia',
  },
  {
    id: 2,
    titolo: 'Autonomia',
    immagine: '/images/autonomia.jpg',
    pubblicazione: 'Laboratorio di sviluppo personale',
    abstract:
      "Con questo laboratorio vengono insegnate competenze per l'autonomia.",
    articolo: false,
    tag: 'Autonomia, Sviluppo personale',
  },
  {
    id: 3,
    titolo: 'Musigiocando',
    immagine: '/images/musigiocando.jpg',
    pubblicazione: 'Laboratorio espressivo',
    abstract:
      "I ragazzi sperimentano e scoprono, tramite l'uso di strumenti, anche inusuali, nuove sensazioni e modi di esprimersi.",
    articolo: false,
    tag: 'Musica, Espressione',
  },
  {
    id: 4,
    titolo: 'Sessualità',
    immagine: '/images/emozioni.jpg',
    pubblicazione: 'Laboratorio di affettività',
    abstract:
      'Obiettivo di rendere comprensibili le sensazioni e gli stimoli che il corpo emette nelle relazioni interpersonali.',
    articolo: false,
    tag: 'Affettività, Educazione',
  },
  {
    id: 5,
    titolo: 'Cucina',
    immagine: '/images/cucina.jpg',
    pubblicazione: 'Laboratorio creativo',
    abstract:
      'Si creano ricette nuove con la soddisfazione di portare a casa ciò che si è fatto e condividerlo con la famiglia.',
    articolo: false,
    tag: 'Cucina, Creatività',
  },
  {
    id: 6,
    titolo: 'Manualità',
    immagine: '/images/manualità.jpg',
    pubblicazione: 'Laboratorio creativo',
    abstract:
      'Stimolo della creatività e uso della manualità fine limitatamente alle proprie potenzialità.',
    articolo: false,
    tag: 'Manualità, Creatività',
  },
  {
    id: 7,
    titolo: 'Canto',
    immagine: '/images/canto.jpg',
    pubblicazione: 'Laboratorio musicale',
    abstract:
      'Liberiamo la nostra voglia di farci sentire ed ascoltare al mondo intero!',
    articolo: false,
    tag: 'Canto, Musica',
  },
  {
    id: 8,
    titolo: 'Ballo',
    immagine: '/images/ballo.jpg',
    pubblicazione: 'Laboratorio di movimento',
    abstract:
      'Scateniamoci nel movimento ed ascoltiamo le belle sensazioni che il corpo riceve tramite la danza.',
    articolo: false,
    tag: 'Ballo, Movimento',
  },
  {
    id: 9,
    titolo: 'Shiatsu qi-gong',
    immagine: '/images/SHIATSU.jpg',
    pubblicazione: 'Laboratorio di rilassamento',
    abstract:
      'Rilassamento ed ascolto del proprio corpo, con trattamenti reciproci tra i partecipanti.',
    articolo: false,
    tag: 'Shiatsu, Rilassamento',
  },
  {
    id: 10,
    titolo: 'Nordic Walking',
    immagine: '/images/nordicwalking.jpg',
    pubblicazione: "Attività all'aria aperta",
    abstract:
      "Camminare con i bastoncini al ritmo dell'istruttore e nel contempo poter stare all'aria aperta ammirando la bellezza della natura.",
    articolo: false,
    tag: 'Nordic Walking, Natura',
  },
  {
    id: 11,
    titolo: 'Musica Band',
    immagine: '/images/bandmusicale.jpg',
    pubblicazione: 'Laboratorio musicale',
    abstract:
      'Con particolari strumenti, permette di stimolare attivamente il cervello aumentando la capacità di isolare un singolo suono e comporre assieme ai compagni un brano musicale.',
    articolo: false,
    tag: 'Musica, Band',
  },
  {
    id: 12,
    titolo: 'Fotografia',
    immagine: '/images/fotografia.jpg',
    pubblicazione: 'Laboratorio creativo',
    abstract:
      "Impariamo a fare delle belle foto ed osservare il mondo che ci sta attorno al fine di potenziare l'autonomia!",
    articolo: false,
    tag: 'Fotografia, Autonomia',
  },
]
