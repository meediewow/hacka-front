import React from 'react';
import Box from '@mui/material/Box';
import type { UserReviewCardProps } from './types';

export const UserReviewCard: React.FC<UserReviewCardProps> = () => {
    return <Box display="grid" gridTemplateColumns="auto 1fr" gap={0.5}></Box>;
};
