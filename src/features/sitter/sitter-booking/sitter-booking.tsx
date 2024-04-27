import React from 'react';
import { ContentCard } from '@/shared/ui/content-card';
import { SitterBookingForm } from '@/entities/sitter/forms/sitter-booking-form';
import type { SitterBookingFormData } from '@/entities/sitter/forms/sitter-booking-form/types';
import type { SitterBookingProps } from './types';

export const SitterBooking: React.FC<SitterBookingProps> = () => {
    const onSubmit = (data: SitterBookingFormData) => {
        console.log('data', data);
    };

    return (
        <ContentCard title="Бронирование">
            <SitterBookingForm onSubmit={onSubmit} />
        </ContentCard>
    );
};
