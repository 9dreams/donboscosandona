import React, { useState, useMemo, useRef, useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'

import NewsArchiveHero from './NewsArchiveHero'

const ITEMS_PER_PAGE = 12

const cardTitleStyle = {
  fontFamily: '"Inter Tight", sans-serif',
  fontWeight: 600,
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
    <article className="group bg-white dark:bg-[#181b23] border border-[#c1c6d4] dark:border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0px_4px_20px_rgba(0,0,0,0.08)] dark:hover:shadow-[0px_4px_20px_rgba(0,0,0,0.35)] hover:border-[#1976D2] dark:hover:border-[#64B5F6] flex flex-col h-full">
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
          <Icon icon="ph:calendar-blank" className="text-base text-[#717783]" />
          <span className="text-sm text-[#717783] dark:text-gray-400" style={bodyStyle}>
            {post.pubblicazione}
          </span>
        </div>

        {/* Title */}
        {post.titolo && (
          <h3
            className="text-[#1976D2] dark:text-[#64B5F6] text-xl font-normal leading-tight mb-3 group-hover:text-[#FF9800] transition-colors"
            style={cardTitleStyle}
          >
            {post.titolo}
          </h3>
        )}

        {/* Abstract */}
        {post.abstract && (
          <p className="text-sm text-[#414752] dark:text-gray-300 line-clamp-3 flex-grow" style={bodyStyle}>
            {post.abstract}
          </p>
        )}

        {/* CTA */}
        {label && (
          <div className="mt-6 pt-4 border-t border-[#c1c6d4] dark:border-white/10 flex justify-between items-center">
            <span
              className="text-sm font-bold text-[#1976D2] dark:text-[#64B5F6] uppercase"
              style={bodyStyle}
            >
              {label}
            </span>
            <Icon icon="ph:arrow-right" className="text-[#1976D2]" />
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
        className="w-12 h-12 flex items-center justify-center rounded-lg border border-[#c1c6d4] dark:border-white/10 text-[#191c1e] dark:text-gray-200 hover:bg-[#eceef0] dark:hover:bg-[#181b23] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
      >
        <Icon icon="ph:caret-left" />
      </button>

      {pageNumbers.map((p, i) =>
        p === '...' ? (
          <span key={`dots-${i}`} className="px-2 text-[#717783] dark:text-gray-400">
            ...
          </span>
        ) : (
          <button
            key={p}
            onClick={() => onPage(p)}
            className={`w-12 h-12 flex items-center justify-center rounded-lg text-sm font-semibold transition-colors ${
              page === p
                ? 'bg-[#1976D2] dark:bg-[#64B5F6] text-white border-none'
                : 'bg-transparent border border-[#c1c6d4] dark:border-white/10 text-[#191c1e] dark:text-gray-200 hover:bg-[#eceef0] dark:hover:bg-[#181b23]'
            }`}
            style={bodyStyle}
          >
            {p}
          </button>
        )
      )}

      <button
        onClick={() => onPage(page + 1)}
        disabled={page === totalPages}
        className="w-12 h-12 flex items-center justify-center rounded-lg border border-[#c1c6d4] dark:border-white/10 text-[#191c1e] dark:text-gray-200 hover:bg-[#eceef0] dark:hover:bg-[#181b23] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
      >
        <Icon icon="ph:caret-right" />
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
    <div className="min-h-screen bg-[#f7f9fb] transition-colors duration-300 dark:bg-[#0d0f14]">
      <NewsArchiveHero
        data={data}
        allTags={allTags}
        activeTag={activeTag}
        onTagChange={handleTagChange}
        filteredCount={filtered.length}
      />

      <main
        className="max-w-[1280px] mx-auto px-5 md:px-12 pb-12 md:pb-20 pt-2"
        style={bodyStyle}
      >
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
            <p className="text-center text-[#717783] dark:text-gray-400 py-20 text-lg" style={bodyStyle}>
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