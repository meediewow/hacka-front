import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { enqueueSnackbar } from 'notistack';
import { DateTime } from 'luxon';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useUser } from '@/features/auth';
import { Loader } from '@/shared/ui/loader';
import { ContentCard } from '@/shared/ui/content-card';
import { dataToVariables } from '@/entities/orders/utils/data-to-variables';
import { useGetUserByQuery } from '@/entities/user/api/get-user-by-id.query';
import { UserBookingForm } from '@/entities/user/forms/user-booking-form';
import { useCreateOrderMutation } from '@/entities/orders/api/create-order.mutation';
import type { UserBookingFormData } from '@/entities/user/forms/user-booking-form/types';

export const Booking: React.FC = () => {
    const [searchParams] = useSearchParams();
    const { sitterId } = useParams();
    const { data, isLoading } = useGetUserByQuery(sitterId);
    const user = useUser();
    const navigate = useNavigate();
    const mutation = useCreateOrderMutation();

    if (isLoading) {
        return <Loader />;
    }

    if (!data) {
        return null;
    }

    const onSubmit = async (formData: UserBookingFormData) => {
        try {
            const { _id: orderId } = await mutation.mutateAsync(
                dataToVariables(sitterId as string, formData)
            );

            enqueueSnackbar('Заказ успешно создан', { variant: 'success' });

            navigate(`/order/client/${orderId}`);
        } catch (error) {
            const message = (error as { message: string })?.message;

            enqueueSnackbar(message, { variant: 'error' });
        }
    };

    const petsOptions = (user?.pets ?? []).map((pet) => ({
        id: pet._id,
        name: pet.name ?? '',
    }));

    return (
        <Box p={1}>
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
