import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ContentCard } from '@/shared/ui/content-card';
import { SitterBookingForm } from '@/entities/sitter/forms/sitter-booking-form';
import type { SitterBookingFormData } from '@/entities/sitter/forms/sitter-booking-form/types';
import type { SitterBookingProps } from './types';

export const SitterBooking: React.FC<SitterBookingProps> = ({ sitterId }) => {
    const navigate = useNavigate();

    const onSubmit = (data: SitterBookingFormData) => {
        console.log('data', data);

        const start = data.date?.[0]?.toISO();
        const end = data.date?.[1]?.toISO();

        navigate({
            pathname: `/booking/${sitterId}`,
            search: `?start=${start}&end=${end}`,
        });
    };

    return (
        <ContentCard title="Бронирование">
            <SitterBookingForm onSubmit={onSubmit} />
        </ContentCard>
    );
};
