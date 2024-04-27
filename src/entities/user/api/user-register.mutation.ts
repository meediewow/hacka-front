import { api } from '@/shared/api';
import { useMutation } from '@tanstack/react-query';
import { AuthLevel } from '../types';
import { RegisterFormData } from '../forms/register-form';

export type RegisterMutationVariables = {
    data: RegisterFormData;
    role: AuthLevel;
};

export type RegisterMutationData = {
    token: string;
};

export const useRegisterMutation = () => {
    return useMutation({
        mutationFn: async ({ data, role }: RegisterMutationVariables) => {
            return (
                await api.post('/user/register', {
                    identifier: data.login,
                    password: data.password,

                    role: role === 'client' ? 1 : 2,

                    pets: data.pets?.map((pet) => ({
                        name: pet.name,
                        type: pet.category.id,
                        age: pet.age,
                        comment: pet.comment,
                    })),

                    profile: {
                        name: data.name,
                        // address: {
                        //     country: data.country,
                        //     city: data.city,
                        // },
                        communication: {
                            phone: data.phone,
                        },
                        tariff: data.tariffs?.map((tariff) => ({
                            category: tariff.category.id,
                            pricePerDay: tariff.pricePerDay,
                        })),
                    },
                })
            ).data as RegisterMutationData;
        },
    });
};
