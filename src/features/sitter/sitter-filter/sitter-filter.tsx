import React from 'react';
import { ContentCard } from '@/shared/ui/content-card';
import { SitterFilterForm } from '@/entities/sitter/forms/sitter-filter-form';
import type { SitterFilterProps } from './types';

export const SitterFilter: React.FC<SitterFilterProps> = ({ onSubmit }) => {
    return (
        <ContentCard title="Поиск ситтера">
            <SitterFilterForm onSubmit={onSubmit} />
        </ContentCard>
    );
};
