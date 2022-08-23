import { createTheme } from '@mui/material';

export const defaultTheme = createTheme({
  spacing: 6,
  palette: {
    mode: 'light',
    primary: {
      main: '#03A9F4',
    },
    secondary: {
      main: '#EC407A',
    },
  },
  typography: {
    h1: {
      fontSize: 40,
      fontWeight: 700,
    },
    h2: {
      fontSize: 30,
      fontWeight: 700,
    },
    h5: {
      fontSize: 20,
      fontWeight: 500,
    },
    h6: {
      fontSize: 15,
      fontWeight: 700,
    },
    body1: {
      fontSize: 12,
      fontWeight: 500,
    },
    body2: {
      fontSize: 8,
      fontWeight: 400,
    },
  },
});

