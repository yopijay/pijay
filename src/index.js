// Libraries
import React from 'react';
import { createRoot } from 'react-dom/client';
import { createTheme, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

// Assets
import './assets/fonts/font.css';

//Layouts
import Core from './Core';

const pageTheme = createTheme({
    typography: {
        fontFamily: [
            '-apple-system',
            'Gilroy Light'
        ]
    },
    palette: {
        primary: {
            main: '#2f3640'
        }, 
        secondary: {
            main: '#353b48'
        }
    }
});

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<React.StrictMode>
    <ThemeProvider theme= { pageTheme }>
        <CssBaseline />
        <Core />
    </ThemeProvider>
</React.StrictMode>);