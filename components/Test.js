
import { useState } from 'react'

import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

export default function Test(props) {
  // numero di domande presenti
  let n = props.domande.length

  // stato contenente l'indice della domanda corrente
  const [indice, setIndice] = useState(0)
  const [elettrico, setElettrico] = useState(0)
  const [energia, setEnergia] = useState(0)
  const [informatico, setInformatico] = useState(0)
  const [meccanico, setMeccanico] = useState(0)
  const [motoristico, setMotoristico] = useState(0)

  let item = props.domande[indice]

  function scelta(s) {
    setElettrico(elettrico + s.elettrico)
    setEnergia(energia + s.energia)
    setInformatico(informatico + s.informatico)
    setMeccanico(meccanico + s.meccanico)
    setMotoristico(motoristico + s.motoristico)

    setIndice(indice + 1)
  }

  let totale = elettrico + energia + informatico + meccanico + motoristico
  function percentuale(punti) {
    if (totale > 0) {
      return punti / totale * 100
    }
    else {
      return 0
    }
  }

  return (

    <Container class='bg-slate-300' maxWidth='lg'>
      {    (indice < n) ? (<>
      <p><b>Domanda {indice + 1}/{n}: {item.domanda}</b></p>
      <hr />
      <p><button onClick={() => scelta(item.a)}>a: {item.a.risposta}</button></p>
      <p><button onClick={() => scelta(item.b)}>b: {item.b.risposta}</button></p>
      <p><button onClick={() => scelta(item.c)}>c: {item.c.risposta}</button></p>
      <hr /></>) : (<h1>Complimenti!</h1>)}
      <p>
        Elettrico: {percentuale(elettrico)}% -
        Energia: {percentuale(energia)}% -
        Informatico: {percentuale(informatico)}% -
        Meccanico: {percentuale(meccanico)}% - 
        Motoristico: {percentuale(motoristico)}%
      </p>
    </Container>
  )
}
