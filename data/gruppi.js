// Gruppi e attività dell'Oratorio: una sola fonte per i banner della home
// (components/GruppiOratorio.jsx) e per le pagine dei gruppi.
// I colori sono quelli dei banner del vecchio sito, scuriti dove serviva
// per leggere bene il testo bianco.

export const famiglie = [
  { id: 'crescere', titolo: 'Crescere insieme' },
  { id: 'arte', titolo: 'Arte e tradizione' },
  { id: 'comunita', titolo: 'Comunità e missione' },
]

export const gruppi = [
  { slug: 'ads', nome: 'ADS', sottotitolo: 'KeyBoys, Generazioni Nuove, Nuove Frontiere', colore: '#8B1A1A', icona: 'ph:user-circle', url: '/ads', famiglia: 'crescere' },
  { slug: 'scout', nome: 'Scout', sottotitolo: 'Lupetti, Esploratori e Guide, Rover e Scolte', colore: '#6A2A9C', icona: 'ph:campfire', url: '/scout', famiglia: 'crescere' },
  { slug: 'calcio', nome: 'Calcio', sottotitolo: 'Dal 1963 il calcio in oratorio', colore: '#2F6A12', icona: 'ph:soccer-ball', url: '/calcio', famiglia: 'crescere' },
  { slug: 'dlc', nome: 'Dopo la Campanella', sottotitolo: 'Doposcuola e gruppi di studio', colore: '#006B4E', icona: 'ph:bell', url: '/dlc', famiglia: 'crescere' },
  { slug: 'banda', nome: 'Banda', sottotitolo: 'Dal 1932 la banda dell’Oratorio', colore: '#866000', icona: 'ph:music-notes', url: '/banda', famiglia: 'arte' },
  { slug: 'resto', nome: 'Il Resto d’Israele', sottotitolo: 'La compagnia teatrale dell’Oratorio', colore: '#4A4E0E', icona: 'ph:mask-happy', url: '/resto', famiglia: 'arte' },
  { slug: 'presepe', nome: 'Amici del presepe', sottotitolo: 'Il laboratorio del presepe in Oratorio', colore: '#5A2E0E', icona: 'ph:star', url: '/presepe', famiglia: 'arte' },
  { slug: 'cinema', nome: 'Cinema', sottotitolo: 'La programmazione del Cinema Teatro Don Bosco', colore: '#24222C', icona: 'ph:film-reel', url: 'https://cinema.donboscosandona.it', famiglia: 'arte' },
  { slug: 'caio', nome: 'CAIO', sottotitolo: 'Comunità Adulti In Oratorio', colore: '#A80E58', icona: 'ph:users-three', url: '/caio', famiglia: 'comunita' },
  { slug: 'cooperatori', nome: 'Cooperatori', sottotitolo: 'Il terzo ramo della Famiglia Salesiana', colore: '#0B5CAD', icona: 'ph:heart', url: '/cooperatori', famiglia: 'comunita' },
  { slug: 'missioni', nome: 'DIM.MI.', sottotitolo: 'Dimensione Missionaria', colore: '#A65100', icona: 'ph:globe-hemisphere-west', url: '/missioni', famiglia: 'comunita' },
  { slug: 'cl', nome: 'Comunione e Liberazione', sottotitolo: 'Il carisma di don Giussani in Oratorio', colore: '#4A0E0E', icona: 'ph:cross', url: '/cl', famiglia: 'comunita' },
]

export function getGruppo(slug) {
  return gruppi.find((g) => g.slug === slug)
}
