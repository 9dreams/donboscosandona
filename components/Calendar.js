import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import styles from "/components/Calendar.module.css";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';

export default function Calendar({
  title,
  description,
  cardWidth,
  events,
  borderRadius,
}) {
  return (
    <Container maxWidth="lg">
      <Typography
        text-align="center"
        style={{ textAlign: "center" }}
        component="h3"
        variant="h3"
        color="inherit"
        gutterBottom
      >
        {title}
      </Typography>
      <Typography
        variant="subtitle1"
        style={{ textAlign: "center", padding: "10px" }}
        text-align="center"
        color="text.secondary"
        paragraph
      >
        {description}
      </Typography>
      <Grid container>
        {events.map((date) => (
          <Grid item md={cardWidth}>
            <CardActionArea
              className={styles.card}
              component="a"
              href={date.url}
            >
              <Card sx={{ display: "flex" }} elevation={0}>
                <CardContent sx={{ flex: 1 }}>
                  <CardMedia
                    component="img"
                    sx={{
                      display: {
                        xs: "block",
                        sm: "block",
                        margin: "auto",
                        borderRadius: borderRadius,
                      },
                    }}
                    image={date.immagineUrl}
                    alt={date.date}
                  />
                  <Typography
                    text-align="center"
                    component="h4"
                    variant="h6"
                    style={{ textAlign: "center" }}
                    color="inherit"
                    gutterBottom
                  >
                    {date.date}
                  </Typography>
                  {date.morning && (
                    <Typography
                      variant="subtitle1"
                      style={{ padding: "10px" }}
                      color="inherit"
                      paragraph
                    >
                      <AccessTimeIcon />
                      &nbsp;Mattino: {date.morning}
                    </Typography>
                  )}
                  {date.evening && (
                    <Typography
                      variant="subtitle1"
                      style={{ padding: "10px" }}
                      color="inherit"
                      paragraph
                    >
                      <LightModeIcon />
                      &nbsp;Pomeriggio: {date.pomeriggio}
                    </Typography>
                  )}
                  {date.evening && (
                    <Typography
                      variant="subtitle1"
                      style={{ padding: "10px" }}
                      color="inherit"
                      paragraph
                    >
                      <NightlightIcon />
                      &nbsp;Sera: {date.evening}
                    </Typography>
                  )}
                </CardContent>
              </Card>
            </CardActionArea>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

Calendar.defaultProps = {
  cardWidth: 3,
  borderRadius: "10px",
};
