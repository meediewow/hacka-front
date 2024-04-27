import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { ContentCard } from '@/shared/ui/content-card';
import type { SitterListProps } from './types';

const sitters = Array.from({ length: 10 }).map((_, index) => ({
    id: String(index),
}));

export const SitterList: React.FC<SitterListProps> = () => {
    return (
        <ContentCard title="Список ситтеор">
            <Stack spacing={0.5} divider={<Divider />}>
                {sitters.map((sitter, index) => (
                    <Box key={index} sx={{ p: 1 }}>
                        {sitter.id}
                    </Box>
                ))}
            </Stack>
        </ContentCard>
    );
};
