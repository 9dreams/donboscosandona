import * as React from 'react';
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Container from '@mui/material/Container'
import maxWidth from '@mui/system'
import Paper from '@mui/material/Paper'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Link from 'next/link'
import Image from 'next/image'





const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Team({ members, team }) {
    return (
        <Container maxWidth={maxWidth}>
            <Grid>
                <Paper
                    style={{
                        textAlign: 'center',
                    }}
                    elevation={0}
                >
                    <Typography component="h2" variant="h3" color="inherit" gutterBottom>
                        Il nostro team!
                    </Typography>
                    <Typography component="h3" color="inherit" paragraph>
                        Il nostro team di professionisti!
                    </Typography>
                </Paper>
            </Grid>

            <Grid item xs={3}>

                <Item elevation={0} ><Card sx={{ minWidth: 275 }} elevation={0}>
                    <CardContent>
                        <Stack direction="row" spacing={20}>
                            {
                                members.map(
                                    (member) => (
                                        <center>

                                            <Avatar alt="" src={member.imageUrl} sx={{ width: 150, height: 150 }} />
                                            <Paper
                                                style={{
                                                    textAlign: 'center',
                                                }}
                                                elevation={0}
                                            >
                                                <Typography component="h3" variant="h5" color="inherit" gutterBottom>
                                                    {member.name}
                                                </Typography>
                                                <Typography variant="subtitle1" color="text.secondary">
                                                    {member.role}
                                                </Typography>
                                                <Typography variant="subtitle1" paragraph>
                                                    {member.description}
                                                </Typography>
                                                
                                            </Paper>
                                        </center>

                                    )
                                )
                            }
                        </Stack>
                    </CardContent>
                </Card></Item>
            </Grid>


        </Container>
    )
}