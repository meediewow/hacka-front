import React from 'react';
import Box from '@mui/material/Box';
import { Header } from './components/header';
import { Footer } from './components/footer';
import type { DefaultLayoutProps } from './types';

export const DefaultLayout: React.FC<React.PropsWithChildren<DefaultLayoutProps>> = ({
    children,
}) => {
    return (
        <>
            <Header />

            <Box display="flex" flexDirection="column" flex={1} overflow="auto">
                {children}
            </Box>

            <Footer />
        </>
    );
};
