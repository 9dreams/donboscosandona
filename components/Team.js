import { useState } from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'

function MemberAvatar({ imageUrl, name }) {
  const [broken, setBroken] = useState(false)
  const showImage = Boolean(imageUrl) && !broken

  return (
    <div
      className="w-28 h-28 rounded-full bg-brand/15 ring-4 ring-brand/10 flex items-center justify-center mb-4 shrink-0 overflow-hidden"
      role="img"
      aria-label={name || undefined}
    >
      {showImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imageUrl}
          alt={name || ''}
          className="w-full h-full object-cover"
          onError={() => setBroken(true)}
        />
      ) : (
        <Icon icon="ph:user" className="text-5xl text-brand" aria-hidden />
      )}
    </div>
  )
}

export default function Team({ members, cardWidth, title, description, maxWidth }) {
  const lgCols = { 12: 1, 6: 2, 4: 3, 3: 4 }[cardWidth] || 3

  return (
    <div
      className="mx-auto px-4 md:px-8 mt-12 mb-20"
      style={{ maxWidth: maxWidth === 'lg' ? '1200px' : '100%' }}
    >
      {(title || description) && (
        <div className="text-center mb-10">
          {title && (
            <h2 className="title-display text-4xl md:text-5xl mb-3">
              {title}
            </h2>
          )}
          {description && (
            <p className="mx-auto max-w-[62ch] font-serif text-xl leading-relaxed text-muted">{description}</p>
          )}
        </div>
      )}

      <div
        className="team-grid grid grid-cols-1 sm:grid-cols-2 gap-5"
        style={{ ['--team-cols']: String(lgCols) }}
      >
        {members.map((member, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center w-full rounded-2xl bg-surface border border-line shadow-sm p-6"
          >
            <MemberAvatar imageUrl={member.imageUrl} name={member.name} />
            {member.name && (
              <h3 className="text-lg font-bold mb-1 text-fg">
                {member.name}
              </h3>
            )}
            {member.role && (
              <p className="text-xs font-bold uppercase tracking-widest text-brand mb-3 leading-relaxed px-2">
                {member.role}
              </p>
            )}
            {member.description && (
              <p className="text-sm text-muted">{member.description}</p>
            )}
            {member.description1 && (
              <p className="text-sm text-muted">{member.description1}</p>
            )}
            <div className="flex flex-wrap justify-center gap-2 mt-2">
              {member.phone && (
                <a
                  href={`tel:${String(member.phone).replace(/\s/g, '')}`}
                  className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-brand/8 dark:bg-brand/15 text-brand! no-underline! hover:bg-brand/15 font-semibold"
                >
                  <Icon icon="ph:phone" className="text-sm" />
                  {member.phone}
                </a>
              )}
              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-brand/8 dark:bg-brand/15 text-brand! no-underline! hover:bg-brand/15 font-semibold"
                >
                  <Icon icon="ph:envelope" className="text-sm" />
                  {member.email}
                </a>
              )}
              {member.linkedinUrl && (
                <Link href={member.linkedinUrl} className="mt-2 text-[#0077b5]">
                  <Icon icon="ph:linkedin-logo" className="text-2xl" />
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @media (min-width: 1024px) {
          .team-grid {
            grid-template-columns: repeat(var(--team-cols), minmax(0, 1fr));
          }
        }
      `}</style>
    </div>
  )
}

Team.defaultProps = {
  maxWidth: 'lg',
}
