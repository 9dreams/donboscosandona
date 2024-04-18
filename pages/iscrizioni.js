import Head from 'next/head'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

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
        title='Iscrizioni'
        imageUrl='/images/iscrizioni.png'
      />
      <Paragraph subtitle='Anche quest’anno la preiscrizione è obbligatoria e si può fare direttamente da casa, tramite Internet!'>
      </Paragraph>

      <Paragraph title='1. Preiscrizione online' backgroundColor='#faffb8'>
        <p>
        La fase più divertente dell'iscrizione alla PER è la "preiscrizione online": in questa fase ci comunicherai i dati anagrafici dei tuoi figli e potrai scegliere insieme a loro le attività del mattino. Preparatevi bene insieme a questa fase andando a sfogliare la lista delle attività e verificando i limiti di età o altri vincoli particolari. Dovrete scegliere un'attività per la prima ora e una per la seconda, ma il numero di posti per ogni attività è limitato, quindi preparatevi scegliendo anche delle attività alternative.
        </p>
        <p>
          <b>APERTURA PRE-ISCRIZIONI PER GRUPPI ORE 8.30 DEL 29 APRILE 2024</b>
          <br />
          I ragazzi che frequentano i cammini di gruppo ADS e SCOUT e/o l’attività del DopoLaCampanella riceveranno un codice personalizzato a partire dal 22 aprile che permetterà di pre-iscriversi on-line da lunedì 29 aprile, con priorità di scelta sulle attività/laboratori.
 <br />
ATTENZIONE! Il codice è personale ed è abbinato alla propria scheda anagrafica: non va in alcun modo ceduto a terzi perché questo sfaserebbe le informazioni in essa contenute!
        </p>
        <p>
          <b>APERTURA PRE-ISCRIZIONI ONLINE PER TUTTI ORE 8.30 DEL 1° MAGGIO 2024</b>
          <br />
          Si potrà in questo spazio di tempo procedere con le pre-iscrizioni online per  tutti
        </p>
        <p>
          <b>APERTURA DELLE ISCRIZIONI PER TUTTI</b>
          <br />
          Dal 13 al 17 maggio (lunedì e martedì per le elementari, e da mercoledì a venerdì per le medie)  dalle ore 17.30 alle 19.30 e sabato 18 maggio (per tutti) dalle ore 9.00 alle ore 12.00. Chi avesse fatto la pre-iscrizione ma non la avesse perfezionata venendo a iscrivere il ragazzo/a durante questi orari, con il materiale richiesto, non potrà iscrivere il ragazzo/a in altri orari e perderà il posto alla PER e l’eventuale bonifico.
        </p>
        <p>
          <b>LA PROCEDURA DI PREISCRIZIONE</b>
          <br />
          Una volta che le preiscrizioni saranno aperte, clicca sul bottone di
          iscrizione:
          <br />
          <Button
            sx={{
              width: '100%',
              marginTop: '2rem',
              marginBottom: '2rem',
              padding: '1rem',
              borderRadius: '2rem',
            }}
            target='_blank'
            color='warning'
            variant='contained'
            href='https://dbdb.inoratorio.it/presubscriptions'
          >
            ISCRIVITI
          </Button>
          <ol>
            <li>Inserisci il Codice Fiscale del ragazzo che vuoi iscrivere</li>
            <li>Clicca sul bottone Invia codice OTP</li>
            <li>
              Verifica nella mail rilasciata al momento dell’iscrizione di aver
              ricevuto il codice “OTP”
            </li>
            <li>
              Torna al link e inserisci il codice ricevuto e il Codice Fiscale
              del ragazzo
            </li>
            <li>
              Effettua il Login e ti verrà presentata la scheda con i tuoi dati:
              controlla se sono corretti e aggiornali dove necessario (presta
              attenzione in particolare alla classe frequentata).
            </li>
            <li>Entra in “PER2024 Iscriviti”</li>
            <li>
              Scegli le settimane di presenza e le attività/laboratori che vuoi
              frequentare.
            </li>
            <li>Crea la preiscrizione</li>
          </ol>
        </p>
        <p>
        Se devi iscrivere un secondo/a figlio/a, prima di ripetere la procedura, clicca in alto a destra “ACCOUNT –DISCONNETTI”. Successivamente puoi tornare sul link e ripetere il tutto.
Se al momento della preiscrizione online non compariranno alcune attività/laboratori, significa che per questi, i posti sono già tutti occupati. NON C’E’ alcuna possibilità di aggiungere posti extra!
I dati e le attività/laboratori scelti possono essere modificati fino al momento dell’iscrizione utilizzando la procedura.

        </p>
      </Paragraph>

      <Paragraph title='2. Pagamento' backgroundColor='#ffd1b8'>
        <p>
          <b>Quota di iscrizione:</b>
          <br />
          un ragazzo: 120,00 €
          <br />
          due fratelli: 215,00 €
          <br />
          tre fratelli: 300,00 €
          <br />I ragazzi di terza media pagano 95,00 €
        </p>
        <p>
          La quota dovrà essere pagata prima dell’iscrizione effettiva, con
          bollettino postale (da ritirare in oratorio) oppure con bonifico
          bancario intestato a:
          <br />
          <b>
            ORATORIO DON BOSCO
            <br />
            BANCO BPM filiale di San Donà di Piave - IBAN:
            IT56Z0503436282000000004212
            <br />
            con causale: PER 2024 - ISCRIZIONE "nome iscritto/i"
          </b>
        </p>
        <p>
          Conserva la ricevuta del pagamento, che ti servirà al momento
          dell'iscrizione. La quota versata non sarà rimborsata.
        </p>
        <p>Nota: la quota per le singole uscite è a parte</p>
      </Paragraph>

      <Paragraph title='3. Iscrizione' backgroundColor='#bdf2ff'>
        <p>
        L’accettazione o il diniego della richiesta di partecipazione sarà comunicato, tramite email o whatsapp, la settimana successiva assieme ai dati per il pagamento, al modulo per la Privacy, al regolamento della PER e all’appuntamento per l’iscrizione, da effettuare in presenza, presso l’Oratorio Don Bosco dal 13 al 14 maggio 2024 per  le elementari, dal 15  al 17 maggio per le medie e il 18  maggio per tutti. 
Al momento dell’effettiva iscrizione in Oratorio saranno necessari:
L’informativa privacy inviata via mail a tutti gli iscritti.
Copia dell'avvenuto pagamento della quota.

        </p>
        <h1>Attenzione!!!</h1>
        <p>
          Al momento dell’effettiva iscrizione in Oratorio sono necessari:
          <ul>
            <li>
              Un genitore (o chi ne fa le veci): per la firma della liberatoria
              sulla privacy.
            </li>
            <li>
              La copia della distinta del pagamento e una foto formato
              tessera del ragazzo (il tutto può essere inviato via mail
              all’indirizzo per@donboscosandona.it).
            </li>
          </ul>
        </p>
        <Grid container>
          <Grid item xs={6}>
            <Button
              sx={{
                marginTop: '2rem',
                marginBottom: '2rem',
                padding: '1rem',
                borderRadius: '2rem',
              }}
              target='_blank'
              color='primary'
              variant='contained'
              href='/docs/INFORMATIVACentroEstivo.pdf'
            >
              Informativa Privacy
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              sx={{
                marginTop: '2rem',
                marginBottom: '2rem',
                padding: '1rem',
                borderRadius: '2rem',
              }}
              target='_blank'
              color='primary'
              variant='contained'
              href='/docs/Regolamento_PER-2024.pdf'
            >
              Regolamento Proposta Estate
            </Button>
          </Grid>
        </Grid>
        <p>
        Il non presentarsi nel giorno e ora specificati, comporta la perdita della priorità acquisita nella scelta delle attività/laboratori!
Se al momento della pre-iscrizione on-line non compaiono alcune attività/laboratori, significa che questi sono già pieni. NON C’E’ alcuna possibilità di aggiungere posti extra!

        </p>
        <p>
        I dati e le attività/laboratori scelti possono essere modificati fino al momento dell’iscrizione utilizzando l’email ricevuta al momento della pre-iscrizione.
        </p>
      </Paragraph>
    </Layout>
  )
}
