import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Logo } from '@/shared/ui/logo';
import { HeaderSC } from './styles';
import type { HeaderProps } from './types';

export const Header: React.FC<HeaderProps> = () => {
    return (
        <HeaderSC>
            <Box display="flex" alignItems="center" gap={0.5}>
                <Logo />
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Petcyfy
                </Typography>
            </Box>
            <Button variant="outlined">Стать хостом</Button>
        </HeaderSC>
    );
};
