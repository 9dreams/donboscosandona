import * as React from 'react';

import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import maxWidth from '@mui/system'
import Paper from '@mui/material/Paper'
import Link from 'next/link'

const emails = ['username@gmail.com', 'user02@gmail.com'];

export default function Team({ members, cardWidth, title, description }) {
    return (
        <Container maxWidth={maxWidth} sx={{ marginTop: '3rem', marginBottom: '5rem' }}>
            <Grid>
                <Paper
                    style={{
                        textAlign: 'center',
                    }}
                    elevation={0}
                >
                    <Typography component="h2" variant="h3" color="inherit" gutterBottom>
                        {title}
                    </Typography>
                    <Typography component="h3" color="inherit" paragraph>
                        {description}
                    </Typography>
                </Paper>
            </Grid>
            <Grid container>
                {
                    members.map(
                        (member) => (
                            <Grid item xs={12} lg={cardWidth}>
                                <center>
                                    <Avatar style={{ marginTop: '3rem' }} alt="" src={member.imageUrl} sx={{ width: '7rem', height: '7rem' }} component={Paper} elevation={10} />
                                    <Paper
                                        style={{
                                            textAlign: 'center',
                                        }}
                                        elevation={0}
                                    >
                                        <Typography style={{ marginTop: '5%' }} component="h3" variant="h5" color="inherit" gutterBottom paragraph>
                                            {member.name}
                                        </Typography>
                                        <Typography variant="subtitle1" paragraph>
                                            {member.role}
                                        </Typography>
                                        <Typography variant="subtitle1" color="text.secondary">
                                            {member.description}
                                        </Typography>
                                        <Typography variant="subtitle1" color="text.secondary">
                                            {member.description1}
                                        </Typography>
                                        <Grid
                                            container
                                            direction="row"
                                            justifyContent="space-evenly"
                                            alignItems="center"
                                        >
                                            {member.twitterUrl ? (
                                                <Link href={member.twitterUrl} style={{ marginTop: '10%' }}>
                                                    <center>
                                                        <img
                                                            src="https://static.vecteezy.com/system/resources/previews/002/534/045/original/social-media-twitter-logo-blue-isolated-free-vector.jpg"
                                                            width="38"
                                                        />
                                                    </center>
                                                </Link>) : ''
                                            }
                                            {member.googleUrl ? (
                                                <Link href={member.googleUrl} style={{ marginTop: '10%' }}>
                                                    <center>
                                                        <img
                                                            src="https://kgo.googleusercontent.com/profile_vrt_raw_bytes_1587515395_10840.jpg"
                                                            width="35"
                                                        />
                                                    </center>
                                                </Link>) : ''
                                            }
                                            {member.linkedinUrl ? (
                                                <Link href={member.linkedinUrl} style={{ marginTop: '10%' }}>
                                                    <center>
                                                        <img
                                                            src="https://goldfollower.com/en/wp-content/uploads/2020/01/linkedin.png"
                                                            width="35"
                                                        />
                                                    </center>
                                                </Link>) : ''
                                            }
                                        </Grid>
                                    </Paper>
                                </center>
                            </Grid>
                        )
                    )
                }
            </Grid>
        </Container>
    )
}
