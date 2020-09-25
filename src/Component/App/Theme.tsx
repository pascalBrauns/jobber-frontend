import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const Theme: React.FC = ({ children }) => (
  <ThemeProvider
    theme={createMuiTheme({
      palette: {
        type: 'dark',
        primary: {
          main: '#b38bf4'
        },
        secondary: {
          main: '#b38bf4'
        }
      },
      typography: {
        fontFamily: [
          'Roboto'
        ].join(',')
      }
    })}>
    {children}
  </ThemeProvider>
);

export default Theme;
