import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import Image from 'next/image'

function readMore(string, maxWords) {
  if (string) {
    const array = string.trim().split(' ')
    const wordCount = array.length
    let result = array.splice(0, maxWords).join(' ')
    if (wordCount > maxWords) result += '...'
    return result
  }
  return string
}

export default function MyCarousel({ slides, height, animation, interval, duration, defaultTag }) {
  return (
    <div className="relative mb-8 w-full" style={{ '--swiper-theme-color': 'var(--ochre)', '--swiper-pagination-bullet-inactive-color': '#fff' }}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: interval, disableOnInteraction: false }}
        speed={duration}
        loop
        className="w-full"
        style={{ height: `${height}vh` }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full overflow-hidden">
              {/* Desktop image */}
              <div className="hidden lg:block absolute inset-0">
                <Image
                  src={slide.immagine}
                  alt={slide.titolo || ''}
                  fill
                  style={{ objectFit: 'cover', color: 'white' }}
                  sizes="100vw"
                />
              </div>
              {/* Mobile image */}
              <div className="block lg:hidden absolute inset-0">
                <Image
                  src={slide.immagine_mobile || slide.immagine}
                  alt={slide.titolo || ''}
                  fill
                  style={{ objectFit: 'cover', color: 'white' }}
                  sizes="100vw"
                />
              </div>

              {/* Gradient overlay */}
              {slide.titolo && (
                <div
                  className="absolute inset-0"
                  style={{
                    opacity: slide.opacity || 1,
                    background: `linear-gradient(${slide.colore2 || slide.colore || 'transparent'}, ${slide.colore || 'black'})`,
                  }}
                />
              )}
              {/* Blur overlay */}
              {slide.blur && (
                <div className="absolute inset-0" style={{ backdropFilter: `blur(${slide.blur})` }} />
              )}

              {/* Content */}
              <div className="absolute inset-0 flex items-end md:items-center">
                <div className="max-w-[1200px] mx-auto w-full px-4 md:px-8">
                  <div className="max-w-2xl pb-12 md:pb-0 md:mt-48">
                    {/* Tags */}
                    {slide.tag && slide.tag !== defaultTag && (
                      <div className="flex gap-2 mb-4 flex-wrap">
                        {slide.tag.split(',').map((tag) => (
                          <span key={tag} className="rounded-md bg-ochre px-2.5 py-1 text-[12px] font-bold uppercase tracking-widest text-ink">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    {/* Title */}
                    <h2 className="wordmark text-white mb-4 text-[clamp(2.25rem,5vw,4rem)]">
                      {slide.titolo}
                    </h2>
                    {/* Description */}
                    {slide.descrizione && (
                      <p className="font-serif text-white/85 text-lg md:text-xl leading-relaxed mb-4">
                        {readMore(slide.descrizione, 50)}
                      </p>
                    )}
                    {/* Button */}
                    {slide.buttonUrl && (
                      <a
                        href={slide.buttonUrl}
                        className="mt-4 inline-flex items-center gap-2 px-7 py-3.5 bg-ochre text-ink! no-underline! rounded-full font-bold hover:bg-ochre-strong transition-colors"
                      >
                        {slide.buttonText} <span aria-hidden="true">→</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

MyCarousel.defaultProps = {
  height: 90,
  animation: 'slide',
  interval: 7000,
  duration: 1000,
  defaultTag: '',
}
