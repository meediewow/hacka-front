import { api } from '@/shared/api';
import { useMutation } from '@tanstack/react-query';

export type AddRateMutationVariables = {
    targetId: string;
    text?: string;
    rate?: number;
};

export type AddRateMutationData = {
    success: boolean;
};

export const useAddRateMutation = () => {
    return useMutation({
        mutationFn: async ({ targetId, text, rate }: AddRateMutationVariables) => {
            return (
                await api.post('/reviews/add', {
                    targetId,
                    text,
                    rate,
                })
            ).data as AddRateMutationData;
        },
    });
};
