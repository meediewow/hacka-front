import { api } from '@/shared/api';
import { useMutation } from '@tanstack/react-query';

export type AddTariffMutationVariables = {
    category: number;
    pricePerDay: number;
};

export type AddTariffMutationData = {
    list: {
        category: number;
        pricePerDay: number;
    }[];
};

export const useAddTariffMutation = () => {
    return useMutation({
        mutationFn: async ({ category, pricePerDay }: AddTariffMutationVariables) => {
            return (
                await api.post('/tariffs/add', {
                    category,
                    pricePerDay,
                })
            ).data as AddTariffMutationData;
        },
    });
};
