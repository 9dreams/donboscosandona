// Endpoint di on-demand revalidation.
// Uso: GET /api/revalidate?secret=IL_TUO_TOKEN
// Opzionale: ?path=/una-pagina per rigenerare solo quella pagina
// (es. ?path=/articoli/123 per un singolo articolo)

// Pagine statiche che dipendono da dati esterni (CMS, cinema, ecc.)
const DEFAULT_PATHS = [
  '/',
  '/news',
  '/screen',
  '/dlc',
  '/scout',
  '/ads',
]

export default async function handler(req, res) {
  if (req.query.secret !== process.env.REVALIDATE_SECRET) {
    return res.status(401).json({ message: 'Token non valido' })
  }

  const paths = req.query.path ? [req.query.path] : DEFAULT_PATHS

  const results = await Promise.allSettled(
    paths.map((path) => res.revalidate(path))
  )

  const revalidated = []
  const errors = []

  results.forEach((result, i) => {
    if (result.status === 'fulfilled') {
      revalidated.push(paths[i])
    } else {
      errors.push({ path: paths[i], message: result.reason?.message || String(result.reason) })
    }
  })

  return res.status(errors.length > 0 ? 500 : 200).json({
    revalidated,
    errors,
  })
}
