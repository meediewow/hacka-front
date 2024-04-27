import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Logo } from '@/shared/ui/logo';
import { HeaderSC } from './styles';
import type { HeaderProps } from './types';
import { useUser } from '@/features/auth';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';

export const Header: React.FC<HeaderProps> = () => {
    const user = useUser();

    return (
        <HeaderSC>
            <Box display="flex" alignItems="center" gap={0.5}>
                <Logo />

                <Typography
                    variant="h6"
                    component={Link}
                    to="/"
                    sx={{
                        color: (theme) => theme.palette.primary.main,
                        textDecoration: 'none',
                    }}
                >
                    Petcyfy
                </Typography>
            </Box>

            <Stack direction="row" gap={0.5}>
                {!user?.isSitter && (
                    <Button component={Link} to="/register-sitter" variant="outlined">
                        Стать ситтером
                    </Button>
                )}

                {!user ? (
                    <Button component={Link} to="/login" variant="outlined">
                        Войти
                    </Button>
                ) : (
                    <Button component={Link} to="/profile" variant="outlined">
                        Профиль
                    </Button>
                )}
            </Stack>
        </HeaderSC>
    );
};
