import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import styles from './NavBar.module.css'

// import { siteName, menu, logoUrl } from '/config/default'

const drawerWidth = 240

export default function DrawerAppBar({
  menu,
  siteName,
  logoUrl,
  bgcolor,
  drawerBgcolor,
  drawerTextColor,
  color,
  elevation,
  textShadow,
}) {
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant='h6' sx={{ my: 2, color: drawerTextColor }}>
        {logoUrl ? (
          <img src={logoUrl} style={{ width: '100%', padding: '1rem'}} />
        ) : (
          <h2>{siteName}</h2>
        )}
      </Typography>
      <List>
        {menu.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton
              sx={{ textAlign: 'center', color: drawerTextColor }}
              href={item.url}
            >
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  const container = undefined

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component='nav' sx={{ bgcolor: bgcolor }} elevation={elevation}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant='h6'
            component='div'
            sx={{ flexGrow: 1, textAlign: {xs: 'right', md: 'left'}, display: { xs: 'block', sm: 'block' } }}
          >
            {logoUrl ? (
              <img src={logoUrl} className={styles.logo} style={{ padding: '1rem', align: 'right'}} />
            ) : (
              <h2>{siteName}</h2>
            )}
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {menu.map((item) => (
              <Button
                key={item.title}
                className={styles.link}
                sx={{
                  color: { color },
                  textShadow: textShadow,
                  fontSize: '1.1rem',
                }}
                href={item.url}
              >
                {item.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component='nav'>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              bgcolor: drawerBgcolor,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  )
}

DrawerAppBar.defaultProps = {
  siteName: '',
  menu: [],
  logoUrl: '',
  bgcolor: 'transparent',
  drawerBgcolor: '#1289A7',
  drawerTextColor: '#fff',
  color: '#ccc',
  elevation: 0,
  textShadow: '', // '1px 1px 3px #000',
}
