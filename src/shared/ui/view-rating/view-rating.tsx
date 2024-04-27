import React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import type { ViewRatingProps } from './types';

export const ViewRating: React.FC<ViewRatingProps> = ({ rating }) => {
    return (
        <Box display="flex" gap={0.5} alignItems="center">
            <Rating defaultValue={1} max={1} size="small" readOnly />
            <Typography>{rating}</Typography>
        </Box>
    );
};
