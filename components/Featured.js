import { Container, Grid, Typography } from '@mui/material'

import Carousel from '/components/Carousel'

export default function Featured({
  data,
  limit,
  maxWidth,
  height,
  animation,
  interval,
}) {
  if (!data) return <div>Caricamento...</div>
  if (data && data.status == '404')
    return <div>Errore: il canale specificato per le News è inesistente.</div>

  data = data.filter((post) => post.in_evidenza)
  data.splice(limit)

  const slides = data.map((post) => ({
    titolo: post.titolo,
    descrizione: post.abstract,
    immagine: post.immagine,
    colore: '#000',
    colore2: 'transparent',
    opacity: 1,
    buttonText:
      (post.articolo && 'Continua a leggere...') ||
      (post.link && 'Scopri di più') ||
      (post.allegato && "Scarica l'allegato"),
    buttonUrl:
      (post.articolo && '/articoli/' + post.id) || post.link || post.allegato,
  }))

  return (
    <>
      {slides.length > 0 && (
        <Carousel
          slides={slides}
          maxWidth={maxWidth}
          height={height}
          animation={animation}
          interval={interval}
        ></Carousel>
      )}
    </>
  )
}

Featured.defaultProps = {
  limit: 6,
  maxWidth: false,
  height: 90,
  animation: 'slide',
  interval: 4000,
}
