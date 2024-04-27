import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { Accessory } from '@/shared/ui/accessory';
import { ContentCard } from '@/shared/ui/content-card';
import type { SitterProfileProps } from './types';

export const SitterProfile: React.FC<SitterProfileProps> = () => {
    return (
        <ContentCard>
            <Stack spacing={1}>
                <Box display="flex" alignItems="center" justifyContent="center">
                    <Avatar
                        src="https://mui.com/static/images/avatar/1.jpg"
                        alt=""
                        sx={{ width: 128, height: 128 }}
                    />
                </Box>
                <Box display="flex" flexDirection="column" alignItems="center">
                    <Typography variant="h6">Наталья Александрова</Typography>
                    <Typography color="text.secondary">
                        Agiou Spiridonos 68, Limassol 3025
                    </Typography>
                </Box>
                <Box
                    display="flex"
                    gap={0.75}
                    alignItems="center"
                    justifyContent="center"
                >
                    <Box display="flex" gap={0.5} alignItems="center">
                        <Rating defaultValue={1} max={1} size="small" readOnly />
                        <Typography>4,9</Typography>
                    </Box>
                    <Accessory />
                    <Typography color="success.main">29 повторных заказов</Typography>
                </Box>
            </Stack>
        </ContentCard>
    );
};
