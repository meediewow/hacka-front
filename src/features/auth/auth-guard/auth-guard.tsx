import React from 'react';
import { useUser } from '../context/use-user';
import { AuthLevel } from '@/entities/user/types';

import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

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
            <Stack height="100%" alignItems="center" justifyContent="center" gap={1}>
                <Button
                    onClick={() => navigate('/login')}
                    variant="contained"
                    color="primary"
                    sx={{
                        width: '80%',
                    }}
                >
                    Login
                </Button>

                <Button
                    onClick={() => navigate(registerHref)}
                    variant="contained"
                    color="primary"
                    sx={{
                        width: '80%',
                    }}
                >
                    Register
                </Button>
            </Stack>
        );
    }

    if (authLevel && !user.isSitter) {
        navigate('/');

        return null;
    }

    return <>{children}</>;
};
