import Layout from "/components/Layout";
import LandingHero from "/components/LandingHero2.js";
import Paragraph from "components/Paragraph";
import Link from "next/link";

export default function Pagina() {
  return (
    <Layout>
      <LandingHero
        opacity={0.2}
        title="Iscrizioni"
        description="Iscriviti e non inventare bugie per non venire, ti aspettiamo!"
        imageUrl="https://fumettologica.it/wp-content/uploads/2022/07/trailer-pinocchio-netflix-del-toro.jpg"
      />
      <Paragraph subtitle="Anche quest’anno la preiscrizione si farà direttamente da casa, tramite Internet!">
        <p>
          La pre-iscrizione è obbligatoria: se non hai l’accesso a Internet da
          casa, potrai usare le postazioni computer della sala giochi
          dell’Oratorio, non è difficile trovare qualche giovane animatore
          disponibile a dare una mano!
        </p>
        <p>
          I ragazzi che frequentano i cammini di gruppo e/o le attività
          organizzate in Oratorio durante tutto l’arco dell’anno riceveranno un
          codice personalizzato nella settimana dal 24 al 29 Aprile che
          permetterà di pre-iscriversi on-line da lunedì 02 maggio, con priorità
          di scelta sulle attività/laboratori.
        </p>
        <p>
          ATTENZIONE! Il codice è personale ed è abbinato alla propria scheda
          anagrafica: non va in alcun modo ceduto a terzi perché questo
          sfaserebbe le informazioni in essa contenute!
        </p>
      </Paragraph>

      <Paragraph title="1. Preiscrizione online" backgroundColor="#faffb8">
        <p>
          La fase più divertente dell'iscrizione alla PER è la "preiscrizione
          online": in questa fase ci comunicherai i dati anagrafici dei tuoi
          figli e potrai scegliere insieme a loro le attività del mattino.
          Preparatevi bene insieme a questa fase andando a sfogliare la lista
          delle attività e verificando i limiti di età o altri vincoli
          particolari. Dovrete scegliere un'attività per la prima ora e una per
          la seconda, ma il numero di posti per ogni attività è limitato, quindi
          preparatevi scegliendo anche delle attività alternative.
        </p>
        <p>
          <b>APERTURA ORE 8.30 DEL 02 MAGGIO 2023</b>
          <br />
          Tutti i ragazzi che ci hanno già fornito i loro dati anagrafici
          partecipando a una delle attività dell'Oratorio (compresa la Proposta
          Estate degli anni precedenti) potranno accedere anticipatamente alle
          preiscrizioni.
        </p>
        <p>
          <b>APERTURA IL MATTINO DEL 04 MAGGIO PER TUTTI</b>
          <br />
          Se è la prima volta che partecipi alla PER potrai preiscriverti online
          da questa seconda data: crea una nuova scheda anagrafica, compilando
          accuratamente i dati anagrafici e digitando con attenzione l'indirizzo
          email, in modo da ricevere il codice personale utile per le iscrizioni
          future.
        </p>
        <p>
          <b>LA PROCEDURA DI PREISCRIZIONE</b>
          <br />
          Una volta che le preiscrizioni saranno aperte, clicca sul bottone di
          iscrizione:
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
            <li>Entra in “PER2023 Iscriviti”</li>
            <li>
              Scegli le settimane di presenza e le attività/laboratori che vuoi
              frequentare.
            </li>
            <li>Crea la preiscrizione</li>
          </ol>
        </p>
        <p>
          Se devi iscrivere un secondo/a figlio/a, prima di ripetere la
          procedura, clicca in alto a destra “ACCOUNT –DISCONNETTI”.
          Successivamente puoi tornare sul link e ripetere il tutto. Se al
          momento della preiscrizione online non compariranno alcune
          attività/laboratori, significa che per questi, i posti sono già tutti
          occupati. NON C’E’ alcuna possibilità di aggiungere posti extra! I
          dati e le attività/laboratori scelti possono essere modificati fino al
          momento dell’iscrizione utilizzando la procedura.
        </p>
      </Paragraph>

      <Paragraph title="2. Pagamento" backgroundColor="#ffd1b8">
        <p>
          <b>Quota di iscrizione:</b>
          <br />un ragazzo: 120,00 €
          <br />due fratelli: 215,00 €
          <br />tre fratelli: 300,00 €
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
            con causale: PER 2022 - ISCRIZIONE "nome iscritto/i"
          </b>
        </p>
        <p>
          Conserva la ricevuta del pagamento, che ti servirà al momento
          dell'iscrizione. La quota versata non sarà rimborsata.
        </p>
        <p>Nota: la quota per le singole uscite è a parte</p>
      </Paragraph>

      <Paragraph title="3. Iscrizione" backgroundColor="#bdf2ff">
        <p>
          L’accettazione o il diniego della richiesta di partecipazione sarà
          comunicato tramite email, la settimana successiva, assieme ai dati per
          il pagamento e all’appuntamento per l’iscrizione, da effettuare in
          presenza, presso l’Oratorio Don Bosco, dal 23 al 28 maggio 2022. Al
          momento dell’effettiva iscrizione in Oratorio (tra il 23 maggio e il
          27 maggio 2023) saranno necessari: L’informativa privacy inviata via
          mail a tutti gli iscritti. Copia dell'avvenuto pagamento della quota.
        </p>
        <h1>Attenzione!!!</h1>
        <p>
          Al momento dell’effettiva iscrizione in Oratorio (tra il 22 e il 27
          Maggio) sono necessari:
          <ul>
            <li>
              un genitore (o chi ne fa le veci): per la firma della liberatoria
              sulla privacy.
            </li>
            <li>
              La copia della distinta del pagamento e una foto formato
              foto-tessera del ragazzo (il tutto può esser inviato via mail
              all’indirizzo per@donboscosandona.it).
            </li>
          </ul>
        </p>
        <p>Il non presentarsi nel giorno e ora specificati, comporta la perdita della priorità acquisita nella scelta delle attività/laboratori, rimarrà tuttavia valida la preiscrizione!
Se al momento della pre-iscrizione on-line non compaiono alcune attività/laboratori, significa che questi sono già pieni. NON C’E’ alcuna possibilità di aggiungere posti extra!
</p>
<p> 
I dati e le attività/laboratori scelti possono essere modificati fino al momento dell’iscrizione utilizzando l’email ricevuta al momento della pre-iscrizione.
</p>

      </Paragraph>
    </Layout>
  );
}
