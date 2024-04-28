import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useMutation } from '@tanstack/react-query';
import { SitterList } from '@/features/sitter/sitter-list';
import { SitterFilter } from '@/features/sitter/sitter-filter';
import { getSitters } from '@/entities/sitter/api/get-sitters';
import { PetType } from '@/entities/pet/enum';
import type { SitterFilterFormData } from '@/entities/sitter/forms/sitter-filter-form/types';

const defaultCategories = [
    PetType.Dog,
    PetType.SmallDog,
    PetType.Cat,
    PetType.SmallPet,
    PetType.Exotic,
    PetType.Bird,
];

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
        const start = data.date?.[0]?.toISO();
        const end = data.date?.[1]?.toISO();
        const categories =
            data.categories.length == 0
                ? defaultCategories
                : data.categories.map((category) => category.id);

        await mutation.mutateAsync({
            category: categories,
            period: start && end ? { start, end } : undefined,
        });
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
