import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
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
import Paper from '@mui/material/Paper'

import { siteName, menu, logoUrl } from '/config/default'

const drawerWidth = 240

export default function DrawerAppBar({
  menu,
  siteName,
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
        {siteName}
      </Typography>
      <Divider />
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
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            {siteName}
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {menu.map((item) => (
              <Button
                key={item.title}
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
      <Box component='main' sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  )
}

DrawerAppBar.defaultProps = {
  siteName: siteName,
  menu: menu,
  bgcolor: 'transparent',
  drawerBgcolor: '#0097e6',
  drawerTextColor: '#fff',
  color: '#ccc',
  elevation: 0,
  textShadow: '', // '1px 1px 3px #000',
}
