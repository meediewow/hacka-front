import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useMutation } from '@tanstack/react-query';
import { SitterList } from '@/features/sitter/sitter-list';
import { SitterFilter } from '@/features/sitter/sitter-filter';
import { getSitters } from '@/entities/sitter/api/get-sitters';

export const Home: React.FC = () => {
    const mutation = useMutation({
        mutationKey: ['sitters'],
        mutationFn: getSitters,
    });

    React.useEffect(() => {
        mutation.mutate();
    }, []);

    const onSubmit = async () => {
        console.log('onSubmit');

        await mutation.mutateAsync();
    };

    return (
        <Box p={0.5}>
            <Stack spacing={0.5}>
                <SitterFilter onSubmit={onSubmit} />
                <SitterList items={mutation.data?.data?.list ?? []} />
            </Stack>
        </Box>
    );
};
