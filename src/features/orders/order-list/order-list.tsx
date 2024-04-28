import { useGetOrdersQuery } from '@/entities/orders/api/get-orders.order';
import { AuthLevel } from '@/entities/user/types';
import { ContentCard } from '@/shared/ui/content-card';
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
import { OrderItem } from '../order-item/order-item';

type Props = {
    role: AuthLevel;
};

export const OrderList: React.FC<Props> = ({ role }) => {
    const { data, isLoading } = useGetOrdersQuery(role);

    if (isLoading) {
        return (
            <Stack
                direction="row"
                spacing={2}
                p={1}
                alignItems="center"
                justifyContent="center"
            >
                <CircularProgress />
            </Stack>
        );
    }

    if (!data) {
        return null;
    }

    return (
        <ContentCard title={role === 'sitter' ? 'Заказы мне' : 'Мои заявки'}>
            {data.map((order) => (
                <OrderItem order={order} role={role} key={order._id} />
            ))}
        </ContentCard>
    );
};
