import React from 'react';
import { ContentCard } from '@/shared/ui/content-card';
import { SitterFilterForm } from '@/entities/sitter/forms/sitter-filter-form';
import type { SitterFilterFormData } from '@/entities/sitter/forms/sitter-filter-form/types';
import type { SitterFilterProps } from './types';

export const SitterFilter: React.FC<SitterFilterProps> = () => {
    const onSubmit = (data: SitterFilterFormData) => {
        console.log('data', data);
    };

    return (
        <ContentCard title="Поиск ситтера">
            <SitterFilterForm onSubmit={onSubmit} />
        </ContentCard>
    );
};
