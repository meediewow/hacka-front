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

import QRCode from 'qrcode';

const getCode = async (url: string) => {
    return await QRCode.toDataURL(url);
};

export const SitterOrder: React.FC = () => {
    const { orderId } = useParams();
    const client = useQueryClient();

    const [codeUrl, setCodeUrl] = React.useState<string>('');

    const { data: order, isLoading } = useGetOrderQuery('sitter', orderId);

    const user = React.useMemo(
        () => (order?.client ? mapUserApiModelToUser(order?.client) : null),
        [order]
    );

    const status = order?.status as OrderStatus;

    const { mutateAsync, isPending } = useChangeStatusMutation();

    React.useEffect(() => {
        if (orderId) {
            let url = '';

            if (status === OrderStatus.Confirmed) {
                url = `https://hacka-front-f42e31383e86.herokuapp.com/order/proceed/${orderId}`;
            } else if (status === OrderStatus.Progress) {
                url = `https://hacka-front-f42e31383e86.herokuapp.com/order/complete/${orderId}`;
            }

            if (url) {
                getCode(
                    `https://hacka-front-f42e31383e86.herokuapp.com/order/proceed/${orderId}`
                ).then((url) => {
                    setCodeUrl(url);
                });
            }
        }
    }, [orderId, status]);

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

    return (
        <Box p={1}>
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

                        {codeUrl && (
                            <Box>
                                <Typography variant="caption">
                                    QR-код для заказа, покажите его клиенту, после
                                    сканирования статус заказа будет изменен автоматически
                                </Typography>

                                <img src={codeUrl} alt="QR" />
                            </Box>
                        )}
                    </Stack>
                </ContentCard>

                <PetsBox value={user.pets?.map(mapPetToPetFormData) ?? []} />
            </Stack>
        </Box>
    );
};
