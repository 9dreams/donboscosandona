import { useState } from 'react'

export default function Test(props) {
  const n = props.domande.length
  const [indice, setIndice] = useState(0)
  const [elettrico, setElettrico] = useState(0)
  const [energia, setEnergia] = useState(0)
  const [informatico, setInformatico] = useState(0)
  const [meccanico, setMeccanico] = useState(0)
  const [motoristico, setMotoristico] = useState(0)

  const item = props.domande[indice]

  function scelta(s) {
    setElettrico(elettrico + s.elettrico)
    setEnergia(energia + s.energia)
    setInformatico(informatico + s.informatico)
    setMeccanico(meccanico + s.meccanico)
    setMotoristico(motoristico + s.motoristico)
    setIndice(indice + 1)
  }

  function reset() {
    setElettrico(0); setEnergia(0); setInformatico(0)
    setMeccanico(0); setMotoristico(0); setIndice(0)
  }

  const totale = elettrico + energia + informatico + meccanico + motoristico

  function percentuale(punti) {
    return totale > 0 ? ((punti / totale) * 100).toFixed(1) : '0'
  }

  function categorieConPercentualePiuAlta() {
    const categorie = { Elettrico: elettrico, Energia: energia, Informatico: informatico, Meccanico: meccanico, Motoristico: motoristico }
    const percentuali = Object.keys(categorie).map((cat) => ({ categoria: cat, percentuale: percentuale(categorie[cat]) }))
    const max = Math.max(...percentuali.map((i) => parseFloat(i.percentuale)))
    return percentuali.filter((i) => parseFloat(i.percentuale) === max)
  }

  const coloriSettori = { Elettrico: '#add8e6', Energia: '#ffcc80', Informatico: '#ffeb3b', Meccanico: '#98fb98', Motoristico: '#f08080' }
  const tdClass = "px-4 py-3 border-t border-gray-200"

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-4">
      {indice < n ? (
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/4 flex justify-center mb-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="rounded-xl max-w-full" src={item.immagine} alt="" />
          </div>
          <div className="md:w-3/4 md:pl-4">
            <p className="text-sky-500 mb-4">
              <b>Scopri qual&apos;è il settore giusto per te con il quiz preparato dagli allievi della 3F informatici!</b>
            </p>
            <h2 className="text-xl font-semibold mb-4">Domanda {indice + 1}/{n}: <b>{item.domanda}</b></h2>
            <div className="border border-gray-200 dark:border-white/10 rounded-lg overflow-hidden mb-4">
              {['a', 'b', 'c'].map((key) => (
                <div key={key} className="border-t border-gray-200 dark:border-white/10 first:border-0 p-3">
                  <button
                    onClick={() => scelta(item[key])}
                    className="w-full px-4 py-2 bg-[#1976D2] text-white rounded font-medium hover:bg-[#1565C0] transition-colors"
                  >
                    {key.toUpperCase()}: {item[key].risposta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <>
          <h2 className="text-3xl font-bold text-[#1976D2] dark:text-[#64B5F6] mb-3">Complimenti!</h2>
          <h3 className="text-2xl text-[#1976D2] dark:text-[#64B5F6] mb-6">
            La nostra IA ti consiglia: <b>{categorieConPercentualePiuAlta().map((i) => i.categoria).join(', ')}</b>
          </h3>
          <button onClick={reset} className="px-6 py-2 bg-[#1976D2] text-white rounded-full font-bold hover:bg-[#1565C0] transition-colors">
            Ripeti il test
          </button>
        </>
      )}

      {indice === n && (
        <div className="mt-8 overflow-x-auto border border-gray-200 dark:border-white/10 rounded-lg">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-200 dark:border-white/10">
                <th className="px-4 py-3 text-left text-[1.2rem]"><b>Categoria</b></th>
                <th className="px-4 py-3 text-right text-[1.2rem]"><b>Punteggio</b></th>
                <th className="px-4 py-3 text-right text-[1.2rem]"><b>Percentuale</b></th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: 'Elettrico', val: elettrico },
                { label: 'Energia', val: energia },
                { label: 'Informatico', val: informatico },
                { label: 'Meccanico', val: meccanico },
                { label: 'Motoristico', val: motoristico },
              ].map(({ label, val }) => (
                <tr key={label} style={{ backgroundColor: coloriSettori[label] }}>
                  <td className={tdClass}>{label}</td>
                  <td className={`${tdClass} text-right`}>{val}</td>
                  <td className={`${tdClass} text-right`}>{percentuale(val)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
