import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { Accessory } from '@/shared/ui/accessory';
import type { SitterCardProps } from './types';

export const SitterCard: React.FC<SitterCardProps> = () => {
    return (
        <Box display="grid" gridTemplateColumns="auto 1fr" gap={0.5}>
            <Avatar src="https://mui.com/static/images/avatar/1.jpg" alt="" />
            <Stack spacing={0.5}>
                <Box display="grid" gridTemplateColumns="1fr auto" gap={0.5}>
                    <Stack spacing={0.25} overflow="auto">
                        <Typography>Наталья Александрова</Typography>
                        <Typography
                            color="text.secondary"
                            overflow="hidden"
                            whiteSpace="nowrap"
                            textOverflow="ellipsis"
                        >
                            Agiou Spiridonos 68, Limassol 3025 Agiou Spiridonos 68,
                            Limassol 3025
                        </Typography>
                    </Stack>
                    <Box>
                        <Typography variant="button" whiteSpace="nowrap">
                            25,00 EUR
                        </Typography>
                        <Typography textAlign="right" color="text.secondary">
                            за сутки
                        </Typography>
                    </Box>
                </Box>
                <Box display="flex" gap={0.75} alignItems="center">
                    <Box display="flex" gap={0.5} alignItems="center">
                        <Rating defaultValue={1} max={1} size="small" readOnly />
                        <Typography>4,9</Typography>
                    </Box>
                    <Accessory />
                    <Typography color="success.main">29 повторных заказов</Typography>
                </Box>
            </Stack>
        </Box>
    );
};
