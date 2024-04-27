import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
import { Link } from 'react-router-dom';
import { Accessory } from '@/shared/ui/accessory';
import type { SitterCardProps } from './types';

export const SitterCard: React.FC<SitterCardProps> = ({ sitter }) => {
    return (
        <MuiLink
            component={Link}
            to={`/sitter/${sitter._id}`}
            sx={{ color: 'unset', textDecoration: 'none' }}
        >
            <Box display="grid" gridTemplateColumns="auto 1fr" gap={0.5}>
                <Avatar src={sitter.photo} alt={sitter.name} />
                <Stack spacing={0.5}>
                    <Box display="grid" gridTemplateColumns="1fr auto" gap={0.5}>
                        <Stack spacing={0.25} overflow="auto">
                            <Typography>
                                {sitter.name || 'Наталья Александрова'}
                            </Typography>
                            <Typography
                                color="text.secondary"
                                overflow="hidden"
                                whiteSpace="nowrap"
                                textOverflow="ellipsis"
                            >
                                {sitter.address || 'Agiou Spiridonos 68, Limassol 3025'}
                            </Typography>
                        </Stack>
                        {sitter.price && (
                            <Box>
                                <Typography variant="button" whiteSpace="nowrap">
                                    {sitter.price} EUR
                                </Typography>
                                <Typography textAlign="right" color="text.secondary">
                                    за сутки
                                </Typography>
                            </Box>
                        )}
                    </Box>
                    <Box display="flex" gap={0.75} alignItems="center">
                        <Box display="flex" gap={0.5} alignItems="center">
                            <Rating defaultValue={1} max={1} size="small" readOnly />
                            <Typography>{sitter.rating || '4,9'}</Typography>
                        </Box>
                        <Accessory />
                        <Typography color="success.main">
                            {sitter.countOrders} повторных заказов
                        </Typography>
                    </Box>
                </Stack>
            </Box>
        </MuiLink>
    );
};
