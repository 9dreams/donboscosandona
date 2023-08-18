import * as React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Link from 'next/link'
import Paper from '@mui/material/Paper'
import styles from 'components/LandingHero2.module.css'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

import { siteName, menu } from '/config/default'

export default function LandingHero(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <Container
      maxWidth
      disableGutters={true}
      sx={{
        height: props.height + 'vh',
        padding: '0vh',
        margin: '0vh',
        width: '100%',
      }}
    >
      <Paper
        sx={{
          position: 'relative',
          color: '#fff',
          mb: 4,
          height: props.height + 'vh',
          backgroundImage: 'url(' + props.imageUrl + ')',
          padding: 0,
          margin: 0,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: 'rgba(0,0,0,' + props.opacity + ' )',
          }}
        />

        {/* Menù per dispositivi mobili */}
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size='large'
            aria-label='menù'
            aria-controls='menu-appbar'
            aria-haspopup='true'
            onClick={handleOpenNavMenu}
            color='inherit'
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id='menu-appbar'
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            {props.menu.map((item) => (
              <MenuItem key={item.title} onClick={handleCloseNavMenu}>
                <Button
                  color='inherit'
                  noWrap
                  key={item.title}
                  href={item.url}
                >
                  {item.title}
                </Button>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Grid container>
          <Grid item md={3} xs={8}>
            <Box
              sx={{
                position: 'relative',
                p: { xs: 3, md: 6 },
                pr: { md: 0 },
                top: 55,
              }}
            >
              <Typography
                component='h2'
                variant='h6'
                color='inherit'
                gutterBottom
              >
                {props.siteName}
              </Typography>
            </Box>
          </Grid>
          <Grid item md={9} className={styles.nav}>
            <Box
              sx={{
                position: 'relative',
                p: { xs: 2, md: 5 },
                pr: { md: 0 },
                top: 0,
                right: 0,
                overflow: 'auto',
                width: '100%',
              }}
            >
              <Toolbar
                component='nav'
                variant='dense'
                sx={{
                  justifycontent: 'space-between',
                  overflowX: 'auto',
                  overflow: 'hidden',
                  overflowWrap: 'break-word',
                }}
              >
                <Box
                  sx={{
                    display: { xs: 'none', sm: 'block' },
                    position: 'absolute',
                    top: '1rem',
                    right: '5rem',
                  }}
                >
                  {props.menu.map((item) => (
                    <Button
                      className={styles.link_settori}
                      color='inherit'
                      noWrap
                      key={item.title}
                      href={item.url}
                      sx={{
                        paddingLeft: '2rem',
                      }}
                    >
                      {item.title}
                    </Button>
                  ))}
                </Box>
              </Toolbar>
            </Box>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item md={2} />
          <Grid item md={5}>
            <Box
              sx={{
                position: 'relative',
                p: { xs: 3, md: 6 },
                pr: { md: 0 },
                top: props.height / 3 - 10 + 'vh',
              }}
            >
              <Typography
                component='h1'
                variant='h3'
                color='inherit'
                gutterBottom
              >
                {props.title}
              </Typography>
              <Typography component='h5' color='inherit' paragraph>
                {props.description}
              </Typography>
              {props.buttonUrl && (
                <Button
                  variant='contained'
                  size='large'
                  color='error'
                  href={props.buttonUrl}
                  className={styles.btlanding}
                  sx={{
                    marginTop: '1rem',
                    borderRadius: '2rem',
                    paddingLeft: '3rem',
                    paddingRight: '3rem',
                  }}
                >
                  {props.buttonText}
                </Button>
              )}
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )
}

LandingHero.defaultProps = {
  siteName: '',
  menu: menu,
  height: 80,
}
