import Head from 'next/head'
import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero.js'
import { Section, SectionTitle, Lead, Card, Callout, Button, Steps, ContactLine } from '/components/ui'

const piattaforma = 'https://whistleblowing.fp.salesianinordest.it/'
const informativa =
  'https://channels.donboscosandona.it/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBjZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--151079f00f3db65798bdc4241f8e3affe236ed31/Informativa%20Privacy%20piattaforma%20Whistleblowing.pdf'

export default function Page() {
  return (
    <Layout>
      <Head />
      <LandingHero
        eyebrow='Trasparenza'
        title='Whistleblowing - Segnalazione illeciti'
        description='Piattaforma on line per le segnalazioni di illeciti o irregolarità (ai sensi dell’art. 54-bis del d.lgs. n. 165/2001)'
        buttonUrl={piattaforma}
        buttonText='Accedi alla piattaforma'
        imageUrl='/images/trasparenza/whistleblowing.jpg'
      />

      <Section width='md' className='mt-16'>
        <Lead>
          La SFP DON BOSCO mette a disposizione un sistema informatico per la
          segnalazione di condotte illecite di interesse generale e non di
          interesse individuale, di cui si sia venuti a conoscenza in ragione del
          rapporto di lavoro, secondo la normativa che regola il cosiddetto
          whistleblowing.
        </Lead>
        <Lead>
          ll whistleblower (segnalante) può essere sia un dipendente della SFP DON
          BOSCO, sia un lavoratore o un collaboratore delle imprese fornitrici di
          beni o servizi o che realizzano opere in favore della SFP DON BOSCO.
        </Lead>
        <div className='flex flex-wrap gap-3'>
          <Button href={piattaforma}>Accedi alla piattaforma</Button>
          <Button href={informativa} variant='outline' iconLeft='ph:file-pdf'>
            Prendi visione dell’informativa sul trattamento dei dati
          </Button>
        </div>
      </Section>

      <Section id='come-segnalare' width='md'>
        <SectionTitle icon='ph:megaphone'>Come segnalare illeciti o irregolarità</SectionTitle>
        <Card className='p-6 md:p-8'>
          <p className='text-lg leading-8 m-0'>
            Il modulo di segnalazione disponibile sulla piattaforma prevede
            l’indicazione della tipologia di condotta illecita, di una serie di dati
            relativi al tempo e al luogo dei fatti, ai soggetti coinvolti, al
            livello di coinvolgimento e di conoscenza diretta o meno dei fatti da
            parte del segnalante, all’eventuale coinvolgimento di altri soggetti
            informati. Per garantire riservatezza e anonimato, tutti i dati inseriti
            dal segnalante sono criptati, compreso l’indirizzo e-mail.
          </p>
          <Button href={piattaforma} className='mt-6'>
            Accedi alla piattaforma
          </Button>
        </Card>
      </Section>

      <Section id='alternative' width='md'>
        <SectionTitle icon='ph:phone'>Modalità alternative di segnalazione</SectionTitle>
        <p className='text-lg leading-8 mb-6'>
          La piattaforma whistleblowing costituisce il canale preferenziale per la
          segnalazione di illeciti, consentendo a chi segnala di richiedere
          aggiornamenti sulla segnalazione effettuata. Tuttavia, ai sensi
          dell’art. 54-bis del d.lgs. n. 165/2001 (whistleblowing)&quot;, è possibile
          effettuare una segnalazione vocale mediante il canale telefonico diretto
          con il gestore delle segnalazioni (avv. Lorenzo Pilon) al numero
          049-650777 dalle ore 9 alle ore 13, dal lunedì al venerdì anche per
          appuntamento.
        </p>
        <div className='grid sm:grid-cols-2 gap-5'>
          <Card className='p-5 space-y-2'>
            <p className='m-0 font-bold'>avv. Lorenzo Pilon</p>
            <ContactLine icon='ph:phone' href='tel:049650777'>049-650777</ContactLine>
            <ContactLine icon='ph:clock'>dalle ore 9 alle ore 13, dal lunedì al venerdì</ContactLine>
          </Card>
          <Callout tone='warning' className='m-0'>
            Si ricorda che questa modalità di segnalazione garantisce la riservatezza
            del segnalante ma non l’anonimato.
          </Callout>
        </div>
      </Section>

      <Section id='piattaforma' width='md'>
        <SectionTitle icon='ph:shield-check'>Piattaforma informatica dedicata</SectionTitle>
        <p className='text-lg leading-8 mb-8'>
          Il sistema utilizza la tecnologia opensource Globaleaks che è ritenuta
          dagli esperti fra le più efficaci a livello mondiale in termini di
          sicurezza e garantisce, tramite il ricorso a strumenti di crittografia,
          viene garantita la riservatezza dell&apos;identità della persona segnalante,
          della persona coinvolta, della persona menzionata nella segnalazione,
          nonché del contenuto della segnalazione e della eventuale documentazione
          inoltrata.
        </p>
        <Card highlight className='p-6 md:p-8'>
          <div className='flex items-center gap-3 mb-4'>
            <span className='inline-block rounded-md bg-ochre px-2.5 py-1 text-xs font-bold uppercase tracking-widest text-ink'>
              Key code
            </span>
            <h3 className='text-xl font-bold m-0'>Comunichiamo attraverso il &quot;key code&quot;</h3>
          </div>
          <p className='mb-4'>
            Registrando la segnalazione sul portale si otterrà un codice
            identificativo univoco di 16 cifre (key code). Tale codice:
          </p>
          <Steps
            className='m-0'
            items={[
              'deve essere utilizzato per dialogare con il Responsabile per la Prevenzione della Corruzione aziendale in modo spersonalizzato attraverso il Canale (la piattaforma informatica) e per essere costantemente informati sullo stato di lavorazione della segnalazione inviata.',
              'deve essere conservato con cura in quanto, in caso di smarrimento, non potrà essere recuperato o duplicato in alcun modo.',
            ]}
          />
        </Card>
      </Section>
    </Layout>
  )
}
