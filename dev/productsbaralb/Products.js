import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ProductionQuantityLimitsSharp } from '@mui/icons-material';


export default function CardProducts(props) {
    return (

        props.Products.map(
            (products) => (
            <Card sx={{ maxWidth: 300, margin: "20px" }} elevation={0}>
                <CardMedia
                    sx={{
                        borderRadius: "15px"
                    }}
                    component="img"
                    alt="green iguana"
                    height="230"
                    Image src={props.url}
                />

                <CardContent>
                    <Typography gutterBottom variant="h6" fontSize="1em" component="div" >
                        {products.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <center>
                            {products.category}
                        </center>
                    </Typography>
                    <br />
                    <Typography variant="subtitle1" color="ActiveCaption" sx={{ color: "grey" }}>
                        {products.description}
                    </Typography>
                </CardContent>
            </Card>
        )

        )


    );
}