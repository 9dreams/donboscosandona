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
    <section
      className="max-w-[1200px] mx-auto px-4 md:px-8 my-16 md:my-20"
      style={{ '--swiper-theme-color': 'var(--brand-blue)' }}
    >
      {title && <h2 className="title-display text-4xl md:text-5xl mb-8">{title}</h2>}
      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay
        pagination={{ clickable: true }}
        className="pb-12! [&_.swiper-slide]:h-auto!"
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
    </section>
  )
}

News.defaultProps = {
  title: 'News',
  limit: 6,
  defaultTag: '',
}
