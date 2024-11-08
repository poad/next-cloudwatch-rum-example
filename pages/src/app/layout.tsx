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
  ListItemButton,
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
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { Roboto } from 'next/font/google';
import { AwsRum, AwsRumConfig } from 'aws-rum-web';

const drawerWidth = 240;

function Base({ children }: { children: ReactNode }) {
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
          <ListItemButton
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
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  const appBar = (
    <AppBar position='fixed' sx={{ width: '100%' }}>
      <Toolbar>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          edge='start'
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' noWrap />
      </Toolbar>
    </AppBar>
  );

  const drawerBox = (
    <Box
      component='nav'
      textAlign='center'
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label='folders'
      display='contents'
    >
      <Drawer
        variant='temporary'
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

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export default function Layout({ children }: { children: ReactNode }) {
  try {
    const config: AwsRumConfig = {
      sessionSampleRate: 1,
      identityPoolId: 'us-west-2:10814a26-356a-4508-ab85-92191012e076',
      endpoint: 'https://dataplane.rum.us-west-2.amazonaws.com',
      telemetries: ['performance','errors','http'],
      allowCookies: true,
      enableXRay: false,
    };

    const APPLICATION_ID = 'db4f32a7-fbfb-421d-a626-c7be4cd16cff';
    const APPLICATION_VERSION = '1.0.0';
    const APPLICATION_REGION = 'us-west-2';

    new AwsRum(
      APPLICATION_ID,
      APPLICATION_VERSION,
      APPLICATION_REGION,
      config,
    );
  } catch {
    // Ignore errors thrown during CloudWatch RUM web client initialization
  }

  return (
    <html lang='en'>
      <head>
        {/* PWA primary color */}
        <meta name='theme-color' content={themes.palette.primary.main} />
      </head>
      <body className={roboto.variable}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={themes}>
            <CssBaseline />
            <Base>
              {children}
            </Base>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
