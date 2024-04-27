import { api } from '@/shared/api';
import { useQuery } from '@tanstack/react-query';
import { User } from '../types';
import { mapUserApiModelToUser } from '../mappers/user-api-model-to-user';

export const useGetUserQuery = (skip?: boolean) => {
    return useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const data = (await api.get('/user/me')).data;

            return mapUserApiModelToUser(data) as User;
        },
        retry: 0,
        enabled: !skip,
    });
};
