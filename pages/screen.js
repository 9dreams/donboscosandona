import React, { useState, useEffect } from 'react'

import { NocturnalHeroScreen } from '/components'
import { stripTag, fromOtherSite, mergeByDate } from '/lib/posts'

// Post dell'oratorio e del monastero di Marango, in ordine di pubblicazione
// decrescente (come nelle news della home). Se il canale del monastero non
// risponde si mostrano solo i post dell'oratorio.
async function loadPosts() {
  const res = await fetch(
    'https://channels.donboscosandona.it/api/posts/inoratorio'
  )
  if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
  const posts = await res.json()
  if (!Array.isArray(posts)) return posts

  let marango = []
  try {
    const res_marango = await fetch(
      'https://channels.donboscosandona.it/api/posts/monasteromarango'
    )
    marango = fromOtherSite(await res_marango.json(), {
      baseUrl: 'https://www.monasteromarango.it',
      articlePath: '/notizie',
      logo: { src: '/images/marango.png', alt: 'Monastero di Marango' },
    })
  } catch (e) {
    console.error('Canale monasteromarango non raggiungibile:', e)
  }
  return mergeByDate(posts, marango)
}

export default function Schermo({data0}) {
  const [data, setData] = useState(data0)

  // rilegge i dati dal backend dopo l'intervallo di tempo specificato
  useEffect(() => {
    const interval = setInterval(() => {
      const fetchData = async () => {
        setData(await loadPosts())
      }

      fetchData().catch((e) => {
        // handle the error as needed
        console.error('An error occurred while fetching the data: ', e)
      })
    }, 600000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      style={{ backgroundColor: 'black', height: '100vh', cursor: 'none' }}
    >
      { data && (
      <NocturnalHeroScreen
        data={data.map((post) => ({
          ...post,
          in_evidenza: true,
          titolo: post.immagine_schermo ? '' : post.titolo,
          abstract: post.immagine_schermo ? '' : post.abstract,
          immagine: post.immagine_schermo || post.immagine,
          immagine_mobile: null,
          tag: post.immagine_schermo ? '' : stripTag(post.tag, 'screen'),
          logo_sito: post.immagine_schermo ? null : post.logo_sito || null,
          articolo: '',
          link: '',
          allegato: null,
        }))}
        height={100}
        limit={10}
        animation='fade'
        interval={12000}
        duration={0}
        defaultTag=''
        captionMode='screen'
        hideButton={true}
      />
      )}
    </div>
  )
}

export async function getStaticProps() {
  const data0 = await loadPosts()

  return {
    props: { data0 },
    revalidate: 1200, // In secondi: il build viene fatto al massimo una volta ogni dieci minuti
  }
}
