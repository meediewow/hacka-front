import { api } from '@/shared/api';
import { useQuery } from '@tanstack/react-query';
import { OrderAM } from '../types';
import { AuthLevel } from '@/entities/user/types';

export type GetOrderQueryVariables = {
    id: string;
};

export type GetOrderQueryData = OrderAM;

export const useGetOrderQuery = (type: AuthLevel, id?: string) => {
    return useQuery({
        queryKey: [type === 'sitter' ? 'sitter-order' : 'client-order', id],
        queryFn: async () => {
            return (
                await api.get(
                    type === 'sitter' ? `/sitter-order/${id}` : `/client-order/${id}`
                )
            ).data as GetOrderQueryData;
        },
        enabled: Boolean(id),
    });
};
