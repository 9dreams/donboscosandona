import React, { useState, useMemo, useRef, useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'

import NewsArchiveHero from './NewsArchiveHero'

const ITEMS_PER_PAGE = 12

// Il primo tag è l'etichetta ocra, il secondo una pillola blu notte.
const TAG_CLASSES = ['bg-ochre text-ink', 'bg-ink/85 text-white']

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
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-sm transition-shadow duration-300 hover:shadow-md">
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
                className={`rounded-md px-2.5 py-1 text-[11px] font-bold uppercase tracking-widest ${TAG_CLASSES[i % TAG_CLASSES.length]}`}
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
          <Icon icon="ph:calendar-blank" className="text-base text-brand" />
          <span className="text-xs font-bold uppercase tracking-wider text-muted">
            {post.pubblicazione}
          </span>
        </div>

        {/* Title */}
        {post.titolo && (
          <h3 className="mb-3 text-xl font-bold leading-snug tracking-tight text-fg transition-colors group-hover:text-brand">
            {post.titolo}
          </h3>
        )}

        {/* Abstract */}
        {post.abstract && (
          <p className="flex-grow font-serif text-[17px] leading-relaxed text-muted line-clamp-3">
            {post.abstract}
          </p>
        )}

        {/* CTA */}
        {label && (
          <div className="mt-6 flex items-center justify-between border-t border-line pt-4">
            <span className="text-sm font-bold text-brand">{label}</span>
            <Icon icon="ph:arrow-right" className="text-brand transition-transform group-hover:translate-x-1" />
          </div>
        )}
      </div>
    </article>
  )

  if (!href) return <div className="h-full">{inner}</div>
  return (
    <Link href={href} className="block h-full no-underline!">
      {inner}
    </Link>
  )
}

function PaginationBar({ page, totalPages, pageNumbers, onPage }) {
  if (totalPages <= 1) return null
  return (
    <nav aria-label="Pagine" className="flex flex-wrap justify-center items-center gap-2">
      <button
        aria-label="Pagina precedente"
        onClick={() => onPage(page - 1)}
        disabled={page === 1}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-fg transition-colors hover:border-brand hover:text-brand disabled:cursor-not-allowed disabled:opacity-40"
      >
        <Icon icon="ph:caret-left" />
      </button>

      {pageNumbers.map((p, i) =>
        p === '...' ? (
          <span key={`dots-${i}`} className="px-2 text-muted">
            ...
          </span>
        ) : (
          <button
            key={p}
            onClick={() => onPage(p)}
            aria-current={page === p ? 'page' : undefined}
            className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold transition-colors ${
              page === p
                ? 'bg-brand text-white dark:text-[#0d0f14]'
                : 'border border-line bg-surface text-fg hover:border-brand hover:text-brand'
            }`}
          >
            {p}
          </button>
        )
      )}

      <button
        aria-label="Pagina successiva"
        onClick={() => onPage(page + 1)}
        disabled={page === totalPages}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-fg transition-colors hover:border-brand hover:text-brand disabled:cursor-not-allowed disabled:opacity-40"
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
    <div className="min-h-screen bg-page transition-colors duration-300">
      <NewsArchiveHero
        data={data}
        allTags={allTags}
        activeTag={activeTag}
        onTagChange={handleTagChange}
        filteredCount={filtered.length}
      />

      <div className="max-w-[1200px] mx-auto px-4 md:px-8 pb-16 md:pb-24 pt-2">
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
        <div ref={gridRef} className="scroll-mt-28">
          {paged.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paged.map((post) => (
                <NewsCard key={post.id} post={post} hiddenTagList={hiddenTagList} />
              ))}
            </div>
          ) : (
            <p className="rounded-2xl border border-line bg-surface px-6 py-16 text-center font-serif text-lg text-muted shadow-sm">
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
      </div>
    </div>
  )
}