import { api } from '@/shared/api';
import { UserReview, UserReviewsVariables } from '@/entities/user/types';

export const getUserReviews = async (
    data: UserReviewsVariables
): Promise<{ list: UserReview[] }> => {
    return (await api.get(`/reviews/list/${data.targetId}`)).data;
};
