import React from 'react'
import { Icon } from '@iconify/react'

export default function InfoBanner({ message }) {
  if (!message) return null

  return (
    <div className="w-full bg-[#1976D2]/5 dark:bg-[#1976D2]/10 border-y border-[#1976D2]/20">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-2.5 flex items-center justify-center gap-2 text-center">
        <Icon
          icon="ph:info"
          className="text-[#1976D2] dark:text-[#64B5F6] flex-shrink-0"
          width={18}
        />
        <p
          className="text-xs md:text-sm text-gray-700 dark:text-gray-200"
          style={{ fontFamily: '"Exo 2", sans-serif' }}
        >
          {message}
        </p>
      </div>
    </div>
  )
}
