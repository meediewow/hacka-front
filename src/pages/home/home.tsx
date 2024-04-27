import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { api } from '@/shared/api';
import { SitterList } from '@/features/sitter/sitter-list';
import { SitterFilter } from '@/features/sitter/sitter-filter';

export const Home: React.FC = () => {
    React.useEffect(() => {
        void testRequest();
    }, []);

    return (
        <Box height={2000} p={0.5}>
            <Stack spacing={0.5}>
                <SitterFilter />
                <SitterList />
            </Stack>
        </Box>
    );
};

const testRequest = async () => {
    const response = await api.get('/dev/ping');

    console.log(response.data);

    return response.data;
};
