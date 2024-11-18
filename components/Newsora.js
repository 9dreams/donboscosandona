import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid';  // Importiamo Grid

export default function MultiActionAreaCard() {
  return (
    <Grid container spacing={2}>  {/* Usa Grid per allineare le Cards */}
      {/* Primo Card */}
      <Grid item xs={12} sm={4}> {/* Imposta la larghezza per ciascun card */}
        <Card sx={{ maxWidth: 350 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image="http://archive.inoratorio.it/img/column/a86d75ad326322881495d691feaacd83702ae0bd.jpg?1705618761"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Il clan Camelot in quota
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                "Servire è la sfida, il futuro è domani, affrontiamo con coraggio ogni salita"...
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="success">
              Share
            </Button>
          </CardActions>
        </Card>
      </Grid>

      {/* Secondo Card */}
      <Grid item xs={12} sm={4}> {/* Imposta la larghezza per ciascun card */}
        <Card sx={{ maxWidth: 350 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image="http://archive.inoratorio.it/img/column/78a58edf81a9f5c94cd656b72f61509ccf611c47.jpg?1702826137"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                La luce della Pace di Betlemme arriva in Oratorio
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Segno di speranza e di pace: una fiamma che arde ininterrottamente da quindici secoli nel luogo della natività...
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="success">
              Share
            </Button>
          </CardActions>
        </Card>
      </Grid>

      {/* Terzo Card */}
      <Grid item xs={24} sm={4}> {/* Imposta la larghezza per ciascun card */}
        <Card sx={{ maxWidth: 350 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image="http://archive.inoratorio.it/img/column/464e811dff1f02e1e54c14e8f67c0fe705448695.jpg?1702452112"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Una serata in ricordo di Giovanni Biancotto
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Giovanni Biancotto è stato una presenza fondamentale per lo scoutismo e tutta la realtà sandonatese, eccone qui alcuni ricordi...
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="success">
              Share
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}