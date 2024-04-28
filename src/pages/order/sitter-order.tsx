import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import { useParams } from 'react-router-dom';
import { Loader } from '@/shared/ui/loader';
import { useGetOrderQuery } from '@/entities/orders/api/get-order.query';
import { mapUserApiModelToUser } from '@/entities/user/mappers/user-api-model-to-user';
import { UserProfile } from '@/features/user/user-profile';
import Typography from '@mui/material/Typography';

import Chip from '@mui/material/Chip';
import { ContentCard } from '@/shared/ui/content-card';
import {
    getOrderStatusMapLabel,
    getOrderStatusSeverity,
} from '@/entities/orders/utils/order-status';
import { OrderStatus } from '@/entities/orders/enum';
import { DateTime } from 'luxon';
import { SitterAboutMe } from '@/features/sitter/sitter-about-me';
import Button from '@mui/material/Button';
import { PetsBox } from '@/features/pet/pets-box/pets-box';
import { mapPetToPetFormData } from '@/entities/pet/mappers/pet-pet-form';
import { useChangeStatusMutation } from '@/entities/orders/api/change-status.mutation';
import { enqueueSnackbar } from 'notistack';
import { useQueryClient } from '@tanstack/react-query';

export const SitterOrder: React.FC = () => {
    const { orderId } = useParams();
    const client = useQueryClient();

    const { data: order, isLoading } = useGetOrderQuery('sitter', orderId);

    const user = React.useMemo(
        () => (order?.client ? mapUserApiModelToUser(order?.client) : null),
        [order]
    );

    const { mutateAsync, isPending } = useChangeStatusMutation();

    const updateStatus = React.useCallback(
        async (newStatus: OrderStatus) => {
            try {
                await mutateAsync({ orderId: orderId as string, status: newStatus });

                enqueueSnackbar('Статус изменено успешно', { variant: 'success' });

                client.invalidateQueries({ queryKey: ['sitter-order', orderId] });
                client.refetchQueries({ queryKey: ['sitter-order', orderId] });
            } catch (error) {
                enqueueSnackbar((error as { message: string }).message, {
                    variant: 'error',
                });
            }
        },
        [client, mutateAsync, orderId]
    );

    if (isLoading) {
        return <Loader />;
    }

    if (!order || !user) {
        return null;
    }

    const status = order.status as OrderStatus;

    return (
        <Box p={0.5}>
            <Stack spacing={0.5}>
                <ContentCard
                    title="Заказ на передержку"
                    titleAdornment={
                        <Chip
                            size="small"
                            variant="filled"
                            color={getOrderStatusSeverity(status)}
                            label={getOrderStatusMapLabel(status)}
                        />
                    }
                >
                    <Typography variant="body2" color="text.secondary">
                        {DateTime.fromISO(order.startAt as string).toFormat('dd.MM.yyyy')}
                        {' - '}
                        {DateTime.fromISO(order.finishAt as string).toFormat(
                            'dd.MM.yyyy'
                        )}
                    </Typography>
                </ContentCard>

                <UserProfile user={user} />

                <SitterAboutMe user={user} />

                <ContentCard title="Стоимость заказа">
                    <Typography variant="h3" textAlign="center">
                        {Math.round(order.price ?? 0)} EUR
                    </Typography>

                    <Typography
                        variant="caption"
                        textAlign="center"
                        color={order.isPayed ? 'success' : 'error'}
                    >
                        {order.isPayed ? 'Заказ оплачен' : 'Заказ не оплачен'}
                    </Typography>
                </ContentCard>

                <ContentCard title="Действия с заказом">
                    <Stack direction="row" alignItems="center" gap={1}>
                        {status === OrderStatus.New && (
                            <>
                                <Button
                                    disabled={isPending}
                                    onClick={() => updateStatus(OrderStatus.Confirmed)}
                                    variant="contained"
                                >
                                    Подтвердить
                                </Button>

                                <Button
                                    disabled={isPending}
                                    onClick={() => updateStatus(OrderStatus.Canceled)}
                                    variant="contained"
                                >
                                    Отменить
                                </Button>
                            </>
                        )}
                    </Stack>
                </ContentCard>

                <PetsBox value={user.pets?.map(mapPetToPetFormData) ?? []} />
            </Stack>
        </Box>
    );
};
