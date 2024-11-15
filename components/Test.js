import { useState } from 'react';
import { Container, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

export default function Test(props) {
  // numero di domande presenti
  let n = props.domande.length;

  // stato contenente l'indice della domanda corrente
  const [indice, setIndice] = useState(0);
  const [elettrico, setElettrico] = useState(0);
  const [energia, setEnergia] = useState(0);
  const [informatico, setInformatico] = useState(0);
  const [meccanico, setMeccanico] = useState(0);
  const [motoristico, setMotoristico] = useState(0);

  let item = props.domande[indice];

  function scelta(s) {
    setElettrico(elettrico + s.elettrico);
    setEnergia(energia + s.energia);
    setInformatico(informatico + s.informatico);
    setMeccanico(meccanico + s.meccanico);
    setMotoristico(motoristico + s.motoristico);
    setIndice(indice + 1);
  }

  function reset() {
    setElettrico(0);
    setEnergia(0);
    setInformatico(0);
    setMeccanico(0);
    setMotoristico(0);
    setIndice(0);
  }

  let totale = elettrico + energia + informatico + meccanico + motoristico;

  function percentuale(punti) {
    if (totale > 0) {
      return ((punti / totale) * 100).toFixed(1);
    } else {
      return '0';
    }
  }

  // Funzione per ottenere il nome e il colore del settore con la percentuale più alta
  function categorieConPercentualePiuAlta() {
    const categorie = {
      Elettrico: elettrico,
      Energia: energia,
      Informatico: informatico,
      Meccanico: meccanico,
      Motoristico: motoristico,
    };

    const percentuali = Object.keys(categorie).map(categoria => ({
      categoria,
      percentuale: percentuale(categorie[categoria]),
    }));

    const maxPercentuale = Math.max(...percentuali.map(item => parseFloat(item.percentuale)));

    return percentuali.filter(item => parseFloat(item.percentuale) === maxPercentuale);
  }

  // Mappa dei colori per i settori
  const coloriSettori = {
    Elettrico: 'yellow',
    Energia: 'orange',
    Informatico: 'yellow',
    Meccanico: 'green',
    Motoristico: 'red',
  };

  return (
    <Container maxWidth="lg" sx={{ backgroundColor: 'whitesmoke', padding: 2 }}>
      {indice < n ? (
        <>
          <Typography variant="h5" gutterBottom>
            <b>Domanda {indice + 1}/{n}: {item.domanda}</b>
          </Typography>
          <TableContainer component={Paper} sx={{ marginBottom: 2 }}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Button variant="contained" onClick={() => scelta(item.a)} fullWidth>
                      A: {item.a.risposta}
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Button variant="contained" onClick={() => scelta(item.b)} fullWidth>
                      B: {item.b.risposta}
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Button variant="contained" onClick={() => scelta(item.c)} fullWidth>
                      C: {item.c.risposta}
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </>
      ) : (
        <>
          <Typography variant="h4" color="primary" gutterBottom>
            Complimenti!
          </Typography>
          <Typography variant="h3" color="primary" gutterBottom>
            Tu sei portato per <b>{categorieConPercentualePiuAlta().map(item => item.categoria).join(", ")}</b>!
          </Typography>
          <Button variant="contained" color="primary" onClick={reset}>
            Ricomincia
          </Button>
        </>
      )}

      {/* Mostra la tabella delle percentuali solo dopo che tutte le domande sono state risposte */}
      {indice === n && (
        <TableContainer component={Paper} sx={{ marginTop: 3 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><b>Categoria</b></TableCell>
                <TableCell align="right"><b>Punteggio</b></TableCell>
                <TableCell align="right"><b>Percentuale</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow style={{ backgroundColor: coloriSettori.Elettrico }}>
                <TableCell>Elettrico</TableCell>
                <TableCell align="right">{elettrico}</TableCell>
                <TableCell align="right">{percentuale(elettrico)}%</TableCell>
              </TableRow>
              <TableRow style={{ backgroundColor: coloriSettori.Energia }}>
                <TableCell>Energia</TableCell>
                <TableCell align="right">{energia}</TableCell>
                <TableCell align="right">{percentuale(energia)}%</TableCell>
              </TableRow>
              <TableRow style={{ backgroundColor: coloriSettori.Informatico }}>
                <TableCell>Informatico</TableCell>
                <TableCell align="right">{informatico}</TableCell>
                <TableCell align="right">{percentuale(informatico)}%</TableCell>
              </TableRow>
              <TableRow style={{ backgroundColor: coloriSettori.Meccanico }}>
                <TableCell>Meccanico</TableCell>
                <TableCell align="right">{meccanico}</TableCell>
                <TableCell align="right">{percentuale(meccanico)}%</TableCell>
              </TableRow>
              <TableRow style={{ backgroundColor: coloriSettori.Motoristico }}>
                <TableCell>Motoristico</TableCell>
                <TableCell align="right">{motoristico}</TableCell>
                <TableCell align="right">{percentuale(motoristico)}%</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Container>
  );
}
