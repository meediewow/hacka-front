import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import { useParams } from 'react-router-dom';
import { Loader } from '@/shared/ui/loader';
import { useGetOrderQuery } from '@/entities/orders/api/get-order.order';
import { mapUserApiModelToUser } from '@/entities/user/mappers/user-api-model-to-user';
import { UserProfile } from '@/features/user/user-profile';
import Typography from '@mui/material/Typography';

export const SitterOrder: React.FC = () => {
    const { orderId } = useParams();

    const { data, isLoading } = useGetOrderQuery('sitter', orderId);

    const user = React.useMemo(
        () => (data?.client ? mapUserApiModelToUser(data?.client) : null),
        [data]
    );

    if (isLoading) {
        return <Loader />;
    }

    if (!data || !user) {
        return null;
    }

    return (
        <Box p={0.5}>
            <Stack spacing={0.5}>
                <UserProfile user={user} />

                <Typography variant="h6">Заказ на передержку</Typography>
            </Stack>
        </Box>
    );
};
