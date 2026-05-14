import React from 'react'

/** @param {string} s */
function norm(s) {
  return (s || '').toLowerCase().trim()
}

/**
 * @param {{ title?: string, url?: string, platform?: string }} social
 * @returns {'facebook'|'instagram'|'youtube'|'linkedin'|'tiktok'|null}
 */
export function resolveSocialPlatform(social) {
  const p = norm(social.platform)
  if (['facebook', 'instagram', 'youtube', 'linkedin', 'tiktok'].includes(p)) return p

  const t = norm(social.title)
  const u = norm(social.url)

  if (t.includes('facebook') || u.includes('facebook.com')) return 'facebook'
  if (t.includes('instagram') || u.includes('instagram.com')) return 'instagram'
  if (t.includes('youtube') || u.includes('youtube.com') || u.includes('youtu.be')) return 'youtube'
  if (t.includes('linkedin') || u.includes('linkedin.com')) return 'linkedin'
  if (t.includes('tiktok') || u.includes('tiktok.com')) return 'tiktok'

  return null
}

const svgProps = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'currentColor',
  xmlns: 'http://www.w3.org/2000/svg',
  'aria-hidden': true,
}

function FacebookGlyph() {
  return (
    <svg {...svgProps}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.086 0 2.223.195 2.223.195v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function InstagramGlyph() {
  return (
    <svg {...svgProps}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  )
}

function YouTubeGlyph() {
  return (
    <svg {...svgProps}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

function LinkedInGlyph() {
  return (
    <svg {...svgProps}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function TikTokGlyph() {
  return (
    <svg {...svgProps}>
      <path d="M12.525.02c1.31-.02 2.61-.01 3.931-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-2.98.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.63.06-3.27.07-4.91.05-1.44.08-2.89.08-4.34.02-.89.02-1.78.02-2.67z" />
    </svg>
  )
}

function LinkGlyph() {
  return (
    <svg {...svgProps} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  )
}

/**
 * Icona social coerente (SVG locale, nessun hotlink esterno).
 * @param {{ social: { title?: string, url?: string, platform?: string, imageUrl?: string }, className?: string }} props
 */
export function FooterSocialIcon({ social, className = '' }) {
  const platform = resolveSocialPlatform(social)

  let glyph
  switch (platform) {
    case 'facebook':
      glyph = <FacebookGlyph />
      break
    case 'instagram':
      glyph = <InstagramGlyph />
      break
    case 'youtube':
      glyph = <YouTubeGlyph />
      break
    case 'linkedin':
      glyph = <LinkedInGlyph />
      break
    case 'tiktok':
      glyph = <TikTokGlyph />
      break
    default:
      if (social.imageUrl) {
        return (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={social.imageUrl}
            alt={social.title || ''}
            width={20}
            height={20}
            className={className}
            style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
          />
        )
      }
      glyph = <LinkGlyph />
  }

  return (
    <span className={`inline-flex text-white ${className}`} style={{ lineHeight: 0 }}>
      {glyph}
    </span>
  )
}
