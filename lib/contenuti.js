// Contenuti fissi importati dal vecchio sito (cartella /contenuti):
// markdown con frontmatter, convertito in HTML con remark.
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const radice = path.join(process.cwd(), 'contenuti')

// gray-matter trasforma le date YAML in oggetti Date, che getStaticProps non
// sa serializzare: le riportiamo a stringhe ISO (AAAA-MM-GG).
function normalizza(dati) {
  return Object.fromEntries(
    Object.entries(dati).map(([k, v]) => [k, v instanceof Date ? v.toISOString().slice(0, 10) : v])
  )
}

export async function markdownInHtml(testo) {
  const risultato = await remark().use(html, { sanitize: false }).process(testo)
  return risultato.toString()
}

// Un file markdown: { ...frontmatter, html }
export async function leggiPagina(percorso) {
  const sorgente = fs.readFileSync(path.join(radice, `${percorso}.md`), 'utf8')
  const { data, content } = matter(sorgente)
  return { ...normalizza(data), html: await markdownInHtml(content) }
}

// Solo il frontmatter dei file di una cartella (per gli elenchi).
export function elencoPagine(cartella) {
  const dir = path.join(radice, cartella)
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => {
      const { data } = matter(fs.readFileSync(path.join(dir, f), 'utf8'))
      return { slug: f.replace(/\.md$/, ''), ...normalizza(data) }
    })
}
