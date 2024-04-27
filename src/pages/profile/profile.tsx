import React from 'react';
import Stack from '@mui/material/Stack';
import { useUser } from '@/features/auth';
import { UserProfile } from '@/features/user/user-profile';
import { TariffBox } from '@/features/tariff/tariff-box/tariff-box';
import { mapTariffToTariffFormData } from '@/entities/tariff/mappers/tariff-tariff-form';

export const ProfilePage: React.FC = () => {
    const user = useUser();

    if (!user) {
        return null;
    }

    return (
        <Stack width="100%" p={2} justifyContent="center" gap={0.5}>
            <UserProfile user={user} />

            {user.isSitter && (
                <TariffBox value={user.tariff?.map(mapTariffToTariffFormData) ?? []} />
            )}
        </Stack>
    );
};
