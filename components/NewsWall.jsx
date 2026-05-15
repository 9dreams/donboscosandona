import React from 'react'
import { Container, Button } from '@mui/material'
import GridViewIcon from '@mui/icons-material/GridView'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import Link from 'next/link'
import Image from 'next/image'

// Helper for tags
const renderTag = (tagString) => {
  if (!tagString) return null
  const tags = tagString.split(',').slice(0, 2) // Show max 2 tags
  return (
    <div className="flex gap-2 absolute top-4 left-4 z-10">
      {tags.map((t, i) => (
        <span 
          key={i} 
          className={`text-xs font-bold px-3 py-1 rounded-full text-white uppercase shadow-sm ${i % 2 === 0 ? 'bg-[#00529C]' : 'bg-[#F79F1F]'}`}
        >
          {t.trim()}
        </span>
      ))}
    </div>
  )
}

const getPostHref = (post) =>
  (post.articolo && `/articoli/${post.id}`) || post.link || post.allegato || ''

const getPostActionLabel = (post) => {
  if (post.articolo) return 'Continua a leggere...'
  if (!post.articolo && post.allegato) return "Scarica l'allegato"
  return ''
}

const CardLink = ({ post, className, children }) => {
  const href = getPostHref(post)

  if (!href) {
    return <div className={className}>{children}</div>
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  )
}

const ActionLabel = ({ post, compact = false }) => {
  const label = getPostActionLabel(post)

  if (!label) return null

  return (
    <div className={`flex items-center text-[#00529C] font-semibold group-hover:underline ${compact ? 'mt-4 text-sm' : 'mt-6'}`}>
      {label} <ArrowForwardIcon fontSize="small" className="ml-1" />
    </div>
  )
}

export default function NewsWall({ 
  title = "News", 
  subtitle = "", 
  data, 
  limit = 7 
}) {
  if (!data) return <div className="text-center py-10 text-white">Caricamento...</div>
  if (data && data.status === '404')
    return <div className="text-center py-10 text-white">Errore: il canale specificato per le News è inesistente.</div>

  const news = data.filter((post) => !post.in_evidenza).slice(0, limit)

  return (
    <Container maxWidth="lg" sx={{ my: 8 }}>
      <div className="mb-8">
        <div>
          <div 
            className="text-4xl md:text-5xl font-bold uppercase mb-2" 
            style={{ 
              color: '#00529C', 
              fontFamily: '"Bebas Neue", sans-serif',
              letterSpacing: '1px',
              textShadow: 'none',
              WebkitTextFillColor: 'initial',
              WebkitTextStroke: '0px'
            }}
          >
            {title}
          </div>
          <div className="text-gray-300 max-w-2xl text-sm md:text-base" style={{ fontFamily: '"Exo 2", sans-serif' }}>
            {subtitle}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1: Hero */}
        {news[0] && (
          <CardLink post={news[0]} className="col-span-1 md:col-span-2 lg:row-span-2 rounded-2xl shadow-sm overflow-hidden relative group hover:shadow-lg transition-all duration-300 min-h-[360px] flex flex-col justify-end p-6 pt-24 md:p-8 md:pt-28">
            <Image
              src={news[0].immagine_mobile || news[0].immagine}
              alt={news[0].titolo}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#00529C]/90 to-transparent mix-blend-multiply" />
            <div className="absolute inset-0 bg-black/20" />
            {renderTag(news[0].tag)}
            <div className="relative z-10 text-white mt-auto">
              <p className="text-sm font-medium mb-1 opacity-90">{news[0].pubblicazione}</p>
              <div className="text-2xl md:text-3xl font-bold mb-2 uppercase text-white leading-tight" style={{ textShadow: 'none', WebkitTextFillColor: 'initial', WebkitTextStroke: '0px' }}>
                {news[0].titolo}
              </div>
              <p className="text-sm md:text-base opacity-90 mb-4">{news[0].abstract}</p>
              {getPostActionLabel(news[0]) && (
                <div className="inline-flex rounded-full bg-white px-5 py-2 text-sm font-bold text-[#00529C] transition-colors group-hover:bg-gray-100">
                  {getPostActionLabel(news[0])}
                </div>
              )}
            </div>
          </CardLink>
        )}

        {/* Card 2: Normal */}
        {news[1] && (
          <CardLink post={news[1]} className="col-span-1 bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col group hover:shadow-lg transition-all duration-300">
            <div className="relative w-full h-48">
              <Image src={news[1].immagine} alt={news[1].titolo} fill className="object-cover" />
              {renderTag(news[1].tag)}
            </div>
            <div className="p-5 flex flex-col flex-grow justify-between bg-white">
              <div>
                <p className="text-xs text-gray-500 mb-1 font-medium">{news[1].pubblicazione}</p>
                <div className="text-lg font-bold text-[#00529C] mb-2 uppercase line-clamp-2 leading-tight" style={{ textShadow: 'none', WebkitTextFillColor: 'initial', WebkitTextStroke: '0px' }}>
                  {news[1].titolo}
                </div>
                <p className="text-sm text-gray-600">{news[1].abstract}</p>
              </div>
              <ActionLabel post={news[1]} compact />
            </div>
          </CardLink>
        )}

        {/* Card 3: Normal */}
        {news[2] && (
          <CardLink post={news[2]} className="col-span-1 bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col group hover:shadow-lg transition-all duration-300">
            <div className="relative w-full h-48">
              <Image src={news[2].immagine} alt={news[2].titolo} fill className="object-cover" />
              {renderTag(news[2].tag)}
            </div>
            <div className="p-5 flex flex-col flex-grow justify-between bg-white">
              <div>
                <p className="text-xs text-gray-500 mb-1 font-medium">{news[2].pubblicazione}</p>
                <div className="text-lg font-bold text-[#00529C] mb-2 uppercase line-clamp-2 leading-tight" style={{ textShadow: 'none', WebkitTextFillColor: 'initial', WebkitTextStroke: '0px' }}>
                  {news[2].titolo}
                </div>
                <p className="text-sm text-gray-600">{news[2].abstract}</p>
              </div>
              <ActionLabel post={news[2]} compact />
            </div>
          </CardLink>
        )}

        {/* Card 4: Wide with background image */}
        {news[3] && (
          <CardLink post={news[3]} className="col-span-1 md:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden relative group hover:shadow-lg transition-all duration-300 min-h-[360px] flex flex-col justify-end p-6 pt-24 md:p-8 md:pt-28">
            <Image src={news[3].immagine} alt={news[3].titolo} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#00529C]/90 to-transparent mix-blend-multiply" />
            <div className="absolute inset-0 bg-black/20" />
            {renderTag(news[3].tag)}
            <div className="relative z-10 text-white mt-auto">
              <p className="text-sm font-medium mb-1 opacity-90">{news[3].pubblicazione}</p>
              <div className="text-2xl md:text-3xl font-bold mb-2 uppercase text-white leading-tight" style={{ textShadow: 'none', WebkitTextFillColor: 'initial', WebkitTextStroke: '0px' }}>
                {news[3].titolo}
              </div>
              <p className="text-sm md:text-base opacity-90 mb-4">{news[3].abstract}</p>
              {getPostActionLabel(news[3]) && (
                <div className="inline-flex rounded-full bg-white px-5 py-2 text-sm font-bold text-[#00529C] transition-colors group-hover:bg-gray-100">
                  {getPostActionLabel(news[3])}
                </div>
              )}
            </div>
          </CardLink>
        )}

        {/* Card 5: Normal */}
        {news[4] && (
          <CardLink post={news[4]} className="col-span-1 bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col group hover:shadow-lg transition-all duration-300">
            <div className="relative w-full h-48">
              <Image src={news[4].immagine} alt={news[4].titolo} fill className="object-cover" />
              {renderTag(news[4].tag)}
            </div>
            <div className="p-5 flex flex-col flex-grow justify-between bg-white">
              <div>
                <p className="text-xs text-gray-500 mb-1 font-medium">{news[4].pubblicazione}</p>
                <div className="text-lg font-bold text-[#00529C] mb-2 uppercase line-clamp-2 leading-tight" style={{ textShadow: 'none', WebkitTextFillColor: 'initial', WebkitTextStroke: '0px' }}>
                  {news[4].titolo}
                </div>
                <p className="text-sm text-gray-600">{news[4].abstract}</p>
              </div>
              <ActionLabel post={news[4]} compact />
            </div>
          </CardLink>
        )}

        {/* Card 6: Normal */}
        {news[5] && (
          <CardLink post={news[5]} className="col-span-1 bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col group hover:shadow-lg transition-all duration-300">
            <div className="relative w-full h-48">
              <Image src={news[5].immagine} alt={news[5].titolo} fill className="object-cover" />
              {renderTag(news[5].tag)}
            </div>
            <div className="p-5 flex flex-col flex-grow justify-between bg-white">
              <div>
                <p className="text-xs text-gray-500 mb-1 font-medium">{news[5].pubblicazione}</p>
                <div className="text-lg font-bold text-[#00529C] mb-2 uppercase line-clamp-2 leading-tight" style={{ textShadow: 'none', WebkitTextFillColor: 'initial', WebkitTextStroke: '0px' }}>
                  {news[5].titolo}
                </div>
                <p className="text-sm text-gray-600">{news[5].abstract}</p>
              </div>
              <ActionLabel post={news[5]} compact />
            </div>
          </CardLink>
        )}

        {/* Card 7: Wide */}
        {news[6] && (
          <CardLink post={news[6]} className="col-span-1 md:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col md:flex-row group hover:shadow-lg transition-all duration-300">
            <div className="relative w-full md:w-1/2 h-48 md:h-auto min-h-[200px]">
              <Image src={news[6].immagine} alt={news[6].titolo} fill className="object-cover" />
              {renderTag(news[6].tag)}
            </div>
            <div className="p-6 flex flex-col w-full md:w-1/2 justify-between bg-white">
              <div>
                <p className="text-xs text-gray-500 mb-1 font-medium">{news[6].pubblicazione}</p>
                <div className="text-xl font-bold text-[#00529C] mb-2 uppercase line-clamp-2 leading-tight" style={{ textShadow: 'none', WebkitTextFillColor: 'initial', WebkitTextStroke: '0px' }}>
                  {news[6].titolo}
                </div>
                <p className="text-sm text-gray-600">{news[6].abstract}</p>
              </div>
              <ActionLabel post={news[6]} compact />
            </div>
          </CardLink>
        )}
      </div>

      <div className="mt-12 flex justify-center">
        <Button 
          variant="outlined" 
          endIcon={<GridViewIcon />}
          href="/news"
          sx={{
            borderRadius: '2rem',
            padding: '10px 30px',
            border: '2px solid #00529C',
            color: '#00529C',
            fontWeight: 'bold',
            textTransform: 'none',
            fontSize: '1rem',
            boxSizing: 'border-box',
            '&:hover': {
              border: '2px solid #00529C',
              backgroundColor: '#00529C',
              color: '#fff',
            },
            '&:focus-visible': {
              border: '2px solid #00529C',
            },
          }}
        >
          Vedi tutte le notizie
        </Button>
      </div>
    </Container>
  )
}
