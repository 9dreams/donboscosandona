import Head from "next/head";
import Layout from "/components/Layout";
import LandingHero from "/components/LandingHero.js";
import Paragraph from "components/Paragraph";

export default function Pagina() {
  return (
    <Layout>
      <Head>
        <title>Proposta Estate Ragazzi di San Donà di Piave</title>
        <meta name="og:url" content="https://per.donboscosandona.it/dlc" />
        <meta name="og:type" content="website" />
        <meta name="og:locale" content="it_IT" />
        <meta
          name="og:title"
          content="Proposta Estate Ragazzi di San Donà di Piave"
        />
        <meta
          name="og:description"
          content="Dopo la campanella: il dopo-scuola dell'Oratorio don Bosco."
        />
        <meta name="og:image" content="/images/dlc.png" />
      </Head>
      <LandingHero
        opacity={0.2}
        title="Scuola d'Estate? Sì grazie!"
        imageUrl="/images/dlc.png"
      />
      <Paragraph title="Tra studio, amicizia e gioco">
        <p>
          Cari genitori e ragazzi,
          <br />
          Grazie al sostegno dei Comuni di San Donà di Piave e di Musile di
          Piave, torna la versione estiva del nostro progetto educativo! Non è
          solo studio, ma un’esperienza completa per vivere le vacanze con lo
          spirito giusto: quello di Don Bosco.
        </p>
        <br />
        <p>
          Dal <strong>13 al 30 luglio 2026</strong>, dal lunedì al giovedì,
          apriamo le porte a tutti i ragazzi dalla 2ª elementare alla 3ª media e
          biennio superiori. Un’opportunità unica per portarsi avanti con i
          compiti estivi in un ambiente sereno, guidati dai nostri operatori
          qualificati, dai salesiani e dall’energia dei giovani animatori della
          Proposta Estate.
        </p>
      </Paragraph>

      <Paragraph title="La nostra formula: Impegno e Cortile">
        <p>Seguendo il carisma salesiano, crediamo che il segreto sia l'equilibrio:</p>
        <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
          <li>
            <strong>In aula:</strong> Studio concentrato e supporto nello
            svolgimento dei compiti.
          </li>
          <li>
            <strong>In cortile:</strong> Gioco, relax e nuove amicizie per
            crescere come "buoni cristiani e onesti cittadini".
          </li>
        </ul>
      </Paragraph>

      <Paragraph title="Il Programma Giornaliero">
        <p>
          <strong>Mattino</strong>
        </p>
        <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
          <li>09.00: Accoglienza</li>
          <li>09:30: Sessione di studio (1ª ora)</li>
          <li>10:30: Intervallo e giochi in cortile</li>
          <li>11:00: Sessione di studio (2ª ora)</li>
          <li>12:00: Pausa pranzo tutti a casa</li>
        </ul>
        <br />
        <p>
          <strong>Pomeriggio</strong> (Riapertura oratorio 14:30)
        </p>
        <table
          style={{ width: "100%", borderCollapse: "collapse", marginTop: "1rem" }}
        >
          <thead>
            <tr>
              <th
                style={{
                  textAlign: "left",
                  padding: "8px",
                  borderBottom: "1px solid #ddd",
                }}
              >
                ORARIO
              </th>
              <th
                style={{
                  textAlign: "left",
                  padding: "8px",
                  borderBottom: "1px solid #ddd",
                }}
              >
                MEDIE / SUPERIORI
              </th>
              <th
                style={{
                  textAlign: "left",
                  padding: "8px",
                  borderBottom: "1px solid #ddd",
                }}
              >
                ELEMENTARI
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>
                15:00
              </td>
              <td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>
                Sessione di Studi (3ª ora)
              </td>
              <td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>
                Sessione di Studi (3ª ora)
              </td>
            </tr>
            <tr>
              <td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>
                15:45/16:00
              </td>
              <td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>
                Intervallo e giochi
              </td>
              <td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>
                Intervallo e giochi organizzati
              </td>
            </tr>
            <tr>
              <td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>
                16:15
              </td>
              <td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>
                Sessione di Studi (4ª ora)
              </td>
              <td style={{ padding: "8px", borderBottom: "1px solid #eee" }}></td>
            </tr>
            <tr>
              <td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>
                17:00
              </td>
              <td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>
                Fine attività
              </td>
              <td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>
                Fine attività
              </td>
            </tr>
          </tbody>
        </table>
      </Paragraph>

      <Paragraph title="Iscrizioni e Contatti">
        <p>
          Le iscrizioni aprono il <strong>22 giugno 2026</strong>. Puoi
          iscriverti:
        </p>
        <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
          <li>
            <strong>Prenotazioni appuntamento Online:</strong> Visitando il sito{" "}
            <a
              href="http://archive.inoratorio.it/contatti-dlc"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://archive.inoratorio.it/contatti-dlc
            </a>
          </li>
          <li>
            <strong>Iscrizione di persona:</strong> Presso l’ufficio Tutor della
            Scuola di Formazione Professionale (esclusi weekend e giorni di
            uscita della P.E.R.).
          </li>
        </ul>
        <br />
        <p>
          <strong>Hai bisogno di info?</strong>
          <br />
          Contatta Andrea Pasqualetto al numero 📞{" "}
          <a href="tel:+393917064430">391 7064430</a> o ☎️{" "}
          <a href="tel:+390421338992">0421 338992</a>.
        </p>
      </Paragraph>
    </Layout>
  );
}
