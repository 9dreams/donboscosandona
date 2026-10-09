import Head from 'next/head'
import { Icon } from '@iconify/react'
import {
  Layout,
  LandingHero,
  QuickNav,
  Section,
  SectionTitle,
  Lead,
  Card,
  FeatureCard,
  HelpBox,
  ContactLine,
} from '/components'

const ancore = [
  { href: '#settori', label: 'Settori' },
  { href: '#stage', label: 'Stage e apprendisti' },
  { href: '#sistema-duale', label: 'Sistema Duale' },
  { href: '#apprendistato', label: 'Apprendistato' },
  { href: '#benefici', label: 'Benefici' },
  { href: '#informazioni', label: 'Per informazioni' },
]

const settori = ['elettrico', 'energie', 'informatico', 'meccanico', 'motoristico', 'carrozzeria']

export default function Aziende() {
  return (
    <Layout>
      <Head>
        <title>Aziende, stage e apprendistato | SFP Don Bosco</title>
      </Head>
      <LandingHero
        eyebrow="Per le aziende"
        title="I nostri allievi in stage"
        description="Leggi qua per scoprire di più su gli stage"
        imageUrl="/images/aziende/img.sfondoA.jpg"
      />

      <QuickNav links={ancore} />

      <Section id="settori" className="mt-16">
        <SectionTitle icon="ph:wrench">Settori</SectionTitle>
        <Lead>I nostri allievi si stanno formando nell&apos;ambito dei settori:</Lead>
        <ul className="flex flex-wrap gap-3 list-none m-0 p-0">
          {settori.map((s) => (
            <li
              key={s}
              className="rounded-full bg-surface border border-line shadow-sm px-5 py-2 font-semibold capitalize"
            >
              {s}
            </li>
          ))}
        </ul>
      </Section>

      <Section id="stage" width="lg">
        <div className="grid md:grid-cols-2 gap-5">
          <FeatureCard icon="ph:calendar-blank" title="Stage formativi">
            Della durata di tre settimane, nel periodo di maggio/giugno (in seconda) o quattro
            settimane, nel periodo di febbraio/marzo (in terza): l&apos;allievo è presente in
            azienda per 8 ore al giorno.
          </FeatureCard>
          <FeatureCard icon="ph:student" title="Corsi per apprendisti">
            Il CNOS FAP CFP Don Bosco, a partire dal 2000, eroga l’attività di corsi per
            apprendisti. Tali corsi rispondono all’esigenza di formazione dei giovani lavoratori
            secondo le modalità previste dalle norme in materia.
          </FeatureCard>
        </div>
      </Section>

      <Section id="sistema-duale">
        <SectionTitle icon="ph:arrows-left-right">Il Sistema Duale</SectionTitle>
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

      <Section>
        <SectionTitle icon="ph:swap">Alternanza scuola lavoro</SectionTitle>
        <div className="prose-site">
          <p>
            Nella forma dell’alternanza l’allievo rimane in carico della struttura formativa e si
            reca in azienda per le ore previste dall’accordo che viene stipulato tra azienda e CFP.
          </p>
          <p>
            L&apos;alternanza si realizza svolgendo attività all&apos;interno e all&apos;esterno
            della scuola, in un percorso ideale che parte dalla didattica laboratoriale e giunge al
            rapporto di collaborazione fra scuole, studenti ed imprese ospitanti. Il percorso è
            monitorato dai soggetti coinvolti, che affidano al tutor scolastico e aziendale un ruolo
            di particolare rilievo.
          </p>
        </div>
      </Section>

      <Section id="apprendistato">
        <SectionTitle icon="ph:handshake">Il contratto di apprendistato</SectionTitle>
        <div className="prose-site">
          <p>
            Con il contratto di apprendistato, l’alunno apprendista è dipendente dell’azienda;
            frequenta le ore di formazione presso il CFP, ore per le quali non viene retribuito. Il
            tempo passato in azienda viene ripartito in ore concordate per la formazione e ore di
            ordinario lavoro. Il monte ore totale previsto dal sistema duale è di 490 ore di
            formazione presso il CFP e 500 in azienda.
          </p>
          <p>
            L&apos;apprendistato è un contratto di lavoro a tempo determinato finalizzato alla
            formazione e all&apos;occupazione giovanile.
          </p>
          <p>
            Il Decreto Legislativo n. 81/2015, operando una revisione profonda della disciplina
            normativa del Jobs Act, ha reso questo modello contrattuale particolarmente vantaggioso
            per il datore di lavoro, che può beneficiare di alcune agevolazioni retributive e
            contributive.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mt-8">
          <FeatureCard icon="ph:door-open" title="Accesso">
            <p className="mb-3">
              L’azienda deve avere almeno un dipendente, altrimenti le incombenze diventano troppo
              onerose per la realizzazione del DVR (documento di valutazione dei rischi).
            </p>
            <p className="m-0">Va stesa una convenzione fra Azienda e CFP</p>
          </FeatureCard>
          <FeatureCard icon="ph:hourglass-medium" title="Durata">
            <p className="mb-3">
              La durata minima del contratto di Apprendistato è di 6 mesi, quella massima è: 1 Anno
              per il conseguimento del Diploma per coloro che hanno già una qualifica.
            </p>
            <p className="m-0">
              Al termine del percorso formativo e successivamente all’acquisizione del Diploma
              Professionale può essere attivato l’apprendistato professionalizzante.
            </p>
          </FeatureCard>
        </div>
      </Section>

      <Section id="benefici" width="lg">
        <SectionTitle icon="ph:coins">Benefici per l’azienda</SectionTitle>
        <div className="grid lg:grid-cols-3 gap-5">
          <Card>
            <Icon icon="ph:currency-eur" className="text-3xl text-brand mb-3" />
            <h3 className="font-bold text-lg mb-2 text-fg">Benefici economici</h3>
            <div className="text-sm leading-relaxed text-muted flex flex-col gap-3">
              <p className="m-0">
                Possibilità di inquadrare l’apprendista fino a due livelli inferiori rispetto alla
                categoria spettante al lavoratore con qualifica corrispondente a quella al cui
                conseguimento è finalizzato il contratto ovvero, in alternativa, di stabilire la
                retribuzione dell&apos;apprendista in misura percentuale e in modo graduale alla
                anzianità di servizio.
              </p>
              <p className="m-0">
                Retribuzione stabilita in percentuale rispetto a quella dei lavoratori addetti a
                mansioni che richiedono la qualifica a cui è finalizzato il contratto:
              </p>
              <ul className="grid grid-cols-2 gap-2 list-none m-0 p-0">
                {[
                  ['45%', 'il primo anno'],
                  ['55%', 'il secondo anno'],
                  ['65%', 'il terzo anno'],
                  ['70%', 'il quarto anno'],
                ].map(([v, l]) => (
                  <li key={l} className="rounded-xl bg-brand/5 dark:bg-brand/10 px-3 py-2">
                    <strong className="block text-lg text-brand">{v}</strong>
                    {l}
                  </li>
                ))}
              </ul>
              <p className="m-0">
                Per le ore di formazione presso il C.F.P. Don Bosco il datore di lavoro è esonerato
                da ogni obbligo retributivo (15 ore settimanali – 590 nei 10 mesi).
              </p>
              <p className="m-0">
                Per le ore di formazione a carico del datore di lavoro viene riconosciuta
                all’apprendista una retribuzione pari al 10% di quella che gli sarebbe dovuta (16
                ore settimanali – 400 nei 10 mesi).
              </p>
            </div>
          </Card>
          <Card>
            <Icon icon="ph:percent" className="text-3xl text-brand mb-3" />
            <h3 className="font-bold text-lg mb-2 text-fg">Benefici contributivi</h3>
            <div className="text-sm leading-relaxed text-muted flex flex-col gap-3">
              <p className="m-0">
                Per tutta la durata dell’apprendistato, contribuzione a carico del datore di lavoro
                ridotta:
              </p>
              <ul className="list-disc pl-5 m-0 space-y-1">
                <li>Per aziende con meno di 10 dipendenti: 1,5%</li>
                <li>Per aziende con almeno 10 dipendenti: 5%</li>
              </ul>
              <p className="m-0">
                Al termine del contratto di apprendistato per il Diploma, per l’anno successivo, alla
                conferma in servizio dell’apprendista, il datore di lavoro potrà beneficiare della
                seguente aliquota retributiva:
              </p>
              <ul className="list-disc pl-5 m-0 space-y-1">
                <li>Per aziende con meno di 10 dipendenti = 1,61%</li>
                <li>Per aziende con almeno 10 dipendenti = 11,61%</li>
              </ul>
            </div>
          </Card>
          <Card>
            <Icon icon="ph:receipt" className="text-3xl text-brand mb-3" />
            <h3 className="font-bold text-lg mb-2 text-fg">Benefici fiscali</h3>
            <p className="text-sm leading-relaxed text-muted m-0">
              Esclusione delle spese sostenute per la formazione nel calcolo dell’IRAP.
            </p>
          </Card>
        </div>
      </Section>

      <div id="informazioni" className="scroll-mt-28">
        <HelpBox title="Per informazioni" icon="ph:chats-circle">
          <p className="mb-4">Scrivi a Francesco Cicogna o telefona:</p>
          <div className="inline-flex flex-col items-start gap-2 font-sans text-base">
            <ContactLine icon="ph:envelope" href="mailto:f.cicogna@donboscosandona.it">
              f.cicogna@donboscosandona.it
            </ContactLine>
            <ContactLine icon="ph:phone" href="tel:0421338980">
              0421 338 980
            </ContactLine>
          </div>
        </HelpBox>
      </div>
    </Layout>
  )
}
