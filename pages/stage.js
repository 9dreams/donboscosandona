import Head from 'next/head'
import {
  Layout,
  LandingHero,
  QuickNav,
  Intro,
  Section,
  SectionTitle,
  Lead,
  FeatureCard,
  Button,
} from '/components'

const ancore = [
  { href: '#sistema-duale', label: 'Sistema Duale' },
  { href: '#alternanza', label: 'Alternanza scuola lavoro' },
  { href: '#apprendistato', label: 'Apprendistato' },
]

export default function Stage() {
  return (
    <Layout>
      <Head>
        <title>Stage e Sistema Duale | SFP Don Bosco</title>
      </Head>
      <LandingHero
        eyebrow="Scuola e lavoro"
        title="Stage"
        description="Completano la proposta formativa e permettono il graduale inserimento nel mondo del lavoro"
        imageUrl="https://www.informezgroup.it/wp-content/uploads/2021/08/alternanza-scuola-lavoro-cose-scaled.jpg"
      />

      <QuickNav links={ancore} />

      <Intro title="L’incontro tra formazione e lavoro">
        <p>
          Lo stage rappresenta un momento fondamentale nella formazione professionale perché punto
          d’incontro tra formazione e lavoro. È uno strumento indispensabile per fare esperienza
          concreta nel settore prescelto, per valutare la predisposizione verso l’attività
          intrapresa, per proporsi nel mercato del lavoro con un curriculum arricchito non solo nella
          forma (titolo rilasciato), ma soprattutto nella sostanza (competenza acquisita nella
          pratica svolta).
        </p>
      </Intro>

      <Section>
        <SectionTitle icon="ph:graduation-cap">Proseguimento degli studi e Sistema Duale</SectionTitle>
        <Lead>
          Da alcuni anni, il percorso che il CFP propone non si conclude con il conseguimento della
          qualifica, ma offre l’opportunità di proseguire gli studi con un 4° anno formativo.
        </Lead>
        <div className="prose-site">
          <p>
            Il valore aggiunto di questa proposta consiste nel preparare persone capaci di rispondere
            alla complessità del mercato del lavoro favorendo l’acquisizione di competenze tecniche,
            sviluppando intraprendenza, imprenditorialità e capacità di apprendere dall’esperienza.
            E’ anche un’opportunità per ottenere una formazione di base conforme agli standard
            nazionali, per farsi conoscere dalle aziende, per ottenere un inserimento lavorativo
            agevole e un contratto di apprendistato;
          </p>
          <p>
            Il percorso termina con un esame e il conseguimento di un diploma di tecnico riparatore
            di veicoli a motore, tecnico per la conduzione e la manutenzione di impianti
            automatizzati.
          </p>
        </div>
      </Section>

      <Section id="sistema-duale">
        <SectionTitle icon="ph:arrows-left-right">Che cos’è il Sistema Duale?</SectionTitle>
        <Lead>
          E’ un modello di formazione professionale alternata fra scuola e lavoro che vede le
          istituzioni formative e i datori di lavoro fianco a fianco nel processo formativo.
        </Lead>
        <div className="prose-site">
          <p>
            La formazione si attua in collaborazione con l’azienda: le materie teoriche si svolgono
            presso il CFP mentre la formazione professionalizzante si tiene nei laboratori ed
            officine aziendali. La formazione aziendale avviene secondo due modalità: l’alternanza
            scuola - lavoro e il contratto di apprendistato.
          </p>
          <p>
            La partecipazione al sistema duale di formazione professionale comporta una serie di
            diritti e doveri: il diritto alla coerenza tra le attività svolte in azienda e il titolo
            da conseguire; il diritto alla formazione in materia di salute e sicurezza sui luoghi di
            lavoro, il diritto alla valutazione e certificazione delle competenze. Per essere
            ammesso all’esame conclusivo l’allievo deve frequentare il 75% del percorso previsto dal
            Piano Formativo Individuale e raggiungere gli obiettivi formativi per la prosecuzione
            del contratto. Il mancato conseguimento di tali obiettivi costituisce un giustificato
            motivo di licenziamento.
          </p>
          <p>
            Alla fine del percorso l’allievo dovrà sostenere un esame il cui superamento porterà al
            conseguimento di un diploma di qualifica, titolo che permetterà di esplorare nuove
            opportunità: l’inserimento in azienda come apprendista; la prosecuzione degli studi per
            giungere all’esame di maturità; la frequenza ad un percorso di ITS.
          </p>
        </div>
      </Section>

      <Section width="lg">
        <div className="grid md:grid-cols-2 gap-5">
          <div id="alternanza" className="scroll-mt-28">
            <FeatureCard icon="ph:swap" title="Alternanza scuola lavoro">
              <p className="mb-3">
                Nella forma dell’alternanza l’allievo rimane in carico della struttura formativa e
                si reca in azienda per le ore previste dall’accordo che viene stipulato tra azienda
                e CFP.
              </p>
              <p className="m-0">
                L&apos;alternanza si realizza svolgendo attività all&apos;interno e all&apos;esterno
                della scuola, in un percorso ideale che parte dalla didattica laboratoriale e giunge
                al rapporto di collaborazione fra scuole, studenti ed imprese ospitanti. Il percorso
                è monitorato dai soggetti coinvolti, che affidano al tutor scolastico e aziendale un
                ruolo di particolare rilievo.
              </p>
            </FeatureCard>
          </div>
          <div id="apprendistato" className="scroll-mt-28">
            <FeatureCard icon="ph:handshake" title="Il contratto di apprendistato">
              <p className="mb-3">
                Con il contratto di apprendistato, l’alunno apprendista è dipendente dell’azienda;
                frequenta le ore di formazione presso il CFP, ore per le quali non viene retribuito.
                Il tempo passato in azienda viene ripartito in ore concordate per la formazione e ore
                di ordinario lavoro. Il monte ore totale previsto dal sistema duale è di 490 ore di
                formazione presso il CFP e 500 in azienda.
              </p>
              <p className="mb-3">
                L&apos;apprendistato è un contratto di lavoro a tempo determinato finalizzato alla
                formazione e all&apos;occupazione giovanile.
              </p>
              <p className="m-0">
                Il Decreto Legislativo n. 81/2015, operando una revisione profonda della disciplina
                normativa del Jobs Act, ha reso questo modello contrattuale particolarmente
                vantaggioso per il datore di lavoro, che può beneficiare di alcune agevolazioni
                retributive e contributive.
              </p>
            </FeatureCard>
          </div>
        </div>
        <div className="mt-8 text-center">
          <Button href="/aziende" variant="outline">
            Informazioni per le aziende
          </Button>
        </div>
      </Section>
    </Layout>
  )
}
