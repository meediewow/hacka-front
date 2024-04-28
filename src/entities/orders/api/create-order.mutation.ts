import { useMutation } from '@tanstack/react-query';
import { api } from '@/shared/api';
import { CreateOrderData, CreateOrderVariables } from '@/entities/orders/types';

export const useCreateOrderMutation = () => {
    return useMutation({
        mutationFn: async (data: CreateOrderVariables) => {
            return (await api.post('/client-order/create', data)).data as CreateOrderData;
        },
    });
};
