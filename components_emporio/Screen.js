import React, { useState, useEffect } from 'react'

import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Head from 'next/head'

import { Featured } from '/components'

const theme = createTheme()

export default function Schermo({data0}) {
  const [data, setData] = useState(data0)

  useEffect(() => {
    const interval = setInterval(() => {
      const fetchData = async () => {
        const response = await fetch('https://channels.donboscosandona.it/api/posts/inoratorio')
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const result = await response.json()
        setData(result)
      }

      fetchData().catch((e) => {
        console.error('An error occurred while fetching the data: ', e)
      })
    }, 600000)

    return () => clearInterval(interval)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div
        className="bg-black h-screen cursor-none" 
      >
        {data && (
          <Featured
            data={data.map((post) => ({
              ...post,
              in_evidenza: true,
              titolo: post.immagine_schermo ? '' : post.titolo,
              abstract: post.immagine_schermo ? '' : post.abstract,
              immagine: post.immagine_schermo || post.immagine,
              tag: post.immagine_schermo ? '' : post.tag,
              articolo: '',
              link: '',
              allegato: null,
            }))}
            height='100'
            limit={10}
            animation='fade'
            interval={12000}
            duration={0}
            defaultTag=''
          />
        )}
      </div>
    </ThemeProvider>
  )
}

export async function getStaticProps() {
  const res = await fetch(
    'https://channels.donboscosandona.it/api/posts/inoratorio'
  )
  const data0 = await res.json()

  return {
    props: { data0 },
    revalidate: 1200, 
  }
}
