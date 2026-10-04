import SezioneIntestazione from './SezioneIntestazione.jsx'
import Prosa from './Prosa.jsx'
import SchedaContatti from './SchedaContatti.jsx'

// Blocco di testo lungo su fondo carta, con la scheda contatti a lato:
// usato per i contenuti del vecchio sito aggiunti alle pagine esistenti.
export default function SezioneApprofondimento({ id, occhiello, titolo, intro, html, contatti = [], colore = '#1976D2' }) {
  return (
    <section id={id} className="scroll-mt-24 bg-[#FBF7F0] px-6 py-24 dark:bg-[#121016]">
      <div className="mx-auto max-w-[1200px]">
        {titolo && <SezioneIntestazione occhiello={occhiello} titolo={titolo} intro={intro} accento={colore} />}
        <div className="flex flex-wrap gap-16">
          <div className="min-w-0 flex-[1_1_600px]">
            <Prosa html={html} accento={colore} />
          </div>
          {contatti.length > 0 && (
            <aside className="min-w-0 flex-[1_1_320px] self-start lg:sticky lg:top-28">
              <SchedaContatti contatti={contatti} colore={colore} />
            </aside>
          )}
        </div>
      </div>
    </section>
  )
}
