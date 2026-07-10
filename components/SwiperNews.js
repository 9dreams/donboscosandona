import { Pagination, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/bundle'

import NewsCard from '/components/NewsCard'

export default function News({ title, data, limit, defaultTag, aspectRatio }) {
  if (!data) return <div>Caricamento...</div>
  if (data && data.status == '404')
    return <div>Errore: il canale specificato per le News è inesistente.</div>

  data = data.filter((post) => !post.in_evidenza)
  data.splice(limit)

  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-8 mt-20 mb-24">
      {title && <h2 className="text-3xl font-bold mb-8 text-left">{title}</h2>}
      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay
        pagination={{ clickable: true }}
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 15 },
          1024: { slidesPerView: 3, spaceBetween: 20 },
        }}
      >
        {data.map((post, i) => (
          <SwiperSlide key={i}>
            <NewsCard post={post} defaultTag={defaultTag} aspectRatio={aspectRatio} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

News.defaultProps = {
  title: 'News',
  limit: 6,
  defaultTag: '',
}
