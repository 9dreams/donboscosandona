import * as React from 'react'
import Paper from '@mui/material/Paper'
import LandingHero from "/dev/barbaricalbertic/LandingHero"
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Products from '@/dev/productsbaralb/Products'
import { Map } from '@mui/icons-material'

export default function Pages() {
    return (
        <>
            <Container sx={{ alignContent: 'center', height: '100vh' }}>
                <center>
                    <h1>Some of Our Aweson Products - 2</h1>

                </center>

                <center>
                    <Typography variant="subtitle1" sx={{ color: 'grey' }}>This is the paragraph where you can write more details about your projects. Keep you user <br /> engaged providing meaningful information</Typography>
                </center>

                <Box marginTop="100px" display="flex" flexWrap="wrap" sx={{ p: { xs: 3, md: 6 }, pr: { md: 0 } }} >
                    {
                        Products.map(
                            (products) => (
                                <Products products={products} />
                            )
                        )
                    }
                </Box>
                
                
            </Container>
        </>
    )
}


let products = [
    {
        title: "NextJS Material Kit Free",
        category: "FREE UI KIT",
        description: "It is a Fre Material-UI Kit with.....",
        url: ""
    },
    {
        title: "NextJS Material Kit Free",
        category: "FREE UI KIT",
        description: "It is a Fre Material-UI Kit with.....",
        url: ""
    },
    {
        title: "NextJS Material Kit Free",
        category: "FREE UI KIT",
        description: "It is a Fre Material-UI Kit with.....",
        url: ""
    },

]




