'use client';
import { ReactNode, useState } from 'react';
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  ThemeProvider,
  Typography,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MenuIcon from '@mui/icons-material/Menu';
import themes from './styles/theme';
import { useTheme } from '@mui/material/styles';

const drawerWidth = 240;

function Base({children}: {children: ReactNode}) {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  const drawer = (
    <Box
      sx={{
        width: drawerWidth,
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
      }}
    >
      <Box sx={theme.mixins.toolbar} />
      <Divider />
      <List>
        {['Info'].map((text) => (
          <ListItem
            button
            key={text}
            sx={{
              width: drawerWidth,
              backgroundColor: theme.palette.primary.main,
              '&:hover': {
                backgroundColor: theme.palette.primary.light,
              },
            }}
          >
            <ListItemIcon>
              <DashboardIcon
                sx={{ color: theme.palette.primary.contrastText }}
              />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const appBar = (
    <AppBar position="fixed" sx={{ width: '100%' }}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap />
      </Toolbar>
    </AppBar>
  );

  const drawerBox = (
    <Box
      component='nav'
      textAlign='center'
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="folders"
      display='contents'
    >
      <Drawer
        variant="temporary"
        anchor='left'
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: theme.palette.primary.main,
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
        ModalProps={{ keepMounted: true }}
      >
        {drawer}
      </Drawer>
    </Box>
  );

  return (
    <Box
      sx={{
        color: theme.palette.primary.contrastText,
        display: 'flex',
        maxHeight: '100vh',
      }}
    >
      <CssBaseline />
      {appBar}
      {drawerBox}
      {children}
    </Box>
  );
}

export default function Layout({children}: {children: ReactNode}) {
  return (
    <html lang="en">
      <ThemeProvider theme={themes}>
        <head>
          {/* PWA primary color */}
          <meta name="theme-color" content={themes.palette.primary.main} />
          {/* eslint-disable-next-line @next/next/no-page-custom-font */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </head>
        <body>
          <CssBaseline />
          <Base>{children}</Base>
        </body>
    </ThemeProvider>
    </html>
  );
}
