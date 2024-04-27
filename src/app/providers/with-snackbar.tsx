import React from 'react';
import { SnackbarProvider } from 'notistack';

export const withSnackbar = (Component: React.FC<React.PropsWithChildren>) => {
    const WithSnackbar: React.FC<React.PropsWithChildren> = (props) => {
        return (
            <SnackbarProvider>
                <Component {...props} />
            </SnackbarProvider>
        );
    };
    return WithSnackbar;
};
