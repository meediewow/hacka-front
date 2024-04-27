import React from 'react';
import { enqueueSnackbar } from 'notistack';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { sleep } from '@/shared/utils/sleep';
import { RegisterForm, RegisterFormData } from '@/entities/user/forms/register-form';
import { useUser } from '@/features/auth';
import Stack from '@mui/material/Stack';

export const RegisterSitter: React.FC = () => {
    const user = useUser();

    const navigate = useNavigate();

    const mutation = useMutation({
        mutationFn: async (data: RegisterFormData) => {
            await sleep(1500);
            return Promise.reject({ message: 'login error', data });
        },
    });

    const onSubmit = async (data: RegisterFormData) => {
        try {
            await mutation.mutateAsync({ login: data.login, password: data.password });
            navigate('/');
        } catch (error) {
            enqueueSnackbar((error as { message: string }).message, { variant: 'error' });
        }
    };

    return (
        <Stack width="100%" p={2} justifyContent="center">
            <RegisterForm
                isFirstRegister={!user}
                authLevel="sitter"
                onSubmit={onSubmit}
            />
        </Stack>
    );
};
