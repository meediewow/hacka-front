import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Accessory } from '@/shared/ui/accessory';
import { ViewRating } from '@/shared/ui/view-rating';
import { ContentCard } from '@/shared/ui/content-card';
import type { UserProfileProps } from './types';

export const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
    return (
        <ContentCard>
            <Stack spacing={1}>
                <Box display="flex" alignItems="center" justifyContent="center">
                    <Avatar src={user.phone} alt="" sx={{ width: 128, height: 128 }} />
                </Box>

                <Box display="flex" flexDirection="column" alignItems="center">
                    <Typography variant="h6">{user.name}</Typography>

                    <Typography color="text.secondary">{user.address}</Typography>
                </Box>

                <Box
                    display="flex"
                    gap={0.75}
                    alignItems="center"
                    justifyContent="center"
                >
                    {Boolean(user.rating) && (
                        <>
                            <ViewRating rating={user.rating ?? 0} />

                            <Accessory />
                        </>
                    )}

                    <Typography color="success.main">
                        {user.countOrders
                            ? `Заказов: ${user.countOrders ?? 0}`
                            : 'Нет заказов'}
                    </Typography>
                </Box>
            </Stack>
        </ContentCard>
    );
};
