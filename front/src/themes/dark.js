import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
      light: '#c3e9ff',
      dark: '#5d99c6',
      contrastText: '#0f1724',
    },
    secondary: {
      main: '#f48fb1',
      light: '#ffbbca',
      dark: '#bf5f82',
      contrastText: '#0f1724',
    },
    background: {
      default: '#09111eff',
      paper: '#111318',
    },
    text: {
      primary: '#e6eef8',
      secondary: '#a8b3c7',
    },
    divider: 'rgba(255,255,255,0.12)',
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: '#02153aff',
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: 64,
        },
      },
    },
  },
});

export default darkTheme;