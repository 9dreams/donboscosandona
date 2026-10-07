// Documenti istituzionali (Modello Organizzativo, informative privacy, ecc.)
// ospitati nel sito in public/docs/istituzionali/ anziché sul CMS.
// La chiave è l'id del post sul CMS (channels.donboscosandona.it) che il
// documento locale sostituisce: titolo e allegato del post vengono sovrascritti.
// Per una nuova versione: copiare il PDF nella cartella e aggiornare qui il percorso.
const documenti = {
  394: {
    titolo: 'Modello Organizzativo (Rev.2 del 31/08/2026)',
    allegato: '/docs/istituzionali/MOG_Rev2_2026-08-31.pdf',
  },
  408: {
    allegato: '/docs/istituzionali/Informativa_privacy_scuola.pdf',
  },
  406: {
    allegato: '/docs/istituzionali/Informativa_privacy_aziende_tirocini.pdf',
  },
}

export function conDocumentiLocali(posts) {
  if (!Array.isArray(posts)) return posts
  return posts.map((post) => (documenti[post.id] ? { ...post, ...documenti[post.id] } : post))
}

export default documenti
