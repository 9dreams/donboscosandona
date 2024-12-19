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
        imageUrl='/images/trasparenza/transparency-2.webp'
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
            Segreteria didattica: segreteria.fp.sandona@salesianinordest.it -
            tel. 0421 338 980
          </li>
          <li>
            Posta elettronica certificata:
            fp.donboscosandona@pec.salesianinordest.it
          </li>
          <li>
            Informazioni relative alla privacy: privacy@donboscosandona.it
          </li>
          <li>
            Organismo di vigilanza (codice etico): odv.fp@salesianinordest.it
          </li>
          <li>
            Amministrazione/Risorse umane:
            amministrazione.fp.sandona@salesianinordest.it - tel. 0421 338 988
          </li>
          <li>
            Referente qualità: qualita.fp.sandona@salesianinordest.it - tel.
            0421 338 990
          </li>
          <br />
          <li>
            Direttore Generale: don Nicola Munari - direzione@donboscosandona.it
          </li>
          <li>
            Direttore della Scuola: Alessandro Ferro -
            direzione.fp.sandona@salesianinordest.it
          </li>
          <li>
            Vicedirettrice: Anna Maria D'Ambrosio -
            a.dambrosio@donboscosandona.it
          </li>
          <br />
          <li>
            Sostegno/orientamento in entrata: Andrea Pasqualetto -
            a.pasqualetto@donboscosandona.it - tel. 0421 338 992
          </li>
          <li>
            Orientamento in uscita: Giorgia Seno - g.seno@donboscosandona.it -
            tel. 0421 338 971
          </li>
          <li>
            Ufficio stage e tirocini: Francesco Cicogna -
            f.cicogna@donboscosandona.it - tel. 0421 338 969
            <br />
            &nbsp;&nbsp;&nbsp;Greta Caliman - g.caliman@donboscosandona.it -
            tel. 0421 338 968
          </li>
          <li>
            Servizi al lavoro e corsi per adulti: Francesco Cicogna -
            f.cicogna@donboscosandona.it - tel. 0421 338 969
          </li>
          <li>
            Pastorale: Daniele Zanutto - d.zanutto@donboscosandona.it - tel.
            0421 338 983
          </li>
          <li>
            Settore Elettrico/Energia: Diego Cuzzolin -
            d.cuzzolin@donboscosandona.it - tel. 0421 338 991
          </li>
          <li>Settore Informatico: Andrea Ros - a.ros@donboscosandona.it</li>
          <li>
            Settore Meccanico: Lorenzo Faggiotto -
            l.faggiotto@donboscosandona.it - tel. 0421 338 986
          </li>
          <li>
            Settore Automotive: Roberto Partata - r.partata@donboscosandona.it -
            tel. 0421 338 985
          </li>
        </ul>
        <br />
        Per i colloqui con gli insegnanti utilizzare il servizio di prenotazione
        disponibile su ScuolaOnline
        <br />
        <br />
        Per colloqui con il Direttore o il Vicedirettore prendere appuntamento
        in segreteria.
      </Paragraph>
    </Layout>
  )
}
