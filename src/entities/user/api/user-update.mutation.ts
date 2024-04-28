import { api } from '@/shared/api';
import { useMutation } from '@tanstack/react-query';

export type UserUpdateMutationVariables = {
    about?: string;
    profile?: {
        name?: string;
        photo?: string;
        address?: {
            country: string;
            city: string;
        };
        ordersCount?: number;
        communication?: {
            phone: string;
        };
        tariff?: {
            category: number;
            pricePerDay: number;
        }[];
    };
    coordinates?: number[];
    role?: number; // 1 client, 2 sitter
};

export type UserUpdateMutationData = {
    _id: string;
};

export const useUserUpdateMutation = () => {
    return useMutation({
        mutationFn: async (variables: UserUpdateMutationVariables) => {
            return (await api.post('/user/update', variables))
                .data as UserUpdateMutationData;
        },
    });
};
