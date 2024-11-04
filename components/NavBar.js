import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const drawerWidth = 240;

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
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box 
      onClick={handleDrawerToggle} 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        textAlign: 'center', 
        p: 4 
      }}
    >
      <Typography variant="h6" className={`my-4 ${drawerTextColor}`}>
        {logoUrl ? (
          <img src={logoUrl} className="max-w-full h-auto mx-auto" alt="logo" />
        ) : (
          <h2>{siteName}</h2>
        )}
      </Typography>
      <List>
        {menu.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton className="text-center text-white hover:bg-gray-700" href={item.url}>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" className="bg-blue-600 relative" elevation={elevation}>
        <Toolbar className="flex justify-between items-center h-16 mx-auto w-full max-w-screen-lg">
          {/* Logo a sinistra */}
          <div className="flex items-center">
            {logoUrl ? (
              <img src={logoUrl} className="w-12 h-auto" alt="logo" />
            ) : (
              <h2 className="text-white">{siteName}</h2>
            )}
          </div>
          {/* Testi a destra */}
          <Box className="hidden sm:flex space-x-4">
            {menu.map((item) => (
              <Button
                key={item.title}
                className="text-white hover:text-gray-300 font-medium"
                href={item.url}
              >
                {item.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
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
  );
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
};
