import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import Head from 'next/head'
import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero'
import Products from '/components/Products'
import Paragraph from '/components/Paragraph'

export default function Home() {
  return (
    <Layout>
      <Head />
      <LandingHero
        opacity={0.5}
        siteName='CFP DON BOSCO'
        title='CONTATTI'
        description='Numeri utili e indirizzi email di riferimento'
        imageUrl='https://techprincess.it/wp-content/uploads/2021/05/penna-come-e%CC%80-cambiata.jpg'
      />

      <Paragraph
        title='SFP DON BOSCO'
        subtitle='Scuola della Formazione Professionale'
      >
        via XIII Martiri, 86
        <br />
        30027 San Donà di Piave (VE)
        <br />
        Centralino: 0421 338 980 - Fax: 0421 188 2664
        <br />
        Orario della segreteria:
        <br />
        <ul>
          <li>
            MATTINO: dal lunedì al venerdì dalle 8:00 alle 13:00; il sabato
            dalle 8:00 alle 11:00
          </li>
          <li>POMERIGGIO: dal lunedì al venerdì dalle 15:00 alle 17:00</li>
          <br />
          <li>
            Informazioni generali: info@donboscosandona.it - tel. 0421 338 980
          </li>
          <li>
            Segreteria didattica: segreteria.fp.sandona@salesianinordest.it - tel. 0421 338
            980
          </li>
          <li>Posta elettronica certificata: cfp.sandona@pec.it</li>
          <li>
            Informazioni relative alla privacy: privacy@donboscosandona.it
          </li>
          <li>
            Organismo di vigilanza (codice etico):
            odv.rebesco@salesianinordest.it
          </li>
          <li>
            Amministrazione: n.caramaschi@donboscosandona.it - tel. 0421 338 988
          </li>
          <li>
            Risorse umane e qualità: a.maschio@donboscosandona.it - tel. 0421 338 988
          </li>
          <br />
          <li>
            Direttore Generale: don Nicola Munari - direzione@donboscosandona.it
          </li>
          <li>
            Direttore della Scuola: dott. Alessandro Cappelletto -
            direzione.fp.sandona@salesianinordest.it
          </li>
          <li>
            Vicedirettore: Alessandro Ferro - a.ferro@donboscosandona.it - tel.
            0421 338 968
          </li>
          <li>
            Responsabile stage e tirocini formativi: Francesco Cicogna -
            f.cicogna@donboscosandona.it - tel. 0421 338 992
          </li>
          <br />
          <li>
            Sostegno/orientamento in entrata: Andrea Pasqualetto -
            a.pasqualetto@donboscosandona.it - tel. 0421 338 992
          </li>
          <li>
            Orientamento in uscita: Martina Dianese -
            m.dianese@donboscosandona.it - tel. 0421 338 971
          </li>
          <li>
            Servizi al lavoro: Martina Dianese - m.dianese@donboscosandona.it -
            tel. 0421 338 971
          </li>
          <li>
            Corsi per adulti: Francesco Cicogna - f.cicogna@donboscosandona.it -
            tel. 0421 338 969
          </li>
          <li>
            Pastorale: Daniele Zanutto - d.zanutto@donboscosandona.it - tel.
            0421 338 983
          </li>
          <li>
            Settore Elettrico/Energia: Diego Cuzzolin -
            d.cuzzolin@donboscosandona.it - tel. 0421 338 991
          </li>
          <li>
            Settore Informatico: Andrea Ros - a.ros@donboscosandona.it- tel.
            0421 338 987
          </li>
          <li>
            Settore Meccanico: Ivan Muccignatto -
            i.muccignatto@donboscosandona.it - tel. 0421 338 986
          </li>
          <li>
            Settore Motoristico/Carrozzeria: Roberto Partata -
            r.partata@donboscosandona.it - tel. 0421 338 985
          </li>
        </ul>
        <br />
        Per i colloqui con gli insegnanti utilizzare il servizio di prenotazione
        disponibile su <Link>ScuolaOnline</Link>
        <br />
        <br />
        Per colloqui con il Direttore o il Vicedirettore prendere appuntamento
        in segreteria.
      </Paragraph>
    </Layout>
  )
}
