import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useParams } from 'react-router-dom';
import { Loader } from '@/shared/ui/loader';
import { useGetUserByQuery } from '@/entities/user/api/get-user-by-id.query';

export const Booking: React.FC = () => {
    const { sitterId } = useParams();

    const { data, isLoading } = useGetUserByQuery(sitterId);

    if (isLoading) {
        return <Loader />;
    }

    if (!data) {
        return null;
    }

    console.log('data', data);

    return (
        <Box p={0.5}>
            <Stack spacing={0.5}></Stack>
        </Box>
    );
};
