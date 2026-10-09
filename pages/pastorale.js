import Head from 'next/head'
import { Icon } from '@iconify/react'
import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero.js'
import { NewsWall, Section, SectionTitle, Lead, Card, Eyebrow } from '/components'
import { excludeTag } from '/lib/posts'

const iniziative = [
  { icon: 'ph:sun-horizon', testo: 'Buongiorno' },
  { icon: 'ph:mountains', testo: 'Ritiri spirituali ed esperienziali' },
  { icon: 'ph:chats-circle', testo: 'Attività formative su temi come: Affettività, Volontariato, Amicizia, Dipendenze, Animazione…' },
  { icon: 'ph:trophy', testo: 'Tornei e giochi' },
  { icon: 'ph:confetti', testo: 'Feste' },
  { icon: 'ph:bus', testo: 'Gite e visite tecniche' },
  { icon: 'ph:users-three', testo: 'Incontri' },
  { icon: 'ph:dots-three-circle', testo: '…e molto altro' },
]

const equipe = [
  { nome: 'don Nicola Munari', ruolo: 'Sacerdote Salesiano, Direttore dell’opera Salesiana di San Donà, assistente spirituale dell’equipe,' },
  { nome: 'Alessandro Ferro', ruolo: 'Direttore della SFP, insegnante di informatica esperto in didattica e digitale' },
  { nome: 'Daniele Zanutto', ruolo: 'incaricato per la pastorale della scuola, insegnante nel settore motoristico e carrozzeria.' },
  { nome: 'Martina Talon', ruolo: 'insegnante d’inglese con esperienza in ambito educativo…' },
  { nome: 'Francesco Dal Molin', ruolo: 'insegnante di matematica e fisica, scout ed esperto in tecniche di animazione' },
  { nome: 'Francesca Cadamuro', ruolo: 'educatrice e tutor d’aula, con esperienza in ambito educativo e pastorale.' },
]

export default function Home({ data }) {
  return (
    <Layout>
      <Head />

      <LandingHero
        eyebrow='Pastorale'
        title='Proposta formativa 24/25'
        description='buoni cristiani e onesti cittadini!'
        buttonUrl={'https://www.youtube.com/watch?v=wyjm1yGmu9g'}
        buttonText='Guarda il video'
        imageUrl='/images/pastorale/locandina.jpg'
      />

      <div className='mt-12'>
        <NewsWall title={null} data={data} limit={7} defaultTag='pastorale' />
      </div>

      <Section id='proposta' width='md'>
        <div className='text-center mb-10'>
          <Eyebrow className='mb-4'>Scuola di Volo, Scuola di Vita</Eyebrow>
          <h2 className='title-display text-4xl md:text-5xl m-0'>Proposta educativa 2024|2025</h2>
        </div>

        <figure className='m-0 mb-10 rounded-2xl border-l-4 border-ochre bg-surface shadow-sm p-6 md:p-8'>
          <blockquote className='m-0 font-serif text-2xl italic leading-relaxed text-fg'>
            ”Il motore è il cuore di un aereo, ma il pilota è la sua anima.”
          </blockquote>
          <figcaption className='mt-3 text-sm font-semibold text-muted'>Magg. Andrea Rossi - Solista PAN</figcaption>
        </figure>

        <Lead>Questa massima ci aiuta a presentare la nostra proposta formativa.</Lead>
        <h3 className='text-xl font-bold mb-2'>Ma che cos&apos;è la proposta formativa?</h3>
        <p className='text-lg leading-8 mb-6'>
          La proposta formativa è il centro dell’azione educativa. È la modalità con cui ci impegniamo ad educare, formare, animare i giovani della scuola con una molteplicità di iniziative.
        </p>

        <ul className='grid sm:grid-cols-2 gap-3 m-0 p-0 list-none mb-10'>
          {iniziative.map((i) => (
            <li key={i.testo} className='flex items-center gap-3 rounded-xl bg-surface border border-line px-4 py-3'>
              <Icon icon={i.icon} className='text-2xl text-brand shrink-0' />
              <span className='text-[15px] font-medium'>{i.testo}</span>
            </li>
          ))}
        </ul>

        <p className='text-lg leading-8 mb-4'>
          Ad ispirare la proposta di quest’anno allora, saranno proprio gli aerei!
          Abbiamo infatti pensato di metterli sotto i riflettori e di farne metafora utile a riflettere sulla vita di tutti i giorni, naturalmente con ottica cristiana ma con un’attenzione universale.
        </p>
        <Card highlight className='p-6 md:p-8 text-center'>
          <p className='text-sm font-bold uppercase tracking-widest text-muted mb-2'>Per formare così:</p>
          <p className='text-2xl font-bold text-brand leading-snug m-0'>
            Buoni Cristiani, Onesti Cittadini
            <br />
            e Professionisti Preparati.
          </p>
          <p className='mt-5 font-serif text-lg leading-relaxed m-0'>
            E allora… Allacciate le cinture, chiudete il tavolino davanti a voi e PREPARIAMOCI al DECOLLO!
          </p>
        </Card>
      </Section>

      <Section id='timeline' width='md'>
        <SectionTitle icon='ph:path'>Timeline</SectionTitle>
        <a href='/images/pastorale/timeline completa.jpg' target='_blank' rel='noopener noreferrer' className='block no-underline!'>
          <Card className='p-3 transition-shadow hover:shadow-md'>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src='/images/pastorale/timeline.jpg' alt='Timeline della proposta formativa' className='w-full rounded-xl' />
            <p className='flex items-center justify-center gap-2 text-sm font-semibold text-brand mt-3 mb-1'>
              <Icon icon='ph:magnifying-glass-plus' /> Clicca l&apos;immagine per estenderla
            </p>
          </Card>
        </a>
      </Section>

      <Section id='equipe' width='lg'>
        <SectionTitle icon='ph:users-four'>L&apos;equipe</SectionTitle>
        <Lead>Con piacere vi presentiamo l&apos;équipe per la pastorale scolastica:</Lead>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6'>
          {equipe.map((p) => (
            <Card key={p.nome} className='p-5'>
              <div className='flex items-center gap-3 mb-2'>
                <span className='grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand/10 text-brand'>
                  <Icon icon='ph:user' className='text-xl' />
                </span>
                <h3 className='font-bold text-fg m-0'>{p.nome}</h3>
              </div>
              <p className='text-sm leading-relaxed text-muted m-0'>{p.ruolo}</p>
            </Card>
          ))}
        </div>
        <p className='font-serif text-lg leading-relaxed text-muted'>
          Un gruppo di insegnanti che con entusiasmo e passione si dedicano alla cura e all&apos;accompagnamento dei nostri studenti, attraverso proposte educative e di crescita nella fede.
        </p>
      </Section>

      <Section width='lg'>
        <Card className='p-6 md:p-10'>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src='/images/pastorale/Partner.png' alt='Partner' className='mx-auto w-full h-auto' />
        </Card>
      </Section>
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch(
    'https://channels.donboscosandona.it/api/posts/inoratorio?q=pastorale'
  )
  const data = excludeTag(await res.json(), 'screen')

  return {
    props: { data },
    revalidate: 3600, // I dati vengono ricaricati al massimo una volta all'ora
  }
}
