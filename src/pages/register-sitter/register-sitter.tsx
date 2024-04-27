import React from 'react';
import { enqueueSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { RegisterForm, RegisterFormData } from '@/entities/user/forms/register-form';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useRegisterMutation } from '@/entities/user/api/user-register.mutation';

export const RegisterSitter: React.FC = () => {
    const navigate = useNavigate();

    const mutation = useRegisterMutation();

    const onSubmit = async (data: RegisterFormData) => {
        try {
            await mutation.mutateAsync({ data, role: 'sitter' });
            navigate('/');
        } catch (error) {
            enqueueSnackbar((error as { message: string }).message, { variant: 'error' });
        }
    };

    return (
        <Stack width="100%" p={2} justifyContent="center">
            <Typography variant="h5" mb={1.5}>
                Стать ситтером
            </Typography>

            <RegisterForm authLevel="sitter" onSubmit={onSubmit} />
        </Stack>
    );
};
