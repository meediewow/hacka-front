import React from 'react';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { ViewRating } from '@/shared/ui/view-rating';
import { ContentCard } from '@/shared/ui/content-card';
import { UserReviewCard } from '@/entities/user/ui/user-review-card';
import type { UserReviewsProps } from './types';

const reviews = Array.from({ length: 10 }, (_, index) => ({
    _id: String(index),
}));

export const UserReviews: React.FC<UserReviewsProps> = () => {
    return (
        <ContentCard title="Отзывы" titleAdornment={<ViewRating rating={4.5} />}>
            <Stack spacing={1} divider={<Divider />}>
                {reviews.map((review) => (
                    <UserReviewCard review={review} />
                ))}
            </Stack>
        </ContentCard>
    );
};
