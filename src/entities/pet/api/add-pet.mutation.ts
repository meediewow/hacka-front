import { api } from '@/shared/api';
import { useMutation } from '@tanstack/react-query';

export type AddPetMutationVariables = {
    pets: { name: string; type: number; age: number; comment: string }[];
};

export type AddPetMutationData = {
    _id: string;
    name: string;
    type: number;
    age: number;
    comment: string;
}[];

export const useAddPetMutation = () => {
    return useMutation({
        mutationFn: async ({ pets }: AddPetMutationVariables) => {
            return (
                await api.post('/pet', {
                    pets,
                })
            ).data as AddPetMutationData;
        },
    });
};
