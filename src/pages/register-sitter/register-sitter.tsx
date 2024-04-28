import React, { useContext } from 'react';
import { enqueueSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { RegisterForm, RegisterFormData } from '@/entities/user/forms/register-form';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useRegisterMutation } from '@/entities/user/api/user-register.mutation';
import { useUserUpdateMutation } from '@/entities/user/api/user-update.mutation';
import { AuthContext, useUser } from '@/features/auth';
import { MakeSitterForm, MakeSitterFormData } from '@/entities/user/forms/make-sitter';
import { useQueryClient } from '@tanstack/react-query';

export const RegisterSitter: React.FC = () => {
    const user = useUser();

    const navigate = useNavigate();

    const query = useQueryClient();

    const mutation = useRegisterMutation();
    const updateMutation = useUserUpdateMutation();

    const { setToken } = useContext(AuthContext);

    const onSubmit = async (data: RegisterFormData) => {
        try {
            const { token } = await mutation.mutateAsync({ data, role: 'sitter' });
            if (token) {
                setToken(token);
            }

            navigate('/');
        } catch (error) {
            enqueueSnackbar((error as { message: string }).message, { variant: 'error' });
        }
    };

    const onMakeSitterSubmit = async (data: MakeSitterFormData) => {
        try {
            const { _id } = await updateMutation.mutateAsync({
                role: 2,
                profile: {
                    tariff:
                        data?.tariffs?.map((tariff) => ({
                            category: tariff.category.id,
                            pricePerDay: tariff.pricePerDay ?? 0,
                        })) ?? [],
                    address: {
                        city: data.address?.name ?? '',
                    },
                },
                coordinates: data.address
                    ? [data.address.lng, data.address.lat]
                    : undefined,
            });

            if (_id) {
                await query.invalidateQueries({ queryKey: ['currentUser'] });

                enqueueSnackbar(
                    'Вы успешно стали ситтером! Ожидайте поступления заказов!',
                    { variant: 'success' }
                );
            }

            navigate('/profile');
        } catch (error) {
            enqueueSnackbar((error as { message: string }).message, { variant: 'error' });
        }
    };

    return (
        <Stack width="100%" p={2} justifyContent="center">
            <Typography variant="h5" mb={1.5}>
                Стать ситтером
            </Typography>

            {user ? (
                <MakeSitterForm onSubmit={onMakeSitterSubmit} />
            ) : (
                <RegisterForm authLevel="sitter" onSubmit={onSubmit} />
            )}
        </Stack>
    );
};
