import { api } from '@/shared/api';
import { useQuery } from '@tanstack/react-query';
import { User } from '../types';

export const useGetUserQuery = (skip?: boolean) => {
    return useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            return (await api.get('/user/me')).data as User; // to fix type, add mapping
        },
        retry: 0,
        enabled: !skip,
    });
};
