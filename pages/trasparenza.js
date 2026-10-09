import Head from 'next/head'
import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero.js'
import DocumentList from '/components/DocumentList'
import { Section, SectionTitle, Card, Button, ContactLine } from '/components/ui'
import { conDocumentiLocali } from '/data/documenti'

export default function Home({ data }) {
  return (
    <Layout>
      <Head />
      <LandingHero
        eyebrow='Amministrazione'
        title='Trasparenza amministrativa'
        imageUrl='/images/trasparenza/transparency-2.webp'
      />

      <Section width='md' className='mt-16'>
        <Card className='p-6 md:p-8'>
          <div className='flex flex-col md:flex-row md:items-center gap-6 md:justify-between'>
            <div className='space-y-2'>
              <p className='font-bold text-lg text-fg m-0 leading-snug'>
                Fondazione Salesiani per la Formazione Professionale
                <br />
                Italia Nord Est - Impresa Sociale - SFP Don Bosco
              </p>
              <ContactLine icon='ph:map-pin'>Via XIII Martiri 86 - 30027 San Donà di Piave</ContactLine>
              <ContactLine icon='ph:identification-card'>C.F. 80015710306 P.IVA 01845730306</ContactLine>
            </div>
            <Button href='/whistleblowing' icon='ph:arrow-right' className='shrink-0'>
              Whistleblowing - Segnalazione illeciti
            </Button>
          </div>
        </Card>
      </Section>

      <Section id='documenti' width='md'>
        <SectionTitle icon='ph:files'>Documenti</SectionTitle>
        <DocumentList data={data} limit={30} />
      </Section>
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch(
    'https://channels.donboscosandona.it/api/posts/donboscosandona_docs?q=trasparenza'
  )
  const data = conDocumentiLocali(await res.json())

  return {
    props: { data },
    revalidate: 3600, // I dati vengono ricaricati al massimo una volta all'ora
  }
}
