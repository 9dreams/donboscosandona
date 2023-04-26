import Head from "next/head";
import Layout from "/components/Layout";
import LandingHero from "/components/LandingHero2.js";
import Paragraph from "components/Paragraph";
import Grid from "@mui/material/Grid";

export default function Pagina() {
  return (
    <Layout>
      <Head>
        <title>Proposta Estate Ragazzi di San Donà di Piave</title>
        <meta
          name="og:url"
          content="https://per.donboscosandona.it/autobus"
        />
        <meta name="og:type" content="website" />
        <meta name="og:locale" content="it_IT" />
        <meta
          name="og:title"
          content="Proposta Estate Ragazzi di San Donà di Piave"
        />
        <meta
          name="og:description"
          content="L'orario degli autobus dalle frazioni."
        />
        <meta name="og:image" content="/images/autobus.png" />
      </Head>
      <LandingHero
        opacity={0.0}
        title="Trasporto autobus"
        description="L'orario degli autobus dalle frazioni."
        imageUrl="/images/autobus.png"
      />

      <Paragraph title="Dalle frazioni all'oratorio" />
      <Grid container>
        <Grid item sx={{ marginLeft: "22%" }}>
          <Paragraph title="Mattina">
            08:17 Viale primavera/Fermata Tonetto <br /> <br />
            08:20 Via Calnova/Turati <br /> <br />
            08:24 Fiorentina - Via Falcone/Chiesa (ingresso da Via Piveran){" "}
            <br /> <br />
            08:45 Mussetta - Chiesa <br /> <br />
            08:55 Calvecchia - Chiesa <br /> <br />
            08:58 Fossà - Chiesa <br /> <br />
            09:04 Cittanova - Chiesa <br /> <br />
            09:06 Cittanova - Via Tiepolo <br /> <br />
            09:10 Isiata - Fermata ATVO <br /> <br />
            09:18 Palazzetto - Chiesa <br /> <br />
          </Paragraph>
        </Grid>
        <Grid item sx={{ marginLeft: "10%" }}>
          <Paragraph title="Pomeriggio">
            14:16 Viale primavera/Fermata Tonetto <br /> <br />
            14:18 Via Calnova/Turati <br /> <br />
            14:22 Fiorentina - Via Falcone/Chiesa (ingresso da Via Piveran){" "}
            <br /> <br />
            14:35 Mussetta - Chiesa <br /> <br />
            14:45 Calvecchia - Chiesa <br /> <br />
            14:48 Fossà - Chiesa <br /> <br />
            14:54 Cittanova - Chiesa <br /> <br />
            14:56 Cittanova - Via Tiepolo <br /> <br />
            15:00 Isiata - Fermata ATVO <br /> <br />
            15:08 Palazzetto – Chiesa <br /> <br />
          </Paragraph>
        </Grid>
      </Grid>

      <Paragraph title="Dall'oratorio alle frazioni" />
      <Grid container>
        <Grid item sx={{ marginLeft: "22%" }}>
          <Paragraph title="Mattina">
            12:05 Partenza <br /> <br />
            12:09 Viale primavera/Fermata Tonetto <br /> <br />
            12:11 Via Calnova/Turati <br /> <br />
            12:15 Fiorentina - Via Falcone/Chiesa (ingresso da Via Piveran){" "}
            <br /> <br />
            12:40 Mussetta - Chiesa <br /> <br />
            12:50 Calvecchia - Chiesa <br /> <br />
            12:53 Fossà - Chiesa <br /> <br />
            12:59 Cittanova - Chiesa <br /> <br />
            13:01 Cittanova - Via Tiepolo <br /> <br />
            13:05 Isiata - Fermata ATVO <br /> <br />
            13:13 Palazzetto – Chiesa <br /> <br />
          </Paragraph>
        </Grid>

        <Grid item sx={{ marginLeft: "10%" }}>
          <Paragraph title="Pomeriggio">
            18:05 Partenza <br /> <br />
            18:09 Viale primavera/Fermata Tonetto <br /> <br />
            18:11 Via Calnova/Turati <br /> <br />
            18:15 Fiorentina - Via Falcone/Chiesa (ingresso da Via Piveran){" "}
            <br /> <br />
            18:40 Mussetta - Chiesa <br /> <br />
            18:50 Calvecchia - Chiesa <br /> <br />
            18:53 Fossà - Chiesa <br /> <br />
            18:59 Cittanova - Chiesa <br /> <br />
            19:01 Cittanova - Via Tiepolo <br /> <br />
            19:05 Isiata - Fermata ATVO <br /> <br />
            19:13 Palazzetto - Chiesa <br /> <br />
          </Paragraph>
        </Grid>
      </Grid>
    </Layout>
  );
}
