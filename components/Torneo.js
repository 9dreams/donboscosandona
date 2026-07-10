import React, { useState, useEffect } from 'react'

const Torneo = (props) => {
  const [rotatePizza, setRotatePizza] = useState(false)
  const [activePizza, setActivePizza] = useState(false)
  const [activePizza1, setActivePizza1] = useState(false)

  const numPizzettes = props.pizzettes
  const numPizzettes1 = props.pizzettes1

  const createRandomPosition = () => ({
    left: Math.floor(Math.random() * 100) + 'vw',
    top: Math.floor(Math.random() * 100) + 'vh',
  })

  const pizzettes = Array.from({ length: numPizzettes }, (_, index) => (
    <div
      key={index}
      className="torneo-pizzette"
      style={{ backgroundImage: 'url("/images/pizza/pizza1.png")', ...createRandomPosition() }}
    />
  ))

  const pizzettes1 = Array.from({ length: numPizzettes1 }, (_, index) => (
    <div
      key={index}
      className="torneo-pizzette"
      style={{ backgroundImage: 'url("/images/pizza/pizza2.png")', ...createRandomPosition() }}
    />
  ))

  const toggleRotatePizza = () => {
    if (activePizza) {
      setActivePizza(false)
      setRotatePizza(false)
      setActivePizza1(false)
    } else {
      setRotatePizza(true)
      setTimeout(() => setActivePizza(true), 1420)
      setTimeout(() => setActivePizza1(true), 2450)
    }
  }

  if (props.autoRotate) {
    useEffect(() => { toggleRotatePizza() }, [])
  }

  props.classi.sort((a, b) => b.punti - a.punti)

  return (
    <div
      className="relative overflow-hidden flex w-full"
      style={{
        height: 'clamp(700px, 190vh, 2000px)',
        backgroundColor: '#588fe8',
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 w-full">
        {/* Colonna sinistra: classifica */}
        <div className="pl-8 sm:pl-48 md:pl-5">
          <h2 id='titolo'>Classifica Superpizza</h2>
          <p className="w-[350px] sm:w-[450px] text-lg">
            Il torneo Superpizza coinvolge tutte le classi della SFP Don Bosco.
            Attraverso la partecipazione alle attività proposte e l'impegno nei
            giochi e nei tornei, le classi accumulano punti e scalano la
            classifica. Alla fine dell'anno, la classe vincitrice viene
            proclamata e riceve come premio una mega pizza.
          </p>
          <style jsx global>{`
            #titolo {
              font-size: 50px;
              font-family: 'Kaushan Script', cursive !important;
              letter-spacing: 0;
              padding: 0.25em 0 0.325em;
              display: block;
              text-shadow: 0 0 80px rgba(255,255,255,0.5);
              background: url(https://i.ibb.co/RDTnNrT/animated-text-fill.png) repeat-y;
              -webkit-background-clip: text;
              background-clip: text;
              -webkit-text-fill-color: transparent;
              -webkit-animation: aitf 80s linear infinite;
              -webkit-transform: translate3d(0,0,0);
              -webkit-backface-visibility: hidden;
            }
            @-webkit-keyframes aitf {
              0% { background-position: 0% 50%; }
              100% { background-position: 100% 50%; }
            }
            @media (max-width: 600px) { #titolo { font-size: 30px; } }
          `}</style>
        </div>

        {/* Colonna centrale: pizza */}
        <div className="flex flex-col items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className={`${rotatePizza ? 'torneo-pizza-podio' : 'torneo-rotating-images'}`}
            src={activePizza ? '/images/pizza/pizzadietro1.png' : '/images/pizza/pizza.png'}
            alt="Pizza"
            style={{ zIndex: 1 }}
          />
          {activePizza1 && (
            <div className="torneo-punteggio">
              <div style={{ top: 20, position: 'absolute', left: 160 }}>
                <span className="text-2xl font-bold">Podio</span>
              </div>
              <div className="absolute" style={{ top: 90, left: 54, zIndex: 5, display: 'flex', width: '100%' }}>
                <div style={{ flex: '0 0 8.33%' }} />
                <div style={{ flex: '0 0 25%' }}>
                  <span style={{ paddingTop: '0.5rem', fontSize: '22px', display: 'block' }}>{props.classi[1].classe}</span>
                </div>
                <div style={{ flex: '0 0 25%' }}>
                  <span style={{ color: 'black', fontSize: '22px', display: 'block' }}>{props.classi[0].classe}</span>
                </div>
                <div style={{ flex: '0 0 33.33%' }}>
                  <span style={{ paddingTop: '0.75rem', fontSize: '22px', display: 'block' }}>{props.classi[2].classe}</span>
                </div>
              </div>
              <div className="absolute" style={{ left: 40, top: 180, display: 'flex', width: '100%' }}>
                <div style={{ flex: '0 0 8.33%' }} />
                <div style={{ flex: '0 0 25%' }}>
                  <span style={{ fontSize: '18px', backgroundColor: '#FFC90E', width: '50px', paddingLeft: '10px', borderRadius: '30px', display: 'block' }}>{props.classi[1].punti}</span>
                </div>
                <div style={{ flex: '0 0 25%' }}>
                  <span style={{ color: 'black', fontSize: '18px', backgroundColor: '#FF5F00', width: '50px', paddingLeft: '10px', borderRadius: '30px', display: 'block' }}>{props.classi[0].punti}</span>
                </div>
                <div style={{ flex: '0 0 33.33%' }}>
                  <span style={{ fontSize: '18px', backgroundColor: '#DE6F33', width: '50px', paddingLeft: '10px', borderRadius: '30px', display: 'block' }}>{props.classi[2].punti}</span>
                </div>
              </div>
            </div>
          )}
          <div>
            <button className="torneo-button" style={{ marginTop: '20px' }} onClick={toggleRotatePizza}>
              Gira Pizza
            </button>
          </div>
        </div>

        {/* Colonna destra: tabella */}
        <div>
          <table style={{ textAlign: 'center' }}>
            <thead>
              <tr>
                <th id='th1'>Classe</th>
                <th id='th2'>Punteggi</th>
              </tr>
            </thead>
            <tbody>
              {props.classi.map((classe, i) => (
                <tr key={i}>
                  <td>{classe.classe}</td>
                  <td>{classe.punti}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <style jsx>{`
            table { width: 230px; border-collapse: collapse; margin: 10px auto; }
            th { padding: 10px; color: white; text-align: center; }
            #th1 { background-color: gold; border-top-left-radius: 20px; }
            #th2 { background-color: crimson; border-top-right-radius: 20px; }
            td { padding: 5px; text-align: center; border-top: 1px solid black; background-color: slategray; color: black; }
          `}</style>
        </div>
      </div>

      <div>{pizzettes}</div>
      <div>{pizzettes1}</div>
    </div>
  )
}

export default Torneo

Torneo.defaultProps = {
  pizzettes: 40,
  pizzettes1: 40,
  autoRotate: false,
}
