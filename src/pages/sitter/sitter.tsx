import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { SitterAboutMe } from '@/features/sitter/sitter-about-me';

export const Sitter: React.FC = () => {
    return (
        <Box p={0.5}>
            <Stack spacing={0.5}>
                <SitterAboutMe />
            </Stack>
        </Box>
    );
};
