import React from 'react';
import Box from '@mui/material/Box';
import { api } from '@/shared/api';
import { SitterList } from '@/features/sitter/sitter-list';

export const Home: React.FC = () => {
    React.useEffect(() => {
        void testRequest();
    }, []);

    return (
        <Box height={2000}>
            <SitterList />
        </Box>
    );
};

const testRequest = async () => {
    const response = await api.get('/dev/ping');

    console.log(response.data);

    return response.data;
};
