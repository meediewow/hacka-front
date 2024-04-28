import { useMutation } from '@tanstack/react-query';
import { api } from '@/shared/api';

export type ChangeStatusMutationVariables = {
    orderId: string;
    status: number;
};

export type ChangeStatusMutationData = {
    token: string;
};

export const useChangeStatusMutation = () => {
    return useMutation({
        mutationFn: async (data: ChangeStatusMutationVariables) => {
            return (await api.post('/sitter-order/change-status', data))
                .data as ChangeStatusMutationData;
        },
    });
};
