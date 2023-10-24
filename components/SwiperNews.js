import { Container, Grid, Typography } from '@mui/material'

import { Pagination, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/bundle'

import NewsCard from '/components/NewsCard'

export default function News({ title, data, limit }) {
  if (!data) return <div>Caricamento...</div>
  if (data && data.status == '404')
    return <div>Errore: il canale specificato per le News è inesistente.</div>

  data = data.filter((post) => !post.in_evidenza)
  data.splice(limit)

  return (
    <Container maxWidth='lg' sx={{ marginTop: '5rem', marginBottom: '6rem' }}>
      <Typography
        style={{ textAlign: 'left', paddingBottom: '2rem' }}
        component='h2'
        variant='h4'
        color='inherit'
        gutterBottom
      >
        {title}
      </Typography>
      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay
        pagination={{ clickable: true }}
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        {data.map((post) => (
          <SwiperSlide>
            <NewsCard post={post} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  )
}

News.defaultProps = {
  title: 'News',
  limit: 6,
}
