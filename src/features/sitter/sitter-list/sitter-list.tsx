import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import type { Sitter } from '@/entities/sitter/types';
import type { SitterListProps } from './types';

const sitters = Array.from({ length: 10 }).map((_, index) => ({
    id: String(index),
})) as Sitter[];

export const SitterList: React.FC<SitterListProps> = () => {
    return (
        <Paper component={Box} elevation={0} p={1}>
            <Typography variant="subtitle1">Список ситтеор</Typography>
            <Stack spacing={0.5} p={1}>
                {sitters.map((sitter, index) => (
                    <Box key={index} sx={{ p: 1 }}>
                        {sitter.id}
                    </Box>
                ))}
            </Stack>
        </Paper>
    );
};
