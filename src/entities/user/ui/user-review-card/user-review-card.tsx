import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import type { UserReviewCardProps } from './types';

export const UserReviewCard: React.FC<UserReviewCardProps> = ({ review }) => {
    return (
        <Box display="grid" gridTemplateColumns="auto 1fr" gap={0.5}>
            <Avatar src={review.photo} alt={review.name} />
            <Stack spacing={0.5}>
                <Box display="flex" flexDirection="column">
                    <Box display="flex" alignItems="center" gap={1}>
                        <Typography variant="h6">{review.name}</Typography>
                        <Typography variant="body2" color="text.secondary">
                            {review.date}
                        </Typography>
                    </Box>
                    <Rating defaultValue={review.rate} max={5} size="small" readOnly />
                </Box>
                <Typography variant="body2">{review.text}</Typography>
            </Stack>
        </Box>
    );
};
