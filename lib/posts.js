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
