import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { DateTime } from 'luxon';
import { useParams, useSearchParams } from 'react-router-dom';
import { Loader } from '@/shared/ui/loader';
import { ContentCard } from '@/shared/ui/content-card';
import { useGetUserByQuery } from '@/entities/user/api/get-user-by-id.query';
import { UserBookingForm } from '@/entities/user/forms/user-booking-form';
import type { UserBookingFormData } from '@/entities/user/forms/user-booking-form/types';

export const Booking: React.FC = () => {
    const [searchParams] = useSearchParams();

    const { sitterId } = useParams();

    const { data, isLoading } = useGetUserByQuery(sitterId);

    if (isLoading) {
        return <Loader />;
    }

    if (!data) {
        return null;
    }

    const onSubmit = (data: UserBookingFormData) => {
        console.log('data', data);
    };

    const petsOptions = (data.pets ?? []).map((pet) => ({
        id: pet._id,
        name: pet.name ?? '',
    }));

    return (
        <Box p={0.5}>
            <Stack spacing={0.5}>
                <ContentCard title={`Забронировать место у ${data.name}`}>
                    <UserBookingForm
                        onSubmit={onSubmit}
                        petsOptions={petsOptions}
                        defaultValues={{
                            date: [
                                DateTime.fromISO(searchParams.get('start') ?? ''),
                                DateTime.fromISO(searchParams.get('end') ?? ''),
                            ],
                        }}
                    />
                </ContentCard>
            </Stack>
        </Box>
    );
};
