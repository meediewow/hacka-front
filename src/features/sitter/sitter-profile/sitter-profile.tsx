import React from 'react';
import Avatar from '@mui/material/Avatar';
import { ContentCard } from '@/shared/ui/content-card';
import type { SitterProfileProps } from './types';
import Box from '@mui/material/Box';

export const SitterProfile: React.FC<SitterProfileProps> = () => {
    return (
        <ContentCard>
            <Box display="flex" flexDirection="column">
                <Avatar
                    src="https://mui.com/static/images/avatar/1.jpg"
                    alt=""
                    sx={{ width: 128, height: 128 }}
                />
            </Box>
        </ContentCard>
    );
};
