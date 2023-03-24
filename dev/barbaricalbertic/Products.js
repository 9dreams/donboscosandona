import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { padding, width } from '@mui/system';

export default function CardProducts(props, cardWidth) {
    return (
        props.products.map((props) => (
            <Card sx={{
                margin:"20px",
                alignItems:"center",
                padding:"0px",
                width:"320px"
            }}
            elevation={0}>
                <CardActionArea 
                href={props.url}
                elevation={0}
                >
                <CardMedia
                    sx={{
                        borderRadius: "15px"
                    }}
                    
                    component="img"
                    alt="green iguana"
                    height="230"
                    image={props.immagineUrl} // errore corretto
                />

                <CardContent>
                    <center>
                        <Typography gutterBottom variant="h6" fontSize="1em" component="div" >
                            {props.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            
                                {props.category}
                            
                        </Typography>
                        <br />
                        <Typography variant="subtitle1" color="ActiveCaption" sx={{ color: "grey" }}>
                            {props.description}
                        </Typography>
                    </center>
                </CardContent>
            
            </CardActionArea> 
            </Card>
           
            
        )
        )
    )
}
