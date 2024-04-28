import { OrderAM } from '@/entities/orders/types';
import { AuthLevel } from '@/entities/user/types';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

type Props = {
    role: AuthLevel;
    order: OrderAM;
};

export const OrderItem: React.FC<Props> = ({ order, role }) => {
    const user = role === 'sitter' ? order.client : order.sitter;

    return (
        <Box display="grid" gridTemplateColumns="auto 1fr" gap={0.5}>
            <Avatar src={user?.profile?.photo} alt={user?.profile?.name} />

            <Stack spacing={0.5}>
                {/* <Box display="flex" flexDirection="column">
                    <Box display="flex" alignItems="center" gap={1}>
                        <Typography variant="h6">{review.name}</Typography>

                        <Typography variant="body2" color="text.secondary">
                            {review.date}
                        </Typography>
                    </Box>
                    <Rating defaultValue={review.rate} max={5} size="small" readOnly />
                </Box> */}

                <Typography variant="body2"></Typography>
            </Stack>
        </Box>
    );
};
