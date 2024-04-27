import React from 'react';
import { ViewRating } from '@/shared/ui/view-rating';
import { ContentCard } from '@/shared/ui/content-card';
import type { UserReviewsProps } from './types';

export const UserReviews: React.FC<UserReviewsProps> = () => {
    return (
        <ContentCard
            title="Отзывы"
            titleAdornment={<ViewRating rating={4.5} />}
        ></ContentCard>
    );
};
