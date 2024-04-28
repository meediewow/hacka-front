import { api } from '@/shared/api';
import { useQuery } from '@tanstack/react-query';
import { OrderAM } from '../types';
import { AuthLevel } from '@/entities/user/types';

export type GetOrdersQueryVariables = {
    //
};

export type GetOrdersQueryData = OrderAM[];

export const useGetOrdersQuery = (type: AuthLevel) => {
    return useQuery({
        queryKey: [type === 'sitter' ? 'sitter-orders' : 'client-orders'],
        queryFn: async () => {
            return (
                await api.get(
                    type === 'sitter' ? '/sitter-order/orders' : '/client-order/orders'
                )
            ).data as GetOrdersQueryData;
        },
    });
};
