import React, { useContext } from 'react';
import { enqueueSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { RegisterForm, RegisterFormData } from '@/entities/user/forms/register-form';
import Stack from '@mui/material/Stack';
import { useRegisterMutation } from '@/entities/user/api/user-register.mutation';
import Typography from '@mui/material/Typography';
import { AuthContext } from '@/features/auth';

export const RegisterClient: React.FC = () => {
    const navigate = useNavigate();

    const { setToken } = useContext(AuthContext);

    const mutation = useRegisterMutation();

    const onSubmit = async (data: RegisterFormData) => {
        try {
            const { token } = await mutation.mutateAsync({ data, role: 'client' });
            if (token) {
                setToken(token);
            }

            navigate('/');
        } catch (error) {
            enqueueSnackbar((error as { message: string }).message, { variant: 'error' });
        }
    };

    return (
        <Stack width="100%" p={2} justifyContent="center">
            <Typography variant="h5" mb={1.5}>
                Зарегистрироваться
            </Typography>

            <RegisterForm authLevel="client" onSubmit={onSubmit} />
        </Stack>
    );
};
