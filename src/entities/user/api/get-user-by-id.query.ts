import { api } from '@/shared/api';
import { useQuery } from '@tanstack/react-query';
import { User } from '../types';
import { mapUserApiModelToUser } from '../mappers/user-api-model-to-user';

export const useGetUserByQuery = (userId?: string) => {
    return useQuery({
        queryKey: ['user', userId],
        queryFn: async () => {
            const data = (
                await api.get('/user', {
                    params: {
                        userId,
                    },
                })
            ).data;

            return mapUserApiModelToUser(data) as User;
        },
        retry: 0,
        enabled: Boolean(userId),
    });
};
