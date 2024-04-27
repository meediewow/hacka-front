import React from 'react';
import Box from '@mui/material/Box';
import type { AuthLayoutProps } from './types';

export const AuthLayout: React.FC<React.PropsWithChildren<AuthLayoutProps>> = ({
    children,
}) => {
    return (
        <Box display="flex" alignItems="center" justifyContent="center" minHeight="100%">
            {children}
        </Box>
    );
};
