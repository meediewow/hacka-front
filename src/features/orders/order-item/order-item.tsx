import { OrderStatus } from '@/entities/orders/enum';
import { OrderAM } from '@/entities/orders/types';
import {
    getOrderStatusMapLabel,
    getOrderStatusSeverity,
} from '@/entities/orders/utils/order-status';
import { AuthLevel } from '@/entities/user/types';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { DateTime } from 'luxon';
import { Link } from 'react-router-dom';

type Props = {
    role: AuthLevel;
    order: OrderAM;
};

export const OrderItem: React.FC<Props> = ({ order, role }) => {
    const user = role === 'sitter' ? order.client : order.sitter;

    const status = order.status as OrderStatus;

    return (
        <Box
            display="grid"
            gridTemplateColumns="auto 1fr"
            gap={0.5}
            component={Link}
            to={`/order/${role === 'sitter' ? 'sitter' : 'client'}/${order._id}`}
            sx={{
                textDecoration: 'none',
                color: 'unset',
            }}
        >
            <Avatar src={user?.profile?.photo} alt={user?.profile?.name} />

            <Stack spacing={0.5}>
                <Box display="flex" flexDirection="column">
                    <Box display="flex" alignItems="center" gap={1}>
                        <Typography variant="body2">{user?.profile?.name}</Typography>

                        <Typography variant="body2" color="text.secondary">
                            {DateTime.fromISO(order.startAt as string).toFormat(
                                'dd.MM.yyyy'
                            )}
                            {' - '}
                            {DateTime.fromISO(order.finishAt as string).toFormat(
                                'dd.MM.yyyy'
                            )}
                        </Typography>
                    </Box>
                </Box>

                <Box>
                    <Chip
                        size="small"
                        variant="filled"
                        color={getOrderStatusSeverity(status)}
                        label={getOrderStatusMapLabel(status)}
                    />
                </Box>
            </Stack>
        </Box>
    );
};
