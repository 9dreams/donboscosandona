import { useState } from 'react'
import fs from 'fs'
import path from 'path'
import Head from 'next/head'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import {
  Layout,
  SezioneHero,
  SezioneIntestazione,
  Cronologia,
  Scaffale,
  SchedaIntervista,
  NewsTag,
} from '/components'
import { elencoPagine } from '/lib/contenuti'
import { hasTag } from '/lib/posts'

const prugna = '#5E1A63'
const oro = '#F0C06B'

export default function Storia({ intro, cronologia, direttori, libri, interviste, news }) {
  const [direttoreScelto, setDirettoreScelto] = useState(direttori.voci[0]?.slug)
  const [libroScelto, setLibroScelto] = useState(null)
  const direttore = direttori.voci.find((d) => d.slug === direttoreScelto) || direttori.voci[0]
  const libro = libri.voci.find((l) => l.slug === libroScelto)

  return (
    <Layout>
      <Head>
        <title>La nostra storia | Oratorio Don Bosco</title>
        <meta
          name="description"
          content="La storia dell'Oratorio Don Bosco di San Donà di Piave dal 1928: la cronologia, i 24 direttori, i libri e le interviste «A tu per tu»."
        />
      </Head>

      <SezioneHero
        immagine="/images/storia/storia-oratoriani-davanti-alla-casa.jpg"
        alt="I ragazzi dell'Oratorio davanti al porticato negli anni Trenta"
        bianconero
        occhiello="Dal 1928 · San Donà di Piave"
        titolo="La nostra storia"
        citazione={intro.citazione}
        accento={oro}
        ancore={[
          { href: '#cronologia', label: "La storia dell'oratorio" },
          { href: '#direttori', label: `I ${direttori.voci.length} direttori` },
          { href: '#libri', label: 'Libri' },
          { href: '#interviste', label: 'A tu per tu' },
          ...(news.length > 0 ? [{ href: '#archivio', label: 'Dal nostro archivio', evidenza: true }] : []),
        ]}
      />

      <div className="bg-[#FBF7F0] text-[#2A2230] dark:bg-[#121016] dark:text-[#F4EFE6]">
        {/* Perché ripartire dalla storia? */}
        <section className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-14 px-6 py-24">
          <div className="min-w-0 flex-[1_1_460px]">
            <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.18em]" style={{ '--accento': prugna }} data-accento>
              {intro.titolo}
            </p>
            {intro.paragrafi.map((p, i) => (
              <p key={i} className="mb-[18px] text-[19px] leading-[1.7] last:mb-0 dark:text-[#D6CEDB]">
                {p}
              </p>
            ))}
          </div>
          {intro.citazioneInterna && (
            <figure className="m-0 min-w-0 flex-[1_1_420px] border-l-2 py-10 pl-10" style={{ borderColor: oro }}>
              <p className="font-serif-display m-0 text-[34px] font-medium italic leading-[1.3] text-[#5E1A63] dark:text-[#E7B8EA]">
                «{intro.citazioneInterna}»
              </p>
            </figure>
          )}
        </section>

        {/* Cronologia */}
        <section id="cronologia" className="scroll-mt-24 bg-[#F3ECE1] px-6 py-24 dark:bg-[#18141C]">
          <div className="mx-auto max-w-[1200px]">
            <SezioneIntestazione occhiello="Breve storia dell'Oratorio" titolo={<>Novant'anni nel cortile<br />«più bello del mondo»</>} accento={prugna} />
            <Cronologia tappe={cronologia} accento={prugna} />
          </div>
        </section>

        {/* Direttori */}
        <section id="direttori" className="scroll-mt-24 bg-[#3A1240] px-6 py-24 text-white">
          <div className="mx-auto max-w-[1200px]">
            <SezioneIntestazione
              occhiello="I Direttori"
              titolo={<>{direttori.voci.length} Direttori,<br />un'unica casa</>}
              intro={direttori.intro}
              accento={oro}
              scuro
            />

            <article
              aria-live="polite"
              className="mb-10 flex flex-wrap gap-8 rounded-[22px] border border-white/10 bg-white/5 p-7"
            >
              {direttore.foto && (
                <figure className="m-0 min-w-0 max-w-[460px] flex-[1_1_320px]">
                  <div className="relative h-[300px] overflow-hidden rounded-[14px]">
                    <Image src={direttore.foto} alt={`Foto di ${direttore.nome}`} fill sizes="(min-width: 1024px) 460px, 100vw" className="object-cover grayscale" />
                  </div>
                  {direttore.didascaliaFoto && (
                    <figcaption className="mt-2 text-[13px] text-white/65">Foto: {direttore.didascaliaFoto}</figcaption>
                  )}
                </figure>
              )}
              <div className="min-w-0 flex-[1_1_380px]">
                <p className="font-serif-display mb-1.5 text-[26px] font-bold" style={{ color: oro }}>
                  N. {direttore.n} · {direttore.periodo}
                </p>
                <h3 className="font-ui mb-3.5 text-[28px] font-extrabold !text-white">{direttore.nome}</h3>
                {direttore.profilo.map((p, i) => (
                  <p key={i} className="mb-3.5 text-base leading-[1.65] text-white/85">{p}</p>
                ))}
                <dl className="m-0 mt-5 grid grid-cols-1 gap-x-6 gap-y-3 text-sm sm:grid-cols-2">
                  {[
                    ['Nato', direttore.nato],
                    ['Morto', direttore.morto],
                    [direttore.incarico || 'Direttore', [direttore.dal && `dal ${direttore.dal}`, direttore.al && `al ${direttore.al}`].filter(Boolean).join(' ')],
                    ['Età alla nomina', direttore.eta],
                  ]
                    .filter(([, v]) => v)
                    .map(([k, v]) => (
                      <div key={k}>
                        <dt className="text-xs font-bold uppercase tracking-[0.1em]" style={{ color: oro }}>{k}</dt>
                        <dd className="m-0 mt-0.5">{v}</dd>
                      </div>
                    ))}
                </dl>
              </div>
            </article>

            <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-2.5">
              {direttori.voci.map((d) => {
                const attivo = d.slug === direttore.slug
                return (
                  <button
                    key={d.slug}
                    type="button"
                    onClick={() => {
                      setDirettoreScelto(d.slug)
                      document.getElementById('direttori')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    aria-pressed={attivo}
                    className={`flex min-h-11 cursor-pointer items-baseline gap-3.5 rounded-xl border px-4 py-3.5 text-left text-white transition-colors ${
                      attivo ? 'border-[#F0C06B] bg-white/15' : 'border-white/10 bg-white/5 hover:bg-white/10'
                    }`}
                  >
                    <span className="font-serif-display min-w-7 text-2xl font-bold" style={{ color: oro }}>{d.n}</span>
                    <span>
                      <span className="block text-[15px] font-bold">{d.nome}</span>
                      <span className="mt-0.5 block text-[13px] text-white/70">{d.periodo}</span>
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        </section>

        {/* Libri */}
        <section id="libri" className="mx-auto max-w-[1200px] scroll-mt-24 px-6 py-24">
          <SezioneIntestazione
            occhiello="Libri"
            titolo="La memoria, su carta"
            intro={`${libri.voci.length} volumi raccontano l'Oratorio attraverso ricordi, missioni, la banda e il calcio. ${libri.nota || ''}`}
            accento={prugna}
          />
          <Scaffale libri={libri.voci} accento={prugna} selezionato={libroScelto} onSeleziona={setLibroScelto} />

          {libro && (
            <div aria-live="polite" className="mt-10 rounded-[22px] bg-white p-8 shadow-[0_1px_2px_rgba(42,34,48,0.06)] dark:bg-[#1C1822]">
              <p className="font-serif-display mb-1 text-2xl font-bold" style={{ '--accento': prugna }} data-accento>{libro.anno}</p>
              <h3 className="font-serif-display mb-1 text-4xl font-semibold !text-[#2A2230] dark:!text-[#F4EFE6]">{libro.titolo}</h3>
              {libro.sottotitolo && <p className="mb-4 text-lg italic text-[#5A5060] dark:text-[#B9AFC0]">{libro.sottotitolo}</p>}
              {libro.abstract && <p className="mb-5 max-w-[760px] text-[17px] leading-[1.7]">{libro.abstract}</p>}
              <dl className="m-0 flex flex-wrap gap-x-10 gap-y-3 text-sm">
                {[
                  ['Autore', libro.autore],
                  ['Editore', libro.editore],
                  ['Pagine', libro.pagine],
                  ['Formato', libro.formato],
                ]
                  .filter(([, v]) => v)
                  .map(([k, v]) => (
                    <div key={k}>
                      <dt className="text-xs font-bold uppercase tracking-[0.1em]" style={{ '--accento': prugna }} data-accento>{k}</dt>
                      <dd className="m-0 mt-0.5">{v}</dd>
                    </div>
                  ))}
              </dl>
              {libro.link && (
                <a href={libro.link} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2.5 rounded-full px-[22px] py-3.5 font-bold !text-white" style={{ backgroundColor: prugna }}>
                  Sfoglia il libro <Icon icon="ph:arrow-up-right" />
                </a>
              )}
            </div>
          )}
        </section>

        {/* A tu per tu */}
        <section id="interviste" className="scroll-mt-24 bg-[#F3ECE1] px-6 py-24 dark:bg-[#18141C]">
          <div className="mx-auto max-w-[1200px]">
            <SezioneIntestazione occhiello="Le interviste" titolo="«A tu per tu con…»" intro={interviste.intro} accento={prugna} />
            <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-[22px]">
              {interviste.voci.map((i) => (
                <SchedaIntervista key={i.slug} intervista={i} accento={prugna} />
              ))}
            </div>
          </div>
        </section>

        {/* Dal nostro archivio: news del CMS con il tag «storia» */}
        {news.length > 0 && (
          <section id="archivio" className="mx-auto max-w-[1200px] scroll-mt-24 px-6 pb-28 pt-24">
            <SezioneIntestazione
              occhiello="Dal nostro archivio"
              titolo="Storie che continuano"
              intro="Anniversari, ricordi e testimonianze pubblicati nelle news dell'Oratorio."
              accento={prugna}
            />
            <NewsTag posts={news} etichetta="storia" accento={prugna} />
          </section>
        )}
      </div>
    </Layout>
  )
}

function leggiJson(file) {
  return JSON.parse(fs.readFileSync(path.join(process.cwd(), 'contenuti', 'storia', file), 'utf8'))
}

// Per abbinare le interviste locali agli articoli del CMS: «A tu per tu con don Germano Colombo»
function normalizzaNome(testo = '') {
  return testo
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/^.*a tu per tu con\s+/, '')
    .replace(/^(don|sdb)\s+/, '')
    .replace(/[^a-z ]/g, '')
    .trim()
}

export async function getStaticProps() {
  let posts = []
  try {
    const res = await fetch('https://channels.donboscosandona.it/api/posts/inoratorio?q=storia&limit=500')
    const dati = await res.json()
    if (Array.isArray(dati)) posts = dati.filter((p) => hasTag(p, 'storia'))
  } catch (e) {
    posts = []
  }

  // Le interviste importate sul CMS (tag «interviste») si aprono come articoli;
  // quelle non ancora importate usano la pagina locale /storia/interviste/<slug>.
  const intervisteCms = posts.filter((p) => hasTag(p, 'interviste'))
  const interviste = elencoPagine('storia/interviste')
    .sort((a, b) => (a.ordine ?? 99) - (b.ordine ?? 99))
    .map(({ slug, nome, copertina, didascaliaCopertina, presentazione }) => {
      const articolo = intervisteCms.find((p) => normalizzaNome(p.titolo) === normalizzaNome(nome))
      return {
        slug,
        nome,
        copertina: copertina || null,
        didascaliaCopertina: didascaliaCopertina || null,
        presentazione: presentazione || '',
        href: articolo ? `/articoli/${articolo.id}` : `/storia/interviste/${slug}`,
      }
    })

  const intro = leggiJson('intro.json')
  const direttori = leggiJson('direttori.json')
  const libri = leggiJson('libri.json')
  const rubrica = leggiJson('interviste.json')

  return {
    props: {
      intro: {
        titolo: intro.titolo,
        paragrafi: intro.paragrafi,
        citazione: intro.citazioneIndice, // Cicerone, nell'hero
        citazioneInterna: intro.citazione || null,
      },
      cronologia: leggiJson('cronologia.json'),
      direttori: { intro: direttori.intro, voci: direttori.direttori },
      libri: { nota: libri.nota, voci: libri.libri },
      interviste: { intro: (rubrica.intro || []).join(' '), voci: interviste },
      news: posts.filter((p) => !hasTag(p, 'interviste')),
    },
    revalidate: 3600,
  }
}
