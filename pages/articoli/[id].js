import Head from 'next/head'
import Link from 'next/link'
import { siteBaseUrl } from '/config/default'

import Layout from '/components/Layout'
import SyntheticLightHero from '/components/SyntheticLightHero'

import { getIdArticoli } from '../../lib/articoli'

export default function Show({ data }) {
  if (!data) return <div>Caricamento...</div>

  const tags = data.tag
    ? data.tag.split(',').map((t) => t.trim()).filter(Boolean)
    : []

  return (
    <Layout>
      <Head>
        <title>{data.titolo}</title>
        <meta name='og:url' content={siteBaseUrl + '/articoli/show?id=' + data.id} />
        <meta name='og:type' content='website' />
        <meta name='og:locale' content='it_IT' />
        <meta name='og:title' content={data.titolo} />
        <meta name='og:description' content={data.abstract} />
        <meta property='og:image' content={data.immagine} />
      </Head>

      <SyntheticLightHero
        post={data}
        ctaLabel={
          (data.link && 'Scopri di più') ||
          (data.allegato && "Scarica l'allegato") ||
          null
        }
        ctaHref={data.link || data.allegato || null}
      />

      {/* Article body */}
      <div className="art-page">
        <div className="art-container">

          {/* Meta row */}
          <div className="art-meta">
            {data.pubblicazione && (
              <span className="art-date">
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
                {data.pubblicazione}
              </span>
            )}
            {tags.length > 0 && (
              <div className="art-tags">
                {tags.map((tag) => (
                  <Link key={tag} href={`/news?q=${encodeURIComponent(tag)}`} className="art-tag">
                    {tag}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="art-divider" />

          {/* Content */}
          <div
            className="art-content"
            dangerouslySetInnerHTML={{ __html: data.content }}
          />

          {/* Bottom tags */}
          {tags.length > 0 && (
            <div className="art-bottom-tags">
              <span className="art-label">Argomenti</span>
              <div className="art-tags">
                {tags.map((tag) => (
                  <Link key={tag} href={`/news?q=${encodeURIComponent(tag)}`} className="art-tag">
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700&family=Cormorant+Garamond:wght@500;600;700&display=swap');

        .art-page {
          background: #f7f9fb;
          min-height: 50vh;
          padding: 5rem 1.25rem 6rem;
        }

        .art-container {
          max-width: 800px;
          margin: 0 auto;
        }

        /* Meta row */
        .art-meta {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 1rem 2rem;
          margin-bottom: 2rem;
          font-family: 'Inter Tight', sans-serif;
        }

        .art-date {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: #717783;
        }

        .art-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .art-tag {
          font-family: 'Inter Tight', sans-serif;
          font-size: 0.65rem;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          padding: 0.3rem 0.9rem;
          border-radius: 999px;
          border: 1px solid rgba(25,118,210,0.3);
          color: #1976D2;
          background: rgba(25,118,210,0.07);
          text-decoration: none;
          transition: background 0.2s, border-color 0.2s;
        }

        .art-tag:hover {
          background: rgba(25,118,210,0.14);
          border-color: rgba(25,118,210,0.6);
          color: #1976D2;
        }

        /* Divider */
        .art-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, #1976D2, rgba(25,118,210,.3), transparent);
          margin-bottom: 3rem;
        }

        /* Content */
        .art-content {
          font-family: 'Inter Tight', sans-serif;
          font-size: 1.05rem;
          line-height: 1.9;
          color: #414752;
        }

        .art-content h1,
        .art-content h2,
        .art-content h3,
        .art-content h4 {
          font-family: 'Cormorant Garamond', serif !important;
          font-weight: 600;
          color: #1976D2 !important;
          text-shadow: none !important;
          -webkit-text-fill-color: initial !important;
          -webkit-text-stroke: 0 !important;
          letter-spacing: -0.03em;
          line-height: 1.15;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
        }

        .art-content h2 { font-size: clamp(1.8rem, 4vw, 2.8rem); }
        .art-content h3 { font-size: clamp(1.4rem, 3vw, 2rem); }
        .art-content h4 { font-size: clamp(1.1rem, 2.5vw, 1.5rem); }

        .art-content p {
          margin-bottom: 1.5rem;
          color: #414752;
        }

        .art-content a {
          color: #1976D2;
          text-decoration: underline;
          text-decoration-color: rgba(25,118,210,0.3);
          text-underline-offset: 3px;
          transition: color 0.2s;
        }

        .art-content a:hover {
          color: #FF9800;
        }

        .art-content ul,
        .art-content ol {
          padding-left: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .art-content li {
          margin-bottom: 0.5rem;
          color: #414752;
        }

        .art-content img {
          max-width: 100%;
          border-radius: 1rem;
          margin: 2rem 0;
          border: 1px solid #c1c6d4;
        }

        .art-content blockquote {
          font-family: 'Cormorant Garamond', serif !important;
          font-size: 1.5rem;
          line-height: 1.5;
          color: #353B48;
          border-left: 3px solid #1976D2;
          padding: 0.5rem 0 0.5rem 1.5rem;
          margin: 2rem 0;
          font-style: italic;
        }

        .art-content table {
          width: 100%;
          border-collapse: collapse;
          margin: 2rem 0;
          font-size: 0.9rem;
        }

        .art-content th,
        .art-content td {
          padding: 0.75rem 1rem;
          border: 1px solid #c1c6d4;
          color: #414752;
          font-family: 'Inter Tight', sans-serif !important;
        }

        .art-content th {
          background: #eceef0;
          color: #353B48;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-size: 0.75rem;
        }

        /* Bottom tags */
        .art-bottom-tags {
          margin-top: 4rem;
          padding-top: 2rem;
          border-top: 1px solid #c1c6d4;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 1rem;
        }

        .art-label {
          font-family: 'Inter Tight', sans-serif;
          font-size: 0.65rem;
          text-transform: uppercase;
          letter-spacing: 0.25em;
          color: #717783;
        }
      `}</style>
    </Layout>
  )
}

// This gets called on every request
export async function getStaticProps({ params }) {
  const res = await fetch(
    'https://channels.donboscosandona.it/api/post/' + params.id
  )
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data }, revalidate: 3600 }
}

export async function getStaticPaths() {
  const paths = await getIdArticoli()

  return {
    paths,
    fallback: 'blocking',
  }
}
