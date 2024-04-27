import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { UserProfile } from '@/features/user/user-profile';
import { SitterAboutMe } from '@/features/sitter/sitter-about-me';
import { SitterBooking } from '@/features/sitter/sitter-booking';

export const Sitter: React.FC = () => {
    return (
        <Box p={0.5}>
            <Stack spacing={0.5}>
                <UserProfile />
                <SitterAboutMe />
                <SitterBooking />
            </Stack>
        </Box>
    );
};
