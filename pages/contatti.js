import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Head from "next/head";
import Layout from "/components/Layout";
import LandingHero from "/components/LandingHero";
import Products from "/components/Products";
import Paragraph from "/components/Paragraph";

export default function Home() {
  return (
    <Layout>
      <Head />
      <LandingHero
        opacity={0.5}
        siteName="CFP DON BOSCO"
        title="CONTATTI"
        description="Numeri utili e indirizzi email di riferimento"
        imageUrl="/images/trasparenza/transparency-2.webp"
      />

      <Paragraph
        title="SFP DON BOSCO"
        subtitle="Scuola della Formazione Professionale"
      >
        via XIII Martiri, 86
        <br />
        30027 San Donà di Piave (VE)
        <h1>Codice meccanografico: VECF013009</h1>
        <br />
        <h1 className="text-xl">Centralino:</h1>
        0421 338 980 - Fax: 0421 188 2664
        <br />
        <br />
        <h1 className="text-xl">Orario della segreteria:</h1>
        <ul>
          <li>
            <span className="font-bold">MATTINO:</span> dal lunedì al venerdì
            dalle 8:00 alle 9:00 e dalle 11:00 alle 12:30; il sabato dalle 9:00
            alle 10:00
          </li>
          <li>
            <span className="font-bold">POMERIGGIO:</span> martedì e giovedì
            dalle 15:30 alle 16:00
          </li>
          <br />
          <br />
          <h1 className="text-xl">Contatti e Riferimenti Utili</h1>
          <li className="mb-2">
            <span className="font-bold">Informazioni generali:</span> <br />
            info@donboscosandona.it - tel. 0421 338 980
          </li>
          <li className="mb-2">
            <span className="font-bold">Segreteria didattica:</span><br />
              segreteria.fp.sandona@salesianinordest.it - tel. 0421 338 980
          </li>
          <li className="mb-2">
            <span className="font-bold">Posta elettronica certificata:</span><br />
            fp.donboscosandona@pec.salesianinordest.it
          </li>
          <li className="mb-2">
            <span className="font-bold">
              Informazioni relative alla privacy:
            </span><br />
            privacy@donboscosandona.it
          </li>
          <li className="mb-2">
            <span className="font-bold">
              Organismo di vigilanza (codice etico):
            </span><br />
            odv.fp@salesianinordest.it
          </li>
          <li className="mb-2">
            <span className="font-bold">Amministrazione/Risorse umane:</span><br />
            amministrazione.fp.sandona@salesianinordest.it - tel. 0421 338 988
          </li>
          <li>
            <span className="font-bold">Referente qualità:</span><br />
            qualita.fp.sandona@salesianinordest.it - tel. 0421 338 990
          </li>
          <br />
          <br />
          <h1 className="text-xl">Direzione</h1>
          <li className="mb-2">
            <span className="font-bold">Direttore Generale:</span>
            <br /> don Nicola
            Munari - direzione@donboscosandona.it
          </li>
          <li className="mb-2">
            <span className="font-bold">Direttore della Scuola:</span><br />
            Alessandro Ferro - direzione.fp.sandona@salesianinordest.it
          </li>
          <li className="mb-2">
            <span className="font-bold">Vicedirettrice:</span>
            <br /> Anna Maria
            D'Ambrosio - a.dambrosio@donboscosandona.it
          </li>
          <br />
          <br />
          <h1 className="text-xl">
            Referenti per Orientamento, Servizi al Lavoro e Settori Didattici
          </h1>
          <li className="mb-2">
            <span className="font-bold">Sostegno/orientamento in entrata:</span><br />
            Andrea Pasqualetto - a.pasqualetto@donboscosandona.it - tel. 0421
            338 992
          </li>
          <li className="mb-2">
            <span className="font-bold">Orientamento in uscita:</span><br />
             Giorgia
            Seno - g.seno@donboscosandona.it - tel. 0421 338 971
          </li>
          <li className="mb-2">
            <span className="font-bold">Ufficio stage e tirocini:</span><br />
            Francesco Cicogna - f.cicogna@donboscosandona.it - tel. 0421 338 969
            <br />
            Greta Caliman - g.caliman@donboscosandona.it
            - tel. 0421 338 968
          </li>
          <li className="mb-2">
            <span className="font-bold">
              Servizi al lavoro e corsi per adulti:
            </span><br />
            Francesco Cicogna - f.cicogna@donboscosandona.it - tel. 0421 338 969
          </li>
          <li className="mb-2">
            <span className="font-bold">Pastorale:</span><br />
             Daniele Zanutto -
            d.zanutto@donboscosandona.it - tel. 0421 338 983
          </li>
          <li className="mb-2">
            <span className="font-bold">Settore Elettrico/Energia:</span><br />
             Diego
            Cuzzolin - d.cuzzolin@donboscosandona.it - tel. 0421 338 991
          </li>
          <li className="mb-2">
            <span className="font-bold">Settore Informatico:</span><br />
             Emanuele Cecchetto - e.cecchetto@donboscosandona.it
          </li>
          <li className="mb-2">
            <span className="font-bold">Settore Meccanico:</span><br />
            Lorenzo Faggiotto - l.faggiotto@donboscosandona.it - tel. 0421 338 986
          </li>
          <li className="mb-2">
            <span className="font-bold">Settore Automotive:</span><br />
             Roberto Partata - r.partata@donboscosandona.it - tel. 0421 338 985
          </li>
        </ul>
        <br />
        <br />
        <br />
        <b>
          Per i colloqui con gli insegnanti utilizzare il servizio di
          prenotazione disponibile su ScuolaOnline
        </b>
        <br />
        <br />
        <b>
          Per colloqui con il Direttore o il Vicedirettore prendere appuntamento
          in segreteria.
        </b>
      </Paragraph>
    </Layout>
  );
}
