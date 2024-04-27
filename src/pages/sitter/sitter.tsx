import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { UserProfile } from '@/features/user/user-profile';
import { SitterAboutMe } from '@/features/sitter/sitter-about-me';
import { SitterBooking } from '@/features/sitter/sitter-booking';
import { useGetUserByQuery } from '@/entities/user/api/get-user-by-id.query';
import { Loader } from '@/shared/ui/loader/loader';
import { useParams } from 'react-router-dom';
import { TariffBox } from '@/features/tariff/tariff-box/tariff-box';
import { mapTariffToTariffFormData } from '@/entities/tariff/mappers/tariff-tariff-form';

export const Sitter: React.FC = () => {
    const { sitterId } = useParams();

    const { data, isLoading } = useGetUserByQuery(sitterId);

    if (isLoading) {
        return <Loader />;
    }

    if (!data) {
        return null;
    }

    return (
        <Box p={0.5}>
            <Stack spacing={0.5}>
                <UserProfile user={data} />

                <TariffBox value={data.tariff?.map(mapTariffToTariffFormData) ?? []} />

                <SitterAboutMe />
                <SitterBooking />
            </Stack>
        </Box>
    );
};
