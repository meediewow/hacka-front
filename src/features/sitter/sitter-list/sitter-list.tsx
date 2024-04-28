import React from 'react';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { ContentCard } from '@/shared/ui/content-card';
import { SitterCard } from '@/entities/sitter/ui/sitter-card';
import type { SitterListProps } from './types';

export const SitterList: React.FC<SitterListProps> = ({ items }) => {
    return (
        <ContentCard title="Список ситтеор">
            <Stack spacing={1} divider={<Divider />}>
                {items.map((sitter, index) => (
                    <SitterCard key={index} sitter={sitter} />
                ))}
            </Stack>
        </ContentCard>
    );
};
