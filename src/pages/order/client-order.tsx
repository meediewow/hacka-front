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
import { TariffBox } from '@/features/tariff/tariff-box/tariff-box';
import { mapTariffToTariffFormData } from '@/entities/tariff/mappers/tariff-tariff-form';
import { UserReviews } from '@/features/user/user-reviews';
import { ContentCard } from '@/shared/ui/content-card';
import { CreateRateBox } from '@/features/rate/create-rate-box/create-rate-box';
import Chip from '@mui/material/Chip';
import {
    getOrderStatusMapLabel,
    getOrderStatusSeverity,
} from '@/entities/orders/utils/order-status';

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
                <ContentCard
                    title="Ваш заказ"
                    titleAdornment={
                        <Chip
                            size="small"
                            variant="filled"
                            color={getOrderStatusSeverity(status)}
                            label={getOrderStatusMapLabel(status)}
                        />
                    }
                />

                <UserProfile user={user} />

                <SitterAboutMe user={user} />

                <ContentCard title="Стоимость заказа">
                    <Typography variant="h3" textAlign="center">
                        {order.price ?? 0} EUR
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
                    <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                    >
                        {status === OrderStatus.Confirmed && !order.isPayed && (
                            <Button variant="contained">Оплатить</Button>
                        )}

                        {status === OrderStatus.New && (
                            <Button variant="contained">Отменить</Button>
                        )}
                    </Stack>
                </ContentCard>

                <TariffBox value={user.tariff?.map(mapTariffToTariffFormData) ?? []} />

                <UserReviews rate={user.rating} targetId={order?.sitter?._id} />

                {status === OrderStatus.Completed && (
                    <ContentCard title="Оставить отзыв">
                        <CreateRateBox userId={order?.sitter?._id as string} />
                    </ContentCard>
                )}
            </Stack>
        </Box>
    );
};
