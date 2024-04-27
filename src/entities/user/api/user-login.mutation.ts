import { api } from '@/shared/api';
import { useMutation } from '@tanstack/react-query';

export type LoginMutationVariables = {
    identifier: string;
    password: string;
};

export type LoginMutationData = {
    token: string;
};

export const useLoginMutation = () => {
    return useMutation({
        mutationFn: async ({ identifier, password }: LoginMutationVariables) => {
            return (
                await api.post('/user/auth', {
                    identifier,
                    password,
                })
            ).data as LoginMutationData;
        },
    });
};
