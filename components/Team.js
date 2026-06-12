import Link from 'next/link'
import { Icon } from '@iconify/react'

export default function Team({ members, cardWidth, title, description, maxWidth }) {
  const lgCols = cardWidth ? Math.round(12 / cardWidth) : 3

  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-8 mt-12 mb-20" style={{ maxWidth: maxWidth === 'lg' ? '1200px' : '100%' }}>
      {(title || description) && (
        <div className="text-center mb-8">
          {title && <h2 className="text-3xl font-bold mb-4">{title}</h2>}
          {description && <p className="text-gray-600 dark:text-gray-300">{description}</p>}
        </div>
      )}
      <div className={`grid grid-cols-1 lg:grid-cols-${lgCols} gap-8`}>
        {members.map((member, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            {member.imageUrl && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={member.imageUrl}
                alt={member.name || ''}
                className="w-28 h-28 rounded-full object-cover mt-8 mb-4 shadow-xl"
              />
            )}
            {member.name && <h3 className="text-xl font-semibold mb-1">{member.name}</h3>}
            {member.role && <p className="text-sm mb-2">{member.role}</p>}
            {member.description && <p className="text-sm text-gray-500 dark:text-gray-400">{member.description}</p>}
            {member.description1 && <p className="text-sm text-gray-500 dark:text-gray-400">{member.description1}</p>}
            <div className="flex flex-wrap justify-center gap-2 mt-3">
              {member.phone && (
                <span className="inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full border border-gray-200 dark:border-white/20">
                  <Icon icon="ph:phone" /> {member.phone}
                </span>
              )}
              {member.email && (
                <span className="inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full border border-gray-200 dark:border-white/20">
                  <Icon icon="ph:envelope" /> {member.email}
                </span>
              )}
              {member.linkedinUrl && (
                <Link href={member.linkedinUrl} className="mt-2">
                  <Icon icon="ph:linkedin-logo" className="text-2xl text-[#0077b5]" />
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

Team.defaultProps = {
  maxWidth: 'lg',
}
