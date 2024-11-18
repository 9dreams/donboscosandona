import { Container, Grid, Typography, Box, Card, CardContent, CardMedia, Button } from '@mui/material';
import { Layout, Carousel } from '/components';

export default function Home({ data, elementi }) {
  return (
    <Layout>
      <Carousel
        slides={slides}
        height={100}
        animation="slide"
        interval={5000}
        duration={1000}
      />
      &emsp;
      <Container>
        {/* Sezione delle Card */}
        <Box sx={{ marginTop: 4 }}>
          <Typography variant="h4" gutterBottom align="center">
            Le Nostre Attività
          </Typography>
          &emsp;
          <Grid container spacing={3} justifyContent="center">
            {/* Card 1 */}
            <Grid item xs={12} sm={4}>
              <Card sx={{ maxWidth: 345, boxShadow: 3, borderRadius: 2 }}>
                <CardMedia
                  component="img"
                  height="200"
                  image="http://archive.inoratorio.it/img/column/daac7f166a35aed93e13de057b5ee87ec833df60.jpg?1517601159"
                  alt="Attività 1"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Attività Educative
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Il progetto offre attività di doposcuola e supporto scolastico per studenti dalle scuole elementari alle superiori, inclusi laboratori creativi, gruppi di studio personalizzati e ripetizioni individuali, con obiettivi educativi concordati in fase di iscrizione.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Card 2 */}
            <Grid item xs={12} sm={4}>
              <Card sx={{ maxWidth: 345, boxShadow: 3, borderRadius: 2 }}>
                <CardMedia
                  component="img"
                  height="200"
                  image="http://archive.inoratorio.it/img/column/266250e7aafa0a1f4045ae2ead19638761ca2eca.jpg?1517601160"
                  alt="Attività 2"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Laboratori Creativi
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    L’attività si svolge dal lunedì al venerdì, suddividendo il tempo tra compiti, supporto scolastico e attività ludico-ricreative. Gli studenti delle scuole elementari e medie lavorano in gruppi, con supporto individuale limitato a gruppi di studio e ripetizioni.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Card 3 */}
            <Grid item xs={12} sm={4}>
              <Card sx={{ maxWidth: 345, boxShadow: 3, borderRadius: 2 }}>
                <CardMedia
                  component="img"
                  height="200"
                  image="http://archive.inoratorio.it/img/column/6a3b075844f340c4d41a6969e1662092c21b2177.jpg?1517601162"
                  alt="Attività 3"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Supporto Psicologico
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Iscrizioni doposcuola mercoledì e venerdì su prenotazione. Completa con appuntamento dal Tutor. Per gruppi studio e ripetizioni, contattare il referente.

                    Info:  
                    Dr. Andrea Pasqualetto  
                    T: 0421 338 992  
                    C: 391 706 4430  
                    E: campanella@donboscosandona.it
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
        &emsp;

       
        <Box sx={{ textAlign: 'center', marginTop: 4 }}>
          <Button 
            variant="contained" 
            color="primary" 
            sx={{
              padding: '10px 20px',
              fontSize: '16px',
            }}
            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2BOScoBnq5AOW8BgaVQzwxaq9kZ6XvH3C_HGV0I3iCNKZqGAiAPWs1XbwbyWh8V7kPMZHVjZc9"
          >
            Prenota Ora
          </Button>
        </Box>
        &emsp;
    
        <Box sx={{ marginTop: 2, textAlign: 'center' }}>
          <img 
            src='http://archive.inoratorio.it/img/ck/2850edcef06dff4c46fd4b4c89b93d192aa710a9.png' 
            alt="Immagine dopo la campanella"
            style={{ display: 'block', margin: '0 auto', maxWidth: '100%' }} 
          />
        </Box>

        <Box sx={{ marginTop: 4 }}>
          <Typography variant="h4" gutterBottom align="center">
            DOPO LA CAMPANELLA
          </Typography>
          <Typography variant="h5" gutterBottom align="center">
            Il dopo scuola dell'Oratorio don Bosco
          </Typography>
          <Typography paragraph sx={{ textAlign: 'justify' }}>
            L’attività di doposcuola nel nostro oratorio affonda le sue radici nel secolo scorso,
            per intuizione di don Alberto e nasce dal desiderio di offrire ai ragazzi un ambiente stimolante
            e accogliente, in cui poter svolgere i propri compiti scolastici e socializzare, confrontandosi
            con coetanei, compagni di classe e adulti. Il progetto quindi racchiude in sé la dimensione didattica,
            educativa, ludica e di sostegno.
          </Typography>

          <Typography paragraph sx={{ textAlign: 'justify' }}>
            La diffusione del progetto, che conta ogni anno più di 150 iscritti, è stata favorita dal
            contributo del Comune di San Donà di Piave e di altri enti locali limitrofi, come il Comune
            di Musile di Piave e Noventa di Piave.
          </Typography>

          <Typography paragraph sx={{ textAlign: 'justify' }}>
            Per rendere la proposta educativa e formativa sempre più efficace per i ragazzi, negli anni
            sono state avviate collaborazioni con i servizi territoriali come la Neuropsichiatria Infantile,
            l’Associazione “La Nostra Famiglia” e i servizi di Tutela Minori. Sono operative collaborazioni
            con l’Università di Trieste (sede di Portogruaro), l’Università di Padova e di Venezia.
          </Typography>

          <Typography paragraph sx={{ textAlign: 'justify' }}>
            I principali destinatari del progetto sono i bambini delle classi 3°- 4° e 5° della scuola primaria
            e gli allievi del triennio della scuola secondaria di primo grado, ma il supporto è aperto anche ai ragazzi
            che frequentano le scuole superiori.
          </Typography>

          <Typography paragraph sx={{ textAlign: 'justify' }}>
            L’equipe di operatori è multidisciplinare e include educatori, psicologi e pedagogisti, oltre che
            volontari qualificati.
          </Typography>

          <Typography variant="h6" sx={{ marginTop: 2 }}>
            Questi i nostri obiettivi:
          </Typography>
          <ul style={{ marginLeft: 20 }}>
            <li>Approcciare lo studio ed il lavoro scolastico individuale in modo positivo e proficuo</li>
            <li>Imparare o migliorare il metodo di studio</li>
            <li>Recuperare le lacune nella preparazione e utilizzare un linguaggio specifico</li>
            <li>Sostenere chi è in difficoltà attraverso i laboratori DSA</li>
            <li>Migliorare l’autostima, la consapevolezza di sé e la socializzazione</li>
          </ul>

          <Typography paragraph sx={{ textAlign: 'justify' }}>
            L’attività si svolge all’interno dell’ambiente salesiano, educativo e gioioso, connotato dal
            metodo preventivo. Il ragazzo è protagonista e viene supportato ed incoraggiato nello svolgimento
            delle attività scolastiche, offrendo opportunità di approfondimento, ma anche la possibilità di
            partecipare ad attività ludico ricreative quali corsi musicali e laboratori espressivi.
          </Typography>

          <Typography paragraph sx={{ textAlign: 'justify' }}>
            Nell’organizzazione del progetto risulta di fondamentale rilevanza il lavoro in rete, dove
            i nostri operatori si mettono in relazione con la famiglia, prima “agenzia educativa”, veicolo
            di valori e conoscenze, e con gli istituti scolastici, realtà formative nelle quali i ragazzi
            passano molto del loro tempo.
          </Typography>

          <Typography paragraph sx={{ textAlign: 'justify' }}>
            Importanti sono i momenti di incontro tra gli operatori, per verificare l’efficacia degli
            interventi attuati e ottimizzare i risultati, e con le famiglie, attraverso appuntamenti
            personali o durante gli incontri di verifica previsti nell’anno formativo, invitate ad
            esprimere esigenze e aspettative per elaborare insieme i percorsi educativi più adeguati.
          </Typography>
        </Box>
      </Container>
      &emsp;
    </Layout>
           

  );
}



export async function getStaticProps() {
  let res = await fetch(
    'https://channels.donboscosandona.it/api/posts/inoratorio'
  );
  const data = await res.json();

  res = await fetch(
    'https://channels.donboscosandona.it/api/posts/donboscosandona_elements'
  );
  const elementi = await res.json();

  return {
    props: { data, elementi },
    revalidate: 1800, // 30 minuti
  };
}

const slides = [
  {
    titolo: 'In Oratorio',
    descrizione: '',
    immagine: 'https://img.freepik.com/foto-gratuito/compagni-di-classe-borsa-degli-amici-educazione-scolastica_53876-137717.jpg?t=st=1731923108~exp=1731926708~hmac=c1f8df5ca03deb230bbffb0ac59527ebb5800462be7e9b629187a6a24b16aafe&w=1380',
    colore2: 'rgba(100,100,100,0)',
    buttonText: 'Scopri di più!',
  },
  {
    titolo: 'Dopo La campanella',
    descrizione: '',
    immagine: 'https://img.freepik.com/foto-gratuito/tutti-conoscono-la-risposta-giusta_329181-14229.jpg?t=st=1731923170~exp=1731926770~hmac=975702e29cefd4b1894d3bd16c09c8d4edb94efaeb3a5fe1367baa21ed5882b5&w=1380',
    colore2: 'rgba(100,100,100,0)',
  },
];


const servizi = [
  {
    id: 1,
    titolo: 'Personal Trainer',
    immagine: 'https://www.stevensportingclub.it/wp-content/uploads/2023/01/18.jpg',
    abstract: 'Scopri come un personal trainer può aiutarti a raggiungere i tuoi obiettivi di fitness.',
  },
  {
    id: 2,
    titolo: 'Attrezzature all\'avanguardia',
    immagine: 'https://www.fitnessway.it/wp-content/uploads/2022/06/aprire-una-palestra.jpg',
    abstract: 'Utilizziamo attrezzature moderne e sicure per offrirti la migliore esperienza di allenamento possibile.',
  },
  {
    id: 3,
    titolo: 'Professionalità',
    immagine: 'https://www.robur.com/hubfs/referenze-it/ROBUR_referenze_Palestra-futura-Voghera.jpg',
    abstract: 'Il nostro team di esperti è sempre disponibile per guidarti e supportarti in ogni fase del tuo percorso di fitness.',
  },
]

const prodotti = [
  {
    id: 1,
    titolo: 'Manubri',
    immagine: 'https://cdns3.fitfit.fitness/it/media/items/originals/18778-Palestra-New-Genesi-Gym-MlEc1.jpg',
    abstract: 'Acquista manubri di alta qualità per allenarti a casa o in palestra.',
  },
  {
    id: 2,
    titolo: 'Integratori',
    immagine: 'https://www.superpalestra.it/wp-content/uploads/2017/09/integratori-palestra.jpg',
    abstract: 'Scopri la nostra selezione di integratori per supportare la tua dieta e migliorare le performance.',
  },
  {
    id: 3,
    titolo: 'Divise personalizzate',
    immagine: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0HWVOjU-MSeOGtqLxP4ygGib9BObCQYxmNQ&s',
    abstract: 'Scegli la nostra linea di divise personalizzate per sentirti parte del nostro team.',
  },
]

const NewsCard = ({ post }) => (
  <Box
    sx={{
      border: '1px solid #ddd',
      borderRadius: '10px',
      overflow: 'hidden',
      height: '100%',
      backgroundColor: '#fff',
      boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease-in-out',
      '&:hover': {
        transform: 'scale(1.05)',
      },
    }}
  >
    <img
      src={post.immagine}
      alt={post.titolo}
      style={{ width: '100%', height: '200px', objectFit: 'cover' }}
    />
    <Box sx={{ padding: 2 }}>
      <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '18px' }}>
        {post.titolo}
      </Typography>
      <Typography variant="body2" sx={{ color: '#666', marginTop: '10px' }}>
        {post.abstract}
      </Typography>
    </Box>
  </Box>
)
