import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import type { ContentCardProps } from './types';

export const ContentCard: React.FC<React.PropsWithChildren<ContentCardProps>> = ({
    title,
    children,
    titleAdornment,
    sx,
}) => {
    return (
        <Paper component={Box} elevation={0} p={1} sx={sx}>
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
