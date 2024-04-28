import { api } from '@/shared/api';
import { useQuery } from '@tanstack/react-query';
import { OrderAM } from '../types';

export type GetOrdersQueryVariables = {
    //
};

export type GetOrdersQueryData = OrderAM[];

export const useGetSitterOrdersQuery = () => {
    return useQuery({
        queryKey: ['sitter-orders'],
        queryFn: async (variables: GetOrdersQueryVariables) => {
            return (await api.get('/sitter-order', variables)).data as GetOrdersQueryData;
        },
    });
};

export const useGetClientOrdersQuery = () => {
    return useQuery({
        queryKey: ['client-orders'],
        queryFn: async (variables: GetOrdersQueryVariables) => {
            return (await api.get('/client-order', variables)).data as GetOrdersQueryData;
        },
    });
};
