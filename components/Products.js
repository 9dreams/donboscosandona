import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import styles from 'dev/alexalex/Products.module.css'
import { padding, textAlign } from '@mui/system'

export default function Products({ title, description, cardWidth, products }) {
    return (
        <Container maxWidth="lg"> 
               <Typography text-align='center' style={{ textAlign: 'center'  }} component="h3" variant="h3" color="inherit" gutterBottom>
                            {title}
              </Typography> 
              <Typography variant="subtitle1" style={{ textAlign: 'center', padding: '10px'  }}  text-align='center' color="text.secondary"paragraph>
                            {description}
              </Typography>
                <Grid container>
                    {
                            products.map(
                                (product) => (
                                    <Grid item md={cardWidth}>
                                    <img src={ product.immagine  } style={{ width: '90%', padding: '20px', borderRadius: '30px' }} className={styles.immagine} />
                                    <Typography text-align='center' component="h4" variant="h6" style={{ textAlign: 'center'  }} color="inherit" gutterBottom>
                                     {product.title}
                                    </Typography>
                                    <Typography variant="subtitle1" style={{ textAlign: 'center'  }} color="text.secondary"paragraph>
                                    { product.category }
                                    </Typography >
                                    <Typography variant="subtitle1" style={{  padding: '10px' }} color="inherit" paragraph>
                                    { product.description } 
                                    </Typography>
                                    </Grid>
                                )    
                            )
                        }  
                </Grid>
        </Container>
    )
}
