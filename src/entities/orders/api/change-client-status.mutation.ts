import { useMutation } from '@tanstack/react-query';
import { api } from '@/shared/api';

export type ChangeClientStatusMutationVariables = {
    orderId: string;
    status: number;
};

export type ChangeClientStatusMutationData = {
    token: string;
};

export const useChangeClientStatusMutation = () => {
    return useMutation({
        mutationFn: async (data: ChangeClientStatusMutationVariables) => {
            return (await api.post('/client-order/change-status', data))
                .data as ChangeClientStatusMutationData;
        },
    });
};
