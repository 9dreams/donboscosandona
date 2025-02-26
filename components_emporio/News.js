import { Container, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import NewsCard from '/components_emporio/NewsCard';

export default function News({ title, limit = 6 }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          'https://channels.donboscosandona.it/api/posts/inoratorio?q=scuola'
        );
        const result = await res.json();
        if (res.ok) {
          setData(result.filter((post) => !post.in_evidenza).slice(0, limit));
        } else {
          setError('Errore nel recupero dei dati');
        }
      } catch (err) {
        setError('Errore di connessione');
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [limit]);

  if (loading) return <div className="text-center py-4 text-xl">Caricamento...</div>;
  if (error) return <div className="text-center py-4 text-xl text-red-600">{error}</div>;

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
