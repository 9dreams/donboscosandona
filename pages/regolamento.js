import Head from 'next/head'
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
          content='https://per.donboscosandona.it/regolamento'
        />
        <meta name='og:type' content='website' />
        <meta name='og:locale' content='it_IT' />
        <meta
          name='og:title'
          content='Proposta Estate Ragazzi di San Donà di Piave'
        />
        <meta
          name='og:description'
          content='Tutte le regole della Proposta Estate.'
        />
        <meta name='og:image' content='/images/regolamento.png' />
      </Head>
      <LandingHero
        opacity={0.2}
        title='Regolamento'
        imageUrl='/images/regolamento.png'
      />
      <Paragraph>
        <p>
          La Proposta Estate Ragazzi è organizzata dall’Oratorio don Bosco
          presso la propria sede di San Donà di Piave nel periodo dal 15 giugno
          al 14 luglio 2023. È un’attività di animazione educativa, ricreativa e
          culturale che si ispira ad una visione cristiana della vita e al
          metodo educativo di don Bosco, aperta a chiunque ne condivida le
          finalità educative.
        </p>
        <p>
          L’attività, per ragazzi/e dalla 3° classe elementare (anno 2014) alla
          3ª classe delle scuole medie (anno 2009), si svolge dal lunedì al
          venerdì, il mattino dalle h. 9:30 alle h. 12:00 ed il pomeriggio dalle
          h. 15:00 alle h. 18:00, ad eccezione dei giorni programmati di uscita.
          Nella giornata di mercoledì le attività si svolgeranno solo il
          mattino, mentre il pomeriggio è riservato agli operatori ed animatori
          per le opportune riunioni di coordinamento, programmazione e
          formazione. All’inizio dell’attività viene fornito agli iscritti un
          calendario dettagliato.
        </p>
        <p>
          Il direttore dell’Oratorio e responsabile dell'organizzazione,
          coordinamento e gestione della Proposta Estate è don Nicola Munari, il
          quale si avvale della collaborazione di corresponsabili, operatori
          (animatori/educatori con specifica e prolungata esperienza nel
          settore), animatori (volontari con più di un anno di esperienza) ed
          aiuto-animatori (volontari che hanno frequentato corsi di formazione
          specifici) e adulti volontari che in vario modo aiutano, più o meno
          direttamente a contatto con i ragazzi, condividendo le modalità e
          finalità educative tipiche del carisma salesiano di Don Bosco. Gli
          animatori, aiuto-animatori e adulti volontari prestano la loro opera
          in modo gratuito.
        </p>
        <p>
          Tutti i collaboratori coinvolti nell’attività partecipano, prima
          dell’avvio della stessa, a particolari corsi di formazione ed
          aggiornamento sia interni alla struttura che esterni. È estremamente
          gradita la collaborazione dei genitori, sia nell’intento educativo
          esplicitamente assunto con l’iscrizione del figlio, sia nella
          conduzione della Proposta Estate Ragazzi attraverso impegni concreti.
        </p>
        <p>
          Trattandosi di un’attività ricreativa, si chiarisce che l’assistenza
          non ha capillarità e puntualità di tipo scolastico, per cui
          l’organizzazione non risponde di chi non rispetta gli orari o si
          assenta senza avvisare, soprattutto quando vengono addotte motivazioni
          non verificabili (ad esempio: Mi ha detto la mamma ...).
        </p>
        <p>
          Gli iscritti alla Proposta Estate Ragazzi sono coperti da precisa
          garanzia assicurativa sia durante l’attività svolta in sede che
          durante le uscite programmate in calendario. Si declina ogni
          responsabilità per coloro che non sono presenti, o liberamente si
          allontanano prima del termine delle attività organizzate.
        </p>
        <p>
          L’Oratorio don Bosco declina ogni responsabilità nel caso si
          verifichino danneggiamenti e/o smarrimenti e/o furti di cellulari,
          effetti personali e denaro. Essendo l’Oratorio ambiente educativo e
          non una spiaggia pubblica è richiesto un abbigliamento adatto al luogo
          (non si può giocare a petto nudo, non ci si presenta con magliette
          troppo succinte, indumenti strappati, ecc...).
        </p>
        <p>
          La direzione si riserva la possibilità di allontanare (in qualsiasi
          momento) l’iscritto/a per motivi disciplinari, previa comunicazione ai
          genitori o a chi ne fa le veci. Per quanto non descritto o contemplato
          nel presente regolamento, si rimanda al comune buon senso, fermo
          restando l’insindacabilità del giudizio espresso dal direttore don
          Nicola Munari e dal coordinatore della Proposta Estate Ragazzi, don
          Nicola Munari.
        </p>
        <p>&nbsp;</p>
      </Paragraph>
    </Layout>
  )
}
