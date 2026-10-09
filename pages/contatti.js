import Head from 'next/head'
import { Icon } from '@iconify/react'
import {
  Layout,
  LandingHero,
  QuickNav,
  Section,
  SectionTitle,
  Card,
  Callout,
  ContactLine,
  Eyebrow,
} from '/components'

const ancore = [
  { href: '#sede', label: 'Sede e segreteria' },
  { href: '#riferimenti', label: 'Contatti utili' },
  { href: '#direzione', label: 'Direzione' },
  { href: '#referenti', label: 'Orientamento e settori' },
]

// Un contatto: ruolo, persone (facoltative), email e telefono.
const riferimenti = [
  { ruolo: 'Informazioni generali', email: 'info@donboscosandona.it', tel: '0421 338 980' },
  { ruolo: 'Segreteria didattica', email: 'segreteria.fp.sandona@salesianinordest.it', tel: '0421 338 980' },
  { ruolo: 'Posta elettronica certificata', email: 'fp.donboscosandona@pec.salesianinordest.it' },
  { ruolo: 'Informazioni relative alla privacy', email: 'privacy@donboscosandona.it' },
  { ruolo: 'Organismo di vigilanza (codice etico)', email: 'odv.fp@salesianinordest.it' },
  { ruolo: 'Amministrazione/Risorse umane', email: 'amministrazione.fp.sandona@salesianinordest.it', tel: '0421 338 988' },
  { ruolo: 'Referente qualità', email: 'qualita.fp.sandona@salesianinordest.it', tel: '0421 338 990' },
]

const direzione = [
  { ruolo: 'Direttore Generale', nome: 'don Nicola Munari', email: 'direzione@donboscosandona.it' },
  { ruolo: 'Direttore della Scuola', nome: 'Alessandro Ferro', email: 'direzione.fp.sandona@salesianinordest.it' },
  { ruolo: 'Vicedirettrice', nome: "Anna Maria D'Ambrosio", email: 'a.dambrosio@donboscosandona.it' },
]

const referenti = [
  { ruolo: 'Sostegno/orientamento in entrata', nome: 'Andrea Pasqualetto', email: 'a.pasqualetto@donboscosandona.it', tel: '0421 338 992' },
  { ruolo: 'Orientamento in uscita', nome: 'Giorgia Seno', email: 'g.seno@donboscosandona.it', tel: '0421 338 971' },
  {
    ruolo: 'Ufficio stage e tirocini',
    persone: [
      { nome: 'Francesco Cicogna', email: 'f.cicogna@donboscosandona.it', tel: '0421 338 969' },
      { nome: 'Greta Caliman', email: 'g.caliman@donboscosandona.it', tel: '0421 338 968' },
    ],
  },
  { ruolo: 'Servizi al lavoro e corsi per adulti', nome: 'Francesco Cicogna', email: 'f.cicogna@donboscosandona.it', tel: '0421 338 969' },
  { ruolo: 'Pastorale', nome: 'Daniele Zanutto', email: 'd.zanutto@donboscosandona.it', tel: '0421 338 983' },
  { ruolo: 'Settore Elettrico/Energia', nome: 'Diego Cuzzolin', email: 'd.cuzzolin@donboscosandona.it', tel: '0421 338 991' },
  { ruolo: 'Settore Informatico', nome: 'Emanuele Cecchetto', email: 'e.cecchetto@donboscosandona.it' },
  { ruolo: 'Settore Meccanico', nome: 'Lorenzo Faggiotto', email: 'l.faggiotto@donboscosandona.it', tel: '0421 338 986' },
  { ruolo: 'Settore Automotive', nome: 'Roberto Partata', email: 'r.partata@donboscosandona.it', tel: '0421 338 985' },
]

const telHref = (tel) => `tel:${tel.replace(/\s/g, '')}`

function Persona({ nome, email, tel }) {
  return (
    <div className="space-y-1.5">
      {nome && <p className="m-0 font-semibold text-fg">{nome}</p>}
      {email && (
        <ContactLine icon="ph:envelope" href={`mailto:${email}`}>
          <span className="break-all">{email}</span>
        </ContactLine>
      )}
      {tel && (
        <ContactLine icon="ph:phone" href={telHref(tel)}>
          {tel}
        </ContactLine>
      )}
    </div>
  )
}

function Riferimento({ ruolo, persone, ...persona }) {
  return (
    <Card className="p-5">
      <p className="text-xs font-bold uppercase tracking-widest text-brand mb-3">{ruolo}</p>
      <div className="space-y-4 text-sm">
        {(persone || [persona]).map((p) => (
          <Persona key={p.nome || p.email} {...p} />
        ))}
      </div>
    </Card>
  )
}

export default function Contatti() {
  return (
    <Layout>
      <Head>
        <title>Contatti | SFP Don Bosco</title>
      </Head>
      <LandingHero
        eyebrow="SFP Don Bosco"
        title="Contatti"
        description="Numeri utili e indirizzi email di riferimento"
        imageUrl="/images/trasparenza/transparency-2.webp"
      />

      <QuickNav links={ancore} />

      <Section id="sede" width="lg" className="mt-16">
        <div className="grid md:grid-cols-2 gap-5">
          <Card highlight className="p-6 md:p-8">
            <Eyebrow className="mb-3">Scuola della Formazione Professionale</Eyebrow>
            <h2 className="text-3xl font-bold tracking-tight text-brand mb-4">SFP DON BOSCO</h2>
            <div className="space-y-2 text-base">
              <ContactLine icon="ph:map-pin">
                via XIII Martiri, 86 — 30027 San Donà di Piave (VE)
              </ContactLine>
              <ContactLine icon="ph:phone" href="tel:0421338980">
                Centralino: 0421 338 980
              </ContactLine>
              <ContactLine icon="ph:printer">Fax: 0421 188 2664</ContactLine>
              <ContactLine icon="ph:identification-badge">
                Codice meccanografico: <strong className="ml-1">VECF013009</strong>
              </ContactLine>
            </div>
          </Card>
          <Card className="p-6 md:p-8">
            <div className="flex items-center gap-2 mb-4">
              <Icon icon="ph:clock" className="text-2xl text-brand" />
              <h2 className="text-xl font-bold text-brand m-0">Orario della segreteria</h2>
            </div>
            <dl className="space-y-4 m-0">
              <div>
                <dt className="text-xs font-bold uppercase tracking-widest text-muted">Mattino</dt>
                <dd className="m-0 mt-1">
                  dal lunedì al venerdì dalle 8:00 alle 9:00 e dalle 11:00 alle 12:30; il sabato
                  dalle 9:00 alle 10:00
                </dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-widest text-muted">Pomeriggio</dt>
                <dd className="m-0 mt-1">martedì e giovedì dalle 15:30 alle 16:30</dd>
              </div>
            </dl>
          </Card>
        </div>
        <div className="grid md:grid-cols-2 gap-5 mt-5">
          <Callout tone="info" icon="ph:calendar-check" className="mb-0">
            <p className="m-0">
              <strong>
                Per i colloqui con gli insegnanti utilizzare il servizio di prenotazione disponibile
                su ScuolaOnline
              </strong>
            </p>
          </Callout>
          <Callout tone="info" icon="ph:user-circle" className="mb-0">
            <p className="m-0">
              <strong>
                Per colloqui con il Direttore o il Vicedirettore prendere appuntamento in segreteria.
              </strong>
            </p>
          </Callout>
        </div>
      </Section>

      <Section id="riferimenti" width="lg">
        <SectionTitle icon="ph:address-book">Contatti e Riferimenti Utili</SectionTitle>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {riferimenti.map((r) => (
            <Riferimento key={r.ruolo} {...r} />
          ))}
        </div>
      </Section>

      <Section id="direzione" width="lg">
        <SectionTitle icon="ph:buildings">Direzione</SectionTitle>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {direzione.map((r) => (
            <Riferimento key={r.ruolo} {...r} />
          ))}
        </div>
      </Section>

      <Section id="referenti" width="lg">
        <SectionTitle icon="ph:compass">
          Referenti per Orientamento, Servizi al Lavoro e Settori Didattici
        </SectionTitle>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {referenti.map((r) => (
            <Riferimento key={r.ruolo} {...r} />
          ))}
        </div>
      </Section>
    </Layout>
  )
}
