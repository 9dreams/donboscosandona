import Head from 'next/head'
import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero.js'
import Paragraph from 'components/Paragraph'

export default function Pagina() {
  return (
    <Layout>
      <LandingHero
        opacity={0.2}
        title='Orientamento'
        imageUrl='/images/orientamento.png'
      />
      <Paragraph>
        Il termine orientamento deriva da Oriente, uno dei quattro punti
        cardinali corrispondente alla direzione dalla quale sorge il Sole e tale
        termine è ricco di signiﬁcato per l’uomo che deve orientarsi perché ha a
        che fare con il sorgere del sole, con il viaggio, con la conoscenza, con
        la diversità delle culture. L’orientamento, nel corso della sua storia,
        ha sempre mantenuto uno stretto rapporto tra l’uomo e la sua esperienza
        formativa e lavorativa e la sua azione specialistica si è maturata in
        rapporto allo sviluppo della società e alle sue trasformazioni,
        all’economia e alle crescenti esigenze di organizzazione e
        razionalizzazione del lavoro imposte dall’avvento della cultura
        industriale.
      </Paragraph>
      <Paragraph subtitle="I principi dell'orientamento">
        <ul>
          <li>1. L’orientamento è un processo continuo</li>
          <li>2. È strettamente legato al processo produttivo</li>
          <li>3. È allo stesso tempo scolastico e professionale</li>
          <li>4. È rivolto a diverse categorie di utenti</li>
          <li>5. Necessita di un approccio disciplinare</li>
        </ul>
      </Paragraph>
      <Paragraph subtitle='Le istituzioni di riferimento e gli utenti destinatari del servizio'>
        <ul>
          <li>● Le scuole</li>
          <li>● I CPIA (centro provinciale istruzione per adulti)</li>
          <li>● I CFP (centro formazione professionale)</li>
          <li>● I CPI (centro per l’impiego)</li>
          <li>● I COL (centro orientamento lavoro)</li>
          <li>● Le Agenzie per il lavoro</li>
          <li>● I sindacati</li>
          <li>
            ● Gli sportelli all’interno di varie strutture sia pubbliche che
            private
          </li>
          <li>● I CAV (Centri antiviolenza per le donne)</li>
        </ul>
      </Paragraph>
      <Paragraph subtitle="I destinatari dell'orientamento">
        <ul>
          <li>
            ● Gli studenti di diverso grado di istruzione i quali devono
            compiere la loro scelta scolastica ed accademica per progredire nel
            loro percorso di formazione (indirizzo scuola superiore e scelta
            facoltà universitaria)
          </li>
          <li>● Giovani-adulti al primo inserimento professionale</li>
          <li>
            ● Adulti in difﬁcoltà occupazionale, ovvero inoccupati, disoccupati
            di media e lunga durata, dipendenti in mobilità e cassaintegrati,
            adulti che vogliono-devono cambiare lavoro
          </li>
          <li>
            ● Drop out, soggetti a rischio di emarginazione sociale, di
            abbandono e di dispersione scolastica
          </li>
          <li>● Stranieri</li>
          <li>
            ● Donne, le quali dopo un medio-lungo periodo di assenza,
            necessitano di un supporto orientativo per reinserirsi nel mercato
            del lavoro.
          </li>
        </ul>
      </Paragraph>
    </Layout>
  )
}
