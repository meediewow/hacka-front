import React from 'react';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { useQuery } from '@tanstack/react-query';
import { ViewRating } from '@/shared/ui/view-rating';
import { ContentCard } from '@/shared/ui/content-card';
import { UserReviewCard } from '@/entities/user/ui/user-review-card';
import { getUserReviews } from '@/entities/user/api/get-user-reviews';
import type { UserReviewsProps } from './types';

export const UserReviews: React.FC<UserReviewsProps> = ({ targetId, rate }) => {
    const { data } = useQuery({
        queryKey: ['userReviews', targetId],
        queryFn: () => getUserReviews({ targetId }),
        enabled: Boolean(targetId),
    });

    return (
        <ContentCard
            title="Отзывы"
            titleAdornment={Boolean(rate) && <ViewRating rating={4.5} />}
        >
            <Stack spacing={1} divider={<Divider />}>
                {(data?.list ?? []).map((review, index) => (
                    <UserReviewCard key={index} review={review} />
                ))}
            </Stack>
        </ContentCard>
    );
};
