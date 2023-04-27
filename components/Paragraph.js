import { Container, Typography, CardMedia, Box } from '@mui/material'

export default function Paragraph(props) {
  return (
    <Container
      maxWidth={props.maxWidth}
      sx={{
        position: 'relative',
        marginTop: '2rem',
        marginBottom: '2rem',
        padding: { xs: '1rem', md: '2rem', lg: '3rem' },
        textAlign: 'justify',
        backgroundColor: props.backgroundColor,
        borderRadius: '1rem',
        backgroundImage: 'url(' + props.backgroundImageUrl + ')',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        ...props.sx,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: props.backgroundColor,
          opacity: props.opacity,
          borderRadius: '1rem',
        }}
      />
      <Container
        maxWidth={false}
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backdropFilter: 'blur(' + props.blur + ')',
        }}
      />
      <Container sx={{ position: 'relative', color: props.color }}>
        {props.topImageUrl && (
          <CardMedia
            component='img'
            image={props.topImageUrl}
            width='100%'
            sx={{
              marginBottom: '3rem',
            }}
          />
        )}
        {props.title && (
          <Typography
            variant='h4'
            component='h1'
            gutterBottom
            sx={{ textAlign: { xs: 'center', sm: 'left' } }}
          >
            {props.title}
          </Typography>
        )}
        {props.subtitle && (
          <Typography
            variant='h5'
            component='h1'
            gutterBottom
            sx={{ textAlign: { xs: 'center', sm: 'left' } }}
          >
            {props.subtitle}
          </Typography>
        )}
        <Container
          disableGutters={true}
          sx={{
            marginTop: '2rem',
            columnCount: { xs: 1, sm: props.columnCount },
            columnGap: '3rem',
          }}
        >
          <Typography variant='body1' gutterBottom>
            {props.avatarImageUrl && (
              <CardMedia
                component='img'
                image={props.avatarImageUrl}
                sx={{
                  float: 'left',
                  marginTop: '-1rem',
                  marginRight: '1rem',
                  width: '8rem',
                  borderRadius: '50%',
                }}
              />
            )}
            {props.leftImageUrl && (
              <CardMedia
                component='img'
                image={props.leftImageUrl}
                sx={{
                  float: 'left',
                  marginRight: '1rem',
                  marginBottom: '1rem',
                  width: '20rem',
                  borderRadius: '5px',
                }}
              />
            )}
            {props.rightImageUrl && (
              <CardMedia
                component='img'
                image={props.rightImageUrl}
                sx={{
                  float: 'right',
                  marginLeft: '1rem',
                  marginBottom: '1rem',
                  width: '20rem',
                  borderRadius: '5px',
                }}
              />
            )}
            {props.children}
          </Typography>
        </Container>
      </Container>
    </Container>
  )
}

Paragraph.defaultProps = {
  columnCount: 1,
  maxWidth: 'lg',
  backgroundColor: false,
  color: '#444',
  opacity: 1,
}
