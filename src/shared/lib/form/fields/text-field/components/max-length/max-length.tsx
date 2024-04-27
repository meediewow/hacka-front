import React from 'react';
import Box from '@mui/material/Box';
import type { MaxLengthProps } from './types';

export const MaxLength: React.FC<React.PropsWithChildren<MaxLengthProps>> = ({
    value,
    maxlength,
    children,
}) => {
    const length = value?.length || 0;

    return (
        <Box display="grid" gridTemplateColumns="1fr auto" gap={0.5}>
            <span>{children}</span>
            <Box component="span" color="text.secondary">
                {length}/{maxlength}
            </Box>
        </Box>
    );
};
