'use client';
import { createTheme } from '@mui/material/styles';

const primary = {
  main: '#1C2434',
};

const theme = createTheme({
  palette: {
    primary,
  },
  typography: {
    fontFamily: 'var(--font-open-sans)',
  },
  components: {
    MuiListSubheader: {
      styleOverrides:{
        root:{
          backgroundColor: 'transparent',
          color: '#9D9D9D',
          fontWeight: 600
        }
      },
    },
    MuiListItemText:{
      styleOverrides:{
        root:{
          fontWeight: 600,
        }
      }
    },
    MuiDrawer: {
      styleOverrides:{
        paper: {
          backgroundColor: primary.main,
          color: '#fff',
          overflow: "hidden",
          transition: "width 200ms cubic-bezier(0.4, 0, 0.6, 1) 0ms",
        },
      }
    },
    MuiAppBar:{
      styleOverrides: {
        root:{
          backgroundColor: '#fff',
          color: primary.main
        }
      }
    },
    MuiPaper: {
      styleOverrides:{
        root: {
          boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;',
        }
      }
    }
  }
});

export default theme;