import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import type { ContentCardProps } from './types';

export const ContentCard: React.FC<React.PropsWithChildren<ContentCardProps>> = ({
    title,
    children,
}) => {
    return (
        <Paper component={Box} elevation={0} p={1}>
            {title && (
                <Typography variant="h5" pb={1}>
                    {title}
                </Typography>
            )}
            {children}
        </Paper>
    );
};
