import React, { useState, useMemo, useRef, useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

const ITEMS_PER_PAGE = 12

const titleStyle = {
  fontFamily: '"Bebas Neue", sans-serif',
  textShadow: 'none',
  WebkitTextFillColor: 'initial',
  WebkitTextStroke: '0px',
  letterSpacing: '0.02em',
}

const bodyStyle = { fontFamily: '"Plus Jakarta Sans", "Exo 2", sans-serif' }

// Tag color cycling: blue, orange, slate
const TAG_COLORS = ['#1976D2', '#FF9800', '#565c6a']
const getTagColor = (i) => TAG_COLORS[i % TAG_COLORS.length]

const getPostHref = (post) =>
  (post.articolo && `/articoli/${post.id}`) || post.link || post.allegato || null

const getActionLabel = (post) => {
  if (post.articolo) return 'Continua a leggere'
  if (!post.articolo && post.allegato) return "Scarica l'allegato"
  if (post.link) return 'Scopri di più'
  return null
}

function NewsCard({ post, hiddenTagList = [] }) {
  const href = getPostHref(post)
  const label = getActionLabel(post)
  const tags = post.tag
    ? post.tag
        .split(',')
        .map((t) => t.trim())
        .filter((t) => t && !hiddenTagList.includes(t.toLowerCase()))
    : []

  const inner = (
    <article className="group bg-white border border-[#c1c6d4] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0px_4px_20px_rgba(0,0,0,0.08)] hover:border-[#1976D2] flex flex-col h-full">
      {/* Image */}
      <div className="relative h-56 overflow-hidden flex-shrink-0">
        <Image
          src={post.immagine}
          alt={post.titolo || ''}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {tags.length > 0 && (
          <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
            {tags.slice(0, 2).map((tag, i) => (
              <span
                key={tag}
                className="text-white text-xs font-semibold px-3 py-1 rounded-full uppercase"
                style={{ backgroundColor: getTagColor(i), ...bodyStyle }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Date */}
        <div className="flex items-center gap-2 mb-3">
          <CalendarTodayIcon sx={{ fontSize: 16, color: '#717783' }} />
          <span className="text-sm text-[#717783]" style={bodyStyle}>
            {post.pubblicazione}
          </span>
        </div>

        {/* Title */}
        {post.titolo && (
          <h3
            className="text-[#1976D2] text-xl font-normal uppercase leading-tight mb-3 group-hover:text-[#FF9800] transition-colors"
            style={titleStyle}
          >
            {post.titolo}
          </h3>
        )}

        {/* Abstract */}
        {post.abstract && (
          <p className="text-sm text-[#414752] line-clamp-3 flex-grow" style={bodyStyle}>
            {post.abstract}
          </p>
        )}

        {/* CTA */}
        {label && (
          <div className="mt-6 pt-4 border-t border-[#c1c6d4] flex justify-between items-center">
            <span
              className="text-sm font-bold text-[#1976D2] uppercase"
              style={bodyStyle}
            >
              {label}
            </span>
            <ArrowForwardIcon sx={{ color: '#1976D2', fontSize: 20 }} />
          </div>
        )}
      </div>
    </article>
  )

  if (!href) return <div className="h-full">{inner}</div>
  return (
    <Link href={href} className="block h-full">
      {inner}
    </Link>
  )
}

function PaginationBar({ page, totalPages, pageNumbers, onPage }) {
  if (totalPages <= 1) return null
  return (
    <nav className="flex justify-center items-center gap-2">
      <button
        onClick={() => onPage(page - 1)}
        disabled={page === 1}
        className="w-12 h-12 flex items-center justify-center rounded-lg border border-[#c1c6d4] text-[#191c1e] hover:bg-[#eceef0] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
      >
        <ChevronLeftIcon sx={{ fontSize: 20 }} />
      </button>

      {pageNumbers.map((p, i) =>
        p === '...' ? (
          <span key={`dots-${i}`} className="px-2 text-[#717783]">
            ...
          </span>
        ) : (
          <button
            key={p}
            onClick={() => onPage(p)}
            className="w-12 h-12 flex items-center justify-center rounded-lg text-sm font-semibold transition-colors"
            style={{
              backgroundColor: page === p ? '#1976D2' : 'transparent',
              color: page === p ? '#fff' : '#191c1e',
              border: page === p ? 'none' : '1px solid #c1c6d4',
              ...bodyStyle,
            }}
          >
            {p}
          </button>
        )
      )}

      <button
        onClick={() => onPage(page + 1)}
        disabled={page === totalPages}
        className="w-12 h-12 flex items-center justify-center rounded-lg border border-[#c1c6d4] text-[#191c1e] hover:bg-[#eceef0] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
      >
        <ChevronRightIcon sx={{ fontSize: 20 }} />
      </button>
    </nav>
  )
}

export default function NewsArchive({ data, hiddenTags = '' }) {
  const router = useRouter()
  const [activeTag, setActiveTag] = useState('all')
  const [page, setPage] = useState(1)
  const gridRef = useRef(null)

  // Pre-select tag from ?q= query param on mount
  useEffect(() => {
    const q = router.query.q
    if (q && typeof q === 'string') {
      setActiveTag(q.trim())
      setPage(1)
    }
  }, [router.query.q])
  const hiddenTagList = useMemo(
    () =>
      hiddenTags
        .split(',')
        .map((tag) => tag.trim().toLowerCase())
        .filter(Boolean),
    [hiddenTags]
  )

  // Collect unique tags — "scuola" always first, then alphabetical
  const allTags = useMemo(() => {
    const set = new Set()
    data.forEach((post) => {
      if (post.tag) post.tag.split(',').forEach((t) => { const s = t.trim(); if (s) set.add(s) })
    })
    const sorted = Array.from(set)
      .filter((tag) => !hiddenTagList.includes(tag.toLowerCase()))
      .sort()
    const idx = sorted.findIndex((t) => t.toLowerCase() === 'scuola')
    if (idx > 0) {
      sorted.splice(idx, 1)
      sorted.unshift('scuola')
    }
    return sorted
  }, [data, hiddenTagList])

  // Filter
  const filtered = useMemo(() => {
    if (activeTag === 'all') return data
    return data.filter(
      (post) => post.tag && post.tag.split(',').map((t) => t.trim()).includes(activeTag)
    )
  }, [data, activeTag])

  // Pagination
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE)
  const paged = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE)

  const handleTagChange = (tag) => {
    setActiveTag(tag)
    setPage(1)
  }

  const handlePage = (p) => {
    setPage(p)
    gridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  // Build pagination window
  const pageNumbers = useMemo(() => {
    const pages = []
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i)
    } else {
      pages.push(1)
      if (page > 3) pages.push('...')
      for (let i = Math.max(2, page - 1); i <= Math.min(totalPages - 1, page + 1); i++) pages.push(i)
      if (page < totalPages - 2) pages.push('...')
      pages.push(totalPages)
    }
    return pages
  }, [page, totalPages])

  return (
    <div style={{ backgroundColor: '#f7f9fb', minHeight: '100vh' }}>
      <main
        className="max-w-[1280px] mx-auto px-5 md:px-12 py-12 md:py-20"
        style={bodyStyle}
      >
        {/* Page header */}
        <div className="mb-12 md:mb-16 border-l-8 border-[#1976D2] pl-6">
          <h1
            className="text-[56px] md:text-[72px] text-[#1976D2] uppercase mb-4 leading-none"
            style={titleStyle}
          >
            Archivio Notizie
          </h1>
          <p className="text-lg text-[#414752] max-w-2xl leading-7" style={bodyStyle}>
            Resta aggiornato su tutte le attività dell'Oratorio don Bosco di San Donà di Piave:
            dalla formazione professionale agli eventi per le famiglie.
          </p>
        </div>

        {/* Filters */}
        <section className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-6">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleTagChange('all')}
              className="px-5 py-2 rounded-full text-sm font-semibold transition-colors"
              style={{
                backgroundColor: activeTag === 'all' ? '#1976D2' : '#e6e8ea',
                color: activeTag === 'all' ? '#fff' : '#414752',
                ...bodyStyle,
              }}
            >
              Tutte le Notizie
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => handleTagChange(tag)}
                className="px-5 py-2 rounded-full text-sm font-semibold transition-colors"
                style={{
                  backgroundColor: activeTag === tag ? '#1976D2' : '#e6e8ea',
                  color: activeTag === tag ? '#fff' : '#414752',
                  ...bodyStyle,
                }}
              >
                {tag}
              </button>
            ))}
          </div>
          <p className="text-sm text-[#717783] whitespace-nowrap" style={bodyStyle}>
            {filtered.length} {filtered.length === 1 ? 'articolo' : 'articoli'}
          </p>
        </section>

        {/* Pagination — top */}
        <div className="mb-10">
          <PaginationBar
            page={page}
            totalPages={totalPages}
            pageNumbers={pageNumbers}
            onPage={handlePage}
          />
        </div>

        {/* Grid */}
        <div ref={gridRef}>
          {paged.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paged.map((post) => (
                <NewsCard key={post.id} post={post} hiddenTagList={hiddenTagList} />
              ))}
            </div>
          ) : (
            <p className="text-center text-[#717783] py-20 text-lg" style={bodyStyle}>
              Nessun articolo trovato per questo filtro.
            </p>
          )}
        </div>

        {/* Pagination — bottom */}
        <div className="mt-16">
          <PaginationBar
            page={page}
            totalPages={totalPages}
            pageNumbers={pageNumbers}
            onPage={handlePage}
          />
        </div>
      </main>
    </div>
  )
}