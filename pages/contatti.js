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
                siteName="CFP DON BOSCO"
                title="CONTATTI"
                description="Numeri utili e indirizzi email di riferimento"
                imageUrl="https://techprincess.it/wp-content/uploads/2021/05/penna-come-e%CC%80-cambiata.jpg"
            />


            <Paragraph
                title="CFP CNOS-FAP DON BOSCO"
                subtitle="Centro di Formazione Professionale"
            >
                via XIII Martiri, 86
                <br />30027 San Donà di Piave (VE)
                <br />Centralino: 0421 338 980 - Fax: 0421 188 2664
                <br />Orario della segreteria:
                <br />

                <ul>
                    <li>MATTINO: dal lunedì al venerdì dalle 8:00 alle 13:00; il sabato dalle 8:00 alle 11:00</li>
                    <li>POMERIGGIO: dal lunedì al venerdì dalle 15:00 alle 17:00</li>
                    <br />
                    <li>informazioni generali: info@donboscosandona.it - tel. 0421 338 980</li>
                    <li>segreteria didattica: segreteria@donboscosandona.it - tel. 0421 338 980</li>
                    <li>posta elettronica certificata: cfp.sandona@pec.it</li>
                    <li>informazioni relative alla privacy: privacy@donboscosandona.it</li>
                    <li>organismo di vigilanza (codice etico): odv.rebesco@salesianinordest.it</li>
                    <br />
                    <li>direttore: direzione@donboscosandona.it</li>
                    <li>preside: a.cappelletto@donboscosandona.it</li>
                    <li>vice-preside: a.ferro@donboscosandona.it - tel. 0421 338 968</li>
                    <li>amministrazione: n.caramaschi@donboscosandona.it - tel. 0421 338 988</li>
                    <li>amministrazione: n.caramaschi@donboscosandona.it - tel. 0421 338 988</li>
                    <li>corsi per adulti: f.cicogna@donboscosandona.it - tel. 0421 338 969</li>
                    <li>sostegno/orientamento in entrata: a.pasqualetto@donboscosandona.it - tel. 0421 338 992</li>
                    <li>orientamento in uscita: m.dianese@donboscosandona.it - tel. 0421 338 971</li>
                    <li>servizi al lavoro: m.dianese@donboscosandona.it - tel. 0421 338 971</li>
                    <li>pastorale: m.peruzzi@donboscosandona.it - tel. 0421 338 983</li>
                    <li>settore elettrico/energia: d.cuzzolin@donboscosandona.it - tel. 0421 338 991</li>
                    <li>settore informatico: a.ros@donboscosandona.it- tel. 0421 338 987</li>
                    <li>settore meccanico: i.muccignatto@donboscosandona.it - tel. 0421 338 986</li>
                    <li>settore motoristico/carrozzeria: r.partata@donboscosandona.it - tel. 0421 338 985</li>

                </ul>
                <br />
                Per i colloqui con gli insegnanti utilizzare il servizio di prenotazione disponibile su <Link>ScuolaOnline</Link>
                <br />
                <br />Per colloqui con il Direttore o il Vicedirettore prendere appuntamento in segreteria.
            </Paragraph>


        </Layout>
    )
}