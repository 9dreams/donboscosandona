import { useState } from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'

function MemberAvatar({ imageUrl, name }) {
  const [broken, setBroken] = useState(false)
  const showImage = Boolean(imageUrl) && !broken

  return (
    <div
      className="w-28 h-28 rounded-full bg-gray-200 dark:bg-white/15 shadow-md flex items-center justify-center mb-4 shrink-0 overflow-hidden"
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
        <Icon icon="ph:user" className="text-5xl text-white" aria-hidden />
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--fg)] uppercase tracking-wide">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-[var(--fg-secondary)]">{description}</p>
          )}
        </div>
      )}

      <div
        className="team-grid grid grid-cols-1 sm:grid-cols-2 gap-10 justify-items-center"
        style={{ ['--team-cols']: String(lgCols) }}
      >
        {members.map((member, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center w-full max-w-sm"
          >
            <MemberAvatar imageUrl={member.imageUrl} name={member.name} />
            {member.name && (
              <h3 className="text-lg font-bold mb-1 text-[var(--fg)] uppercase tracking-wide">
                {member.name}
              </h3>
            )}
            {member.role && (
              <p className="text-sm text-[var(--fg)] mb-3 leading-relaxed px-2">
                {member.role}
              </p>
            )}
            {member.description && (
              <p className="text-sm text-[var(--fg-secondary)]">{member.description}</p>
            )}
            {member.description1 && (
              <p className="text-sm text-[var(--fg-secondary)]">{member.description1}</p>
            )}
            <div className="flex flex-wrap justify-center gap-2 mt-2">
              {member.phone && (
                <a
                  href={`tel:${String(member.phone).replace(/\s/g, '')}`}
                  className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-gray-100 dark:bg-white/10 text-[var(--fg)] hover:text-[var(--fg)] no-underline"
                >
                  <Icon icon="ph:phone" className="text-sm opacity-70" />
                  {member.phone}
                </a>
              )}
              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-gray-100 dark:bg-white/10 text-[var(--fg)] hover:text-[var(--fg)] no-underline"
                >
                  <Icon icon="ph:envelope" className="text-sm opacity-70" />
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
