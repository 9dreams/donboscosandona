import Head from 'next/head'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero.js'
import Paragraph from 'components/Paragraph'

export default function Pagina() {
  return (
    <Layout>
      <Head>
        <title>Proposta Estate Ragazzi di San Donà di Piave</title>
        <meta
          name='og:url'
          content='https://per.donboscosandona.it/iscrizioni'
        />
        <meta name='og:type' content='website' />
        <meta name='og:locale' content='it_IT' />
        <meta
          name='og:title'
          content='Proposta Estate Ragazzi di San Donà di Piave'
        />
        <meta
          name='og:description'
          content="Tutto quello che c'è da sapere per iscriversi alla Proposta Estate."
        />
        <meta name='og:image' content='/images/iscrizioni.png' />
      </Head>
      <LandingHero
        opacity={0.3}
        title='Iscrizioni alla PER'
        imageUrl='/images/iscrizioni.png'
      />
      <Paragraph title='Date e Orari'>
        <p>
          Le iscrizione sono previste da <strong>lunedì 4 maggio a venerdì 8 maggio</strong> dalle ore <strong>16.00 alle 19.30</strong>.<br />
          Sabato 09 maggio le iscrizioni saranno aperte dalle <strong>9.00 alle 12.00</strong>.
        </p>
        <br />
        <p>
          Le iscrizioni per i ragazzi/e che frequentano i gruppi dell’Oratorio (ADS, Dopo la Campanella, Scout San Donà 1, Banda) inizieranno <strong>lunedì 4 maggio alle 16.00</strong>.
        </p>
        <br />
        <p>
          Per tutti, <strong>LE ISCRIZIONI INIZIERANNO mercoledì 6 maggio alle ore 16.00</strong>.
        </p>
        <br />
        <p>
          <strong>ANCHE QUEST’ANNO I LABORATORI SARANNO SCELTI IN PRESENZA AL MOMENTO DELL'ISCRIZIONE IN ORATORIO</strong> E PERCIÒ È NECESSARIA LA PRESENZA DEL RAGAZZO/A, così da facilitare le operazioni di segreteria nello scegliere i laboratori e la taglia della maglietta.
        </p>
      </Paragraph>

      <Paragraph title='Pre-iscrizione Obbligatoria'>
        <p>
          Anche quest’anno la <strong>PRE-ISCRIZIONE è obbligatoria</strong> e si può fare direttamente da casa, tramite Internet!
        </p>
        <br />
        <p>
          <strong>LA PRE-ISCRIZIONE SI FA CON SQUBY!</strong><br />
          Squby è il programma per gestire le iscrizioni al GREST, ma anche a tutte le attività dell’Oratorio.
        </p>
        <br />
        <p>
          Per utilizzare SQUBY puoi scaricare l'app dagli store oppure utilizzare il link diretto:
        </p>
        <Box sx={{ mt: 2, mb: 2, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <Button
            variant='outlined'
            href='https://live.squby.it/'
            target='_blank'
          >
            Accedi a Squby
          </Button>
        </Box>
      </Paragraph>

      <Paragraph title='Guida alla registrazione'>
        <p>
          <strong>1. Hai già un account?</strong><br />
          Entra con il solito modo a Squby con nome utente (mail) e la Password. Per l’iscrizione alla P.E.R. passa al punto 3 della guida.
        </p>
        <br />
        <p>
          <strong>2. Non sei ancora iscritto? Registra l'anagrafica</strong><br />
          Il primo passaggio è registrare l’anagrafica, cioè inserire la scheda con tutti i dati del ragazzo/a. È necessario collegarsi con PC o smartphone:
        </p>
        <Box sx={{ mt: 2, mb: 2 }}>
          <Button
            variant='outlined'
            href='https://live.squby.it/iscrizione.aspx?grest=ac07b306-8431-4298-a477-4a57dfef7384&usertype=4'
            target='_blank'
          >
            Registra Nuova Anagrafica
          </Button>
        </Box>
        <p>
          Scorrendo verso il basso troverete il modulo da compilare; inserite con particolare attenzione mail, recapiti telefonici ed eventuali allergie.
          Controllate bene i dati dei genitori. Una volta inseriti tutti i dati applicate la spunta alle caselle per l'adesione al servizio e il consenso privacy/foto.
          Terminato l'inserimento, cliccate su <strong>“Iscrivi”</strong> e salvate la password!
        </p>
        <br />
        <p>
          Controlla la mail: arriverà un messaggio con le credenziali. Ti consigliamo di scaricare l’app Squby (Play Store o App Store) per gestire tutto comodamente e ricevere i messaggi.
        </p>
      </Paragraph>

      <Paragraph title='Iscrizione vera e propria'>
        <p>
          <strong>3. I passi per iscriversi alla P.E.R. 26</strong><br />
          Quanto fatto finora non è ancora l’iscrizione! Segui questi passi:
        </p>
        <ol style={{ paddingLeft: '1.5rem', marginTop: '1rem' }}>
          <li>Apri l’app Squby o accedi via web.</li>
          <li>Scorri in fondo fino all'attività <strong>P.E.R. 26 Proposta Estate Ragazzi</strong>.</li>
          <li>Clicca su <strong>ISCRIZIONI APERTE</strong>.</li>
          <li>Leggi con attenzione le indicazioni sotto al pulsante ISCRIVITI.</li>
          <li>
            Seleziona dal menù a tendina la <strong>settimana di interesse</strong> e clicca su ISCRIVITI.
            <em> Questa operazione va ripetuta per ogni settimana.</em>
          </li>
        </ol>
        <br />
        <p>
          <strong>!!! ATTENZIONE !!!</strong> L’iscrizione fatta online e non perfezionata in Oratorio non è valida! È NECESSARIO venire in presenza.
        </p>
      </Paragraph>

      <Paragraph title='Prenota il tuo appuntamento'>
        <p>
          <strong>NOVITÀ:</strong> Quest’anno, per evitare code, abbiamo introdotto la prenotazione dell'appuntamento in presenza.
          Basterà cliccare sul pulsante qui sotto, prenotare l’orario e venire all’appuntamento nell’orario preciso.
        </p>
        <Box sx={{ mt: 2, mb: 2 }}>
          <Button
            variant='outlined'
            href='https://calendly.com/ads-donboscosandona/new-meeting'
            target='_blank'
          >
            Prenota Appuntamento (Calendly)
          </Button>
        </Box>
      </Paragraph>
    </Layout>
  )
}
