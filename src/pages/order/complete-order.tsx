import React from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import { Loader } from '@/shared/ui/loader';

import { OrderStatus } from '@/entities/orders/enum';
import { enqueueSnackbar } from 'notistack';
import { useChangeClientStatusMutation } from '@/entities/orders/api/change-client-status.mutation';

export const CompleteOrder: React.FC = () => {
    const { orderId } = useParams();

    const { mutateAsync } = useChangeClientStatusMutation();

    const navigate = useNavigate();

    React.useEffect(() => {
        (async () => {
            try {
                await mutateAsync({
                    orderId: orderId as string,
                    status: OrderStatus.Completed,
                });

                navigate('/profile');

                enqueueSnackbar('Статус изменено успешно. Заказ завершен', {
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
