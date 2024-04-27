import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import { enqueueSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { LoginForm, LoginFormData } from '@/entities/auth/forms/login-form';
import { useLoginMutation } from '@/entities/user/api/user-login.mutation';
import { AuthContext } from '@/features/auth';
import Typography from '@mui/material/Typography';

export const Login: React.FC = () => {
    const navigate = useNavigate();

    const mutation = useLoginMutation();

    const { setToken } = useContext(AuthContext);

    const onSubmit = async (data: LoginFormData) => {
        try {
            const result = await mutation.mutateAsync({
                identifier: data.login,
                password: data.password,
            });

            if (result.token) {
                setToken(result.token);

                navigate('/');
            }
        } catch (error) {
            enqueueSnackbar((error as { message: string }).message, { variant: 'error' });
        }
    };

    return (
        <Box width={500} p={2}>
            <Typography variant="h5" mb={1.5}>
                Petcyfy - Вход
            </Typography>

            <LoginForm onSubmit={onSubmit} />
        </Box>
    );
};
