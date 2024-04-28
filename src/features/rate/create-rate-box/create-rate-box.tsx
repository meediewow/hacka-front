import React from 'react';
import { useAddRateMutation } from '@/entities/rate/api/add-rate.mutation';
import { RateForm, RateFormData } from '@/entities/rate/forms/rate-form';
import { useQueryClient } from '@tanstack/react-query';
import { enqueueSnackbar } from 'notistack';

type Props = {
    userId: string;
};

export const CreateRateBox: React.FC<Props> = ({ userId }) => {
    const { mutateAsync } = useAddRateMutation();
    const client = useQueryClient();

    const addRate = async (data: RateFormData) => {
        try {
            await mutateAsync({
                targetId: userId,
                rate: data.rate,
                text: data.comment,
            });

            enqueueSnackbar('Отзыв оставлен успешно', { variant: 'success' });

            void client.invalidateQueries({ queryKey: ['userReviews', userId] });
            void client.refetchQueries({ queryKey: ['userReviews', userId] });
        } catch (error) {
            enqueueSnackbar((error as { message: string }).message, { variant: 'error' });
        }
    };

    return <RateForm onSubmit={addRate} />;
};
