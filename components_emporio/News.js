import { Container, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import NewsCard from '/components_emporio/NewsCard';

export default function News({ title, limit = 6, data }) {
  if (!data) return <div>Caricamento...</div>
  if (data && data.status=='404') return <div>Errore: il canale specificato per le News è inesistente.</div>
  
  data = data.filter((post) => (!post.in_evidenza))
  data.splice(limit)

  return (
    <Container className="mx-auto mt-20 mb-24 px-4">
      <Typography className="text-left text-4xl font-semibold mb-8 text-[#780202]" component="h2">
        {title}
      </Typography>
      <Grid container spacing={6}>
        {data.map((post, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <NewsCard post={post} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
