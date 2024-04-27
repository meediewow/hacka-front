import React from 'react';
import { useUser } from '../context/use-user';
import { AuthLevel } from '@/entities/user/types';

import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

type Props = {
    children: React.ReactNode;
    authLevel?: AuthLevel;
};

export const AuthGuard: React.FC<Props> = ({ children, authLevel }) => {
    const navigate = useNavigate();

    const user = useUser();

    if (!user) {
        const registerHref =
            authLevel === 'sitter' ? '/register-sitter' : '/register-client';

        return (
            <Stack gap={1} height="100%" justifyContent="center">
                <Typography variant="body2" p={1} textAlign="center">
                    Для продолжения работы, пожалуйста авторизуйтесь или зарегистрируйтесь
                </Typography>

                <Stack gap={1} alignItems="center">
                    <Button
                        onClick={() => navigate('/login')}
                        variant="contained"
                        color="primary"
                        sx={{
                            width: '80%',
                        }}
                    >
                        Авторизация
                    </Button>

                    <Button
                        onClick={() => navigate(registerHref)}
                        variant="contained"
                        color="primary"
                        sx={{
                            width: '80%',
                        }}
                    >
                        Регистрация
                    </Button>
                </Stack>
            </Stack>
        );
    }

    if (authLevel && !user.isSitter) {
        navigate('/');

        return null;
    }

    return <>{children}</>;
};
