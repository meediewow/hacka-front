import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useMutation } from '@tanstack/react-query';
import { SitterList } from '@/features/sitter/sitter-list';
import { SitterFilter } from '@/features/sitter/sitter-filter';
import { getSitters } from '@/entities/sitter/api/get-sitters';
import {
    dataToVariables,
    defaultCategories,
} from '@/entities/sitter/utils/data-to-variables';
import type { SitterFilterFormData } from '@/entities/sitter/forms/sitter-filter-form/types';

export const Home: React.FC = () => {
    const mutation = useMutation({
        mutationKey: ['sitters'],
        mutationFn: getSitters,
    });

    React.useEffect(() => {
        mutation.mutate({
            category: defaultCategories,
        });
    }, []);

    const onSubmit = async (data: SitterFilterFormData) => {
        await mutation.mutateAsync(dataToVariables(data));
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
