import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@/shared/themes';

export const withMuiTheme = (Component: React.FC<React.PropsWithChildren>) => {
    const WithMuiTheme: React.FC<React.PropsWithChildren> = (props) => {
        return (
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Component {...props} />
            </ThemeProvider>
        );
    };
    return WithMuiTheme;
};
