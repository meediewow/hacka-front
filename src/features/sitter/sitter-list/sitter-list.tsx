import React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import type { Sitter } from '@/entities/sitter/types';
import type { SitterListProps } from './types';

const sitters = Array.from({ length: 10 }).map((_, index) => ({
    id: String(index),
})) as Sitter[];

export const SitterList: React.FC<SitterListProps> = () => {
    return (
        <Stack spacing={0.5} p={1}>
            {sitters.map((sitter, index) => (
                <Paper key={index} sx={{ p: 1 }}>
                    {sitter.id}
                </Paper>
            ))}
        </Stack>
    );
};
