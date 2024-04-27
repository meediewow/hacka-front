import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import type { ContentCardProps } from './types';
import Stack from '@mui/material/Stack';

export const ContentCard: React.FC<React.PropsWithChildren<ContentCardProps>> = ({
    title,
    children,
    titleAdornment,
}) => {
    return (
        <Paper component={Box} elevation={0} p={1}>
            {title && (
                <Stack direction="row" justifyContent="space-between">
                    <Typography variant="h5" pb={1}>
                        {title}
                    </Typography>

                    {titleAdornment}
                </Stack>
            )}

            {children}
        </Paper>
    );
};
