import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import { enqueueSnackbar } from 'notistack';
import { Link, useNavigate } from 'react-router-dom';
import { LoginForm, LoginFormData } from '@/entities/auth/forms/login-form';
import { useLoginMutation } from '@/entities/user/api/user-login.mutation';
import { AuthContext } from '@/features/auth';
import Typography from '@mui/material/Typography';
import { ContentCard } from '@/shared/ui/content-card';

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
        <Box sx={{ mt: 1.5 }}>
            <ContentCard title="Petcyfy - Вход">
                <LoginForm onSubmit={onSubmit} />

                <Typography variant="body2" mt={2}>
                    Нет аккаунта? <Link to="/register-client">Зарегистрируйтесь</Link>
                </Typography>
            </ContentCard>
        </Box>
    );
};
