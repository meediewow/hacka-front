import React from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import { Loader } from '@/shared/ui/loader';

import { OrderStatus } from '@/entities/orders/enum';
import { enqueueSnackbar } from 'notistack';
import { useChangeClientStatusMutation } from '@/entities/orders/api/change-client-status.mutation';

export const ProceedOrder: React.FC = () => {
    const { orderId } = useParams();

    const { mutateAsync } = useChangeClientStatusMutation();

    const navigate = useNavigate();

    React.useEffect(() => {
        (async () => {
            try {
                await mutateAsync({
                    orderId: orderId as string,
                    status: OrderStatus.Confirmed,
                });

                navigate('/profile');

                enqueueSnackbar('Статус изменено успешно. Заказ принят в исполнение', {
                    variant: 'success',
                });
            } catch (error) {
                enqueueSnackbar((error as { message: string }).message, {
                    variant: 'error',
                });
            }
        })();
    }, [mutateAsync, navigate, orderId]);

    return <Loader />;
};
