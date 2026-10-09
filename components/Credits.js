import React from 'react'
import { FaGlobe, FaHeart } from 'react-icons/fa'

const Credits = () => {
  return (
    <div className='flex flex-col items-center p-8 bg-ink rounded-2xl shadow-sm border border-white/10'>
      <p className='text-center text-white/85 font-serif text-lg mb-6'>
        Questo sito è stato realizzato dagli allievi informatici della SFP don
        Bosco di San Donà di Piave.
      </p>
      <div className='flex flex-col lg:flex-row lg:space-x-12 lg:mt-4'>
        <a
          href='https://www.donboscosandona.it'
          target='_blank'
          rel='noopener noreferrer'
          className='flex flex-col items-center'
        >
          <img
            src='/images/SFP-DON-BOSCO-SAN-DONA-BIANCO.png'
            alt='Logo SFP'
            className='h-16 mb-2 transition-transform duration-500 ease-in-out hover:rotate-3 rounded-lg border border-white/40 p-2 transform hover:scale-110 hover:shadow-lg'
          />
          <span className='text-white text-sm flex items-center font-medium'>
            <FaGlobe className='mr-1 text-ochre' /> Sito Ufficiale
          </span>
        </a>
        <div className='lg:border-l border-white/15 h-4 lg:h-20 lg:mx-4' />
        <a
          href='https://www.9dreams.it'
          target='_blank'
          rel='noopener noreferrer'
          className='flex flex-col items-center'
        >
          <img
            src='/images/logo9dreams.png'
            alt='Logo 9dreams'
            className='h-16 mb-2 transition-transform duration-500 ease-in-out hover:rotate-3 rounded-lg border border-white/40 p-2 transform hover:scale-110 hover:shadow-lg'
          />
          <span className='text-white text-sm flex items-center font-medium'>
            <FaHeart className='mr-1 text-ochre' /> 9dreams
          </span>
        </a>
      </div>
    </div>
  )
}

export default Credits
