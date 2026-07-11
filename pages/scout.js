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
  NewsCard,
  SwiperNews,
  Featured,
  NavBar,
  Logos,
  Sponsor,
  Elements,
} from '/components'
import { excludeTag } from '/lib/posts'

const slides = [
  {
    titolo: '',
    descrizione: '',
    immagine: '/images/scout/carousel1.jpg',
    colore2: 'rgba(100,100,100,0)',
    buttonText: 'Scopri di più!',
  },
  {
    titolo: '',
    descrizione: '',
    immagine: '/images/scout/carousel2.png',
    colore2: 'rgba(100,100,100,0)',
  },
  {
    titolo: '',
    descrizione: '',
    immagine: '/images/scout/carousel3.png',
    colore2: 'rgba(100,100,100,0)',
  },
];

export default function Home({ data, elementi }) {
  return (
    <Layout>
      <Carousel 
      slides={slides}
        height={100}
        animation="slide"
        interval={5000}
        duration={1000}/>
      <Container>
        <div className='margin'>
          <Typography variant="h4" gutterBottom align="center" sx={{ marginTop: 5 }}>
          Questa pagina è gestita dall'Associazione AGESCI GRUPPO SAN DONA' DI PIAVE 1
          </Typography>
          <Grid container spacing={5} justifyContent="center">
            {servizi.map((servizio) => (
              <Grid item xs={12} sm={6} md={3} key={servizio.id}>
                <NewsCard post={servizio} />
              </Grid>
            ))}
          </Grid>
        </div>
        
        <div className='margin'>
          <Typography variant="h4" gutterBottom align="center" sx={{ marginTop: 5 }}>
            
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {Newss.map((Newss) => (
              <Grid item xs={12} sm={8} md={4} key={Newss.id}>
                <NewsCard post={Newss} />
              </Grid>
            ))}
          </Grid>
        </div>
        <div className='margin'>
        <Typography variant="h4" gutterBottom align="center" sx={{ marginTop: 5 }}>
            
          </Typography>
          <Grid container spacing={4}justifyContent="center">
                <img src='/images/scout/card5.jpg'/>
                <p>
                Dopo la Prima Guerra Mondiale, don Luigi Saretta ricostruì il tessuto sociale, economico e religioso del paese e fondò una sede locale dell\’ Associazione Scoutistica Cattolica Italiana. Durante l\’ inaugurazione del nuovo ponte sul fiume Piave, il Riparto San Donà 1 "San Marco" fece la Promessa, segnando l\’ inizio ufficiale dello scoutismo.

Nel 1926, con la legge sui Balilla, il Fascismo perseguì un attacco alle associazioni cattoliche, portando alla dissoluzione degli Esploratori cattolici e alla clandestinità dello scoutismo, che poi riprese vita con le Aquile Randagie. Nel 1945, con l\’ arrivo delle truppe alleate, i Giovani Esploratori Cattolici ripresero le attività, e Arturo Rizzo divenne il primo Capo Scout post-bellico.

Nel 1958, il gruppo cambiò il fazzolettone, scegliendo il colore rosso bordeaux con un bordo grigio perla. La decisione fu presa in un incontro con il Commissario Diocesano, prof. Enzo Dematè, che suggerì i nuovi colori.

L\’ avventura scoutistica a San Donà riprese nel 1947, con gruppi separati per maschi e femmine fino al 1974, anno di nascita dell\’ AGESCI. Nel 1988, fu aperto un nuovo gruppo a San Pio X, portando il numero totale a quattro gruppi. Il gruppo San Donà 1, il più antico, ha celebrato i suoi 90 anni nel 2014</p>
                <br></br>
              </Grid>
        </div>
        <div className='margin'>
        <Typography variant="h4" gutterBottom align="center" sx={{ marginTop: 5 }}>
            
          </Typography>
          <Grid container spacing={4} justifyContent="center">
                <img src='/images/scout/card6.jpg'/>
                <p>
                Lo scautismo è un movimento educativo internazionale fondato nel 1907 da Robert Baden-Powell, basato sul volontariato e sull'apprendimento pratico attraverso attività all'aria aperta. Nato in Inghilterra, il movimento si estese rapidamente a livello globale, includendo anche le ragazze.

In Italia, l'AGESCI (Associazione Guide e Scouts Cattolici Italiani) fu fondata nel 1974 dalla fusione dell'ASCI (Scout Cattolici) e dell'AGI (Guide Italiane). L'AGESCI promuove una formazione completa dei giovani, con un'educazione basata su valori cristiani, cittadinanza attiva e responsabilità. Favorisce la coeducazione e l'inclusione, e si impegna per la fraternità internazionale, superando le differenze etniche, nazionali e religiose.

I ragazzi sono divisi in gruppi per età: Lupetti (9-12 anni), Esploratori e Guide (12-16 anni), Rover e Scolte (16-20 anni), mentre gli adulti prestano servizio come Capi formati.</p>
                <br></br>
              </Grid>
        </div>
        <div className='margin'>
        <Typography variant="h4" gutterBottom align="center" sx={{ marginTop: 5 }}>
            
          </Typography>
          <Grid container spacing={4} justifyContent="center">
                <img src='/images/scout/card7.jpg'/>
                <p>
                Capi Gruppo:
Antonio Morra

Cell: 331 136 5338;

Federica Cellotto

Cell: 346 785 7216;

Branco Seeoonee:
Akela - Gian Marco Bimieri

Cell: 370 323 1168;

Branco Waingunga:
Akela - Maria Paulon

Cell: 333 175 9422;

Reparto Mizar:
Costanza Barbieri

Cell: 393 894 7448;

Reparto Baden Powell:
Filippo Perissinotto

Cell: 342 746 3806;

Noviziato Monsone 
Elisabetta Rorato

Cell: 348 424 0300;

Clan Camelot:
Gianmaria Barbieri

Cell: 388 382 3715;<br/>

 

Per chi vorrebbe iniziare il prossimo anno, contattare Alessia: cell. 366 192 1750</p>
                <br></br>
              </Grid>
        </div>
        <div className='margin'>
        <Typography variant="h4" gutterBottom align="center" sx={{ marginTop: 5 }}>
            
          </Typography>
          <Grid container spacing={4} justifyContent="center">
                <img src='/images/scout/card4.png'/>
                <p><b>ROGRAMMA E OBIETTIVI DELL’EMPORIO</b>

<li>L’Emporio dell’Uniforme nasce come progetto finalizzato all’educazione al riuso dei capi di abbigliamento dell’uniforme e all’aiuto delle famiglie. Sarà infatti un luogo in cui trovare l’usato quale valida alternativa al nuovo, poiché saranno presenti entrambe le proposte.</li>
<li>L’Emporio NON È una filiale della Cooperativa, né una rivendita.</li>
<li>All’inizio di ogni anno verrà indicato il referente di ogni staff delegato alla raccolta dei capi usati e alla fruizione dell’Emporio da parte dei ragazzi.</li>
<li>Le famiglie possono portare indumenti usati/inutilizzati dell’uniforme in qualsiasi momento.</li>
 

<b>REGOLE DI ACCETTAZIONE DEL MATERIALE</b>

<li>Il capo usato dovrà essere in buono stato e non dovrà presentare nessun segno di usura.</li>
<li>Il capo verrà accettato solo se lavato, stirato e libero da distintivi.</li>
<li>Le camicie dovranno essere portate già con i distintivi scuciti (con cura); non verranno accettate camicie con segni di usura dei polsini e del colletto o con evidente sbiadimento del colore.</li>
</p>
<br></br>
              </Grid>
        </div>

        <div className='margin'>
        <Typography variant="h4" gutterBottom align="center" sx={{ marginTop: 5 }}>
            
          </Typography>
          <Grid container spacing={4} justifyContent="center">
                <img src='/images/scout/card10.png'/>
                
                <p>“Estote parati”<br/>
La branca Esploratori e Guide si rivolge a ragazzi e ragazze dai 12 ai 16 anni, con l’obiettivo di favorire lo sviluppo di una solida identità e la capacità di relazionarsi con gli altri. I ragazzi si organizzano in unità chiamate Reparto.
Gli esploratori sono la base dello scautismo, nato nel 1907 con il primo campo scout a Brownsea, guidato da Baden-Powell. Il metodo, descritto nel libro Scautismo per ragazzi, è stato adattato nel tempo. Il punto di forza è l’avventura, spesso all’aperto, dove i ragazzi, divisi in Squadriglie (gruppi di 6-8 membri), partecipano attivamente alla creazione delle attività. Ogni Squadriglia ha un capo, scelto tra i più esperti.
Le tecniche scout, come pionieristica, pronto soccorso, topografia, e altre, sono essenziali per sviluppare capacità fisiche e intellettuali, attraverso il "learning by doing". Gli obiettivi principali includono lo spirito di gruppo, la responsabilità, l'autonomia e il senso civico.
San Giorgio è il patrono e guida spirituale della branca Esploratori e Guide nelle associazioni scout cattoliche</p>
                <br></br>
              </Grid>
        </div>

        <div className='margin'>
        <Typography variant="h4" gutterBottom align="center" sx={{ marginTop: 5 }}>
            
          </Typography>
          <Grid container spacing={4} justifyContent="center">
                <img src='/images/scout/card9.png'/>
                <p>“In piedi nei piedi il coraggio che ho, che mi porti lontano per sentire vicino, e metto i miei piedi nella vita che c’è, lì dove mi chiedi i miei piedi con Te”<br/>
La Branca Rover/Scolte si rivolge a giovani di 16-20 anni, accompagnandoli verso una vita adulta caratterizzata da autonomia, responsabilità e servizio verso gli altri. I giovani si uniscono in comunità chiamate Clan, dopo un periodo iniziale chiamato Noviziato, in cui approfondiscono il loro percorso scout e si preparano a fare scelte importanti per la loro vita.
Il Clan si basa sull'autoeducazione, la Legge e la Promessa scout, ed è un luogo di confronto, sincerità e condivisione. Lo scopo del roverismo è formare uomini e donne responsabili, capaci di inserire il servizio nella società, sia verso sé stessi che verso gli altri.
Il Capitolo affronta temi scelti dalla comunità, favorendo la consapevolezza sull'attualità e il servizio. La Carta di Clan guida il percorso dei membri, che si confrontano con valori di Comunità, Fede, Servizio e Strada. Il simbolo della forcola rappresenta la capacità di fare scelte importanti nella vita. L’obiettivo finale della branca è la "Partenza", quando i membri realizzano i valori dello scautismo nella vita quotidiana.
San Paolo è il patrono e guida spirituale della branca.</p>
                <br></br>
              </Grid>
        </div>

        <div className='margin'>
        <Typography variant="h4" gutterBottom align="center" sx={{ marginTop: 5 }}>
            
          </Typography>
          <Grid container spacing={4} justifyContent="center">
                <img src='/images/scout/card11.png'/>

                <p>“per sempre, meglio servire”
I Capi sono adulti che prestano servizio nello scautismo, divisi in "capi in formazione" e "capi con nomina". I primi stanno completando un percorso formativo, mentre i secondi hanno ottenuto la nomina al termine di questo percorso. I Capi possono servire direttamente i ragazzi, formare altri Capi o supportare le strutture associative a vari livelli.
La comunità capi del gruppo scout si occupa di elaborare il progetto educativo, gestire la formazione dei Capi, e coordinare le attività locali. Ogni comunità capi elegge i capi gruppo (rappresentanti legali) e gestisce anche bilanci e incarichi. Nel gruppo San Donà 1, la comunità capi è composta da 25 membri.
Il capo ha un ruolo educativo fondamentale e deve garantire l’applicazione corretta del metodo scout, sviluppando i ragazzi come "fratello/sorella maggiore". Inoltre, deve seguire un continuo aggiornamento formativo e collaborare alla preparazione del team di capi.</p>
                <br></br>
              </Grid>
              <div className='margin'>
        <Typography variant="h4" gutterBottom align="center" sx={{ marginTop: 5 }}>
            
          </Typography>
          <Grid container spacing={4} justifyContent="center">
                <img src='/images/scout/card8.png'/>
                <p>Fare tutto "col gioco" ma niente "per gioco"<br/>
La branca Lupetti si rivolge ai bambini dai 9 ai 12 anni e mira a far vivere loro la fanciullezza come fondamento di una vita adulta autentica. Il metodo educativo promuove l’impegno, la solidarietà, e lo sviluppo del corpo e delle capacità manuali. Introdotto da Robert Baden-Powell nel 1916, il metodo si basa su regole semplici per una buona convivenza nel gruppo.
Vera Barclay, prima Akela d'Inghilterra, sviluppò ulteriormente il metodo, creando la "Legge del Branco" e introducendo l'atmosfera fantastica della giungla, ispirata al Libro della Giungla di Kipling. Questa atmosfera aiuta i bambini a sviluppare la fantasia e facilita l’approccio degli educatori al mondo del bambino.
Le attività si basano sul libro e sono pensate per insegnare attraverso il gioco, fondamentale per i bambini, che imparano anche concetti come la legge e la promessa. Nello scoutismo cattolico, San Francesco d'Assisi e Santa Chiara sono guide spirituali importanti per i Lupetti.</p>
                <br></br>
              </Grid>
        </div>
       
        </div>
      </Container>
    </Layout>
  )
}

export async function getStaticProps() {
  let res = await fetch(
    'https://channels.donboscosandona.it/api/posts/inoratorio'
  )
  const data = excludeTag(await res.json(), 'screen')

  res = await fetch(
    'https://channels.donboscosandona.it/api/posts/donboscosandona_elements'
  )
  const elementi = await res.json()

  return {
    props: { data, elementi },
    revalidate: 1800,
  }
}

const servizi = [
  {
    id: 1,
    titolo: 'Nuove amicizie per il Clan !',
    immagine: '/images/scout/card1.png',
    abstract: 'Il Clan ha partecipato al Triduo Pasquale con la comunità di Marango, vivendo momenti di spiritualità, ascoltando testimonianze e partecipando alla Veglia pasquale a San Donà.',
    
  },
  {
    id: 2,
    titolo: 'Il Clan alla comunità di Marango !',
    immagine: '/images/scout/card2.png',
    abstract: 'Il 24 gennaio, il Clan ha ospitato un Clan polacco di Varsavia, svolgendo attività culinarie, confrontandosi sulle esperienze scout e scambiandosi giochi e ban.',
},
{
  id: 3,
  titolo: 'La Comunità Capi in cammino su progettualità e condivisione',
  immagine: '/images/scout/card3.png',
  abstract: 'La Comunità Capi ha riflettuto sugli insegnamenti di Baden-Powell e condiviso il "progetto del capo", concludendo con la preghiera del capo, unendo scoutismo e fede.',
},



];



let Newss= [

  {
    id: 4,
    titolo: 'La luce della Pace di Betlemme arriva in Oratorio',
    immagine: '/images/scout/card14.png',
    abstract: 'Il 16 dicembre 2023, la Luce della Pace di Betlemme è arrivata a San Donà, portata dagli scout, simbolo di speranza e pace.'
    
  },
   {
    id: 5,
    titolo: 'Il clan Camelot in quota',
    immagine: '/images/scout/card12.png',
    abstract: 'Il 27 dicembre 2023, il Clan Camelot è partito da San Donà per Possagno, discutendo temi importanti e riflettendo sulla loro identità, prima di tornare a San Donà.'
   },
  {
    id: 6,
    titolo: 'Una serata in ricordo di Giovanni Biancotto',
    immagine: '/images/scout/card13.png',
    abstract: 'Il 15 novembre 2023, i gruppi scout di San Donà hanno ricordato Giovanni Biancotto, celebrando il suo impegno per lo scoutismo locale.'
  },
];
