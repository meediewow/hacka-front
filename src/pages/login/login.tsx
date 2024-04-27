import React from 'react';
import Box from '@mui/material/Box';
import { enqueueSnackbar } from 'notistack';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { sleep } from '@/shared/utils/sleep';
import { LoginForm, LoginFormData } from '@/entities/auth/forms/login-form';

export const Login: React.FC = () => {
    const navigate = useNavigate();

    const mutation = useMutation({
        mutationFn: async (data: LoginFormData) => {
            await sleep(1500);
            return Promise.reject({ message: 'login error', data });
        },
    });

    const onSubmit = async (data: LoginFormData) => {
        try {
            await mutation.mutateAsync({ login: data.login, password: data.password });
            navigate('/');
        } catch (error) {
            enqueueSnackbar((error as { message: string }).message, { variant: 'error' });
        }
    };

    return (
        <Box width={500} p={2}>
            <LoginForm onSubmit={onSubmit} />
        </Box>
    );
};
