'use client';
import { createTheme } from '@mui/material/styles';
import { green } from '@mui/material/colors';

// A theme with custom primary and secondary color.
// It's optional.

const options = {
  palette: {
    primary: {
      main: '#2d2d2d',
      text: '#fff',
    },
    secondary: {
      light: green[300],
      main: green[500],
      dark: green[700],
    },
    typography: {
      useNextVariants: true,
      fontFamily: 'var(--font-roboto)',
    },
  },
  drawerWidth: 240,
};

const theme = createTheme(options);
export type Theme = typeof theme;
export default theme;
