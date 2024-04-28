import React, { useContext } from 'react';
import { enqueueSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { RegisterForm, RegisterFormData } from '@/entities/user/forms/register-form';
import { useRegisterMutation } from '@/entities/user/api/user-register.mutation';
import { AuthContext } from '@/features/auth';
import Box from '@mui/material/Box';
import { ContentCard } from '@/shared/ui/content-card';

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
        <Box sx={{ mt: 1.5 }}>
            <ContentCard title="Зарегистрироваться">
                <RegisterForm authLevel="client" onSubmit={onSubmit} />
            </ContentCard>
        </Box>
    );
};
