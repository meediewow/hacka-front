import React from 'react';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { ContentCard } from '@/shared/ui/content-card';
import { SitterCard } from '@/entities/sitter/ui/sitter-card';
import type { SitterListProps } from './types';

const sitters = Array.from({ length: 10 }).map((_, index) => ({
    id: String(index),
}));

export const SitterList: React.FC<SitterListProps> = () => {
    return (
        <ContentCard title="Список ситтеор">
            <Stack spacing={1} divider={<Divider />}>
                {sitters.map((sitter, index) => (
                    <SitterCard key={index} id={sitter.id} />
                ))}
            </Stack>
        </ContentCard>
    );
};
