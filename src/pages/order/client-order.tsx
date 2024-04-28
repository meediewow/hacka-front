import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import { useParams } from 'react-router-dom';
import { Loader } from '@/shared/ui/loader';
import { useGetOrderQuery } from '@/entities/orders/api/get-order.query';
import { mapUserApiModelToUser } from '@/entities/user/mappers/user-api-model-to-user';
import { UserProfile } from '@/features/user/user-profile';
import Typography from '@mui/material/Typography';
import { SitterAboutMe } from '@/features/sitter/sitter-about-me';
import { OrderStatus } from '@/entities/orders/enum';
import Button from '@mui/material/Button';

export const ClientOrder: React.FC = () => {
    const { orderId } = useParams();

    const { data: order, isLoading } = useGetOrderQuery('client', orderId);

    const user = React.useMemo(
        () => (order?.sitter ? mapUserApiModelToUser(order?.sitter) : null),
        [order]
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
                <UserProfile user={user} />

                <Typography variant="h6">Ваш заказ у ситтера</Typography>

                <SitterAboutMe user={user} />

                <Typography variant="h3" textAlign="center">
                    Финальная стоимость заказа: {order.price ?? 0} EUR
                </Typography>

                <Typography
                    variant="caption"
                    color={order.isPayed ? 'success' : 'error'}
                    textAlign="center"
                >
                    {order.isPayed ? 'Заказ оплачен' : 'Заказ не оплачен'}
                </Typography>

                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    {status === OrderStatus.Confirmed && !order.isPayed && (
                        <Button variant="contained">Оплатить</Button>
                    )}

                    {status === OrderStatus.New && (
                        <Button variant="contained" color="error">
                            Отменить
                        </Button>
                    )}
                </Stack>
            </Stack>
        </Box>
    );
};
