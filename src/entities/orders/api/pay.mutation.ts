import { useMutation } from '@tanstack/react-query';
import { api } from '@/shared/api';

export type PayMutationVariables = {
    orderId: string;
};

export type PayMutationData = {
    _id: string;
};

export const usePayMutation = () => {
    return useMutation({
        mutationFn: async (data: PayMutationVariables) => {
            return (await api.post('/sitter-order/pay', data)).data as PayMutationData;
        },
    });
};
