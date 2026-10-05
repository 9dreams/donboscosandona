// Utility per filtrare i post ricevuti dal canale news di
// channels.donboscosandona.it in base ai tag.

export function hasTag(post, tag) {
  if (!post?.tag) return false
  return post.tag
    .split(',')
    .map((t) => t.trim().toLowerCase())
    .includes(tag.toLowerCase())
}

// Esclude i post che contengono il tag indicato (case-insensitive).
// Se `posts` non è un array (es. { status: '404' }), lo restituisce inalterato.
export function excludeTag(posts, tag) {
  if (!Array.isArray(posts)) return posts
  return posts.filter((post) => !hasTag(post, tag))
}

// Rimuove un singolo tag (case-insensitive) da una stringa di tag
// separati da virgola, mantenendo gli altri. Utile per non mostrare
// nel render un tag "tecnico" usato solo per filtrare i contenuti.
export function stripTag(tagString, tag) {
  if (!tagString) return tagString
  return tagString
    .split(',')
    .map((t) => t.trim())
    .filter((t) => t && t.toLowerCase() !== tag.toLowerCase())
    .join(',')
}

// Prepara i post di un altro canale per mostrarli accanto a quelli
// dell'oratorio: i link agli articoli puntano al sito di origine
// (`baseUrl` + `articlePath`), `logo` ({ src, alt }) viene mostrato al posto
// del primo tag e i post non sono mai "in evidenza" (non devono finire
// nell'hero della home).
export function fromOtherSite(posts, { baseUrl, articlePath, logo }) {
  if (!Array.isArray(posts)) return []
  return posts.map((post) => ({
    ...post,
    in_evidenza: false,
    url_articolo: `${baseUrl}${articlePath}/${post.id}`,
    logo_sito: logo,
  }))
}

// Unisce più elenchi di post in ordine di pubblicazione decrescente.
// Gli elenchi che non sono array (es. { status: '404' }) vengono ignorati.
export function mergeByDate(...lists) {
  return lists
    .filter(Array.isArray)
    .flat()
    .sort(
      (a, b) =>
        new Date(b.pubblicazione_iso || b.created_at) -
        new Date(a.pubblicazione_iso || a.created_at)
    )
}
