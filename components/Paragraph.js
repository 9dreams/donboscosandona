import { Container, Typography, CardMedia } from "@mui/material"

export default function Paragraph({ title, subtitle, children, maxWidth, columnCount, backgroundColor, imageUrl, sx }) {
    return (
        <Container
            maxWidth={maxWidth}
            sx={{
                marginTop: '2rem',
                padding: '3rem',
                textAlign: 'justify',
                backgroundColor: backgroundColor,
                borderRadius: '1rem',
                ...sx
            }}
        >
            {imageUrl &&
                <CardMedia
                    component="img"
                    image={imageUrl}
                    width="100%"
                    sx={{
                        marginBottom: '3rem',
                    }}
                />
            }
            {title &&
                <Typography variant="h4" component="h1" gutterBottom>
                    {title}
                </Typography>
            }
            {subtitle &&
                <Typography variant="h5" component="h1" gutterBottom>
                    {subtitle}
                </Typography>
            }
            <Container
                disableGutters={true}
                sx={{
                    maxWidth: false,
                    marginTop: '2rem',
                    columnCount: columnCount,
                    columnGap: '3rem',
                }}
            >
                <Typography variant="body1" gutterBottom>
                    {children}
                </Typography>
            </Container>
        </Container>
    )
}

Paragraph.defaultProps = {
    columnCount: 1,
    maxWidth: "lg",
    backgroundColor: false
}