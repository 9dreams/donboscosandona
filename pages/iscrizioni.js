import Head from 'next/head'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import AssignmentIcon from '@mui/icons-material/Assignment'
import EventAvailableIcon from '@mui/icons-material/EventAvailable'
import PaymentsIcon from '@mui/icons-material/Payments'

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


      <Paragraph title=''>
        <p>
          Anche quest’anno la <strong>PRE-ISCRIZIONE è obbligatoria</strong> e si può fare direttamente da casa, tramite Internet, utilizzando Squby, il programma per gestire le iscrizioni a tutte le attività dell’Oratorio.
        </p>
        <br />
        <p>
          Scarica SQUBY dagli store oppure utilizzala via web:
        </p>
        <Box sx={{ mt: 2, mb: 2, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <Button
            variant='contained'
            fullWidth
            href='https://live.squby.it/'
            target='_blank'
          >
            Accedi a Squby
          </Button>
        </Box>
      </Paragraph>

      <Paragraph title={<Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}> <PersonAddIcon sx={{ fontSize: 48, color: '#ff0000', filter: 'drop-shadow(0 0 5px #ff0000) drop-shadow(0 0 10px #ff0000)' }} /> 1. Registrazione su Squby </Box>}>
        <p>
          <strong>Hai già un account?</strong><br />
          Entra con il solito modo a Squby con nome utente (mail) e la Password. Per l’iscrizione alla P.E.R. passa al punto 3 della guida.
        </p>
        <br />
        <p>
          <strong>Non sei ancora iscritto? Registra l'anagrafica</strong><br />
          Il primo passaggio è registrare l’anagrafica, cioè inserire la scheda con tutti i dati del ragazzo/a. È necessario collegarsi con PC o smartphone:
        </p>
        <Box sx={{ mt: 2, mb: 2 }}>
          <Button
            variant='contained'
            fullWidth
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

      <Paragraph title={<Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}> <AssignmentIcon sx={{ fontSize: 48, color: '#00aaff', filter: 'drop-shadow(0 0 5px #00aaff) drop-shadow(0 0 10px #00aaff)' }} /> 2. Preiscrizione su Squby </Box>}>
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

      <Paragraph title={<Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}> <EventAvailableIcon sx={{ fontSize: 48, color: '#ff0000', filter: 'drop-shadow(0 0 5px #ff0000) drop-shadow(0 0 10px #ff0000)' }} /> 3. Prenota il tuo appuntamento </Box>}>
        <p>
          <strong>NOVITÀ:</strong> Quest’anno, per evitare code, abbiamo introdotto la prenotazione dell'appuntamento in presenza.
          Basterà cliccare sul pulsante qui sotto, prenotare l’orario e venire all’appuntamento nell’orario preciso.
        </p>
        <Box sx={{ mt: 2, mb: 2 }}>
          <Button
            variant='contained'
            fullWidth
            href='https://calendly.com/ads-donboscosandona/new-meeting'
            target='_blank'
          >
            Prenota Appuntamento
          </Button>
        </Box>
        <div style={{ overflowX: 'auto', marginTop: '2rem', marginBottom: '2rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <tbody>
              <tr>
                <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>Lunedì 4 maggio</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>16.00 - 19.30</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>Per i ragazzi/e che frequentano i gruppi dell'Oratorio (ADS, Dopo la Campanella, Scout San Donà 1, Banda)</td>
              </tr>
              <tr>
                <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>Martedì 5 maggio</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>16.00 - 19.30</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>Per i ragazzi/e che frequentano i gruppi dell'Oratorio (ADS, Dopo la Campanella, Scout San Donà 1, Banda)</td>
              </tr>
              <tr>
                <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>Mercoledì 6 maggio</td>
                <td style={{ padding: '12px', borderBottom: '19.30' }}>16.00 - 19.30</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>Per tutti</td>
              </tr>
              <tr>
                <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>Giovedì 7 maggio</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>16.00 - 19.30</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>Per tutti</td>
              </tr>
              <tr>
                <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>Venerdì 8 maggio</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>16.00 - 19.30</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>Per tutti</td>
              </tr>
              <tr>
                <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>Sabato 9 maggio</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>9.00 - 12.00</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>Per tutti</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Paragraph>

      <Paragraph title={<Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}> <PaymentsIcon sx={{ fontSize: 48, color: '#00aaff', filter: 'drop-shadow(0 0 5px #00aaff) drop-shadow(0 0 10px #00aaff)' }} /> 4. Iscrizione in presenza e pagamento </Box>}>
        <p>
          Ora non vi resta che presentarvi per l'iscrizione nella data e orario scelto.
        </p>
        <br />
        <p>
          <strong>Anche quest’anno i laboratori saranno scelti in presenza al momento dell'iscrizione in Oratorio</strong> e perciò è necessaria la presenza del ragazzo/a, così da facilitare le operazioni di segreteria nello scegliere i laboratori e la taglia della maglietta.
        </p>
        <br />
        <p>
          <strong>Quota di iscrizione da versare in contanti o con POS:</strong>
        </p>
        <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
          <li>2 settimane: 135,00 €</li>
          <li>3 settimane: 145,00 €</li>
          <li>Tutta la PER: 170,00 €</li>
        </ul>
        <br />
        <p>I ragazzi di terza media pagano 110,00 €</p>
        <br />
        <p>
          Nel caso di fratelli o sorelle, la seconda quota sarà ribassata di 20€,
          la terza di 40€.
        </p>
        <br />
        <p>
          <em>Nota: la quota per le singole uscite è a parte.</em>
        </p>
      </Paragraph>
    </Layout>
  )
}
