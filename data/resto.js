// Il Resto d'Israele, la compagnia teatrale dell'Oratorio.
// PAGINA IN COSTRUZIONE: tutti i testi tra [parentesi quadre] e le schede
// degli spettacoli sono contenuti di prova, da sostituire con quelli veri.
// Le foto sono quelle del vecchio sito (archive.inoratorio.it/resto).

export const compagnia = {
  presentazione:
    '[Testo di presentazione di prova] Un gruppo di giovani e adulti che ogni anno porta in scena, sul palco del Cinema Teatro Don Bosco, uno spettacolo nato in cortile: testi, musiche, coreografie e luci costruiti insieme, sera dopo sera.',
  chiSiamo: [
    '[Testo di prova] Il nome viene dalla Bibbia: il «resto» è il piccolo gruppo fedele da cui ogni volta tutto ricomincia. Così la compagnia: pochi all’inizio, poi sempre di più, ragazzi e famiglie che scoprono il palco come luogo dove crescere insieme.',
    '[Testo di prova] Ogni spettacolo nasce da un tema scelto insieme e diventa un percorso di un anno: laboratori di recitazione, prove di canto e ballo, scenografie costruite a mano.',
  ],
  numeri: [
    { etichetta: 'In scena dal', valore: '[anno]' },
    { etichetta: 'Spettacoli', valore: '[N]' },
    { etichetta: 'Sul palco', valore: '[N] attori' },
    { etichetta: 'Dove', valore: 'Cinema Teatro Don Bosco', piccolo: true },
  ],
  invito: '[Testo di prova] Attori, ballerini, tecnici luci e audio, sarte, scenografi: in compagnia c’è posto per tutti.',
  email: '[email]',
}

// Cast e staff di prova, uguali per ogni scheda finché non arrivano quelli veri.
const castDiProva = [
  { ruolo: '[Personaggio principale]', nome: '[Nome Cognome]' },
  { ruolo: '[Personaggio]', nome: '[Nome Cognome]' },
  { ruolo: '[Personaggio]', nome: '[Nome Cognome]' },
  { ruolo: '[Personaggio]', nome: '[Nome Cognome]' },
  { ruolo: 'Il narratore', nome: '[Nome Cognome]' },
  { ruolo: 'Coro', nome: '[Nomi del coro]' },
  { ruolo: 'Corpo di ballo', nome: '[Nomi]' },
]

const staffDiProva = [
  { ruolo: 'Regia', nomi: '[Nome Cognome]' },
  { ruolo: 'Aiuto regia', nomi: '[Nome Cognome]' },
  { ruolo: 'Testi', nomi: '[Nome Cognome]' },
  { ruolo: 'Coreografie', nomi: '[Nome Cognome]' },
  { ruolo: 'Direzione musicale', nomi: '[Nome Cognome]' },
  { ruolo: 'Luci', nomi: '[Nome Cognome]' },
  { ruolo: 'Audio', nomi: '[Nome Cognome]' },
  { ruolo: 'Scenografie', nomi: '[Nome Cognome]' },
  { ruolo: 'Costumi', nomi: '[Nome Cognome]' },
  { ruolo: 'Trucco', nomi: '[Nome Cognome]' },
]

const descrizioneDiProva = [
  '[Descrizione completa di prova] Qui andrà la trama dello spettacolo: i personaggi, l’ambientazione, il conflitto da cui parte la storia e il modo in cui la compagnia ha scelto di raccontarla.',
  '[Testo di prova] Un secondo paragrafo può raccontare come è nato lo spettacolo: il tema dell’anno, i laboratori, le prove, le scelte di regia, musiche e coreografie.',
  '[Testo di prova] Durata, numero di repliche, eventuali serate speciali o destinatari delle offerte raccolte.',
]

function scheda({ slug, titolo, titoloAccento, anno, data, occasione, tema, foto, posizione = 'center', frase, galleria }) {
  return {
    slug,
    titolo,
    titoloAccento: titoloAccento || null,
    anno,
    data,
    luogo: 'Cinema Teatro Don Bosco',
    occasione: occasione || null,
    tema,
    foto,
    posizione,
    frase: frase || '[Frase di apertura di prova] Ogni storia comincia da qualcuno che ha avuto il coraggio di raccontarla.',
    descrizione: descrizioneDiProva,
    cast: castDiProva,
    staff: staffDiProva,
    galleria: galleria || [foto, '/images/resto/luci-di-scena.jpg'],
  }
}

// Dal più recente al più vecchio: il primo è lo spettacolo in evidenza.
export const spettacoli = [
  scheda({
    slug: 'cera-una-volta-ce-ci-sara',
    titolo: 'C’era una volta,',
    titoloAccento: 'c’è, ci sarà',
    anno: '2017',
    data: '[giorno mese] 2017',
    occasione: 'Serata della Luce',
    tema: '[tema di prova] La memoria come seme del futuro',
    foto: '/images/resto/cera-una-volta-ce-ci-sara.jpg',
    galleria: ['/images/resto/spettacolo-2016.jpg', '/images/resto/spettacolo-2015.jpg', '/images/resto/luci-di-scena.jpg'],
  }),
  scheda({ slug: 'chiodo-fisso', titolo: 'Chiodo fisso', anno: '[anno]', data: '[data]', tema: '[tema di prova]', foto: '/images/resto/chiodo-fisso.jpg' }),
  scheda({ slug: 'spettacolo-2016', titolo: '[Titolo dello spettacolo]', anno: '2016', data: '[data] 2016', tema: '[tema di prova]', foto: '/images/resto/spettacolo-2016.jpg', posizione: '70% center' }),
  scheda({ slug: 'spettacolo-2015', titolo: '[Titolo dello spettacolo]', anno: '2015', data: '[data] 2015', tema: '[tema di prova]', foto: '/images/resto/spettacolo-2015.jpg', posizione: '70% center' }),
  scheda({ slug: 'spettacolo-2014', titolo: '[Titolo dello spettacolo]', anno: '2014', data: '[data] 2014', tema: '[tema di prova]', foto: '/images/resto/spettacolo-2014.jpg', posizione: '70% center' }),
  scheda({ slug: 'spettacolo-2013', titolo: '[Titolo dello spettacolo]', anno: '2013', data: '[data] 2013', tema: '[tema di prova]', foto: '/images/resto/spettacolo-2013.jpg', posizione: '70% center' }),
  scheda({ slug: 'spettacolo-2012', titolo: '[Titolo dello spettacolo]', anno: '2012', data: '[data] 2012', tema: '[tema di prova]', foto: '/images/resto/spettacolo-2012.jpg', posizione: '70% center' }),
  scheda({ slug: 'spettacolo-2011', titolo: '[Titolo dello spettacolo]', anno: '2011', data: '[data] 2011', tema: '[tema di prova]', foto: '/images/resto/spettacolo-2011.jpg', posizione: '70% center' }),
]

export function titoloCompleto(s) {
  return s.titoloAccento ? `${s.titolo} ${s.titoloAccento}` : s.titolo
}
